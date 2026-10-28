# SEO Super Booster — Overwatch 2 Cheats (overwatchcheats.org)

Implementation playbook for this Astro template. Core checks run in CI via `npm run build:validate` (`verify-seo.mjs`, `verify-redirects.mjs`, plus existing sitemap and sitewide audits).

## 1. Single canonical host

- `SITE_URL` / `SITE_HOST` in `src/data/seo-booster.ts` (from `brand.url`) → `https://overwatchcheats.org` (no `www`).
- `functions/_middleware.js` and `public/_redirects` → **301** `www` → apex.
- Every HTML page: self-referencing `rel=canonical`, locale `hreflang` where applicable.

## 2. Page-level metadata discipline

- One `<h1>` per indexed page; unique `<title>` and `meta description` sitewide.
- `og:title` / `og:description` match `<title>` / description.
- `og:image` + `twitter:image` from `brand.defaultOgImage` (hero WebP; dimensions in Layout).
- `rel=image_src` on all indexable pages (`Layout.astro`).
- `robots`: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` (`ROBOTS_INDEX` in `seo-booster.ts`).
- No `meta keywords`, no `SearchAction`, no keyword-list JSON-LD on articles.

## 3. Structured data graph

- Shared `@id` `https://overwatchcheats.org/overwatch-2-cheats/#product` (`productSchemaId`) on home, product, pricing, reviews.
- `Organization` + `WebSite` on every page; `SITE_PURPOSE` states **Overwatch 2 only**; `SITE_ABOUT` has exactly **6** `knowsAbout` terms.
- Product `FAQPage` only on `/faq/` (one graph). Per-question FAQ URLs have no FAQPage JSON-LD.
- Reviews index: **≥8** `Review` nodes + `AggregateRating` on Product. Individual review pages keep one `Review` each.
- Forum index (`/forum/`): `BreadcrumbList` + `DiscussionForumPosting`.

## 4. Intent map (not rendered as keywords)

Use `SEO_ROUTE_INTENTS` in `src/data/seo-booster.ts` when writing copy. Primary EN routes:

| Route | Focus |
|-------|--------|
| `/` | overwatch 2 cheats, ESP, aimbot, availability |
| `/overwatch-2-cheats/` | buy cheats, product features |
| `/overwatch-2-esp/` | ESP, wallhack visibility |
| `/overwatch-2-aimbot/` | aimbot, tracking, flickbot |
| `/overwatch-2-wallhack/` | wallhack overlays |
| `/features/` | feature list, toggles |
| `/pricing/` | monthly vs lifetime |
| `/setup/` | install on Windows PC |
| `/support/` | order help |
| `/status/` | patch / Blizzard Anti-Cheat status |
| `/faq/` | pricing, delivery, refunds |
| `/reviews/` | buyer feedback |
| `/forum/` | setup, ESP, aimbot, patch day |

## 5. Media & thumbnails

- Product imagery under `public/images/overwatch-2-*` and hero video in `public/videos/`.
- Run `npm run optimize:images` / `npm run fetch:images` when refreshing assets.
- Unique gallery alts on money pages via `LocalizedPage.astro`.

## 6. Sitemap (Overwatch adaptation)

- **Sitemap index** at `/sitemap.xml` with EN, locale, and image child sitemaps (multi-locale template).
- `npm run validate:sitemaps` + `audit-sitemap-deep.mjs` on build.
- Hreflang lives in HTML, not duplicated in XML.

## 7. Crawl rules

- `robots.txt` (from `sync-brand.mjs`): `Sitemap: https://overwatchcheats.org/sitemap.xml`, `Allow: /sitemap.xml`, `Allow: /videos/`, explicit `Googlebot`.
- Cloudflare Pages serves `robots.txt` and sitemaps from static output.

## 8. Keyword URL aliases (`public/_redirects`)

- Cannibal and EN slug redirects from `sync-en-redirects.mjs` / `sync-cannibal-redirects.mjs`.
- Retired `/affiliate-disclosure/` → `/privacy/` (301).

## 9. Build commands

```bash
npm run sync:brand
npm run build:validate   # build + sitemap + audit:seo + verify:seo + verify:redirects
```

## 10. Rebrand checklist (new game)

1. Edit `src/data/brand.ts`, then `npm run sync:brand`.
2. Update `SEO_ROUTE_INTENTS` and `SITE_ABOUT` in `src/data/seo-booster.ts`.
3. Update `scripts/verify-seo.mjs` product path if the money URL slug changes.
4. Run `npm run build:validate` until all verifiers pass.
