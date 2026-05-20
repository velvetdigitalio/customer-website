"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

type Variant = "primary" | "ghost";

interface Props {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
}

export function GoldButton({
  href,
  variant = "primary",
  children,
  className,
  onClick,
  showArrow = true,
}: Props) {
  const base =
    "group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] tracking-[0.04em] font-medium transition-all duration-500 overflow-hidden";

  const styles =
    variant === "primary"
      ? "text-vd-black bg-gradient-to-b from-vd-gold-bright to-vd-gold shadow-[0_12px_40px_-12px_rgba(212,175,55,0.7)] hover:shadow-[0_18px_55px_-12px_rgba(212,175,55,0.9)]"
      : "text-vd-bone border border-white/15 hover:border-vd-gold/40 hover:text-vd-gold bg-white/[0.02] backdrop-blur";

  const content = (
    <>
      {variant === "primary" && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12"
          initial={{ x: "-150%" }}
          whileHover={{ x: "150%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      )}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {content}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cn(base, styles, className)}>
      {content}
    </button>
  );
}
