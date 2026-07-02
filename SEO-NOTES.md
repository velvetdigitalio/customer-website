# SEO Notes — Velvet Digital

Implementation notes for the technical-SEO work (Phases 1–6). Read this before
publishing: it lists every placeholder left in code, the full new sitemap, and
the manual steps that must happen after deploy.

## Adaptations from the brief

The brief assumed a design system that differs from the live one. The
implementation follows the **actual** codebase:

- Fonts are **Fraunces + Inter** (via `next/font`, `display: swap`, `latin`
  subset), not Cormorant Garamond. No change needed — already correct.
- The accent token is **`--gold`**, not `--brass`. All new pages use `gold`.
- The default OG image is the existing **`/og.png`** (1200×630), not a new
  `/og/default.jpg`. If you want a bespoke default OG, drop it in and update
  `OG_IMAGE` in `lib/seo.ts`.

## TODOs left in code (resolve before / soon after launch)

| Where | TODO |
| --- | --- |
| `lib/schema.ts` | `ProfessionalService.address` has locality/country only — **add the physical street address** when available (`TODO: physical address pending`). |
| `lib/schema.ts` | `sameAs` has Instagram + Facebook — **add the LinkedIn company URL** when the page is live. |
| `app/best-jewellery-marketing-agencies-dubai/page.tsx` | **Verify each competitor URL** before publishing. Domains used are best-known guesses: ASTUDIO `astudio.ae`, SEO Sherpa `seosherpa.com`, Prism Digital `prismdigital.ae`, Nexa `digitalnexa.com`, Glimpse `glimpse.ae`. Fix any that 404 or redirect elsewhere. All are `rel="nofollow noopener"`. |
| `components/money/ProofPlaceholder.tsx` (used on 6 money pages) | **Replace with real, attributable testimonials + results** as engagements complete. Per `CLAUDE.md`, never fabricate — the dashed empty state is intentional until you have real proof. |
| OG imagery | All pages share `/og.png`. Consider **per-page OG images** for the money pages later (pass `ogImage` to `pageMeta`). |

## New sitemap URLs (the SEO silo)

All live in `app/sitemap.ts` (→ `out/sitemap.xml`). Priorities: home 1.0,
vertical/hub money pages 0.9, child + listicle pages 0.8.

```
https://velvetdigital.io/marketing-agency-dubai/                                         (hub, 0.9)
https://velvetdigital.io/jewellery-marketing-agency-dubai/                               (0.9)
https://velvetdigital.io/interior-design-marketing-agency-dubai/                         (0.9)
https://velvetdigital.io/jewellery-marketing-agency-dubai/instagram-content/             (0.8)
https://velvetdigital.io/jewellery-marketing-agency-dubai/google-reviews-for-jewellers/  (0.8)
https://velvetdigital.io/jewellery-marketing-agency-dubai/jewellery-seo/                 (0.8)
https://velvetdigital.io/best-jewellery-marketing-agencies-dubai/                        (0.8, listicle)
```

Full sitemap also includes: `/`, `/services/`, `/studio/`, `/work/`,
`/journal/` (+ 5 articles), `/contact/`, `/referral/`, `/privacy/`, `/terms/`.

## What changed, by phase

- **Phase 1 — Global metadata.** Root `layout.tsx`: `metadataBase`, title
  template `%s | Velvet Digital` (+ home default), global `robots` +
  `googleBot` (`max-image-preview:large`, `max-snippet:-1`), OG/Twitter
  defaults, `locale en_AE`, `<html lang="en" dir="ltr">`. All existing page
  titles de-branded so the template applies cleanly (unique, < 60 chars).
- **Phase 2 — JSON-LD.** `components/seo/JsonLd.tsx` + `lib/schema.ts`.
  Sitewide `ProfessionalService` + `WebSite` in the layout; per-money-page
  `Service` + `FAQPage` + `BreadcrumbList`, all from single-source data
  objects (FAQ schema and visible FAQ never drift).
- **Phase 3 — Money pages.** 7 new routes (see sitemap above), Velvet-voice
  copy, shared `components/money/*` primitives, `.prose-velvet` styles,
  Footer "Services" silo block, hub↔children↔verticals↔listicle linking.
- **Phase 4 — Sitemap / robots / llms.** `robots.ts` disallows
  `/pitch-deck/` and `/styleguide/`; `/pitch-deck/index.html` got a
  `noindex,nofollow` meta. `public/llms.txt` added.
- **Phase 5 — Crawl hygiene.** Internal prose `<a>` → `next/link`; one
  indexable `h1` per page; external links keep `rel`; competitor links
  `nofollow`.
- **Phase 6 — Performance.** Fonts already `next/font`. Homepage hero image
  preloaded via `react-dom` `preload` (`fetchPriority: high`). No analytics
  script is installed in the codebase (privacy copy references analytics but
  no `<script>` exists), so there is nothing to defer.

### Note on the build size report

This project builds with **Next 16 + Turbopack**, whose build output does not
print the per-route "First Load JS" table. The money pages are **pure server
components** and import no route-specific client JS, so they inherit the
site's existing shared baseline unchanged (the heaviest shared client deps are
`framer-motion` and `react-calendly`, already loaded site-wide via
Header/Footer). No new route regresses the bundle. If you need exact numbers,
run a `@next/bundle-analyzer` pass or a Lighthouse audit on the deployed URLs.

## Post-deploy manual checklist

- [ ] **Google Search Console** → submit `https://velvetdigital.io/sitemap.xml`.
- [ ] **Request indexing** for the 7 new money-page URLs listed above.
- [ ] **Rich Results Test** (search.google.com/test/rich-results) — verify
      `FAQPage` on each money page and `LocalBusiness`/`ProfessionalService`
      on the home page.
- [ ] Confirm the 5 competitor links on the listicle resolve correctly.
- [ ] Because `trailingSlash: true` is already set, no legacy non-slash URL
      migration is needed (it predates this work).
- [ ] Fill the schema TODOs (address, LinkedIn) and swap in real testimonials.
