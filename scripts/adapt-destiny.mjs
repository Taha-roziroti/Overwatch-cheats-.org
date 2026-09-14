#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Overwatch 2 Cheats (overwatchcheats.org).
 * Run from project root: node scripts/adapt-overwatch.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'overwatch-2-aimbot'],
	['tarkov-esp', 'overwatch-2-esp'],
	['tarkov-wallhack', 'overwatch-2-wallhack'],
	['tarkov-radar-hack', 'overwatch-2-visuals'],
	['undetected-tarkov-cheats', 'undetected-overwatch-2-cheats'],
	['tarkov-cheats-2026', 'overwatch-2-cheats-2026'],
	['easy-anticheat-bypass', 'overwatch-2-anticheat-bypass'],
	['tarkov-cheats', 'overwatch-2-cheats'],
	['tarkov-cheat-download', 'overwatch-2-cheat-download'],
	['tarkov-mod-menu', 'overwatch-2-hero-scripts'],
	['tarkov-soft-aim', 'overwatch-2-aim-assist'],
	['best-tarkov-cheats', 'best-overwatch-2-cheats'],
	['tarkov-aimbot-hack', 'overwatch-2-aimbot-hack'],
	['tarkov-esp-hack', 'overwatch-2-esp-hack'],
	['tarkov-unlock-all', 'overwatch-2-hero-scripts'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://overwatchcheats.org'],
	['https://www.tarkovcheats.org', 'https://www.overwatchcheats.org'],
	['www.tarkovcheats.org', 'www.overwatchcheats.org'],
	['tarkovcheats.org', 'overwatchcheats.org'],
	['support@tarkovcheats.org', 'support@overwatchcheats.org'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/TAHA?to=%2Fproducts%2Foverwatch-2'],
	['/products/escape-from-tarkov', '/products/overwatch-2'],
	['project-name=besttarkovcheats', 'project-name=overwatchcheats'],
	['project-name=tarkovcheats', 'project-name=overwatchcheats'],
	['name = "besttarkovcheats"', 'name = "overwatchcheats"'],
	['name = "tarkovcheats"', 'name = "overwatchcheats"'],
	['"name": "tarkov-cheats"', '"name": "overwatch-2-cheats"'],
	['undetected-tarkov-cheats', 'undetected-overwatch-2-cheats'],
	['best-tarkov-cheats', 'best-overwatch-2-cheats'],
	['tarkov-cheat-download', 'overwatch-2-cheat-download'],
	['tarkov-cheats-2026', 'overwatch-2-cheats-2026'],
	['tarkov-radar-hack', 'overwatch-2-visuals'],
	['tarkov-aimbot-hack', 'overwatch-2-aimbot-hack'],
	['tarkov-esp-hack', 'overwatch-2-esp-hack'],
	['tarkov-unlock-all', 'overwatch-2-hero-scripts'],
	['tarkov-crucible-cheats', 'overwatch-2-hero-scripts'],
	['tarkov-mod-menu', 'overwatch-2-hero-scripts'],
	['tarkov-soft-aim', 'overwatch-2-aim-assist'],
	['tarkov-wallhack', 'overwatch-2-wallhack'],
	['tarkov-aimbot', 'overwatch-2-aimbot'],
	['tarkov-esp', 'overwatch-2-esp'],
	['easy-anticheat-bypass', 'overwatch-2-anticheat-bypass'],
	['tarkov-cheats', 'overwatch-2-cheats'],
	['tarkov-esp-player-tags', 'overwatch-2-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'overwatch-2-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'overwatch-2-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'overwatch-2-aimbot-skeleton'],
	['tarkov-esp-radar', 'overwatch-2-esp-radar'],
	['tarkov-cheats-combat', 'overwatch-2-cheats-combat'],
	['tarkov-cheats-logo', 'overwatch-2-cheats-logo'],
	['tarkov-hero-banner', 'overwatch-2-hero-banner'],
	['tarkov-hero-ghost', 'overwatch-2-hero-ghost'],
	['tarkov-hero-source', 'overwatch-2-hero-source'],
	['tarkovImages', 'overwatchImages'],
	["from './tarkov'", "from './overwatch2'"],
	["from '../data/tarkov'", "from '../data/overwatch2'"],
	["from '../../data/tarkov'", "from '../../data/overwatch2'"],
	['fetch-tarkov-images', 'fetch-overwatch-images'],
	['tarkov-hack-overlays', 'overwatch-hack-overlays'],
	['fix-tarkov-copy', 'fix-overwatch-copy'],
	['adapt-tarkov.mjs', 'adapt-overwatch.mjs'],
	['trucos-tarkov', 'trucos-overwatch-2'],
	['triche-tarkov', 'triche-overwatch-2'],
	['cheats-tarkov', 'cheats-overwatch-2'],
	['trucchi-tarkov', 'trucchi-overwatch-2'],
	['cheaty-tarkov', 'cheaty-overwatch-2'],
	['chity-tarkov', 'chity-overwatch-2'],
	['chitov-tarkov', 'chitov-overwatch-2'],
	['chitiv-tarkov', 'chitiv-overwatch-2'],
	['cheatow-tarkov', 'cheatow-overwatch-2'],
	['hile-tarkov', 'hile-overwatch-2'],
	['tarkov-hile', 'overwatch-2-hile'],
	['tarkov-esp-chity', 'overwatch-2-esp-chity'],
	['tarkov-aimbot-chity', 'overwatch-2-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-overwatch-2-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-overwatch-2-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-overwatch-2-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-overwatch-2'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-overwatch-2'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-overwatch-2-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-overwatch-2'],
	['cheats-tarkov-nedetectabile', 'cheats-overwatch-2-nedetectabile'],
	['basta-tarkov-cheats', 'basta-overwatch-2-cheats'],
	['tarkov-cheats-funktionen', 'overwatch-2-cheats-funktionen'],
	['tarkov-cheats-functies', 'overwatch-2-cheats-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-overwatch-2'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-overwatch-2'],
	['recursos-cheats-tarkov', 'recursos-cheats-overwatch-2'],
	['escape-from-tarkov-cheats', 'overwatch-2-cheats'],
	['Escape from Tarkov', 'Overwatch 2'],
	['escape from tarkov', 'Overwatch 2'],
	['Tarkov Cheats', 'Overwatch 2 Cheats'],
	['Tarkov CheatsSite', 'Overwatch2CheatsSite'],
	['Tarkov Intel', 'Overwatch 2 Intel'],
	['Customs, Woods, and Streets of Tarkov', 'Quick Play, Competitive, and hero matchups'],
	['Customs, Woods and Streets of Tarkov', 'Quick Play, Competitive and raid encounters'],
	['Customs, Woods et Streets of Tarkov', 'Quick Play, Competitive et raid encounters'],
	['Customs, Woods e Streets of Tarkov', 'Quick Play, Competitive e raid encounters'],
	['Customs, Woods und Streets of Tarkov', 'Quick Play, Competitive und raid encounters'],
	['extract fights', 'Quick Play fights'],
	['extract fight', 'Quick Play fight'],
	['raid rounds', 'match rounds'],
	['PMC raids and Scav runs', 'Quick Play, Competitive, and Arcade modes'],
	['PMC raids and Scav runs', 'Quick Play, Competitive, and Arcade modes'],
	['PMC & Scav', 'PvP & PvE'],
	['PMC raids and Scav', 'Quick Play and Arcade'],
	['Scav run', 'PvE activity'],
	['scav run', 'PvE activity'],
	['extract and loot markers', 'enemy and loot markers'],
	['high-value loot', 'powerful loot'],
	['PMCs', 'heroes'],
	['PMC', 'hero'],
	['Scavs', 'enemies'],
	['Scav', 'enemy'],
	['extract timer', 'ability cooldown'],
	['what-are-tarkov-cheats', 'what-are-overwatch-2-cheats'],
	['are-tarkov-cheats-undetected-in-2026', 'are-overwatch-2-cheats-undetected-in-2026'],
	['pmc-raids-and-scav-runs', 'crucible-trials-and-pve'],
	['what-is-a-tarkov-wallhack', 'what-is-a-overwatch-2-wallhack'],
	['does-tarkov-cheats-include-radar-hack', 'does-overwatch-2-cheats-include-radar-hack'],
	['easy-anticheat-anti-cheat-and-tarkov-cheats', 'easy-anticheat-anti-cheat-and-overwatch-2-cheats'],
	['buy-undetected-tarkov-cheats-windows-pc', 'buy-undetected-overwatch-2-cheats-windows-pc'],
	['tarkov-soft-aim-review', 'overwatch-2-aim-assist-review'],
	['tarkov-esp-scav-run-review', 'overwatch-2-esp-crucible-review'],
	['tarkov-cloud-dma-review', 'destiny-2-update-review'],
	['tarkov-cheat-setup-review', 'destiny-2-cheat-setup-review'],
	['tarkov-loot-esp-review', 'destiny-2-loot-esp-review'],
	['tarkov-soft-aim-raid-review', 'overwatch-2-aim-assist-pve-review'],
	['tarkov-radar-hack-review', 'overwatch-2-visuals-review'],
	['tarkov-easy-anticheat-update-review', 'overwatch-2-anticheat-update-review'],
	['tarkov-sniper-soft-aim-review', 'destiny-2-sniper-aimbot-review'],
	["pageId='easy-anticheat'", "pageId='anticheat'"],
	["pageId=\"easy-anticheat\"", "pageId=\"anticheat\""],
	["pageId: 'easy-anticheat'", "pageId: 'anticheat'"],
	["'easy-anticheat':", "'anticheat':"],
	["| 'easy-anticheat'", "| 'anticheat'"],
	['mod-menu', 'crucible-cheats'],
	['soft-aim', 'aim-assist'],
	['unlock-all', 'pve-cheats'],
	['Buy Tarkov Cheats', 'Buy Overwatch 2 Cheats'],
	['tarkov cheats', 'Overwatch 2 cheats'],
	['tarkov cheat', 'Overwatch 2 cheat'],
	['tarkov hacks', 'Overwatch 2 hacks'],
	['tarkov hack', 'Overwatch 2 hack'],
	['tarkov esp', 'Overwatch 2 ESP'],
	['tarkov aimbot', 'Overwatch 2 aimbot'],
	['tarkov wallhack', 'Overwatch 2 wallhack'],
	['undetected tarkov cheats', 'undetected Overwatch 2 cheats'],
	['best tarkov cheats', 'best Overwatch 2 cheats'],
	['Tarkov', 'Overwatch 2'],
	['tarkov', 'destiny-2'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-fortnite.mjs', 'adapt-warzone.mjs', 'adapt-overwatch.mjs']);

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
		['fetch-tarkov-images.mjs', 'fetch-overwatch-images.mjs'],
		['tarkov-hack-overlays.mjs', 'overwatch-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-overwatch-copy.mjs'],
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
		'overwatch-2-aimbot': 'overwatch-2-aimbot',
		'overwatch-2-esp': 'overwatch-2-esp',
		'overwatch-2-wallhack': 'wallhack',
		'overwatch-2-visuals': 'radar',
		'undetected-overwatch-2-cheats': 'undetected',
		'overwatch-2-cheats-2026': 'cheats-2026',
		'overwatch-2-anticheat-bypass': 'anticheat',
		'overwatch-2-cheats': 'hacks',
		'overwatch-2-cheat-download': 'cheat-download',
		'overwatch-2-hero-scripts': 'crucible-cheats',
		'overwatch-2-aim-assist': 'aim-assist',
		'best-overwatch-2-cheats': 'best-cheats',
		'overwatch-2-aimbot-hack': 'aimbot-hack',
		'overwatch-2-esp-hack': 'esp-hack',
		'overwatch-2-hero-scripts': 'pve-cheats',
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
		const newName = file.replace(/tarkov/g, 'destiny-2').replace(/destiny-2-hacks-logo/g, 'overwatch-2-cheats-logo');
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
	console.log('Adapting Tarkov Cheats → Overwatch 2 Cheats (overwatchcheats.org)...\n');
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
