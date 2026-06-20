import { cn } from "@/lib/cn";
import { whatsappUrl, REFERRAL_INTRO_MESSAGE } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
  /** Prefilled message; defaults to the referral intro. Pass "" for a blank chat. */
  message?: string;
};

const FAST = {
  transitionDuration: "var(--dur-fast)",
  transitionTimingFunction: "var(--ease-out)",
} as const;

/**
 * Primary action styled to match Button, but a real external anchor so the
 * wa.me deep link opens WhatsApp directly (no client JS, no Next routing).
 *
 * Microinteraction (all at --dur-fast, reduced-motion safe):
 *  - whole-button hover colour sweeps in left→right (the brand's scaleX
 *    draw motif, the same one used on link underlines)
 *  - the arrow "conveyors": the resting arrow slides out as a fresh one
 *    slides in from the left
 *  - a 1px tactile press on click
 * Reduced motion: the sweep falls back to an instant colour change, the
 * arrow stays static — no movement.
 */
export function WhatsAppButton({
  children,
  className,
  onDark = false,
  message = REFERRAL_INTRO_MESSAGE,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative overflow-hidden inline-flex items-center justify-center gap-[0.6em] px-lg py-sm font-sans text-[length:var(--step-0)] text-center uppercase tracking-[0.08em] rounded-[var(--radius-sm)] cursor-pointer",
        "transition-transform active:translate-y-px",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
        onDark
          ? "bg-cream text-ink motion-reduce:hover:bg-gold-soft"
          : "bg-ink text-cream motion-reduce:hover:bg-umber",
        className,
      )}
      style={FAST}
    >
      {/* Whole-button colour sweep (left→right scaleX draw) */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 origin-left scale-x-0",
          "motion-safe:transition-transform motion-safe:group-hover:scale-x-100",
          onDark ? "bg-gold-soft" : "bg-umber-2",
        )}
        style={FAST}
      />

      <span className="relative z-[1]">{children}</span>

      {/* Arrow conveyor */}
      <span
        aria-hidden
        className="relative z-[1] inline-block h-[1em] w-[0.9em] overflow-hidden"
      >
        <span
          className="absolute inset-0 flex items-center justify-center motion-safe:transition-transform motion-safe:group-hover:translate-x-[180%]"
          style={FAST}
        >
          &rarr;
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center -translate-x-[180%] motion-safe:transition-transform motion-safe:group-hover:translate-x-0"
          style={FAST}
        >
          &rarr;
        </span>
      </span>
    </a>
  );
}
