#!/usr/bin/env node
/**
 * Full sitewide SEO audit on built HTML — duplicate meta, stuffing, anchors, canonical host.
 * Run: npm run build && node scripts/audit-seo-sitewide.mjs
 */
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

const CANONICAL_ORIGIN = readBrandUrl();
const APEX = CANONICAL_ORIGIN.replace(/^https?:\/\//, '');

async function resolveDist() {
	for (const dir of [path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'client')]) {
		try {
			await access(path.join(dir, 'index.html'));
			return dir;
		} catch {
			/* next */
		}
	}
	throw new Error('dist/index.html missing — run npm run build first');
}

async function walkHtml(dir, base = dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await walkHtml(full, base)));
		} else if (entry.name === 'index.html' || entry.name.endsWith('.html')) {
			files.push(path.relative(base, full));
		}
	}
	return files;
}

function stripTags(html) {
	return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractAnchors(html) {
	const anchors = [];
	for (const m of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
		const text = stripTags(m[2]);
		if (text) anchors.push({ href: m[1], text });
	}
	return anchors;
}

const issues = [];
const warn = (file, kind, detail) => issues.push({ severity: 'warn', file, kind, detail });
const error = (file, kind, detail) => issues.push({ severity: 'error', file, kind, detail });

async function main() {
	const DIST = await resolveDist();
	console.log(`Sitewide SEO audit (${path.relative(ROOT, DIST)})\n`);

	const htmlFiles = await walkHtml(DIST);
	const titles = new Map();
	const descriptions = new Map();
	const h1s = new Map();

	const LOCALE_CODES = new Set([
		'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ar', 'ja', 'ko', 'zh',
		'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
	]);

	function localeKey(relPath) {
		const seg = relPath.split('/')[0];
		return LOCALE_CODES.has(seg) ? seg : 'en';
	}

	for (const rel of htmlFiles) {
		const file = path.join(DIST, rel);
		const html = await readFile(file, 'utf8');
		const locale = localeKey(rel);

		const isRedirectStub =
			/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html) &&
			/<meta[^>]+http-equiv=["']refresh["']/i.test(html);
		if (isRedirectStub) continue;

		const titleM = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
		const title = titleM ? stripTags(titleM[1]) : '';
		if (!title) error(rel, 'missing-title', 'No <title>');
		else {
			if (title.length > 60) warn(rel, 'title-long', `${title.length} chars: ${title.slice(0, 70)}…`);
			const titleKey = `${locale}::${title}`;
			const list = titles.get(titleKey) ?? [];
			list.push(rel);
			titles.set(titleKey, list);
		}

		const descM = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
			?? html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
		const desc = descM?.[1]?.trim() ?? '';
		if (!desc) warn(rel, 'missing-description', 'No meta description');
		else {
			if (desc.length > 160) warn(rel, 'desc-long', `${desc.length} chars`);
			const list = descriptions.get(desc) ?? [];
			list.push(rel);
			descriptions.set(desc, list);
		}

		const canonicalM = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
			?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
		const canonical = canonicalM?.[1] ?? '';
		if (canonical.includes('www.')) error(rel, 'canonical-www', canonical);
		if (canonical && !canonical.startsWith(CANONICAL_ORIGIN)) {
			warn(rel, 'canonical-origin', canonical);
		}

		const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => stripTags(m[1]));
		if (h1Matches.length === 0) warn(rel, 'missing-h1', 'No h1');
		if (h1Matches.length > 1) warn(rel, 'multiple-h1', `${h1Matches.length} h1 tags`);
		for (const h1 of h1Matches) {
			const list = h1s.get(h1) ?? [];
			list.push(rel);
			h1s.set(h1, list);
		}

		const bodyText = stripTags(html).toLowerCase();
		const undetectedCount = (bodyText.match(/\bundetected\b/g) ?? []).length;
		if (undetectedCount >= 4) {
			warn(rel, 'undetected-stuffing', `${undetectedCount}× "undetected" on page`);
		}
		if (/\b2026\b/.test(title) || /\b2026\b/.test(desc)) {
			warn(rel, 'year-in-meta', 'Year "2026" in title or description (SEO dancing)');
		}

		const anchors = extractAnchors(html);
		const anchorCounts = new Map();
		for (const { text } of anchors) {
			anchorCounts.set(text, (anchorCounts.get(text) ?? 0) + 1);
		}
		const globalNavLabels = new Set([
			'home', 'hacks', 'esp', 'aimbot', 'features', 'pricing', 'setup', 'updates', 'faq',
			'buy now', 'buy', 'support', 'privacy', 'terms', 'guides', 'forum', 'reviews',
		]);
		for (const [text, count] of anchorCounts) {
			if (count >= 4 && text.length < 40 && !globalNavLabels.has(text.toLowerCase())) {
				warn(rel, 'duplicate-anchor', `"${text}" used ${count}×`);
			}
		}
	}

	for (const [titleKey, files] of titles) {
		if (files.length > 1) {
			const title = titleKey.split('::').slice(1).join('::');
			error(
				files[0],
				'duplicate-title',
				`Same-locale title duplicated on ${files.length} pages: "${title.slice(0, 55)}…" — e.g. ${files.slice(0, 3).join(', ')}`,
			);
		}
	}

	for (const [desc, files] of descriptions) {
		if (files.length > 3) {
			warn(
				files[0],
				'duplicate-description',
				`Description duplicated on ${files.length} pages (sample: ${files.slice(0, 3).join(', ')})`,
			);
		}
	}

	const errors = issues.filter((i) => i.severity === 'error');
	const warnings = issues.filter((i) => i.severity === 'warn');

	console.log(`Scanned ${htmlFiles.length} HTML files`);
	console.log(`Errors: ${errors.length} | Warnings: ${warnings.length}\n`);

	const byKind = new Map();
	for (const item of issues) {
		byKind.set(item.kind, (byKind.get(item.kind) ?? 0) + 1);
	}
	if (byKind.size) {
		console.log('By category:');
		for (const [kind, count] of [...byKind.entries()].sort((a, b) => b[1] - a[1])) {
			console.log(`  ${kind}: ${count}`);
		}
		console.log('');
	}

	const show = [...errors, ...warnings].slice(0, 40);
	for (const item of show) {
		const prefix = item.severity === 'error' ? '✗' : '⚠';
		console.log(`${prefix} [${item.kind}] ${item.file}\n    ${item.detail}`);
	}
	if (issues.length > show.length) {
		console.log(`\n… and ${issues.length - show.length} more`);
	}

	if (errors.length) {
		console.error(`\nAudit failed with ${errors.length} error(s).`);
		process.exit(1);
	}
	console.log('\nAudit passed (warnings only).');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
