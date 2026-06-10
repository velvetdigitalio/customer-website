import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { RevealDemo } from "./RevealDemo";

export const metadata: Metadata = {
  title: "Styleguide — Velvet Digital (dev only)",
  robots: "noindex",
};

const colors = [
  { token: "--paper", label: "Paper", hex: "#F4EFE6", tw: "bg-paper" },
  { token: "--paper-2", label: "Paper 2", hex: "#ECE4D6", tw: "bg-paper-2" },
  { token: "--ink", label: "Ink", hex: "#1C1814", tw: "bg-ink" },
  { token: "--ink-2", label: "Ink 2", hex: "#4A433A", tw: "bg-ink-2" },
  { token: "--hairline", label: "Hairline", hex: "#D8CFBE", tw: "bg-hairline" },
  { token: "--umber", label: "Umber", hex: "#211B14", tw: "bg-umber" },
  { token: "--umber-2", label: "Umber 2", hex: "#2C251C", tw: "bg-umber-2" },
  { token: "--cream", label: "Cream", hex: "#F2E9D2", tw: "bg-cream" },
  { token: "--cream-2", label: "Cream 2", hex: "#B8AE97", tw: "bg-cream-2" },
  { token: "--gold", label: "Gold", hex: "#B08D4F", tw: "bg-gold" },
  {
    token: "--gold-soft",
    label: "Gold Soft",
    hex: "#C9AE7A",
    tw: "bg-gold-soft",
  },
];

const spacingSteps = [
  { token: "--space-2xs", label: "2xs", value: "4px" },
  { token: "--space-xs", label: "xs", value: "8px" },
  { token: "--space-sm", label: "sm", value: "16px" },
  { token: "--space-md", label: "md", value: "24px" },
  { token: "--space-lg", label: "lg", value: "40px" },
  { token: "--space-xl", label: "xl", value: "64px" },
  { token: "--space-2xl", label: "2xl", value: "96px" },
  { token: "--space-3xl", label: "3xl", value: "128px" },
];

const typeSteps = [
  { step: "--step--1", label: "Step -1 (eyebrow)", sample: "SMALL CAPS LABEL" },
  {
    step: "--step-0",
    label: "Step 0 (body)",
    sample: "Body text at default size",
  },
  {
    step: "--step-1",
    label: "Step 1 (lead)",
    sample: "Lead or large body text",
  },
  { step: "--step-2", label: "Step 2 (H3)", sample: "Section sub-heading" },
  { step: "--step-3", label: "Step 3 (H2)", sample: "Section heading" },
  { step: "--step-4", label: "Step 4 (H1 / hero)", sample: "Hero headline" },
  {
    step: "--step-5",
    label: "Step 5 (oversized)",
    sample: "Editorial display",
  },
];

