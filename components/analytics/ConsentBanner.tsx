"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ANALYTICS_ENABLED,
  CONSENT_KEY,
  GA_ID,
  META_PIXEL_ID,
  REQUIRE_CONSENT,
} from "@/lib/analytics";

/** Ad bounce pages measure regardless of consent, so the banner is pointless
 *  there (it would just flash before the redirect). Suppress it on these. */
const SUPPRESS_ON = ["/book", "/whatsapp"];

/**
 * Minimal, on-brand consent banner. Shows only when tracking is enabled and the
 * visitor hasn't decided yet. Accept flips Google Consent Mode to granted and
 * grants the Meta Pixel; Decline leaves everything denied. The decision is
 * remembered so the banner appears once.
 */
export function ConsentBanner() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const suppressed = SUPPRESS_ON.some((p) => pathname === p || pathname === `${p}/`);

  useEffect(() => {
    if (!ANALYTICS_ENABLED || !REQUIRE_CONSENT || suppressed) return;
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, [suppressed]);

  function decide(granted: boolean) {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      /* ignore storage failures */
    }
    const state = granted ? "granted" : "denied";
    if (window.gtag && GA_ID) {
      window.gtag("consent", "update", {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
      if (granted) window.gtag("event", "page_view");
    }
    if (window.fbq && META_PIXEL_ID) {
      window.fbq("consent", granted ? "grant" : "revoke");
      if (granted) window.fbq("track", "PageView");
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-paper/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[900px] flex-col gap-md px-md py-md sm:flex-row sm:items-center sm:justify-between lg:px-lg">
        <p className="text-ink-2 text-[length:var(--step--1)] leading-[1.5] max-w-[62ch]">
          We use a few cookies to understand what&rsquo;s useful here and to bring
          our work to the right people. It keeps the studio&rsquo;s craft in front
          of those who&rsquo;ll appreciate it. Happy to allow it?{" "}
          <Link href="/privacy/" className="text-ink underline underline-offset-2">
            Privacy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-lg">
          <button
            type="button"
            onClick={() => decide(false)}
            className="text-ink-2 text-[length:var(--step--1)] underline underline-offset-2 hover:text-ink"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="bg-gold text-espresso font-medium px-lg py-xs text-[length:var(--step--1)] rounded-[var(--radius-sm)] hover:bg-gold-soft transition-colors"
          >
            Accept &amp; continue
          </button>
        </div>
      </div>
    </div>
  );
}
