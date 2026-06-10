import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

const campaigns = [
  {
    name: "The Bride",
    img: "/images/campaign-bride.png",
    alt: "Gold-embroidered bridal silk catching warm light",
    desc: "A bridal campaign concept built around the wedding milestone — heritage-led art direction for NRI wedding seasons and high-value families. Selling the moment, not the product.",
  },
  {
    name: "The Forever Royal",
    img: "/images/campaign-forever-royal.png",
    alt: "Burgundy and gold brocade, richly woven",
    desc: "A heritage concept positioning antique gold and certified diamonds as a generational investment — repositioning fine jewellery from commodity to family legacy.",
  },
  {
    name: "Material & Light",
    img: "/images/campaign-interiors.png",
    alt: "Travertine and linen in soft directional daylight",
    desc: "An interiors concept built around material and light — positioning a design practice as a signature, not a service.",
  },
];

export function SelectedCampaigns() {
  return (
    <Section surface="paper-2" id="campaigns">
      <div className="max-w-[640px]">
        <Reveal>
          <Eyebrow withRule>Selected campaigns</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <Heading level="h2" className="mt-md">
            Campaign concepts.
          </Heading>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-sm text-ink-2 max-w-[52ch]">
            Approaches and art direction we've developed for fine jewellery and
            interiors. Concept work — not delivered client results.
          </p>
        </Reveal>
      </div>

      <div className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-lg">
        {campaigns.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <article className="flex flex-col">
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
                  <h3 className="font-serif text-[length:var(--step-2)] leading-[1.1] tracking-[-0.02em] text-cream">
                    {c.name}
                  </h3>
                </div>
              </EditorialImage>
              <p className="mt-sm text-ink-2 text-[length:var(--step--1)] leading-[1.5]">
                {c.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
