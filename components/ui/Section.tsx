import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  surface?: "paper" | "paper-2" | "umber" | "espresso";
  wide?: boolean;
  id?: string;
  ariaLabel?: string;
  /** Marks this as a dark hero so the fixed header inverts to light over it. */
  heroDark?: boolean;
};

const surfaceClasses = {
  paper: "bg-paper text-ink",
  "paper-2": "bg-paper-2 text-ink",
  umber: "bg-umber text-cream",
  espresso: "bg-espresso text-cream",
};

export function Section({
  children,
  className,
  surface = "paper",
  wide = false,
  id,
  ariaLabel,
  heroDark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      {...(heroDark ? { "data-hero-dark": "" } : {})}
      className={cn(
        "py-2xl lg:py-3xl",
        surfaceClasses[surface],
        className,
      )}
    >
      <Container wide={wide}>{children}</Container>
    </section>
  );
}
