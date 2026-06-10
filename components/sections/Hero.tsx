"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Word({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.15em]">
      <motion.span
        className="inline-block"
        initial={{ y: "120%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function FadeUp({
  children,
  delay,
  className,
  y = 14,
  duration = 0.6,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  y?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({
  children,
  delay,
  className,
  duration = 0.5,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaticHero() {
  return (
    <>
      <div className="flex items-center gap-sm mb-md">
        <span className="inline-block w-md h-px bg-gold shrink-0" aria-hidden="true" />
        <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold">
          A brand &amp; digital studio
        </p>
      </div>
      <h1 className="font-serif text-[length:var(--step-4)] leading-[1.05] tracking-[-0.02em] text-cream mb-md">
        Luxury grows <em className="italic text-gold">quietly.</em>
      </h1>
      <p
        className="text-[length:var(--step-0)] lg:text-[length:var(--step-1)] leading-[1.4] max-w-[52ch] mb-xl"
        style={{ color: "#CCC3AB" }}
      >
        Brand, content and digital systems for fine jewellery and
        interiors — built in India, made to Gulf standards.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-md mb-lg">
        <Button calendly onDark className="w-full sm:w-auto text-center">
          Request an audit
        </Button>
        <TextLink href="/work/" arrow onDark className="justify-center sm:justify-start">
          View the work
        </TextLink>
      </div>
      <p className="text-[length:var(--step--1)] text-cream-2 max-w-[48ch]">
        A considered studio. We take a small number of brands at a time.
      </p>
    </>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      data-hero-dark=""
      className="relative min-h-[88svh] md:min-h-dvh flex items-center justify-center bg-umber overflow-hidden"
    >
      {/* ── Grain (static, always visible) ── */}
      <div className="hero-grain absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ── V glyph (static, always visible) ── */}
      <div
        className="absolute pointer-events-none select-none top-[8%] right-[-8%] md:top-1/2 md:left-1/2 md:right-auto md:-translate-x-1/2 md:-translate-y-1/2"
        aria-hidden="true"
      >
        <span
          className="font-serif block"
          style={{
            fontSize: "clamp(16rem, 40vw, 48rem)",
            lineHeight: 0.85,
            color: "var(--cream)",
            opacity: 0.045,
          }}
        >
          V
        </span>
      </div>

      {/* ── Hairline rules (static) ── */}
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

      {/* ── Hero image — desktop: right column, feathered into the umber ── */}
      <motion.div
        className="absolute inset-y-0 right-0 w-[55%] z-[1] pointer-events-none hidden md:block"
        aria-hidden="true"
        initial={prefersReduced ? false : { opacity: 0, scale: 1.03 }}
        animate={prefersReduced ? { opacity: 0.5 } : { opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: EASE }}
        style={{
          maskImage: "linear-gradient(to right, transparent 5%, black 55%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 5%, black 55%)",
        }}
      >
        <img
          src="/images/brass-line-on-linen.png"
          alt=""
          width={1448}
          height={1086}
          loading="eager"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Hero image — mobile: faint atmosphere filling the lower field ── */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[46%] z-[1] pointer-events-none md:hidden"
        aria-hidden="true"
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.4, delay: 0.8, ease: EASE }}
        style={{
          maskImage: "linear-gradient(to top, black 35%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 35%, transparent 100%)",
        }}
      >
        <img
          src="/images/brass-line-on-linen.png"
          alt=""
          width={1448}
          height={1086}
          loading="eager"
          className="w-full h-full object-cover object-[70%_50%]"
        />
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-md lg:px-lg pt-20 pb-xl lg:pt-14 lg:pb-0">
        <div className="max-w-[720px]">
          {prefersReduced ? (
            <StaticHero />
          ) : (
            <>
              {/* 1. Gold rule draws from left */}
              <div className="flex items-center gap-sm mb-md">
                <motion.span
                  className="inline-block w-md h-px bg-gold shrink-0 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                  aria-hidden="true"
                />
                {/* 2. Eyebrow text fades up */}
                <FadeUp delay={0.55} y={10} duration={0.6}>
                  <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold">
                    A brand &amp; digital studio
                  </p>
                </FadeUp>
              </div>

              {/* 3. Headline — split-word masked reveal */}
              <h1 className="font-serif text-[length:var(--step-4)] leading-[1.05] tracking-[-0.02em] text-cream mb-md">
                <Word delay={0.7}>Luxury</Word>{" "}
                <Word delay={0.82}>grows</Word>{" "}
                <Word delay={0.98}>
                  <em className="italic text-gold">quietly.</em>
                </Word>
              </h1>

              {/* 4. Subhead fades up */}
              <FadeUp delay={1.35} y={10} duration={0.65}>
                <p
                  className="text-[length:var(--step-0)] lg:text-[length:var(--step-1)] leading-[1.4] max-w-[52ch] mb-xl"
                  style={{ color: "#CCC3AB" }}
                >
                  Brand, content and digital systems for fine jewellery and
                  interiors — built in India, made to Gulf standards.
                </p>
              </FadeUp>

              {/* 5. CTAs appear */}
              <FadeIn delay={1.6}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-md mb-lg">
                  <Button calendly onDark className="w-full sm:w-auto text-center">
                    Request an audit
                  </Button>
                  <TextLink href="/work/" arrow onDark className="justify-center sm:justify-start">
                    View the work
                  </TextLink>
                </div>
              </FadeIn>

              {/* 6. Quiet line last */}
              <FadeIn delay={1.85} duration={0.6}>
                <p className="text-[length:var(--step--1)] text-cream-2 max-w-[48ch]">
                  A considered studio. We take a small number of brands at a time.
                </p>
              </FadeIn>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
