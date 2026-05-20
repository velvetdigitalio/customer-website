"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, CalendarCheck } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlowCard } from "@/components/ui/GlowCard";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface MetricCard {
  icon: typeof TrendingUp;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta: string;
  caption: string;
  path: string;
}

const cards: MetricCard[] = [
  {
    icon: Users,
    label: "Qualified leads",
    value: 12480,
    suffix: "+",
    delta: "+218% QoQ",
    caption: "Across 14 active client funnels.",
    path: "M0,80 C30,72 60,70 95,60 C130,52 165,55 200,40 C240,22 280,28 320,15 L360,8",
  },
  {
    icon: TrendingUp,
    label: "Engagement",
    value: 38.2,
    suffix: "%",
    decimals: 1,
    delta: "+92% lift",
    caption: "vs. previous 90-day window.",
    path: "M0,82 C40,80 70,68 110,72 C150,76 180,55 220,52 C260,48 300,30 360,18",
  },
  {
    icon: Target,
    label: "Average ROAS",
    value: 5.8,
    suffix: "x",
    decimals: 1,
    delta: "Top quartile",
    caption: "Across Meta + Google portfolio.",
    path: "M0,78 L60,68 L120,72 L180,52 L240,48 L300,28 L360,10",
  },
  {
    icon: CalendarCheck,
    label: "Bookings driven",
    value: 4280,
    suffix: "+",
    delta: "+340% YoY",
    caption: "Inbound calls and demos.",
    path: "M0,85 C40,78 80,70 120,68 C160,66 200,54 240,46 C280,38 320,24 360,12",
  },
];

export function Results() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(212,175,55,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  ease: easeOut,
                  delay: i * 0.08,
                }}
              >
                <GlowCard className="h-full" glow="gold">
                  <div className="p-7 lg:p-9 flex flex-col gap-7">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-vd-gold/20 bg-vd-gold/[0.05] text-[10px] tracking-[0.2em] uppercase text-vd-gold">
                        <Icon size={11} />
                        {c.label}
                      </div>
                      <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-300/90">
                        {c.delta}
                      </span>
                    </div>

                    <div>
                      <p className="font-display text-5xl lg:text-6xl tracking-[-0.03em] text-vd-bone leading-none">
                        <AnimatedCounter
                          to={c.value}
                          prefix={c.prefix}
                          suffix={c.suffix}
                          decimals={c.decimals}
                          duration={2}
                        />
                      </p>
                      <p className="mt-3 text-sm text-vd-mute">{c.caption}</p>
                    </div>

                    <div className="h-24 -mx-2">
                      <svg
                        viewBox="0 0 360 100"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id={`grad-${i}`}
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#D4AF37" />
                            <stop offset="100%" stopColor="#F5D77A" />
                          </linearGradient>
                          <linearGradient
                            id={`fill-${i}`}
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#F5D77A" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#F5D77A" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d={`${c.path} L 360,100 L 0,100 Z`}
                          fill={`url(#fill-${i})`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4 }}
                        />
                        <motion.path
                          d={c.path}
                          stroke={`url(#grad-${i})`}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.8,
                            ease: easeOut,
                            delay: 0.15,
                          }}
                        />
                      </svg>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
