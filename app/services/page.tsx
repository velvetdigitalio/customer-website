import { PageHero } from "@/components/ui/PageHero";
import { GlowCard } from "@/components/ui/GlowCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { Palette, Megaphone, Globe, Cpu, Check } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

const services = [
  {
    id: "branding",
    icon: Palette,
    title: "Content & Branding",
    tagline: "Visual storytelling that builds desire.",
    body: "We rebuild your visual identity, content engine and tone of voice — then run a monthly studio that ships reels, photoshoots, carousels and stories that look like your brand sold for 10x more.",
    features: [
      "Brand identity & guidelines",
      "Reel & photoshoot direction",
      "Monthly content production",
      "Editorial calendar & strategy",
      "Founder positioning",
    ],
  },
  {
    id: "performance",
    icon: Megaphone,
    title: "Performance Marketing",
    tagline: "Profitable ads, every month.",
    body: "Meta, Google, YouTube and TikTok ads engineered around your unit economics — not vanity metrics. Weekly creative refresh, daily optimisation, transparent dashboards.",
    features: [
      "Meta & Google Ads",
      "Creative testing engine",
      "Landing-page optimisation",
      "Attribution & dashboards",
      "Weekly performance reviews",
    ],
  },
  {
    id: "seo",
    icon: Globe,
    title: "SEO + GEO",
    tagline: "Search dominance for Google and AI.",
    body: "Traditional SEO meets generative-engine optimisation. We help your brand show up first on Google — and inside ChatGPT, Perplexity and Gemini when buyers research your category.",
    features: [
      "Technical SEO audit",
      "Long-form editorial",
      "Generative engine optimisation",
      "Local & international SEO",
      "Quarterly authority sprints",
    ],
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI Automation",
    tagline: "Smart business systems.",
    body: "We wire your marketing, sales and ops into a single automated engine. WhatsApp bots, AI chat, CRM workflows, lead routing, internal copilots — built for your team, not a template.",
    features: [
      "WhatsApp Business automation",
      "GPT-powered chatbots",
      "Lead routing & scoring",
      "CRM workflow design",
      "Internal AI copilots",
    ],
  },
];

export const metadata = {
  title: "Services — Velvet Digital",
  description:
    "Content, performance marketing, SEO, AI automation and premium web experiences for modern brands.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            A full <span className="text-gold-gradient italic">growth</span>{" "}
            stack, wrapped in cinematic craft.
          </>
        }
        description="Five disciplines, one studio. Engaged as a monthly retainer or scoped as a single sprint."
      >
        <div className="flex flex-wrap gap-3">
          <BookCallButton utmSource="services_hero" label="Book a strategy call" />
          <GoldButton href="/work" variant="ghost">
            See our work
          </GoldButton>
        </div>
      </PageHero>

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 flex flex-col gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <GlowCard
                key={s.id}
                glow={i % 2 === 0 ? "purple" : "gold"}
                className=""
              >
                <div
                  id={s.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12 scroll-mt-32"
                >
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 w-fit px-2.5 py-1 rounded-full border border-vd-gold/25 bg-vd-gold/[0.05] text-[10px] tracking-[0.25em] uppercase text-vd-gold">
                      <Icon size={11} />
                      0{i + 1}
                    </div>
                    <h2 className="mt-5 font-display text-3xl lg:text-5xl tracking-[-0.02em] text-vd-bone leading-[1.05]">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-vd-gold/90 text-sm">{s.tagline}</p>
                  </div>
                  <div className="lg:col-span-7 flex flex-col gap-7">
                    <p className="text-[16px] text-vd-bone/80 leading-[1.75]">
                      {s.body}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm text-vd-mute"
                        >
                          <Check
                            size={14}
                            className="mt-0.5 text-vd-gold shrink-0"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
