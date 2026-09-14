# Design Template — Reusable Site Blueprint

Use this file at the **start of every new project**. Copy it, fill in the intake sections, then apply changes to the codebase.

**Only two things change per project:** color scheme and content. Everything else in this document is the locked, reusable design.

---

## How to use this template

1. Duplicate this file as `PROJECT-[name]-INTAKE.md` (keep the original untouched).
2. Answer every question in **Section A (Color scheme)** and **Section B (Content)**.
3. Apply answers to `src/data/brand.ts` (or Brand Studio at `/brand-studio/` during dev).
4. Run `npm run sync:brand && npm run build:validate`.
5. Deploy.

For SEO rules and page formulas, see `TEMPLATE-SEO.md`.

---

## Section A — Color scheme (required every project)

Answer these before touching any code.

### A1. Primary accent color

| Field | Your answer |
|-------|-------------|
| **Accent hex** (buttons, links, highlights) | `#________` |
| Example presets | Magenta `#c026d3` · Purple `#B10FF6` · Red `#ff4655` · Blue `#2b9dff` · Teal `#14b8a6` |

The accent drives ~70 CSS variables site-wide. Components never hardcode colors — they use `var(--accent)`, `var(--magenta)`, etc.

### A2. Canvas / background color

| Field | Your answer |
|-------|-------------|
| **Background hex** (page canvas, theme-color) | `#________` |
| Recommended | Light sites: `#FAFBFD` or `#FFFFFF` · Dark sites: `#08090a`–`#0f1419` |

### A3. Optional tone overrides

Leave blank to auto-derive from accent + bg. Set only if you need manual control.

| Token | Purpose | Your answer |
|-------|---------|-------------|
| `soft` | Chips, icons, subtle highlights | `#________` or auto |
| `deep` | Price pills, dark accent areas | `#________` or auto |
| `hover` | Button/link hover state | `#________` or auto |
| `panel` | Card/panel background | `#________` or auto |

### A4. Where colors are applied (do not edit these files for color alone)

| Layer | File | What happens |
|-------|------|--------------|
| Source of truth | `src/data/brand.ts` → `theme` | You set accent + bg here |
| Derivation | `src/data/brand-theme.ts` | Auto-derives ink, lines, elevated surfaces |
| Injection | `src/layouts/Layout.astro` | Injects CSS vars on every page at runtime |
| Defaults | `src/styles/global.css` | Fallback tokens only — overridden by brand theme |

**Apply colors:**

```ts
// src/data/brand.ts
theme: {
  accent: '#YOUR_ACCENT',
  bg: '#YOUR_BG',
  // optional: soft, deep, hover, panel
},
```

Then: `npm run sync:brand`

---

## Section B — Content (required every project)

Answer these before writing page copy. Use `{brand}`, `{game}`, `{antiCheat}`, `{email}`, `{primaryKeyword}`, `{checkout}` as placeholders — they resolve from `brand.ts`.

### B1. Identity

| Field | Your answer |
|-------|-------------|
| Public brand name | |
| Short name (nav, schema) | |
| Target game | |
| Anti-cheat name | |
| Canonical domain (no trailing slash) | `https://` |
| Support email | |
| Checkout URL | |
| Platform(s) | e.g. `Windows PC` |

### B2. Commerce

| Plan | Label | Price (USD) | Duration |
|------|-------|-------------|----------|
| Plan 1 | e.g. Monthly | | e.g. P30D |
| Plan 2 | e.g. Lifetime | | e.g. P99Y |

### B3. Keywords

| Field | Your answer |
|-------|-------------|
| Primary keyword | e.g. `{Game} cheats` |
| Keyword list (6–8 phrases) | 1. 2. 3. … |

### B4. Media assets

| Asset | Path (under `public/`) | Notes |
|-------|------------------------|-------|
| Logo (WebP) | `/images/…-logo.webp` | 512×512 recommended |
| Logo (PNG fallback) | `/images/…-logo.png` | |
| Hero poster / OG image | `/images/…-hero-poster.webp` | 1024×409 or similar wide |
| Hero video (optional) | `/videos/…-hero.mp4` | Leave empty string to use poster only |
| Gallery images (6) | `/images/…` | ESP, aimbot, radar, PvP, PvE, etc. |

