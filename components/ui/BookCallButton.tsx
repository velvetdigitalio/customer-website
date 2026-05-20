"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "nav" | "icon-ghost";

interface Props {
  variant?: Variant;
  label?: string;
  className?: string;
  showArrow?: boolean;
  /**
   * Optional analytics tag — appended to /contact as ?ref=<source> so we
   * can see which CTA drove the click in analytics later.
   */
  utmSource?: string;
}

export function BookCallButton({
  variant = "primary",
  label = "Book Strategy Call",
  className,
  showArrow = true,
  utmSource,
}: Props) {
  const base =
    "group relative inline-flex items-center gap-2.5 rounded-full transition-all duration-500 overflow-hidden";

  const styles: Record<Variant, string> = {
    primary:
      "px-7 py-3.5 text-[14px] tracking-[0.04em] font-medium text-vd-black bg-gradient-to-b from-vd-gold-bright to-vd-gold shadow-[0_12px_40px_-12px_rgba(212,175,55,0.7)] hover:shadow-[0_18px_55px_-12px_rgba(212,175,55,0.9)]",
    ghost:
      "px-7 py-3.5 text-[14px] tracking-[0.04em] font-medium text-vd-bone border border-white/15 hover:border-vd-gold/40 hover:text-vd-gold bg-white/[0.02] backdrop-blur",
    nav: "px-5 py-2.5 text-[13px] tracking-[0.05em] font-medium text-vd-black bg-gradient-to-b from-vd-gold-bright to-vd-gold shadow-[0_8px_30px_-12px_rgba(212,175,55,0.6)] hover:shadow-[0_12px_40px_-10px_rgba(212,175,55,0.8)]",
    "icon-ghost":
      "px-4 py-2 text-[13px] text-vd-bone/80 hover:text-vd-gold border border-white/10 hover:border-vd-gold/40",
  };

  const href = utmSource ? `/contact?ref=${utmSource}` : "/contact";

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
      {variant === "ghost" || variant === "icon-ghost" ? (
        <Calendar size={14} className="relative z-10 opacity-80" />
      ) : null}
      <span className="relative z-10">{label}</span>
      {showArrow && (
        <ArrowUpRight
          size={variant === "nav" ? 14 : 16}
          className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}

export function BookCallLink({
  children,
  className,
  utmSource,
}: {
  children: ReactNode;
  className?: string;
  utmSource?: string;
}) {
  const href = utmSource ? `/contact?ref=${utmSource}` : "/contact";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[14px] text-vd-bone/70 hover:text-vd-bone transition-colors duration-300",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight
        size={12}
        className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-300"
      />
    </Link>
  );
}
