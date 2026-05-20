"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Crosshair, Wand2, Rocket } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Discover",
    headline: "Understand the business beneath the brand.",
    body: "Audits, interviews, competitive teardown, market positioning. We map the gap between where you are and where you should be.",
  },
  {
    n: "02",
    icon: Crosshair,
    title: "Position",
    headline: "Craft a brand strategy with weight.",
    body: "Narrative, identity, tone, visual system. We build the rails the rest of growth runs on.",
  },
  {
    n: "03",
    icon: Wand2,
    title: "Create",
    headline: "Content & campaigns that move.",
    body: "Reels, ads, photoshoots, landing pages, funnels — produced in a monthly engine, not one-off bursts.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Scale",
    headline: "Automate. Compound. Grow.",
    body: "AI assistants, CRM workflows, attribution dashboards. Turn marketing into a self-improving system.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_80%_40%,rgba(124,58,237,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process built to{" "}
              <span className="text-gold-gradient italic">compound</span>.
            </>
          }
          description="Four phases, one continuous engine. Every step builds equity that the next step can spend."
        />

        <div ref={ref} className="relative mt-20 grid grid-cols-[40px_1fr] lg:grid-cols-[80px_1fr] gap-8 lg:gap-14">
          <div className="relative">
            <div className="sticky top-32 h-[60vh]">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.05]" />
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-vd-gold/0 via-vd-gold to-vd-gold-bright shadow-[0_0_12px_rgba(212,175,55,0.6)]"
              />
              <motion.div
                style={{ top: indicatorY }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-vd-gold shadow-[0_0_20px_rgba(245,215,122,0.9)]"
              >
                <span className="absolute inset-0 rounded-full animate-ping bg-vd-gold/60" />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.9, ease: easeOut, delay: i * 0.05 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-5xl lg:text-6xl text-gold-gradient tracking-[-0.04em]">
                        {s.n}
                      </span>
                      <span className="w-9 h-9 grid place-items-center rounded-full border border-vd-gold/30 bg-vd-gold/[0.05] text-vd-gold">
                        <Icon size={15} />
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl lg:text-4xl tracking-[-0.02em] text-vd-bone">
                      {s.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8 lg:pl-12 lg:border-l lg:border-white/[0.06]">
                    <p className="font-display text-xl lg:text-2xl text-vd-bone/90 leading-snug tracking-[-0.01em]">
                      {s.headline}
                    </p>
                    <p className="mt-4 text-[15px] text-vd-mute leading-[1.75] max-w-xl">
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
