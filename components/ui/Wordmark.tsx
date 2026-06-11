import Link from "next/link";
import { cn } from "@/lib/cn";
import { VelvetMark } from "@/components/ui/VelvetMark";

type WordmarkProps = {
  onDark?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Wordmark({ onDark = false, className, onClick }: WordmarkProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex items-center gap-[0.6em]", className)}
      aria-label="Velvet Digital — home"
    >
      <VelvetMark
        className={cn(
          "w-[1.5em] h-[1.5em] shrink-0",
          onDark ? "text-cream" : "text-ink",
        )}
      />
      <span className="inline-flex flex-col leading-none">
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
      </span>
    </Link>
  );
}
