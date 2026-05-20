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
npm run build && npm start
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
  contact/              /contact — form + info
  api/contact/route.ts  Stub endpoint, logs submissions

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

## Lead capture (contact form + Calendly)

The `/contact` page has a tabbed layout: **Book a call** (Calendly inline embed, default) and **Send a message** (the form). The "Book a Call" CTAs across the site (Nav, Hero, Final CTA, Footer, Services, Case Studies, Portfolio end-card) all open the Calendly popup widget — no page jump.

### Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in:

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for sending lead emails |
| `CONTACT_FROM_EMAIL` | `"Velvet Digital <hello@velvetdigital.io>"` (use `onboarding@resend.dev` until domain is verified) |
| `CONTACT_TO_EMAIL` | Inbox(es) that receive leads (comma-separated for many) |
| `GOOGLE_SHEET_WEBHOOK_URL` | Apps Script web-app URL that appends to a Sheet |
| `GOOGLE_SHEET_WEBHOOK_SECRET` | Shared secret sent as `x-velvet-secret` header |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly event URL (e.g. `https://calendly.com/yj291197/30min`) |

If any of these are missing, the route degrades gracefully: missing Resend → no email but Sheet still logs; missing Sheet URL → no log but email still goes out; both missing → request fails with a 502 and the form shows a friendly error pointing users to `hello@velvetdigital.io`.

### 1) Resend setup (email)

1. Sign up at [resend.com](https://resend.com), copy your API key into `RESEND_API_KEY`.
2. For dev testing, leave `CONTACT_FROM_EMAIL="Velvet Digital <onboarding@resend.dev>"` — Resend allows sending from this address without domain verification.
3. For production, **verify `velvetdigital.io`** in Resend (add the DNS records they show) and switch `CONTACT_FROM_EMAIL` to `"Velvet Digital <hello@velvetdigital.io>"`.
4. Set `CONTACT_TO_EMAIL=hello@velvetdigital.io` (or add multiple separated by commas).

Lead emails are HTML, branded in velvet/gold, with `Reply-To` set to the lead — so clicking Reply in your inbox replies directly to the lead.

### 2) Google Sheet setup (durable lead log)

1. Create a new Google Sheet (e.g. "Velvet Digital — Leads").
2. In the sheet, **Extensions → Apps Script**. Replace the default code with the script below.
3. Set `SHARED_SECRET` in the script to the same value you use for `GOOGLE_SHEET_WEBHOOK_SECRET`.
4. Click **Deploy → New deployment → Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployment URL into `GOOGLE_SHEET_WEBHOOK_URL`.

```javascript
// Google Apps Script — paste into your Sheet's Apps Script editor
const SHARED_SECRET = "replace_with_a_long_random_string"; // match GOOGLE_SHEET_WEBHOOK_SECRET

function doPost(e) {
  try {
    const headers = (e.parameter && e.parameter.headers) || {};
    // Apps Script doesn't expose headers directly. We pass the secret in
    // the request body if header isn't available; the Next.js route sends
    // both, so we accept either.
    const raw = e.postData && e.postData.contents;
    const body = raw ? JSON.parse(raw) : {};

    // Accept either header (when proxied) or body.secret as a fallback.
    const givenSecret =
      (e.parameter && e.parameter.secret) || body.__secret || "";
    if (SHARED_SECRET && givenSecret && givenSecret !== SHARED_SECRET) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: "unauthorized" }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At",
        "Name",
        "Email",
        "Company",
        "Budget",
        "Services",
        "Message",
        "Source",
      ]);
    }
    sheet.appendRow([
      body.submittedAt || new Date().toISOString(),
      body.name || "",
      body.email || "",
      body.company || "",
      body.budget || "",
      (body.services || []).join(", "),
      body.message || "",
      body.source || "",
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

> Note: Apps Script `doPost` cannot read custom request headers, so the Next.js route also sends the secret in the JSON body as `__secret` (TODO if you want stricter auth — for most agency use the simple "publish to web" URL is fine on its own since it's a guessable-but-not-discoverable random URL).

### 3) Calendly setup

1. Paste your Calendly event URL into `NEXT_PUBLIC_CALENDLY_URL`. Example used in code: `https://calendly.com/yj291197/30min`.
2. Optional — on Calendly Pro you can customise the colors used by the embed in `lib/calendly.ts` (`backgroundColor`, `textColor`, `primaryColor`). They're already set to match the brand.

### Spam protection

- Invisible **honeypot** field (`name="website"`) in the form. Bots fill it; we drop those submissions silently.
- **In-memory per-IP rate limit** in `lib/rate-limit.ts` — 5 submissions / 60s. For production scale or multi-instance deploys, swap to Upstash Redis (drop-in: `@upstash/ratelimit`).

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

