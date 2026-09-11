#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromdestiny-2.com)
	['published by ${EXT.activision}', 'published by Battlestate Games (${EXT.destiny-2})'],
	['from ${EXT.activision}', 'from ${EXT.destiny-2}'],
	['via ${EXT.activision}', 'via ${EXT.destiny-2}'],
	['belong with ${EXT.activision}', 'belong with Battlestate Games'],
	['${EXT.activision} terms', 'Battlestate Games terms'],
	['${EXT.activision} season updates', '${EXT.destiny-2} wipe and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Destiny 2
	['vehicles, loot', 'Guardians, enemies, loot'],
	['notice vehicles before they push your position', 'spot Guardians and enemies before they push your angle'],
	['Player, vehicle, and loot', 'Player, boss, and loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'boss markers, extract cues, and loot pins so only raid-critical',
	],
	['Vehicle and supply-drop threat cues', 'Boss and extract awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'loot and container pins'],
	['Loot and chest markers', 'Loot and container markers'],
	['loot and chest markers', 'loot and container markers'],
	['chests worth the detour', 'powerful loot worth the detour'],
	['vehicles, and chests', 'bosses, and containers'],
	['loot, vehicles, and chests', 'loot, bosses, and containers'],
	['players, loot, and vehicles', 'Guardians, enemies, and loot'],
	['players, loot, vehicles', 'Guardians, enemies, loot'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track bosses and containers'],
	['full BR loop', 'full raid loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'raid-critical'],
	['endgame circles', 'extract holds'],
	['final circles', 'late-raid extracts'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first raid'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range scav fights'],
	['Battle Pass', 'wipe progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every raid',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and bolt-actions'],
	['AR / SMG / sniper', 'AR / SMG / bolt-action'],
	['players, loot, and vehicles', 'Guardians, enemies, and loot'],
	['for players, loot, and vehicles', 'for players, loot, and extracts'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['RBattlEye out for', 'Reach out for'],
	['an BattlEye', 'a BattlEye'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['Destiny 2 cheats & Destiny 2 cheats', 'Destiny 2 cheats'],
	[
		'covering both Destiny 2 cheats and Destiny 2 cheats search intent',
		'covering both “Destiny 2 cheats” and “Destiny 2 cheats” search intent',
	],
	[
		'also searched as Destiny 2 cheats and Destiny 2 cheat.',
		'built for Destiny 2 on Windows PC.',
	],
	[
		'Destiny 2 cheats vs Destiny 2 cheats — same stack, clear pages',
		'How this Destiny 2 cheats pillar fits nearby pages',
	],
	[
		'Searchers use Destiny 2 cheats and Destiny 2 cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/destiny-2-esp-hack/', '/destiny-2-esp/'],
	['/destiny-2-aimbot-hack/', '/destiny-2-aimbot/'],
	['/best-destiny-2-cheats/', '/destiny-2-cheats/'],
	['best Destiny 2 cheats guide', 'Destiny 2 cheats pillar'],
	['best Destiny 2 cheats checklist', 'Destiny 2 cheats checklist'],
	['best Destiny 2 cheats', 'Destiny 2 cheats'],
	[
		'Prefer softer tracking? Read the <a href="/destiny-2-aim-assist/">soft aim guide</a>. Want the search term most players use? See <a href="/destiny-2-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/destiny-2-aim-assist/">soft aim guide</a>.',
	],
	['Related landings: <a href="/destiny-2-cheat-download/">cheat download</a>, <a href="/destiny-2-crucible-cheats/">mod menu</a>, <a href="/destiny-2-aimbot/">aimbot hack</a>, <a href="/destiny-2-esp/">ESP hack</a>.',
		'Related landings: <a href="/destiny-2-cheat-download/">cheat download</a>, <a href="/destiny-2-crucible-cheats/">mod menu</a>, <a href="/destiny-2-aimbot/">aimbot</a>, <a href="/destiny-2-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
