import { Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceLd, faqPageLd, breadcrumbLd, type Faq } from "@/lib/schema";
import { Breadcrumbs } from "@/components/money/Breadcrumbs";
import { MoneyHero } from "@/components/money/MoneyHero";
import { ProcessSteps } from "@/components/money/ProcessSteps";
import { ProofPlaceholder } from "@/components/money/ProofPlaceholder";
import { FaqSection } from "@/components/money/FaqSection";
import { RelatedLinks } from "@/components/money/RelatedLinks";
import { MoneyCta } from "@/components/money/MoneyCta";

const PATH =
  "/jewellery-marketing-agency-dubai/google-reviews-for-jewellers/";

export const metadata = pageMeta({
  title: "Google Reviews for Jewellers in Dubai",
  description:
    "Earn more genuine Google reviews and a stronger Business Profile for your Dubai jewellery shop — the highest-intent surface most jewellers neglect.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "Why do Google reviews matter so much for jewellers?",
    a: "Because a jewellery purchase is a trust purchase. The buyer searching \"jeweller near me\" in Deira or at Gold & Diamond Park compares a handful of shops on their star rating and recent reviews before they ever walk in. Reviews are often the single highest-intent surface a jeweller owns — and the one most left to drift.",
  },
  {
    q: "How do you get more Google reviews without breaking the rules?",
    a: "By making it effortless for genuinely happy customers to leave one — the right moment, a simple link or QR at the counter, a polite follow-up. We never buy reviews, incentivise them, or write fake ones; that risks the profile and, frankly, the buyer can tell. Everything we do is within Google's guidelines.",
  },
  {
    q: "What about a bad review?",
    a: "Handled well, a single measured response to a poor review builds more trust than a wall of five stars. We help you reply calmly and professionally, resolve what is resolvable, and keep the overall picture honest and strong.",
  },
  {
    q: "Do you optimise the whole Google Business Profile?",
    a: "Yes. Reviews sit inside a complete profile — categories, photos, services, opening hours, posts and the map pin. We get the whole thing working so you show up in the local pack when a buyer searches nearby, not just when they search your name.",
  },
  {
    q: "How much does this cost?",
    a: "Google reviews and local search sit inside our Performance layer, which starts at AED 3,000 a month, or as a focused local-SEO add-on from AED 5,000. We scope it to how many locations you run and the state of the profile today.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Agency Dubai", path: "/marketing-agency-dubai/" },
  { name: "Jewellery Marketing", path: "/jewellery-marketing-agency-dubai/" },
  { name: "Google Reviews", path: PATH },
];

export default function GoogleReviewsPage() {
  return (
    <main>
      <JsonLd
        data={[
          serviceLd({
            serviceType: "Google Reviews & Local SEO",
            name: "Google Reviews for Jewellers in Dubai",
            description:
              "Google Business Profile optimisation and a compliant review-generation system for jewellers in Dubai and the UAE.",
            path: PATH,
          }),
          faqPageLd(faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumbs items={crumbs} />

      <MoneyHero
        eyebrow="Jewellery marketing · Google reviews"
        title={
          <>
            The highest-intent surface most jewellers{" "}
            <em className="italic">neglect.</em>
          </>
        }
        lead="A serious buyer comparing jewellers in Deira or at Gold & Diamond Park decides on your Google reviews before they walk in. We build a quiet, compliant system that earns genuine reviews and keeps your Business Profile working."
      />

      <Section surface="paper">
        <div className="max-w-[720px] mx-auto prose-velvet">
          <p>
            Ask a jeweller where their next walk-in customer comes from and few
            will say Google. Yet that is exactly where a high-intent buyer goes:
            they search &ldquo;jeweller near me&rdquo;, or a specific piece, and
            Google shows them a short list ranked by relevance, distance and
            reputation. The star rating and the most recent reviews do the
            deciding. It is the closest thing to a queue outside your door — and
            most shops leave it to chance.
          </p>
          <p>
            A strong, active Google Business Profile is not vanity. It is the
            difference between being the shop a buyer chooses and the one they
            scroll past on the way to a competitor two doors down. For a
            category built entirely on trust, reviews are the trust, made
            public.
          </p>

          <h2>What we do</h2>
          <p>
            We treat the profile as the high-value asset it is. That means a
            complete, accurate listing — categories, services, photos, hours and
            posts — so you appear in the local pack when a buyer searches nearby,
            not only when they search your name. And it means a steady,
            guidelines-compliant system for earning genuine reviews from real
            customers at the right moment, so the profile keeps getting stronger
            rather than going stale.
          </p>
          <p>
            What we never do: buy reviews, incentivise them, or invent them. It
            breaks Google&rsquo;s rules, it risks the whole profile, and a
            discerning buyer can smell a wall of identical five-star reviews from
            across the souk. Honest and strong beats fake and fragile, every
            time.
          </p>

          <h2>How we run it</h2>
        </div>
      </Section>

      <Section surface="paper-2" ariaLabel="How we work">
        <div className="max-w-[760px] mx-auto">
          <ProcessSteps
            steps={[
              {
                title: "Audit the profile",
                body: "We review your Business Profile, categories, photos and current reviews against the jewellers ranking above you, and find the gaps.",
              },
              {
                title: "Optimise",
                body: "A complete, accurate listing with strong imagery and the right categories, so you surface in the local pack for high-intent searches.",
              },
              {
                title: "Earn reviews",
                body: "A simple, compliant system — the right moment, an easy link or QR at the counter, a polite follow-up — that makes a genuine review effortless.",
              },
              {
                title: "Respond & sustain",
                body: "Measured replies to every review, good or bad, and a steady rhythm so the profile keeps compounding rather than drifting.",
              },
            ]}
          />
        </div>
      </Section>

      <Section surface="paper" ariaLabel="Proof">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink mb-md">
            Proof
          </h2>
          <ProofPlaceholder note="Before-and-after profile results are shown on a call as engagements complete — real ratings and rankings, not a fabricated screenshot." />
        </div>
      </Section>

      <FaqSection faqs={faqs} heading="Google reviews for jewellers, answered" />

      <Section surface="paper-2" ariaLabel="Related pages">
        <div className="max-w-[760px] mx-auto">
          <RelatedLinks
            heading="Keep reading"
            links={[
              {
                label: "Back to jewellery marketing agency Dubai",
                href: "/jewellery-marketing-agency-dubai/",
              },
              {
                label: "Jewellery SEO",
                href: "/jewellery-marketing-agency-dubai/jewellery-seo/",
              },
            ]}
          />
        </div>
      </Section>

      <MoneyCta whatsappMessage="Hi Velvet — I'd like help with Google reviews for my jewellery shop in the UAE. " />
    </main>
  );
}
