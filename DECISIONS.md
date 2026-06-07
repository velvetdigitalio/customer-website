# Velvet Digital — Decisions Log

> **Audience:** the developer (human + AI assistant) inheriting this project.
> **Purpose:** every meaningful decision made during the initial build, with the *why* behind it — so you can extend the site without accidentally undoing intent.
>
> Read this top-to-bottom once before touching code. Then keep it as a reference.

---

## 0. How to read this file

- Each section is a decision area.
- Where useful, decisions are framed as **Decision → Why → Don't accidentally do this**.
- File paths are clickable in most IDEs (e.g. [`app/page.tsx`](app/page.tsx)).
- Anything marked **[NON-NEGOTIABLE]** is part of the brand or product identity — please discuss with the owner before changing.
- Anything marked **[OPEN]** is a deliberate gap waiting for a real decision later.

---

## 1. Product identity

**[NON-NEGOTIABLE]** This is a **"luxury AI growth company"**, not "another digital marketing agency website."

Mental model for every design call:
- Apple / Tesla / luxury tech startup.
- **Not** Instagram-marketing-agency, **not** Wix-template, **not** Awwwards-noisy.
- "Premium founder hiring a senior studio" — not "small business looking for a freelancer."

Vibe keywords: elegant, cinematic, smooth, premium, dark luxury, modern, high-end startup.

**Don't accidentally do this:**
- Add colorful gradients beyond velvet purple + gold.
- Add bouncy, springy, or rotating animations.
- Add stock photography of smiling people.
- Add multiple competing CTAs on a single screen.
- Reduce whitespace to "fit more in."

---

## 2. Brand system

### 2.1 Colors — locked

Defined in [`app/globals.css`](app/globals.css) under `:root` and exposed as Tailwind utilities via the `@theme inline` block.

| Token | Hex | Use |
|---|---|---|
| `--vd-black` | `#0a0a0b` | Page background |
| `--vd-charcoal` | `#141318` | Card surfaces |
| `--vd-velvet` | `#1a0e2e` | Brand purple |
| `--vd-velvet-deep` | `#0e0518` | Deep gradient base, AI section bg |
| `--vd-gold` | `#d4af37` | Accent, CTAs, borders |
| `--vd-gold-bright` | `#f5d77a` | Highlight, hover, gradient top stop |
| `--vd-bone` | `#ede7dc` | Body text |
| `--vd-mute` | `#8a8594` | Subtext, captions, eyebrows |

**Decision:** No more than these eight colors anywhere on the site.
**Why:** Luxury sites earn their feel through restraint. Every additional color halves the premium perception.

The "metallic gold" feel comes from a **multi-stop gradient**, not the flat gold value. Use `.text-gold-gradient` and `.shimmer-gold` helpers in `globals.css` — they're tuned and tested.

### 2.2 Fonts — locked

- **Display** — **Clash Display** (Fontshare, weights 400/500/600/700). Used for H1, H2, large numerics, hero stats. `.font-display` class or Tailwind `font-display`.
- **Body** — **Satoshi** (Fontshare, weights 400/500/700/900). Default body. `.font-sans` or no class needed.
- Loaded via `@import url("https://api.fontshare.com/v2/css?...")` at the top of [`app/globals.css`](app/globals.css).

**Decision:** Display headings use `letter-spacing: -0.02em` (tight). Body uses default.
**Why:** Tight tracking on display = high-end editorial feel. Loose tracking = corporate brochure.

**Don't:** Swap to Google Fonts. Clash Display + Satoshi together are intentional — they're from the same foundry (Indian Type Foundry / Fontshare) and pair specifically well at scale.

### 2.3 Spacing & rhythm

| Element | Value | Why |
|---|---|---|
| Section vertical padding | `py-32 lg:py-44` | Premium sites breathe |
| Container max width | `max-w-[1320px]` | Wider than typical 1280 — needed for the bento + portfolio scroll |
| Default body size | `text-[17px] leading-[1.7]` | Generous, readable, expensive |
| Eyebrow chips | `tracking-[0.25em] uppercase text-[11px] text-vd-gold` | Always small, always wide-tracked, always gold |

**Don't:** Compress `py-32 lg:py-44` to save scroll length. The breathing room is the brand.

---

## 3. Tech stack

