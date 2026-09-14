# Overwatch 2 Cheats — overwatchcheats.org

Static Astro 7 marketing site for [overwatchcheats.org](https://overwatchcheats.org). Primary SEO keyword: **Overwatch 2 cheats**.

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run sync:brand
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

## Hero video placeholder

Upload your hero MP4 to:

```
public/videos/Overwatch-Hero.mp4
```

Then set `heroVideo: '/videos/Overwatch-Hero.mp4'` in `src/data/brand.ts` and run `npm run sync:brand`.

Until then, the hero uses the poster image at `public/images/overwatch-2-hero-poster.webp`.

## Checkout

All buy buttons redirect to:

`https://zadeyo.com/go/TAHA?to=%2Fproducts%2Foverwatch-2`

Configured in `src/data/brand.ts` → `checkoutUrl`.

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **warthundercheat**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **overwatchcheats.org**

## License

Private — for overwatchcheats.org deployment only.
