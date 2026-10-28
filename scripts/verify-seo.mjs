#!/usr/bin/env node
/**
 * SEO Super Booster checks on built HTML + source constants.
 * Run after: npm run build
 */
import { readFile, readdir, access } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROBOTS_EXPECTED =
	'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

const SITE_URL = readBrandUrl();
const PRODUCT_ID = `${SITE_URL}/overwatch-2-cheats/#product`;

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

function relToUrl(rel) {
	const normalized = rel.replace(/\\/g, '/').replace(/index\.html$/, '');
	const segments = normalized.split('/').filter(Boolean);
	return `${SITE_URL}/${segments.length ? `${segments.join('/')}/` : ''}`;
}

async function walkHtml(dir, base = dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await walkHtml(full, base)));
		} else if (entry.name === 'index.html') {
			files.push(path.relative(base, full));
		}
	}
	return files;
}

const failures = [];

function fail(msg) {
	failures.push(msg);
}

async function main() {
	const DIST = await resolveDist();
	console.log(`verify-seo (${path.relative(ROOT, DIST)})\n`);

	const boosterSrc = readFileSync(path.join(ROOT, 'src/data/seo-booster.ts'), 'utf8');
	if (!boosterSrc.includes('SITE_ABOUT') || !boosterSrc.includes('SEO_ROUTE_INTENTS')) {
		fail('src/data/seo-booster.ts missing SITE_ABOUT or SEO_ROUTE_INTENTS');
	}
	const aboutBlock = boosterSrc.match(/SITE_ABOUT = \[([\s\S]*?)\] as const/)?.[1] ?? '';
	const aboutTerms = aboutBlock.split('\n').filter((line) => line.trim() && !line.trim().startsWith('//'));
	if (aboutTerms.length !== 6) {
		fail(`SITE_ABOUT must define exactly 6 knowsAbout terms (found ${aboutTerms.length})`);
	}

	const robotsTxt = readFileSync(path.join(ROOT, 'public/robots.txt'), 'utf8');
	if (!robotsTxt.includes('Allow: /sitemap.xml')) fail('robots.txt missing Allow: /sitemap.xml');
	if (!robotsTxt.includes('Allow: /videos/')) fail('robots.txt missing Allow: /videos/');
	if (!robotsTxt.includes('User-agent: Googlebot')) fail('robots.txt missing Googlebot block');
	if (!robotsTxt.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) fail('robots.txt Sitemap URL mismatch');

	const samplePaths = ['index.html', 'faq/index.html', 'reviews/index.html', 'overwatch-2-cheats/index.html'];
	for (const rel of samplePaths) {
		const file = path.join(DIST, rel);
		let html;
		try {
			html = await readFile(file, 'utf8');
		} catch {
			fail(`Missing sample page dist/${rel}`);
			continue;
		}
		if (!html.includes(`content="${ROBOTS_EXPECTED}"`)) {
			fail(`${rel}: robots meta must be "${ROBOTS_EXPECTED}"`);
		}
		if (!html.includes('rel="image_src"')) {
			fail(`${rel}: missing rel=image_src`);
		}
		const titleM = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
		const ogTitleM = html.match(/property="og:title"\s+content="([^"]*)"/i);
		if (titleM && ogTitleM && titleM[1].trim() !== ogTitleM[1]) {
			fail(`${rel}: og:title must match <title>`);
		}
		if (/<meta[^>]+name=["']keywords["']/i.test(html)) {
			fail(`${rel}: meta keywords tag must not exist`);
		}
		if (/SearchAction/i.test(html)) {
			fail(`${rel}: SearchAction JSON-LD must not exist`);
		}
	}

	const htmlFiles = await walkHtml(DIST);
	const faqPageUrls = [];
	for (const rel of htmlFiles) {
		if (rel.includes('brand-studio')) continue;
		const html = await readFile(path.join(DIST, rel), 'utf8');
		if (/noindex,\s*nofollow/i.test(html)) continue;
		if (!/"@type"\s*:\s*"FAQPage"/.test(html)) continue;
		const n = rel.replace(/\\/g, '/');
		const allowed =
			n === 'faq/index.html' ||
			(/^[a-z]{2}\/[^/]*faq[^/]*\/index\.html$/i.test(n) && !/^faq\/[^/]+\/index\.html$/.test(n));
		if (!allowed) {
			fail(`FAQPage JSON-LD only on FAQ index pages — found on dist/${n}`);
		}
		faqPageUrls.push(n);
	}
	if (faqPageUrls.length === 0) {
		fail('EN /faq/ must include FAQPage JSON-LD');
	}

	const homeHtml = await readFile(path.join(DIST, 'index.html'), 'utf8');
	if (!homeHtml.includes(PRODUCT_ID)) {
		fail('Home JSON-LD must reference shared product @id on /overwatch-2-cheats/#product');
	}
	if (!homeHtml.includes('"knowsAbout"')) {
		fail('Organization schema must include knowsAbout');
	}

	const reviewsHtml = await readFile(path.join(DIST, 'reviews/index.html'), 'utf8');
	const reviewNodes = (reviewsHtml.match(/"@type"\s*:\s*"Review"/g) ?? []).length;
	if (reviewNodes < 8) {
		fail(`Reviews index must include at least 8 Review nodes (found ${reviewNodes})`);
	}
	if (!reviewsHtml.includes('"@type":"AggregateRating"') && !reviewsHtml.includes('"@type": "AggregateRating"')) {
		fail('Reviews index must include AggregateRating on Product');
	}

	const forumPath = path.join(DIST, 'forum/index.html');
	try {
		const forumHtml = await readFile(forumPath, 'utf8');
		if (!forumHtml.includes('BreadcrumbList')) {
			fail('/forum/ must include BreadcrumbList JSON-LD');
		}
	} catch {
		fail('dist/forum/index.html missing');
	}

	if (failures.length) {
		console.error('SEO verification failed:\n');
		for (const f of failures) console.error(`  ✗ ${f}`);
		process.exit(1);
	}
	console.log('SEO Super Booster verification passed.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
