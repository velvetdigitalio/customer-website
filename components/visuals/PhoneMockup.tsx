"use client";

import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{ aspectRatio: "9 / 19" }}
    >
      <div className="absolute inset-0 rounded-[36px] border border-white/[0.06] bg-gradient-to-b from-vd-charcoal to-vd-velvet-deep shadow-[0_28px_80px_-30px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black/80 z-20" />

        <div className="absolute inset-2 rounded-[30px] overflow-hidden bg-black">
          <div className="h-full w-full relative bg-gradient-to-br from-vd-velvet via-vd-charcoal to-vd-velvet-deep">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,215,122,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.18),transparent_60%)]" />

            <div className="absolute top-8 left-0 right-0 px-4 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full ring-1 ring-vd-gold/60 bg-gradient-to-br from-vd-gold to-vd-velvet" />
              <div className="flex flex-col">
                <span className="text-[10px] text-vd-bone font-medium">
                  velvet.digital
                </span>
                <span className="text-[8px] text-vd-mute">Sponsored</span>
              </div>
            </div>

            <div className="absolute inset-0 grid place-items-center">
              <div className="font-display text-vd-bone text-center px-6 leading-tight">
                <span className="block text-[10px] tracking-[0.3em] text-vd-gold/80 uppercase mb-2">
                  Reel
                </span>
                <span className="block text-2xl text-gold-gradient">
                  Luxury
                </span>
                <span className="block text-2xl">grows quietly.</span>
              </div>
            </div>

            <div className="absolute right-3 bottom-24 flex flex-col gap-4 text-vd-bone/90">
              {[
                { icon: Heart, count: "24.1k" },
                { icon: MessageCircle, count: "1,284" },
                { icon: Send, count: "" },
                { icon: Bookmark, count: "" },
              ].map(({ icon: Icon, count }, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <Icon size={16} />
                  {count && <span className="text-[8px]">{count}</span>}
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-3 right-14 text-[9px] text-vd-bone/80">
              <p className="font-medium">velvet.digital</p>
              <p className="mt-0.5 text-vd-mute">
                We build digital presence that converts.
              </p>
            </div>

            <div className="absolute bottom-2 left-3 right-3 h-0.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-vd-gold to-vd-gold-bright animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
