#!/usr/bin/env node
/**
 * Redirect rules required for SEO Super Booster (host + retired paths).
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

const SITE_URL = readBrandUrl();
const HOST = SITE_URL.replace(/^https?:\/\//, '');
const failures = [];

function requirePattern(text, pattern, label) {
	if (!pattern.test(text)) failures.push(label);
}

const redirects = readFileSync(path.join(ROOT, 'public/_redirects'), 'utf8');
requirePattern(
	redirects,
	new RegExp(`https://www\\.${HOST.replace(/\./g, '\\.')}/*`),
	`public/_redirects must 301 www.${HOST} → apex`,
);
requirePattern(
	redirects,
	/\/affiliate-disclosure\/?\s+\/privacy\/?\s+301/i,
	'public/_redirects must 301 /affiliate-disclosure/ → /privacy/',
);

try {
	const middleware = readFileSync(path.join(ROOT, 'functions/_middleware.js'), 'utf8');
	if (!middleware.includes('www')) {
		failures.push('functions/_middleware.js should enforce www → apex');
	}
} catch {
	failures.push('functions/_middleware.js missing');
}

if (failures.length) {
	console.error('Redirect verification failed:\n');
	for (const f of failures) console.error(`  ✗ ${f}`);
	process.exit(1);
}
console.log('Redirect verification passed.');
