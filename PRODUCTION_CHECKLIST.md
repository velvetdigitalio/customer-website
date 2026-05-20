# Production Checklist — Velvet Digital

A living checklist of everything that must be in place before we point DNS at this build. I will keep this file in sync as we add features.

Legend: `[ ]` pending · `[~]` in progress · `[x]` done · `[!]` blocker

---

## 1. Domain & hosting

- [ ] Buy / confirm ownership of `velvetdigital.io`
- [ ] Decide host: **Vercel** (recommended — first-class Next 16 support, free SSL, edge cache)
- [ ] Create Vercel project, connect this repo
- [ ] Point apex `velvetdigital.io` + `www.velvetdigital.io` DNS to Vercel (A + CNAME records they show)
- [ ] Enable HSTS once HTTPS is stable
- [ ] Add a 404 monitor / uptime check (Vercel built-in, or BetterStack / UptimeRobot free tier)

## 2. Environment variables (`.env.production` on Vercel)

- [ ] `RESEND_API_KEY` — production key (separate from dev)
- [ ] `CONTACT_FROM_EMAIL` — `"Velvet Digital <hello@velvetdigital.io>"` (after domain verification, see §3)
- [ ] `CONTACT_TO_EMAIL` — production inbox(es)
- [ ] `GOOGLE_SHEET_WEBHOOK_URL` — Apps Script deployment URL
- [ ] `GOOGLE_SHEET_WEBHOOK_SECRET` — long random string, rotated on launch
- [ ] `NEXT_PUBLIC_CALENDLY_URL` — final Calendly link (currently `https://calendly.com/yj291197/30min`)

## 3. Email deliverability (Resend)

- [ ] Add `velvetdigital.io` as a verified domain in Resend
- [ ] Add the SPF, DKIM, DMARC, and Return-Path DNS records Resend provides
- [ ] Wait for "verified" status, then flip `CONTACT_FROM_EMAIL` off the `onboarding@resend.dev` fallback
- [ ] Send a test lead from `/contact`, confirm it lands in the configured inbox(es) and doesn't go to spam
- [ ] Set up a forwarding rule / Gmail filter so leads are tagged "Velvet · Lead" and never archived
- [ ] (Optional) Add an autoresponder template to leads — "We got your message, will reply within 1 business day"

## 4. Lead storage (Google Sheet)

- [ ] Create the production Google Sheet ("Velvet Digital — Leads · Prod")
- [ ] Paste the Apps Script from README, set `SHARED_SECRET` to match the env var
- [ ] Deploy as a Web App, **Anyone** access, copy URL into `GOOGLE_SHEET_WEBHOOK_URL`
- [ ] Share the Sheet with the team (Editor for ops, Viewer for everyone else)
- [ ] Add Sheet views/filters: "New this week", "By industry", "Hot (budget > $15k)"
- [ ] Add an automation (Apps Script trigger or Zapier) that pings Slack/Discord on new row (optional but high-leverage)

## 5. Calendly

- [ ] Confirm `https://calendly.com/yj291197/30min` is the right production event (rename to e.g. `/velvetdigital/strategy-call` if launching the studio handle)
- [ ] Set event duration, buffer time, and timezone correctly
- [ ] Add intake questions on Calendly: name, email, company, biggest goal, current monthly budget
- [ ] Connect Calendly to Google Calendar / Outlook for double-booking protection
- [ ] (Pro plan) Customise Calendly page colors to match brand
- [ ] Add a redirect URL post-booking → `/thank-you` page (see §10)

## 6. Spam, abuse, legal

