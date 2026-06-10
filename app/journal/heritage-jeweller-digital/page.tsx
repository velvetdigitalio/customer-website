import { pageMeta } from "@/lib/seo";
import { ArticleShell, type Block } from "@/components/sections/ArticleShell";

const title = "How a heritage jeweller should think about digital";
const standfirst =
  "The best jewellery houses already have the hard part — the craft. What they usually lack is a digital presence that carries it. A few principles we hold to.";

export const metadata = pageMeta({
  title: `${title} — Velvet Digital`,
  description: standfirst,
  path: "/journal/heritage-jeweller-digital/",
  type: "article",
  publishedTime: "2026-06-10",
});

const body: Block[] = [
  {
    p: "There is a particular kind of jewellery brand we find ourselves drawn to: decades old, genuinely skilled, trusted by the families who already know it — and almost invisible to the ones who don't. The craft is not the problem. The presentation is.",
  },
  {
    p: "Most of these houses run their digital presence the way they ran a display case in 1995. The instinct is understandable and the result is the same every time: a feed that behaves like a flat catalogue, clinical backgrounds, the same few compositions repeated until the audience that matters stops looking. We call it the catalogue trap. It is the single most common reason a serious brand reads as a small one online.",
  },
  { h2: "Editorial discipline, not louder marketing" },
  {
    p: "The way out is not louder marketing. It is editorial discipline. A jewellery feed should behave like the pages of a considered magazine, not the shelves of a shop — one piece given room, photographed with intent, allowed to mean something. The work of a fine setting rewards being seen closely: the cut of a stone, the light moving through it, the weight of the metal. Macro film does more for a serious buyer than any claim a caption could make. Show the craft and the price explains itself.",
  },
  { h2: "Narrative over product" },
  {
    p: "People do not buy a milestone piece because it appeared in a grid. They buy it because it belongs to a moment — a wedding, an anniversary, a thing being marked. Build the brand around those moments and the jewellery stops being a commodity and becomes the obvious choice for an occasion. The brands that understand this stop competing on price, because they are no longer selling the same thing as everyone else.",
  },
  { h2: "Restraint about who you talk to" },
  {
    p: "It is tempting to chase the largest possible audience, and it is almost always a mistake for a high-value brand. Broad, cheap reach pulls in the price-sensitive and trains the brand to discount. The discipline is the opposite: speak precisely to the few who are right, across the whole journey — work that earns attention, work that answers the questions a careful buyer asks (where the stones are from, how they are certified, why the house can be trusted), and a quiet, direct path to a private conversation when they are ready.",
  },
  { h2: "The last step matters most" },
  {
    p: "A serious enquiry should not land in a clumsy web form. It should be met — quickly, discreetly, well — wherever the buyer already is. A considered concierge that understands a question before a person needs to, and a local presence that is actually there when someone nearby goes looking, do more for a high-value house than another month of broad advertising.",
  },
  {
    p: "None of this is exotic. It is what the best houses have always done in person — attention, narrative, discretion, the right room for the right client — translated to where the buying now begins. The craft was never the hard part. Carrying it across is.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      slug="heritage-jeweller-digital"
      eyebrow="Field notes"
      title={title}
      standfirst={standfirst}
      date="June 2026"
      servicesHref="/services/#content"
      servicesLabel="Content & Film"
      body={body}
    />
  );
}
