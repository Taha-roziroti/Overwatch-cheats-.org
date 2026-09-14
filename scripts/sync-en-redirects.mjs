#!/usr/bin/env node
/**
 * Sync EN infrastructure redirects into public/_redirects:
 * - Legacy Tarkov/Fortnite/Warzone paths → current short canonical URLs
 * - EN cannibal stub pages → pillar pages
 * - Long SEO paths → short canonical URLs (slug migration)
 * - FAQ / review / blog slug migrations
 *
 * Run: node scripts/sync-en-redirects.mjs
 * Wired into prebuild alongside sync-cannibal-redirects.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	BLOG_SLUG_MAP,
	CORE_PATH_MAP,
	FAQ_SLUG_MAP,
	REVIEW_SLUG_MAP,
} from './migrate-short-slugs.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REDIRECTS = path.join(ROOT, 'public/_redirects');

/** EN cannibal stubs → pillar (matches functions/_middleware.js + seo-cannibal-map.ts). */
const EN_CANNIBAL = {
	'/blog/': '/forum/',
	'/overwatch-2-undetected/': '/overwatch-2-cheats/',
	'/overwatch-2-cheats-2026/': '/overwatch-2-cheats/',
	'/d2-best-cheats/': '/overwatch-2-cheats/',
	'/overwatch-2-aimbot-hack/': '/overwatch-2-aimbot/',
	'/overwatch-2-esp-hack/': '/overwatch-2-esp/',
	'/overwatch-2-aim-assist/': '/overwatch-2-aimbot/',
	'/overwatch-2-visuals/': '/overwatch-2-wallhack/',
	'/ow2-cheats/': '/overwatch-2-cheats/',
	'/ow2-visuals/': '/overwatch-2-wallhack/',
	'/ow2-undetected/': '/overwatch-2-cheats/',
};

/** Legacy cross-game keyword paths → D2 pillars. */
const LEGACY_GAME = {
	'/escape-from-tarkov-cheats/': '/overwatch-2-cheats/',
	'/tarkov-esp-hack/': '/overwatch-2-esp/',
	'/tarkov-aimbot-hack/': '/overwatch-2-aimbot/',
	'/best-tarkov-cheats/': '/overwatch-2-cheats/',
	'/tarkov-cheats-2026/': '/overwatch-2-cheats/',
	'/undetected-tarkov-cheats/': '/overwatch-2-cheats/',
	'/tarkov-mod-menu/': '/overwatch-2-cheats/',
	'/tarkov-unlock-all/': '/overwatch-2-cheats/',
	'/tarkov-soft-aim/': '/overwatch-2-aimbot/',
	'/tarkov-wallhack/': '/overwatch-2-esp/',
	'/tarkov-cheat-download/': '/setup/',
	'/easy-anticheat-bypass/': '/status/',
	'/warzone-esp/': '/overwatch-2-esp/',
	'/warzone-aimbot/': '/overwatch-2-aimbot/',
	'/fortnite-aimbot/': '/overwatch-2-aimbot/',
	'/fortnite-esp/': '/overwatch-2-esp/',
	'/eac-bypass-fortnite/': '/status/',
};

/** Broken review slugs from prior game templates. */
const LEGACY_REVIEWS = {
	'/reviews/tarkov-radar-hack-review-vanlifefn/': '/reviews/radar-vanlifeeft/',
	'/reviews/tarkov-radar-hack-review-vanlifewz/': '/reviews/radar-vanlifeeft/',
	'/reviews/tarkov-controller-soft-aim-review-ctrl-player99/': '/reviews/aim-assist-ctrl-player99/',
	'/reviews/overwatch-2-esp-zero-build-review-buildsr4k/': '/reviews/esp-dungeon-buildsr4k/',
	'/reviews/d2-radar-review-vanlifefn/': '/reviews/radar-vanlifeeft/',
	'/reviews/d2-radar-review-vanlifewz/': '/reviews/radar-vanlifeeft/',
	'/reviews/destiny-2-controller-aim-assist-review-ctrl-player99/': '/reviews/aim-assist-ctrl-player99/',
};

/** Legacy Fortnite blog slugs → current short forum threads. */
const LEGACY_BLOG = {
	'/blog/patch-notes-buffs-nerfs-vaults/': '/forum/patch-notes/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/forum/skin-leaks/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/forum/weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies/': '/forum/pve-strategies/',
	'/blog/fncs-meta-watch-tournament-drops/': '/forum/tournament-meta/',
	'/blog/secret-loot-routes-full-gold/': '/forum/map-control/',
	'/blog/bugha-settings-pro-setup/': '/forum/pro-settings/',
	'/blog/creative-warmup-maps-pros-use/': '/forum/warmup-routine/',
};

function pairLines(from, to) {
	const bare = from.replace(/\/$/, '');
	return [`${bare} ${to} 301`, `${from} ${to} 301`];
}

function mapToLines(map, comment) {
	const lines = [comment];
	const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length);
	for (const [from, to] of entries) {
		lines.push(...pairLines(from, to));
	}
	return lines;
}

