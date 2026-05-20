"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookCallButton } from "@/components/ui/BookCallButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    name: "Aurum Atelier",
    industry: "Luxury Skincare",
    metric: "+340% reach",
    metric2: "12.4x ROAS",
    hue: 285,
    label: "Brand · Content · Ads",
  },
  {
    name: "Maison Nordlux",
    industry: "Hospitality",
    metric: "+218% bookings",
    metric2: "4.2M reach",
    hue: 30,
    label: "Brand · Web · SEO",
  },
  {
    name: "Vemara Studios",
    industry: "Fashion",
    metric: "1.2M followers",
    metric2: "+92% engagement",
    hue: 320,
    label: "Content · Reels",
  },
  {
    name: "Orbit/9",
    industry: "AI SaaS",
    metric: "2,840 leads",
    metric2: "5.8x ROAS",
    hue: 250,
    label: "Performance · AI",
  },
  {
    name: "Atelier 88",
    industry: "Fine Jewelry",
    metric: "+460% revenue",
    metric2: "7.1x ROAS",
    hue: 18,
    label: "Brand · E-com · Ads",
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const distance = track.scrollWidth - window.innerWidth + 120;
      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + 200}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-vd-black"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_20%_30%,rgba(124,58,237,0.15),transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-32 lg:pt-44 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Cinematic case studies for{" "}
                <span className="text-gold-gradient italic">premium</span>{" "}
                brands.
              </>
            }
            description="A small sample of recent work, each tuned for a different kind of growth — desire, demand, automation."
          />
          <div className="hidden lg:flex flex-col items-end gap-2 text-xs text-vd-mute tracking-[0.25em] uppercase">
            <span>Scroll →</span>
          </div>
        </div>
      </div>

      <div className="relative lg:h-screen lg:flex lg:items-center">
        <div
          ref={trackRef}
          className="flex gap-6 lg:gap-8 px-6 lg:px-10 pb-16 lg:pb-0 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none no-scrollbar"
        >
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group relative flex-shrink-0 w-[82vw] sm:w-[60vw] lg:w-[640px] aspect-[4/5] lg:aspect-[5/6] snap-center rounded-3xl overflow-hidden border border-white/[0.06] bg-vd-charcoal transition-transform duration-700 hover:scale-[1.01]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, hsl(${p.hue},55%,22%) 0%, hsl(${p.hue + 20},65%,8%) 100%)`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(245,215,122,0.18),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.10),transparent_50%)]" />

              <div className="absolute inset-6 lg:inset-8 border border-vd-gold/0 group-hover:border-vd-gold/30 transition-colors duration-700 pointer-events-none">
                {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  >
                    <span className="absolute inset-0 border-vd-gold border-t border-l" style={pos.includes("right") ? { borderLeft: 0, borderRight: "1px solid currentColor" } : {}} />
                  </span>
                ))}
              </div>

              <div className="absolute top-6 left-6 right-6 lg:top-8 lg:left-8 lg:right-8 flex items-center justify-between">
                <span className="font-display text-[11px] tracking-[0.3em] uppercase text-vd-bone/70">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur text-[10px] tracking-[0.2em] uppercase text-vd-gold border border-vd-gold/30">
                  {p.industry}
                </span>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-vd-gold/40 bg-black/30 backdrop-blur-sm grid place-items-center text-vd-gold opacity-90 group-hover:scale-110 transition-transform duration-700">
                <Play size={20} fill="currentColor" />
              </div>

              <div className="absolute inset-x-6 lg:inset-x-8 bottom-6 lg:bottom-8">
                <p className="text-[11px] tracking-[0.25em] uppercase text-vd-gold/80">
                  {p.label}
                </p>
                <h3 className="mt-2 font-display text-3xl lg:text-4xl tracking-[-0.02em] text-vd-bone">
                  {p.name}
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur px-3 py-2.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-vd-mute">
                      Result
                    </p>
                    <p className="mt-0.5 font-display text-lg text-gold-gradient">
                      {p.metric}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur px-3 py-2.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-75">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-vd-mute">
                      Return
                    </p>
                    <p className="mt-0.5 font-display text-lg text-gold-gradient">
                      {p.metric2}
                    </p>
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-vd-bone/80 hover:text-vd-gold transition-colors"
                >
                  View case study
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}

          <div className="hidden lg:flex flex-shrink-0 w-[480px] aspect-[5/6] rounded-3xl border border-dashed border-vd-gold/20 bg-vd-gold/[0.02] flex-col items-center justify-center text-center px-10">
            <p className="font-display text-3xl tracking-[-0.02em] text-vd-bone">
              Your brand,{" "}
              <span className="text-gold-gradient italic">next.</span>
            </p>
            <p className="mt-3 text-sm text-vd-mute">
              We take a handful of partners every quarter.
            </p>
            <div className="mt-6">
              <BookCallButton utmSource="portfolio_endcard" label="Book a Call" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
