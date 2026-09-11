#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Destiny 2 source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'crucible-cheats', 'aim-assist', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'pve-cheats',
];

const REPLACEMENTS = [
	['destiny-2-esp', 'destiny-2-esp'],
	['destiny-2-aimbot', 'destiny-2-aimbot'],
	['battleye', 'battleye'],
	['undetected-destiny-2-cheats', 'undetected-destiny-2-cheats'],
	['destiny-2-wallhack', 'destiny-2-wallhack'],
	['destiny-2-radar-hack', 'destiny-2-radar-hack'],
	['destiny-2-cheats-2026', 'destiny-2-cheats-2026'],
	['destiny-2-battleye-bypass', 'destiny-2-battleye-bypass'],
	['warthundercheat.net', 'warthundercheat.net'],
	['trucos-destiny-2', 'trucos-destiny-2'],
	['triche-destiny-2', 'triche-destiny-2'],
	['destiny-2-cheats', 'escape-from-destiny-2-cheats'],
	['cheats-destiny-2', 'cheats-destiny-2'],
	['trucchi-destiny-2', 'trucchi-destiny-2'],
	['cheaty-destiny-2', 'cheaty-destiny-2'],
	['chity-destiny-2', 'chity-destiny-2'],
	['chitov-destiny-2', 'chitov-destiny-2'],
	['chitiv-destiny-2', 'chitiv-destiny-2'],
	['cheatow-destiny-2', 'cheatow-destiny-2'],
	['hile-destiny-2', 'hile-destiny-2'],
	['destiny-2-hile', 'destiny-2-hile'],
	['destiny-2-esp-chity', 'destiny-2-esp-chity'],
	['destiny-2-aimbot-chity', 'destiny-2-aimbot-chity'],
	['unentdeckte-destiny-2-cheats', 'unentdeckte-escape-from-destiny-2-cheats'],
	['cheats-destiny-2-indetectaveis', 'cheats-destiny-2-indetectaveis'],
	['trucchi-destiny-2-indetectabili', 'trucchi-destiny-2-indetectabili'],
	['niewykrywalne-cheats-destiny-2', 'niewykrywalne-cheats-destiny-2'],
	['nedecektiruemye-chity-destiny-2', 'nedecektiruemye-chity-destiny-2'],
	['tespit-edilemeyen-destiny-2-hileleri', 'tespit-edilemeyen-destiny-2-hileleri'],
	['nedecektovani-chity-destiny-2', 'nedecektovani-chity-destiny-2'],
	['cheats-destiny-2-nedetectabile', 'cheats-destiny-2-nedetectabile'],
	['basta-destiny-2-cheats', 'basta-escape-from-destiny-2-cheats'],
	['destiny-2-battleye-bypass-trucos-destiny-2', 'destiny-2-battleye-bypass-trucos-destiny-2'],
	['destiny-2-battleye-bypass-triche-destiny-2', 'destiny-2-battleye-bypass-triche-destiny-2'],
	['destiny-2-battleye-bypass-cheats-destiny-2', 'destiny-2-battleye-bypass-cheats-destiny-2'],
	['destiny-2-battleye-bypass-chity-destiny-2', 'destiny-2-battleye-bypass-chity-destiny-2'],
	['destiny-2-battleye-bypass-destiny-2', 'destiny-2-battleye-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix battleye key in englishPaths
	content = content.replace(/\tbattleye: '/, "\t'anticheat': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-destiny-2-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-destiny-2-cheats-hero.webp',
	'destiny-2-esp': '/images/escape-from-destiny-2-cheats-esp-wallhack.webp',
	'destiny-2-aimbot': '/images/escape-from-destiny-2-cheats-aimbot-combat.webp',
	features: '/images/escape-from-destiny-2-cheats-package.webp',
	pricing: '/images/escape-from-destiny-2-cheats-cover.webp',
	setup: '/images/destiny-2-loadout-builder.webp',
	updates: '/images/destiny-2-header-art.webp',
	faq: '/images/destiny-2-squad-fight.webp',
	support: '/images/escape-from-destiny-2-cheats-package.webp',
	undetected: '/images/destiny-2-battle-royale-combat.webp',
	wallhack: '/images/escape-from-destiny-2-cheats-esp-wallhack.webp',
	radar: '/images/destiny-2-player-esp.webp',
	'anticheat': '/images/destiny-2-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-destiny-2-cheats-hero.webp',
	privacy: '/images/escape-from-destiny-2-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-destiny-2-cheats-cover.webp',
	terms: '/images/escape-from-destiny-2-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'destiny-2-esp', 'destiny-2-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'destiny-2-esp' | 'destiny-2-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anticheat' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
