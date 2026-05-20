import { PageHero } from "@/components/ui/PageHero";
import { GlowCard } from "@/components/ui/GlowCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { DashboardMockup } from "@/components/visuals/DashboardMockup";
import { ReelMockup } from "@/components/visuals/ReelMockup";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Case Studies — Velvet Digital",
  description:
    "In-depth case studies of premium brand transformations led by Velvet Digital.",
};

const stats = [
  { label: "Revenue lift", value: "+460%" },
  { label: "ROAS", value: "12.4x" },
  { label: "New customers", value: "8,240" },
  { label: "Engagement", value: "+92%" },
];

const otherStudies = [
  { name: "Maison Nordlux", industry: "Hospitality", hue: 30 },
  { name: "Orbit/9", industry: "AI SaaS", hue: 250 },
  { name: "Vemara Studios", industry: "Fashion", hue: 320 },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Study · Featured"
        title={
          <>
            How Aurum Atelier became a{" "}
            <span className="text-gold-gradient italic">cult</span> skincare
            brand.
          </>
        }
        description="A 90-day rebrand + content + paid sprint that turned a quiet founder-led label into one of India's fastest-growing luxury skincare names."
      >
        <div className="flex flex-wrap gap-3">
          <BookCallButton
            utmSource="case_study_hero"
            label="Run a similar sprint"
          />
          <GoldButton href="/work" variant="ghost">
            See all work
          </GoldButton>
        </div>
      </PageHero>

      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s) => (
              <GlowCard key={s.label} glow="gold">
                <div className="p-7 text-center">
                  <p className="font-display text-4xl lg:text-5xl text-gold-gradient tracking-[-0.03em]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-vd-mute">
                    {s.label}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-vd-gold/80">
              Challenge
            </span>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl tracking-[-0.02em] text-vd-bone leading-[1.1]">
              A premium product hidden behind{" "}
              <span className="text-gold-gradient italic">amateur</span>{" "}
              presentation.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[16px] text-vd-bone/80 leading-[1.75]">
            <p>
              Aurum came to us with a product that consistently sold out at Rs.
              6,400 per jar — but a brand identity, content engine and paid
              funnel that looked like it belonged at one-tenth the price.
              Conversion on cold traffic was below 0.6%.
            </p>
            <p>
              The mandate: rebuild the entire visual world in 90 days and turn
              the brand into a category leader before the next launch window.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-vd-gold/80">
              Solution
            </span>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl tracking-[-0.02em] text-vd-bone leading-[1.1]">
              Full identity + content engine + performance overhaul.
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-vd-bone/80">
              {[
                "Rebuilt identity, palette and typography",
                "Two-day premium photoshoot",
                "Monthly content engine: 40 assets / month",
                "Meta + Google paid relaunch",
                "AI chatbot for product matching",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check size={15} className="mt-0.5 text-vd-gold shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 grid grid-cols-3 gap-4">
            <ReelMockup hue={285} className="w-full" />
            <ReelMockup hue={310} className="w-full" />
            <ReelMockup hue={260} className="w-full" />
          </div>
        </div>
      </section>

      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <DashboardMockup />
          </div>
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-vd-gold/80">
              Outcome
            </span>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl tracking-[-0.02em] text-vd-bone leading-[1.1]">
              From quiet launches to{" "}
              <span className="text-gold-gradient italic">monthly</span>{" "}
              sell-outs.
            </h2>
            <p className="mt-5 text-[16px] text-vd-bone/80 leading-[1.75]">
              In 90 days the brand became one of India&apos;s most talked-about
              luxury skincare labels. Three months later the founder closed a
              strategic investor round at a 7x higher valuation.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl tracking-[-0.02em] text-vd-bone">
            More case studies
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherStudies.map((s) => (
              <Link
                key={s.name}
                href="/work"
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-vd-gold/30 transition-colors duration-700"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, hsl(${s.hue},55%,22%) 0%, hsl(${s.hue + 20},65%,8%) 100%)`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(245,215,122,0.18),transparent_55%)]" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-vd-gold/80">
                    {s.industry}
                  </span>
                  <h3 className="mt-1 font-display text-2xl tracking-[-0.02em] text-vd-bone">
                    {s.name}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-vd-bone/70 group-hover:text-vd-gold transition-colors">
                    Read
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
