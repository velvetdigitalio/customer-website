"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { GradientOrb } from "./GradientOrb";
import { ParticleField } from "./ParticleField";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-velvet-radial" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-50 mix-blend-overlay" />
      <GradientOrb
        color="purple"
        size={620}
        className="-top-32 -left-32 opacity-80"
      />
      <GradientOrb
        color="gold"
        size={420}
        className="-bottom-24 right-0 opacity-50"
      />
      <ParticleField density={45} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-vd-black pointer-events-none" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-vd-gold/25 bg-vd-gold/[0.04] text-vd-gold text-[11px] tracking-[0.25em] uppercase"
        >
          <span className="w-1 h-1 rounded-full bg-vd-gold animate-pulse" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-5xl md:text-6xl lg:text-[80px] leading-[1.0] tracking-[-0.03em] text-vd-bone"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.25 }}
            className="mt-6 max-w-2xl text-[17px] lg:text-[18px] text-vd-mute leading-[1.7]"
          >
            {description}
          </motion.div>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