function longPathLines() {
	const lines = ['# Long SEO paths → short canonical URLs (scripts/sync-en-redirects.mjs)'];
	const entries = Object.entries(CORE_PATH_MAP).sort((a, b) => b[0].length - a[0].length);
	for (const [from, to] of entries) {
		lines.push(...pairLines(from, to));
	}
	for (const [from, to] of Object.entries(FAQ_SLUG_MAP)) {
		lines.push(...pairLines(`/overwatch-2-cheats-faq/${from}/`, `/faq/${to}/`));
		lines.push(...pairLines(`/faq/${from}/`, `/faq/${to}/`));
	}
	for (const [from, to] of Object.entries(REVIEW_SLUG_MAP)) {
		lines.push(...pairLines(`/overwatch-2-cheats-reviews/${from}/`, `/reviews/${to}/`));
		lines.push(...pairLines(`/reviews/${from}/`, `/reviews/${to}/`));
	}
	for (const [from, to] of Object.entries(BLOG_SLUG_MAP)) {
		lines.push(...pairLines(`/overwatch-2-cheats-blog/${from}/`, `/forum/${to}/`));
	}
	const legacyBlog = [
		['escape-from-overwatch-2-cheats-buyers-guide', 'buyers-guide'],
		['destiny-2-scav-run-aggressive-strategies', 'pve-strategies'],
		['destiny-2-PvE-aggressive-strategies', 'pve-strategies'],
	];
	for (const [from, to] of legacyBlog) {
		lines.push(...pairLines(`/overwatch-2-cheats-blog/${from}/`, `/forum/${to}/`));
		lines.push(...pairLines(`/blog/${from}/`, `/forum/${to}/`));
	}
	return lines;
}

function buildEnBlock() {
	return [
		'',
		'# EN infrastructure redirects (scripts/sync-en-redirects.mjs)',
		'# Do not edit by hand — regenerated on sync:brand / prebuild',
		...mapToLines(LEGACY_GAME, '# Legacy Tarkov / Fortnite / Warzone keyword paths'),
		...mapToLines(LEGACY_REVIEWS, '# Legacy review slug fixes'),
		...mapToLines(LEGACY_BLOG, '# Legacy Fortnite blog slugs → D2 posts'),
		...mapToLines(EN_CANNIBAL, '# EN cannibal stub pages → pillar pages'),
		...longPathLines(),
		'',
	].join('\n');
}

const MARKER_START = '# EN infrastructure redirects';
const MARKER_LOCALE = '# Auto-generated cannibal locale redirects';

let content = readFileSync(REDIRECTS, 'utf8');

// Remove old hand-maintained blocks superseded by this script
content = content.replace(
	/# Exact-match keyword \+ cannibalization → canonical EN landings[\s\S]*?(?=# Broken review|# Auto-generated cannibal|# EN infrastructure)/,
	'',
);
content = content.replace(
	/# Broken review slug fixes[\s\S]*?(?=# Auto-generated cannibal|# EN infrastructure)/,
	'',
);
content = content.replace(
	/# Long SEO paths → short canonical URLs[\s\S]*?(?=# Auto-generated cannibal|# EN infrastructure)/,
	'',
);

const enStart = content.indexOf(MARKER_START);
if (enStart >= 0) {
	const localeStart = content.indexOf(MARKER_LOCALE, enStart);
	const end = localeStart >= 0 ? content.lastIndexOf('\n', localeStart) : content.length;
	content = content.slice(0, enStart).trimEnd() + content.slice(end);
}

const localeStart = content.indexOf(MARKER_LOCALE);
if (localeStart >= 0) {
	const lineStart = content.lastIndexOf('\n', localeStart);
	content = content.slice(0, lineStart >= 0 ? lineStart : localeStart).trimEnd() + buildEnBlock() + content.slice(lineStart >= 0 ? lineStart : localeStart);
} else {
	content = content.trimEnd() + buildEnBlock();
}

writeFileSync(REDIRECTS, content.endsWith('\n') ? content : `${content}\n`);

/** Fail prebuild if a long path 301s to a stub that also 301s (two-hop chain). */
function assertNoTwoHopChains(redirectText) {
	const rules = new Map();
	for (const line of redirectText.split('\n')) {
		const m = line.match(/^(\/\S+)\s+(\/\S+)\s+301$/);
		if (m) rules.set(m[1], m[2]);
	}
	const stubTargets = new Set(Object.keys(EN_CANNIBAL));
	const violations = [];
	for (const [from, to] of rules) {
		if (!stubTargets.has(to)) continue;
		const final = rules.get(to);
		if (final && final !== to) {
			violations.push(`${from} → ${to} → ${final}`);
		}
	}
	if (violations.length) {
		console.error('Two-hop redirect chains detected (long → stub → pillar):');
		for (const v of violations) console.error(`  ${v}`);
		process.exit(1);
	}
}

assertNoTwoHopChains(readFileSync(REDIRECTS, 'utf8'));

/** Fail if Pages middleware PATH_REDIRECTS maps any path to itself (infinite loop). */
function assertNoMiddlewareSelfRedirects() {
	const mw = readFileSync(path.join(ROOT, 'functions/_middleware.js'), 'utf8');
	const block = mw.match(/const PATH_REDIRECTS = \{([\s\S]*?)\};/);
	if (!block) return;
	const violations = [];
	for (const m of block[1].matchAll(/'([^']+)':\s*'([^']+)'/g)) {
		if (m[1] === m[2]) violations.push(m[1]);
	}
	if (violations.length) {
		console.error('Middleware self-redirect loops detected (PATH_REDIRECTS):');
		for (const v of violations) console.error(`  ${v} → ${v}`);
		process.exit(1);
	}
}

assertNoMiddlewareSelfRedirects();

const enCount =
	Object.keys(LEGACY_GAME).length +
	Object.keys(LEGACY_REVIEWS).length +
	Object.keys(LEGACY_BLOG).length +
	Object.keys(EN_CANNIBAL).length +
	Object.keys(CORE_PATH_MAP).length;
console.log(`Synced EN infrastructure redirects (~${enCount * 2} rules before slug pairs)`);
