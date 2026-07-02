import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceLd, faqPageLd, breadcrumbLd, type Faq } from "@/lib/schema";
import { Breadcrumbs } from "@/components/money/Breadcrumbs";
import { MoneyHero } from "@/components/money/MoneyHero";
import { FaqSection } from "@/components/money/FaqSection";
import { MoneyCta } from "@/components/money/MoneyCta";

const PATH = "/best-jewellery-marketing-agencies-dubai/";

export const metadata = pageMeta({
  title: "Best Jewellery Marketing Agencies in Dubai (2026)",
  description:
    "An honest guide to the best jewellery marketing agencies in Dubai in 2026 — who each one is best for, how they work, and where a specialist studio fits.",
  path: PATH,
});

type Agency = {
  id: string;
  name: string;
  bestFor: string;
  note: string;
  href?: string; // external; internal for Velvet
  internal?: boolean;
};

// NOTE: competitor entries are real, independent Dubai agencies listed with
// neutral one-line descriptions. External links are rel="nofollow noopener".
// TODO: verify each competitor URL before publishing — domains are best-known
// but should be confirmed (see SEO-NOTES.md).
const agencies: Agency[] = [
  {
    id: "velvet-digital",
    name: "1. Velvet Digital",
    bestFor: "Best for independent fine-jewellery houses",
    note: "A specialist studio for jewellery and interior brands — brand, content, Instagram, Google reviews and SEO run as one practice. Built in India, made to Gulf standards, which keeps the craft high and the retainer sane. Not a generalist; deliberately small.",
    href: "/jewellery-marketing-agency-dubai/",
    internal: true,
  },
  {
    id: "astudio",
    name: "2. ASTUDIO",
    bestFor: "Best for premium brand & web design",
    note: "A Dubai brand and digital studio with strong design credentials, suited to brands that want a considered identity and website above all.",
    href: "https://astudio.ae/",
  },
  {
    id: "seo-sherpa",
    name: "3. SEO Sherpa",
    bestFor: "Best for search-led growth",
    note: "One of the region's better-known SEO specialists — a fit for brands whose priority is ranking and organic search performance.",
    href: "https://seosherpa.com/",
  },
  {
    id: "prism-digital",
    name: "4. Prism Digital",
    bestFor: "Best for full-service performance marketing",
    note: "An established Dubai performance and social agency, suited to brands wanting paid media and social managed at scale.",
    href: "https://www.prismdigital.ae/",
  },
  {
    id: "nexa",
    name: "5. Nexa",
    bestFor: "Best for large, multi-channel programmes",
    note: "A larger Dubai agency spanning marketing, technology and recruitment — a fit for brands wanting a big, all-in-one partner.",
    href: "https://www.digitalnexa.com/",
  },
  {
    id: "glimpse",
    name: "6. Glimpse",
    bestFor: "Best for social-first content",
    note: "A content and social-led studio, suited to brands whose main need is a steady stream of social creative.",
    href: "https://glimpse.ae/",
  },
];

const faqs: Faq[] = [
  {
    q: "Who is the best jewellery marketing agency in Dubai?",
    a: "It depends on what you need. For an independent fine-jewellery house that wants brand, content and local search run together by a specialist, we would put Velvet Digital first — and we have said why plainly above. For pure SEO, pure performance, or a very large multi-channel programme, one of the other agencies here may fit you better. The honest answer is that the best agency is the one built for your specific problem.",
  },
  {
    q: "How much do jewellery marketing agencies in Dubai charge?",
    a: "Retainers across the city range widely — from a few thousand dirhams a month for a focused service to well over AED 20,000 for a large full-service programme. Velvet Digital's own engagements run from AED 3,000 to around AED 15,000 a month. Always ask what is included and whether there is a lock-in.",
  },
  {
    q: "Should I choose a specialist or a full-service agency?",
    a: "A specialist understands your category and buyer deeply and tends to do fewer things extremely well. A large full-service agency offers breadth and scale. For jewellery specifically — a trust-driven, craft-led purchase — we believe a specialist usually serves you better, but the right answer depends on your size and goals.",
  },
  {
    q: "How did you rank these agencies?",
    a: "By who each is genuinely best for, not by who paid. We placed ourselves first because this is our page and we are the specialist for the independent jewellery house — and we have been transparent about that bias. The other agencies are real, capable firms; the notes describe where each is strongest so you can choose honestly.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Agency Dubai", path: "/marketing-agency-dubai/" },
  { name: "Best Jewellery Marketing Agencies", path: PATH },
];

