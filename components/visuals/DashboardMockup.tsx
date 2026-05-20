"use client";

import { GoldGraph } from "./GoldGraph";
import { TrendingUp, Users, Eye, ArrowUp } from "lucide-react";

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vd-charcoal to-vd-velvet-deep shadow-[0_24px_80px_-24px_rgba(0,0,0,0.6)] backdrop-blur-md ${className ?? ""}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vd-gold/40 to-transparent" />

      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400/50" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/50" />
          <span className="w-2 h-2 rounded-full bg-green-400/50" />
        </div>
        <span className="text-[10px] tracking-[0.2em] text-vd-mute uppercase">
          Velvet · Analytics
        </span>
        <div className="text-[10px] text-vd-gold/70">Live</div>
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-vd-mute uppercase">
              Revenue · 30d
            </p>
            <p className="mt-1 font-display text-2xl text-vd-bone">
              ₹ 12.4<span className="text-vd-gold">M</span>
            </p>
          </div>
          <div className="inline-flex items-center gap-1 text-emerald-300 text-xs">
            <ArrowUp size={12} />
            +38.2%
          </div>
        </div>

        <div className="mt-4 h-24">
          <GoldGraph className="w-full h-full" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.04]">
          {[
            { icon: TrendingUp, label: "ROAS", value: "5.8x" },
            { icon: Users, label: "Leads", value: "1,284" },
            { icon: Eye, label: "Reach", value: "4.2M" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col">
              <div className="flex items-center gap-1 text-vd-mute text-[9px] tracking-[0.15em] uppercase">
                <Icon size={9} />
                {label}
              </div>
              <span className="mt-0.5 text-vd-bone text-sm font-medium">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
