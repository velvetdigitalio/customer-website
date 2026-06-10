import { pageMeta } from "@/lib/seo";
import { TextLink } from "@/components/ui/TextLink";

export const metadata = pageMeta({
  title: "Journal · Velvet Digital",
  description:
    "Notes on luxury branding, jewellery and interiors marketing in the Gulf.",
  path: "/journal/",
});

const articles = [
  {
    slug: "selling-to-the-gulf-nri-buyer",
    title: "Selling fine jewellery to the Gulf's Indian buyer",
    lead: "The UAE has one of the world's densest concentrations of high-net-worth Indian families. Most jewellery brands market to them as if they were the same as buyers back home. They aren't.",
    category: "Field notes",
    date: "June 2026",
  },
  {
    slug: "whatsapp-luxury-sales-channel",
    title: "WhatsApp is where the Gulf's luxury sales actually close",
    lead: "In the UAE, the high-value enquiry doesn't want a web form. It wants a conversation — on the app it already lives in. The brands that understand this are quietly winning.",
    category: "Field notes",
    date: "June 2026",
  },
  {
    slug: "what-works-luxury-digital-2026",
    title: "What's actually working in luxury digital, 2026",
    lead: "Every year brings a new list of tactics. Most are noise. A few genuinely move the needle for high-value brands. Here is what we're paying attention to — and what we're ignoring.",
    category: "Field notes",
    date: "June 2026",
  },
  {
    slug: "interior-designers-digital-presence",
    title: "What interior designers get wrong about going digital",
    lead: "Interior design is a visual field, so it's tempting to assume a beautiful portfolio does the selling. It doesn't. Clients hire on trust and fit — and that's built before they ever call.",
    category: "Field notes",
    date: "June 2026",
  },
  {
    slug: "heritage-jeweller-digital",
    title: "How a heritage jeweller should think about digital",
    lead: "The best jewellery houses already have the hard part — the craft. What they usually lack is a digital presence that carries it.",
    category: "Field notes",
    date: "June 2026",
  },
];

export default function JournalPage() {
  const [featured, ...rest] = articles;

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
