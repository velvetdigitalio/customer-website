import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Shared hero for money pages. Sits under <Breadcrumbs>, which clears the header. */
export function MoneyHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
}) {
  return (
    <Container className="pt-md pb-xl lg:pb-2xl">
      <Eyebrow withRule>{eyebrow}</Eyebrow>
      <h1 className="mt-md font-serif text-[length:var(--step-3)] lg:text-[length:var(--step-4)] leading-[1.06] tracking-[-0.02em] text-ink max-w-[20ch]">
        {title}
      </h1>
      <p className="mt-md text-ink-2 max-w-[60ch] text-[length:var(--step-0)] leading-[1.55]">
        {lead}
      </p>
    </Container>
  );
}
