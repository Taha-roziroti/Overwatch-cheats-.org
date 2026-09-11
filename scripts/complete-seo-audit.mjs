#!/usr/bin/env node
/**
 * Completes escape-from-destiny-2-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'destiny-2-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'destiny-2-cheat-download', pageId: 'cheat-download' },
	{ id: 'crucible-cheats', dir: 'destiny-2-crucible-cheats', pageId: 'crucible-cheats' },
	{ id: 'aim-assist', dir: 'destiny-2-aim-assist', pageId: 'aim-assist' },
	{ id: 'best-cheats', dir: 'best-destiny-2-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'destiny-2-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'destiny-2-esp-hack', pageId: 'esp-hack' },
	{ id: 'pve-cheats', dir: 'destiny-2-pve-cheats', pageId: 'pve-cheats' },
];

const GLOBAL_REPLACEMENTS = [
	[/destiny-2-destiny-2/g, 'destiny-2'],
	[/destiny-2-battleye-bypass-destiny-2/g, 'destiny-2-battleye-bypass'],
	[/Destiny 2/g, 'Destiny 2'],
	[/Destiny 2/g, 'Destiny 2'],
	[/Call of Duty/g, 'Destiny 2'],
	[/Destiny 2 Wallhack/g, 'Destiny 2 Wallhack'],
	[/Destiny 2 Radar Hack/g, 'Destiny 2 Radar Hack'],
	[/Destiny 2 Cheat Features/g, 'Destiny 2 Cheat Features'],
	[/Destiny 2 Cheat Pricing/g, 'Destiny 2 Cheat Pricing'],
	[/Destiny 2 Cheat Setup/g, 'Destiny 2 Cheat Setup'],
	[/Destiny 2 Cheat Status/g, 'Destiny 2 Cheat Status'],
	[/Destiny 2 Cheat Support/g, 'Destiny 2 Cheat Support'],
	[/Destiny 2 squad fight/g, 'Destiny 2 squad fight'],
	[/Destiny 2 squad builder/g, 'Destiny 2 loadout builder'],
	[/Destiny 2 store header/g, 'Destiny 2 header'],
	[/Destiny 2 wasteland combat/g, 'Destiny 2 battle royale combat'],
	[/Destiny 2 loadout builder/g, 'Destiny 2 loadout builder'],
	[/Destiny 2 pricing/g, 'Destiny 2 pricing'],
	[/Destiny 2 BattlEye anti-cheat/g, 'Destiny 2 BattlEye anti-cheat'],
	[/on Destiny 2/g, 'on Destiny 2'],
	[/for Destiny 2/g, 'for Destiny 2'],
	[/Destiny 2 guides/g, 'Destiny 2 guides'],
	[/Destiny 2 guide/g, 'Destiny 2 guide'],
	[/Destiny 2 hileleri/g, 'Destiny 2 hileleri'],
	[/Destiny 2 hile/g, 'Destiny 2 hile'],
	[/Destiny 2 hileleri/g, 'Destiny 2 hileleri'],
	[/cheatów Destiny 2/g, 'cheatów Destiny 2'],
	[/cheat Destiny 2/g, 'cheat Destiny 2'],
	[/cheats Destiny 2/g, 'cheats Destiny 2'],
	[/trucos Destiny 2/g, 'trucos Destiny 2'],
	[/triche Destiny 2/g, 'triche Destiny 2'],
	[/trucchi Destiny 2/g, 'trucchi Destiny 2'],
	[/Wallhack Destiny 2/g, 'Destiny 2 Wallhack'],
	[/cheat Destiny 2 undetected/g, 'cheat Destiny 2 undetected'],
	[/cheats Destiny 2 undetected/g, 'cheats Destiny 2 undetected'],
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
	[/battleye/gi, 'battleye'],
	[/BattlEye/g, 'BattlEye anti-cheat'],
	[/escape-from-destiny-2-cheats/g, 'escape-from-destiny-2-cheats'],
	[/escape-from-destiny-2/g, 'destiny-2'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Destiny 2'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Destiny 2 anti-cheat'],
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
		.replace(/Buy on Zadeyo/g, 'Buy Destiny 2 Cheats')
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
	content = content.replace(/Destiny 2 guides/g, 'Destiny 2 guides');
	content = content.replace(/Destiny 2 guide/g, 'Destiny 2 guide');
	content = content.replace(/Destiny 2 hileleri/g, 'Destiny 2 hileleri');
	content = content.replace(/Destiny 2 hile/g, 'Destiny 2 hile');
	content = content.replace(/cheat Destiny 2/g, 'cheat Destiny 2');
	content = content.replace(/cheats Destiny 2/g, 'cheats Destiny 2');
	content = content.replace(/trucos Destiny 2/g, 'trucos Destiny 2');
	content = content.replace(/triche Destiny 2/g, 'triche Destiny 2');
	content = content.replace(/trucchi Destiny 2/g, 'trucchi Destiny 2');
	content = content.replace(/cheatów Destiny 2/g, 'cheatów Destiny 2');
	content = content.replace(/читов Destiny 2/g, 'читов Destiny 2');
	content = content.replace(/читів Destiny 2/g, 'читів Destiny 2');
	content = content.replace(/Destiny 2チート/g, 'Destiny 2チート');
	content = content.replace(/Destiny 2 치트/g, 'Destiny 2 치트');
	content = content.replace(/Destiny 2作弊/g, 'Destiny 2作弊');
	content = content.replace(/Destiny 2 rehberleri/g, 'Destiny 2 rehberleri');
	content = content.replace(/Destiny 2 gidsen/g, 'Destiny 2 gidsen');
	content = content.replace(/Destiny 2 průvodce/g, 'Destiny 2 průvodce');
	content = content.replace(/Destiny 2 guider/g, 'Destiny 2 guider');
	content = content.replace(/Destiny 2 related/g, 'Destiny 2 related');
	content = content.replace(/Destiny 2 ガイド/g, 'Destiny 2 ガイド');
	content = content.replace(/Destiny 2 가이드/g, 'Destiny 2 가이드');
	content = content.replace(/Destiny 2指南/g, 'Destiny 2指南');
	content = content.replace(/Destiny 2 गाइड/g, 'Destiny 2 गाइड');
	content = content.replace(/Destiny 2 panduan/g, 'Destiny 2 panduan');
	content = content.replace(/Destiny 2 คู่มือ/g, 'Destiny 2 คู่มือ');
	content = content.replace(/Destiny 2 hướng dẫn/g, 'Destiny 2 hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Destiny 2 Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
