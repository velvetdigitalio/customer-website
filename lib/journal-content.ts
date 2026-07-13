import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { load as yamlLoad, FAILSAFE_SCHEMA } from "js-yaml";
import type { Faq } from "@/lib/schema";

/**
 * File-based journal pipeline. Drop an `.html` file into `content/journal/` and
 * it becomes a fully-branded, crawlable article — no code per post. Each file is:
 *
 *   ---                             ← frontmatter (drives SEO + layout)
 *   title: ...
 *   description: ...
 *   ---
 *   <h2>Your heading</h2>           ← body: a plain HTML fragment
 *   <p>Your words, an <a href="/services/">internal link</a>, an image:</p>
 *   <img src="/journal/<slug>/photo.jpg" alt="descriptive alt">
 *
 * These files are read at BUILD time (static export), so the output is plain
 * static HTML that Google crawls exactly like a hand-written page.
 */

const CONTENT_DIR = path.join(process.cwd(), "content/journal");

export type JournalMeta = {
  title: string;
  /** Meta description / OG description. Falls back to standfirst. */
  description: string;
  /** One-line summary shown under the headline. */
  standfirst: string;
  /** Human display date, e.g. "July 2026". */
  date: string;
  /** ISO date (YYYY-MM-DD) for schema + sitemap sorting. */
  isoDate: string;
  /** Optional hero image path under /public, e.g. "/journal/slug/hero.jpg". */
  hero?: string;
  heroAlt?: string;
  /** The money/service page this article supports (internal link + context). */
  pillar: string;
  pillarLabel: string;
  /** Small label above the headline. Defaults to "Guide". */
  eyebrow: string;
  /** Optional Q→A pairs, rendered visibly and mirrored into FAQPage schema. */
  faqs?: Faq[];
};

export type JournalEntry = { slug: string; meta: JournalMeta; html: string };

/**
 * Parse a `---`-delimited frontmatter block as proper YAML. The CMS (Decap)
 * writes real YAML — multi-line folded values, quoted/escaped strings — so we
 * parse with js-yaml rather than reading lines by hand. FAILSAFE_SCHEMA keeps
 * every value a string (so a bare date like 2026-07-08 stays "2026-07-08"
 * instead of becoming a Date). A malformed block logs a warning and yields no
 * metadata rather than crashing the whole static build.
 */
function parseFrontmatter(raw: string, label = "article"): {
  data: Record<string, unknown>;
  body: string;
} {
  const match = raw.match(/^﻿?---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  let data: Record<string, unknown> = {};
  try {
    const parsed = yamlLoad(match[1], { schema: FAILSAFE_SCHEMA });
    if (parsed && typeof parsed === "object") {
      data = parsed as Record<string, unknown>;
    }
  } catch (err) {
    console.warn(
      `[journal] Skipping invalid frontmatter in "${label}": ${(err as Error).message}`,
    );
  }
  return { data, body: match[2] ?? "" };
}

/** Frontmatter values are `unknown` since YAML can hold lists and maps too. */
function str(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

/**
 * Coerce a frontmatter `faqs:` list into Faq[], dropping any entry missing a
 * question or an answer. A half-written FAQ must never reach the schema: markup
 * that promises an answer the page does not show is exactly what earns a manual
 * action.
 */
function parseFaqs(value: unknown, label: string): Faq[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const faqs = value.flatMap((item) => {
    const q = str((item as Record<string, unknown>)?.q)?.trim();
    const a = str((item as Record<string, unknown>)?.a)?.trim();
    if (!q || !a) {
      console.warn(`[journal] Dropping incomplete FAQ entry in "${label}".`);
      return [];
    }
    return [{ q, a }];
  });
  return faqs.length ? faqs : undefined;
}

/**
 * Light hygiene on trusted author HTML: strip <script>/<style> blocks and inline
 * event handlers. The content is written by the site owner, not visitors, so
 * this is a guardrail against accidents, not a hostile-input sanitiser.
 */
function cleanHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
}

/**
 * Article files may be `.html` (raw HTML body) or `.md` (Markdown, used by the
 * CMS). Files whose name starts with `_` or is `README` are ignored, so notes
 * can live alongside articles without becoming pages.
 */
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-07-08" -> "July 2026". Returns "" if the input isn't a valid ISO date. */
function formatDisplayDate(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})/);
  if (!m) return "";
  const month = MONTHS[Number(m[2]) - 1];
  return month ? `${month} ${m[1]}` : "";
}

export function getJournalSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.(html|md)$/i.test(f))
    .filter((f) => !f.startsWith("_") && !/^readme\./i.test(f))
    .map((f) => f.replace(/\.(html|md)$/i, ""));
}

export function getJournalEntry(slug: string): JournalEntry | null {
  const mdFile = path.join(CONTENT_DIR, `${slug}.md`);
  const htmlFile = path.join(CONTENT_DIR, `${slug}.html`);
  const isMarkdown = fs.existsSync(mdFile);
  const file = isMarkdown ? mdFile : htmlFile;
  if (!fs.existsSync(file)) return null;

  const parsed = parseFrontmatter(fs.readFileSync(file, "utf8"), slug);
  const data = parsed.data;
  // Markdown files are rendered to HTML at build; .html files pass through.
  // marked.parse is synchronous by default, so the cast is safe.
  const body = isMarkdown
    ? (marked.parse(parsed.body) as string)
    : parsed.body;
  const isoDate = str(data.isoDate) ?? str(data.date) ?? "";
  const meta: JournalMeta = {
    title: str(data.title) ?? slug,
    description: str(data.description) ?? str(data.standfirst) ?? "",
    standfirst: str(data.standfirst) ?? str(data.description) ?? "",
    // Display date: use the given one, else derive "Month YYYY" from isoDate.
    date: str(data.date) || formatDisplayDate(isoDate),
    isoDate,
    hero: str(data.hero) || undefined,
    heroAlt: str(data.heroAlt) || str(data.title) || undefined,
    pillar: str(data.pillar) ?? "/journal/",
    pillarLabel: str(data.pillarLabel) ?? "Back to journal",
    eyebrow: str(data.eyebrow) || "Guide",
    faqs: parseFaqs(data.faqs, slug),
  };
  return { slug, meta, html: cleanHtml(body).trim() };
}

/** All content-file entries, newest first. Used by the index and sitemap. */
export function getAllJournalEntries(): JournalEntry[] {
  return getJournalSlugs()
    .map(getJournalEntry)
    .filter((e): e is JournalEntry => e !== null)
    .sort((a, b) => b.meta.isoDate.localeCompare(a.meta.isoDate));
}
