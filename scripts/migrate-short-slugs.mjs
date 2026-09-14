#!/usr/bin/env node
/**
 * Migrate to short canonical URLs. Run once, then: npm run generate:i18n && node scripts/generate-blog-posts.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = path.join(ROOT, 'src/pages');

/** Core englishPaths OLD → NEW */
export const CORE_PATH_MAP = {
	'/overwatch-2-cheats-features/': '/features/',
	'/overwatch-2-cheats-pricing/': '/pricing/',
	'/overwatch-2-cheats-setup/': '/setup/',
	'/overwatch-2-cheats-status/': '/status/',
	'/overwatch-2-cheats-faq/': '/faq/',
	'/overwatch-2-cheats-support/': '/support/',
	'/overwatch-2-cheats-privacy/': '/privacy/',
	'/overwatch-2-cheats-refund/': '/refund/',
	'/overwatch-2-cheats-terms/': '/terms/',
	'/overwatch-2-cheats-blog/': '/blog/',
	'/overwatch-2-cheats-reviews/': '/reviews/',
	// Cannibal long paths → pillar directly (Phase 4 — no stub hop)
	'/undetected-overwatch-2-cheats/': '/overwatch-2-cheats/',
	'/overwatch-2-wallhack/': '/overwatch-2-wallhack/',
	'/ow2-cheats/': '/overwatch-2-cheats/',
	'/ow2-visuals/': '/overwatch-2-wallhack/',
	'/overwatch-2-anticheat-bypass/': '/status/',
	'/overwatch-2-cheats-2026/': '/overwatch-2-cheats/',
	'/overwatch-2-cheat-download/': '/setup/',
	'/overwatch-2-hero-scripts/': '/overwatch-2-cheats/',
	'/overwatch-2-aim-assist/': '/overwatch-2-aimbot/',
	'/best-overwatch-2-cheats/': '/overwatch-2-cheats/',
	'/overwatch-2-hero-scripts/': '/overwatch-2-cheats/',
	'/overwatch-2-aimbot-hack/': '/overwatch-2-aimbot/',
	'/overwatch-2-esp-hack/': '/overwatch-2-esp/',
};

/** Page directory renames under src/pages/ */
const DIR_MOVES = [
	['overwatch-2-cheats-features', 'features'],
	['overwatch-2-cheats-pricing', 'pricing'],
	['overwatch-2-cheats-setup', 'setup'],
	['overwatch-2-cheats-status', 'status'],
	['overwatch-2-cheats-support', 'support'],
	['overwatch-2-cheats-privacy', 'privacy'],
	['overwatch-2-cheats-refund', 'refund'],
	['overwatch-2-cheats-terms', 'terms'],
	['overwatch-2-cheats-faq', 'faq'],
	['overwatch-2-cheats-blog', 'blog'],
	['overwatch-2-cheats-reviews', 'reviews'],
	['overwatch-2-cheats', 'd2-cheats'],
	['undetected-overwatch-2-cheats', 'd2-undetected'],
	['overwatch-2-wallhack', 'd2-wallhack'],
	['overwatch-2-wallhack', 'd2-radar'],
	['overwatch-2-anticheat-bypass', 'd2-blizzard-anticheat'],
	['overwatch-2-cheats-2026', 'd2-cheats-2026'],
	['overwatch-2-cheat-download', 'd2-download'],
	['overwatch-2-hero-scripts', 'd2-crucible'],
	['overwatch-2-aim-assist', 'd2-aim-assist'],
	['overwatch-2-hero-scripts', 'd2-pve'],
	['best-overwatch-2-cheats', 'd2-best-cheats'],
];

/** FAQ slug OLD → NEW */
export const FAQ_SLUG_MAP = {
	'what-are-overwatch-2-cheats': 'what-are-overwatch-2-cheats',
	'are-overwatch-2-cheats-undetected-in-2026': 'undetected-in-2026',
	'crucible-trials-and-pve': 'quick-play-competitive-arcade',
	'quick-play-competitive-arcade': 'quick-play-competitive-arcade',
	'esp-wallhack-radar-or-aimbot': 'esp-wallhack-aimbot',
	'esp-radar-aimbot': 'esp-wallhack-aimbot',
	'how-are-licenses-delivered': 'license-delivery',
	'where-to-check-updates': 'check-updates',
	'how-to-contact-support': 'contact-support',
	'what-is-a-overwatch-2-wallhack': 'what-is-wallhack',
	'does-overwatch-2-cheats-include-radar-hack': 'hero-scripts-included',
	'radar-included': 'hero-scripts-included',
	'blizzard-anticheat-anti-cheat-and-overwatch-2-cheats': 'blizzard-anticheat-and-cheats',
	'blizzard-anticheat-and-cheats': 'blizzard-anticheat-and-cheats',
	'buy-undetected-overwatch-2-cheats-windows-pc': 'buy-undetected-pc',
};

