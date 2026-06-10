import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  withRule?: boolean;
  onDark?: boolean;
};

export function Eyebrow({
  children,
  className,
  withRule = false,
  onDark = false,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] flex items-center gap-sm",
        onDark ? "text-gold" : "text-ink-2",
        className,
      )}
    >
      {withRule && (
        <span
          className="inline-block w-md h-px bg-gold shrink-0"
          aria-hidden
        />
      )}
      {children}
    </p>
  );
}
