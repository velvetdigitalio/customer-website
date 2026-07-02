import { Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceLd, faqPageLd, breadcrumbLd, type Faq } from "@/lib/schema";
import { Breadcrumbs } from "@/components/money/Breadcrumbs";
import { MoneyHero } from "@/components/money/MoneyHero";
import { ServiceTiers } from "@/components/money/ServiceTiers";
import { ProcessSteps } from "@/components/money/ProcessSteps";
import { ProofPlaceholder } from "@/components/money/ProofPlaceholder";
import { FaqSection } from "@/components/money/FaqSection";
import { RelatedLinks } from "@/components/money/RelatedLinks";
import { MoneyCta } from "@/components/money/MoneyCta";

const PATH = "/marketing-agency-dubai/";

export const metadata = pageMeta({
  title: "Marketing Agency in Dubai — Luxury Brands",
  description:
    "A marketing agency in Dubai for jewellery and interior design brands that grow quietly. Brand, content, social and local SEO — from AED 3,000 a month.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "What kind of marketing agency is Velvet Digital?",
    a: "A specialist one. We work with two kinds of brand — fine jewellery houses and interior designers — and we run brand, content, social and local search as a single practice rather than a menu of disconnected tactics. We are deliberately not a generalist agency chasing every industry.",
  },
  {
    q: "How much does a marketing agency in Dubai cost?",
    a: "It varies widely across the city. Our own engagements start at AED 3,000 a month for a focused performance retainer and run to around AED 15,000 a month for a full brand-and-content programme with add-ons. We scope to the work, not a fixed package.",
  },
  {
    q: "Are you based in Dubai?",
    a: "Our studio is in India and we work with brands across Dubai, Abu Dhabi, Sharjah and the wider UAE. Being built in India and made to Gulf standards is how we keep the craft high and the retainers sane — we are honest about that in every conversation.",
  },
  {
    q: "Do you only work with luxury brands?",
    a: "We work with brands where craft, provenance and a considered buyer matter — which in practice means fine jewellery and interior design. If that is your world, we will likely be a good fit. If you sell on price and volume, we are not the right studio.",
  },
  {
    q: "Where do I start?",
    a: "With a short audit — an honest review of your brand and digital presence, and the most direct way forward. No pitch deck, no obligation. Message us on WhatsApp or request a brand audit and we will tell you plainly whether we are the right studio for you.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Agency Dubai", path: PATH },
];

