# Limepaper — investor site

Static site on a Cloudflare Worker (assets only, no build step).

```bash
cd Website
npx wrangler dev     # local preview
npx wrangler deploy  # → limepaper.<your-subdomain>.workers.dev
```

Everything lives in `public/`: `index.html` (markup + styles), `scene.js` (the WebGL
dust→sheet→roll particle field), `vendor/three.module.min.js` (pinned three.js r180,
vendored so there is no CDN dependency at runtime).

Before sending the link out, edit in `public/index.html`:

- the `₹150000000/~ for 10%` in the **The ask** section
- the two `mailto:admin@raghavagarwal.com` addresses
