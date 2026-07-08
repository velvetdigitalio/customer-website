"use client";

import { useEffect } from "react";

/**
 * Instant client-side redirect used by the ad-destination pages (/book,
 * /whatsapp). Static-export friendly: it pre-renders a small branded holding
 * screen, then bounces to `to`. Three layers so it's near-instant and robust:
 *   1. <meta http-equiv="refresh"> — fires without JavaScript.
 *   2. window.location.replace — fastest path for real users; `replace` keeps
 *      the redirect page out of history so Back doesn't land here.
 *   3. a visible "Continue" link — fallback, and doubles as a compliant 1-tap
 *      landing page if an ad network rejects the auto-redirect.
 */
export function Redirect({ to, label }: { to: string; label: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <main className="min-h-screen bg-paper text-ink flex items-center justify-center px-md">
        <div className="text-center max-w-[36ch]">
          <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold">
            Velvet Digital
          </p>
          <p className="mt-md font-serif text-[length:var(--step-2)] leading-[1.2] tracking-[-0.02em]">
            Taking you through to {label}…
          </p>
          <p className="mt-lg text-ink-2 text-[length:var(--step--1)]">
            Not redirected?{" "}
            <a
              href={to}
              className="text-gold underline underline-offset-4"
              rel="nofollow"
            >
              Continue to {label}
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