export default function MarketingAgencyDubaiPage() {
  return (
    <main>
      <JsonLd
        data={[
          serviceLd({
            serviceType: "Marketing Agency",
            name: "Marketing Agency Dubai",
            description:
              "Brand, content, social and local SEO for jewellery and interior design brands in Dubai and across the UAE.",
            path: PATH,
          }),
          faqPageLd(faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumbs items={crumbs} />

      <MoneyHero
        eyebrow="Marketing agency · Dubai"
        title={
          <>
            A marketing agency in Dubai for brands that grow{" "}
            <em className="italic">quietly.</em>
          </>
        }
        lead="Most agencies in Dubai are built for noise. We are built for the opposite — fine jewellery houses and interior designers whose buyers research quietly, decide slowly, and expect the digital experience to match the work. Brand, content, social and local search, run as one practice."
      />

      <Section surface="paper">
        <div className="max-w-[720px] mx-auto prose-velvet">
          <p>
            Dubai is not short of marketing agencies. It is short of agencies
            that understand a particular kind of buyer: the one who spends
            seriously, but only after they trust; who judges a brand by the
            quality of its details; and who is quietly repelled by hype. That
            buyer exists in fine jewellery and in interior design, and those are
            the two worlds we build for.
          </p>
          <p>
            We are a small studio, deliberately. We take a limited number of
            brands so each one gets a real programme — not a template run by a
            junior. And we run the whole thing as one coherent practice: the
            brand and the story, the content that carries them, the social and
            paid work that turns attention into intent, and the local search
            that captures the high-intent buyer nearby.
          </p>

          <h2>Two worlds, one standard</h2>
          <p>
            Our work sits in two verticals. Explore the one that is yours:
          </p>
          <ul>
            <li>
              <a href="/jewellery-marketing-agency-dubai/">
                Jewellery marketing agency Dubai
              </a>{" "}
              — brand, content, Google reviews and SEO for independent and
              family jewellery houses.
            </li>
            <li>
              <a href="/interior-design-marketing-agency-dubai/">
                Interior design marketing agency Dubai
              </a>{" "}
              — positioning, portfolio and lead work for studios and practices.
            </li>
          </ul>

          <h2>Where a jeweller should focus first</h2>
          <p>
            For jewellers specifically, three surfaces do most of the work. Each
            has its own page:
          </p>
          <ul>
            <li>
              <a href="/jewellery-marketing-agency-dubai/instagram-content/">
                Instagram content for jewellers
              </a>{" "}
              — the feed run as an editorial publication, not a product catalogue.
            </li>
            <li>
              <a href="/jewellery-marketing-agency-dubai/google-reviews-for-jewellers/">
                Google reviews for jewellers
              </a>{" "}
              — the highest-intent surface most jewellers neglect.
            </li>
            <li>
              <a href="/jewellery-marketing-agency-dubai/jewellery-seo/">
                Jewellery SEO
              </a>{" "}
              — being found by the buyer searching in Deira or at Gold &amp;
              Diamond Park.
            </li>
          </ul>
          <p>
            Weighing your options? We wrote an honest guide to{" "}
            <a href="/best-jewellery-marketing-agencies-dubai/">
              the best jewellery marketing agencies in Dubai
            </a>{" "}
            — ourselves included, with the positioning stated plainly.
          </p>
        </div>
      </Section>

      <Section surface="paper-2" ariaLabel="Services and pricing">
        <div className="max-w-[760px] mx-auto mb-lg">
          <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
            How engagements are shaped
          </h2>
          <p className="mt-sm text-ink-2 max-w-[60ch] leading-[1.6]">
            Transparent starting points, scoped to the brand after a short
            audit. Most brands combine a brand-and-content base with a
            performance layer.
          </p>
        </div>
        <ServiceTiers
          tiers={[
            {
              name: "Brand & Content",
              price: "AED 10,000",
              cadence: "/ month",
              description:
                "The engine — editorial photography and film, a consistent publication, and the identity and narrative underneath.",
            },
            {
              name: "Performance",
              price: "AED 3,000",
              cadence: "/ month",
              description:
                "Paid social, search and local — run with restraint against real numbers to bring the right buyer to a private enquiry.",
            },
            {
              name: "Add-ons",
              price: "from AED 5,000",
              description:
                "Websites, launches, SEO programmes and a WhatsApp concierge, layered onto a retainer as needed.",
            },
          ]}
        />
      </Section>

      <Section surface="paper" ariaLabel="How we work">
        <div className="max-w-[760px] mx-auto mb-lg">
          <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
            How we work
          </h2>
        </div>
        <ProcessSteps
          steps={[
            {
              title: "Audit",
              body: "An honest review of your brand and digital presence — where it stands, and the most direct way forward.",
            },
            {
              title: "Direction",
              body: "We agree what the brand means and how it should be seen before any production begins.",
            },
            {
              title: "Engine",
              body: "Content, social and local search run to a steady rhythm, not in bursts before a launch.",
            },
            {
              title: "Compound",
              body: "We report against real enquiries and let presence and search visibility build month over month.",
            },
          ]}
        />
      </Section>

      <Section surface="paper-2" ariaLabel="Proof">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink mb-md">
            Proof
          </h2>
          <ProofPlaceholder />
        </div>
      </Section>

      <FaqSection faqs={faqs} heading="A marketing agency in Dubai, answered" />

      <Section surface="paper" ariaLabel="Related pages">
        <div className="max-w-[760px] mx-auto">
          <RelatedLinks
            heading="Explore"
            links={[
              {
                label: "Jewellery marketing agency Dubai",
                href: "/jewellery-marketing-agency-dubai/",
              },
              {
                label: "Interior design marketing agency Dubai",
                href: "/interior-design-marketing-agency-dubai/",
              },
              {
                label: "Instagram content for jewellers",
                href: "/jewellery-marketing-agency-dubai/instagram-content/",
              },
              {
                label: "Google reviews for jewellers",
                href: "/jewellery-marketing-agency-dubai/google-reviews-for-jewellers/",
              },
              {
                label: "Jewellery SEO",
                href: "/jewellery-marketing-agency-dubai/jewellery-seo/",
              },
              {
                label: "The best jewellery marketing agencies in Dubai (2026)",
                href: "/best-jewellery-marketing-agencies-dubai/",
              },
            ]}
          />
        </div>
      </Section>

      <MoneyCta whatsappMessage="Hi Velvet — I'd like a brand audit for my brand in the UAE. " />
    </main>
  );
}
