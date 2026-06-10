import Link from "next/link";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  onDark?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Wordmark({ onDark = false, className, onClick }: WordmarkProps) {
  return (
    // [CLIENT-TODO: replace text lockup with real vector mark at /assets/brand/velvet-mark.svg]
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label="Velvet Digital — home"
    >
      <span
        className={cn(
          "font-serif font-medium tracking-[0.18em] text-[length:inherit]",
          onDark ? "text-cream" : "text-ink",
        )}
        style={{
          transition: "color var(--dur-base) cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        VELVET
      </span>
      <span
        className={cn(
          "font-sans font-normal tracking-[0.28em] uppercase",
          onDark ? "text-cream-2" : "text-ink-2",
        )}
        style={{
          fontSize: "0.55em",
          marginTop: "0.2em",
          transition: "color var(--dur-base) cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        Digital
      </span>
    </Link>
  );
}
