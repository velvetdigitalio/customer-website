import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  leadEmailHtml,
  leadEmailText,
  type LeadPayload,
} from "@/lib/contact-email";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;

interface ContactBody {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  budget?: unknown;
  services?: unknown;
  message?: unknown;
  source?: unknown;
  // honeypot — bots fill any text input they see
  website?: unknown;
}

function asString(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter(Boolean);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendEmail(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Velvet Digital <onboarding@resend.dev>";
  const to = (process.env.CONTACT_TO_EMAIL || "hello@velvetdigital.io")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not configured — skipping email send",
    );
    return { skipped: true as const };
  }

  const resend = new Resend(apiKey);
  const subject = `New enquiry · ${lead.name || lead.email}${
    lead.company ? ` · ${lead.company}` : ""
  }`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject,
    html: leadEmailHtml(lead),
    text: leadEmailText(lead),
  });

  if (error) {
    console.error("[contact] resend error", error);
    return { ok: false as const, error };
  }
  return { ok: true as const };
}

async function appendToSheet(lead: LeadPayload) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) {
    console.warn(
      "[contact] GOOGLE_SHEET_WEBHOOK_URL not configured — skipping Sheet log",
    );
    return { skipped: true as const };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const secret = process.env.GOOGLE_SHEET_WEBHOOK_SECRET;
  // Apps Script cannot read custom headers, so we ALSO include the secret
  // in the body as __secret. The script verifies either.
  if (secret) headers["x-velvet-secret"] = secret;
  const payload = secret ? { ...lead, __secret: secret } : lead;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      // Google Apps Script can be slow on cold start
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) {
      console.error(
        "[contact] sheet webhook non-200",
        res.status,
        await res.text().catch(() => ""),
      );
      return { ok: false as const };
    }
    return { ok: true as const };
  } catch (err) {
    console.error("[contact] sheet webhook error", err);
    return { ok: false as const };
  }
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  const limit = rateLimit(`contact:${ip}`, {
    windowMs: RATE_WINDOW_MS,
    max: RATE_MAX,
  });

  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(
            (limit.resetAt - Date.now()) / 1000,
          ).toString(),
        },
      },
    );
  }

  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Honeypot: if the hidden field has any value, silently accept
  // (return 200) so bots don't learn they were filtered.
  const honeypot = asString(body.website);
  if (honeypot) {
    console.info("[contact] honeypot triggered, dropping", { ip });
    return NextResponse.json({ ok: true });
  }

  const lead: LeadPayload = {
    name: asString(body.name),
    email: asString(body.email),
    company: asString(body.company),
    budget: asString(body.budget),
    services: asStringArray(body.services),
    message: asString(body.message),
    source: asString(body.source) || "velvetdigital.io/contact",
    submittedAt: new Date().toISOString(),
  };

  if (!lead.email || !isValidEmail(lead.email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }
  if (!lead.message || lead.message.length < 4) {
    return NextResponse.json(
      { error: "Please tell us a little more about your brand." },
      { status: 400 },
    );
  }
  if (lead.message.length > 4_000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }

  const [emailResult, sheetResult] = await Promise.allSettled([
    sendEmail(lead),
    appendToSheet(lead),
  ]);

  const emailDelivered =
    emailResult.status === "fulfilled" &&
    "ok" in emailResult.value &&
    emailResult.value.ok === true;
  const emailSkipped =
    emailResult.status === "fulfilled" && "skipped" in emailResult.value;

  const sheetDelivered =
    sheetResult.status === "fulfilled" &&
    "ok" in sheetResult.value &&
    sheetResult.value.ok === true;
  const sheetSkipped =
    sheetResult.status === "fulfilled" && "skipped" in sheetResult.value;

  const anyDelivered = emailDelivered || sheetDelivered;
  const allSkipped = emailSkipped && sheetSkipped;

  // Production safety: if every channel is unconfigured, refuse the
  // submission so leads aren't silently dropped on a live site.
  if (allSkipped && process.env.NODE_ENV === "production") {
    console.error(
      "[contact] no delivery channels configured (RESEND_API_KEY and GOOGLE_SHEET_WEBHOOK_URL both empty)",
    );
    return NextResponse.json(
      {
        error:
          "Sorry — we couldn't deliver your message. Please email hello@velvetdigital.io directly.",
      },
      { status: 502 },
    );
  }

  // Both attempted and both failed -> hard error
  if (!anyDelivered && !allSkipped) {
    return NextResponse.json(
      {
        error:
          "Sorry — we couldn't deliver your message. Please email hello@velvetdigital.io directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    delivered: {
      email: emailDelivered,
      sheet: sheetDelivered,
    },
  });
}
