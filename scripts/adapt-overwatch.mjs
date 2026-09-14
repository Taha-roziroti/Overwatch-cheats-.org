#!/usr/bin/env node
/**
 * One-time migration: Overwatch 2 Cheats → Overwatch 2 Cheats (warthundercheat.net).
 * Run from project root: node scripts/adapt-overwatch.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['overwatch-2-aimbot', 'overwatch-2-aimbot'],
	['overwatch-2-esp', 'overwatch-2-esp'],
	['d2-cheats', 'ow2-cheats'],
	['d2-radar', 'ow2-visuals'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://warthundercheat.net', 'https://warthundercheat.net'],
	['https://www.warthundercheat.net', 'https://www.warthundercheat.net'],
	['www.warthundercheat.net', 'www.warthundercheat.net'],
	['warthundercheat.net', 'warthundercheat.net'],
	['support@warthundercheat.net', 'support@warthundercheat.net'],
	['https://zadeyo.com/go/TAHA?to=%2Fproducts%2Foverwatch-2', 'https://zadeyo.com/go/TAHA?to=%2Fproducts%2Foverwatch-2'],
	['/products/overwatch-2', '/products/overwatch-2'],
	['name = "warthundercheat"', 'name = "warthundercheat"'],
	['"name": "overwatch-2-cheats"', '"name": "overwatch-2-cheats"'],
	['undetected-overwatch-2-cheats', 'undetected-overwatch-2-cheats'],
	['best-overwatch-2-cheats', 'best-overwatch-2-cheats'],
	['overwatch-2-cheat-download', 'overwatch-2-cheat-download'],
	['overwatch-2-cheats-2026', 'overwatch-2-cheats-2026'],
	['overwatch-2-visuals', 'overwatch-2-visuals'],
	['overwatch-2-aimbot-hack', 'overwatch-2-aimbot-hack'],
	['overwatch-2-esp-hack', 'overwatch-2-esp-hack'],
	['overwatch-2-hero-scripts', 'overwatch-2-hero-scripts'],
	['overwatch-2-hero-scripts', 'overwatch-2-hero-scripts'],
	['overwatch-2-aim-assist', 'overwatch-2-aim-assist'],
	['overwatch-2-wallhack', 'overwatch-2-wallhack'],
	['overwatch-2-aimbot', 'overwatch-2-aimbot'],
	['overwatch-2-esp', 'overwatch-2-esp'],
	['overwatch-2-anticheat', 'overwatch-2-anticheat'],
	['overwatch-2-cheats', 'overwatch-2-cheats'],
	['overwatch-2-esp-player-tags', 'overwatch-2-esp-player-tags'],
	['overwatch-2-wallhack-skeleton', 'overwatch-2-wallhack-skeleton'],
	['overwatch-2-aimbot-sniper', 'overwatch-2-aimbot-sniper'],
	['overwatch-2-aimbot-skeleton', 'overwatch-2-aimbot-skeleton'],
	['overwatch-2-esp-radar', 'overwatch-2-esp-visuals'],
	['overwatch-2-cheats-combat', 'overwatch-2-cheats-combat'],
	['overwatch-2-cheats-logo', 'overwatch-2-cheats-logo'],
	['overwatch-2-hero-banner', 'overwatch-2-hero-banner'],
	['overwatch-2-hero-ghost', 'overwatch-2-hero-ghost'],
	['overwatch-2-hero-source', 'overwatch-2-hero-source'],
	['overwatch-2-hero-poster', 'overwatch-2-hero-poster'],
	['overwatch-2-hero.mp4', 'overwatch-2-hero.mp4'],
	['overwatch-2-cheats-esp-crucible', 'overwatch-2-cheats-esp-box'],
	['overwatch-2-cheats-crucible', 'overwatch-2-cheats-flickbot'],
	['overwatch-2-cheats-pve', 'overwatch-2-cheats-hero-scripts'],
	['overwatch-2-cheats-radar', 'overwatch-2-cheats-fov'],
	['overwatchImages', 'overwatchImages'],
	["from './overwatch2'", "from './overwatch2'"],
	["from '../data/overwatch2'", "from '../data/overwatch2'"],
	["from '../../data/overwatch2'", "from '../../data/overwatch2'"],
	['fetch-overwatch-images', 'fetch-overwatch-images'],
	['overwatch-hack-overlays', 'overwatch-hack-overlays'],
	['fix-overwatch-copy', 'fix-overwatch-copy'],
	['adapt-overwatch.mjs', 'adapt-overwatch.mjs'],
	['trucos-overwatch-2', 'trucos-overwatch-2'],
	['triche-overwatch-2', 'triche-overwatch-2'],
	['cheats-overwatch-2', 'cheats-overwatch-2'],
	['trucchi-overwatch-2', 'trucchi-overwatch-2'],
	['cheaty-overwatch-2', 'cheaty-overwatch-2'],
	['chity-overwatch-2', 'chity-overwatch-2'],
	['chitov-overwatch-2', 'chitov-overwatch-2'],
	['chitiv-overwatch-2', 'chitiv-overwatch-2'],
	['cheatow-overwatch-2', 'cheatow-overwatch-2'],
	['hile-overwatch-2', 'hile-overwatch-2'],
	['overwatch-2-hile', 'overwatch-2-hile'],
	['overwatch-2-esp-chity', 'overwatch-2-esp-chity'],
	['overwatch-2-aimbot-chity', 'overwatch-2-aimbot-chity'],
	['unentdeckte-overwatch-2-cheats', 'unentdeckte-overwatch-2-cheats'],
	['cheats-overwatch-2-indetectaveis', 'cheats-overwatch-2-indetectaveis'],
	['trucchi-overwatch-2-indetectabili', 'trucchi-overwatch-2-indetectabili'],
	['niewykrywalne-cheats-overwatch-2', 'niewykrywalne-cheats-overwatch-2'],
	['nedecektiruemye-chity-overwatch-2', 'nedecektiruemye-chity-overwatch-2'],
	['tespit-edilemeyen-overwatch-2-hileleri', 'tespit-edilemeyen-overwatch-2-hileleri'],
	['nedecektovani-chity-overwatch-2', 'nedecektovani-chity-overwatch-2'],
	['cheats-overwatch-2-nedetectabile', 'cheats-overwatch-2-nedetectabile'],
	['basta-overwatch-2-cheats', 'basta-overwatch-2-cheats'],
	['overwatch-2-cheats-funktionen', 'overwatch-2-cheats-funktionen'],
	['overwatch-2-cheats-functies', 'overwatch-2-cheats-functies'],
	['caracteristicas-trucos-overwatch-2', 'caracteristicas-trucos-overwatch-2'],
	['fonctionnalites-triche-overwatch-2', 'fonctionnalites-triche-overwatch-2'],
	['recursos-cheats-overwatch-2', 'recursos-cheats-overwatch-2'],
	['/ow2-undetected/', '/ow2-undetected/'],
	['/ow2-wallhack/', '/ow2-wallhack/'],
	['/ow2-visuals/', '/ow2-visuals/'],
	['/ow2-anticheat/', '/ow2-anticheat/'],
	['/ow2-cheats-2026/', '/ow2-cheats-2026/'],
	['/ow2-cheats/', '/ow2-cheats/'],
	['/ow2-download/', '/ow2-download/'],
	['/ow2-hero-scripts/', '/ow2-hero-scripts/'],
	['/ow2-aim-assist/', '/ow2-aim-assist/'],
	['/ow2-hero-scripts/', '/ow2-hero-scripts/'],
	["pageId='overwatch-2-esp'", "pageId='overwatch-2-esp'"],
	["pageId=\"overwatch-2-esp\"", "pageId=\"overwatch-2-esp\""],
	["pageId: 'overwatch-2-esp'", "pageId: 'overwatch-2-esp'"],
	["pageId='overwatch-2-aimbot'", "pageId='overwatch-2-aimbot'"],
	["pageId=\"overwatch-2-aimbot\"", "pageId=\"overwatch-2-aimbot\""],
	["pageId: 'overwatch-2-aimbot'", "pageId: 'overwatch-2-aimbot'"],
	["'overwatch-2-esp'", "'overwatch-2-esp'"],
	["'overwatch-2-aimbot'", "'overwatch-2-aimbot'"],
	['Overwatch2CheatsSite', 'Overwatch2CheatsSite'],
	['Overwatch 2 Intel', 'Overwatch 2 Intel'],
	['Overwatch 2 Cheats', 'Overwatch 2 Cheats'],
	['Overwatch 2', 'Overwatch 2'],
	['Overwatch 2', 'Overwatch 2'],
	['Quick Play, Competitive, and hero matchups', 'Quick Play, Competitive, and hero matchups'],
	['Quick Play, Competitive, and Arcade modes', 'Quick Play, Competitive, and Arcade modes'],
	['Quick Play, Competitive, and Arcade modes', 'Quick Play, Competitive, and Arcade modes'],
	['Quick Play or Competitive', 'Quick Play or Competitive'],
	['Quick Play or Competitive', 'Quick Play or Competitive'],
	['Quick Play and Arcade', 'Quick Play and Arcade'],
	['Quick Play, Competitive', 'Quick Play, Competitive'],
	['Quick Play', 'Quick Play'],
	['Competitive', 'Competitive'],
	['heroes', 'heroes'],
	['hero', 'hero'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['easy-anticheat', 'easy-anticheat'],
	['what-are-overwatch-2-cheats', 'what-are-overwatch-2-cheats'],
	['are-overwatch-2-cheats-undetected-in-2026', 'are-overwatch-2-cheats-undetected-in-2026'],
	['what-is-a-overwatch-2-wallhack', 'what-is-an-overwatch-2-wallhack'],
	['does-overwatch-2-cheats-include-radar-hack', 'does-overwatch-2-cheats-include-esp-visuals'],
	['easy-anticheat-anti-cheat-and-overwatch-2-cheats', 'easy-anti-cheat-and-overwatch-2-cheats'],
	['buy-undetected-overwatch-2-cheats-windows-pc', 'buy-undetected-overwatch-2-cheats-windows-pc'],
	['MONEY_PATH = \'/ow2-cheats/\'', "MONEY_PATH = '/ow2-cheats/'"],
	['store.steampowered.com/app/2357570/Overwatch_2/', 'store.steampowered.com/app/2357570/Overwatch_2/'],
	['Overwatch_2', 'Overwatch_2'],
	['Overwatch Wiki', 'Overwatch Wiki'],
	['overwatch.fandom.com', 'overwatch.fandom.com'],
	['overwatch.blizzard.com', 'overwatch.blizzard.com'],
];

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (!SKIP_DIRS.has(entry.name)) files.push(...(await walk(full)));
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let out = content;
	for (const [from, to] of REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	return out;
}

async function processFile(filePath) {
	const ext = path.extname(filePath).toLowerCase();
	const textExts = new Set([
		'.ts', '.tsx', '.js', '.mjs', '.json', '.astro', '.md', '.mdc', '.toml',
		'.txt', '.xml', '.svg', '.css', '.html', '.htaccess',
	]);
	if (!textExts.has(ext) && path.basename(filePath) !== '_redirects' && path.basename(filePath) !== '_headers') {
		return false;
	}
	const raw = await readFile(filePath, 'utf8');
	const next = applyReplacements(raw);
	if (next !== raw) {
		await writeFile(filePath, next, 'utf8');
		return true;
	}
	return false;
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const fromPath = path.join(ROOT, 'src/pages', from);
		const toPath = path.join(ROOT, 'src/pages', to);
		try {
			await rename(fromPath, toPath);
			console.log(`Renamed pages/${from} → pages/${to}`);
		} catch {
			/* already renamed or missing */
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src/data/destiny.ts');
	const to = path.join(ROOT, 'src/data/overwatch2.ts');
	try {
		await rename(from, to);
		console.log('Renamed src/data/destiny.ts → overwatch2.ts');
	} catch {
		/* already renamed */
	}
}

async function main() {
	await renamePageDirs();
	await renameDataFile();

	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		if (await processFile(file)) {
			changed++;
			console.log('Updated:', path.relative(ROOT, file));
		}
	}
	console.log(`\nDone. ${changed} files updated.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