/** Review slug OLD → NEW */
export const REVIEW_SLUG_MAP = {
	'overwatch-2-aim-assist-review-xkrypt0': 'aimbot-xkrypt0',
	'aim-assist-xkrypt0': 'aimbot-xkrypt0',
	'overwatch-2-esp-scav-run-review-buildsr4k': 'esp-control-buildsr4k',
	'esp-control-buildsr4k': 'esp-control-buildsr4k',
	'overwatch-2-update-review-dma-wizard': 'update-dma-wizard',
	'overwatch-2-aim-assist-review-ctrl-player99': 'flickbot-ctrl-player99',
	'aim-assist-ctrl-player99': 'flickbot-ctrl-player99',
	'overwatch-2-cheat-setup-review-stormchaser07': 'setup-stormchaser07',
	'overwatch-2-loot-esp-review-lootgoblinx': 'hero-esp-ulttrackerx',
	'loot-esp-lootgoblinx': 'hero-esp-ulttrackerx',
	'overwatch-2-aim-assist-raid-review-rankedgrind42': 'aimbot-competitive-rankedgrind42',
	'aimbot-competitive-rankedgrind42': 'aimbot-competitive-rankedgrind42',
	'overwatch-2-wallhack-review-vanlifeeft': 'wallhack-vanlifeow',
	'radar-vanlifeeft': 'wallhack-vanlifeow',
	'overwatch-2-anticheat-update-review-patchdaymike': 'patch-update-patchdaymike',
	'blizzard-anticheat-patchdaymike': 'patch-update-patchdaymike',
	'overwatch-2-sniper-aimbot-review-snipezonly': 'sniper-aim-snipezonly',
};

/** Blog slug OLD → NEW */
export const BLOG_SLUG_MAP = {
	'overwatch-2-patch-notes-guide': 'patch-notes',
	'overwatch-2-skin-leaks-guide': 'skin-leaks',
	'overwatch-2-weapon-tier-list': 'weapon-tier-list',
	'overwatch-2-pve-aggressive-strategies': 'pve-strategies',
	'overwatch-2-tournament-meta-guide': 'tournament-meta',
	'overwatch-2-loot-routes-guide': 'loot-routes',
	'overwatch-2-pro-settings-guide': 'pro-settings',
	'overwatch-2-warmup-maps-ranked': 'warmup-routine',
	'overwatch-2-cheats-complete-guide-2026': 'cheats-guide-2026',
	'overwatch-2-cheats-buyers-guide': 'buyers-guide',
	'overwatch-2-cheats-2026-whats-new': 'cheats-2026-updates',
	'overwatch-2-aimbot-settings-guide': 'aimbot-settings',
	'overwatch-2-esp-wallhack-explained': 'esp-wallhack',
	'undetected-overwatch-2-cheats-blizzard-anticheat': 'undetected-blizzard-anticheat',
	'undetected-easy-anticheat': 'undetected-blizzard-anticheat',
	'overwatch-2-cheats-vs-cheatvault-comparison': 'vs-budget-shops',
	'elitefn-vs-overwatch-2-cheats-two-week-test': 'two-week-cheat-test',
	'overwatch-2-cheats-vs-ghostware-features-pricing': 'full-stack-vs-esp-only',
};

function applyPathMap(text) {
	let out = text;
	// Longest paths first
	const entries = Object.entries(CORE_PATH_MAP).sort((a, b) => b[0].length - a[0].length);
	for (const [from, to] of entries) {
		out = out.split(from).join(to);
		const fromNoTrail = from.replace(/\/$/, '');
		const toNoTrail = to.replace(/\/$/, '');
		if (fromNoTrail !== from) {
			out = out.split(fromNoTrail).join(toNoTrail);
		}
	}
	return out;
}

