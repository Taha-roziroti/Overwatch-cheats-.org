#!/usr/bin/env node
/** Final pass: fix remaining Overwatch 2 references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'crucible-cheats', 'aim-assist', 'best-cheats', 'aimbot-hack', 'esp-hack', 'pve-cheats'];

const REPLACEMENTS = [
	['overwatchImages', 'overwatchImages'],
	["from '../data/overwatch2'", "from '../data/overwatch2'"],
	["from './overwatch2'", "from './overwatch2'"],
	['/undetected-overwatch-2-cheats/', '/undetected-overwatch-2-cheats/'],
	['/overwatch-2-wallhack/', '/overwatch-2-wallhack/'],
	['/overwatch-2-visuals/', '/overwatch-2-visuals/'],
	['/overwatch-2-anticheat-bypass/', '/overwatch-2-anticheat-bypass/'],
	['/overwatch-2-cheats-2026/', '/overwatch-2-cheats-2026/'],
	['/overwatch-2-aimbot/', '/overwatch-2-aimbot/'],
	['/overwatch-2-esp/', '/overwatch-2-esp/'],
	['/overwatch-2-cheats/', '/overwatch-2-esp/'],
	['Overwatch 2 Cheats', 'Overwatch 2 Cheats'],
	['Overwatch 2 cheats', 'Overwatch 2 cheats'],
	['Overwatch 2 wallhack', 'Overwatch 2 wallhack'],
	['Overwatch 2 radar', 'Overwatch 2 radar'],
	['Overwatch 2 Aimbot', 'Overwatch 2 Aimbot'],
	['Overwatch 2 ESP', 'Overwatch 2 ESP'],
	['Overwatch 2', 'Overwatch 2'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat anti-cheat'],
	['easy-anticheat', 'easy-anticheat'],
	['overwatchcheats.org', 'overwatchcheats.org'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
