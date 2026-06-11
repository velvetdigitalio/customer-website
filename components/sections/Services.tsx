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
    desc: "Positioning, narrative, identity systems, and the website that carries them. We decide what a brand means before deciding how it looks.",
  },
  {
    num: "02",
    title: "Content & Film",
    img: "/images/content-film.png",
    alt: "A prime camera lens lit by a softbox, warm and low-key",
    desc: "Editorial photography and high-definition macro film as a steady engine — craft shown the way it deserves to be seen.",
  },
  {
    num: "03",
    title: "Social & Community",
    img: "/images/social-community.png",
    alt: "Points of light connected across a dark field — a network",
    desc: "Running the feed as an editorial publication, not a product directory — fresh creative, consistent rhythm, an audience that holds.",
  },
  {
    num: "04",
    title: "Performance & Discovery",
    img: "/images/performance-streaks.png",
    alt: "Streaks of gold light sweeping across a dark field",
    desc: "Paid social and search against real numbers, plus the local-search groundwork that captures high-intent buyers nearby.",
  },
  {
    num: "05",
    title: "AI Content & Concept Imagery",
    img: "/images/ai-concept.png",
    alt: "A flowing field of fine gold particles, generative and dynamic",
    desc: "AI-assisted concept imagery and content to explore directions and produce at pace — used to make and explore, never to fake.",
  },
  {
    num: "06",
    title: "Systems & Automation",
    img: "/images/systems-nodes.png",
    alt: "A lattice of connected gold nodes on a dark ground",
    desc: "Lead routing, a discreet WhatsApp concierge that qualifies an enquiry before it reaches a person, CRM and attribution — so the work compounds.",
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
            Six disciplines. One considered whole.
          </Heading>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-sm text-cream-2 max-w-[52ch]">
            Most luxury brands are not short on craft. They are short on a digital
            presence that does the craft justice. That is the gap we work in.
          </p>
        </Reveal>
      </div>

      <div className="mt-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md sm:gap-lg auto-rows-fr">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.08} className="h-full">
            <article className="flex flex-col h-full">
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
