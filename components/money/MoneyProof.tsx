import { JsonLd } from "@/components/seo/JsonLd";
import { Testimonials } from "./Testimonials";
import { buildServiceProductSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import {
  RATING_VALUE,
  REVIEW_COUNT,
  BEST_RATING,
  testimonialsFor,
  type TestimonialTag,
} from "@/data/testimonials";

/**
 * Drop-in proof block for a single service/money page: renders the visible
 * <Testimonials /> section AND the matching Product review JSON-LD, both driven
 * by the SAME testimonials array (so the markup can never claim a review the
 * page doesn't show — a Google requirement, and the reason a manual action gets
 * issued when it's violated).
 *
 * Use ONLY on individual service/money pages — never the homepage or root
 * layout (self-serving ratings there are ineligible / risky).
 */
export function MoneyProof({
  productName,
  productDescription,
  path,
  tags = [],
  heading,
  surface = "paper-2",
}: {
  /** Product name specific to this page, e.g. "Jewellery Marketing — Dubai". */
  productName: string;
  productDescription: string;
  /** Canonical path of the page, leading + trailing slash, e.g. "/x/". */
  path: string;
  /** Testimonial tags to include; empty = all. */
  tags?: TestimonialTag[];
  heading?: string;
  surface?: "paper" | "paper-2";
}) {
  const testimonials = testimonialsFor(...tags);
  if (testimonials.length === 0) return null;

  const schema = buildServiceProductSchema({
    name: productName,
    description: productDescription,
    url: `${SITE_URL}${path}`,
    ratingValue: RATING_VALUE,
    reviewCount: REVIEW_COUNT,
    bestRating: BEST_RATING,
    reviews: testimonials.map((t) => ({
      author: t.author,
      rating: t.rating,
      body: t.body,
      date: t.date,
    })),
  });

  return (
    <>
      <JsonLd data={schema} />
      <Testimonials
        testimonials={testimonials}
        ratingValue={RATING_VALUE}
        reviewCount={REVIEW_COUNT}
        bestRating={BEST_RATING}
        surface={surface}
        {...(heading ? { heading } : {})}
      />
    </>
  );
}
