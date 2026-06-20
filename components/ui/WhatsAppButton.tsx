import { cn } from "@/lib/cn";
import { whatsappUrl, REFERRAL_INTRO_MESSAGE } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
  /** Prefilled message; defaults to the referral intro. Pass "" for a blank chat. */
  message?: string;
};

/**
 * Primary action styled to match Button, but a real external anchor so the
 * wa.me deep link opens WhatsApp directly (no client JS, no Next routing).
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
        "inline-block px-md py-xs font-sans text-[length:var(--step--1)] uppercase tracking-[0.08em] rounded-[var(--radius-sm)] transition-colors cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
        onDark
          ? "bg-cream text-ink hover:bg-gold-soft"
          : "bg-ink text-cream hover:bg-umber",
        className,
      )}
      style={{ transitionDuration: "var(--dur-fast)" }}
    >
      {children}
    </a>
  );
}
