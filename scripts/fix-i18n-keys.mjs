#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Overwatch 2 Cheats', 'Overwatch 2 Cheats'],
	['Overwatch 2 cheats', 'Overwatch 2 cheats'],
	['Overwatch 2 Cheats', 'Overwatch 2 Cheats'],
	['Overwatch 2', 'Overwatch 2'],
	['Overwatch 2', 'Overwatch 2'],
	['Call of Duty', 'Overwatch 2'],
	['Overwatch 2 PC', 'Overwatch 2 PC'],
	['for Overwatch 2', 'for Overwatch 2'],
	['Overwatch 2 ', 'Overwatch 2 '],
	['destiny-2 ', 'destiny-2 '],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat anti-cheat', 'Easy Anti-Cheat anti-cheat'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat anti-cheat'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['heroes', 'players'],
	['operator', 'player'],
	['heroes', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['extract', 'extract'],
	['warthundercheat.net', 'warthundercheat.net'],
	['Trucos Overwatch 2', 'Trucos Overwatch 2'],
	['Triches Overwatch 2', 'Triches Overwatch 2'],
	['Cheats Overwatch 2', 'Cheats Overwatch 2'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en easy-anticheat key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teasy-anticheat: \{/, "\t'anticheat': {");
pagesEn = pagesEn.replace(/Overwatch 2 Overwatch 2/g, 'Overwatch 2');
pagesEn = pagesEn.replace(/for Overwatch 2 Overwatch 2/g, 'for Overwatch 2');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'easy-anticheat'/g, "'easy-anticheat'");
pagesI18n = pagesI18n.replace(/easy-anticheat:/g, "'anticheat':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
