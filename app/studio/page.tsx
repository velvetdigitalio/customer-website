import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PageHeader } from "@/components/ui/PageHeader";
import { IndiaGulf } from "@/components/sections/IndiaGulf";
import { Approach } from "@/components/sections/Approach";
import { FinalCta } from "@/components/sections/FinalCta";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Studio — Built in India, Made for the Gulf",
  description:
    "A small studio working from India for the luxury market of the UAE. How we work and who we work with.",
  path: "/studio/",
});

export default function StudioPage() {
  return (
    <main>
      <PageHeader
        eyebrow="The studio"
        title="A small studio, working at a distance."
        lead="Velvet is a brand and digital studio for fine jewellery houses and interior designers. We take a small number of brands at a time, because the work asks for it — and we keep the standard high enough that we'd be glad to sign our name to all of it."
      />

      {/* Considered studio */}
      <Section surface="paper-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-2xl items-center">
          <Reveal>
            <EditorialImage
              src="/images/material-flatlay.png"
              alt="Silk, brushed brass and marble arranged as a material study"
              width={1448}
              height={1086}
              className="aspect-[4/3] w-full"
              feather={["right", "bottom"]}
              parallax
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-[48ch]">
              <h2 className="font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
                A considered studio.
              </h2>
              <p className="mt-md text-ink-2 leading-[1.6]">
                Most agencies are loud; the brands we work with are not. We build
                presence the way a jeweller sets a stone — slowly, precisely, so the
                value is obvious without being announced.
              </p>
              <p className="mt-md text-ink-2 leading-[1.6]">
                That means working with a handful of brands rather than many, owning
                the brand, the content that carries it, and the quiet systems
                underneath — so the work compounds instead of resetting each month.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The India → Gulf bridge */}
      <IndiaGulf showCta={false} />

      {/* How we work */}
      <Approach />

      <FinalCta />
    </main>
  );
}
