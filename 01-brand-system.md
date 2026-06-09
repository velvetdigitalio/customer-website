# 01 — Brand System (Design Tokens)

> These tokens are **locked**. Do not introduce colours, fonts, sizes, or radii
> outside this file. Wire them into `tailwind.config.ts` and use Tailwind classes
> or CSS variables everywhere. No inline hex, no magic numbers.

## Design direction in one line

Editorial luxury studio — warm, paper-like, typographic, photography-led. Think
a printed brand monograph for a jewellery house, translated to web. Calm, certain,
expensive through restraint. NOT dark-tech-agency.

We move OFF the old aubergine/black + gold. New base is a **warm light "paper"**
palette with a deep warm near-black for contrast sections, ink text, and a single
restrained metallic accent used sparingly. This reads jewellery/interiors, not SaaS.

## Colour tokens

Light is the default surface (editorial paper). Dark is used for *intentional*
contrast moments (hero, one or two feature bands), not as the global theme.

```
/* Surfaces */
--paper:        #F4EFE6;  /* primary background, warm ivory paper */
--paper-2:      #ECE4D6;  /* alt section background, slightly deeper */
--ink:          #1C1814;  /* near-black warm, primary text on paper */
--ink-2:        #4A433A;  /* secondary text / captions on paper */
--hairline:     #D8CFBE;  /* 1px rules, borders, dividers */

/* Dark contrast surfaces (used sparingly) */
--umber:        #211B14;  /* deep warm near-black bg for contrast bands */
--umber-2:      #2C251C;  /* card/raised surface on umber */
--cream:        #F2E9D2;  /* text on umber */
--cream-2:      #B8AE97;  /* secondary text on umber */

/* Accent — ONE metallic, used sparingly (rules, small marks, hover) */
--gold:         #B08D4F;  /* muted antique brass, NOT bright gold */
--gold-soft:    #C9AE7A;  /* hover / lighter state */

/* States */
--focus-ring:   #B08D4F;
```

Rules:
- Default page = `--paper` bg, `--ink` text.
- `--gold` is for hairline accents, small index numbers, link underlines on hover,
  and at most one short italic accent word per major heading. Never for big fills,
  never as gradient text, never more than one gold element drawing the eye per view.
- Dark `--umber` bands: max 2–3 across the whole page, each earning its contrast.

## Typography

Two families only.

- **Display / headings:** a refined serif. Use **"Fraunces"** (variable, via next/font)
  — high contrast, editorial, has a true italic. Optical size: large headings use the
  display optical setting; smaller uses softer.
  - Fallback stack: `Fraunces, "Times New Roman", Georgia, serif`
- **Body / UI / labels:** a clean neutral sans. Use **"Inter"** (variable, via next/font).
  - Fallback stack: `Inter, system-ui, -apple-system, sans-serif`

> Note: the old site used a generic grotesque + gold-italic gimmick. We keep the
> single-italic-accent device BUT in the serif (Fraunces italic) and in `--ink` or
> `--gold` only, used once per heading max. It must feel editorial, not like a tic.

### Type scale (clamp-based, fluid)

```
--step--1:  clamp(0.83rem, 0.80rem + 0.15vw, 0.92rem);  /* small caps labels */
--step-0:   clamp(1.00rem, 0.96rem + 0.20vw, 1.13rem);  /* body */
--step-1:   clamp(1.25rem, 1.15rem + 0.50vw, 1.55rem);  /* lead / large body */
--step-2:   clamp(1.60rem, 1.40rem + 1.00vw, 2.20rem);  /* H3 */
--step-3:   clamp(2.10rem, 1.70rem + 2.00vw, 3.30rem);  /* H2 */
--step-4:   clamp(2.80rem, 2.00rem + 4.00vw, 5.20rem);  /* H1 / hero */
--step-5:   clamp(3.50rem, 2.30rem + 6.00vw, 7.00rem);  /* oversized editorial */
```

Type rules:
- Headings: Fraunces, weight 400–500 (NOT heavy/800). Luxury serif is light, not bold.
- Letter-spacing: display headings slightly negative (`-0.01em` to `-0.02em`).
- Small caps labels (section eyebrows): Inter, `--step--1`, `letter-spacing: 0.18em`,
  `text-transform: uppercase`, colour `--ink-2` or `--gold`.
- Body line-height 1.6; headings line-height 1.05–1.15.
- Line length for body copy: max `68ch`.

## Spacing scale (kills the dead-space problem)

Use an 8px base. Section vertical rhythm is **defined and consistent** — this is
the fix for the old site's "content didn't load" gaps.

```
--space-2xs: 4px;
--space-xs:  8px;
--space-sm:  16px;
--space-md:  24px;
--space-lg:  40px;
--space-xl:  64px;
--space-2xl: 96px;
--space-3xl: 128px;
```

Section padding rules:
- Vertical section padding: `--space-2xl` (96px) mobile-ish, `--space-3xl` (128px)
  desktop. NEVER exceed 160px between sections. NEVER leave a near-empty viewport.
- Content max-width: `1200px` centered, with `--space-lg` gutters (min 24px mobile).
- A "wide editorial" container option at `1320px` for full-bleed imagery rows.

## Radii, borders, shadows

```
--radius-sm: 4px;
--radius-md: 8px;     /* default for cards/images */
--radius-lg: 14px;    /* large media */
--hairline-w: 1px;
```
- Borders: 1px `--hairline` on paper; 1px rgba(cream, 0.12) on umber.
- **Shadows: almost none.** Editorial = flat. Allow at most a very soft, low shadow
  on raised media: `0 8px 30px rgba(28,24,20,0.08)`. No glow, no neon, no glass blur
  as a primary device.

## Motion tokens

```
--ease-out:   cubic-bezier(0.22, 1, 0.36, 1);
--dur-fast:   200ms;
--dur-base:   420ms;
--dur-slow:   700ms;
```
- Entrance: fade + 12px rise, `--dur-base`, `--ease-out`, stagger 60–80ms.
- Hover: 200ms. Image hover = subtle scale 1.02 + slight desaturate→saturate.
- NO counter count-ups. NO parallax-heavy hero. NO auto-playing carousels that move
  on their own. Respect `prefers-reduced-motion` (disable all of the above).

## Logo

- Wordmark "VELVET" + "DIGITAL" lockup. Use the brand mark from
  `/assets/brand/velvet-mark.svg` (human provides). On paper, mark in `--ink`;
  on umber, in `--cream`. Do not recreate or guess the mark — if missing, render
  the wordmark in Fraunces and flag `[CLIENT-TODO: supply SVG mark]`.

## Voice (verbal identity — applies to ALL copy you render)

Persona: senior creative director of a boutique editorial branding studio
(Pentagram / Mast register). Calm, certain, never loud.

- Words it likes: *quietly, simply, considered, perhaps, weight, restraint, desire.*
- Words it bans: *dominate, skyrocket, boost, crush, unleash, game-changing, 10x,*
  any hype verb, any urgency, any superlative about ourselves.
- No self-superlatives ("best", "leading", "world-class").
- No emoji. No exclamation marks.
- Short, certain sentences. Cut when in doubt.
- All site copy is provided in `02-content.md`. Do not rewrite it to be punchier.
