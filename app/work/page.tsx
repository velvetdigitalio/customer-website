"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";

const easeOut = [0.22, 1, 0.36, 1] as const;

const categories = ["All", "Branding", "Performance", "AI", "Web"] as const;
type Category = (typeof categories)[number];

const projects: {
  name: string;
  industry: string;
  category: Exclude<Category, "All">;
  metric: string;
  metric2: string;
  hue: number;
}[] = [
  {
    name: "Aurum Atelier",
    industry: "Luxury Skincare",
    category: "Branding",
    metric: "+340% reach",
    metric2: "12.4x ROAS",
    hue: 285,
  },
  {
    name: "Maison Nordlux",
    industry: "Hospitality",
    category: "Web",
    metric: "+218% bookings",
    metric2: "4.2M reach",
    hue: 30,
  },
  {
    name: "Vemara Studios",
    industry: "Fashion",
    category: "Branding",
    metric: "1.2M followers",
    metric2: "+92% engagement",
    hue: 320,
  },
  {
    name: "Orbit/9",
    industry: "AI SaaS",
    category: "AI",
    metric: "2,840 leads",
    metric2: "5.8x ROAS",
    hue: 250,
  },
  {
    name: "Atelier 88",
    industry: "Fine Jewelry",
    category: "Performance",
    metric: "+460% revenue",
    metric2: "7.1x ROAS",
    hue: 18,
  },
  {
    name: "Solara",
    industry: "DTC Wellness",
    category: "Performance",
    metric: "+212% repeat",
    metric2: "6.4x ROAS",
    hue: 50,
  },
  {
    name: "Quill & Stone",
    industry: "Architecture",
    category: "Web",
    metric: "+180% inquiries",
    metric2: "Lighthouse 98",
    hue: 200,
  },
  {
    name: "Lunarion",
    industry: "Fragrance",
    category: "Branding",
    metric: "+520% reach",
    metric2: "9.2x ROAS",
    hue: 270,
  },
  {
    name: "Nexa Concierge",
    industry: "Premium Services",
    category: "AI",
    metric: "82% auto-resolved",
    metric2: "12h saved/wk",
    hue: 220,
  },
];

export default function WorkPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title={
          <>
            Cinematic case studies for{" "}
            <span className="text-gold-gradient italic">premium</span> brands.
          </>
        }
        description="A small sample of recent work. Each engagement is private until results are public — these are the ones we can talk about."
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-[12px] tracking-[0.1em] uppercase transition-all duration-500 ${
                active === c
                  ? "bg-vd-gold text-vd-black border border-vd-gold"
                  : "text-vd-bone/70 border border-white/10 hover:border-vd-gold/40 hover:text-vd-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.6,
                    ease: easeOut,
                    delay: i * 0.04,
                  }}
                >
                  <Link
                    href="/case-studies"
                    className="group relative block aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-vd-gold/30 transition-colors duration-700"
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, hsl(${p.hue},55%,22%) 0%, hsl(${p.hue + 20},65%,8%) 100%)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(245,215,122,0.18),transparent_55%)]" />

                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-vd-gold/80">
                        {p.category}
                      </span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-vd-bone/60">
                        {p.industry}
                      </span>
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-vd-gold/40 bg-black/30 backdrop-blur-sm grid place-items-center text-vd-gold opacity-80 group-hover:scale-110 transition-transform duration-700">
                      <Play size={14} fill="currentColor" />
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-display text-2xl tracking-[-0.02em] text-vd-bone">
                        {p.name}
                      </h3>
                      <div className="mt-3 flex items-center gap-3 text-[11px] text-vd-bone/80">
                        <span className="px-2 py-1 rounded-full border border-vd-gold/30 bg-black/30 backdrop-blur text-vd-gold">
                          {p.metric}
                        </span>
                        <span className="text-vd-mute">{p.metric2}</span>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-vd-bone/70 group-hover:text-vd-gold transition-colors">
                        View case study
                        <ArrowUpRight
                          size={12}
                          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