function applySlugMaps(text, maps) {
	let out = text;
	for (const [from, to] of Object.entries(maps)) {
		out = out.replaceAll(from, to);
	}
	return out;
}

function patchFile(relPath, transform) {
	const abs = path.join(ROOT, relPath);
	if (!existsSync(abs)) return;
	const before = readFileSync(abs, 'utf8');
	const after = transform(before);
	if (after !== before) {
		writeFileSync(abs, after, 'utf8');
		console.log(`patched ${relPath}`);
	}
}

function updateRouting() {
	const abs = path.join(ROOT, 'src/data/i18n/routing.ts');
	let src = readFileSync(abs, 'utf8');
	const replacements = {
		"features: '/overwatch-2-cheats-features/'": "features: '/features/'",
		"pricing: '/overwatch-2-cheats-pricing/'": "pricing: '/pricing/'",
		"setup: '/overwatch-2-cheats-setup/'": "setup: '/setup/'",
		"updates: '/overwatch-2-cheats-status/'": "updates: '/status/'",
		"faq: '/overwatch-2-cheats-faq/'": "faq: '/faq/'",
		"support: '/overwatch-2-cheats-support/'": "support: '/support/'",
		"undetected: '/undetected-overwatch-2-cheats/'": "undetected: '/overwatch-2-cheats/'",
		"wallhack: '/overwatch-2-wallhack/'": "wallhack: '/overwatch-2-wallhack/'",
		"radar: '/overwatch-2-wallhack/'": "radar: '/overwatch-2-wallhack/'",
		"'anticheat': '/overwatch-2-anticheat-bypass/'": "'anticheat': '/status/'",
		"'cheats-2026': '/overwatch-2-cheats-2026/'": "'cheats-2026': '/overwatch-2-cheats/'",
		"hacks: '/overwatch-2-cheats/'": "hacks: '/overwatch-2-cheats/'",
		"'cheat-download': '/overwatch-2-cheat-download/'": "'cheat-download': '/setup/'",
		"'crucible-cheats': '/overwatch-2-hero-scripts/'": "'crucible-cheats': '/overwatch-2-cheats/'",
		"'aim-assist': '/overwatch-2-aim-assist/'": "'aim-assist': '/overwatch-2-aimbot/'",
		"'best-cheats': '/best-overwatch-2-cheats/'": "'best-cheats': '/overwatch-2-cheats/'",
		"'pve-cheats': '/overwatch-2-hero-scripts/'": "'pve-cheats': '/overwatch-2-cheats/'",
		"privacy: '/overwatch-2-cheats-privacy/'": "privacy: '/privacy/'",
		"refund: '/overwatch-2-cheats-refund/'": "refund: '/refund/'",
		"terms: '/overwatch-2-cheats-terms/'": "terms: '/terms/'",
	};
	for (const [from, to] of Object.entries(replacements)) {
		src = src.split(from).join(to);
	}
	src = applyPathMap(src);
	writeFileSync(abs, src, 'utf8');
	console.log('patched routing.ts');
}

function movePageDirs() {
	for (const [from, to] of DIR_MOVES) {
		const fromPath = path.join(PAGES, from);
		const toPath = path.join(PAGES, to);
		if (!existsSync(fromPath)) continue;
		if (existsSync(toPath)) {
			console.warn(`skip move ${from} → ${to} (target exists)`);
			continue;
		}
		renameSync(fromPath, toPath);
		console.log(`moved pages/${from} → pages/${to}`);
	}
}

