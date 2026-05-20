# Velvet Digital — velvetdigital.io

A luxury growth studio website. Cinematic, dark-velvet, gold-accented. Built for premium brands.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **React 19**
- **Tailwind CSS v4** (brand tokens in `app/globals.css` via `@theme`)
- **Framer Motion** — entrance fades, floats, hover micro-interactions
- **GSAP + ScrollTrigger** — pinned horizontal portfolio scroll
- **Lenis** — site-wide smooth scrolling
- **Fontshare** — Clash Display + Satoshi
- **lucide-react** — monoline icons

## Run

```bash
nvm use 20   # or any Node >= 20.9
npm install
npm run dev  # http://localhost:3000
npm run build  # emits static GitHub Pages output to ./out
```

> The project is pinned to Node 20 via Volta (`package.json` engines field). Next.js 16 requires Node 20.9+.

## Brand System

All brand tokens live in `app/globals.css` under `@theme inline` and `:root`.

| Token | Hex | Usage |
| --- | --- | --- |
| `--vd-black` | `#0a0a0b` | Page background |
| `--vd-charcoal` | `#141318` | Cards / surfaces |
| `--vd-velvet` | `#1a0e2e` | Brand purple |
| `--vd-velvet-deep` | `#0e0518` | Deep gradient base |
| `--vd-gold` | `#d4af37` | Accent / CTA |
| `--vd-gold-bright` | `#f5d77a` | Gold highlight |
| `--vd-bone` | `#ede7dc` | Foreground / text |
| `--vd-mute` | `#8a8594` | Subtext |

Tailwind utilities like `text-vd-gold`, `bg-vd-velvet`, `border-vd-gold/30` are wired automatically from these tokens.

Fonts:

- `font-display` — Clash Display (h1, h2, large numerics)
- `font-sans` — Satoshi (body, default)

Helper classes in `globals.css`:

- `.text-gold-gradient` — animated gold sweep gradient text
- `.bg-velvet-radial` — full-page hero background
- `.bg-noise` — subtle film grain overlay
- `.border-gold-grad` — gold/purple gradient border
- `.animate-float`, `.animate-glow` — gentle floating loops

`prefers-reduced-motion` disables Lenis, particle animation and ambient float loops automatically (see the bottom of `globals.css` and `components/layout/SmoothScroll.tsx`).

## Project Structure

```
app/
  layout.tsx            Root layout — Nav, Footer, SmoothScroll
  page.tsx              Home (all 10 sections composed)
  services/             /services
  work/                 /work — filterable grid
  case-studies/         /case-studies — featured + others
  about/                /about — story, values, stats
  insights/             /insights — blog magazine grid
  contact/              /contact — Calendly + static-safe contact form

components/
  layout/   Nav, Footer, SmoothScroll
  home/     Hero, TrustStrip, Services, Process, Portfolio,
            Results, AISection, Testimonials, FinalCTA
  ui/       GoldButton, GlowCard, SectionHeading, AnimatedCounter,
            GradientOrb, ParticleField, PageHero
  visuals/  PhoneMockup, DashboardMockup, ReelMockup,
            NeuralNet, GoldGraph

lib/cn.ts                Tailwind class merger
public/logo.png          Brand mark (Velvet Digital "V")
```

## Replacing Placeholders With Real Media

Everything visual on the site is currently rendered with CSS / SVG mockups so you can drop in real content without restructuring.

