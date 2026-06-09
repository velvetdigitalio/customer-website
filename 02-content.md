# 02 — Content (Single Source of Truth)

> **The anti-hallucination rule lives here.** Everything renderable on the site is
> below. Copy is written in Velvet voice and is final — render it as-is, do not
> "improve" or punch it up. Anything marked `[CLIENT-TODO]` is a slot the human
> fills; render it as a clean, obviously-empty placeholder state, NEVER as an
> invented value. No client names, logos, testimonials, or numbers may appear on
> the site unless they are written out, verbatim, below.

---

## A note on proof (read this)

The old site failed because its proof was fabricated (invented brands, made-up
ROAS, fake testimonials). The studio is real but its public client list / metrics
are not yet cleared for display. So v1 ships with **honest proof or no proof** —
never fake proof. Where we lack a real number, we say something true and quiet
instead, or leave a styled empty state. Credibility > decoration.

---

## Global

- **Studio name:** Velvet Digital
- **Wordmark:** VELVET / DIGITAL
- **Primary CTA (everywhere):** `Request an audit`  → links to `/contact`
- **Secondary CTA:** `View the work` → links to `/work`
- **Contact email:** hello@velvetdigital.io
- **Studio location line:** "Built in Bengaluru. Made for the Gulf."
- **Currency for any pricing shown:** AED (never ₹)

---

## NAV
Links: Work · Services · Studio · Journal
Right-side button: `Request an audit`

(Note: rename from old "Insights" → "Journal"; "About" → "Studio";
"Case Studies" folds into "Work". Keep nav to 4 items + 1 button.)

---

## HERO

Eyebrow (small caps): `A brand & digital studio`

Headline (Fraunces, the word "quietly" set in italic):
> Luxury grows quietly.

Subhead (Fraunces or large body, one line):
> Brand, content and digital systems for fine jewellery and interiors —
> built in India, made to Gulf standards.

Primary CTA: `Request an audit`
Secondary CTA: `View the work`

Beneath, a single quiet line (NOT a stat-counter, NOT fabricated):
> A considered studio. We take a small number of brands at a time.

