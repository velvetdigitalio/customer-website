"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Check, Loader2, Send } from "lucide-react";
import { CalendlyInline } from "@/components/ui/CalendlyInline";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { cn } from "@/lib/cn";

const easeOut = [0.22, 1, 0.36, 1] as const;

const budgets = ["< $5k / month", "$5k – $15k", "$15k – $40k", "$40k+", "Project-based"];
const services = [
  "Content & Branding",
  "Performance Marketing",
  "SEO + GEO",
  "AI Automation",
];
const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
const contactEndpointMode = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT_MODE;

type Tab = "call" | "message";
type ContactPayload = {
  name: string;
  email: string;
  company: string;
  budget: string;
  services: string[];
  message: string;
  website: string;
  source: string;
  submittedAt: string;
};

function formString(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function buildMailto(payload: ContactPayload) {
  const subject = `New enquiry from ${payload.name || payload.email}`;
  const body = [
    `Name: ${payload.name || "-"}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "-"}`,
    `Budget: ${payload.budget || "-"}`,
    `Services: ${payload.services.length ? payload.services.join(", ") : "-"}`,
    `Source: ${payload.source}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  return `mailto:hello@velvetdigital.io?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

function ContactPageInner() {
  const params = useSearchParams();
  const refSource = params.get("ref") || "contact_page";

  // ?tab=message in URL lands on the form tab; ?tab=call (default) on Calendly
  const initialTab: Tab = params.get("tab") === "message" ? "message" : "call";
  const [tab, setTab] = useState<Tab>(initialTab);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [usedMailFallback, setUsedMailFallback] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    setUsedMailFallback(false);
    const form = new FormData(e.currentTarget);
    const payload: ContactPayload = {
      name: formString(form, "name"),
      email: formString(form, "email"),
      company: formString(form, "company"),
      budget: formString(form, "budget"),
      services: selectedServices,
      message: formString(form, "message"),
      website: formString(form, "website"),
      source: `velvetdigital.io/contact?ref=${refSource}`,
      submittedAt: new Date().toISOString(),
    };

    if (payload.website) {
      setStatus("sent");
      return;
    }

    if (!contactEndpoint) {
      window.location.href = buildMailto(payload);
      setUsedMailFallback(true);
      setStatus("sent");
      return;
    }

    try {
      const noCors = contactEndpointMode === "no-cors";
      const res = await fetch(contactEndpoint, {
        method: "POST",
        mode: noCors ? "no-cors" : "cors",
        headers: {
          "Content-Type": noCors
            ? "text/plain;charset=utf-8"
            : "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = noCors ? {} : await res.json().catch(() => ({}));
      if (!noCors && !res.ok) {
        setErrorMsg(
          (data as { error?: string }).error ||
            "Something went wrong. Please try again.",
        );
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrorMsg(
        "Network error — please email us directly at hello@velvetdigital.io.",
      );
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-velvet-radial" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-40 mix-blend-overlay" />
      <GradientOrb
        color="purple"
        size={520}
        className="-top-32 -left-32 opacity-60"
      />
      <GradientOrb
        color="gold"
        size={420}
        className="-bottom-24 -right-24 opacity-40"
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Contact options"
            className="inline-flex items-center gap-1 p-1 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur"
          >
            <TabButton
              active={tab === "call"}
              onClick={() => setTab("call")}
              icon={Calendar}
              label="Book a call"
            />
            <TabButton
              active={tab === "message"}
              onClick={() => setTab("message")}
              icon={Send}
              label="Send a message"
            />
          </div>
        </div>

        <div className="mt-8 lg:mt-10 relative">
          <AnimatePresence mode="wait">
            {tab === "call" ? (
              <motion.div
                key="call"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <CalendlyInline height={920} utmSource={refSource} />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="mx-auto max-w-3xl"
              >
                <div className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur p-8 lg:p-10">
                  {status === "sent" ? (
                    <div className="text-center py-12">
                      <div className="mx-auto w-14 h-14 grid place-items-center rounded-full border border-vd-gold/40 bg-vd-gold/10 text-vd-gold">
                        <Check size={22} />
                      </div>
                      <h3 className="mt-6 font-display text-3xl tracking-[-0.02em] text-vd-bone">
                        Thank you.
                      </h3>
                      <p className="mt-4 text-vd-mute max-w-md mx-auto">
                        {usedMailFallback
                          ? "Your email draft is ready. Send it from your mail app and we will reply from "
                          : "We have received your note and will reply within one business day from "}
                        <span className="text-vd-bone">
                          hello@velvetdigital.io
                        </span>
                        .
                      </p>
                      <button
                        onClick={() => setTab("call")}
                        className="mt-8 inline-flex items-center gap-2 text-sm text-vd-gold hover:text-vd-gold-bright transition-colors"
                      >
                        <Calendar size={14} />
                        Or book a call right now
                      </button>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                      {/* honeypot — invisible to real users, bots fill it */}
                      <div
                        aria-hidden
                        className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
                      >
                        <label htmlFor="website">
                          Your website (leave blank)
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Field name="name" label="Your name" required />
                        <Field
                          name="email"
                          label="Email"
                          type="email"
                          required
                        />
                      </div>
                      <Field name="company" label="Company / Brand" />

                      <div>
                        <label className="text-[10px] tracking-[0.3em] uppercase text-vd-mute">
                          Services you&apos;re interested in
                        </label>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {services.map((s) => {
                            const active = selectedServices.includes(s);
                            return (
                              <button
                                type="button"
                                key={s}
                                onClick={() => toggleService(s)}
                                className={cn(
                                  "px-3 py-1.5 rounded-full text-xs tracking-[0.05em] transition-all duration-500",
                                  active
                                    ? "bg-vd-gold text-vd-black border border-vd-gold"
                                    : "border border-white/10 text-vd-bone/70 hover:border-vd-gold/40 hover:text-vd-gold",
                                )}
                              >
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] tracking-[0.3em] uppercase text-vd-mute">
                          Monthly budget
                        </label>
                        <select
                          name="budget"
                          defaultValue=""
                          className="mt-2 w-full bg-transparent border-b border-white/10 py-3 text-[15px] text-vd-bone focus:outline-none focus:border-vd-gold transition-colors"
                        >
                          <option value="" disabled className="bg-vd-black">
                            Select a range
                          </option>
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-vd-black">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] tracking-[0.3em] uppercase text-vd-mute">
                          Tell us about your brand & goals
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          minLength={4}
                          maxLength={4000}
                          placeholder="A few lines is enough — what you sell, who you sell to, what you want to be 6 months from now."
                          required
                          className="mt-2 w-full bg-transparent border-b border-white/10 py-3 text-[15px] text-vd-bone placeholder:text-vd-mute focus:outline-none focus:border-vd-gold transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group relative mt-4 self-start inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] tracking-[0.04em] font-medium text-vd-black bg-gradient-to-b from-vd-gold-bright to-vd-gold shadow-[0_12px_40px_-12px_rgba(212,175,55,0.7)] hover:shadow-[0_18px_55px_-12px_rgba(212,175,55,0.9)] transition-all duration-500 disabled:opacity-70"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={15} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>Send Message</>
                        )}
                      </button>

                      {status === "error" && errorMsg && (
                        <p className="text-sm text-red-300/90">{errorMsg}</p>
                      )}
                    </form>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-vd-black" />}>
      <ContactPageInner />
    </Suspense>
  );
}

function TabButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Calendar;
  label: string;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] tracking-[0.05em] transition-all duration-500",
        active
          ? "text-vd-black bg-gradient-to-b from-vd-gold-bright to-vd-gold shadow-[0_8px_22px_-10px_rgba(212,175,55,0.6)]"
          : "text-vd-bone/70 hover:text-vd-bone",
      )}
    >
      <Icon size={14} />
      {label}
    </button>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] tracking-[0.3em] uppercase text-vd-mute">
        {label}
        {required && <span className="text-vd-gold ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={type === "email" ? "email" : "off"}
        className="bg-transparent border-b border-white/10 py-3 text-[15px] text-vd-bone placeholder:text-vd-mute focus:outline-none focus:border-vd-gold transition-colors"
      />
    </label>
  );
}
