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

const PATH = "/interior-design-marketing-agency-dubai/";

export const metadata = pageMeta({
  title: "Interior Design Marketing Agency Dubai",
  description:
    "A marketing agency for interior designers in Dubai — positioning, portfolio, content and lead generation that wins considered clients. From AED 3,000 a month.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "How do interior designers get clients in Dubai?",
    a: "The best clients come from reputation, referral and a portfolio that reads as a point of view rather than a gallery. Our job is to make that reputation legible online — a positioning and portfolio that attracts the right brief, supported by content and, where useful, targeted paid work — so the enquiries you get are the ones worth having.",
  },
  {
    q: "Do you build websites for interior designers?",
    a: "Yes. For a design practice the website is the portfolio, and it has to be as considered as the work. We design and build it as an add-on from AED 5,000, or as part of a broader brand engagement, with the photography and structure that let the work speak.",
  },
  {
    q: "Should an interior studio run paid ads?",
    a: "Sometimes. Interior design is a considered, referral-heavy purchase, so we lead with brand, portfolio and content, and use paid work selectively — for a specific launch, a new service, or to reach a defined audience. We are honest when paid spend would be wasted.",
  },
  {
    q: "How much does interior design marketing cost in Dubai?",
    a: "Engagements start at AED 3,000 a month for a focused performance retainer and run to around AED 10,000 a month for a full brand-and-content programme, with add-ons from AED 5,000. We scope to the practice and where it is in its growth.",
  },
  {
    q: "Do you only work with Dubai-based studios?",
    a: "We work with interior designers across the UAE and the wider Gulf, and with studios selling into the region. The work runs remotely from our studio in India, with shoots and meetings arranged where the projects are.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Agency Dubai", path: "/marketing-agency-dubai/" },
  { name: "Interior Design Marketing", path: PATH },
];

export default function InteriorDesignMarketingDubaiPage() {
  return (
    <main>
      <JsonLd
        data={[
          serviceLd({
            serviceType: "Interior Design Marketing",
            name: "Interior Design Marketing Agency Dubai",
            description:
              "Positioning, portfolio, content and lead generation for interior designers in Dubai and across the UAE.",
            path: PATH,
          }),
          faqPageLd(faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumbs items={crumbs} />

      <MoneyHero
        eyebrow="Interior design marketing"
        title={
          <>
            The marketing partner for interior studios that want the right{" "}
            <em className="italic">brief.</em>
          </>
        }
        lead="An interior practice does not need more enquiries. It needs better ones — the client who values the work, respects the process, and has the budget to do it properly. We build the positioning, portfolio and presence that attract exactly that brief."
      />

      <Section surface="paper">
        <div className="max-w-[720px] mx-auto prose-velvet">
          <p>
            Interior design is a reputation business. The best projects arrive
            through referral, through a portfolio seen at the right moment,
            through a name that carries a certain expectation. Yet most studios
            leave that reputation to chance online — an out-of-date website, a
            sporadic feed, a portfolio that reads as a gallery of rooms rather
            than a point of view. The result is a stream of ill-fitting
            enquiries and a quiet worry that the best clients never find you at
            all.
          </p>
          <p>
            We work the other way. We make the reputation legible: a clear
            positioning, a portfolio that argues for the practice, and a steady
            presence that keeps you in mind between projects. The aim is not
            volume of leads — it is the right brief, from the right client, more
            often.
          </p>

          <h2>Who we work with</h2>
          <p>
            Interior designers and studios across Dubai and the UAE who compete
            on taste and craft rather than price — residential practices,
            boutique commercial studios, and designers building a signature.
            If your work deserves a better class of client than your marketing
            currently brings, that is the gap we close.
          </p>

          <h2>What we do</h2>
          <p>
            Positioning and narrative that say what the practice stands for. A
            portfolio and website that let the work speak — because for a
            designer, the site <em>is</em> the pitch. Content and social run as a
            quiet, consistent publication so you stay present between projects.
            And, where it earns its place, targeted paid and local search work to
            reach a defined audience or support a specific launch.
          </p>
        </div>
      </Section>

      <Section surface="paper-2" ariaLabel="Services and pricing">
        <div className="max-w-[760px] mx-auto mb-lg">
          <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
            Services &amp; investment
          </h2>
          <p className="mt-sm text-ink-2 max-w-[60ch] leading-[1.6]">
            Transparent starting points, scoped to the practice after a short
            audit. Most studios begin with brand and portfolio, then add a
            steady content layer.
          </p>
        </div>
        <ServiceTiers
          tiers={[
            {
              name: "Brand & Content",
              price: "AED 10,000",
              cadence: "/ month",
              description:
                "Positioning, portfolio direction and a consistent content publication that keeps the practice present and considered.",
            },
            {
              name: "Performance",
              price: "AED 3,000",
              cadence: "/ month",
              description:
                "Selective paid and local search — used where it earns its place, to reach a defined audience or support a launch.",
            },
            {
              name: "Add-ons",
              price: "from AED 5,000",
              description:
                "A portfolio website, a brand identity, project photography direction, or a specific campaign, layered on as needed.",
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
              body: "An honest review of how the practice is seen online, the briefs it attracts, and the most direct way to attract better ones.",
            },
            {
              title: "Position",
              body: "We define what the studio stands for and who it is for, then shape the portfolio and site to argue that case.",
            },
            {
              title: "Present",
              body: "A steady content rhythm — projects, process and point of view — that keeps you in mind between commissions.",
            },
            {
              title: "Refine",
              body: "We report against the quality of enquiries, not just the count, and adjust so the right briefs arrive more often.",
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

      <FaqSection
        faqs={faqs}
        heading="Interior design marketing in Dubai, answered"
      />

      <Section surface="paper" ariaLabel="Related pages">
        <div className="max-w-[760px] mx-auto">
          <RelatedLinks
            heading="Explore"
            links={[
              {
                label: "Marketing agency in Dubai — the full picture",
                href: "/marketing-agency-dubai/",
              },
              {
                label: "Jewellery marketing agency Dubai",
                href: "/jewellery-marketing-agency-dubai/",
              },
            ]}
          />
        </div>
      </Section>

      <MoneyCta whatsappMessage="Hi Velvet — I run an interior design studio in the UAE and I'd like a brand audit. " />
    </main>
  );
}