export default function BestAgenciesPage() {
  return (
    <main>
      <JsonLd
        data={[
          serviceLd({
            serviceType: "Jewellery Marketing",
            name: "Best Jewellery Marketing Agencies in Dubai",
            description:
              "A guide to jewellery marketing agencies in Dubai and where a specialist studio fits.",
            path: PATH,
          }),
          faqPageLd(faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumbs items={crumbs} />

      <MoneyHero
        eyebrow="Guide · 2026"
        title={
          <>
            The best jewellery marketing agencies in Dubai{" "}
            <em className="italic">(2026).</em>
          </>
        }
        lead="An honest, opinionated guide. We rank ourselves first — we are the specialist for the independent jewellery house, and we say why plainly — then list five capable Dubai agencies and who each is genuinely best for. Choose the one built for your problem."
      />

      <Section surface="paper">
        <div className="max-w-[760px] mx-auto">
          {/* Table of contents */}
          <nav aria-label="On this page" className="mb-xl">
            <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-ink-2 mb-sm">
              On this page
            </p>
            <ol className="flex flex-col gap-2xs">
              {agencies.map((a) => (
                <li key={a.id}>
                  <a
                    href={`#${a.id}`}
                    className="font-serif text-[length:var(--step-0)] text-ink hover:text-gold"
                    style={{
                      transition:
                        "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {a.name}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Agency entries */}
          <div className="flex flex-col divide-y divide-hairline border-t border-hairline">
            {agencies.map((a) => (
              <article
                key={a.id}
                id={a.id}
                className="py-lg scroll-mt-28"
              >
                <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
                  {a.name}
                </h2>
                <p className="mt-2xs font-serif italic text-gold text-[length:var(--step-0)]">
                  {a.bestFor}
                </p>
                <p className="mt-sm text-ink-2 leading-[1.7] max-w-[68ch]">
                  {a.note}
                </p>
                {a.href && (
                  <p className="mt-sm">
                    {a.internal ? (
                      <Link
                        href={a.href}
                        className="link inline-flex items-center gap-[0.35em] font-sans text-ink"
                      >
                        <span className="relative">
                          See how we work with jewellers
                        </span>
                        <span aria-hidden>&rarr;</span>
                      </Link>
                    ) : (
                      <a
                        href={a.href}
                        target="_blank"
                        rel="nofollow noopener"
                        className="font-sans text-ink-2 underline decoration-hairline underline-offset-2 hover:text-gold hover:decoration-gold"
                        style={{
                          transition:
                            "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      >
                        Visit website &nearr;
                      </a>
                    )}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-xl prose-velvet">
            <h2>How to choose</h2>
            <p>
              Ignore the rankings for a moment and ask three questions. Does the
              agency understand jewellery specifically — the trust, the
              provenance, the way this buyer decides? Will your account be run by
              someone senior, or handed to a junior on a template? And can they
              show you real, attributable results rather than a wall of
              fabricated metrics? Those three answers matter more than any list,
              including this one.
            </p>
            <p>
              If you want a specialist built for the independent jewellery house,
              that is exactly what we do — see the{" "}
              <Link href="/jewellery-marketing-agency-dubai/">
                jewellery marketing agency Dubai
              </Link>{" "}
              page, or start with a short, honest audit below.
            </p>
          </div>
        </div>
      </Section>

      <FaqSection
        faqs={faqs}
        heading="Choosing a jewellery agency, answered"
      />

      <MoneyCta whatsappMessage="Hi Velvet — I'm comparing jewellery marketing agencies in Dubai and I'd like a brand audit. " />
    </main>
  );
}
