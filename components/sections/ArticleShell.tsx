import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FaqSection } from "@/components/money/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageLd, richaLd, type Faq } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";

export type Block =
  | { h2: string }
  | { p: string; lead?: string };

type ArticleShellProps = {
  slug: string;
  eyebrow: string;
  title: string;
  standfirst: string;
  date: string;
  /** ISO date (YYYY-MM-DD) for the Article schema. Defaults to the original
   *  journal launch date so existing pieces are unchanged. */
  isoDate?: string;
  /** A related page this piece links up to — usually the money/service page
   *  it supports, so the article passes context and link equity to its pillar. */
  servicesHref: string;
  servicesLabel: string;
  /** Structured body (used by the hand-written page.tsx articles). */
  body?: Block[];
  /** Pre-rendered HTML body (used by the content-file pipeline). Takes
   *  precedence over `body`. Injected into the `prose-velvet` container. */
  html?: string;
  /** Optional hero image path under /public. */
  hero?: string;
  heroAlt?: string;
  /**
   * Questions this piece answers, rendered visibly and mirrored into FAQPage
   * schema from the same array. These articles are titled with the exact queries
   * buyers type, so the Q→A pairs are the part an answer engine can lift whole.
   */
  faqs?: Faq[];
};

function ArticleBody({ body }: { body: Block[] }) {
  const out: React.ReactNode[] = [];
  let prev: "none" | "p" | "h2" = "none";

  body.forEach((block, i) => {
    if ("h2" in block) {
      out.push(
        <h2
          key={i}
          className="mt-xl font-serif text-[length:var(--step-1)] leading-[1.2] tracking-[-0.02em] text-ink"
        >
          {block.h2}
        </h2>,
      );
      prev = "h2";
      return;
    }
    const top =
      prev === "none" ? "" : prev === "h2" ? "mt-sm" : "mt-md";
    out.push(
      <p key={i} className={top}>
        {block.lead && (
          <strong className="font-semibold text-ink">{block.lead} </strong>
        )}
        {block.p}
      </p>,
    );
    prev = "p";
  });

  return <>{out}</>;
}

export function ArticleShell({
  slug,
  eyebrow,
  title,
  standfirst,
  date,
  isoDate = "2026-06-10",
  servicesHref,
  servicesLabel,
  body,
  html,
  hero,
  heroAlt,
  faqs,
}: ArticleShellProps) {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: standfirst,
    ...(hero ? { image: `${SITE_URL}${hero}` } : {}),
    // A named human, not the organisation. The full Person node lives in the
    // root layout; the @id here resolves to it, and the name is repeated inline
    // so the Article still parses standalone.
    author: { "@id": richaLd["@id"], "@type": "Person", name: richaLd.name },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: isoDate,
    dateModified: isoDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/journal/${slug}/`,
    },
  };

  const jsonLd = faqs?.length ? [articleLd, faqPageLd(faqs)] : [articleLd];

  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <Section surface="umber" heroDark>
          <div className="max-w-[720px] mx-auto">
            <Eyebrow onDark>{eyebrow}</Eyebrow>
            <h1 className="mt-md font-serif text-[length:var(--step-3)] lg:text-[length:var(--step-4)] leading-[1.08] tracking-[-0.02em] text-cream max-w-[20ch]">
              {title}
            </h1>
            <p className="mt-md font-serif text-[length:var(--step-0)] leading-[1.45] text-cream-2 max-w-[52ch]">
              {standfirst}
            </p>
            <p className="mt-sm text-cream-2 text-[length:var(--step--1)]">
              {richaLd.name} · Velvet Digital · {date}
            </p>
          </div>
        </Section>

        {hero && (
          <Section surface="paper" className="!pb-0">
            <div className="max-w-[820px] mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero}
                alt={heroAlt ?? title}
                className="w-full h-auto rounded-[var(--radius-md)]"
              />
            </div>
          </Section>
        )}

        <Section surface="paper">
          <div className="max-w-[620px] mx-auto">
            {html ? (
              <div
                className="prose-velvet"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <div className="prose-velvet">
                <ArticleBody body={body ?? []} />
              </div>
            )}

            <p className="mt-lg font-serif italic text-ink-2">— Velvet Digital</p>

            <hr className="mt-xl mb-lg border-hairline" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-sm sm:gap-lg">
              <p className="text-ink-2 text-[length:var(--step--1)]">
                We work with fine jewellery brands and interior designers across
                the UAE.
              </p>
              <div className="shrink-0">
                <WhatsAppButton>Message us on WhatsApp</WhatsAppButton>
              </div>
            </div>

            <div className="mt-md flex flex-wrap gap-lg">
              <TextLink href={servicesHref} arrow>
                {servicesLabel}
              </TextLink>
              <TextLink href="/journal/" arrow>
                Back to journal
              </TextLink>
            </div>
          </div>
        </Section>

        {faqs && faqs.length > 0 && (
          <FaqSection faqs={faqs} heading="Related questions" />
        )}
      </article>
    </>
  );
}
