import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { GlowCard } from "@/components/ui/GlowCard";
import { ArrowUpRight } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Insights — Velvet Digital",
  description:
    "Essays, breakdowns and frameworks on luxury brand growth, performance marketing and AI automation.",
};

const featured = {
  category: "Brand",
  title: "The new luxury playbook: why scarcity beats reach.",
  excerpt:
    "Audience is no longer the asset. Resonance is. A deep look at the operating model behind brands like Aesop, Loewe and the new wave of founder-led labels — and why agencies are still optimising for the wrong metric.",
  read: "9 min read",
  hue: 285,
};

const posts = [
  {
    category: "Performance",
    title: "Meta creatives are now a content engine problem, not an ads problem.",
    excerpt:
      "Why a CMO + content lead now matter more than a media buyer for performance growth.",
    read: "6 min",
    hue: 30,
  },
  {
    category: "AI",
    title:
      "We replaced our SDR with a GPT agent for 30 days. Here is what happened.",
    excerpt:
      "An honest breakdown — what worked, what failed, and the architecture we ended up keeping.",
    read: "11 min",
    hue: 220,
  },
  {
    category: "Brand",
    title: "Velvet, Olive, Ink: a palette guide for premium founder brands.",
    excerpt:
      "Why dark + accent palettes outperform pastel-driven aesthetics in 2026.",
    read: "5 min",
    hue: 320,
  },
  {
    category: "Process",
    title: "How we ship a brand identity in 21 days without losing taste.",
    excerpt:
      "The internal sprint structure we run for every premium identity engagement.",
    read: "8 min",
    hue: 50,
  },
  {
    category: "SEO",
    title:
      "GEO: how to rank inside ChatGPT, Perplexity and Gemini before your competitors.",
    excerpt:
      "A practical 4-step framework, with examples from luxury, hospitality and B2B SaaS.",
    read: "12 min",
    hue: 200,
  },
  {
    category: "Performance",
    title: "Stop A/B testing copy. Test offer architecture.",
    excerpt:
      "The single highest-leverage variable most performance teams ignore.",
    read: "7 min",
    hue: 270,
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Essays on brand, growth and{" "}
            <span className="text-gold-gradient italic">intelligent</span>{" "}
            marketing.
          </>
        }
        description="Long-form thinking from the studio. No SEO bait, no thinly-veiled sales pitches — only the frameworks we use with our own clients."
      />

      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <GlowCard glow="purple">
            <Link
              href="#"
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-10"
            >
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, hsl(${featured.hue},55%,22%) 0%, hsl(${featured.hue + 20},65%,8%) 100%)`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(245,215,122,0.20),transparent_55%)]" />
                <span className="absolute top-5 left-5 px-2.5 py-1 rounded-full border border-vd-gold/30 bg-black/30 backdrop-blur text-[10px] tracking-[0.25em] uppercase text-vd-gold">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center gap-5">
                <h2 className="font-display text-3xl lg:text-5xl tracking-[-0.02em] text-vd-bone leading-[1.05]">
                  {featured.title}
                </h2>
                <p className="text-[16px] text-vd-mute leading-[1.7] max-w-xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-vd-mute">
                  <span>{featured.read}</span>
                  <span className="w-1 h-1 rounded-full bg-vd-mute/50" />
                  <span className="inline-flex items-center gap-1.5 text-vd-gold group-hover:translate-x-0.5 transition-transform">
                    Read essay
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          </GlowCard>
        </div>
      </section>

      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <Link
                key={p.title}
                href="#"
                className="group block"
              >
                <GlowCard>
                  <article className="flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, hsl(${p.hue},55%,22%) 0%, hsl(${p.hue + 20},65%,8%) 100%)`,
                        }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(245,215,122,0.18),transparent_55%)]" />
                      <span className="absolute top-4 left-4 px-2 py-0.5 rounded-full border border-vd-gold/30 bg-black/30 backdrop-blur text-[9px] tracking-[0.25em] uppercase text-vd-gold">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <h3 className="font-display text-xl tracking-[-0.01em] text-vd-bone leading-snug group-hover:text-vd-gold transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-vd-mute leading-[1.6] flex-1">
                        {p.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-vd-mute pt-3 mt-auto border-t border-white/[0.05]">
                        <span>{p.read}</span>
                        <ArrowUpRight
                          size={13}
                          className="text-vd-gold transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </article>
                </GlowCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
