import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { Button } from "@/components/ui/Button";
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
  /** Anchor on /services this piece relates to. */
  servicesHref: string;
  servicesLabel: string;
  body: Block[];
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
  servicesHref,
  servicesLabel,
  body,
}: ArticleShellProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: standfirst,
    author: { "@type": "Organization", name: "Velvet Digital", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Velvet Digital",
      url: SITE_URL,
    },
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/journal/${slug}/`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              Velvet Digital · {date}
            </p>
          </div>
        </Section>

        <Section surface="paper">
          <div className="max-w-[620px] mx-auto prose-velvet">
            <ArticleBody body={body} />

            <p className="mt-lg font-serif italic text-ink-2">— Velvet Digital</p>

            <hr className="mt-xl mb-lg border-hairline" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-sm sm:gap-lg">
              <p className="text-ink-2 text-[length:var(--step--1)]">
                We work with fine jewellery brands and interior designers across
                the UAE.
              </p>
              <div className="shrink-0">
                <Button calendly>Request an audit</Button>
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
      </article>
    </>
  );
}