function generateRedirectsBlock() {
	const lines = [
		'# Long SEO paths → short canonical URLs (scripts/migrate-short-slugs.mjs)',
	];
	for (const [from, to] of Object.entries(CORE_PATH_MAP)) {
		const fromBare = from.replace(/\/$/, '');
		lines.push(`${fromBare} ${to} 301`);
		lines.push(`${from} ${to} 301`);
	}
	for (const [from, to] of Object.entries(FAQ_SLUG_MAP)) {
		lines.push(`/overwatch-2-cheats-faq/${from} /faq/${to}/ 301`);
		lines.push(`/overwatch-2-cheats-faq/${from}/ /faq/${to}/ 301`);
		lines.push(`/faq/${from} /faq/${to}/ 301`);
		lines.push(`/faq/${from}/ /faq/${to}/ 301`);
	}
	for (const [from, to] of Object.entries(REVIEW_SLUG_MAP)) {
		lines.push(`/overwatch-2-cheats-reviews/${from} /reviews/${to}/ 301`);
		lines.push(`/overwatch-2-cheats-reviews/${from}/ /reviews/${to}/ 301`);
		lines.push(`/reviews/${from} /reviews/${to}/ 301`);
		lines.push(`/reviews/${from}/ /reviews/${to}/ 301`);
	}
	for (const [from, to] of Object.entries(BLOG_SLUG_MAP)) {
		lines.push(`/overwatch-2-cheats-blog/${from} /blog/${to}/ 301`);
		lines.push(`/overwatch-2-cheats-blog/${from}/ /blog/${to}/ 301`);
	}
	// Legacy blog slugs
	const legacyBlog = [
		['escape-from-overwatch-2-cheats-buyers-guide', 'buyers-guide'],
		['overwatch-2-scav-run-aggressive-strategies', 'pve-strategies'],
		['overwatch-2-Arcade-aggressive-strategies', 'pve-strategies'],
	];
	for (const [from, to] of legacyBlog) {
		lines.push(`/overwatch-2-cheats-blog/${from} /blog/${to}/ 301`);
		lines.push(`/overwatch-2-cheats-blog/${from}/ /blog/${to}/ 301`);
		lines.push(`/blog/${from} /blog/${to}/ 301`);
		lines.push(`/blog/${from}/ /blog/${to}/ 301`);
	}
	return lines.join('\n');
}

function updateRedirects() {
	const abs = path.join(ROOT, 'public/_redirects');
	let content = readFileSync(abs, 'utf8');

	// Remove old short→long block (lines 12-39 area)
	content = content.replace(
		/# Legacy short slugs → SEO keyword paths \(EN\)[\s\S]*?(?=# Legacy sitemap|# Exact-match|# Broken review|# Auto-generated cannibal|# Renamed blog|# Long SEO)/,
		'',
	);

	const marker = '# Long SEO paths → short canonical URLs';
	if (content.includes(marker)) {
		const start = content.indexOf(marker);
		const next = content.indexOf('\n# ', start + 1);
		content = content.slice(0, start) + (next > start ? content.slice(next + 1) : '');
	}

	const block = generateRedirectsBlock();
	content = content.trimEnd() + '\n\n' + block + '\n';
	writeFileSync(abs, content, 'utf8');
	console.log('updated _redirects');
}

function updateMiddleware() {
	const abs = path.join(ROOT, 'functions/_middleware.js');
	let src = readFileSync(abs, 'utf8');
	src = applyPathMap(src);
	// Cannibal targets use new short paths
	const cannibal = {
		"'/escape-from-overwatch-2-cheats'": "'/d2-cheats'",
		"'/escape-from-overwatch-2-cheats/'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-cheats-2026'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-cheats-2026/'": "'/overwatch-2-cheats/'",
		"'/undetected-overwatch-2-cheats'": "'/overwatch-2-cheats/'",
		"'/undetected-overwatch-2-cheats/'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-hero-scripts'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-hero-scripts/'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-hero-scripts'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-hero-scripts/'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-aim-assist'": "'/overwatch-2-aimbot/'",
		"'/overwatch-2-aim-assist/'": "'/overwatch-2-aimbot/'",
		"'/overwatch-2-cheat-download'": "'/setup/'",
		"'/overwatch-2-cheat-download/'": "'/setup/'",
		"'/overwatch-2-anticheat-bypass'": "'/status/'",
		"'/overwatch-2-anticheat-bypass/'": "'/status/'",
		"'/best-overwatch-2-cheats'": "'/overwatch-2-cheats/'",
		"'/best-overwatch-2-cheats/'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-cheats'": "'/overwatch-2-cheats/'",
		"'/overwatch-2-cheats/'": "'/overwatch-2-cheats/'",
		"'/warzone-cheats'": "'/overwatch-2-cheats/'",
		"'/warzone-cheats/'": "'/overwatch-2-cheats/'",
		"'/warzone-hacks'": "'/overwatch-2-cheats/'",
		"'/warzone-hacks/'": "'/overwatch-2-cheats/'",
		"'/fortnite-hacks'": "'/overwatch-2-cheats/'",
		"'/fortnite-hacks/'": "'/overwatch-2-cheats/'",
		"'/ricochet-bypass'": "'/status/'",
		"'/ricochet-bypass/'": "'/status/'",
		"'/eac-bypass'": "'/status/'",
		"'/eac-bypass/'": "'/status/'",
	};
	for (const [from, to] of Object.entries(cannibal)) {
		src = src.split(from).join(to);
	}
	writeFileSync(abs, src, 'utf8');
	console.log('patched middleware');
}

