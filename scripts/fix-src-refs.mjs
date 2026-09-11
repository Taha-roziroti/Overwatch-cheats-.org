#!/usr/bin/env node
/** Final pass: fix remaining Destiny 2 references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'crucible-cheats', 'aim-assist', 'best-cheats', 'aimbot-hack', 'esp-hack', 'pve-cheats'];

const REPLACEMENTS = [
	['destinyImages', 'destinyImages'],
	["from '../data/destiny'", "from '../data/destiny'"],
	["from './destiny'", "from './destiny'"],
	['/undetected-destiny-2-cheats/', '/undetected-destiny-2-cheats/'],
	['/destiny-2-wallhack/', '/destiny-2-wallhack/'],
	['/destiny-2-radar-hack/', '/destiny-2-radar-hack/'],
	['/destiny-2-battleye-bypass/', '/destiny-2-battleye-bypass/'],
	['/destiny-2-cheats-2026/', '/destiny-2-cheats-2026/'],
	['/destiny-2-aimbot/', '/destiny-2-aimbot/'],
	['/destiny-2-esp/', '/destiny-2-esp/'],
	['/destiny-2-cheats/', '/destiny-2-esp/'],
	['Destiny 2 Cheats', 'Destiny 2 Cheats'],
	['Destiny 2 cheats', 'Destiny 2 cheats'],
	['Destiny 2 wallhack', 'Destiny 2 wallhack'],
	['Destiny 2 radar', 'Destiny 2 radar'],
	['Destiny 2 Aimbot', 'Destiny 2 Aimbot'],
	['Destiny 2 ESP', 'Destiny 2 ESP'],
	['Destiny 2', 'Destiny 2'],
	['BattlEye', 'BattlEye anti-cheat'],
	['battleye', 'battleye'],
	['warthundercheat.net', 'warthundercheat.net'],
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
