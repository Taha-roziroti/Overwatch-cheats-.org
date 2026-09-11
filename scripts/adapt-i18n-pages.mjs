#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Destiny 2 source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'crucible-cheats', 'aim-assist', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'pve-cheats',
];

const REPLACEMENTS = [
	['destiny-2-esp', 'destiny-2-esp'],
	['destiny-2-aimbot', 'destiny-2-aimbot'],
	["'battleye'", "'battleye'"],
	['destiny-2-battleye-bypass', 'destiny-2-battleye-bypass'],
	['undetected-destiny-2-cheats', 'undetected-destiny-2-cheats'],
	['destiny-2-wallhack', 'destiny-2-wallhack'],
	['destiny-2-radar-hack', 'destiny-2-radar-hack'],
	['destiny-2-cheats-2026', 'destiny-2-cheats-2026'],
	['escape-from-destiny-2-cheats', 'escape-from-destiny-2-cheats'],
	['escape-from-destiny-2', 'destiny-2'],
	['Destiny 2', 'Destiny 2'],
	['Destiny 2', 'Destiny 2'],
	['Destiny 2 Cheats', 'Destiny 2 Cheats'],
	['Destiny 2 cheats', 'Destiny 2 cheats'],
	['Destiny 2 cheat', 'Destiny 2 cheat'],
	['Destiny 2 ESP', 'Destiny 2 ESP'],
	['Destiny 2 Aimbot', 'Destiny 2 Aimbot'],
	['Destiny 2 wallhack', 'Destiny 2 wallhack'],
	['Destiny 2 radar', 'Destiny 2 radar'],
	['Destiny 2 firefights', 'Destiny 2 firefights'],
	['Destiny 2 combat', 'Destiny 2 combat'],
	['Destiny 2 patches', 'Destiny 2 patches'],
	['Destiny 2 updates', 'Destiny 2 updates'],
	['Destiny 2 setup', 'Destiny 2 setup'],
	['Destiny 2 license', 'Destiny 2 license'],
	['Destiny 2 licenses', 'Destiny 2 licenses'],
	['Destiny 2 sessions', 'Destiny 2 sessions'],
	['in Destiny 2', 'in Destiny 2'],
	['for Destiny 2', 'for Destiny 2'],
	['Destiny 2 on', 'Destiny 2 on'],
	['Destiny 2 or', 'Destiny 2 or'],
	['Destiny 2\'s', 'Destiny 2\'s'],
	['Destiny 2 ', 'Destiny 2 '],
	['BattlEye anti-cheat', 'BattlEye anti-cheat'],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye bypass', 'BattlEye bypass'],
	['BattlEye Bypass', 'BattlEye Bypass'],
	['BattlEye', 'BattlEye anti-cheat'],
	['battleye', 'battleye'],
	['support@warthundercheat.net', 'support@warthundercheat.net'],
	['Crucible, Trials, and raid encounters', 'Crucible, Trials, and raid encounters'],
	['Crucible, Trials and raid encounters', 'Crucible, Trials and raid encounters'],
	['Crucible fights', 'Crucible fights'],
	['Crucible fight', 'Crucible fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['Guardians', 'players'],
	['operator', 'player'],
	['Guardians', 'Players'],
	['Operator', 'Player'],
	['ability cooldown', 'ability cooldown'],
	['Crucible, Trials, and PvE activities', 'Crucible, Trials, and PvE activities'],
	['Crucible, Trials, and PvE activities', 'Crucible, Trials, and PvE activities'],
	['PvP & PvE', 'PvP & PvE'],
	['powerful loot', 'powerful loot'],
	['powerful loot', 'powerful loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Destiny 2 combat pace'],
	['COD', 'Destiny 2'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Destiny 2 Cheats',
	game: 'Destiny 2',
	checkout: 'Zadeyo',
	battleye: 'BattlEye anti-cheat',
};`,
);
phrases = phrases.replace(/KW\.battleye/g, 'KW.battleye');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Crucible, Trials, and raid encounters'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