function updateValidateSitemaps() {
	const abs = path.join(ROOT, 'scripts/validate-sitemaps.mjs');
	let src = readFileSync(abs, 'utf8');
	src = applyPathMap(src);
	src = applySlugMaps(src, FAQ_SLUG_MAP);
	src = applySlugMaps(src, REVIEW_SLUG_MAP);
	src = applySlugMaps(src, BLOG_SLUG_MAP);
	// REDIRECT_ONLY_PATHS
	src = src.replace('/undetected-overwatch-2-cheats/', '/overwatch-2-cheats/');
	src = src.replace('/overwatch-2-wallhack/', '/overwatch-2-wallhack/');
	src = src.replace('/overwatch-2-wallhack/', '/overwatch-2-wallhack/');
	src = src.replace('/overwatch-2-anticheat-bypass/', '/status/');
	src = src.replace('/overwatch-2-cheats-2026/', '/overwatch-2-cheats/');
	src = src.replace('/overwatch-2-cheats/', '/overwatch-2-cheats/');
	src = src.replace('/overwatch-2-cheat-download/', '/setup/');
	src = src.replace('/overwatch-2-hero-scripts/', '/overwatch-2-cheats/');
	src = src.replace('/overwatch-2-aim-assist/', '/overwatch-2-aimbot/');
	src = src.replace('/overwatch-2-hero-scripts/', '/overwatch-2-cheats/');
	writeFileSync(abs, src, 'utf8');
	console.log('patched validate-sitemaps.mjs');
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (!isMain) {
	// Exported maps only — skip side effects when imported
} else {
// --- Run migration ---
updateRouting();

patchFile('src/data/faq.ts', (s) => s.replace("faqBasePath = '/overwatch-2-cheats-faq/'", "faqBasePath = '/faq/'"));
patchFile('src/data/reviews.ts', (s) => s.replace("reviewsBasePath = '/overwatch-2-cheats-reviews/'", "reviewsBasePath = '/reviews/'"));
patchFile('src/data/blog/helpers.ts', (s) =>
	s.replace("return locale === defaultLocale ? '/overwatch-2-cheats-blog/' : `/${locale}/blog/`", "return locale === defaultLocale ? '/blog/' : `/${locale}/blog/`"),
);

patchFile('src/data/site.ts', (s) => applySlugMaps(applyPathMap(s), { ...FAQ_SLUG_MAP, ...REVIEW_SLUG_MAP }));

for (const rel of [
	'scripts/generate-blog-posts.mjs',
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/clean-destiny-copy.mjs',
	'scripts/site-quality-pass.mjs',
	'src/data/page-related-links.ts',
	'src/data/guides/native-guides.ts',
	'src/components/LocalizedHome.astro',
	'src/pages/[lang]/blog/index.astro',
	'src/pages/[lang]/blog/[slug]/index.astro',
	'src/pages/overwatch-2-cheats-faq/[slug]/index.astro',
	'src/pages/overwatch-2-cheats-reviews/[slug]/index.astro',
]) {
	patchFile(rel, (s) => applySlugMaps(applyPathMap(s), { ...FAQ_SLUG_MAP, ...REVIEW_SLUG_MAP, ...BLOG_SLUG_MAP }));
}

// Blog slug fields in generate-blog-posts
patchFile('scripts/generate-blog-posts.mjs', (s) => {
	let out = s;
	for (const [from, to] of Object.entries(BLOG_SLUG_MAP)) {
		out = out.replaceAll(`slug: '${from}'`, `slug: '${to}'`);
	}
	return out;
});

movePageDirs();
updateRedirects();
updateMiddleware();
updateValidateSitemaps();

	console.log('migrate-short-slugs complete — run: npm run generate:i18n && node scripts/generate-blog-posts.mjs && npm run sync:brand && npm run build');
}