Run `npm run generate:brand` after adding logo PNG to generate favicons.

### B5. SEO titles & descriptions (10 pages)

Keep the **structure**; swap game/brand words only.

| Page | Title (≤60 chars) | Description (≤160 chars) |
|------|-------------------|--------------------------|
| Home | | |
| Features | `{game} Cheat Features \| {brand}` | |
| Store / Pricing | `{game} Cheats Store \| {brand}` | |
| Status | `{game} Cheat Status \| {brand}` | |
| Preview / Cheats (money page) | | |
| Setup | `{game} Cheat Setup \| {brand}` | |
| Support | `{game} Cheat Support \| {brand}` | |
| FAQ | `{game} Cheats FAQ \| {brand}` | |
| Reviews | `{brand} Reviews \| Buyer Feedback` | |
| Blog | `{game} Intel \| {brand}` | |

### B6. UI copy (short labels)

| Field | Your answer |
|-------|-------------|
| Tagline | |
| Product summary (1–2 sentences) | |
| Hero lede (under H1) | |
| CTA buy button | e.g. `Get Access` |
| CTA buy short | e.g. `Buy` |
| Hero chips: ESP | e.g. `ESP / wallhack` |
| Hero chips: Aim | e.g. `Aimbot` |
| Hero chips: Radar | e.g. `Radar` |
| Hero chips: Updates | e.g. `Stream-proof` |
| Nav: Cheats (money page) | e.g. `Cheats` |
| Nav: Features | |
| Nav: Store | |
| Nav: Status | |
| Nav: Reviews | |
| Page intros (features, store, status, preview, setup, support, FAQ, reviews) | See `brand.copy.*` in `brand.ts` |

### B7. Page body content (EN)

Edit **`src/data/i18n/simple-pages.ts`** — keep the section **structure**, change game-specific words.

Each page follows this formula (locked):

```
Title + meta description (from brand.seo)
H1 (short nav label)
Intro (1–2 sentences)
2–4 sections: H2 + 1–2 paragraphs + bullet list
CTA primary (buy) + CTA secondary (optional link)
Gallery title + 3 images
```

Pages to customize:

- `features` — ESP, aimbot, radar, misc feature sections
- `pricing` — plan comparison sections
- `hacks` (money page `/d2-cheats/`) — product pitch sections
- `setup`, `support`, `faq`, `updates` (status)
- Pillar pages: `{game}-esp`, `{game}-aimbot`, `radar`, etc.

### B8. FAQs, reviews, and dense i18n (optional but recommended)

| File | What to edit |
|------|--------------|
| `src/data/site.ts` | FAQ questions/answers, review quotes, nav link labels |
| `src/data/i18n/content.generated.ts` | Full 22-locale content — regenerate via `npm run generate:i18n` |
| `scripts/i18n-data/pages-en.mjs` | Source for EN page generation |

---

## Section C — Locked design system (reusable, do not change)

These define the visual and structural template. Reuse as-is across all projects.

### C1. Typography

| Role | Font | Usage |
|------|------|-------|
| Body | Inter Variable | Paragraphs, nav, UI |
| Display | Syne Variable | H1, H2, section headings |

Self-hosted under `public/fonts/`. Loaded in `src/styles/fonts.css`.

### C2. Layout tokens (fixed)

Defined in `src/styles/global.css` — **never change per project**:

| Token | Value | Usage |
|-------|-------|-------|
| `--page-max` | `1240px` | Max content width |
| `--page-gutter` | `clamp(1rem, 4.2vw, 1.75rem)` | Horizontal padding |
| `--content-max` | `720px` | Prose/article width |
| `--section-space` | `4rem` | Section vertical rhythm |
| `--header-h` | `4rem` | Sticky navbar height |
| `--radius-sm/md/lg` | `8/12/16px` | Cards, buttons, media |
| `--radius-pill` | `999px` | Buy button, pills |
| `--touch-min` | `2.75rem` | Mobile tap targets |

