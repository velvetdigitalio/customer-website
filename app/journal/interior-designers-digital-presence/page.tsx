import { pageMeta } from "@/lib/seo";
import { ArticleShell, type Block } from "@/components/sections/ArticleShell";

const title = "What interior designers get wrong about going digital";
const standfirst =
  "Interior design is a visual field, so it's tempting to assume a beautiful portfolio does the selling. It doesn't. Clients hire on trust and fit — and that's built before they ever call.";

export const metadata = pageMeta({
  title: `${title} — Velvet Digital`,
  description: standfirst,
  path: "/journal/interior-designers-digital-presence/",
  type: "article",
  publishedTime: "2026-06-10",
});

const body: Block[] = [
  {
    p: "Most interior designers we look at have the same problem, and it is not a lack of talent. It is the belief that the work should speak for itself. The portfolio is beautiful, the projects are real, and the enquiries still do not come. The assumption that a strong portfolio does the selling is the single most expensive mistake in this field — because clients do not hire a designer purely because the rooms are lovely. They hire on trust, on a sense that the designer understands them, and on the belief that the style genuinely aligns with their own. A gallery of finished rooms proves none of those things on its own.",
  },
  {
    p: "The first fix is to stop posting without a plan. The most common failure is sporadic posting — work shared whenever there's a gap between projects — which trains the algorithm and the audience to ignore you. Consistency, not virality, is what builds recall in a competitive local market. A designer would never hand a client a room assembled without a plan; the same discipline has to apply to the feed.",
  },
  {
    p: "The second is to understand that the platforms do different jobs. Instagram is where style and credibility are judged, but its content has a short shelf life. Pinterest behaves like a visual search engine, where a single image can drive traffic months or years after it is posted — which makes it one of the strongest evergreen channels a designer has, and one of the most neglected. And search itself still matters enormously: a serious share of homeowners now compare designers through Google and reviews before they ever pick up the phone, which means a designer who is invisible in search is invisible to the client who is furthest along and readiest to commit.",
  },
  {
    p: "The third — and the one designers resist most — is that not everything needs to be public to build a portfolio. Many of the best clients do not want their homes published, and waiting for permission after a project ends is too late. The fix is simple and it is structural: build photography and publication consent into the contract at the start, and offer private clients alternatives — an anonymised case study (“a penthouse in the city”), detail shots only, or behind-the-scenes process content that never shows the finished home. A practice that handles this well never runs short of material, and never has to choose between a private client and a visible portfolio.",
  },
  {
    p: "Underneath all of it is the thing the portfolio cannot do alone: communicate trust, taste, and understanding before the first call. That is what content is for. A prospective client who saw a room on Instagram, then read a thoughtful note on how those design decisions were made, arrives as a far warmer lead than one who only saw the photograph. The work earns the look. The content earns the call.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      slug="interior-designers-digital-presence"
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
