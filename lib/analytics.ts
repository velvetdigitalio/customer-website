/**
 * Analytics configuration and event helper.
 *
 * The IDs below are PUBLIC (they appear in page source on every analytics-
 * enabled site), so they live in code, not secrets. While both are empty, ALL
 * tracking and the consent banner stay dormant — nothing loads. Fill them in
 * (or set the NEXT_PUBLIC_* env vars at build time) to switch tracking on.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-1R22ZGQ8JR";
export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18297207734";
export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1743467796891183";

export const ANALYTICS_ENABLED = Boolean(GA_ID || GOOGLE_ADS_ID || META_PIXEL_ID);

/**
 * When false (current), there is no consent banner: analytics and advertising
 * default to granted for everyone, so we track all visitors — except those whose
 * browser sends a Global Privacy Control opt-out, which we still honour. Chosen
 * for a UAE-focused audience. Flip to true to bring the consent banner back
 * (e.g. if you start targeting the EU/UK).
 */
export const REQUIRE_CONSENT = false;

/** localStorage key holding the visitor's consent decision. */
export const CONSENT_KEY = "vd-consent-v1";

type GtagFn = (...args: unknown[]) => void;
type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
    fbq?: FbqFn;
  }
}

/**
 * Fire an event to GA4 and Meta Pixel (whichever are loaded and consented).
 * Respects consent automatically: if the trackers haven't been granted consent,
 * the calls queue/withhold per Consent Mode and Meta's consent state.
 *
 * @param name    GA4 event name (snake_case).
 * @param params  Event parameters.
 * @param pixel   Optional Meta Pixel mapping: the standard event name (e.g.
 *                "Lead", "Contact", "Schedule"). Omit to skip the Pixel.
 */
export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
  pixel?: { event: string; custom?: boolean },
): void {
  if (typeof window === "undefined") return;
  if (window.gtag && GA_ID) window.gtag("event", name, params);
  if (window.fbq && META_PIXEL_ID && pixel) {
    window.fbq(pixel.custom ? "trackCustom" : "track", pixel.event, params);
  }
}