Utility classes: `.shell`, `.section`, `.btn-buy`, `.card-panel`, `.g2a-*`

### C3. Page layouts (fixed structure)

#### Home (`LocalizedHome.astro`)

```
Navbar
└── Hero (video/image + headline + buy CTA + 4 feature chips)
    TrustBar / product strip
    HomeReviews (carousel)
    HomeAbout + HomeSeo (EN) / prose blocks (i18n)
SiteFooter
```

#### Inner pages (`PageLayout.astro` via `LocalizedPage.astro`)

```
Navbar
└── Banner (hero media + breadcrumbs + H1 + intro + CTAs)
    OR page__head (text-only header)
    Article (card-panel sections from simple-pages)
    Gallery (3 responsive images)
SiteFooter
```

#### Blog / Reviews / Guides

Same shell; content slots differ. See `BlogIndexPage.astro`, review pages, guide pages.

### C4. Component inventory (reusable)

All components consume CSS variables — no per-project styling needed.

| Component | Path | Role |
|-----------|------|------|
| Layout | `src/layouts/Layout.astro` | HTML shell, SEO, schema, theme injection |
| PageLayout | `src/layouts/PageLayout.astro` | Navbar + banner + article + gallery + footer |
| Navbar | `src/components/Navbar.astro` + `react/Navbar.tsx` | Sticky nav, lang switcher, buy CTA |
| Hero | `src/components/Hero.astro` + `react/Hero.tsx` | Home hero media + copy |
| SiteFooter | `src/components/SiteFooter.astro` + `react/SiteFooter.tsx` | 4-column footer |
| LocalizedHome | `src/components/LocalizedHome.astro` | Home page orchestrator |
| LocalizedPage | `src/components/LocalizedPage.astro` | All inner pages |
| HomeReviews | `src/components/HomeReviews.astro` | Review carousel |
| HomeSeo | `src/components/HomeSeo.astro` | FAQ accordion + SEO blocks |
| HomeAbout | `src/components/HomeAbout.astro` | About summary |
| TrustBar | `src/components/TrustBar.astro` | Status/delivery strip |
| ProductCard | `src/components/ProductCard.astro` | Pricing on home |
| Gallery | `src/components/Gallery.astro` | 3-up image grid |
| BreadcrumbBar | `src/components/BreadcrumbBar.astro` | Breadcrumb nav |
| PageRelatedLinks | `src/components/PageRelatedLinks.astro` | Internal link hub (EN) |

### C5. Navigation structure (fixed meanings)

| Nav item | Typical URL | pageId | Purpose |
|----------|-------------|--------|---------|
| Home | `/` | home | Landing |
| Cheats | `/d2-cheats/` (customize slug) | hacks | Money / product page |
| Features | `/features/` | features | Feature list |
| Store | `/pricing/` | pricing | Plans |
| Status | `/status/` | updates | Patch/undetected status |
| Reviews | `/reviews/` | — | Social proof |

Rename slugs per game in `src/data/site-paths.ts` and `src/data/i18n/routing.ts` — keep the **same nav meanings**.

### C6. Hero design (fixed)

- Wide cinematic bar (`aspect-ratio: 3.15/1` desktop; taller full-bleed on mobile)
- Video or poster background with left-to-right dark gradient veil
- White uppercase H1, muted lede, pill buy button (accent bg + deep price pill)
- 2×2 feature chip grid below CTA
- Video autoplay with muted inline script fallback (`Hero.astro`)

### C7. Color token map (auto-derived from accent + bg)

You only set `accent` and `bg`. The theme engine (`brand-theme.ts`) derives:

