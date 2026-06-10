import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Understand",
    para: "We audit honestly. Most luxury brands arrive with a familiar set of problems: a feed that reads as a flat catalogue, creative that has fatigued its own audience, budget spent attracting the wrong buyer, and a local presence that has gone quiet. We map all of it before proposing anything.",
  },
  {
    num: "02",
    title: "Position",
    para: "We decide what the brand means and to whom. The work here is narrowing: the right buyer over the largest audience, a clear narrative over a list of products, a considered register over a loud one. Everything downstream depends on getting this right.",
  },
  {
    num: "03",
    title: "Make",
    para: "We build the brand, the content engine and the campaigns on a single coherent line — narrative work tied to real moments and milestones, not generic showcases — and we keep the creative fresh so attention holds.",
  },
  {
    num: "04",
    title: "Compound",
    para: "We put the quiet systems underneath: concierge, routing, attribution, local capture. So each month builds on the last instead of resetting, and the presence becomes an asset rather than an expense.",
  },
];

export function Approach() {
  return (
    <Section surface="umber" className="relative overflow-hidden">
      <Reveal>
        <Eyebrow withRule onDark>How we work</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <Heading level="h2" accent="weight" onDark className="mt-md">
          A process with weight.
        </Heading>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-sm text-cream-2 max-w-[62ch]">
          We begin by reading the distance between where a brand sits and where it
          should. Then we close it, deliberately, in a way that compounds.
        </p>
      </Reveal>
      <div className="mt-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={0.16 + i * 0.08}>
            <div className="relative overflow-hidden pt-xs">
              <span
                className="absolute -top-2 -right-1 font-serif select-none pointer-events-none hidden md:block"
                style={{
                  fontSize: "clamp(5rem, 8vw, 7rem)",
                  lineHeight: 0.85,
                  opacity: 0.06,
                  color: "var(--cream)",
                }}
                aria-hidden="true"
              >
                {step.num}
              </span>
              <div className="relative">
                <span className="font-serif text-[length:var(--step-1)] text-gold leading-none">
                  {step.num}
                </span>
                <div className="w-md h-px bg-gold mt-xs mb-sm" />
                <h3 className="font-serif text-[length:var(--step-1)] text-cream leading-[1.2] mb-xs">
                  {step.title}
                </h3>
                <p className="text-cream-2 text-[length:var(--step--1)]">
                  {step.para}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
