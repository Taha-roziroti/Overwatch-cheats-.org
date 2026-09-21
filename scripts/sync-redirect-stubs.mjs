#!/usr/bin/env node
/**
 * Edge-only 301 rules for routes that previously emitted Astro redirect stub HTML.
 * Keeps /blog/* and /{locale}/forum/* off the crawlable HTML graph.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REDIRECTS = path.join(ROOT, 'public/_redirects');

const MARKER = '# Redirect stub catch-alls (scripts/sync-redirect-stubs.mjs)';

/** Non-EN locale codes — keep in sync with src/data/i18n/locales.ts */
const LOCALE_CODES = [
	'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ar', 'ja', 'ko', 'zh',
	'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

function buildBlock() {
	const lines = [
		MARKER,
		'# Do not edit by hand — regenerated on sync:brand / prebuild',
		'/blog/ /forum/ 301',
		'/blog/* /forum/:splat 301',
	];
	for (const lang of LOCALE_CODES) {
		lines.push(`/${lang}/forum/ /forum/ 301`);
		lines.push(`/${lang}/forum/* /forum/:splat 301`);
	}
	lines.push('');
	return lines.join('\n');
}

let content = readFileSync(REDIRECTS, 'utf8');
const start = content.indexOf(MARKER);
const block = buildBlock();
if (start >= 0) {
	const end = content.indexOf('\n#', start + MARKER.length);
	const sliceEnd = end >= 0 ? end + 1 : content.length;
	content = content.slice(0, start) + block + content.slice(sliceEnd);
} else {
	const hostMarker = '# Canonical host redirects';
	const insertAt = content.indexOf(hostMarker);
	const pos = insertAt >= 0 ? content.indexOf('\n#', insertAt + hostMarker.length) : -1;
	const sliceEnd = pos >= 0 ? pos + 1 : content.length;
	content = content.slice(0, sliceEnd) + block + content.slice(sliceEnd);
}

writeFileSync(REDIRECTS, content.endsWith('\n') ? content : `${content}\n`);
console.log(`Synced redirect stub catch-alls (${LOCALE_CODES.length} locale forum prefixes + /blog/*)`);
