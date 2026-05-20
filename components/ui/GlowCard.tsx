"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/cn";

interface Props {
  children: ReactNode;
  className?: string;
  glow?: "purple" | "gold" | "mixed";
}

export function GlowCard({ children, className, glow = "mixed" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  const glowColor =
    glow === "gold"
      ? "rgba(212,175,55,0.18)"
      : glow === "purple"
        ? "rgba(124,58,237,0.22)"
        : "rgba(168,108,235,0.20)";

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-white/[0.005] backdrop-blur-sm transition-all duration-700",
        "hover:border-vd-gold/30 hover:-translate-y-0.5",
        className,
      )}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(450px circle at var(--mx,50%) var(--my,50%), var(--glow-color), transparent 55%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 [background:linear-gradient(120deg,transparent_40%,rgba(212,175,55,0.10)_50%,transparent_60%)] [mask:linear-gradient(black,black)_padding-box,linear-gradient(black,black)] " />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
