"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Workflow,
  Database,
  CheckCircle2,
} from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { NeuralNet } from "@/components/visuals/NeuralNet";

const easeOut = [0.22, 1, 0.36, 1] as const;

const automations = [
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    body: "Auto-reply funnels, broadcast journeys, segmented nurture flows on WhatsApp Business.",
    preview: (
      <div className="space-y-2">
        {[
          { who: "lead", text: "Hi — interested in your retainer." },
          {
            who: "bot",
            text: "Welcome to Velvet ✦ — let me ask 2 quick questions.",
          },
          { who: "lead", text: "Sure." },
          { who: "bot", text: "Industry & monthly budget?" },
        ].map((m, i) => (
          <div
            key={i}
            className={`flex ${m.who === "bot" ? "justify-start" : "justify-end"}`}
          >
            <span
              className={`max-w-[80%] px-2.5 py-1.5 rounded-lg text-[10px] leading-snug ${
                m.who === "bot"
                  ? "bg-vd-gold/10 border border-vd-gold/20 text-vd-bone"
                  : "bg-white/[0.05] text-vd-bone/80"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    body: "GPT-powered concierge on your site that books calls, qualifies leads, recommends services.",
    preview: (
      <div className="space-y-2 text-[10px]">
        <div className="flex items-center gap-2 text-vd-gold/80">
          <span className="w-1.5 h-1.5 rounded-full bg-vd-gold animate-pulse" />
          velvet · concierge
        </div>
        <div className="rounded-lg border border-white/10 bg-black/30 px-2.5 py-1.5 text-vd-bone/80">
          Hello — I can help you scope a project in under a minute.
        </div>
        <div className="rounded-lg border border-vd-gold/20 bg-vd-gold/[0.05] px-2.5 py-1.5 text-vd-bone/90 ml-6">
          Ok, we are launching a skincare brand next month.
        </div>
        <div className="rounded-lg border border-white/10 bg-black/30 px-2.5 py-1.5 text-vd-bone/80">
          Perfect — based on your stage I&apos;d recommend our Launch Engine. Want
          to see a sample plan?
        </div>
      </div>
    ),
  },
  {
    icon: Workflow,
    title: "Lead Funnels",
    body: "Multi-step landing flows + nurture automations that turn cold traffic into sales-ready calls.",
    preview: (
      <div className="space-y-2">
        {[
          { step: "Ad click", value: "12,840", pct: 100 },
          { step: "Landing", value: "8,124", pct: 63 },
          { step: "Qualified", value: "1,284", pct: 26 },
          { step: "Booked call", value: "284", pct: 14 },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px]">
            <span className="w-16 text-vd-mute">{s.step}</span>
            <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: easeOut }}
                className="h-full bg-gradient-to-r from-vd-gold to-vd-gold-bright"
              />
            </div>
            <span className="w-12 text-right text-vd-bone/80">{s.value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Database,
    title: "CRM Workflows",
    body: "Auto-tag, route, score and follow up — your sales motion runs even when the team is asleep.",
    preview: (
      <div className="space-y-1.5">
        {[
          "Lead captured · Meta Ads",
          "Enriched with company data",
          "Scored: 84 / Hot",
          "Routed to Founder",
          "Calendar link sent",
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex items-center gap-2 text-[10px] text-vd-bone/80"
          >
            <CheckCircle2
              size={11}
              className={i < 4 ? "text-emerald-300" : "text-vd-gold"}
            />
            {t}
          </motion.div>
        ))}
      </div>
    ),
  },
];

export function AISection() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden bg-vd-velvet-deep">
      <div className="absolute inset-0 -z-10">
        <NeuralNet className="absolute inset-0 w-full h-full opacity-40" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent,rgba(14,5,24,0.85)_70%,rgba(14,5,24,1))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vd-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vd-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {automations.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  ease: easeOut,
                  delay: i * 0.08,
                }}
              >
                <GlowCard className="h-full" glow="gold">
                  <div className="p-7 lg:p-9 grid grid-cols-1 sm:grid-cols-5 gap-6 items-start h-full">
                    <div className="sm:col-span-3 flex flex-col gap-4">
                      <div className="inline-flex items-center gap-2 w-fit px-2.5 py-1 rounded-full border border-vd-gold/25 bg-vd-gold/[0.05] text-[10px] tracking-[0.2em] uppercase text-vd-gold">
                        <Icon size={11} />
                        Automation
                      </div>
                      <h3 className="font-display text-2xl lg:text-[28px] tracking-[-0.02em] text-vd-bone leading-tight">
                        {a.title}
                      </h3>
                      <p className="text-sm text-vd-mute leading-[1.7]">
                        {a.body}
                      </p>
                    </div>
                    <div className="sm:col-span-2 rounded-xl border border-white/10 bg-black/30 backdrop-blur p-3.5 min-h-[140px]">
                      {a.preview}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          className="mt-12 text-center text-sm text-vd-mute max-w-2xl mx-auto"
        >
          Built on a stack of n8n, OpenAI, WhatsApp Business API, HubSpot and
          custom internal tools — wired specifically to your sales motion.
        </motion.p>
      </div>
    </section>
  );
}