> Hero visual: full-bleed or right-column editorial photography of jewellery /
> interior detail (macro, warm light). Image source: `/assets/hero/`.
> If no image present, render a `--umber` field with the headline only — do NOT
> insert a fake analytics-dashboard mockup (that was the old site's tell).
> `[CLIENT-TODO: supply hero photography — jewellery macro or interior detail]`

---

## POSITIONING / INTRO (replaces the fake metric row)

Eyebrow: `The studio`

Statement (large, Fraunces, 2–3 lines):
> Most agencies are loud. The brands we work with are not.
> We build presence the way a jeweller sets a stone — slowly, precisely,
> so the value is obvious without being announced.

Supporting paragraph (body):
> Velvet is a small studio working with fine jewellery houses and interior
> designers across the UAE. We handle the brand, the content that carries it,
> and the quiet systems underneath — so the work compounds instead of resetting
> each month.

---

## SERVICES

Eyebrow: `What we do`
Section heading:
> Four disciplines. One considered whole.

Render as four editorial rows (number + title + line + short paragraph),
NOT as glass cards. Numbers in `--gold`, small.

01 — **Brand & Identity**
Line: *The foundation everything else is built on.*
Para: Positioning, narrative, identity systems and art direction. The rails the
rest of the work runs on.

02 — **Content & Film**
Line: *Visual storytelling that builds desire.*
Para: Editorial photography, reels and ongoing content — produced as a steady
engine, not one-off bursts. Made for how jewellery and interiors are actually seen.

03 — **Performance**
Line: *Demand, measured.*
Para: Meta, Google and YouTube, run with restraint and against real numbers —
your cost of acquisition and the lifetime value behind it.

04 — **Systems & Automation**
Line: *The quiet machinery.*
Para: Lead routing, WhatsApp and CRM workflows, attribution. Marketing that keeps
working when the studio is asleep.

(No "SEO + GEO" rank-mockup widget from the old site. If SEO is offered, fold it
into Performance as a line, not a fake ranking graphic.)

---

## APPROACH (replaces "process built to compound")

Eyebrow: `How we work`
Heading:
> A process with weight.

Four steps, editorial list (no glass, no icons-as-decoration):

01 **Understand** — Audits, interviews, a competitive read. We map the distance
between where the brand is and where it should sit.

02 **Position** — Narrative, tone, visual system. We decide what the brand means
before deciding how it looks.

03 **Make** — Content and campaigns, produced monthly, on a single coherent line.

04 **Compound** — Systems and measurement, so each month builds on the last.

---

## WORK / SELECTED WORK

Eyebrow: `Selected work`
Heading:
> A small body of considered work.

> **PROOF GATE.** Do NOT invent case studies. The old site's "Aurum Atelier +340%"
> style entries were fabricated and are banned.
> Render whatever real entries exist in the array below. If the array is empty,
> render a quiet, intentional empty state (see component rules), NOT placeholders.

```
WORK_ITEMS = [
  // Each entry requires ALL fields to be real & client-approved before it ships.
  // {
  //   slug: "",
  //   client: "",          // real client name, approved for display
  //   sector: "",          // e.g. "Fine jewellery"
  //   disciplines: [],     // e.g. ["Brand", "Content"]
  //   result: "",          // a TRUE, attributable outcome — or omit
  //   image: "",           // /assets/work/...
  //   caseStudyUrl: ""     // real page — or omit the link, don't fake it
  // }
]
// [CLIENT-TODO] Populate WORK_ITEMS with 2–4 real, approved projects.
// Until then, ship the empty state. One real project beats five invented ones.
```

Empty-state copy (shown when WORK_ITEMS is empty):
> Selected work is being prepared for publication.
> If you'd like to see relevant examples for your category, request an audit and
> we'll send work privately.
CTA: `Request an audit`

---

## CAPABILITIES STRIP (honest, no fake numbers)

Instead of fabricated stat counters, a quiet single row of *capabilities*, not metrics:

> Brand systems · Editorial photography · Reels & film · Paid media · WhatsApp & CRM
> automation · Analytics

(Plain text, hairline-separated. No animated numbers. If/when real aggregate
metrics are approved, they can replace this — `[CLIENT-TODO: approved metrics]`.)

---

## TESTIMONIALS

> **PROOF GATE.** The old testimonials (Anaisha Kapoor / Rohan Mehta / Elena Sokolov)
> were invented and are banned. Render ONLY real, attributed, approved quotes.

```
TESTIMONIALS = [
  // { quote: "", name: "", role: "", company: "" }  // all real & approved
]
// [CLIENT-TODO] Add real testimonials. If empty, OMIT the section entirely —
// do not render placeholder quotes.
```

If `TESTIMONIALS` is empty, do not render the section at all. Silence is more
premium than a fake quote.

---

## STUDIO (About teaser on home; full copy on /studio)

Eyebrow: `The studio`
Heading:
> Built in Bengaluru. Made for the Gulf.

Para:
> Velvet is a small team of builders and designers working from India for the
> luxury market of the UAE. The distance is the point: Indian craft and pace,
> held to Gulf standards. We work with a handful of brands at a time, because
> the work asks for it.

CTA: `About the studio` → /studio

---

## FINAL CTA

Eyebrow: `Working together`
Heading (Fraunces, "audit" in italic):
> Start with an audit.

Para:
> A short, honest review of your brand and digital presence — where it stands,
> and the most direct way forward. No pitch deck. We'll tell you plainly whether
> we're the right studio for you.

Risk-reducer line (display prominently near the CTA — see `07-psychology.md` P3/P4):
> A short review, not a sales call. No obligation, no long contract to start.

Single availability line (ONE only — no scarcity stacking):
> We take a small number of new brands each quarter.

Primary CTA: `Request an audit`

---

## CONTACT PAGE

Heading:
> Request an audit.

Para:
> Tell us a little about your brand. We reply within two working days.

Form fields (real, working — posts to NEXT_PUBLIC_FORM_ENDPOINT; mailto fallback).
KEEP THIS SHORT — every field is friction at the ask (see `07-psychology.md` P3).
Required = the two starred fields ONLY. Everything else optional. No phone field,
no "how did you hear about us", no marketing-consent pre-check.
- Name * (required)
- Brand / company * (required)
- Category (select, optional: Fine jewellery · Interior design · Other)
- Website or Instagram (optional)
- Monthly marketing budget (select, optional, **AED**: Under 10k · 10–30k · 30k+ · Not sure)
- Message (optional)
Submit button: `Send request`
Microcopy under the button (risk-reducer): `A short review, not a sales call. We reply within two working days.`
Below that: `Or email hello@velvetdigital.io`

---

## FOOTER

Left: VELVET / DIGITAL wordmark + one line:
> A brand & digital studio for fine jewellery and interiors.
> Built in Bengaluru. Made for the Gulf.

Columns:
- **Studio:** Work · Services · Studio · Journal
- **Contact:** hello@velvetdigital.io · Request an audit
- **Social:** [CLIENT-TODO: real Instagram / LinkedIn URLs — if absent, omit the
  icons entirely. Do NOT render `#` dead links like the old site did.]

Bottom: © 2026 Velvet Digital. · Privacy · Terms
> Privacy & Terms must link to real pages. If those pages don't exist yet, create
> minimal real ones — never `href="#"`.