| Choice | Why |
|---|---|
| **Next.js 16 (App Router) + React 19 + TypeScript** | Best SSR/SEO for a marketing site, file-based routing, route handlers, server components by default. Pinned to Node 20.9+ via Volta. |
| **Tailwind CSS v4** (`@theme inline` blocks) | Tokens in CSS, not in a JS config — easier for brand-color edits, faster build via the new `@tailwindcss/postcss` engine. |
| **Framer Motion** | Component-level entrances, hover, scroll-linked transforms. Used for ~90% of animation. |
| **GSAP + ScrollTrigger** | Specifically for the **pinned horizontal portfolio scroll** in [`components/home/Portfolio.tsx`](components/home/Portfolio.tsx) — Framer Motion can't do `pin + scrub` cleanly. |
| **Lenis** | Site-wide smooth scrolling. Mounted once in [`components/layout/SmoothScroll.tsx`](components/layout/SmoothScroll.tsx) with `lerp: 0.08`. RAF tied to GSAP ticker so both libraries stay in sync. |
| **lucide-react** | Monoline icons. Brand-style (1.5px stroke). Two custom inline SVGs in `Footer.tsx` for Instagram/LinkedIn/Twitter because those don't ship with lucide. |
| **clsx + tailwind-merge** | `cn()` helper at [`lib/cn.ts`](lib/cn.ts). Use it everywhere conditional classes appear. |
| **Resend** | Transactional email for contact form. Free tier covers expected volume. |
| **react-calendly** | Calendly popup + inline embed. Brand-colored via `pageSettings`. |

### Why **not** these things

- **shadcn/ui** — too generic, would dilute the bespoke feel. We built our own primitives in [`components/ui/`](components/ui/).
- **A CMS (Sanity, Contentful)** — premature; blog is structural-only for now.
- **HubSpot / Pipedrive** — too heavy for current lead volume; revisit at 10+ leads/week.
- **Supabase / Postgres for leads** — Google Sheet + Resend is sufficient and the owner can browse leads without DB access.
- **Cal.com (self-hosted)** — Calendly was decided externally and the owner already has a Pro account.

---

## 4. Site architecture

### 4.1 Routes

| Path | File | Purpose |
|---|---|---|
| `/` | [`app/page.tsx`](app/page.tsx) | Home — composes the 9 home sections in fixed order |
| `/services` | [`app/services/page.tsx`](app/services/page.tsx) | Detailed service breakdown |
| `/work` | [`app/work/page.tsx`](app/work/page.tsx) | Filterable project grid |
| `/case-studies` | [`app/case-studies/page.tsx`](app/case-studies/page.tsx) | Featured + other case studies |
| `/about` | [`app/about/page.tsx`](app/about/page.tsx) | Studio story + values |
| `/insights` | [`app/insights/page.tsx`](app/insights/page.tsx) | Blog grid (placeholder content, no CMS yet) |
| `/contact` | [`app/contact/page.tsx`](app/contact/page.tsx) | **Calendly + form, distraction-free** |
| `/api/contact` | [`app/api/contact/route.ts`](app/api/contact/route.ts) | Server: Resend email + Google Sheet log |

### 4.2 Home page section order

**[NON-NEGOTIABLE]** This sequence is intentional — it's a conversion narrative.

1. **Hero** ([`components/home/Hero.tsx`](components/home/Hero.tsx)) — hook
2. **Trust Strip** ([`components/home/TrustStrip.tsx`](components/home/TrustStrip.tsx)) — credibility
3. **Services Bento** ([`components/home/Services.tsx`](components/home/Services.tsx)) — what we do
4. **Process** ([`components/home/Process.tsx`](components/home/Process.tsx)) — how we do it
5. **Portfolio** ([`components/home/Portfolio.tsx`](components/home/Portfolio.tsx)) — proof of taste
6. **Results** ([`components/home/Results.tsx`](components/home/Results.tsx)) — proof of outcomes
7. **AI Section** ([`components/home/AISection.tsx`](components/home/AISection.tsx)) — differentiator
8. **Testimonials** ([`components/home/Testimonials.tsx`](components/home/Testimonials.tsx)) — social proof
9. **Final CTA** ([`components/home/FinalCTA.tsx`](components/home/FinalCTA.tsx)) — close

