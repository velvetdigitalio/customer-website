import { pageMeta } from "@/lib/seo";
import { TextLink } from "@/components/ui/TextLink";
import { getAllJournalEntries } from "@/lib/journal-content";

export const metadata = pageMeta({
  title: "Journal — Luxury Digital Marketing Notes",
  description:
    "Notes on luxury branding, jewellery and interiors marketing in the Gulf.",
  path: "/journal/",
});

export default function JournalPage() {
  // Every article now lives as a file in content/journal/. This list is read
  // at build time and ordered newest-first — nothing to register by hand.
  const allArticles = getAllJournalEntries().map((e) => ({
    slug: e.slug,
    title: e.meta.title,
    lead: e.meta.standfirst,
    category: e.meta.eyebrow,
    date: e.meta.date,
  }));

  const [featured, ...rest] = allArticles;

  return (
    <main className="pt-28 lg:pt-36 pb-2xl">
      <div className="max-w-[760px] mx-auto px-md lg:px-lg">
        <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold">
          Journal
        </p>
        <h1 className="mt-sm font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink max-w-[18ch]">
          Quiet observations on luxury branding.
        </h1>
        <p className="mt-md text-ink-2 max-w-[56ch]">
          Field notes on jewellery, interiors and the Gulf market — how
          high-value brands win the right buyer without raising their voice.
        </p>

        {/* Featured (newest) */}
        <article className="mt-2xl border-t border-hairline pt-lg">
          <p className="text-[length:var(--step--1)] uppercase tracking-[0.12em] text-gold mb-xs">
            {featured.category}
          </p>
          <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink max-w-[24ch]">
            <TextLink href={`/journal/${featured.slug}/`}>
              {featured.title}
            </TextLink>
          </h2>
          <p className="mt-sm text-ink-2 max-w-[56ch]">{featured.lead}</p>
          <p className="mt-xs text-ink-2 text-[length:var(--step--1)]">
            {featured.date}
          </p>
        </article>

        {/* The rest */}
        <div className="mt-lg">
          {rest.map((article) => (
            <article
              key={article.slug}
              className="py-lg border-t border-hairline"
            >
              <p className="text-[length:var(--step--1)] uppercase tracking-[0.12em] text-gold mb-2xs">
                {article.category}
              </p>
              <h2 className="font-serif text-[length:var(--step-1)] leading-[1.2] tracking-[-0.02em] text-ink max-w-[28ch]">
                <TextLink href={`/journal/${article.slug}/`}>
                  {article.title}
                </TextLink>
              </h2>
              <p className="mt-xs text-ink-2 max-w-[56ch]">{article.lead}</p>
              <p className="mt-2xs text-ink-2 text-[length:var(--step--1)]">
                {article.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
