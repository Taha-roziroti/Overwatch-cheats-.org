#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Overwatch 2 source. */
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
	['overwatch-2-esp', 'overwatch-2-esp'],
	['overwatch-2-aimbot', 'overwatch-2-aimbot'],
	['easy-anticheat', 'easy-anticheat'],
	['undetected-overwatch-2-cheats', 'undetected-overwatch-2-cheats'],
	['overwatch-2-wallhack', 'overwatch-2-wallhack'],
	['overwatch-2-visuals', 'overwatch-2-visuals'],
	['overwatch-2-cheats-2026', 'overwatch-2-cheats-2026'],
	['overwatch-2-anticheat-bypass', 'overwatch-2-anticheat-bypass'],
	['overwatchcheats.org', 'overwatchcheats.org'],
	['trucos-overwatch-2', 'trucos-overwatch-2'],
	['triche-overwatch-2', 'triche-overwatch-2'],
	['overwatch-2-cheats', 'escape-from-overwatch-2-cheats'],
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
	['unentdeckte-overwatch-2-cheats', 'unentdeckte-escape-from-overwatch-2-cheats'],
	['cheats-overwatch-2-indetectaveis', 'cheats-overwatch-2-indetectaveis'],
	['trucchi-overwatch-2-indetectabili', 'trucchi-overwatch-2-indetectabili'],
	['niewykrywalne-cheats-overwatch-2', 'niewykrywalne-cheats-overwatch-2'],
	['nedecektiruemye-chity-overwatch-2', 'nedecektiruemye-chity-overwatch-2'],
	['tespit-edilemeyen-overwatch-2-hileleri', 'tespit-edilemeyen-overwatch-2-hileleri'],
	['nedecektovani-chity-overwatch-2', 'nedecektovani-chity-overwatch-2'],
	['cheats-overwatch-2-nedetectabile', 'cheats-overwatch-2-nedetectabile'],
	['basta-overwatch-2-cheats', 'basta-escape-from-overwatch-2-cheats'],
	['overwatch-2-anticheat-bypass-trucos-overwatch-2', 'overwatch-2-anticheat-bypass-trucos-overwatch-2'],
	['overwatch-2-anticheat-bypass-triche-overwatch-2', 'overwatch-2-anticheat-bypass-triche-overwatch-2'],
	['overwatch-2-anticheat-bypass-cheats-overwatch-2', 'overwatch-2-anticheat-bypass-cheats-overwatch-2'],
	['overwatch-2-anticheat-bypass-chity-overwatch-2', 'overwatch-2-anticheat-bypass-chity-overwatch-2'],
	['overwatch-2-anticheat-bypass-destiny-2', 'overwatch-2-anticheat-bypass'],
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
	// Fix easy-anticheat key in englishPaths
	content = content.replace(/\teasy-anticheat: '/, "\t'anticheat': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-overwatch-2-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-overwatch-2-cheats-hero.webp',
	'overwatch-2-esp': '/images/escape-from-overwatch-2-cheats-esp-wallhack.webp',
	'overwatch-2-aimbot': '/images/escape-from-overwatch-2-cheats-aimbot-combat.webp',
	features: '/images/escape-from-overwatch-2-cheats-package.webp',
	pricing: '/images/escape-from-overwatch-2-cheats-cover.webp',
	setup: '/images/destiny-2-loadout-builder.webp',
	updates: '/images/destiny-2-header-art.webp',
	faq: '/images/destiny-2-squad-fight.webp',
	support: '/images/escape-from-overwatch-2-cheats-package.webp',
	undetected: '/images/destiny-2-battle-royale-combat.webp',
	wallhack: '/images/escape-from-overwatch-2-cheats-esp-wallhack.webp',
	radar: '/images/destiny-2-player-esp.webp',
	'anticheat': '/images/destiny-2-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-overwatch-2-cheats-hero.webp',
	privacy: '/images/escape-from-overwatch-2-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-overwatch-2-cheats-cover.webp',
	terms: '/images/escape-from-overwatch-2-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'overwatch-2-esp', 'overwatch-2-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'easy-anticheat',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'overwatch-2-esp' | 'overwatch-2-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anticheat' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