| Where | Current placeholder | Swap with |
| --- | --- | --- |
| Hero floating cards | `<PhoneMockup>`, `<DashboardMockup>`, custom stat card in `components/home/Hero.tsx` | Real Instagram reel video / analytics screenshot. Replace the `PhoneMockup` JSX with `<video src="/media/reel-1.mp4" autoPlay muted loop playsInline poster="/media/reel-1-poster.jpg" />` |
| Trust strip client logos | `clientLogos` array of wordmarks in `components/home/TrustStrip.tsx` | Replace strings with `<Image>` tags pointing to `/public/clients/<brand>.svg` |
| Services bento visuals | Hand-built SVG mockups in `components/home/Services.tsx` (`ServiceVisual`) | Replace each `variant` branch with a `<video>` or `<Image>` of the real asset |
| Portfolio cards | Velvet gradient + `<Play>` icon in `components/home/Portfolio.tsx` | Add `<video poster=... src=... autoPlay muted loop playsInline className="absolute inset-0 object-cover" />` as the first child of each `<article>` |
| Work grid | Same as Portfolio — `app/work/page.tsx` | Same `<video>` pattern |
| Case study hero & gallery | `<DashboardMockup>` + `<ReelMockup>` in `app/case-studies/page.tsx` | Swap for actual screenshots / videos |
| Testimonials avatars | Circular HSL gradients in `components/home/Testimonials.tsx` | Replace with `<Image src="/people/<name>.jpg" .../>` |
| Insights post covers | HSL gradient blocks in `app/insights/page.tsx` | Replace with `<Image src="/insights/<slug>.jpg" .../>` |
| About hero image | `public/logo.png` in `app/about/page.tsx` | Replace with team / studio photo |

## GitHub Pages deployment

This repo is configured for GitHub Pages static hosting:

- `next.config.ts` uses `output: "export"` and writes the deployable site to `out/`.
- `.github/workflows/pages.yml` builds on every push to `main` and deploys `out/` with GitHub Pages Actions.
- The root `CNAME` is copied into the artifact, but the custom domain still needs to be set in GitHub Pages settings.
- The workflow writes `out/.nojekyll` so GitHub Pages serves `/_next/` assets correctly.

In GitHub, set **Settings -> Pages -> Build and deployment -> Source** to **GitHub Actions**. Then set **Custom domain** to `velvetdigital.io` and enable **Enforce HTTPS** after GitHub finishes provisioning the certificate.

DNS for the apex domain should point to GitHub Pages:

```text
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
AAAA  @    2606:50c0:8000::153
AAAA  @    2606:50c0:8001::153
AAAA  @    2606:50c0:8002::153
AAAA  @    2606:50c0:8003::153
CNAME www  <your-github-user-or-org>.github.io
```

## Lead capture (contact form + Calendly)

The `/contact` page has a tabbed layout: **Book a call** (Calendly inline embed, default) and **Send a message** (the form). GitHub Pages cannot run a Next.js API route, so the message form is static-safe:

- Set `NEXT_PUBLIC_CONTACT_ENDPOINT` to a public form/webhook endpoint if you want browser-side submissions.
- Set `NEXT_PUBLIC_CONTACT_ENDPOINT_MODE=no-cors` for Google Apps Script style endpoints that accept raw text posts.
- If no endpoint is configured, the form opens a pre-filled email to `hello@velvetdigital.io`.

### Calendly setup

1. Paste your Calendly event URL into `NEXT_PUBLIC_CALENDLY_URL`. Example used in code: `https://calendly.com/yj291197/30min`.
2. Optional — on Calendly Pro you can customise the colors used by the embed in `lib/calendly.ts` (`backgroundColor`, `textColor`, `primaryColor`). They're already set to match the brand.

### Spam protection

- Invisible **honeypot** field (`name="website"`) in the form. Bots fill it; we drop those submissions silently.
- For browser-side webhook submissions, use spam controls in the receiving service. GitHub Pages has no server runtime for IP-based rate limiting.

## Pages Map

| Page | Purpose |
| --- | --- |
| `/` | Premium home experience — 10 sections |
| `/services` | Full service detail |
| `/work` | Filterable project grid |
| `/case-studies` | Long-form premium case study |
| `/about` | Studio story + values |
| `/insights` | Editorial blog grid (scaffold — wire CMS later) |
| `/contact` | Form + booking + info |

## Design Principles

1. **Smooth scrolling everywhere** — Lenis is enabled site-wide.
2. **Minimal colors** — black, velvet purple, gold, bone. No more.
3. **Typography heavy** — Clash Display for size, Satoshi for body. Lots of whitespace.
4. **Realistic mockups** — never stock photos. Dashboards, phones, reels.
5. **Cinematic motion** — fade, float, glide. Never bounce/spin/flash.
