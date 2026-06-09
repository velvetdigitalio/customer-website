# CLAUDE.md — Velvet Digital Website Rebuild

> This is the master instruction file. Read it fully before writing any code.
> Then read, in order: `01-brand-system.md`, `02-content.md`, `03-sections.md`,
> `04-component-rules.md`, `05-build-plan.md`, `06-seo.md`, `07-psychology.md`.
> Do not skip files. `07-psychology.md` explains *why* the structure is shaped
> this way — read it so you don't undo intentional decisions.

## What this project is

A rebuild of the marketing site for **Velvet Digital** — a brand & digital studio
that serves **fine jewellery brands and interior designers**, built in India,
targeting the **Indian-origin luxury market in the UAE (Dubai / Abu Dhabi)**.

The current live site (velvetdigital.io) is being replaced because it is a
generic "dark + gold agency template": correct surface polish, zero authorship,
no connection to jewellery or interiors, fabricated proof, and pricing/contact
signals aimed at the wrong market. This rebuild fixes the *concept*, not just CSS.

## The single most important rule

**Do not invent content.** Every brand name, testimonial, statistic, case-study
result, client logo, and metric must come from `02-content.md`. If a piece of
content is not in that file, it does not go on the site. Where the file marks a
slot as `[CLIENT-TODO]`, render a clearly-styled empty/placeholder state that
the human will fill — never fabricate a plausible-looking number, brand, or quote.
Fabricated proof is the #1 thing that loses the real buyer. This is non-negotiable.

## The taste bar (what "good" means here)

Reference points (human-made, study these mentally; do not copy):
- **VMGROUPE** — closest real analogue: NY luxury agency, same fine-jewellery +
  lifestyle niche. Editorial, photography-led, restrained.
- **Lundgren+Lindqvist**, **Pentagram editorial** — typographic restraint,
  intellectual calm, work speaks, generous whitespace.
- Warm-editorial studio sites: serif display + clean sans, full-bleed imagery,
  lots of negative space, no decorative noise.

What we are explicitly **moving away from**: the dark-aubergine + gold + glass-card
+ counter-animation "AI agency" look. That aesthetic is the costume every template
wears in 2026. We want something that looks *made by a person who knows this niche.*

## Hard "do not" list (these are the AI-tells we are killing)

1. **No fabricated metrics or counters.** No animated `0 → 340%` stat blocks unless
   the number is real and in `02-content.md`. Prefer named, attributable proof.
2. **No fake client logo wall** rendered as plain caps text (ATELIER NORDLUX …).
   Either real logos from `/assets/clients/`, or omit the section.
3. **No "dominate online", "skyrocket", "boost", "crush it"** or any SaaS-hype verb.
   Voice is defined in `01-brand-system.md` and is *quiet*.
4. **No stacked scarcity** ("3 spots left" + "limited" + "reply in 24h" + "handful
   per quarter"). One quiet availability line, maximum.
5. **No emoji in UI** (no 🚀🔥✦ etc.). No rocket icons.
6. **No huge empty dead-vertical-space** between sections. Whitespace is intentional
   and rhythmic, not "content failed to load." Follow the spacing scale exactly.
7. **No glassmorphism / frosted cards as the primary visual device.** Used sparingly
   or not at all.
8. **No `₹` pricing or India-first commerce signals** in user-facing copy. Audience
   is UAE. Currency, where shown, is **AED** (or USD). Studio location (Bengaluru)
   is stated honestly in About/footer as part of the bridge story, not hidden.
9. **No corner brackets, no decorative flourishes, no gradient-text headlines.**
10. **No more than one accent colour doing work in a viewport.**

## Tech stack (use exactly this unless told otherwise)

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** with tokens wired into `tailwind.config.ts` from `01-brand-system.md`
- **Framer Motion** for motion (subtle only — see `04-component-rules.md`)
- Fonts via **next/font** (self-hosted, defined in `01-brand-system.md`)
- No UI kit / no component library. Build components from scratch per `03-sections.md`.
- Static export friendly; no backend required for v1. Contact form posts to a single
  configurable endpoint (env var `NEXT_PUBLIC_FORM_ENDPOINT`), with a no-JS fallback
  `mailto:` link.

## Accessibility & quality floor (must pass before "done")

- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95 (mobile).
- All text contrast ≥ WCAG AA against its background.
- Every interactive element keyboard-reachable with a visible focus ring.
- `prefers-reduced-motion`: all entrance/scroll animation disabled, content shown.
- Real, descriptive `alt` on every image. No layout-shift (set width/height).
- Mobile-first. Test at 390px, 768px, 1280px, 1440px. The current site's biggest
  visible failure was desktop dead-space and unknown mobile — mobile must be flawless.

## Definition of done

- All sections in `03-sections.md` built, in order, matching specs.
- Zero fabricated content; every `[CLIENT-TODO]` rendered as a clean empty state.
- Passes the quality floor above.
- Reads as a jewellery/interiors *editorial* studio, not a generic dark agency.
- A senior designer reviewing it would not immediately say "AI template."

## Working method (so you don't drift)

- Build **one section at a time**, in the order given in `05-build-plan.md`.
- After each section, stop and self-check against its spec + the "do not" list.
- Do not improvise new sections, copy, or features. If something is ambiguous,
  choose the more *restrained* option — under-design beats over-design here.
- Commit after each section with a clear message.
