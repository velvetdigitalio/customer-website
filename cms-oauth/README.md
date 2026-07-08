# Hosted CMS login — one-time setup

This makes `https://velvetdigital.io/admin/` log in with GitHub from any browser
(your phone included), with no local tools. You do it once. It's free.

Everything except the two account steps is already written for you (the Worker
in `worker.js`, its config in `wrangler.toml`, and the `base_url` line in
`public/admin/config.yml`).

Do the steps **in this order** — later steps need URLs/keys from earlier ones.

---

## 1. Deploy the login broker (Cloudflare Worker)

You need a free Cloudflare account (https://dash.cloudflare.com/sign-up).

```bash
cd cms-oauth
npx wrangler login        # opens a browser to authorise Cloudflare (one time)
npx wrangler deploy       # deploys worker.js
```

`deploy` prints your Worker URL, e.g.:

```
https://velvet-cms-oauth.YOUR-SUBDOMAIN.workers.dev
```

**Copy that URL — you need it in steps 2 and 4.**

---

## 2. Create a GitHub OAuth App

GitHub → your profile → **Settings** → **Developer settings** →
**OAuth Apps** → **New OAuth App**:

- **Application name:** Velvet Journal CMS
- **Homepage URL:** `https://velvetdigital.io`
- **Authorization callback URL:** `<your Worker URL>/callback`
  (e.g. `https://velvet-cms-oauth.YOUR-SUBDOMAIN.workers.dev/callback`)

Click **Register application**. On the next screen:
- Copy the **Client ID**.
- Click **Generate a new client secret** and copy it (shown once).

---

## 3. Give the Worker the two secrets

```bash
cd cms-oauth
npx wrangler secret put GITHUB_CLIENT_ID       # paste the Client ID
npx wrangler secret put GITHUB_CLIENT_SECRET   # paste the Client Secret
```

(These are stored encrypted on Cloudflare — never in this repo.)

---

## 4. Point the CMS at your Worker

Edit `public/admin/config.yml`, and set `base_url` to your Worker URL from step 1
(replace the `REPLACE-ME` host):

```yaml
backend:
  name: github
  repo: velvetdigitalio/customer-website
  branch: main
  base_url: https://velvet-cms-oauth.YOUR-SUBDOMAIN.workers.dev
```

Commit and push:

```bash
git add public/admin/config.yml
git commit -m "chore(cms): point admin at OAuth broker"
git push origin main
```

Wait ~2–5 minutes for the site to rebuild.

---

## 5. Use it

Go to **https://velvetdigital.io/admin/** → **Login with GitHub** → authorise once
→ write, add images, **Publish**. Publishing commits to the repo and the article
is live after the ~2–5 minute rebuild. No terminal, no local server, ever again.

---

### Notes
- Only GitHub accounts with **write access to this repo** can log in and publish.
- If login fails, re-check that the OAuth App's callback URL exactly matches
  `<Worker URL>/callback`, and that `base_url` matches the Worker URL.
- Cloudflare's free tier is far more than enough for this (100k requests/day).
