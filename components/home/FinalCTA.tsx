"use client";

import { motion } from "framer-motion";
import { GoldButton } from "@/components/ui/GoldButton";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { ParticleField } from "@/components/ui/ParticleField";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function FinalCTA() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vd-black via-vd-velvet-deep to-vd-black" />
      <GradientOrb
        color="gold"
        size={900}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
      <GradientOrb
        color="deep"
        size={700}
        className="left-1/4 -top-20 opacity-40"
      />
      <ParticleField density={50} />
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vd-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vd-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 py-32 lg:py-40 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-vd-gold/30 bg-vd-gold/[0.06] text-vd-gold text-[11px] tracking-[0.25em] uppercase mx-auto"
        >
          <span className="w-1 h-1 rounded-full bg-vd-gold animate-pulse" />
          Limited availability · Q3
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
          className="mt-8 font-display text-5xl sm:text-6xl lg:text-[88px] leading-[0.98] tracking-[-0.03em] text-vd-bone"
        >
          Ready to build a brand{" "}
          <span className="text-gold-gradient italic">people remember</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.25 }}
          className="mt-7 text-[17px] lg:text-[19px] text-vd-mute max-w-2xl mx-auto leading-[1.7]"
        >
          A 30-minute strategy call — no pitch deck, no fluff. We&apos;ll map
          your fastest path to compounding growth and tell you honestly
          whether we can help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <BookCallButton
            label="Book a Strategy Call"
            className="px-9 py-4 text-[15px] tracking-[0.05em]"
            utmSource="final_cta"
          />
          <GoldButton href="/work" variant="ghost">
            See recent work
          </GoldButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-12 flex items-center justify-center gap-8 text-xs text-vd-mute"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            3 spots open this quarter
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            Reply within 24 hours
          </span>
        </motion.div>
      </div>
    </section>
  );
}
