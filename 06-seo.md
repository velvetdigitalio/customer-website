# 06 — SEO (Search Readiness)

> This file makes the build genuinely search-ready, not just technically clean.
> It is grounded in real competitor/keyword research for the jewellery + interiors ×
> UAE niche (June 2026). Follow it alongside the meta basics in `04-component-rules.md`.
> Same hard rule applies: **no fabricated proof in schema or copy** (no fake reviews,
> ratings, client counts). Honest SEO only.

---

## 0. The two problems we're solving

1. **The site is currently invisible.** A direct search for the domain returns
   nothing owned by Velvet. Likely causes: client-side rendering (Google sees an
   empty shell), no sitemap/robots, no inbound links, no indexable content depth.
   The Next.js SSR rebuild fixes the rendering cause; this file fixes the rest.
2. **Brand-name collision.** Multiple unrelated "Velvet Digital" entities rank
   (UK dental lab, Saudi agency, a Bangalore "Velvet Digital Ventures", `.media`,
   `.net`). We cannot out-rank all of them on the bare name quickly, so we win on
   the **niche wedge** instead: jewellery + interiors × UAE. See §5.

---

## 1. Strategy: win the niche, not the generic term

Do NOT try to rank for "digital marketing agency" (impossible, generic, wrong buyer).
Target **long-tail, high-intent, niche + geo** phrases the real buyer types. These
are confirmed real search themes from competitor sites in this exact market:

Primary target phrases (high intent, realistic to rank for a focused studio):
- `jewellery branding agency Dubai`
- `fine jewellery marketing UAE`
- `interior design marketing agency Dubai` / `UAE`
- `luxury branding studio UAE`
- `jewellery social media agency Dubai`
- `branding for interior designers UAE`

Secondary / supporting:
- `luxury content studio Dubai`
- `Meta ads for jewellery brands UAE`
- `WhatsApp automation for luxury brands UAE`
- `India-based agency for UAE luxury brands` (the bridge — low competition, on-brand)

The bridge angle ("built in India, made for the Gulf") is a near-uncontested phrase
space and is authentic to the studio. Lean into it — it differentiates from the
purely-Dubai competitors (HAUS of Hendricks, Mason Circle, ASTUDIO) and from the
purely-India agencies.

---

## 2. Keyword → page map (fill the title/description, keep them in Velvet voice)

One primary intent per page. No keyword stuffing. Titles ≤ 60 chars where possible;
descriptions ≤ 155 chars; both human, no hype, no superlatives.

| Page | Primary phrase | Title (draft) | Meta description (draft) |
|------|----------------|---------------|--------------------------|
| `/` (home) | luxury branding studio UAE (jewellery + interiors) | `Velvet Digital — Branding & Digital for Fine Jewellery and Interiors` | `A brand & digital studio for fine jewellery houses and interior designers in the UAE. Built in India, made to Gulf standards.` |
| `/services` | jewellery & interiors marketing services UAE | `Services — Brand, Content, Performance & Systems · Velvet Digital` | `Brand identity, editorial content, paid media and automation for fine jewellery and interior brands across the UAE.` |
| `/services#brand` | jewellery branding agency Dubai | (anchor; covered by services title) | — |
| `/services#content` | jewellery content studio UAE | (anchor) | — |
| `/services#performance` | Meta ads for jewellery brands UAE | (anchor) | — |
| `/work` | jewellery & interior branding portfolio | `Selected Work · Velvet Digital` | `Selected brand and content work for fine jewellery and interior design brands.` |
| `/studio` | India agency for UAE luxury brands | `The Studio — Built in Bengaluru, Made for the Gulf · Velvet Digital` | `A small studio working from India for the luxury market of the UAE. How we work and who we work with.` |
| `/journal` | (topic hub — see §6) | `Journal · Velvet Digital` | `Notes on luxury branding, jewellery and interiors marketing in the Gulf.` |
| `/contact` | request brand audit UAE | `Request an Audit · Velvet Digital` | `A short, honest review of your brand and digital presence. We reply within two working days.` |

> Render these as real per-page `<title>` and `<meta name="description">` via Next.js
> Metadata API. The human can refine wording; structure stays.

---

## 3. Technical SEO — required deliverables

Build all of these (most are missing on the current site):

1. **Server-rendered HTML.** Every page must return full content in the initial
   HTML response (App Router server components). Verify with `curl` / "View Source"
   that headings and body copy are present without JS. This is the #1 fix.
2. **`robots.txt`** (via `app/robots.ts`): allow all, point to sitemap. Block nothing
   except any `/_styleguide` or preview routes.
3. **XML sitemap** (`app/sitemap.ts`): list every real, indexable page with
   lastmod. Exclude empty placeholder routes until they have content.
4. **Canonical tags**: self-referencing canonical on every page. Pick one host
   (`https://velvetdigital.io`, non-www) and 301 the other + http→https.
5. **One `<h1>` per page**, logical heading order (no skips). The primary phrase
   should appear naturally in the h1 or first h2 — not stuffed.
6. **Clean, descriptive URLs** (already OK): `/services`, `/work`, `/studio`. Use
   hyphens, lowercase, no params.
7. **Image SEO**: real descriptive `alt` (naturally include subject + context, e.g.
   `alt="Gold and emerald ring, editorial macro for [client] campaign"`), compressed
   modern formats, explicit dimensions (no CLS).
8. **Core Web Vitals**: hit the perf floor from `04` (LCP < 2.5s, CLS < 0.1,
   INP < 200ms). CWV is a real ranking factor — the SSR + next/image + restrained
   motion already help; verify with Lighthouse + PageSpeed.