| CSS variable | Derived from |
|--------------|--------------|
| `--magenta`, `--accent` | accent |
| `--magenta-soft`, `--magenta-deep`, `--accent-hover` | accent tones |
| `--bg`, `--bg-panel`, `--bg-elevated`, `--bg-hover` | bg + accent mix |
| `--line`, `--line-soft`, `--line-strong` | accent + bg blend |
| `--ink`, `--ink-muted`, `--ink-faint` | bg luminance |
| `--ok`, `--warn` | fixed semantic greens/warns |
| Legacy aliases (`--g2a-*`, `--tone-*`, `--color-*`) | mapped to above |

### C8. SEO & schema (fixed structure)

| Element | Where | Locked behavior |
|---------|-------|-----------------|
| Title clamp | `site-core.ts` → `seoPageTitle()` | ≤60 chars |
| Description clamp | `brand.ts` → `seoDescription()` | ≤160 chars |
| JSON-LD graph | `Layout.astro` | WebPage, WebSite, Organization, BreadcrumbList |
| Product schema | Home + pricing + money page | Product + AggregateOffer + AggregateRating |
| FAQ schema | `/faq/` only | FAQPage with all items |
| Cannibal redirects | `seo-cannibal-map.ts` | Duplicate URLs → pillar pages |
| Sitemaps | `src/pages/sitemap*.xml.ts` | EN + 21 locales + images |
| Hreflang | `I18nHead.astro` | 22 locales |

### C9. i18n architecture (fixed)

- **22 locales:** en, es, fr, de, pt, it, nl, pl, ru, tr, ar, ja, ko, zh, hi, id, th, vi, uk, cs, ro, sv
- EN at root (`/features/`); others at `/{lang}/{localized-slug}/`
- Content in `content.generated.ts`; EN overrides in `simple-pages.ts`
- Regenerate: `npm run generate:i18n`

### C10. Build pipeline (fixed)

```bash
npm run sync:brand    # brand.ts → robots.txt, webmanifest, astro.config site
npm run build         # prebuild runs sync chain automatically
npm run build:validate # build + sitemap deep audit
npm run pages:deploy  # Cloudflare Pages
```

Sync chain (automatic on build):

1. `sync-brand.mjs`
2. `sync-en-redirects.mjs`
3. `sync-i18n-slug-redirects.mjs`
4. `sync-cannibal-redirects.mjs`
5. `strip-brand-studio.mjs` (postbuild — removes dev UI from dist)

---

## Section D — brand.ts starter scaffold

Copy this block into `src/data/brand.ts` and fill from Sections A + B.