**Don't** reorder these. Trust before Services, Process before Portfolio, Results after Portfolio is deliberate.

### 4.3 Component layering

```
app/layout.tsx
└── <SmoothScroll>           ← Lenis provider, mounts once
    ├── <Nav>                 ← fixed, frosts on scroll
    ├── <main>{children}</main>
    └── <Footer>
```

Every page sits inside `<main>` which has `position: relative` — required because Framer Motion's `useScroll({ target })` needs a non-static positioned ancestor.

### 4.4 UI primitives (build on these, don't reinvent)

Located in [`components/ui/`](components/ui/):

- **`GoldButton`** — primary/ghost CTA. Has the gold sheen sweep animation.
- **`BookCallButton`** + **`BookCallLink`** — **always use these** for "Book a Call" CTAs. They route to `/contact?ref=<source>` so we keep one-screen-one-decision UX. *Do not* make new buttons that open Calendly popup directly.
- **`GlowCard`** — dark glass card with cursor-tracking radial glow on hover. Used for services, automations, testimonials, results.
- **`SectionHeading`** — eyebrow + h2 + description, with consistent entrance animation. Use this for any new section title.
- **`PageHero`** — top-of-page hero for non-home pages. Eyebrow + h1 + description + slot for CTAs.
- **`AnimatedCounter`** — IntersectionObserver-driven count-up.
- **`GradientOrb`** — blurred purple/gold ambient blob. Use for hero/CTA backgrounds.
- **`ParticleField`** — canvas-based gold particles. Respects `prefers-reduced-motion`.
- **`CalendlyInline`** — Calendly embed wrapper, branded.

### 4.5 Visual mockups

Located in [`components/visuals/`](components/visuals/). All are **pure CSS + SVG** — no real client media. Built so the dev can swap them later without restructuring.

- `PhoneMockup`, `DashboardMockup`, `ReelMockup`, `NeuralNet`, `GoldGraph`

See [`README.md`](README.md) "Replacing Placeholders With Real Media" for the swap-in pattern (just drop a `<video>` or `<Image>` where the visual component sits).

---

## 5. Motion philosophy

**[NON-NEGOTIABLE]** Motion is the difference between "looks premium" and "is premium."

### 5.1 Allowed motions

- Fade in + slight Y translate (24px) on enter — `ease: [0.22, 1, 0.36, 1]`, `duration: 0.8s`
- Floating loops on hero cards — `y: [0, -10, 0]` over 6–9s, `easeInOut`
- Cursor-tracking glow on cards
- SVG path-draw (`pathLength: 0 → 1`) on charts
- Scroll-linked: parallax `y` translation, opacity fade, scale tween
- Color/border transitions on hover (300–700ms duration)
- Animated counter count-up

### 5.2 Forbidden motions

- ❌ Bounce, spring overshoot, rotate, scale-pop
- ❌ Flashing, blinking (except status dots and subtle pulses)
- ❌ Slide-in from the side at high speed
- ❌ Anything that draws attention to itself

If you can describe the animation with "boing," "pop," or "snap," it doesn't belong here.

### 5.3 Performance & accessibility

- `prefers-reduced-motion` is **fully respected**:
  - Lenis doesn't initialize ([`components/layout/SmoothScroll.tsx`](components/layout/SmoothScroll.tsx))
  - `globals.css` has a `@media (prefers-reduced-motion: reduce)` block that kills all CSS animations
  - `ParticleField` stops the RAF loop
- GSAP ScrollTrigger uses `gsap.matchMedia` so horizontal scroll only activates at `min-width: 1024px`. Mobile gets a native horizontal scroll fallback.

---

## 6. Lead capture architecture

### 6.1 What the contact form does

- `POST /api/contact` triggers **two channels in parallel** via `Promise.allSettled`:
  1. **Resend email** — branded HTML email to `CONTACT_TO_EMAIL`, with `Reply-To` = lead's email.
  2. **Google Sheet** — Apps Script webhook appends a row.
- Either channel can fail without blocking the other.
- Response truthfully reports `delivered: { email, sheet }`.
- In `NODE_ENV=production`, if **both** channels are unconfigured (`RESEND_API_KEY` and `GOOGLE_SHEET_WEBHOOK_URL` empty), the API hard-fails with **502** so leads can never be silently dropped on a live site.

