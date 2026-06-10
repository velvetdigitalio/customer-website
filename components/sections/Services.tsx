import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

const services = [
  {
    num: "01",
    title: "Brand & Identity",
    img: "/images/brand-identity.png",
    alt: "Cream stationery with a gold wax seal on warm fabric",
    desc: "Positioning, narrative and identity systems — so a brand reads as a house with a point of view, not a catalogue of products.",
  },
  {
    num: "02",
    title: "Content & Film",
    img: "/images/content-film.png",
    alt: "A prime camera lens lit by a softbox, warm and low-key",
    desc: "Editorial photography and macro film, produced as a steady engine. We shoot the work the way it deserves to be seen.",
  },
  {
    num: "03",
    title: "Performance",
    img: "/images/performance-streaks.png",
    alt: "Streaks of gold light sweeping across a dark field",
    desc: "Meta, Google and YouTube, run with restraint — built to reach the right buyer, not the most buyers.",
  },
  {
    num: "04",
    title: "Systems & Automation",
    img: "/images/systems-nodes.png",
    alt: "A network of connected gold nodes on a dark ground",
    desc: "Lead routing, a discreet WhatsApp concierge, CRM and attribution — the quiet machinery that works while the studio sleeps.",
  },
];

export function Services() {
  return (
    <Section surface="espresso" id="services">
      <div className="max-w-[640px]">
        <Reveal>
          <Eyebrow withRule onDark>
            What we do
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <Heading level="h2" accent="whole" onDark className="mt-md">
            Four disciplines. One considered whole.
          </Heading>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-sm text-cream-2 max-w-[52ch]">
            Most luxury brands are not short on craft. They are short on a digital
            presence that does the craft justice. That is the gap we work in.
          </p>
        </Reveal>
      </div>

      <div className="mt-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg lg:gap-md">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.1}>
            <article className="flex flex-col">
              <EditorialImage
                src={s.img}
                alt={s.alt}
                width={573}
                height={570}
                className="aspect-[4/3] w-full"
                feather={["bottom"]}
                featherAmount={12}
                parallax
              />
              <div className="mt-md">
                <span className="font-serif text-[length:var(--step--1)] text-gold">
                  {s.num}
                </span>
                <h3 className="mt-2xs font-serif text-[length:var(--step-1)] leading-[1.2] tracking-[-0.02em] text-cream">
                  {s.title}
                </h3>
                <p className="mt-xs text-cream-2 text-[length:var(--step--1)] leading-[1.5]">
                  {s.desc}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
