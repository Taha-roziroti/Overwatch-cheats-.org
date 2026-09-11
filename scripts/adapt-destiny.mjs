#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Destiny 2 Cheats (warthundercheat.net).
 * Run from project root: node scripts/adapt-destiny.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'destiny-2-aimbot'],
	['tarkov-esp', 'destiny-2-esp'],
	['tarkov-wallhack', 'destiny-2-wallhack'],
	['tarkov-radar-hack', 'destiny-2-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-destiny-2-cheats'],
	['tarkov-cheats-2026', 'destiny-2-cheats-2026'],
	['battleye-bypass', 'destiny-2-battleye-bypass'],
	['tarkov-cheats', 'destiny-2-cheats'],
	['tarkov-cheat-download', 'destiny-2-cheat-download'],
	['tarkov-mod-menu', 'destiny-2-crucible-cheats'],
	['tarkov-soft-aim', 'destiny-2-aim-assist'],
	['best-tarkov-cheats', 'best-destiny-2-cheats'],
	['tarkov-aimbot-hack', 'destiny-2-aimbot-hack'],
	['tarkov-esp-hack', 'destiny-2-esp-hack'],
	['tarkov-unlock-all', 'destiny-2-pve-cheats'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://warthundercheat.net'],
	['https://www.tarkovcheats.org', 'https://www.warthundercheat.net'],
	['www.tarkovcheats.org', 'www.warthundercheat.net'],
	['tarkovcheats.org', 'warthundercheat.net'],
	['support@tarkovcheats.org', 'support@warthundercheat.net'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/TAHA?to=%2Fproducts%2Fdestiny-2'],
	['/products/escape-from-tarkov', '/products/destiny-2'],
	['project-name=besttarkovcheats', 'project-name=warthundercheat'],
	['project-name=tarkovcheats', 'project-name=warthundercheat'],
	['name = "besttarkovcheats"', 'name = "warthundercheat"'],
	['name = "tarkovcheats"', 'name = "warthundercheat"'],
	['"name": "tarkov-cheats"', '"name": "destiny-2-cheats"'],
	['undetected-tarkov-cheats', 'undetected-destiny-2-cheats'],
	['best-tarkov-cheats', 'best-destiny-2-cheats'],
	['tarkov-cheat-download', 'destiny-2-cheat-download'],
	['tarkov-cheats-2026', 'destiny-2-cheats-2026'],
	['tarkov-radar-hack', 'destiny-2-radar-hack'],
	['tarkov-aimbot-hack', 'destiny-2-aimbot-hack'],
	['tarkov-esp-hack', 'destiny-2-esp-hack'],
	['tarkov-unlock-all', 'destiny-2-pve-cheats'],
	['tarkov-crucible-cheats', 'destiny-2-crucible-cheats'],
	['tarkov-mod-menu', 'destiny-2-crucible-cheats'],
	['tarkov-soft-aim', 'destiny-2-aim-assist'],
	['tarkov-wallhack', 'destiny-2-wallhack'],
	['tarkov-aimbot', 'destiny-2-aimbot'],
	['tarkov-esp', 'destiny-2-esp'],
	['battleye-bypass', 'destiny-2-battleye-bypass'],
	['tarkov-cheats', 'destiny-2-cheats'],
	['tarkov-esp-player-tags', 'destiny-2-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'destiny-2-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'destiny-2-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'destiny-2-aimbot-skeleton'],
	['tarkov-esp-radar', 'destiny-2-esp-radar'],
	['tarkov-cheats-combat', 'destiny-2-cheats-combat'],
	['tarkov-cheats-logo', 'destiny-2-cheats-logo'],
	['tarkov-hero-banner', 'destiny-2-hero-banner'],
	['tarkov-hero-ghost', 'destiny-2-hero-ghost'],
	['tarkov-hero-source', 'destiny-2-hero-source'],
	['tarkovImages', 'destinyImages'],
	["from './tarkov'", "from './destiny'"],
	["from '../data/tarkov'", "from '../data/destiny'"],
	["from '../../data/tarkov'", "from '../../data/destiny'"],
	['fetch-tarkov-images', 'fetch-destiny-images'],
	['tarkov-hack-overlays', 'destiny-hack-overlays'],
	['fix-tarkov-copy', 'fix-destiny-copy'],
	['adapt-tarkov.mjs', 'adapt-destiny.mjs'],
	['trucos-tarkov', 'trucos-destiny-2'],
	['triche-tarkov', 'triche-destiny-2'],
	['cheats-tarkov', 'cheats-destiny-2'],
	['trucchi-tarkov', 'trucchi-destiny-2'],
	['cheaty-tarkov', 'cheaty-destiny-2'],
	['chity-tarkov', 'chity-destiny-2'],
	['chitov-tarkov', 'chitov-destiny-2'],
	['chitiv-tarkov', 'chitiv-destiny-2'],
	['cheatow-tarkov', 'cheatow-destiny-2'],
	['hile-tarkov', 'hile-destiny-2'],
	['tarkov-hile', 'destiny-2-hile'],
	['tarkov-esp-chity', 'destiny-2-esp-chity'],
	['tarkov-aimbot-chity', 'destiny-2-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-destiny-2-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-destiny-2-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-destiny-2-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-destiny-2'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-destiny-2'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-destiny-2-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-destiny-2'],
	['cheats-tarkov-nedetectabile', 'cheats-destiny-2-nedetectabile'],
	['basta-tarkov-cheats', 'basta-destiny-2-cheats'],
	['tarkov-cheats-funktionen', 'destiny-2-cheats-funktionen'],
	['tarkov-cheats-functies', 'destiny-2-cheats-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-destiny-2'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-destiny-2'],
	['recursos-cheats-tarkov', 'recursos-cheats-destiny-2'],
	['escape-from-tarkov-cheats', 'destiny-2-cheats'],
	['Escape from Tarkov', 'Destiny 2'],
	['escape from tarkov', 'Destiny 2'],
	['Tarkov Cheats', 'Destiny 2 Cheats'],
	['Tarkov CheatsSite', 'Destiny2CheatsSite'],
	['Tarkov Intel', 'Destiny 2 Intel'],
	['Customs, Woods, and Streets of Tarkov', 'Crucible, Trials, and raid encounters'],
	['Customs, Woods and Streets of Tarkov', 'Crucible, Trials and raid encounters'],
	['Customs, Woods et Streets of Tarkov', 'Crucible, Trials et raid encounters'],
	['Customs, Woods e Streets of Tarkov', 'Crucible, Trials e raid encounters'],
	['Customs, Woods und Streets of Tarkov', 'Crucible, Trials und raid encounters'],
	['extract fights', 'Crucible fights'],
	['extract fight', 'Crucible fight'],
	['raid rounds', 'match rounds'],
	['PMC raids and Scav runs', 'Crucible, Trials, and PvE activities'],
	['PMC raids and Scav runs', 'Crucible, Trials, and PvE activities'],
	['PMC & Scav', 'PvP & PvE'],
	['PMC raids and Scav', 'Crucible and PvE'],
	['Scav run', 'PvE activity'],
	['scav run', 'PvE activity'],
	['extract and loot markers', 'enemy and loot markers'],
	['high-value loot', 'powerful loot'],
	['PMCs', 'Guardians'],
	['PMC', 'Guardian'],
	['Scavs', 'enemies'],
	['Scav', 'enemy'],
	['extract timer', 'ability cooldown'],
	['what-are-tarkov-cheats', 'what-are-destiny-2-cheats'],
	['are-tarkov-cheats-undetected-in-2026', 'are-destiny-2-cheats-undetected-in-2026'],
	['pmc-raids-and-scav-runs', 'crucible-trials-and-pve'],
	['what-is-a-tarkov-wallhack', 'what-is-a-destiny-2-wallhack'],
	['does-tarkov-cheats-include-radar-hack', 'does-destiny-2-cheats-include-radar-hack'],
	['battleye-anti-cheat-and-tarkov-cheats', 'battleye-anti-cheat-and-destiny-2-cheats'],
	['buy-undetected-tarkov-cheats-windows-pc', 'buy-undetected-destiny-2-cheats-windows-pc'],
	['tarkov-soft-aim-review', 'destiny-2-aim-assist-review'],
	['tarkov-esp-scav-run-review', 'destiny-2-esp-crucible-review'],
	['tarkov-cloud-dma-review', 'destiny-2-update-review'],
	['tarkov-cheat-setup-review', 'destiny-2-cheat-setup-review'],
	['tarkov-loot-esp-review', 'destiny-2-loot-esp-review'],
	['tarkov-soft-aim-raid-review', 'destiny-2-aim-assist-pve-review'],
	['tarkov-radar-hack-review', 'destiny-2-radar-hack-review'],
	['tarkov-battleye-update-review', 'destiny-2-battleye-update-review'],
	['tarkov-sniper-soft-aim-review', 'destiny-2-sniper-aimbot-review'],
	["pageId='battleye'", "pageId='anticheat'"],
	["pageId=\"battleye\"", "pageId=\"anticheat\""],
	["pageId: 'battleye'", "pageId: 'anticheat'"],
	["'battleye':", "'anticheat':"],
	["| 'battleye'", "| 'anticheat'"],
	['mod-menu', 'crucible-cheats'],
	['soft-aim', 'aim-assist'],
	['unlock-all', 'pve-cheats'],
	['Buy Tarkov Cheats', 'Buy Destiny 2 Cheats'],
	['tarkov cheats', 'Destiny 2 cheats'],
	['tarkov cheat', 'Destiny 2 cheat'],
	['tarkov hacks', 'Destiny 2 hacks'],
	['tarkov hack', 'Destiny 2 hack'],
	['tarkov esp', 'Destiny 2 ESP'],
	['tarkov aimbot', 'Destiny 2 aimbot'],
	['tarkov wallhack', 'Destiny 2 wallhack'],
	['undetected tarkov cheats', 'undetected Destiny 2 cheats'],
	['best tarkov cheats', 'best Destiny 2 cheats'],
	['Tarkov', 'Destiny 2'],
	['tarkov', 'destiny-2'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-fortnite.mjs', 'adapt-warzone.mjs', 'adapt-destiny.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'destiny.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → destiny.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-destiny-images.mjs'],
		['tarkov-hack-overlays.mjs', 'destiny-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-destiny-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'destiny-2-aimbot': 'destiny-2-aimbot',
		'destiny-2-esp': 'destiny-2-esp',
		'destiny-2-wallhack': 'wallhack',
		'destiny-2-radar-hack': 'radar',
		'undetected-destiny-2-cheats': 'undetected',
		'destiny-2-cheats-2026': 'cheats-2026',
		'destiny-2-battleye-bypass': 'anticheat',
		'destiny-2-cheats': 'hacks',
		'destiny-2-cheat-download': 'cheat-download',
		'destiny-2-crucible-cheats': 'crucible-cheats',
		'destiny-2-aim-assist': 'aim-assist',
		'best-destiny-2-cheats': 'best-cheats',
		'destiny-2-aimbot-hack': 'aimbot-hack',
		'destiny-2-esp-hack': 'esp-hack',
		'destiny-2-pve-cheats': 'pve-cheats',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'destiny-2').replace(/destiny-2-hacks-logo/g, 'destiny-2-cheats-logo');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Destiny 2 Cheats (warthundercheat.net)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, process screenshots, sync:brand, build.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