**Why two channels?** Email = immediate notification (reply fast). Sheet = durable record (nothing lost even if email bounces, exportable for analysis).

### 6.2 Configuration is environment-driven

All wiring lives in `.env.local` (gitignored). See [`.env.example`](.env.example) for the full list. Key choices:

- **No env vars committed in code** — all production values come from `.env.local` (dev) or the hosting platform (production).
- **Defaults baked into [`lib/calendly.ts`](lib/calendly.ts)** so the site builds and runs without any env file. Real values override at deploy time.
- **Honeypot field is named `website`** — bots fill any text input they see, and `website` is the most-commonly-targeted spam field. If you rename it, change both the form and the API route.

### 6.3 Spam protection — current state

- **Honeypot field** in [`app/contact/page.tsx`](app/contact/page.tsx) (off-screen at `-9999px`, `aria-hidden`).
- **In-memory per-IP rate limit** in [`lib/rate-limit.ts`](lib/rate-limit.ts) — 5/min/IP.
- **No Captcha / Turnstile** yet — owner chose to wait until spam becomes an actual problem.

**[OPEN]** If we hit multi-region Vercel deployments, swap the rate limiter to Upstash Redis (`@upstash/ratelimit`). The in-memory `Map` doesn't survive across edge functions.

### 6.4 UTM tracking

Every "Book a Call" CTA passes a distinct `utmSource` string when it routes the user to `/contact?ref=<source>`. The contact page then propagates that into:
- Calendly's UTM (visible in Calendly's analytics)
- The Google Sheet's `source` column

**Sources currently used:** `nav`, `mobile_nav`, `hero`, `final_cta`, `footer`, `portfolio_endcard`, `services_hero`, `case_study_hero`. Add more as new CTAs land.

---

## 7. /contact page — UX decisions

**[NON-NEGOTIABLE]** `/contact` is **distraction-free**:

- ✅ Tab switcher: **Book a call** (Calendly inline, default) / **Send a message** (form)
- ❌ No page hero / headline
- ❌ No "Four ways to reach us" sidebar
- ❌ No CTAs other than the two tabs

**Why:** The visitor arrives with one intent (talk to us). Every other element is friction. Lead-form pages convert 2–4× better when stripped to the single decision.

If a new requirement says "add a chat bubble to /contact" or "add a 'common questions' panel" — push back. This page stays minimal.

**Layout sizing decisions** (after iteration):
- Page container: `max-w-5xl` (Calendly needs the room).
- Calendly inline embed: `height={920}` (was 760 — felt cramped).
- Form: `max-w-3xl` centered inside the wider container (forms read better narrower than calendars).

---

## 8. Calendly integration

### 8.1 Current URL

