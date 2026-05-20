"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-vd-gold/25 bg-vd-gold/[0.04] text-vd-gold text-[11px] tracking-[0.25em] uppercase font-medium w-fit"
        >
          <span className="w-1 h-1 rounded-full bg-vd-gold animate-pulse" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.05 }}
        className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-[-0.02em] text-vd-bone"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
          className="text-[17px] leading-[1.7] text-vd-mute max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
