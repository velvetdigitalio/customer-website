/** The studio WhatsApp number, in international format without the leading +. */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918861184926";

/** Builds a wa.me deep link, optionally with a prefilled message. */
export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Prefilled intro for the referral programme — the referrer fills the blanks. */
export const REFERRAL_INTRO_MESSAGE =
  "Hi Velvet — I'd like to introduce a jewellery brand. Brand: [name]. Contact person: [name]. ";

/** Warm, general intro for the main "Message us" CTAs across the site. */
export const GENERAL_INTRO_MESSAGE =
  "Hi Velvet — I'd love to know more about it. ";