9. **No dead links** (`href="#"`): they waste crawl budget and signal low quality.
   Every link resolves or is removed.
10. **`lang="en"`**, proper `<head>` order, no duplicate meta.
11. **404 page** that's real and links back into the site (not a dead end).

---

## 4. Structured data (Schema.org) — HONEST only

Add JSON-LD. **Do not** include `aggregateRating`, `review`, or invented client
counts unless they are real and approved (fake review schema can earn a manual
penalty). Ship only what's true:

- **Organization** (site-wide, in root layout):
  - `name`, `url`, `logo` (real SVG/PNG URL), `description`,
  - `sameAs`: real social profile URLs ONLY (omit the array if none yet),
  - `areaServed`: United Arab Emirates,
  - `knowsAbout`: ["fine jewellery branding","interior design marketing","luxury content"].
- **ProfessionalService / LocalBusiness** (optional, on `/studio` or `/contact`):
  - only if you list a real address / service area. Use `areaServed: AE` and
    honest `address` (Bengaluru) — don't fake a Dubai office.
- **BreadcrumbList** on sub-pages.
- **WebSite** with `potentialAction` SearchAction only if on-site search exists
  (it doesn't in v1 — skip).
- **Article** schema on Journal posts (see §6), with real `datePublished`/`author`.

`[CLIENT-TODO]` items for schema: real logo URL, real social URLs, confirmed
service-area/address. Until present, omit those fields — never placeholder them.

---

## 5. Brand-name disambiguation plan (off-page, surface to the human)

On-page SEO won't fix the name collision alone. These are tasks for the human; list
them in the build output so they're not forgotten:

1. **Google Business Profile** for Velvet Digital (service-area business, UAE +
   Bengaluru), category: Marketing agency / Branding agency. Consistent NAP
   (Name/Address/Phone) everywhere.
2. **Consistent NAP + same wording** across Instagram, LinkedIn, any directory.
   Identical name string ("Velvet Digital") + the niche descriptor every time.
3. **Niche-anchored bio everywhere**: always pair "Velvet Digital" with "fine
   jewellery & interiors · UAE" so engines associate the entity with the niche,
   not the dental lab.
4. **Earn a few relevant inbound links**: a guest piece on a UAE design/retail
   blog, a Clutch/DesignRush profile in the *jewellery/luxury* category, supplier
   or client mentions. Quality + relevance over volume.
5. **Secure the obvious profiles** so the brand SERP fills with your own properties
   (LinkedIn, Instagram, Behance, Clutch) — pushing the namesakes down.
6. Long game: a small amount of niche content (§6) builds topical authority that
   the bare-name competitors don't have in this vertical.

---

## 6. Content plan — `/journal` (this is how you actually rank)

A service site with ~6 pages has little to rank. The Journal gives indexable,
keyword-aligned pages AND fits the brand ("Quiet observations on luxury branding").
Keep posts genuinely useful and in Velvet voice — no thin SEO filler.

Starter post map (each targets a real long-tail phrase; write 800–1,400 words,
one clear topic, real substance):

1. *"What luxury jewellery brands in the UAE get wrong about Instagram."*
   → fine jewellery marketing UAE / jewellery social media Dubai
2. *"Branding for interior designers: why the portfolio isn't the brand."*
   → branding for interior designers UAE
3. *"A quiet case for restraint: performance marketing for high-AOV jewellery."*
   → Meta ads for jewellery brands UAE
4. *"Built in India, made for the Gulf: how the distance becomes an advantage."*
   → India agency for UAE luxury brands (the bridge — own this phrase)
5. *"WhatsApp, quietly: lead systems for luxury brands without the noise."*
   → WhatsApp automation for luxury brands UAE

Each post:
- Real `<h1>` = the question/title, primary phrase used naturally once or twice.
- Proper `Article` JSON-LD, real author + date, descriptive OG image.
- Internal links to the relevant `/services` anchor and `/contact`.
- Cadence: the existing plan (one every 4–5 days) is fine; quality over volume.

> Empty-state note: until posts exist, `/journal` shows a quiet "Notes, soon."
> state (per `03`) — but the SEO value only arrives once real posts ship. Treat
> the first 3 posts as part of launch, not "later," if ranking matters near-term.

---

## 7. Measurement (set up at launch)

- **Google Search Console** — verify the domain, submit the sitemap, watch
  Coverage (is it indexed?) and Performance (which phrases bring impressions).
- **Bing Webmaster Tools** — same, cheap to add.
- **Analytics** — privacy-respecting (e.g. Plausible/GA4), track audit-form
  submissions as the primary conversion. No vanity metrics.
- First thing to confirm post-launch: pages are **indexed** (site:velvetdigital.io
  returns your pages) and the homepage renders fully in GSC's URL Inspection
  "rendered HTML". That closes the loop on the original invisibility problem.

---

## 8. SEO definition of done

- Every page returns full content in raw HTML (no JS needed to see copy/headings).
- robots.txt + sitemap.xml live and correct; one canonical host; http/www redirect.
- Per-page title + description in place, in Velvet voice, mapped to §2.
- Honest Organization JSON-LD (no fake ratings/reviews/counts).
- Zero dead links; CWV passes; one h1/page; real alts.
- GSC + sitemap submitted.
- At least the first 3 Journal posts published if near-term ranking is a goal.
- Brand-disambiguation checklist (§5) handed to the human as action items.
