"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const easeOut = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 50, suffix: "M+", label: "Impressions Generated" },
  { value: 1200, suffix: "+", label: "Content Pieces Created" },
  { value: 4, suffix: "", label: "Countries Served" },
  { value: 90, suffix: "%", label: "Client Retention" },
];

const clientLogos = [
  "ATELIER",
  "NORDLUX",
  "VEMARA",
  "AURUM",
  "ORBIT/9",
  "MAISON.",
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/[0.05] bg-vd-black/40 backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vd-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vd-gold/20 to-transparent" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 lg:py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-display text-center text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] text-vd-bone/90 max-w-3xl mx-auto leading-[1.2]"
        >
          Helping brands grow through{" "}
          <span className="text-gold-gradient">strategy</span>,{" "}
          <span className="text-gold-gradient">content</span> &{" "}
          <span className="text-gold-gradient">automation</span>.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: easeOut, delay: i * 0.08 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] text-gold-gradient">
                <AnimatedCounter to={s.value} suffix={s.suffix} duration={2} />
              </span>
              <span className="mt-3 text-[11px] tracking-[0.25em] uppercase text-vd-mute">
                {s.label}
              </span>
              {i < stats.length - 1 && (
                <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 items-center">
          {clientLogos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              whileHover={{ opacity: 1, scale: 1.04 }}
              className="font-display text-center text-vd-bone/50 hover:text-vd-bone transition-colors duration-500"
            >
              <span className="text-base md:text-lg tracking-[0.3em] font-medium">
                {logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
