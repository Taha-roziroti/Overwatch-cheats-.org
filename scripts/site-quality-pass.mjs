#!/usr/bin/env node
/**
 * One-shot site quality fixes: canonical paths, legacy domain copy, guide redirects.
 */
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PATH_REPLACEMENTS = [
	['/features/', '/destiny-2-cheats-features/'],
	['/pricing/', '/destiny-2-cheats-pricing/'],
	['/setup/', '/destiny-2-cheats-setup/'],
	['/updates/', '/destiny-2-cheats-status/'],
	['/faq/', '/destiny-2-cheats-faq/'],
	['/support/', '/destiny-2-cheats-support/'],
	['/reviews/', '/destiny-2-cheats-reviews/'],
	['/blog/', '/destiny-2-cheats-blog/'],
	['/privacy-policy/', '/destiny-2-cheats-privacy/'],
	['/refund-policy/', '/destiny-2-cheats-refund/'],
	['/terms/', '/destiny-2-cheats-terms/'],
	['/hacks/', '/destiny-2-cheats/'],
];

const COPY_REPLACEMENTS = [
	[/warthundercheat\.net/gi, 'destiny2cheats.org'],
	[/support@warthundercheat\.net/gi, 'support@destiny2cheats.org'],
	[/raid and scav-runs/gi, 'raids and PvE'],
	[/raid and scav-run/gi, 'raids and PvE'],
	[/scav-runs/gi, 'PvE activities'],
	[/scav-run/gi, 'PvE'],
	[/Guardian raids and PvE activities/gi, 'raids and PvE'],
	[/Guardian raids and PvEs/gi, 'raids and PvE'],
	[/“Destiny 2 cheats” and “Destiny 2 cheats” search intent/gi, 'Destiny 2 cheat buyers'],
	[/Destiny 2 cheats and Destiny 2 cheats search intent/gi, 'Destiny 2 cheat buyers'],
	[/USEC head/gi, 'Guardian silhouette'],
];

function applyReplacements(text) {
	let out = text;
	for (const [from, to] of PATH_REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	for (const [from, to] of COPY_REPLACEMENTS) {
		out = out.replace(from, to);
	}
	return out;
}

function patchFile(relPath) {
	const abs = path.join(ROOT, relPath);
	const before = readFileSync(abs, 'utf8');
	const after = applyReplacements(before);
	if (after !== before) {
		writeFileSync(abs, after, 'utf8');
		console.log(`patched ${relPath}`);
	}
}

const TARGETS = [
	'scripts/i18n-data/pages-en.mjs',
	'src/data/blog/posts.generated.ts',
	'src/data/i18n/content.generated.ts',
];

for (const file of TARGETS) patchFile(file);

// Guide slug redirects (removed PBN guide pages → hub)
const guidesSrc = readFileSync(path.join(ROOT, 'src/data/guides/guides.generated.ts'), 'utf8');
const slugs = [...guidesSrc.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);
const redirectsPath = path.join(ROOT, 'public/_redirects');
let redirects = readFileSync(redirectsPath, 'utf8');
const marker = '# Removed external game guide slugs → /guides/ hub';
if (!redirects.includes(marker)) {
	const lines = [marker, ...slugs.flatMap((slug) => [`/guides/${slug} /guides/ 301`, `/guides/${slug}/ /guides/ 301`])];
	appendFileSync(redirectsPath, `\n${lines.join('\n')}\n`, 'utf8');
	console.log(`added ${slugs.length * 2} guide redirect rules`);
}

console.log('site-quality-pass complete');