[`https://calendly.com/yj291197/30min`](https://calendly.com/yj291197/30min) — defaulted in [`lib/calendly.ts`](lib/calendly.ts), overridable via `NEXT_PUBLIC_CALENDLY_URL`.

### 8.2 Routing decision

**[DECISION]** All "Book a Call" CTAs go to `/contact?ref=<source>`, **not** directly to a Calendly popup.

**Why:** Earlier iteration had CTAs opening a Calendly popup overlay everywhere. We removed this in favor of routing to `/contact`. The popup felt jarring on cinematic sections like Hero and FinalCTA, and it skipped the tab choice (some users want to type a message instead).

If a future change wants the popup back: use `react-calendly`'s `PopupModal` and import from `BookCallButton.tsx`'s history. The infrastructure is still there in [`components/ui/CalendlyInline.tsx`](components/ui/CalendlyInline.tsx).

### 8.3 Brand colors in Calendly

Configured in [`lib/calendly.ts`](lib/calendly.ts) via `pageSettings`. Note: **custom colors require Calendly Pro plan** — they're silently ignored on the free tier. If colors look wrong, check the plan first.

---

## 9. UI decisions made during iteration

These were owner-driven refinements after the initial build. Recorded so you don't accidentally undo them:

| Decision | What was changed | Why |
|---|---|---|
| Trim Content & Branding mockup | 6 reels → **4 reels**, 2 sm: 4 cols | Felt packed |
| Trim Performance Marketing chart | 8 bars → **5 bars**, capped width per bar | Felt packed |
| **Remove "Website Experiences" service** entirely | Removed from home bento, /services, footer, contact form chips | Studio doesn't offer this as a separate offering anymore |
| **Remove AI section headline** ("Beyond content. We build intelligent growth systems.") | Section now opens directly into the 2×2 automation cards | Owner felt headline was redundant given the visual |
| **Remove Results section headline** ("We sell outcomes, not creativity.") | Section now opens directly into the 2×2 metric cards | Same — visuals carry it |
| **Strip /contact down** | Removed PageHero + sidebar | Single-decision page converts better |
| **Calendly box wider/taller** | `max-w-3xl → max-w-5xl`, `height 760 → 920` | Originally cramped |

**Pattern:** the owner's instinct is consistently to **remove**, not add. When unsure between "add a feature" and "trim something," lean toward trim. The brand earns its premium feel through restraint.

---

## 10. Things we deliberately did **not** build

These were considered and explicitly deferred:

- **Booking widget on home page** — out of scope; `/contact` is the conversion path.
- **MDX / CMS for blog** — `/insights` is scaffold-only. Real implementation needs a content decision (Sanity vs. Contentlayer vs. Notion API vs. just MDX files).
- **Dynamic case-study routes (`/case-studies/[slug]`)** — currently one featured case study + three preview cards. Add when there are 3+ real case studies to publish.
- **`/privacy` and `/terms` pages** — placeholders in footer. Need legal review before launch (see [`PRODUCTION_CHECKLIST.md`](PRODUCTION_CHECKLIST.md) §6).
- **Cookie consent banner** — only needed if analytics with tracking cookies are added. Default analytics choice (Vercel/Plausible) doesn't need it.
- **Light mode** — site is dark-only. The brand is dark-luxury; light mode would dilute it. If ever needed, brand tokens are in CSS variables so a `[data-theme="light"]` swap is feasible.
- **i18n** — English-only. Hindi was discussed but deferred.
- **`/thank-you` page** — needed for post-Calendly + post-form redirect. Currently inline success states only. (Tracked in `PRODUCTION_CHECKLIST.md` §10.)
- **Real OG images** — currently using `/logo.png` (square). Need 1200×630 per-page OG cards before launch.

---

## 11. Hosting & deployment plan

**[DECISION]** Host on **Vercel**.

**Why:** First-class Next.js 16 support (made by the same team), free SSL, edge CDN, easy preview deployments per PR, generous free tier for marketing-site traffic.

**[OPEN]** Domain DNS — `velvetdigital.io` needs to be pointed at Vercel. Owner hasn't done this yet.

**Don't:** Deploy to a static host (Netlify static, S3) — the contact API route requires a server runtime. If we ever need to (legal reasons, cost), we'd have to move lead capture to a separate function on a different provider.

---

## 12. Files the developer should know

### 12.1 Single source of truth

| File | What's in it |
|---|---|
| [`DECISIONS.md`](DECISIONS.md) | **This file.** Read first. |
| [`README.md`](README.md) | How to run, brand system, placeholder swap guide, lead-capture setup (Resend + Sheet + Calendly), Apps Script source code |
| [`PRODUCTION_CHECKLIST.md`](PRODUCTION_CHECKLIST.md) | Living launch checklist — domain, DNS, email verification, real content, SEO, a11y, perf, dress rehearsal |
| [`.env.example`](.env.example) | Every env var the site reads, with comments |
| [`AGENTS.md`](AGENTS.md) | Warning for AI agents that this Next.js version has breaking changes |

### 12.2 Files where small edits land

- **Color tokens** → [`app/globals.css`](app/globals.css) (`:root` block)
- **Fonts** → [`app/globals.css`](app/globals.css) (the `@import` line at top)
- **Site metadata, title, OG** → [`app/layout.tsx`](app/layout.tsx) `metadata` export
- **Nav links** → [`components/layout/Nav.tsx`](components/layout/Nav.tsx) `links` const
- **Footer columns** → [`components/layout/Footer.tsx`](components/layout/Footer.tsx) `navGroups` const
- **Calendly URL** → either `NEXT_PUBLIC_CALENDLY_URL` env var, or fallback in [`lib/calendly.ts`](lib/calendly.ts)
- **Calendly embed colors** → [`lib/calendly.ts`](lib/calendly.ts) `CALENDLY_PAGE_SETTINGS`
- **Rate limit thresholds** → [`app/api/contact/route.ts`](app/api/contact/route.ts) `RATE_WINDOW_MS`, `RATE_MAX`
- **Honeypot field name** → mirrored in [`app/api/contact/route.ts`](app/api/contact/route.ts) (`body.website`) and [`app/contact/page.tsx`](app/contact/page.tsx) (`name="website"`)

---

## 13. For the AI assistant inheriting this project

If you (the AI) are reading this for the first time:

1. **Read [`AGENTS.md`](AGENTS.md) first.** Next.js 16 has breaking changes from your training data. When in doubt, check `node_modules/next/dist/docs/`.
2. **Honor the dark + velvet + gold palette.** Don't introduce new colors "for variety."
3. **Use existing primitives** (`GlowCard`, `GoldButton`, `BookCallButton`, `SectionHeading`, `PageHero`). Don't build parallel ones unless the requirement genuinely doesn't fit.
4. **Use `cn()` for class composition** (`lib/cn.ts`). Don't use raw template literals for className.
5. **Run `npm run lint && npm run build`** after substantive edits. Build catches Next.js-specific issues that lint misses.
6. **Animations follow §5 of this doc.** If a request says "make this pop" or "make it bouncy" — clarify with the user; the brand explicitly disallows these.
7. **`/contact` stays minimal** (§7). Don't add UI to it without explicit owner approval.
8. **Lead-capture is two channels in parallel** (§6). Don't silently disable Sheet or Email — if a channel can't be configured, surface it in the response.
9. **Every "Book a Call" CTA routes to `/contact?ref=<source>`** — never directly to Calendly. Add a new `utmSource` to track new CTA placements.
10. **When asked to add a section to the home page**, ask first: "*Where* in the sequence?" The 9-section order in §4.2 is intentional.

---

## 14. Glossary

- **Velvet** — the brand's deep purple (`--vd-velvet-deep` / `--vd-velvet`). Used in the logo, the AI section background, gradient blobs.
- **Bone** — off-white text color (`--vd-bone`). Not pure white — pure white feels cheap against velvet/black.
- **Mute** — body subtext, captions, eyebrows (`--vd-mute`). Always for "secondary" text.
- **Eyebrow** — the small uppercase wide-tracked gold label above section headings. Pattern: `tracking-[0.25em] uppercase text-[11px] text-vd-gold`.
- **Bento** — the asymmetric card grid in the Services section.
- **Glow card** — any card using the [`GlowCard`](components/ui/GlowCard.tsx) primitive (cursor-tracking radial glow).
- **GEO** — Generative Engine Optimization — ranking inside ChatGPT, Perplexity, Gemini. Complement to traditional SEO.
- **Source / utm_source / ref** — the CTA placement attribution string we propagate everywhere for analytics.

---

## 15. Change log

When you make a decision that future-you should remember, append it here. Brief is fine.

| Date | Decision | By |
|---|---|---|
| 2026-05-17 | Initial build: dark velvet + gold, Next.js 16, 9-section home, 7 supporting pages, CSS-only mockups | Initial dev (Claude) |
| 2026-05-18 | Lead capture chose: Resend email + Google Sheet (Option B from spec). Honeypot + per-IP rate limit, no Captcha yet. | Owner |
| 2026-05-18 | Calendly URL set to `calendly.com/yj291197/30min`. Tabbed `/contact` (Calendly inline default + form tab). | Owner |
| 2026-05-18 | All "Book a Call" CTAs route to `/contact?ref=<source>`, not direct Calendly popup. | Owner |
| 2026-05-18 | `/contact` stripped: removed PageHero ("Let's build something memorable.") and "Four ways to reach us" sidebar. | Owner |
| 2026-05-18 | Calendly box: `max-w-5xl` container, embed `height: 920`. | Owner |
| 2026-05-18 | Removed "Website Experiences" service from every surface. | Owner |
| 2026-05-21 | Removed AI section title ("Beyond content...") and Results section title ("We sell outcomes..."). Sections now open straight into visuals. | Owner |
| YYYY-MM-DD | _your next decision here_ | _you_ |
