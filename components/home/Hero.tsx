"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { ParticleField } from "@/components/ui/ParticleField";
import { PhoneMockup } from "@/components/visuals/PhoneMockup";
import { DashboardMockup } from "@/components/visuals/DashboardMockup";
import { GoldGraph } from "@/components/visuals/GoldGraph";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCardA = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yCardB = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCardC = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scaleCards = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-32 pb-24"
    >
      <div className="absolute inset-0 bg-velvet-radial" />
      <div className="absolute inset-0 bg-noise opacity-[0.5] mix-blend-overlay" />
      <GradientOrb
        color="purple"
        size={720}
        className="-top-40 -left-32 opacity-90"
      />
      <GradientOrb
        color="gold"
        size={520}
        className="bottom-[-10%] right-[-8%] opacity-60"
      />
      <GradientOrb
        color="deep"
        size={400}
        className="top-1/3 right-1/4 opacity-40"
      />
      <div className="absolute inset-0">
        <ParticleField density={70} />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-vd-black/90 pointer-events-none" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center min-h-[80vh]">
          <motion.div
            style={{ opacity: fade, y: yLeft }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-vd-gold/25 bg-vd-gold/[0.04] text-vd-gold text-[11px] tracking-[0.25em] uppercase"
            >
              <Sparkles size={11} />
              Luxury Digital Growth Studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
              className="font-display text-[44px] sm:text-6xl lg:text-[88px] leading-[0.98] tracking-[-0.03em] text-vd-bone"
            >
              We build digital presence that converts into{" "}
              <span className="text-gold-gradient italic">growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.35 }}
              className="max-w-xl text-[17px] lg:text-[18px] leading-[1.7] text-vd-mute"
            >
              Content. Performance Marketing. AI Automation. Everything your
              brand needs to dominate online — wrapped in a cinematic,
              conversion-first experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
            >
              <BookCallButton utmSource="hero" label="Book Strategy Call" />
              <GoldButton href="/work" variant="ghost">
                View Work
              </GoldButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex items-center gap-6 pt-6"
            >
              <div className="flex -space-x-2.5">
                {[280, 40, 200, 320].map((h, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full ring-2 ring-vd-black"
                    style={{
                      background: `linear-gradient(135deg, hsl(${h},60%,30%), hsl(${h + 30},70%,15%))`,
                    }}
                  />
                ))}
              </div>
              <div className="text-xs text-vd-mute leading-tight">
                <p className="text-vd-bone">
                  Trusted by <span className="text-vd-gold">premium</span>{" "}
                  brands
                </p>
                <p>across 4 countries and counting</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ scale: scaleCards }}
            className="lg:col-span-5 relative h-[560px] lg:h-[620px]"
          >
            <motion.div
              style={{ y: yCardA }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.4 }}
              className="absolute right-2 top-0 w-[240px] lg:w-[260px] z-30"
            >
              <div className="animate-float">
                <PhoneMockup />
              </div>
            </motion.div>

            <motion.div
              style={{ y: yCardB }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.55 }}
              className="absolute left-0 top-24 w-[300px] lg:w-[340px] z-20"
            >
              <div
                className="animate-float"
                style={{ animationDelay: "-2s", animationDuration: "8s" }}
              >
                <DashboardMockup />
              </div>
            </motion.div>

            <motion.div
              style={{ y: yCardC }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.7 }}
              className="absolute left-6 bottom-6 w-[220px] z-30"
            >
              <div
                className="animate-float"
                style={{ animationDelay: "-4s", animationDuration: "9s" }}
              >
                <div className="rounded-2xl border border-vd-gold/20 bg-gradient-to-br from-vd-charcoal to-vd-velvet-deep p-5 backdrop-blur shadow-[0_24px_60px_-20px_rgba(212,175,55,0.25)]">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-vd-mute">
                    Ad Performance
                  </p>
                  <p className="mt-2 font-display text-3xl text-gold-gradient">
                    +128%
                  </p>
                  <p className="text-xs text-vd-bone/70 mt-0.5">
                    ROAS · last 30 days
                  </p>
                  <div className="mt-3 h-8">
                    <GoldGraph className="w-full h-full" showAxis={false} />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),transparent_70%)] blur-2xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-vd-mute text-[10px] tracking-[0.3em] uppercase"
        >
          <span>Scroll</span>
          <ArrowDown size={12} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
