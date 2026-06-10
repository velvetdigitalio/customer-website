import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  className?: string;
};

/**
 * Consistent editorial page intro. Top padding clears the fixed header.
 */
export function PageHeader({ eyebrow, title, lead, className }: PageHeaderProps) {
  return (
    <section className={cn("bg-paper", className)}>
      <Container className="pt-28 lg:pt-36 pb-xl lg:pb-2xl">
        <Reveal>
          <Eyebrow withRule>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.08] tracking-[-0.02em] text-ink max-w-[20ch]">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.14}>
            <p className="mt-md text-ink-2 max-w-[60ch] text-[length:var(--step-0)] leading-[1.5]">
              {lead}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
