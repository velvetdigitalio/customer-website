"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

export function RevealDemo() {
  return (
    <>
      <Section surface="paper">
        <Eyebrow className="mb-sm">Primitives</Eyebrow>
        <Heading level="h2" className="mb-md">
          Reveal (scroll-triggered entrance)
        </Heading>
        <p className="text-ink-2 max-w-[68ch] mb-lg">
          Scroll down to see elements fade + rise into view. Each uses the
          Reveal wrapper with staggered delays (70ms). Motion is disabled under
          prefers-reduced-motion.
        </p>

        <div className="flex flex-col gap-lg">
          <Reveal>
            <div className="border border-hairline rounded-[var(--radius-md)] p-lg">
              <Heading level="h3">First element</Heading>
              <p className="text-ink-2 mt-xs">
                Fades in with 12px rise. Duration: 420ms (--dur-base).
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.07}>
            <div className="border border-hairline rounded-[var(--radius-md)] p-lg">
              <Heading level="h3">Second element</Heading>
              <p className="text-ink-2 mt-xs">
                Staggered by 70ms. Same motion, feels sequential.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="border border-hairline rounded-[var(--radius-md)] p-lg">
              <Heading level="h3">Third element</Heading>
              <p className="text-ink-2 mt-xs">
                Staggered by 140ms. The group settles rather than pops.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.21}>
            <div className="border border-hairline rounded-[var(--radius-md)] p-lg">
              <Heading level="h3">Fourth element</Heading>
              <p className="text-ink-2 mt-xs">
                Staggered by 210ms. The rhythm is calm, deliberate.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Reveal on umber */}
      <Section surface="umber">
        <Reveal>
          <Eyebrow onDark className="mb-sm">
            Primitives
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.07}>
          <Heading level="h2" onDark accent="quietly" className="mb-md">
            Reveal on umber — settling quietly.
          </Heading>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="text-cream-2 max-w-[68ch]">
            The same entrance motion on a dark surface. Eyebrow, heading, and
            body each stagger in sequence. The ease curve (0.22, 1, 0.36, 1)
            creates a slow deceleration — elements settle into place rather
            than snapping.
          </p>
        </Reveal>
      </Section>

      {/* Slow reveal variant */}
      <Section surface="paper-2">
        <Reveal duration={0.7}>
          <Eyebrow withRule className="mb-sm">
            Primitives
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.07} duration={0.7}>
          <Heading level="h2" accent="stone" className="mb-md">
            Slow reveal — set like a stone.
          </Heading>
        </Reveal>
        <Reveal delay={0.14} duration={0.7}>
          <p className="text-ink-2 max-w-[68ch]">
            Duration: 700ms (--dur-slow). For moments that deserve extra
            deliberation. The hero headline will use this register.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
