import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PageHeader } from "@/components/ui/PageHeader";
import { FinalCta } from "@/components/sections/FinalCta";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services — Brand, Content & Performance",
  description:
    "Brand identity, editorial content, paid media and automation for fine jewellery and interior brands across the UAE.",
  path: "/services/",
});

const disciplines = [
  {
    num: "01",
    id: "brand",
    title: "Brand & Identity",
    line: "The foundation everything is built on.",
    img: "/images/brand-identity.png",
    alt: "Cream stationery with a gold wax seal on warm fabric",
    body: "Positioning, narrative and identity systems — and the website that carries them. We decide what a brand means before deciding how it looks: the difference between a house with a point of view and a catalogue of products. For a jeweller, that often means moving the brand from “a place that sells stones” to a name a family chooses for a milestone. For an interior practice, from “a service” to a signature.",
  },
  {
    num: "02",
    id: "content",
    title: "Content & Film",
    line: "Visual storytelling that builds desire.",
    img: "/images/content-film.png",
    alt: "A prime camera lens lit by a softbox, warm and low-key",
    body: "Editorial photography and high-definition macro film, produced as a steady engine rather than occasional bursts. We shoot the way the work deserves to be seen — a diamond’s cut mapped in close detail, the weight of a setting, the grain of a material — and we rotate the creative so a feed never flattens into a product directory. Desire is built, not declared.",
  },
  {
    num: "03",
    id: "social",
    title: "Social & Community",
    line: "Presence that compounds.",
    img: "/images/social-community.png",
    alt: "Points of light connected across a dark field — a network",
    body: "The feed is where many luxury brands quietly undo their own work — a flat product directory, posted whenever there is a gap. We run it as an editorial publication instead: a consistent rhythm, creative that stays fresh, and a point of view that gives an audience a reason to keep watching. Presence is not a burst of activity before a launch; it is the steady, compounding result of showing up well, month after month, until the audience holds.",
  },
  {
    num: "04",
    id: "performance",
    title: "Performance & Discovery",
    line: "The right buyer, not the most buyers.",
    img: "/images/performance-streaks.png",
    alt: "Streaks of gold light sweeping across a dark field",
    body: "Paid social and search — Meta, Google and YouTube — run with restraint and against real numbers. The aim is not broad reach; it is the right person. We build full-funnel: work that earns attention, work that earns consideration (where transparency and provenance matter), and work that turns quiet intent into a private appointment. And we lay the local-search groundwork, so the high-intent buyer searching nearby finds you first. Reach is easy; the right reach is the discipline.",
  },
  {
    num: "05",
    id: "ai",
    title: "AI Content & Concept Imagery",
    line: "Modern production, made with judgment.",
    img: "/images/ai-concept.png",
    alt: "A flowing field of fine gold particles, generative and dynamic",
    body: "Generative tools have changed what a small studio can explore and produce. We use AI-assisted concept imagery and content to test directions quickly, visualise a campaign before a shoot, and keep a content engine fed at pace. The discipline is in the limit: AI is for making and exploring, never for faking a relationship or passing off a person who does not exist. Used with judgment it extends the craft; used carelessly it cheapens it — and we stay on the right side of that line.",
  },
  {
    num: "06",
    id: "systems",
    title: "Systems & Automation",
    line: "The quiet machinery underneath.",
    img: "/images/systems-nodes.png",
    alt: "A lattice of connected gold nodes on a dark ground",
    body: "Lead routing, a discreet WhatsApp concierge that qualifies an enquiry before it reaches a person, CRM and attribution, and the local-search groundwork that captures high-intent buyers nearby. The machinery that means a serious enquiry is answered well at any hour, and that marketing keeps working when the studio is asleep.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: disciplines.map((d, i) => ({
    "@type": "Service",
    position: i + 1,
    name: d.title,
    description: d.line,
    serviceType: d.title,
    provider: {
      "@type": "Organization",
      name: "Velvet Digital",
      url: "https://velvetdigital.io",
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
  })),
};

function DisciplineBlock({
  d,
  index,
}: {
  d: (typeof disciplines)[number];
  index: number;
}) {
  const flip = index % 2 === 1;
  return (
    <div
      id={d.id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-2xl items-center scroll-mt-24"
    >
      <Reveal className={flip ? "lg:order-2" : undefined}>
        <EditorialImage
          src={d.img}
          alt={d.alt}
          width={573}
          height={570}
          className="aspect-[4/3] w-full"
          feather={flip ? ["left", "bottom"] : ["right", "bottom"]}
          parallax
        />
      </Reveal>
      <Reveal delay={0.1} className={flip ? "lg:order-1" : undefined}>
        <div className="max-w-[46ch]">
          <span className="font-serif text-[length:var(--step-1)] text-gold leading-none">
            {d.num}
          </span>
          <h2 className="mt-xs font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
            {d.title}
          </h2>
          <p className="mt-2xs font-serif italic text-ink-2">{d.line}</p>
          <p className="mt-md text-ink-2 leading-[1.6]">{d.body}</p>
        </div>
      </Reveal>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeader
        eyebrow="What we do"
        title={
          <>
            Six disciplines. One considered{" "}
            <em className="italic">whole.</em>
          </>
        }
        lead="Most luxury brands are not short on craft. They are short on a digital presence that does the craft justice. That is the gap we work in — six disciplines, run as one coherent practice."
      />

      <Section surface="paper">
        <div className="flex flex-col gap-2xl lg:gap-3xl">
          {disciplines.map((d, i) => (
            <DisciplineBlock key={d.id} d={d} index={i} />
          ))}
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
