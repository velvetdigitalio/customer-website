import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { VelvetMark } from "@/components/ui/VelvetMark";

export function FinalCta() {
  return (
    <Section surface="umber" className="relative overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ width: "clamp(12rem, 28vw, 24rem)", opacity: 0.04 }}
        aria-hidden="true"
      >
        <VelvetMark className="w-full h-auto text-cream" />
      </div>
      <div className="relative max-w-[600px] mx-auto text-center">
        <Reveal>
          <Eyebrow onDark className="justify-center">Working together</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-cream">
            Start with an <em className="italic text-gold">audit.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-md text-cream-2 max-w-[52ch] mx-auto">
            A short, honest review of your brand and digital presence — where it
            stands, and the most direct way forward. No pitch deck. We'll tell you
            plainly whether we're the right studio for you.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-sm text-gold text-[length:var(--step--1)]">
            A short review, not a sales call. No obligation, no long contract to start.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mt-xs text-cream-2 text-[length:var(--step--1)]">
            We take a small number of new brands each quarter.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-xs text-cream-2 text-[length:var(--step--1)]">
            Replies in two working days.
          </p>
        </Reveal>
        <Reveal delay={0.34}>
          <div className="mt-lg">
            <Button calendly onDark>Request an audit</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
