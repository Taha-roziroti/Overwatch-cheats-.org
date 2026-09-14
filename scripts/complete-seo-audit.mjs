#!/usr/bin/env node
/**
 * Completes escape-from-overwatch-2-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'overwatch-2-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'overwatch-2-cheat-download', pageId: 'cheat-download' },
	{ id: 'crucible-cheats', dir: 'overwatch-2-hero-scripts', pageId: 'crucible-cheats' },
	{ id: 'aim-assist', dir: 'overwatch-2-aim-assist', pageId: 'aim-assist' },
	{ id: 'best-cheats', dir: 'best-overwatch-2-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'overwatch-2-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'overwatch-2-esp-hack', pageId: 'esp-hack' },
	{ id: 'pve-cheats', dir: 'overwatch-2-hero-scripts', pageId: 'pve-cheats' },
];

const GLOBAL_REPLACEMENTS = [
	[/destiny-2-destiny-2/g, 'destiny-2'],
	[/overwatch-2-anticheat-bypass-destiny-2/g, 'overwatch-2-anticheat-bypass'],
	[/Overwatch 2/g, 'Overwatch 2'],
	[/Overwatch 2/g, 'Overwatch 2'],
	[/Call of Duty/g, 'Overwatch 2'],
	[/Overwatch 2 Wallhack/g, 'Overwatch 2 Wallhack'],
	[/Overwatch 2 Radar Hack/g, 'Overwatch 2 Radar Hack'],
	[/Overwatch 2 Cheat Features/g, 'Overwatch 2 Cheat Features'],
	[/Overwatch 2 Cheat Pricing/g, 'Overwatch 2 Cheat Pricing'],
	[/Overwatch 2 Cheat Setup/g, 'Overwatch 2 Cheat Setup'],
	[/Overwatch 2 Cheat Status/g, 'Overwatch 2 Cheat Status'],
	[/Overwatch 2 Cheat Support/g, 'Overwatch 2 Cheat Support'],
	[/Overwatch 2 squad fight/g, 'Overwatch 2 squad fight'],
	[/Overwatch 2 squad builder/g, 'Overwatch 2 loadout builder'],
	[/Overwatch 2 store header/g, 'Overwatch 2 header'],
	[/Overwatch 2 wasteland combat/g, 'Overwatch 2 battle royale combat'],
	[/Overwatch 2 loadout builder/g, 'Overwatch 2 loadout builder'],
	[/Overwatch 2 pricing/g, 'Overwatch 2 pricing'],
	[/Overwatch 2 Easy Anti-Cheat anti-cheat/g, 'Overwatch 2 Easy Anti-Cheat anti-cheat'],
	[/on Overwatch 2/g, 'on Overwatch 2'],
	[/for Overwatch 2/g, 'for Overwatch 2'],
	[/Overwatch 2 guides/g, 'Overwatch 2 guides'],
	[/Overwatch 2 guide/g, 'Overwatch 2 guide'],
	[/Overwatch 2 hileleri/g, 'Overwatch 2 hileleri'],
	[/Overwatch 2 hile/g, 'Overwatch 2 hile'],
	[/Overwatch 2 hileleri/g, 'Overwatch 2 hileleri'],
	[/cheatów Overwatch 2/g, 'cheatów Overwatch 2'],
	[/cheat Overwatch 2/g, 'cheat Overwatch 2'],
	[/cheats Overwatch 2/g, 'cheats Overwatch 2'],
	[/trucos Overwatch 2/g, 'trucos Overwatch 2'],
	[/triche Overwatch 2/g, 'triche Overwatch 2'],
	[/trucchi Overwatch 2/g, 'trucchi Overwatch 2'],
	[/Wallhack Overwatch 2/g, 'Overwatch 2 Wallhack'],
	[/cheat Overwatch 2 undetected/g, 'cheat Overwatch 2 undetected'],
	[/cheats Overwatch 2 undetected/g, 'cheats Overwatch 2 undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/easy-anticheat/gi, 'easy-anticheat'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat anti-cheat'],
	[/escape-from-overwatch-2-cheats/g, 'escape-from-overwatch-2-cheats'],
	[/escape-from-destiny-2/g, 'destiny-2'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Overwatch 2'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Overwatch 2 anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Overwatch 2 Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Overwatch 2 guides/g, 'Overwatch 2 guides');
	content = content.replace(/Overwatch 2 guide/g, 'Overwatch 2 guide');
	content = content.replace(/Overwatch 2 hileleri/g, 'Overwatch 2 hileleri');
	content = content.replace(/Overwatch 2 hile/g, 'Overwatch 2 hile');
	content = content.replace(/cheat Overwatch 2/g, 'cheat Overwatch 2');
	content = content.replace(/cheats Overwatch 2/g, 'cheats Overwatch 2');
	content = content.replace(/trucos Overwatch 2/g, 'trucos Overwatch 2');
	content = content.replace(/triche Overwatch 2/g, 'triche Overwatch 2');
	content = content.replace(/trucchi Overwatch 2/g, 'trucchi Overwatch 2');
	content = content.replace(/cheatów Overwatch 2/g, 'cheatów Overwatch 2');
	content = content.replace(/читов Overwatch 2/g, 'читов Overwatch 2');
	content = content.replace(/читів Overwatch 2/g, 'читів Overwatch 2');
	content = content.replace(/Overwatch 2チート/g, 'Overwatch 2チート');
	content = content.replace(/Overwatch 2 치트/g, 'Overwatch 2 치트');
	content = content.replace(/Overwatch 2作弊/g, 'Overwatch 2作弊');
	content = content.replace(/Overwatch 2 rehberleri/g, 'Overwatch 2 rehberleri');
	content = content.replace(/Overwatch 2 gidsen/g, 'Overwatch 2 gidsen');
	content = content.replace(/Overwatch 2 průvodce/g, 'Overwatch 2 průvodce');
	content = content.replace(/Overwatch 2 guider/g, 'Overwatch 2 guider');
	content = content.replace(/Overwatch 2 related/g, 'Overwatch 2 related');
	content = content.replace(/Overwatch 2 ガイド/g, 'Overwatch 2 ガイド');
	content = content.replace(/Overwatch 2 가이드/g, 'Overwatch 2 가이드');
	content = content.replace(/Overwatch 2指南/g, 'Overwatch 2指南');
	content = content.replace(/Overwatch 2 गाइड/g, 'Overwatch 2 गाइड');
	content = content.replace(/Overwatch 2 panduan/g, 'Overwatch 2 panduan');
	content = content.replace(/Overwatch 2 คู่มือ/g, 'Overwatch 2 คู่มือ');
	content = content.replace(/Overwatch 2 hướng dẫn/g, 'Overwatch 2 hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Overwatch 2 Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
