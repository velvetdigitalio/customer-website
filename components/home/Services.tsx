"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Globe, Cpu, Megaphone, Palette } from "lucide-react";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReelMockup } from "@/components/visuals/ReelMockup";
import { NeuralNet } from "@/components/visuals/NeuralNet";
import { cn } from "@/lib/cn";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface Service {
  id: string;
  title: string;
  icon: typeof Sparkles;
  description: string;
  className: string;
  variant: "branding" | "performance" | "ai" | "seo";
}

const services: Service[] = [
  {
    id: "branding",
    title: "Content & Branding",
    icon: Palette,
    description:
      "Visual storytelling that builds desire. Reels, photoshoots, identity systems and on-going content engines.",
    className: "lg:col-span-4 lg:row-span-2",
    variant: "branding",
  },
  {
    id: "performance",
    title: "Performance Marketing",
    icon: Megaphone,
    description:
      "Meta. Google. YouTube. Profitable ads, every month — engineered around your CAC and LTV.",
    className: "lg:col-span-2 lg:row-span-2",
    variant: "performance",
  },
  {
    id: "ai",
    title: "AI Automation",
    icon: Cpu,
    description:
      "Smart business systems: WhatsApp bots, AI chat, automated lead routing, CRM workflows.",
    className: "lg:col-span-4",
    variant: "ai",
  },
  {
    id: "seo",
    title: "SEO + GEO",
    icon: Globe,
    description:
      "Search dominance for Google and the new generative AI surface.",
    className: "lg:col-span-2",
    variant: "seo",
  },
];

function ServiceVisual({ variant }: { variant: Service["variant"] }) {
  if (variant === "branding") {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 pb-6 pt-2 max-w-2xl">
        {[280, 320, 30, 260].map((hue, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: easeOut }}
          >
            <ReelMockup hue={hue} className="w-full" />
          </motion.div>
        ))}
      </div>
    );
  }
  if (variant === "performance") {
    return (
      <div className="h-full px-6 pb-6 pt-2 flex items-end justify-around gap-3">
        {[36, 54, 48, 72, 90].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${h}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.08, ease: easeOut }}
            className="flex-1 max-w-[44px] rounded-t-md bg-gradient-to-t from-vd-gold/30 via-vd-gold to-vd-gold-bright shadow-[0_-8px_24px_-8px_rgba(245,215,122,0.5)]"
            style={{ minHeight: 12 }}
          />
        ))}
      </div>
    );
  }
  if (variant === "ai") {
    return (
      <div className="absolute inset-0 opacity-80">
        <NeuralNet className="w-full h-full" seed={9} />
        <div className="absolute inset-0 bg-gradient-to-t from-vd-charcoal via-vd-charcoal/30 to-transparent" />
      </div>
    );
  }
  if (variant === "seo") {
    return (
      <div className="p-6 pt-0">
        <div className="rounded-xl border border-white/10 bg-vd-black/50 px-3 py-2.5 flex items-center gap-2">
          <Globe size={14} className="text-vd-gold" />
          <div className="text-xs text-vd-bone/80">your-brand.com</div>
          <div className="ml-auto flex items-center gap-1 text-[10px] text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Rank #1
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {[
            ["luxury skincare brand", 96],
            ["best premium agency", 84],
            ["AI marketing services", 78],
          ].map(([term, score]) => (
            <div
              key={term as string}
              className="flex items-center gap-2 text-[11px]"
            >
              <span className="text-vd-mute flex-1 truncate">{term}</span>
              <div className="w-20 h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-vd-gold to-vd-gold-bright"
                  style={{ width: `${score}%` }}
                />
              </div>
              <span className="text-vd-gold w-6 text-right">{score}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

export function Services() {
  return (
    <section
      id="services"
      className="relative py-32 lg:py-44 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              A full <span className="text-gold-gradient italic">growth</span>{" "}
              stack, wrapped in cinematic craft.
            </>
          }
          description="Five disciplines, one studio. Built to compound — branding compounds awareness, performance compounds revenue, automation compounds time."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 gap-5 auto-rows-[260px]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  ease: easeOut,
                  delay: i * 0.06,
                }}
                className={cn("min-h-[280px]", service.className)}
              >
                <GlowCard
                  className="h-full"
                  glow={service.variant === "ai" ? "gold" : "purple"}
                >
                  <Link
                    href={`/services#${service.id}`}
                    className="relative h-full w-full flex flex-col"
                  >
                    <div className="p-6 flex items-start justify-between gap-4">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-vd-gold/20 bg-vd-gold/[0.05] text-[10px] tracking-[0.2em] uppercase text-vd-gold">
                        <Icon size={11} />
                        Service
                      </div>
                      <span className="w-9 h-9 grid place-items-center rounded-full border border-white/10 bg-white/[0.02] group-hover:border-vd-gold/40 group-hover:bg-vd-gold/10 transition-all duration-500">
                        <ArrowUpRight
                          size={14}
                          className="text-vd-bone/70 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-vd-gold"
                        />
                      </span>
                    </div>

                    <div className="px-6 pt-1 pb-3">
                      <h3 className="font-display text-2xl md:text-[28px] tracking-[-0.02em] text-vd-bone leading-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-vd-mute leading-[1.65] max-w-md">
                        {service.description}
                      </p>
                    </div>

                    <div className="relative mt-auto h-full min-h-[120px]">
                      <ServiceVisual variant={service.variant} />
                    </div>
                  </Link>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
