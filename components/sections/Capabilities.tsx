import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  "Brand systems",
  "Editorial photography",
  "Reels & film",
  "Paid media",
  "WhatsApp & CRM automation",
  "Analytics",
];

export function Capabilities() {
  return (
    <Section surface="paper" className="py-xl lg:py-xl">
      <Reveal>
        <div className="h-px bg-gold/15" aria-hidden="true" />
        <p className="my-lg text-center text-ink-2 text-[length:var(--step--1)] uppercase tracking-[0.12em] flex flex-wrap justify-center gap-x-md gap-y-xs">
          {capabilities.map((cap, i) => (
            <span key={cap} className="flex items-center gap-md">
              {i > 0 && (
                <span className="text-gold/40" aria-hidden="true">
                  ·
                </span>
              )}
              {cap}
            </span>
          ))}
        </p>
        <div className="h-px bg-gold/15" aria-hidden="true" />
      </Reveal>
    </Section>
  );
}
