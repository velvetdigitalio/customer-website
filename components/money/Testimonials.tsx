import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Testimonial } from "@/data/testimonials";

/**
 * Visible testimonials — the human-readable counterpart to the Product review
 * JSON-LD. The SAME `testimonials` array feeds both this section and the schema
 * (via buildServiceProductSchema), so what a crawler reads always matches what a
 * visitor sees, as Google requires for review rich results.
 *
 * Editorial and restrained per the brand system: one understated rating line —
 * no star-icon spam — Cormorant for the quotes, Inter for attribution.
 */
export function Testimonials({
  testimonials,
  ratingValue,
  reviewCount,
  bestRating = "5",
  heading = "In their words",
  surface = "paper-2",
}: {
  testimonials: Testimonial[];
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  heading?: string;
  surface?: "paper" | "paper-2";
}) {
  if (testimonials.length === 0) return null;

  return (
    <Section surface={surface} ariaLabel="Client testimonials">
      <div className="max-w-[820px] mx-auto">
        <Eyebrow withRule>Proof</Eyebrow>
        <h2 className="mt-md font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
          {heading}
        </h2>

        {/* One quiet rating line — mirrors aggregateRating in the schema. */}
        <p className="mt-sm flex items-baseline gap-sm text-ink-2 text-[length:var(--step--1)]">
          <span className="font-serif text-gold text-[length:var(--step-1)] leading-none">
            {ratingValue}
          </span>
          <span aria-hidden className="text-gold tracking-[0.1em]">
            ★★★★★
          </span>
          <span>
            average of {reviewCount} client reviews (out of {bestRating})
          </span>
        </p>

        <div className="mt-xl grid grid-cols-1 gap-lg md:grid-cols-2 md:gap-xl">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col border-t border-hairline pt-md"
            >
              <blockquote className="font-serif italic text-ink text-[length:var(--step-1)] leading-[1.5]">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-md font-sans text-[length:var(--step--1)] not-italic">
                <span className="text-ink">{t.author}</span>
                {t.role && <span className="text-ink-2"> — {t.role}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
