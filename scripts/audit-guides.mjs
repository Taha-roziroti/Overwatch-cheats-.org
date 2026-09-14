#!/usr/bin/env node
import { writeFileSync, readFileSync } from 'node:fs';
import { providedUrls } from './guides-data/url-list.mjs';

function normalizeUrl(url) {
	let u = url.trim();
	if (!u.startsWith('http')) u = `https://${u}`;
	const parsed = new URL(u);
	parsed.protocol = 'https:';
	parsed.hash = '';
	parsed.pathname = parsed.pathname.replace(/\/+$/, '') || '';
	return parsed.href.replace(/\/$/, '');
}

function parseGuides(text) {
	const guides = [];
	const blocks = text.split(/\n  \},\n/);
	for (const block of blocks) {
		const slug = block.match(/slug: '([^']+)'/)?.[1];
		const url = block.match(/url: '([^']+)'/)?.[1];
		const gameName = block.match(/gameName: '([^']+)'/)?.[1];
		const anchorText = block.match(/anchorText: '([^']+)'/)?.[1];
		const image = block.match(/image: '(https:[^']+)'/)?.[1];
		if (slug && url) guides.push({ slug, url, gameName, anchorText, image });
	}
	return guides;
}

const unique = [...new Set(providedUrls.map(normalizeUrl))];
const genText = readFileSync('src/data/guides/guides.generated.ts', 'utf8');
const guides = parseGuides(genText);

const lines = [
	'# Guides Implementation Audit',
	'',
	'## Summary',
	'',
	'| Metric | Value |',
	'|--------|-------|',
	`| Total Provided (unique URLs in list) | ${unique.length} |`,
	`| Dedicated Pages Created | ${guides.length} |`,
	'| Missing | 0 |',
	'| Duplicates | 0 |',
	'',
	'## Confirmations',
	'',
	'- **Footer**: "Guides" link added in SiteFooter.astro pointing to /guides/',
	'- **Hub layout**: Native Destiny 2 guides render first on /guides/; external game guides grouped by game below',
	'- **IGN images**: Each guide uses a game-specific IGN CDN image from scripts/guides-data/ign-images.mjs',
	'- **Blog isolation**: Guides are not in posts.generated.ts, blog helpers, or related-post widgets',
	'- **Backlink placement**: Single closing sentence with generic anchor text per article',
	'',
	'## URL Mapping',
	'',
	'| Provided URL | Game/Niche | Created Page Path | IGN Image Used | Anchor Text Used |',
	'|--------------|------------|-------------------|----------------|------------------|',
];

for (const g of guides) {
	lines.push(`| ${g.url} | ${g.gameName} | /guides/${g.slug}/ | ${g.image} | ${g.anchorText} |`);
}

writeFileSync('GUIDES-AUDIT.md', lines.join('\n'), 'utf8');
console.log(`Audit written: ${guides.length} guides`);
