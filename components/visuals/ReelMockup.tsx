"use client";

import { Play } from "lucide-react";

interface Props {
  className?: string;
  label?: string;
  hue?: number;
}

export function ReelMockup({ className, label = "Reel", hue = 280 }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className ?? ""}`}
      style={{ aspectRatio: "9 / 16" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(${hue}, 60%, 18%) 0%, hsl(${hue + 20}, 70%, 8%) 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,215,122,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border border-vd-gold/40 bg-white/10 backdrop-blur grid place-items-center text-vd-gold">
          <Play size={14} fill="currentColor" />
        </div>
      </div>

      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
        <span className="text-[9px] text-vd-bone/80 tracking-[0.2em] uppercase">
          {label}
        </span>
        <span className="text-[9px] text-vd-gold/80">0:24</span>
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <div className="h-0.5 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-2/3 bg-gradient-to-r from-vd-gold to-vd-gold-bright" />
        </div>
      </div>
    </div>
  );
}
