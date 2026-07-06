import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceLd, faqPageLd, breadcrumbLd, type Faq } from "@/lib/schema";
import { Breadcrumbs } from "@/components/money/Breadcrumbs";
import { MoneyHero } from "@/components/money/MoneyHero";
import { ProcessSteps } from "@/components/money/ProcessSteps";
import { MoneyProof } from "@/components/money/MoneyProof";
import { FaqSection } from "@/components/money/FaqSection";
import { RelatedLinks } from "@/components/money/RelatedLinks";
import { MoneyCta } from "@/components/money/MoneyCta";

const PATH = "/jewellery-marketing-agency-dubai/jewellery-seo/";

export const metadata = pageMeta({
  title: "Jewellery SEO in Dubai — Get Found by Buyers",
  description:
    "Jewellery SEO for Dubai brands — rank for the searches high-intent buyers actually make, from local map results to fine-jewellery discovery. From AED 5,000.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "What is jewellery SEO?",
    a: "Search engine optimisation focused on the way jewellery buyers actually search — local searches like \"jeweller in Deira\", intent searches like \"engagement rings Dubai\", and brand-and-provenance searches. It combines local SEO (your Google Business Profile and map presence) with on-site SEO (your website's structure, content and technical health).",
  },
  {
    q: "How long does jewellery SEO take to work?",
    a: "Local results — your Google Business Profile and map pack — can improve within weeks. Organic website rankings for competitive terms compound over six to twelve months. SEO is the slow, durable channel; we usually pair it with paid work so you have enquiries coming in while the search visibility builds.",
  },
  {
    q: "Do I need a new website for SEO?",
    a: "Not always. We audit what you have first. Many jeweller sites need structure, content and technical fixes rather than a rebuild. Where the site genuinely holds you back — slow, unstructured, or invisible to search — a rebuild is an add-on from AED 5,000, and we will tell you honestly which case you are in.",
  },
  {
    q: "Can you rank a jeweller outside central Dubai?",
    a: "Yes. Local SEO is location-aware — we optimise for the areas you actually serve, whether that is Deira, Gold & Diamond Park, Meena Bazar, or a showroom in Abu Dhabi or Sharjah. We target the searches your real buyers make near you.",
  },
  {
    q: "How much does jewellery SEO cost in Dubai?",
    a: "A jewellery SEO programme starts as an add-on from AED 5,000, or sits inside a broader retainer. Ongoing local SEO is part of our Performance layer from AED 3,000 a month. We scope to the state of your site and how competitive your terms are.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Agency Dubai", path: "/marketing-agency-dubai/" },
  { name: "Jewellery Marketing", path: "/jewellery-marketing-agency-dubai/" },
  { name: "Jewellery SEO", path: PATH },
];

export default function JewellerySeoPage() {
  return (
    <main>
      <JsonLd
        data={[
          serviceLd({
            serviceType: "Jewellery SEO",
            name: "Jewellery SEO in Dubai",
            description:
              "Local and on-site SEO for jewellery brands in Dubai and the UAE — rank for the searches high-intent buyers make.",
            path: PATH,
          }),
          faqPageLd(faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumbs items={crumbs} />

      <MoneyHero
        eyebrow="Jewellery marketing · SEO"
        title={
          <>
            Be found by the buyer already{" "}
            <em className="italic">searching.</em>
          </>
        }
        lead="The highest-intent buyer a Dubai jeweller can reach is the one typing a search right now — for a jeweller nearby, an engagement ring, a specific stone. Jewellery SEO is the discipline of being the answer they find. Quiet, durable, and too often ignored."
      />

      <Section surface="paper">
        <div className="max-w-[720px] mx-auto prose-velvet">
          <p>
            Paid ads stop the moment you stop paying. Search visibility, once
            built, keeps working — a buyer finds you at 10pm on a Sunday because
            your site and your profile earned the position, not because a budget
            was live. For a jeweller, that compounding presence is one of the
            most valuable assets you can build, and one of the least contested,
            because so few of your competitors take it seriously.
          </p>
          <p>
            Jewellery SEO is two disciplines working together. Local SEO puts
            you in the map results and the local pack when someone searches for a
            jeweller near them — in Deira, at Gold &amp; Diamond Park, in Meena
            Bazar, or wherever your showroom is. On-site SEO makes your website
            the credible, well-structured answer to the searches your buyers
            make about pieces, provenance and price. Neither works well without
            the other.
          </p>

          <h2>What we optimise</h2>
          <ul>
            <li>
              <strong>Local &amp; map presence.</strong> Your Google Business
              Profile, categories, photos and reviews, so you surface for
              &ldquo;jeweller near me&rdquo; searches — closely tied to our{" "}
              <Link href="/jewellery-marketing-agency-dubai/google-reviews-for-jewellers/">
                Google reviews
              </Link>{" "}
              work.
            </li>
            <li>
              <strong>On-site structure &amp; content.</strong> Pages that match
              real buyer intent — collections, education, provenance — written
              and structured so search engines and buyers both understand them.
            </li>
            <li>
              <strong>Technical health.</strong> Speed, mobile experience,
              indexing and structured data, so nothing quietly holds the site
              back from ranking.
            </li>
          </ul>

          <h2>How we run it</h2>
        </div>
      </Section>

      <Section surface="paper-2" ariaLabel="How we work">
        <div className="max-w-[760px] mx-auto">
          <ProcessSteps
            steps={[
              {
                title: "Audit",
                body: "A full picture of where you rank today, what your buyers search for, and which competitors own those results — and why.",
              },
              {
                title: "Foundations",
                body: "Technical and local fixes first: the Business Profile, site speed, structure and structured data that let everything else rank.",
              },
              {
                title: "Content",
                body: "The pages and articles that answer real buyer searches — collections, guidance and provenance — built to earn position over time.",
              },
              {
                title: "Compound",
                body: "Steady refinement and reporting against real rankings and enquiries, so the search channel keeps growing quarter over quarter.",
              },
            ]}
          />
        </div>
      </Section>

      <MoneyProof
        productName="Jewellery SEO — Dubai"
        productDescription="Local and organic search for independent jewellers in Dubai — Google Business Profile, on-page and technical SEO built to earn high-intent buyers."
        path={PATH}
        tags={["seo", "jewellery"]}
        surface="paper"
        heading="What jewellers say"
      />

      <FaqSection faqs={faqs} heading="Jewellery SEO, answered" />

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
                label: "Instagram content for jewellers",
                href: "/jewellery-marketing-agency-dubai/instagram-content/",
              },
            ]}
          />
        </div>
      </Section>

      <MoneyCta whatsappMessage="Hi Velvet — I'd like help with SEO for my jewellery brand in the UAE. " />
    </main>
  );
}
