import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

export function IndiaGulf({ showCta = true }: { showCta?: boolean }) {
  return (
    <EditorialImage
      src="/images/travertine-and-linen.png"
      alt="A travertine wall and linen drape in warm directional light"
      className="w-full min-h-[80svh] md:min-h-[82vh]"
      rounded={false}
      scrim="left"
      objectPosition="25% 50%"
    >
      {/* Reinforce legibility where text wraps wide on small screens */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, rgba(20,15,9,0.82) 0%, rgba(20,15,9,0.5) 50%, rgba(20,15,9,0.25) 100%)",
        }}
      />
      <Container className="h-full">
        <div className="flex h-full items-center py-2xl">
          <div className="max-w-[44ch]">
            <Reveal>
              <Eyebrow onDark>The model</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.08] tracking-[-0.02em] text-cream">
                Built in Bengaluru. Made for the Gulf.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-md text-cream-2 max-w-[48ch]">
                Velvet works from India for the luxury market of the UAE — Indian
                craft and pace, held to Gulf standards. One studio, one standard,
                wherever the brand sits. The distance is the point.
              </p>
            </Reveal>

            {/* Structured bridge */}
            <Reveal delay={0.24}>
              <div className="mt-lg flex items-center gap-md">
                <div>
                  <p className="font-serif text-[length:var(--step-1)] leading-none text-cream">
                    Bengaluru
                  </p>
                  <p className="mt-2xs text-[length:var(--step--1)] text-cream-2">
                    India · the studio
                  </p>
                </div>
                <div
                  className="flex flex-1 items-center min-w-[36px] text-gold"
                  aria-hidden="true"
                >
                  <span className="h-px flex-1 bg-gold/55" />
                  <span className="-ml-px text-[length:var(--step-0)] leading-none">
                    ›
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-serif text-[length:var(--step-1)] leading-none text-cream">
                    The Gulf
                  </p>
                  <p className="mt-2xs text-[length:var(--step--1)] text-cream-2">
                    Dubai · Abu Dhabi
                  </p>
                </div>
              </div>
            </Reveal>

            {showCta && (
              <Reveal delay={0.3}>
                <div className="mt-lg">
                  <TextLink href="/studio/" arrow onDark>
                    About the studio
                  </TextLink>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </EditorialImage>
  );
}
