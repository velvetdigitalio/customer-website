import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Ad-destination page. Put https://velvetdigital.io/whatsapp/ in an Instagram
 * ad; it bounces straight into a WhatsApp chat with a prefilled intro. Not
 * indexed.
 */
const INTRO_MESSAGE =
  "Hi Velvet — I found you on Instagram and I'd like to know more about working together.";

export const metadata: Metadata = {
  title: "Chat on WhatsApp — Velvet Digital",
  description: "Message Velvet Digital on WhatsApp.",
  robots: { index: false, follow: false },
};

export default function WhatsappRedirectPage() {
  return <Redirect to={whatsappUrl(INTRO_MESSAGE)} label="WhatsApp" />;
}