```ts
export const brand = {
  name: 'YOUR BRAND NAME',
  shortName: 'SHORT',
  url: 'https://yourdomain.com',
  locale: 'en',
  market: 'Worldwide',
  supportEmail: 'support@yourdomain.com',
  checkoutUrl: 'https://your-checkout-url',

  game: 'YOUR GAME',
  antiCheat: 'ANTI-CHEAT NAME',

  logo: '/images/your-logo.webp',
  logoRaster: '/images/your-logo.png',
  logoRasterWidth: 512,
  logoRasterHeight: 512,
  logoAlt: 'Your Brand logo',
  defaultOgImage: '/images/your-hero-poster.webp',
  heroImage: '/images/your-hero-poster.webp',
  heroVideo: '/videos/your-hero.mp4', // or '' for poster only
  heroVideoPoster: '/images/your-hero-poster.webp',

  plans: [
    { id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
    { id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
  ] as const,
  currency: 'USD',
  platforms: ['Windows PC'] as const,

  theme: {
    accent: '#YOUR_ACCENT',
    bg: '#YOUR_BG',
    soft: '#AUTO_OR_OVERRIDE',
    deep: '#AUTO_OR_OVERRIDE',
    hover: '#AUTO_OR_OVERRIDE',
    panel: '#FFFFFF',
  },

  keywords: {
    primary: 'YOUR GAME cheats',
    list: [
      'YOUR GAME cheats',
      'YOUR GAME hacks',
      // … 6–8 total
    ] as const,
  },

  seo: {
    homeTitle: '…',
    homeDescription: '…',
    featuresTitle: '{game} Cheat Features | {brand}',
    featuresDescription: '…',
    storeTitle: '{game} Cheats Store | {brand}',
    storeDescription: '…',
    statusTitle: '{game} Cheat Status | {brand}',
    statusDescription: '…',
    previewTitle: '…',
    previewDescription: '…',
    setupTitle: '{game} Cheat Setup | {brand}',
    setupDescription: '…',
    supportTitle: '{game} Cheat Support | {brand}',
    supportDescription: '…',
    faqTitle: '{game} Cheats FAQ | {brand}',
    faqDescription: '…',
    reviewsTitle: '{brand} Reviews | Buyer Feedback',
    reviewsDescription: '…',
    blogTitle: '{game} Intel | {brand}',
    blogDescription: '…',
  },

  copy: {
    tagline: '…',
    summary: '…',
    heroLede: '…',
    blogLabel: 'YOUR GAME Intel',
    ctaBuy: 'Get Access',
    ctaBuyShort: 'Buy',
    featuresIntro: '…',
    storeIntro: '…',
    statusIntro: '…',
    previewIntro: '…',
    setupIntro: '…',
    supportIntro: '…',
    faqIntro: '…',
    reviewsIntro: '…',
    chipEsp: 'ESP / wallhack',
    chipAim: 'Aimbot',
    chipRadar: 'Radar',
    chipUpdates: 'Stream-proof',
    navPreview: 'Cheats',
    navFeatures: 'Features',
    navStore: 'Store',
    navStatus: 'Status',
    navReviews: 'Reviews',
  },

  sitemap: {
    contentLastmod: 'YYYY-MM-DD',
    blogImageTitle: '{brand} blog',
    blogImageCaption: 'Tips and updates for {primaryKeyword}',
    reviewsImageTitle: '{brand} reviews',
    reviewsImageCaption: 'What buyers say about {primaryKeyword}',
    images: [
      { src: '/images/…', title: '…', caption: '…' },
      // 6 gallery/sitemap images
    ],
  },
} as const;
```

---

## Section E — New project checklist

```
[ ] Section A complete — accent + bg chosen
[ ] Section B complete — identity, commerce, keywords, media, SEO, copy
[ ] brand.ts updated (or Brand Studio saved)
[ ] Images uploaded to public/images/ and public/videos/
[ ] simple-pages.ts updated with game-specific body copy
[ ] site.ts FAQs and reviews updated
[ ] npm run sync:brand
[ ] npm run build:validate passes
[ ] Deploy to Cloudflare Pages
[ ] Submit sitemap.xml in Search Console
```

---

## Section F — What never changes vs what always changes

| Always changes (Sections A + B) | Never changes (Section C) |
|---------------------------------|---------------------------|
| Accent + background colors | Typography (Inter + Syne) |
| Brand name, domain, email | Layout tokens and spacing |
| Game name, anti-cheat, keywords | Page structure and section order |
| Checkout URL and pricing | Component set and CSS class system |
| SEO titles/descriptions/copy | Hero layout and buy button design |
| Images and video paths | Nav meanings (Cheats/Features/Store/Status/Reviews) |
| FAQ/review content | Schema types and sitemap architecture |
| EN page body in simple-pages.ts | 22-locale routing system |
| | Build/sync pipeline |
| | Cannibal redirect logic |

---

## Quick reference — key file paths

| Purpose | Path |
|---------|------|
| **Color + content source of truth** | `src/data/brand.ts` |
| Theme derivation | `src/data/brand-theme.ts` |
| CSS defaults | `src/styles/global.css` |
| EN page bodies | `src/data/i18n/simple-pages.ts` |
| FAQs / reviews | `src/data/site.ts` |
| URL paths | `src/data/site-paths.ts` |
| i18n routing | `src/data/i18n/routing.ts` |
| SEO cannibal map | `src/data/seo-cannibal-map.ts` |
| Brand Studio (dev UI) | `src/pages/brand-studio/index.astro` |
| SEO playbook | `TEMPLATE-SEO.md` |

---

*Template version: 2026-09-14 · Based on destiny2cheats.org production codebase*
