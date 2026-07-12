import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Page not found — Velvet Digital",
};

const links = [
  { label: "Work", href: "/work/" },
  { label: "Services", href: "/services/" },
  { label: "Journal", href: "/journal/" },
  { label: "Contact", href: "/contact/" },
];

export default function NotFound() {
  return (
    <main
      data-hero-dark=""
      className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-umber px-md py-2xl"
    >
      {/* Grain texture */}
      <div
        className="hero-grain absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Oversized faded glyph */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(11rem, 42vw, 30rem)",
          color: "var(--cream)",
          opacity: 0.04,
        }}
        aria-hidden="true"
      >
        404
      </span>

      {/* Hairline rules */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-12 lg:top-14 left-md right-md lg:left-lg lg:right-lg h-px bg-cream"
          style={{ opacity: 0.08 }}
        />
        <div
          className="absolute bottom-md lg:bottom-lg left-md right-md lg:left-lg lg:right-lg h-px bg-cream"
          style={{ opacity: 0.08 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[640px] text-center">
        <Reveal>
          <Eyebrow onDark withRule className="justify-center">
            Error 404
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-md font-serif text-[length:var(--step-4)] leading-[1.05] tracking-[-0.02em] text-cream">
            This page has <em className="italic text-gold">moved on.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-md text-[length:var(--step-0)] leading-[1.5] text-cream-2 max-w-[44ch] mx-auto">
            The link may be broken, or the page may have been retired. Nothing
            lost — here is the way back.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-xl flex flex-col sm:flex-row sm:items-center sm:justify-center gap-md">
            <Button href="/" onDark className="w-full sm:w-auto text-center">
              Back to home
            </Button>
            <TextLink
              href="/contact/"
              arrow
              onDark
              className="justify-center sm:justify-start"
            >
              Message us
            </TextLink>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <nav
            aria-label="Site"
            className="mt-xl flex flex-wrap justify-center gap-x-lg gap-y-xs"
          >
            {links.map((link) => (
              <TextLink key={link.href} href={link.href} onDark>
                {link.label}
              </TextLink>
            ))}
          </nav>
        </Reveal>
      </div>
    </main>
  );
}