function Swatch({ color }: { color: (typeof colors)[number] }) {
  const isDark =
    color.token === "--ink" ||
    color.token === "--ink-2" ||
    color.token === "--umber" ||
    color.token === "--umber-2" ||
    color.token === "--gold";
  return (
    <div className="flex flex-col gap-xs">
      <div
        className={`${color.tw} h-20 rounded-[var(--radius-md)] border border-hairline`}
      />
      <div className="flex justify-between items-baseline">
        <span
          className={`font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] ${isDark ? "text-ink" : "text-ink-2"}`}
        >
          {color.label}
        </span>
        <code className="font-sans text-[length:var(--step--1)] text-ink-2">
          {color.hex}
        </code>
      </div>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <main className="bg-paper text-ink">
      {/* ── Header ── */}
      <div className="border-b border-hairline">
        <Container className="py-lg">
          <Eyebrow withRule>Dev only</Eyebrow>
          <Heading level="h1" className="mt-sm">
            Styleguide
          </Heading>
          <p className="mt-sm text-ink-2 max-w-[68ch]">
            Phase 0 + 1 checkpoint. Tokens, primitives, and motion.
          </p>
        </Container>
      </div>

      {/* ═══════════════════════════════════════
          PHASE 0 — Tokens
          ═══════════════════════════════════════ */}

      <Container>
        {/* ── Colours ── */}
        <section className="py-2xl border-b border-hairline">
          <Eyebrow className="mb-sm">Colours</Eyebrow>
          <Heading level="h2" className="mb-lg">
            Palette
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-md">
            {colors.map((c) => (
              <Swatch key={c.token} color={c} />
            ))}
          </div>
        </section>

        {/* ── Text on surfaces ── */}
        <section className="py-2xl border-b border-hairline">
          <Eyebrow className="mb-sm">Colours</Eyebrow>
          <Heading level="h2" className="mb-lg">
            Text on surfaces
          </Heading>
          <div className="flex flex-col gap-md">
            <div className="bg-paper p-lg rounded-[var(--radius-md)] border border-hairline">
              <Eyebrow className="mb-xs">Paper surface</Eyebrow>
              <p className="text-ink font-serif text-[length:var(--step-2)] leading-[1.15] mb-xs">
                Ink on paper (primary heading)
              </p>
              <p className="text-ink-2">
                Ink-2 on paper (secondary / caption text)
              </p>
            </div>
            <div className="bg-paper-2 p-lg rounded-[var(--radius-md)] border border-hairline">
              <Eyebrow className="mb-xs">Paper-2 surface</Eyebrow>
              <p className="text-ink font-serif text-[length:var(--step-2)] leading-[1.15] mb-xs">
                Ink on paper-2
              </p>
              <p className="text-ink-2">Ink-2 on paper-2</p>
            </div>
            <div className="bg-umber p-lg rounded-[var(--radius-md)]">
              <Eyebrow onDark className="mb-xs">
                Umber surface
              </Eyebrow>
              <p className="text-cream font-serif text-[length:var(--step-2)] leading-[1.15] mb-xs">
                Cream on umber (primary heading)
              </p>
              <p className="text-cream-2">
                Cream-2 on umber (secondary / caption text)
              </p>
              <p className="text-gold mt-sm">Gold on umber (accent)</p>
            </div>
          </div>
        </section>

        {/* ── Type scale ── */}
        <section className="py-2xl border-b border-hairline">
          <Eyebrow className="mb-sm">Typography</Eyebrow>
          <Heading level="h2" className="mb-lg">
            Type scale
          </Heading>
          <div className="flex flex-col gap-lg">
            {typeSteps.map((t) => (
              <div key={t.step} className="border-b border-hairline pb-md">
                <p className="font-sans text-[length:var(--step--1)] text-ink-2 mb-2xs">
                  {t.label}
                </p>
                <p
                  className="font-serif leading-[1.1] tracking-[-0.02em] text-ink"
                  style={{ fontSize: `var(${t.step})` }}
                >
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Body text ── */}
        <section className="py-2xl border-b border-hairline">
          <Eyebrow className="mb-sm">Typography</Eyebrow>
          <Heading level="h2" className="mb-lg">
            Body text (Inter)
          </Heading>
          <div className="max-w-[68ch]">
            <p className="text-ink mb-md">
              Velvet is a small studio working with fine jewellery houses and
              interior designers across the UAE. We handle the brand, the content
              that carries it, and the quiet systems underneath — so the work
              compounds instead of resetting each month.
            </p>
            <p className="text-ink-2">
              Most agencies are loud. The brands we work with are not. We build
              presence the way a jeweller sets a stone — slowly, precisely, so
              the value is obvious without being announced.
            </p>
          </div>
        </section>

        {/* ── Spacing ── */}
        <section className="py-2xl border-b border-hairline">
          <Eyebrow className="mb-sm">Spacing</Eyebrow>
          <Heading level="h2" className="mb-lg">
            Scale (8px base)
          </Heading>
          <div className="flex flex-col gap-sm">
            {spacingSteps.map((s) => (
              <div key={s.token} className="flex items-center gap-md">
                <code className="font-sans text-[length:var(--step--1)] text-ink-2 w-12 shrink-0">
                  {s.label}
                </code>
                <div
                  className="bg-gold rounded-[var(--radius-sm)] h-4"
                  style={{ width: s.value }}
                />
                <span className="font-sans text-[length:var(--step--1)] text-ink-2">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Radii ── */}
        <section className="py-2xl border-b border-hairline">
          <Eyebrow className="mb-sm">Tokens</Eyebrow>
          <Heading level="h2" className="mb-lg">
            Border radii
          </Heading>
          <div className="flex gap-lg items-end">
            {[
              { r: "var(--radius-sm)", label: "sm (4px)" },
              { r: "var(--radius-md)", label: "md (8px)" },
              { r: "var(--radius-lg)", label: "lg (14px)" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-xs">
                <div
                  className="w-16 h-16 bg-umber"
                  style={{ borderRadius: item.r }}
                />
                <code className="text-[length:var(--step--1)] text-ink-2">
                  {item.label}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* ── Hairlines & shadow ── */}
        <section className="py-2xl border-b border-hairline">
          <Eyebrow className="mb-sm">Tokens</Eyebrow>
          <Heading level="h2" className="mb-lg">
            Hairlines &amp; shadow
          </Heading>
          <div className="flex flex-col gap-lg">
            <div>
              <p className="text-[length:var(--step--1)] text-ink-2 mb-sm">
                1px hairline on paper
              </p>
              <div className="border-t border-hairline" />
            </div>
            <div className="bg-umber p-lg rounded-[var(--radius-md)]">
              <p className="text-[length:var(--step--1)] text-cream-2 mb-sm">
                1px hairline on umber
              </p>
              <div className="border-t border-cream/12" />
            </div>
            <div>
              <p className="text-[length:var(--step--1)] text-ink-2 mb-sm">
                Soft media shadow (only use)
              </p>
              <div
                className="w-40 h-24 bg-paper-2 rounded-[var(--radius-md)]"
                style={{ boxShadow: "0 8px 30px rgba(28,24,20,0.08)" }}
              />
            </div>
          </div>
        </section>
      </Container>

      {/* ═══════════════════════════════════════
          PHASE 1 — Primitives
          ═══════════════════════════════════════ */}

      {/* ── Eyebrow primitive ── */}
      <Section>
        <Eyebrow className="mb-sm">Primitives</Eyebrow>
        <Heading level="h2" className="mb-lg">
          Eyebrow
        </Heading>
        <div className="flex flex-col gap-md">
          <Eyebrow>Default eyebrow (ink-2)</Eyebrow>
          <Eyebrow withRule>With gold rule</Eyebrow>
          <div className="bg-umber p-lg rounded-[var(--radius-md)]">
            <Eyebrow onDark>On dark (gold)</Eyebrow>
            <Eyebrow onDark withRule className="mt-sm">
              On dark with rule
            </Eyebrow>
          </div>
        </div>
      </Section>

      {/* ── Heading primitive ── */}
      <Section surface="paper-2">
        <Eyebrow className="mb-sm">Primitives</Eyebrow>
        <Heading level="h2" className="mb-lg">
          Heading (with accent prop)
        </Heading>
        <div className="flex flex-col gap-xl">
          <div>
            <Heading level="h1" accent="quietly">
              Luxury grows quietly.
            </Heading>
          </div>
          <div>
            <Heading level="h2" accent="audit">
              Start with an audit.
            </Heading>
          </div>
          <div>
            <Heading level="h3" accent="stone">
              Set like a stone.
            </Heading>
          </div>
          <div>
            <Heading level="h4">No accent — plain heading</Heading>
          </div>
          <div className="bg-umber p-xl rounded-[var(--radius-md)]">
            <Heading level="h2" onDark accent="quietly">
              Luxury grows quietly.
            </Heading>
          </div>
        </div>
      </Section>

      {/* ── Section primitive surfaces ── */}
      <Section>
        <Eyebrow className="mb-sm">Primitives</Eyebrow>
        <Heading level="h2" className="mb-md">
          Section — paper surface
        </Heading>
        <p className="text-ink-2 max-w-[68ch]">
          Default section with Container, correct padding (96px mobile /
          128px desktop), 1200px max-width.
        </p>
      </Section>

      <Section surface="paper-2">
        <Eyebrow className="mb-sm">Primitives</Eyebrow>
        <Heading level="h2" className="mb-md">
          Section — paper-2 surface
        </Heading>
        <p className="text-ink-2 max-w-[68ch]">
          Subtle alternate background for visual rhythm between sections.
        </p>
      </Section>

      <Section surface="umber">
        <Eyebrow onDark className="mb-sm">
          Primitives
        </Eyebrow>
        <Heading level="h2" onDark className="mb-md">
          Section — umber surface
        </Heading>
        <p className="text-cream-2 max-w-[68ch]">
          Dark contrast band. Max 2–3 across the whole page.
        </p>
      </Section>

      {/* ── Buttons ── */}
      <Section>
        <Eyebrow className="mb-sm">Primitives</Eyebrow>
        <Heading level="h2" className="mb-lg">
          Button
        </Heading>
        <div className="flex flex-col gap-lg">
          <div>
            <p className="text-[length:var(--step--1)] text-ink-2 mb-sm uppercase tracking-[0.18em]">
              Primary on paper
            </p>
            <div className="flex flex-wrap gap-md items-center">
              <Button href="/">Link button</Button>
              <Button calendly>Request an audit</Button>
            </div>
          </div>
          <div className="bg-umber p-xl rounded-[var(--radius-md)]">
            <p className="text-[length:var(--step--1)] text-cream-2 mb-sm uppercase tracking-[0.18em]">
              Primary on umber
            </p>
            <div className="flex flex-wrap gap-md items-center">
              <Button href="/" onDark>
                Link button
              </Button>
              <Button calendly onDark>
                Request an audit
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TextLink ── */}
      <Section surface="paper-2">
        <Eyebrow className="mb-sm">Primitives</Eyebrow>
        <Heading level="h2" className="mb-lg">
          TextLink
        </Heading>
        <div className="flex flex-col gap-lg">
          <div className="flex flex-wrap gap-xl items-center">
            <TextLink href="/">Default link</TextLink>
            <TextLink href="/" arrow>
              View the work
            </TextLink>
          </div>
          <div className="bg-umber p-xl rounded-[var(--radius-md)]">
            <div className="flex flex-wrap gap-xl items-center">
              <TextLink href="/" onDark>
                Link on dark
              </TextLink>
              <TextLink href="/" onDark arrow>
                About the studio
              </TextLink>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Reveal / Motion — scroll trigger zone ── */}
      <Section id="motion">
        <div className="border border-gold/30 rounded-[var(--radius-md)] p-xl text-center">
          <Eyebrow withRule className="mb-sm justify-center">
            Motion
          </Eyebrow>
          <Heading level="h2" className="mb-md">
            Scroll down to evaluate Reveal
          </Heading>
          <p className="text-ink-2 max-w-[48ch] mx-auto">
            The demos below use whileInView — they animate only when
            scrolled into the viewport. Elements already visible on load
            render in their final state (hero gets its own on-load entrance
            in Phase 3).
          </p>
        </div>
      </Section>

      <RevealDemo />

      {/* ── Motion reference ── */}
      <Section>
        <Eyebrow className="mb-sm">Motion</Eyebrow>
        <Heading level="h2" className="mb-lg">
          Motion tokens (reference)
        </Heading>
        <div className="flex flex-col gap-sm max-w-[68ch]">
          <p className="text-ink-2">
            <strong className="text-ink">Ease:</strong>{" "}
            <code className="text-ink-2">cubic-bezier(0.22, 1, 0.36, 1)</code>
          </p>
          <p className="text-ink-2">
            <strong className="text-ink">Fast:</strong> 200ms (hover only)
          </p>
          <p className="text-ink-2">
            <strong className="text-ink">Base:</strong> 420ms (entrance default)
          </p>
          <p className="text-ink-2">
            <strong className="text-ink">Slow:</strong> 700ms
          </p>
          <p className="text-ink-2">
            <strong className="text-ink">Entrance:</strong> fade + 12px rise,
            stagger 70–80ms. Fully disabled under prefers-reduced-motion.
          </p>
        </div>
      </Section>
    </main>
  );
}
