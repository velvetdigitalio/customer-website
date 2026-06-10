import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

export function Positioning() {
  return (
    <Section surface="paper">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(220px,300px)] gap-lg md:gap-xl items-end">
        {/* Text column */}
        <div>
          <Reveal>
            <Eyebrow withRule>The studio</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink max-w-[22ch]">
              Most agencies are loud. The brands we work with are not.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-sm font-serif text-[length:var(--step-2)] leading-[1.2] tracking-[-0.02em] text-ink-2 max-w-[30ch]">
              We build presence the way a jeweller sets a stone — slowly,
              precisely, so the value is obvious without being announced.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-lg text-ink-2 max-w-[58ch]">
              Velvet is a small studio working with fine jewellery houses and
              interior designers across the UAE. We handle the brand, the content
              that carries it, and the quiet systems underneath — so the work
              compounds instead of resetting each month.
            </p>
          </Reveal>
        </div>

        {/* Detail image — aligned to the baseline of the text column */}
        <Reveal delay={0.3}>
          <EditorialImage
            src="/images/gold-ring.png"
            alt="Gold band on layered craft paper, a material study in warmth"
            className="aspect-[3/4] w-full"
            feather={["left", "top"]}
            parallax
            objectPosition="50% 45%"
          />
        </Reveal>
      </div>
    </Section>
  );
}
