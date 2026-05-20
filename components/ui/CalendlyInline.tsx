"use client";

import dynamic from "next/dynamic";
import { CALENDLY_PAGE_SETTINGS, CALENDLY_URL } from "@/lib/calendly";

const InlineWidget = dynamic(
  () => import("react-calendly").then((m) => m.InlineWidget),
  {
    ssr: false,
    loading: () => (
      <div className="h-[720px] rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur grid place-items-center">
        <div className="flex flex-col items-center gap-3 text-vd-mute">
          <div className="w-8 h-8 rounded-full border border-vd-gold/30 border-t-vd-gold animate-spin" />
          <span className="text-[11px] tracking-[0.25em] uppercase">
            Loading calendar
          </span>
        </div>
      </div>
    ),
  },
);

interface Props {
  height?: number;
  utmSource?: string;
}

export function CalendlyInline({ height = 920, utmSource = "contact_page" }: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-vd-gold/15 bg-vd-black"
      style={{ minHeight: height }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vd-gold/40 to-transparent z-10 pointer-events-none" />
      <InlineWidget
        url={CALENDLY_URL}
        styles={{ height, width: "100%" }}
        pageSettings={{ ...CALENDLY_PAGE_SETTINGS }}
        utm={{
          utmSource,
          utmMedium: "website",
          utmCampaign: "velvet_digital",
        }}
        iframeTitle="Book a strategy call with Velvet Digital"
      />
    </div>
  );
}
