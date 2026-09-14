#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Overwatch 2 source. */
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
	['overwatch-2-esp', 'overwatch-2-esp'],
	['overwatch-2-aimbot', 'overwatch-2-aimbot'],
	["'easy-anticheat'", "'easy-anticheat'"],
	['overwatch-2-anticheat-bypass', 'overwatch-2-anticheat-bypass'],
	['undetected-overwatch-2-cheats', 'undetected-overwatch-2-cheats'],
	['overwatch-2-wallhack', 'overwatch-2-wallhack'],
	['overwatch-2-visuals', 'overwatch-2-visuals'],
	['overwatch-2-cheats-2026', 'overwatch-2-cheats-2026'],
	['escape-from-overwatch-2-cheats', 'escape-from-overwatch-2-cheats'],
	['escape-from-destiny-2', 'destiny-2'],
	['Overwatch 2', 'Overwatch 2'],
	['Overwatch 2', 'Overwatch 2'],
	['Overwatch 2 Cheats', 'Overwatch 2 Cheats'],
	['Overwatch 2 cheats', 'Overwatch 2 cheats'],
	['Overwatch 2 cheat', 'Overwatch 2 cheat'],
	['Overwatch 2 ESP', 'Overwatch 2 ESP'],
	['Overwatch 2 Aimbot', 'Overwatch 2 Aimbot'],
	['Overwatch 2 wallhack', 'Overwatch 2 wallhack'],
	['Overwatch 2 radar', 'Overwatch 2 radar'],
	['Overwatch 2 firefights', 'Overwatch 2 firefights'],
	['Overwatch 2 combat', 'Overwatch 2 combat'],
	['Overwatch 2 patches', 'Overwatch 2 patches'],
	['Overwatch 2 updates', 'Overwatch 2 updates'],
	['Overwatch 2 setup', 'Overwatch 2 setup'],
	['Overwatch 2 license', 'Overwatch 2 license'],
	['Overwatch 2 licenses', 'Overwatch 2 licenses'],
	['Overwatch 2 sessions', 'Overwatch 2 sessions'],
	['in Overwatch 2', 'in Overwatch 2'],
	['for Overwatch 2', 'for Overwatch 2'],
	['Overwatch 2 on', 'Overwatch 2 on'],
	['Overwatch 2 or', 'Overwatch 2 or'],
	['Overwatch 2\'s', 'Overwatch 2\'s'],
	['Overwatch 2 ', 'Overwatch 2 '],
	['Easy Anti-Cheat anti-cheat', 'Easy Anti-Cheat anti-cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat anti-cheat'],
	['easy-anticheat', 'easy-anticheat'],
	['support@warthundercheat.net', 'support@warthundercheat.net'],
	['Quick Play, Competitive, and hero matchups', 'Quick Play, Competitive, and hero matchups'],
	['Quick Play, Competitive and raid encounters', 'Quick Play, Competitive and raid encounters'],
	['Quick Play fights', 'Quick Play fights'],
	['Quick Play fight', 'Quick Play fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['heroes', 'players'],
	['operator', 'player'],
	['heroes', 'Players'],
	['Operator', 'Player'],
	['ability cooldown', 'ability cooldown'],
	['Quick Play, Competitive, and Arcade modes', 'Quick Play, Competitive, and Arcade modes'],
	['Quick Play, Competitive, and Arcade modes', 'Quick Play, Competitive, and Arcade modes'],
	['PvP & PvE', 'PvP & PvE'],
	['powerful loot', 'powerful loot'],
	['powerful loot', 'powerful loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Overwatch 2 combat pace'],
	['COD', 'Overwatch 2'],
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
	product: 'Overwatch 2 Cheats',
	game: 'Overwatch 2',
	checkout: 'Zadeyo',
	easy-anticheat: 'Easy Anti-Cheat anti-cheat',
};`,
);
phrases = phrases.replace(/KW\.easy-anticheat/g, 'KW.easy-anticheat');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Quick Play, Competitive, and hero matchups'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
