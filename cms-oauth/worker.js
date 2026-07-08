/**
 * GitHub OAuth broker for Decap CMS, as a Cloudflare Worker.
 *
 * A static site (GitHub Pages) can't safely hold the GitHub OAuth client secret,
 * so this tiny Worker performs the login handshake:
 *   /auth      -> redirects the editor to GitHub to authorise
 *   /callback  -> exchanges the code for a token and hands it back to the CMS
 *
 * Set two secrets on the Worker (see README.md):
 *   GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
 */

const AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const TOKEN_URL = "https://github.com/login/oauth/access_token";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("Decap CMS OAuth broker is running.", {
        status: 200,
      });
    }

    // Step 1 — send the editor to GitHub's authorise screen.
    if (url.pathname === "/auth") {
      const authorize = new URL(AUTHORIZE_URL);
      authorize.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      authorize.searchParams.set("redirect_uri", `${url.origin}/callback`);
      authorize.searchParams.set(
        "scope",
        url.searchParams.get("scope") || "repo,user",
      );
      authorize.searchParams.set("state", crypto.randomUUID());
      return Response.redirect(authorize.toString(), 302);
    }

    // Step 2 — GitHub redirects back here with a code; swap it for a token.
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) return new Response("Missing ?code", { status: 400 });

      const tokenRes = await fetch(TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "decap-cms-oauth",
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await tokenRes.json();

      const ok = Boolean(data.access_token);
      const status = ok ? "success" : "error";
      const payload = ok
        ? { token: data.access_token, provider: "github" }
        : { error: data.error || "Could not get an access token" };

      // The postMessage handshake Decap CMS expects from an OAuth provider.
      const html = `<!doctype html><html><body><script>
  (function () {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:github:${status}:${JSON.stringify(payload)}',
        e.origin
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
</script></body></html>`;

      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return new Response("Not found", { status: 404 });
  },
};
