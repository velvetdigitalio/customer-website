# 04 — Component Rules

> Cross-cutting rules every component must obey. These exist to stop drift toward
> the generic-AI-agency look and to guarantee the quality floor.

## Buttons

- **Primary:** solid `--ink` bg / `--cream` text on paper; on umber, `--cream` bg /
  `--ink` text. Radius `--radius-sm`. NO gradient, NO glow, NO glossy pill.
  Hover: slight bg shift (to `--umber` / `--gold-soft`), 200ms. Visible focus ring.
- **Secondary / text:** label + animated underline (gold) that draws in on hover.
  Optional small arrow `→` (plain glyph, not an icon-as-decoration).
- One primary button per viewport, ideally. Never two solid primaries side by side.

## Links

- Body links: `--ink`, underline offset 3px, hairline underline → `--gold` on hover.
- No link should change layout on hover (no bold-swap reflow).

## Images / media

- Always set explicit width/height (or aspect-ratio) to prevent layout shift.
- Use `next/image`. Lazy-load below the fold. Provide real descriptive `alt`.
- Treatment: radius `--radius-md` (or full-bleed with none). At most the one soft
  shadow token. No borders-on-images unless 1px hairline for a framed editorial look.
- Hover (interactive media only): scale 1.02 + saturate, 420ms, `--ease-out`.
- **No stock-photo clichés** (handshake, generic skyline, AI-glow abstracts). If no
  real image exists, use a clean `--umber`/`--paper-2` field, not filler imagery.

## Motion (Framer Motion) — restraint is the brand

Allowed:
- Entrance: opacity 0→1 + y 12px→0, `--dur-base`, `--ease-out`, stagger ≤ 80ms,
  trigger once on scroll into view.
- Hover micro-interactions per above.
Banned:
- Counter / number count-ups (the old site's tell).
- Heavy parallax, pinned-scroll hijacking, horizontal scroll-jacking.
- Auto-playing carousels / marquees that move on their own.
- Anything that delays content paint or blocks reading.
Reduced motion:
- Wrap all motion in a `prefers-reduced-motion` check. When reduced, render final
  state immediately, no transform, no fade. This is a hard requirement.

## Section eyebrows

- Small caps, Inter, `--step--1`, `letter-spacing: 0.18em`, uppercase, `--ink-2`
  (or `--gold` on umber). Optional 24px `--gold` hairline rule before the text.

## The single-italic-accent device

- Exactly one word per major heading may be set in Fraunces italic for accent.
- Colour: `--gold` OR same as heading (`--ink`/`--cream`) — never a gradient.
- Use sparingly across the page; if every heading does it, it becomes a tic. Aim
  for it on hero + one or two key headings only.

## Empty states (critical — this is how we avoid fake content)

- Any data-driven section (Work, Testimonials, Journal) with no real entries renders
  a **deliberate** empty state: a short honest line + relevant CTA, framed by
  hairlines, properly spaced. It must read as an editorial choice, not a broken page.
- NEVER auto-fill with invented examples to "look complete."

## Forms

- Real, accessible: `<label>` for every field, associated `for/id`, error messages
  announced (`aria-live`), keyboard-navigable, visible focus.
- Posts to `process.env.NEXT_PUBLIC_FORM_ENDPOINT`. If unset, the submit button
  falls back to a `mailto:hello@velvetdigital.io` with prefilled subject/body.
- No dark patterns, no pre-checked marketing consent.

## Responsive

- Mobile-first. Verify at 390 / 768 / 1280 / 1440px.
- Tap targets ≥ 44px. No horizontal overflow at any width.
- Hero, Approach (4-col), Services rows, Work grid must each have an explicit
  mobile layout (stack) — do not rely on the desktop grid "just shrinking".
- Test the mobile nav overlay open/close + focus trap.

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section` (with `aria-labelledby`
  to its heading), `footer`.
- One `h1` per page (hero). Logical heading order, no skips.
- Contrast AA everywhere (the warm-paper palette is chosen to pass; verify).
- Focus-visible ring using `--focus-ring`, 2px, offset 2px.
- Images decorative-only → `alt=""`; meaningful → real description.

## Performance

- Self-host fonts via next/font; subset; `display: swap`.
- No unused JS libraries. Framer Motion only where motion is used.
- Compress/serve images in modern formats; size them; lazy-load below fold.
- Target Lighthouse mobile: Perf ≥ 90, A11y ≥ 95, Best-Practices ≥ 95, SEO ≥ 95.

## SEO / meta

- Per-page `<title>` + meta description in Velvet voice (no hype).
- Home title: `Velvet Digital — A brand & digital studio for fine jewellery & interiors`
- Open Graph + Twitter card with a real OG image (`/assets/brand/og.jpg`) — if
  absent, `[CLIENT-TODO: OG image]`, fall back to wordmark on `--umber`.
- `lang="en"`, sensible canonical, sitemap, robots.
- Honest structured data (Organization) — no fake aggregateRating/reviews.
