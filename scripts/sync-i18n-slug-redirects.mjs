#!/usr/bin/env node
/**
 * 301s for renamed i18n slugs (escape-from-destiny-2-cheats-* → destiny-2-cheats-*).
 * Run after routing.ts slug cleanup; wired into prebuild.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const REDIRECTS = path.join(ROOT, 'public/_redirects');

/** Reverse Phase 2 slug rename for redirect source paths. */
function legacySlug(slug) {
	if (!slug || slug.includes('escape-from-destiny-2-cheats')) return null;
	if (slug === 'destiny-2-cheats' || slug === 'destiny-2-cheats-2026') return null;

	const prefixes = [
		['unentdeckte-destiny-2-cheats', 'unentdeckte-escape-from-destiny-2-cheats'],
		['beste-destiny-2-cheats', 'beste-escape-from-destiny-2-cheats'],
		['nejlepsi-destiny-2-cheats', 'nejlepsi-escape-from-destiny-2-cheats'],
		['basta-destiny-2-cheats', 'basta-escape-from-destiny-2-cheats'],
	];
	for (const [next, prev] of prefixes) {
		if (slug === next || slug.startsWith(`${next}-`)) {
			return slug.replace(next, prev);
		}
	}
	if (slug.includes('destiny-2-cheats')) {
		return slug.replace('destiny-2-cheats', 'escape-from-destiny-2-cheats');
	}
	return null;
}

function extractLocalizedSlugs(src) {
	const block = src.match(/export const localizedSlugs[\s\S]*?= \{([\s\S]*?)\n\};/);
	if (!block) throw new Error('localizedSlugs block not found');
	const slugs = [];
	for (const page of block[1].matchAll(/\t(\w+|-\w+):\s*\{([\s\S]*?)\n\t\},/g)) {
		const pageId = page[1].replace(/^'|'$/g, '');
		for (const row of page[2].matchAll(/(\w+):\s*'([^']+)'/g)) {
			slugs.push({ pageId, locale: row[1], slug: row[2] });
		}
	}
	return slugs;
}

const routing = readFileSync(ROUTING, 'utf8');
const lines = [
	'',
	'# i18n slug migrations — escape-from-destiny-2-cheats → destiny-2-cheats (scripts/sync-i18n-slug-redirects.mjs)',
	'# Do not edit by hand — regenerated on sync:brand / prebuild',
];

for (const { locale, slug } of extractLocalizedSlugs(routing)) {
	if (locale === 'en') continue;
	const oldSlug = legacySlug(slug);
	if (!oldSlug || oldSlug === slug) continue;
	const fromBase = `/${locale}/${oldSlug}`;
	const toPath = `/${locale}/${slug}/`;
	lines.push(`${fromBase} ${toPath} 301`);
	lines.push(`${fromBase}/ ${toPath} 301`);
}

const MARKER = '# i18n slug migrations — escape-from-destiny-2-cheats';
let redirects = readFileSync(REDIRECTS, 'utf8');
const start = redirects.indexOf(MARKER);
if (start >= 0) {
	const localeStart = redirects.indexOf('\n# Auto-generated cannibal locale redirects', start);
	const end = localeStart >= 0 ? localeStart : redirects.length;
	redirects = redirects.slice(0, start).trimEnd() + redirects.slice(end);
}

const insertAt = redirects.indexOf('# Auto-generated cannibal locale redirects');
if (insertAt >= 0) {
	redirects =
		redirects.slice(0, insertAt).trimEnd() + `${lines.join('\n')}\n\n` + redirects.slice(insertAt);
} else {
	redirects = `${redirects.trimEnd()}${lines.join('\n')}\n`;
}

writeFileSync(REDIRECTS, redirects.endsWith('\n') ? redirects : `${redirects}\n`);
console.log(`Synced ${(lines.length - 4) / 2} i18n slug migration redirect pairs`);
