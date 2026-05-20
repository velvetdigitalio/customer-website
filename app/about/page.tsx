import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { GlowCard } from "@/components/ui/GlowCard";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Sparkles, Eye, Layers, Infinity as InfinityIcon } from "lucide-react";

export const metadata = {
  title: "About — Velvet Digital",
  description:
    "A luxury growth studio building digital presence, performance marketing and AI automation systems for premium modern brands.",
};

const values = [
  {
    icon: Eye,
    title: "Taste over trends",
    body: "We optimise for what will look right in three years, not what is loud this week.",
  },
  {
    icon: Layers,
    title: "Systems over campaigns",
    body: "Every project leaves you with engines that compound — content, paid, automation.",
  },
  {
    icon: Sparkles,
    title: "Craft, obsessively",
    body: "Pixels, frames, milliseconds. The kind of detail clients feel but never describe.",
  },
  {
    icon: InfinityIcon,
    title: "Long-term partners",
    body: "We take a small number of clients each year. The ones we take, we stay with.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A studio for brands that{" "}
            <span className="text-gold-gradient italic">refuse</span> to look
            ordinary.
          </>
        }
        description="Velvet Digital is a small, senior team blending brand design, performance marketing and AI engineering — focused on a handful of premium clients at a time."
      />

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden border border-vd-gold/20 shadow-[0_30px_80px_-30px_rgba(212,175,55,0.35)]">
              <Image
                src="/logo.png"
                alt="Velvet Digital"
                fill
                sizes="420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vd-black/40 via-transparent to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-vd-gold/80">
              Our story
            </span>
            <h2 className="mt-4 font-display text-3xl lg:text-5xl tracking-[-0.02em] text-vd-bone leading-[1.1]">
              We started Velvet to build the kind of agency we{" "}
              <span className="text-gold-gradient italic">wished</span> existed.
            </h2>
            <div className="mt-6 space-y-5 text-[16px] text-vd-bone/80 leading-[1.75]">
              <p>
                Founder-led brands kept telling us the same thing: agencies were
                either creative shops with no commercial brain, or performance
                shops with no taste. Nobody was building both — at the level
                premium brands deserve.
              </p>
              <p>
                Velvet is the answer to that. A senior, hand-picked team that
                ships brand work you would frame, and performance work you can
                bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-vd-gold/80">
              What we believe
            </span>
            <h2 className="mt-4 font-display text-3xl lg:text-5xl tracking-[-0.02em] text-vd-bone leading-[1.05]">
              Four principles we{" "}
              <span className="text-gold-gradient italic">won&apos;t</span>{" "}
              compromise on.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <GlowCard key={v.title}>
                  <div className="p-7 flex flex-col gap-5 h-full">
                    <span className="w-10 h-10 grid place-items-center rounded-full border border-vd-gold/30 bg-vd-gold/[0.05] text-vd-gold">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-display text-xl tracking-[-0.01em] text-vd-bone">
                      {v.title}
                    </h3>
                    <p className="text-sm text-vd-mute leading-[1.7]">
                      {v.body}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
            {[
              { v: "2022", l: "Studio founded" },
              { v: "20+", l: "Brands launched" },
              { v: "4", l: "Countries served" },
              { v: "90%", l: "Client retention" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-5xl lg:text-6xl text-gold-gradient tracking-[-0.03em]">
                  {s.v}
                </p>
                <p className="mt-3 text-[11px] tracking-[0.25em] uppercase text-vd-mute">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
