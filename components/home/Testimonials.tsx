"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

const easeOut = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote:
      "Velvet rebuilt our entire content engine in 60 days. Reach is up 3x, but more importantly — the brand finally feels like the price point.",
    name: "Anaisha Kapoor",
    role: "Founder",
    company: "Aurum Atelier",
    hue: 285,
  },
  {
    quote:
      "Their team thinks like operators, not creatives. The automation layer alone freed up 12 hours a week — and our close-rate doubled.",
    name: "Rohan Mehta",
    role: "CEO",
    company: "Orbit/9",
    hue: 250,
  },
  {
    quote:
      "It is the first agency we have worked with that ships at the speed of a startup and looks at numbers like a CFO. Rare combination.",
    name: "Elena Sokolov",
    role: "Brand Director",
    company: "Maison Nordlux",
    hue: 30,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(124,58,237,0.10),transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Words from founders"
          title={
            <>
              Trusted by people who could{" "}
              <span className="text-gold-gradient italic">hire anyone</span>.
            </>
          }
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                ease: easeOut,
                delay: i * 0.1,
              }}
              whileHover={{ rotateZ: i % 2 === 0 ? -0.4 : 0.4 }}
            >
              <GlowCard className="h-full">
                <div className="relative p-8 lg:p-10 flex flex-col gap-8 h-full">
                  <Quote
                    size={36}
                    className="text-vd-gold/40"
                    strokeWidth={1}
                  />
                  <p className="font-display text-xl lg:text-2xl text-vd-bone leading-[1.35] tracking-[-0.01em] flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div
                      className="w-11 h-11 rounded-full ring-1 ring-vd-gold/30"
                      style={{
                        background: `linear-gradient(135deg, hsl(${t.hue},55%,40%), hsl(${t.hue + 30},65%,15%))`,
                      }}
                    />
                    <div>
                      <p className="text-sm text-vd-bone font-medium">
                        {t.name}
                      </p>
                      <p className="text-xs text-vd-mute">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
