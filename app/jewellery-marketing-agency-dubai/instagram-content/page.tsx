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

const PATH = "/jewellery-marketing-agency-dubai/instagram-content/";

export const metadata = pageMeta({
  title: "Instagram Content for Jewellers in Dubai",
  description:
    "Instagram run as an editorial publication for Dubai jewellers — editorial stills, macro film and a steady rhythm that builds desire, not a product catalogue.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "How often should a jeweller post on Instagram?",
    a: "Consistency matters more than volume. A steady rhythm the audience can rely on — a few considered posts a week plus stories — beats a burst of ten before a launch and silence after. We plan a monthly calendar so the feed never flattens into a product directory.",
  },
  {
    q: "Do you produce the photography and film?",
    a: "Yes. We direct editorial stills and high-definition macro film that show a stone's cut, the weight of a setting and the finish of a piece. Depending on your city we shoot on location or art-direct a local photographer to our standard, then edit and schedule the feed.",
  },
  {
    q: "Will you manage the account or just supply content?",
    a: "Either. Some jewellers want the full publication run for them — calendar, captions, posting, community replies. Others want a monthly content package they post themselves. We scope both, and the price reflects it.",
  },
  {
    q: "How much does jewellery Instagram content cost in Dubai?",
    a: "It sits inside our Brand & Content programme, which starts around AED 10,000 a month for a full editorial engine, or as a lighter add-on from AED 5,000. We scope to your shoot volume and whether we run the account or hand it over.",
  },
  {
    q: "Do reels and macro film really matter for jewellery?",
    a: "For jewellery, more than almost any category. Motion shows what a still cannot — how light moves across a diamond, the drape of a chain, the scale of a piece on the hand. Macro film is the single most under-used tool most Dubai jewellers have.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Agency Dubai", path: "/marketing-agency-dubai/" },
  { name: "Jewellery Marketing", path: "/jewellery-marketing-agency-dubai/" },
  { name: "Instagram Content", path: PATH },
];

export default function InstagramContentPage() {
  return (
    <main>
      <JsonLd
        data={[
          serviceLd({
            serviceType: "Instagram Content",
            name: "Instagram Content for Jewellers in Dubai",
            description:
              "Editorial Instagram content, photography and macro film for jewellery brands in Dubai and the UAE.",
            path: PATH,
          }),
          faqPageLd(faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumbs items={crumbs} />

      <MoneyHero
        eyebrow="Jewellery marketing · Instagram"
        title={
          <>
            Instagram, run as a{" "}
            <em className="italic">publication</em> — not a catalogue.
          </>
        }
        lead="For a Dubai jeweller, Instagram is the shop window before the shop. Run well it builds desire and trust for months before an enquiry; run as a product directory it quietly undoes the craft. We run it as an editorial feed with a point of view."
      />

      <Section surface="paper">
        <div className="max-w-[720px] mx-auto prose-velvet">
          <p>
            Most jewellery feeds in Dubai make the same mistake: they treat
            Instagram as a place to file product shots. Every post is a piece on
            white, cropped tight, captioned with a price and a phone number. It
            is tidy, and it is forgettable, and it gives a serious buyer no
            reason to keep watching between purchases.
          </p>
          <p>
            The houses that win the feed do something else. They run it as a
            publication — a consistent rhythm, a recognisable look, a point of
            view — so that following them is a small pleasure rather than a
            standing advert. Desire is built over time, not declared in a
            caption. That is the difference between a feed that sells and a feed
            that scrolls past.
          </p>

          <h2>What an editorial jewellery feed looks like</h2>
          <p>
            Editorial photography that treats a piece the way it deserves to be
            seen. High-definition macro film — the single most under-used tool
            most Dubai jewellers have — that shows a diamond&rsquo;s cut, the
            weight of a setting and the finish of a chain in a way a still never
            can. Stories and reels that show the making, the milestones, and the
            people, so the brand reads as a house with a point of view rather
            than a shelf of products.
          </p>
          <p>
            And underneath it all, a calendar. A steady rhythm the audience can
            rely on, planned a month ahead, so the feed never flattens into a
            directory and never goes dark for three weeks after a launch.
          </p>

          <h2>How we run it</h2>
        </div>
      </Section>

      <Section surface="paper-2" ariaLabel="How we work">
        <div className="max-w-[760px] mx-auto">
          <ProcessSteps
            steps={[
              {
                title: "Direction",
                body: "We set the look, the pillars and the voice — what your feed is about beyond the products, and how it should feel against the souk.",
              },
              {
                title: "Shoot",
                body: "Monthly editorial and macro sessions, art-directed, so there is always fresh, on-brand material rather than a scramble before a post.",
              },
              {
                title: "Publish",
                body: "A planned calendar of posts, reels and stories, with captions and community replies handled to the same standard as the imagery.",
              },
              {
                title: "Refine",
                body: "We read what earns saves, shares and enquiries — not just likes — and shape the next month around it.",
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
          <ProofPlaceholder note="Feed transformations and content examples are shown on a call as engagements complete — real work, not a stock mock-up." />
        </div>
      </Section>

      <FaqSection faqs={faqs} heading="Jewellery Instagram, answered" />

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
                label: "Google reviews for jewellers",
                href: "/jewellery-marketing-agency-dubai/google-reviews-for-jewellers/",
              },
            ]}
          />
        </div>
      </Section>

      <MoneyCta whatsappMessage="Hi Velvet — I'd like help with my jewellery brand's Instagram in the UAE. " />
    </main>
  );
}
