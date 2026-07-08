# Writing journal articles

There are two ways to publish an article. Both produce the same result: a
fully-branded, crawlable page in Velvet's fonts, listed on `/journal/`, added to
the sitemap, with Google Article structured data. No developer needed.

---

## Option 1 — The CMS (recommended for everyday writing)

A visual editor in your browser. You type, add images, hit publish; it saves a
Markdown file in `content/journal/` for you.

### Use it locally (no setup, works today)

1. In a terminal, from the project folder, run the site: `npm run dev`
2. In a second terminal, run: `npx decap-server`
3. Open **http://localhost:3000/admin/** and start writing. "Publish" commits the
   file to your local git — then `git push` to go live.

### Use it from anywhere (hosted, needs one-time setup)

Visiting **https://velvetdigital.io/admin/** works once GitHub login is wired up.
That requires a small OAuth helper (GitHub won't let a static site log you in on
its own). See "Hosted CMS login" at the bottom.

---

## Option 2 — A raw HTML (or Markdown) file

Drop a file straight into `content/journal/`:

- **`.md`** — Markdown (`## heading`, `![](image)`, `[link](url)`).
- **`.html`** — raw HTML (`<h2>`, `<p>`, `<img>`). See the example
  `content/journal/how-to-clean-a-diamond-ring-at-home.html`.

**The filename is the URL:** `how-to-clean-a-diamond-ring-at-home.html` →
`/journal/how-to-clean-a-diamond-ring-at-home/`. Use lowercase-hyphenated words
that read like the search someone would type.

Every file starts with a frontmatter block:

```
---
title: How to clean a diamond ring at home
description: The grey snippet shown under the title in Google. ~1 sentence.
standfirst: The one-line summary shown under the headline on the page.
date: July 2026
isoDate: 2026-07-08
pillar: /jewellery-marketing-agency-dubai/
pillarLabel: Jewellery marketing agency Dubai
hero: /journal/clean-a-diamond-ring/hero.jpg   # optional
eyebrow: Guide                                  # optional, defaults to "Guide"
---
```

Then the body. Supported and brand-styled: headings, paragraphs, lists, links,
blockquotes, images, figures/captions. Don't add `<html>`, `<head>`, `<h1>`,
`<script>` or `<style>` — the frame, your H1 (the title) and styling are added
for you.

---

## Images

Put files in `public/journal/<slug>/` and reference them by path:

```
public/journal/clean-a-diamond-ring/step-1.jpg
```
- Markdown: `![Describe the image](/journal/clean-a-diamond-ring/step-1.jpg)`
- HTML: `<img src="/journal/clean-a-diamond-ring/step-1.jpg" alt="Describe the image">`

Always write a real, descriptive `alt`. Use reasonably-sized images — they are
not auto-compressed. (The CMS uploads images to `public/journal/uploads/`
automatically.)

---

## Publish

Commit the file (and images) and push to `main`. The site rebuilds and the
article is live within a few minutes, listed automatically.

---

## Hosted CMS login (one-time, optional)

To make `https://velvetdigital.io/admin/` log in from anywhere, GitHub OAuth
needs a tiny broker (a static site can't hold the OAuth secret). Easiest path:

1. GitHub → Settings → Developer settings → **OAuth Apps** → New OAuth App.
   - Homepage: `https://velvetdigital.io`
   - Authorization callback URL: your broker's `/callback` URL (below).
2. Deploy a free OAuth broker — e.g. the community
   **`decap-proxy`** on Cloudflare Workers, or `netlify-cms-oauth-provider`.
   Set its `OAUTH_CLIENT_ID` / `OAUTH_CLIENT_SECRET` to the app's values.
3. In `public/admin/config.yml`, under `backend`, set
   `base_url:` to your broker's URL.

Until that's done, the **local** CMS (Option 1) works with zero setup.
