import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";
import { CALENDLY_URL } from "@/lib/calendly";

/**
 * Ad-destination page. Put https://velvetdigital.io/book/ in an Instagram ad;
 * it bounces straight to Calendly. Not indexed.
 */
export const metadata: Metadata = {
  title: "Book a call — Velvet Digital",
  description: "Book a call with Velvet Digital.",
  robots: { index: false, follow: false },
};

export default function BookRedirectPage() {
  return (
    <Redirect
      to={CALENDLY_URL}
      label="our booking calendar"
      event={{ ga: "book_call", pixel: "Schedule" }}
    />
  );
}
