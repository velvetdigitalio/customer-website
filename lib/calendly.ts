export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/yj291197/30min";

export const CALENDLY_PAGE_SETTINGS = {
  backgroundColor: "0a0a0b",
  textColor: "ede7dc",
  primaryColor: "d4af37",
  hideLandingPageDetails: false,
  hideEventTypeDetails: false,
  hideGdprBanner: true,
} as const;
