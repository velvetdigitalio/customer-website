# 03 — Sections (Layout Spec)

> Build sections in this order. Each spec is binding. Content comes from
> `02-content.md`; tokens from `01-brand-system.md`. Where a layout decision
> isn't specified, choose the more restrained option.

Global layout:
- Container: max 1200px, centered, 24px gutters (mobile) → 40px (desktop).
- Wide-media container option: 1320px for full-bleed image rows.
- Section vertical padding: 96px mobile / 128px desktop. Never a near-empty viewport.
- Surface default: `--paper`. Dark `--umber` bands used only where noted (max 3 total).

---

## 1. Header / Nav

- Sticky, transparent over hero, gains `--paper` bg + bottom hairline after 40px scroll.
- Left: wordmark. Center or right: 4 links (Work · Services · Studio · Journal).
- Far right: `Request an audit` button (text button with hairline border, NOT a
  glossy pill; on hover, gold underline or border).
- Mobile: wordmark + hamburger → full-screen `--paper` overlay menu, links in
  large Fraunces, generous spacing. Close affordance obvious.
- No mega-menu. No dropdowns.

## 2. Hero  (this is the make-or-break view)

Layout (desktop): editorial split or full-bleed image with text overlay.
- **Preferred:** full-bleed warm jewellery/interior photograph (`--umber` tint
  overlay for text legibility), headline bottom-left, large Fraunces.
- **Alt (no photo yet):** `--umber` background, no image, headline centered or
  left, lots of negative space. **Do NOT** insert a phone/analytics-dashboard
  mockup. That fake-product cluster was the old site's biggest AI-tell.
- Headline "Luxury grows quietly." — "quietly" in Fraunces italic, `--gold` or
  `--cream`. One accent word only.
- Subhead one line beneath. Two CTAs: primary (solid `--ink`/`--cream` button) +
  secondary (text + underline-on-hover).
- The quiet "considered studio" line below CTAs, small, `--cream-2`/`--ink-2`.
- Entrance: headline words fade+rise, staggered 70ms. Disabled under reduced-motion.
- Mobile: image top (16:10) or umber field, text below, full-width stacked CTAs.

Reference feel: VMGROUPE / luxury editorial hero — image and one confident line,
not a feature-stuffed SaaS hero.

## 3. Positioning / Intro band

- Surface: `--paper`.
- Large Fraunces statement (`--step-3`/`--step-4`), max ~20 words per line, ink.
- One accent: a single short hairline rule in `--gold` above the eyebrow.
- Supporting paragraph below, `68ch` max, `--ink-2`.
- Generous space, but NOT empty — follow the 128px section padding, no more.

> SECTION ORDER NOTE (see `07-psychology.md`, P1 "salesperson order"): the home
> page answers the buyer's questions in the order they arise. Capability proof
> (Selected Work) is moved UP, before Services, because "can they actually do it?"
> precedes "what exactly do they do?". Build the home sections in THIS order:
> Header → Hero → Positioning → **Selected Work (§6)** → **Services (§4)** →
> **Approach (§5)** → Testimonials (§8) → Capabilities strip (§7) → Studio (§9)
> → Final CTA (§10) → Footer. (Section numbers below are stable IDs, not build
> order — follow the order in this note.)

## 4. Services

- Surface: `--paper-2` (subtle shift from intro).
- Eyebrow + heading top-left.
- Four **rows** (not cards): each row = grid `[number] [title + line] [paragraph]`.
  - Number: Fraunces or Inter, `--gold`, small (e.g. `--step-1`).
  - Title: Fraunces `--step-2`, ink.
  - Italic line beneath title (Fraunces italic, `--ink-2`).
  - Paragraph: body, right column on desktop / below on mobile.
  - 1px `--hairline` divider between rows.
- On row hover (desktop): title shifts to `--gold-soft`, divider thickens subtly.
  No card lift, no glass.
- Mobile: stack number→title→line→paragraph, hairline between.

## 5. Approach

- Surface: **`--umber`** (one of the max-3 dark bands). Cream text.
- Eyebrow + heading.
- Four steps as a horizontal row on desktop (4 columns), stacked on mobile.
- Each: large index `01`–`04` in `--gold`, bold title (Fraunces, cream), short para
  (`--cream-2`). Thin `--gold` rule under each index.
- No icons. No connecting animated lines. Calm.

## 6. Selected Work

- Surface: `--paper`.
- Eyebrow + heading.
- If `WORK_ITEMS` non-empty: editorial grid.
  - Desktop: 2-up asymmetric grid (alternating large/small) OR a clean 2-col grid.
    Each item = image (radius-md, soft shadow allowed), then below: client name
    (Fraunces), sector + disciplines (small caps, `--ink-2`), and the real `result`
    line if present. Whole item links to caseStudyUrl ONLY if real.
  - Image hover: subtle scale 1.02, 420ms.
- If `WORK_ITEMS` empty: render the empty-state copy from content, centered, with
  the audit CTA. Quiet, intentional, framed by hairlines — must look deliberate,
  not broken.

## 7. Capabilities strip

- Surface: `--paper`.
- A single centered row of capability words, hairline-separated (`·`), small caps
  or body, `--ink-2`. Wraps gracefully on mobile.
- NO animated numbers. This replaces the old fake stat counters.

## 8. Testimonials

- Render ONLY if `TESTIMONIALS` non-empty. Otherwise omit the section (no gap left).
- If present: one quote at a time, large Fraunces, `--paper` or `--umber` band.
  Quote, then `— Name, Role, Company`. If multiple, a quiet manual slider (dots
  or prev/next), NOT auto-advancing.

## 9. Studio teaser

- Surface: `--paper-2` or split with an interior/studio image if provided.
- Heading "Built in Bengaluru. Made for the Gulf." + paragraph + `About the studio` link.
- If a studio/team/interior image exists in `/assets/studio/`, use editorial split.
  Else text-only, well-spaced.

## 10. Final CTA

- Surface: **`--umber`** (last dark band) for a closing contrast moment.
- Eyebrow + heading ("Start with an audit." — "audit" italic).
- Paragraph, one availability line (single — no stacking), primary CTA button.
- Centered, generous but bounded spacing.
- **Proof proximity (see `07-psychology.md`, P4):** place a real trust element
  directly above or beside the CTA so reassurance peaks at the decision moment.
  Priority: (a) one real attributed testimonial if `TESTIMONIALS` has entries,
  else (b) the plain risk-reducer line from content ("No pitch deck. We'll tell
  you plainly whether we're the right studio for you."). NEVER fabricate a quote
  to fill this slot — the honest risk-reducer is the fallback.
- **One primary action only (P2):** the audit button is the sole solid button here.
  "See recent work" may appear ONLY as a subordinate text link, never a second
  solid button.

## 11. Footer

- Surface: `--umber` (continuous with final CTA, or `--ink`).
- Wordmark + tagline line, 3 columns (Studio / Contact / Social), bottom bar with
  © + real Privacy/Terms links.
- Social icons ONLY if real URLs exist. No `#` dead links — ever.

---

## Pages beyond home (build after home is approved)

- `/work` — full work index (same proof gate; empty state if no items).
- `/services` — expanded version of the four disciplines, with anchor ids
  `#brand #content #performance #systems`.
- `/studio` — full About: the bridge story, how the studio works, who it's for.
- `/journal` — index of posts (empty state allowed: "Notes, soon.").
- `/contact` — the audit request form (spec in 02-content.md).
- Legal: `/privacy`, `/terms` — minimal real pages.

Each page reuses the same header/footer and tokens. No new visual language.
