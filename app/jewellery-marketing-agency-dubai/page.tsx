import { Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  serviceLd,
  faqPageLd,
  breadcrumbLd,
  type Faq,
} from "@/lib/schema";
import { Breadcrumbs } from "@/components/money/Breadcrumbs";
import { MoneyHero } from "@/components/money/MoneyHero";
import { ServiceTiers } from "@/components/money/ServiceTiers";
import { ProcessSteps } from "@/components/money/ProcessSteps";
import { ProofPlaceholder } from "@/components/money/ProofPlaceholder";
import { FaqSection } from "@/components/money/FaqSection";
import { RelatedLinks } from "@/components/money/RelatedLinks";
import { MoneyCta } from "@/components/money/MoneyCta";

const PATH = "/jewellery-marketing-agency-dubai/";

export const metadata = pageMeta({
  title: "Jewellery Marketing Agency Dubai",
  description:
    "The jewellery marketing agency Dubai's independent jewellers trust. Brand, Instagram content, Google reviews and jewellery SEO — from AED 3,000 a month.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "How much does jewellery marketing cost in Dubai?",
    a: "Our engagements start at AED 3,000 a month for a focused performance retainer and run to AED 10,000 a month for a full brand-and-content programme, with add-ons from AED 5,000. Most independent jewellers begin somewhere in between. We scope to the work in front of you, not a fixed package, and there is no long lock-in to start.",
  },
  {
    q: "Do you work with jewellers outside Dubai?",
    a: "Yes. We are based in India and work with jewellery brands across the UAE — Abu Dhabi, Sharjah and the wider Gulf — as well as houses selling to the Gulf's Indian-origin buyer from elsewhere. The work is run remotely with shoots arranged where the pieces are.",
  },
  {
    q: "Do you shoot the jewellery yourselves?",
    a: "We direct and produce the content — editorial stills and high-definition macro film that show a stone's cut, a setting's weight and the finish of a piece. Depending on your city we either shoot on location or brief and art-direct a local photographer to our standard.",
  },
  {
    q: "Can you help us get more Google reviews?",
    a: "Yes. A jeweller's Google Business Profile and its reviews are often the single highest-intent surface you own — the buyer searching \"jeweller near me\" in Deira or at Gold & Diamond Park decides on it. We build a quiet, compliant system that earns genuine reviews from real customers and keeps the profile working.",
  },
  {
    q: "How long until we see results?",
    a: "Performance work — paid social and search — can move enquiries within the first month. Brand, content and SEO compound: expect a stronger, more consistent presence within a quarter and meaningful search visibility over six to twelve months. We report against real numbers, not vanity metrics.",
  },
  {
    q: "Will you work with a competitor down the street?",
    a: "No. We take a small number of jewellery brands and hold category and area exclusivity within reason, so your programme is never competing with our own other client in the same souk or mall. We will tell you plainly at the first call whether that is a conflict.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Agency Dubai", path: "/marketing-agency-dubai/" },
  { name: "Jewellery Marketing", path: PATH },
];

