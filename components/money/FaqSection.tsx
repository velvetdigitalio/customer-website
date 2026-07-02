import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Faq } from "@/lib/schema";

/**
 * Renders the visible FAQ as native <details> accordions — fully server-
 * rendered, no client JS, content present in the static HTML. Feed the SAME
 * `faqs` array into faqPageLd() so the schema and the visible copy never drift.
 */
export function FaqSection({
  faqs,
  heading = "Questions, answered",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  return (
    <Section surface="paper-2" ariaLabel="Frequently asked questions">
      <div className="max-w-[760px] mx-auto">
        <Eyebrow withRule>Common questions</Eyebrow>
        <h2 className="mt-md font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
          {heading}
        </h2>
        <div className="mt-lg border-t border-hairline">
          {faqs.map((f, i) => (
            <details key={i} className="group border-b border-hairline py-md">
              <summary className="flex cursor-pointer items-start justify-between gap-md list-none font-serif text-[length:var(--step-1)] leading-[1.3] text-ink [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="mt-[0.15em] shrink-0 text-gold transition-transform group-open:rotate-45"
                  style={{ transitionDuration: "var(--dur-fast)" }}
                >
                  +
                </span>
              </summary>
              <p className="mt-sm max-w-[68ch] text-ink-2 leading-[1.7]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
