import Link from "next/link";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
  onDark?: boolean;
};

export function TextLink({
  href,
  children,
  className,
  arrow = false,
  onDark = false,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "link inline-flex items-center gap-[0.35em] font-sans",
        onDark ? "text-cream" : "text-ink",
        className,
      )}
      style={
        onDark
          ? ({ "--underline-color": "var(--gold-soft)" } as React.CSSProperties)
          : undefined
      }
    >
      <span className="relative">
        {children}
      </span>
      {arrow && (
        <span
          className="group-hover:translate-x-[2px]"
          style={{
            transition:
              "translate var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          aria-hidden
        >
          &rarr;
        </span>
      )}
    </Link>
  );
}
