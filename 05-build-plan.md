# 05 — Build Plan (Ordered Steps)

> Execute in this exact order. Complete and self-check each step before the next.
> Commit after each step. Do not jump ahead, do not add unrequested features.

## Phase 0 — Scaffold
1. `npx create-next-app@latest` — App Router, TypeScript, Tailwind, ESLint, src dir.
2. Add Framer Motion.
3. Wire tokens from `01-brand-system.md` into:
   - `tailwind.config.ts` (colors, spacing scale, radii, fontFamily, fluid sizes
     via the clamp values as CSS vars).
   - `globals.css` (`:root` CSS variables for every token; base styles; the
     `prefers-reduced-motion` reset that disables transitions/animations).
4. Set up fonts via next/font: Fraunces (variable, italic) + Inter (variable).
5. Create `/assets` structure: `brand/ hero/ work/ studio/ clients/`. Add a
   `README` in each noting what real asset goes there + the `[CLIENT-TODO]` list.
6. **Checkpoint:** a blank page renders on `--paper` with correct fonts and a test
   of each token (a swatch page at `/_styleguide`, dev-only). Verify colours/type.

## Phase 1 — Primitives
7. Build shared primitives, each matching `04-component-rules.md`:
   - `Container`, `Section` (with eyebrow + heading slots, correct padding),
   - `Button` (primary / secondary variants), `TextLink`,
   - `Eyebrow`, `Heading` (with optional single-italic-accent prop),
   - `Reveal` (Framer Motion entrance wrapper that respects reduced-motion).
8. **Checkpoint:** render all primitives on `/_styleguide`. Confirm motion respects
   reduced-motion, focus rings visible, contrast AA.

## Phase 2 — Chrome
9. `Header` (sticky, transparent→paper on scroll, mobile overlay menu w/ focus trap).
10. `Footer` (real links only; social omitted if no real URLs; real Privacy/Terms).
11. **Checkpoint:** header/footer correct on 390/768/1280/1440, keyboard-navigable.

## Phase 3 — Home sections (build in the psychology-driven order below)
Each pulls copy from `02-content.md`, layout from `03-sections.md`, and follows the
principles in `07-psychology.md`. After each, self-check against the "do not" list in
`CLAUDE.md`. NOTE the order: Selected Work comes BEFORE Services (capability proof
answers "can they do it?" before "what do they do?" — see `07-psychology.md` P1).
12. Hero  (use umber-no-image fallback if no hero photo — NEVER a fake dashboard).
13. Positioning / Intro band.
14. Selected Work (proof gate — empty state if `WORK_ITEMS` empty). **Moved up.**
15. Services (four editorial rows, not cards).
16. Approach (umber band, 4 steps).
17. Testimonials (render only if real entries exist; else omit cleanly).
18. Capabilities strip (no fake numbers).
19. Studio teaser.
20. Final CTA (umber) — with proof-proximity element + risk-reducer (P3/P4),
    ONE primary button only (P2).
21. **Checkpoint:** full home reviewed against every "do not" AND the psychology
    principles. Specifically confirm: section order matches P1; exactly one primary
    CTA per viewport (P2); risk-reducers present and prominent at the ask (P3);
    a real trust element (or honest fallback) sits beside the final CTA (P4);
    no fabricated metric/brand/quote, no dead `#` links, no stacked scarcity (P8),
    no fake-dashboard mockup, no emoji, no oversized dead-space, one focal point
    per viewport (P6).

## Phase 4 — Remaining pages
22. `/contact` — audit form (accessible, real endpoint + mailto fallback).
23. `/services`, `/studio`, `/work`, `/journal` (empty states allowed).
24. `/privacy`, `/terms` (minimal real pages).

## Phase 5 — Quality gate (must pass to be "done")
25. Run Lighthouse mobile on home + contact. Hit the floor (Perf ≥90, A11y ≥95,
    BP ≥95, SEO ≥95). Fix until passing.
26. Manual a11y pass: keyboard-only walkthrough, focus order, screen-reader landmarks,
    contrast spot-checks.
27. Reduced-motion pass: enable OS reduce-motion, confirm zero animation + all content
    visible.
28. Responsive pass: 390/768/1280/1440 — no overflow, mobile layouts correct.
29. **Final content audit (most important):** grep the whole codebase for invented
    content. Confirm every client name, number, quote, and logo traces back to
    `02-content.md`. Any that doesn't → delete or convert to a styled empty state.
30. Remove `/_styleguide` from production build.

## Self-check questions before declaring done
- Does any number on the site lack a real source in `02-content.md`? → fix.
- Could a senior designer call this "another dark-gold AI agency template"? → fix.
- Does it read specifically as *jewellery / interiors*, not generic SaaS? → if not,
  the imagery/voice isn't doing its job.
- Are there any `href="#"`, emoji, hype verbs, stacked scarcity, or empty viewports?
  → remove.
- Does mobile look as considered as desktop? → it must.

## What to ask the human for (don't fabricate these)
Surface this checklist to the user; these are the only things blocking a fully
real launch:
- Hero + work + studio photography (jewellery macro / interiors).
- Real `WORK_ITEMS` (2–4 approved projects with true results).
- Real `TESTIMONIALS` (or confirm: ship without).
- Brand SVG mark + OG image.
- Real social URLs (or confirm: omit).
- Form endpoint (or confirm: mailto fallback for v1).
- Confirm currency = AED and the Bengaluru→Gulf bridge framing is accurate.