export default function JewelleryMarketingDubaiPage() {
  return (
    <main>
      <JsonLd
        data={[
          serviceLd({
            serviceType: "Jewellery Marketing",
            name: "Jewellery Marketing Agency Dubai",
            description:
              "Brand, content, social, Google reviews and SEO for independent jewellers in Dubai and across the UAE.",
            path: PATH,
          }),
          faqPageLd(faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumbs items={crumbs} />

      <MoneyHero
        eyebrow="Jewellery marketing"
        title={
          <>
            The jewellery marketing agency Dubai&rsquo;s independent jewellers{" "}
            <em className="italic">trust.</em>
          </>
        }
        lead="Dubai has no shortage of gold. It has a shortage of jewellers whose digital presence does their craft justice. We are a jewellery marketing agency built for the independent house — brand, content, social and local search, run as one quiet, compounding practice."
      />

      <Section surface="paper">
        <div className="max-w-[720px] mx-auto prose-velvet">
          <p>
            Walk through Gold &amp; Diamond Park, Meena Bazar or the Deira Gold
            Souk and the craft is not the problem. The pieces are extraordinary.
            What separates the houses that grow from the ones that stall is
            almost never the product — it is whether a serious buyer, searching
            on a phone at 10pm, can find them, believe them, and reach them
            without friction. That gap is the work we do.
          </p>
          <p>
            Most jewellers in Dubai are marketed as though they were a
            commodity: a flat feed of product shots posted whenever there is a
            gap, a Google listing left to drift, paid ads that chase the widest
            possible reach and bring the wrong people through the door. It is
            busy, and it is expensive, and it rarely builds anything. We work
            the other way — fewer, better signals, aimed at the right buyer, and
            allowed to compound.
          </p>

          <h2>Who we work with</h2>
          <p>
            We are built for the independent and family jewellery house — the
            one with a real point of view and a real story, competing against
            larger names with larger budgets. That includes heritage jewellers
            bringing a decades-old reputation online for the first time, newer
            fine-jewellery labels finding their audience, and houses selling to
            the Gulf&rsquo;s Indian-origin buyer who wants craft, provenance and
            discretion in equal measure.
          </p>
          <p>
            If your buyer researches quietly, decides slowly, and expects the
            digital experience to match the piece in the tray, we will get on.
            If you want a firehose of the cheapest possible leads, we are not the
            studio for you — and we will say so.
          </p>

          <h2>What we do</h2>
          <p>
            One coherent programme, not a menu of disconnected tactics. We build
            the brand and the content engine that earns attention, run the
            social and paid work that turns attention into intent, and lay the
            local-search groundwork —{" "}
            <a href="/jewellery-marketing-agency-dubai/jewellery-seo/">
              jewellery SEO
            </a>{" "}
            and{" "}
            <a href="/jewellery-marketing-agency-dubai/google-reviews-for-jewellers/">
              Google reviews
            </a>{" "}
            — so the high-intent buyer searching nearby finds you first. The{" "}
            <a href="/jewellery-marketing-agency-dubai/instagram-content/">
              Instagram content
            </a>{" "}
            is where much of it becomes visible.
          </p>
        </div>
      </Section>

      <Section surface="paper-2" ariaLabel="Services and pricing">
        <div className="max-w-[760px] mx-auto mb-lg">
          <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
            Services &amp; investment
          </h2>
          <p className="mt-sm text-ink-2 max-w-[60ch] leading-[1.6]">
            Transparent starting points. We scope the exact programme to your
            house after a short audit — most jewellers combine a brand-and-content
            base with a performance layer.
          </p>
        </div>
        <ServiceTiers
          tiers={[
            {
              name: "Brand & Content",
              price: "AED 10,000",
              cadence: "/ month",
              description:
                "The engine. Editorial photography and macro film, a consistent social publication, and the identity and narrative underneath it.",
              points: [
                "Monthly editorial + macro shoots",
                "Instagram as an editorial feed",
                "Brand, narrative & art direction",
              ],
            },
            {
              name: "Performance",
              price: "AED 3,000",
              cadence: "/ month",
              description:
                "Paid social and search run with restraint, against real numbers, to bring the right buyer — not the most buyers — to a private enquiry.",
              points: [
                "Meta & Google, full-funnel",
                "Local search & Google Business",
                "Honest reporting, no vanity metrics",
              ],
            },
            {
              name: "Add-ons",
              price: "from AED 5,000",
              description:
                "Focused programmes layered onto a retainer — a website, a launch campaign, jewellery SEO, or a WhatsApp concierge that qualifies enquiries.",
              points: [
                "Website & brand identity",
                "Jewellery SEO programme",
                "WhatsApp concierge & systems",
              ],
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
              body: "A short, honest review of your brand, content and local search — where it stands and the most direct way forward. No pitch deck.",
            },
            {
              title: "Direction",
              body: "We agree the positioning and the look before a single post: what your house means, and how it should be seen against the souk.",
            },
            {
              title: "Engine",
              body: "The steady work begins — shoots, publication, and the local-search groundwork — run to a rhythm, not in bursts before a launch.",
            },
            {
              title: "Compound",
              body: "We report against real enquiries, refine what earns them, and let presence, reviews and search visibility build month over month.",
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

      <FaqSection faqs={faqs} heading="Jewellery marketing in Dubai, answered" />

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
                label: "Interior design marketing agency Dubai",
                href: "/interior-design-marketing-agency-dubai/",
              },
              {
                label: "The best jewellery marketing agencies in Dubai (2026)",
                href: "/best-jewellery-marketing-agencies-dubai/",
              },
            ]}
          />
        </div>
      </Section>

      <MoneyCta
        heading={
          <>
            Start with an <em className="italic text-gold">audit.</em>
          </>
        }
        whatsappMessage="Hi Velvet — I run a jewellery brand in the UAE and I'd like a brand audit. "
      />
    </main>
  );
}