- [x] Honeypot field in form
- [x] In-memory per-IP rate limit (5/min)
- [ ] Decide whether to upgrade rate limit to Upstash Redis (only needed if we get multiple Vercel instances — single region is fine without)
- [ ] Add Cloudflare Turnstile if spam volume becomes annoying
- [ ] Privacy policy page (`/privacy`)
- [ ] Terms page (`/terms`)
- [ ] Link both from Footer (placeholders already in code)
- [ ] Cookie banner — only required if we add analytics that drop tracking cookies (Plausible doesn't, GA does)
- [ ] India DPDP / GDPR consent checkbox on contact form (if targeting EU)

## 7. Real content (replace placeholders)

Mockups currently in place — see `README.md` "Replacing Placeholders With Real Media" for exact swap points.

- [ ] Hero floating cards — replace `<PhoneMockup>` / `<DashboardMockup>` with real reel video + analytics screenshot
- [ ] Trust strip client logos — replace text wordmarks with real SVG logos
- [ ] Services bento — swap mini-visuals for real reels / dashboards
- [ ] Portfolio — add real `<video>` sources to each project card
- [ ] Work grid — same as Portfolio
- [ ] Case Studies — replace mockup hero & gallery with real screenshots
- [ ] Testimonials — replace HSL gradient avatars with real headshots + real quotes (with permission)
- [ ] Insights — wire to real MDX or a CMS (Sanity / Contentlayer / Notion API) when content is ready
- [ ] About — replace logo placeholder with team / studio photo, write real "Our story" copy
- [ ] All meta `og:image`s — replace `/logo.png` with proper 1200×630 OG cards per page

## 8. SEO & metadata

- [ ] Per-page `metadata` (titles, descriptions) audited — current ones are placeholders
- [ ] `app/sitemap.ts` — generate sitemap from static routes
- [ ] `app/robots.ts` — allow all, point to sitemap
- [ ] OG / Twitter card images per page (1200×630 PNG/JPG)
- [ ] Structured data (`Organization`, `WebSite`, `BreadcrumbList` JSON-LD) in root layout
- [ ] Submit to Google Search Console + Bing Webmaster
- [ ] Verify domain ownership (TXT record)

## 9. Analytics & feedback

- [ ] Pick analytics: **Vercel Analytics** (free) or **Plausible** (privacy-friendly, no cookie banner needed)
- [ ] Wire `@vercel/analytics` or Plausible script into `app/layout.tsx`
- [ ] Track key events: `book_call_clicked` (per CTA via UTM source), `contact_form_submitted`, `contact_tab_switched`
- [ ] (Optional) PostHog session recordings on `/contact` only — to debug funnel drop-offs

## 10. Conversion-path UX

- [ ] Build a `/thank-you` page for post-Calendly redirect + post-form-submission state
- [ ] Confirm mobile experience: hero, portfolio horizontal scroll, contact tabs (test on actual phone, not just devtools)
- [ ] `prefers-reduced-motion` audit — Lenis already disabled, double-check no parallax remains
- [ ] Test contact form: success, validation error, rate-limit error, network failure — all states should be obvious

## 11. Performance & quality

- [ ] Run Lighthouse on Home, Services, Work, Case Studies, Contact — target ≥ 90 perf / 100 a11y / 100 SEO
- [ ] Lazy-load Calendly inline embed only when its tab is active (already done) — verify no perf regression
- [ ] Run `next build` with `--profile` once, check for any client bundles > 200KB
- [ ] Audit image sizes — once real assets land, run them through Vercel's image optimisation
- [ ] Font preload — Clash Display + Satoshi `display=swap` already set, check FOUT is acceptable
- [ ] Test on slow 3G (Chrome DevTools throttle)

## 12. Accessibility

- [ ] Run axe DevTools on each page
- [ ] Color contrast: all gold-on-velvet text must hit WCAG AA (4.5:1 for body)
- [ ] Keyboard navigation — tab order, focus rings on every interactive element
- [ ] Skip-to-content link in `<Nav>`
- [ ] Verify `alt` text on every `<Image>` once real images land
- [ ] Test Calendly popup with keyboard + screen reader (`react-calendly` usually handles this — verify)

## 13. Pre-launch dress rehearsal

- [ ] Full clickthrough on staging URL — every link, every CTA, every form path
- [ ] Submit a real lead end-to-end → confirm email arrives + Sheet row appears + rate limit doesn't fire on legit user behaviour
- [ ] Book a real Calendly slot from each major CTA → confirm event appears in calendar with correct UTM source
- [ ] Test from 3 browsers (Safari iOS, Chrome desktop, Firefox)
- [ ] Test from outside India (VPN) — fonts, Calendly, Resend all reachable
- [ ] Final copy proofread (we'll likely catch typos in the placeholder copy)

## 14. Launch day

- [ ] Cut over DNS
- [ ] Watch logs for first hour
- [ ] Announce on socials with a link to a case study, not the homepage (better engagement)
- [ ] Open a "post-launch fixes" doc — small things will surface in the first 48 hours

---

## Nice-to-haves (post-launch)

- [ ] MDX / Sanity-driven `/insights`
- [ ] Per-case-study dynamic routes (`/case-studies/[slug]`)
- [ ] Dark/light token swap (currently dark-only — fine for the brand, but useful to have ready)
- [ ] WhatsApp click-to-chat in Footer with our own automation flow
- [ ] Subtle audio on hero (Apple-style) — toggleable, muted by default
- [ ] Internationalisation (English + Hindi) if expanding domestically
