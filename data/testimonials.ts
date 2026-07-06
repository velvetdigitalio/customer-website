/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR TESTIMONIALS + RATING
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Both the visible <Testimonials /> section AND the JSON-LD Product schema read
 *  from this file, so the markup can never drift from what a user actually sees
 *  on the page — which is exactly what Google requires for review rich results.
 *
 *  RULE: only ever put REAL, attributable reviews here (e.g. genuine Google
 *  Business Profile reviews). Never fabricate a quote, author, rating or count —
 *  Google issues manual actions for review markup that isn't backed by real
 *  reviews, and CLAUDE.md forbids fabricated proof. Every field is edited here
 *  and nowhere else.
 */

/** True only while any entry below is placeholder/unverified. Currently the two
 *  entries are real Google Business Profile reviews. */
export const TESTIMONIALS_ARE_PLACEHOLDER = false;

/** Aggregate rating shown once, understated, on each money page and mirrored in
 *  the Product schema's aggregateRating. Edit here only. These are the studio's
 *  genuine Google Business Profile figures. */
export const RATING_VALUE = "4.7";
export const REVIEW_COUNT = "22";
export const BEST_RATING = "5";

/** Tags let a page pull a relevant subset (e.g. only jewellery quotes) while
 *  still drawing from one shared pool. */
export type TestimonialTag =
  | "jewellery"
  | "interior"
  | "seo"
  | "instagram"
  | "reviews";

export type Testimonial = {
  /** Real client name. Rendered in the UI and as the schema author. */
  author: string;
  /** Optional house / role. UI only — not emitted in schema. Omit if unknown;
   *  never invent one. */
  role?: string;
  /** "1"–"5". The genuine star rating this client left. */
  rating: string;
  /** The review, verbatim. Shown in the UI and as schema reviewBody. */
  body: string;
  /** ISO date (YYYY-MM-DD). Optional; emitted as datePublished when present. */
  date?: string;
  tags: TestimonialTag[];
};

/**
 * Real Google Business Profile reviews, quoted verbatim.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Hamda AlQatami",
    rating: "5",
    date: "2026-07-05",
    tags: ["jewellery"],
    body: "Working with Velvet Digital for our Diamond Jewellery Business in Diera ... experience has been really great. Our footfall and ticket size of each order increased significantly. They understand the industry really well and helped us with social media marketing, content creation, and overall sales optimisation... their AI review tool is super awesome. Owner Yash is super active on whatsapp and call.. no communication gap. Their pricing is a little high compared to other digital marketing agencies in Dubai, but overall good value for the quality of work they deliver.",
  },
  {
    author: "Rishab Jain",
    rating: "5",
    date: "2026-07-03",
    tags: ["jewellery", "interior"],
    body: "Used velvet digital website design service ... Delivered the website on time with good price ... They can improve the payment process a little... Overall good service",
  },
];

/** Return the testimonials tagged with any of `tags` (all, if none given). */
export function testimonialsFor(...tags: TestimonialTag[]): Testimonial[] {
  if (tags.length === 0) return TESTIMONIALS;
  return TESTIMONIALS.filter((t) => t.tags.some((tag) => tags.includes(tag)));
}
