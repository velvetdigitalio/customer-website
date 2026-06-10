import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PageHeader } from "@/components/ui/PageHeader";
import { FinalCta } from "@/components/sections/FinalCta";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Selected Work · Velvet Digital",
  description:
    "Campaign concepts and art direction for fine jewellery and interior brands. Concept work, not delivered client results.",
  path: "/work/",
});

const concepts = [
  {
    name: "The Bride",
    img: "/images/campaign-bride.png",
    alt: "Gold-embroidered bridal silk catching warm light",
    body: "A bridal campaign concept built around the wedding milestone. The art direction is heritage-led and made for NRI wedding seasons and high-value families — selling the moment a piece belongs to, not the product in isolation. The work centres the occasion: the family, the ceremony, the heirloom in the making.",
  },
  {
    name: "The Forever Royal",
    img: "/images/campaign-forever-royal.png",
    alt: "Burgundy and gold brocade, richly woven",
    body: "A heritage concept that positions antique gold and certified diamonds as a generational investment. It repositions fine jewellery from commodity to family legacy — provenance, certification and craft brought to the front, so the buyer is choosing an inheritance rather than making a purchase.",
  },
  {
    name: "Material & Light",
    img: "/images/campaign-interiors.png",
    alt: "Travertine and linen in soft directional daylight",
    body: "An interiors concept built around material and light. It positions a design practice as a signature rather than a service — the work shown the way the spaces are meant to be experienced, with texture, stone and daylight doing the persuading.",
  },
];

function ConceptBlock({
  c,
  index,
}: {
  c: (typeof concepts)[number];
  index: number;
}) {
  const flip = index % 2 === 1;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-2xl items-center">
      <Reveal className={flip ? "lg:order-2" : undefined}>
        <EditorialImage
          src={c.img}
          alt={c.alt}
          width={533}
          height={907}
          className="aspect-[4/5] w-full"
          scrim="bottom"
          parallax
        >
          <div className="flex h-full flex-col justify-between p-md">
            <span className="self-start rounded-[2px] bg-[rgba(20,16,12,0.55)] px-xs py-[3px] font-sans text-[length:var(--step--1)] uppercase tracking-[0.14em] text-cream backdrop-blur-[2px]">
              Concept
            </span>
            <h2 className="font-serif text-[length:var(--step-2)] leading-[1.1] tracking-[-0.02em] text-cream">
              {c.name}
            </h2>
          </div>
        </EditorialImage>
      </Reveal>
      <Reveal delay={0.1} className={flip ? "lg:order-1" : undefined}>
        <div className="max-w-[46ch]">
          <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold">
            Campaign concept
          </p>
          <h2 className="mt-xs font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
            {c.name}
          </h2>
          <p className="mt-md text-ink-2 leading-[1.6]">{c.body}</p>
        </div>
      </Reveal>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Selected work"
        title="Campaign concepts."
        lead="Approaches and art direction we've developed for fine jewellery and interior brands. These are concepts — the thinking and the look — not delivered client results. Selected client work is shared privately on request."
      />

      <Section surface="paper">
        <div className="flex flex-col gap-2xl lg:gap-3xl">
          {concepts.map((c, i) => (
            <ConceptBlock key={c.name} c={c} index={i} />
          ))}
        </div>
      </Section>

      {/* Honest private-work note */}
      <Section surface="paper-2">
        <div className="max-w-[600px]">
          <Reveal>
            <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
              Want to see work relevant to your category?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-md text-ink-2 leading-[1.6] max-w-[52ch]">
              We share selected client work privately, matched to your category.
              Request an audit and we'll send relevant examples.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-lg">
              <Button calendly>Request an audit</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
