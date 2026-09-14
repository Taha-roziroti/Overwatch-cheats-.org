#!/usr/bin/env node
/** Domain + SEO slug migration: overwatchcheats.org / ow2-* → overwatchcheats.org / overwatch-2-* */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['overwatch-2-cheats', 'overwatch-2-cheats'],
	['overwatch-2-wallhack', 'overwatch-2-wallhack'],
];

const REPLACEMENTS = [
	['https://overwatchcheats.org', 'https://overwatchcheats.org'],
	['https://www.overwatchcheats.org', 'https://www.overwatchcheats.org'],
	['www.overwatchcheats.org', 'www.overwatchcheats.org'],
	['overwatchcheats.org', 'overwatchcheats.org'],
	['support@overwatchcheats.org', 'support@overwatchcheats.org'],
	["MONEY_PATH = '/overwatch-2-cheats/'", "MONEY_PATH = '/overwatch-2-cheats/'"],
	['/overwatch-2-cheats/', '/overwatch-2-cheats/'],
	['/overwatch-2-cheats/', '/overwatch-2-cheats/'],
	['/overwatch-2-aimbot/', '/overwatch-2-aimbot/'],
	['/setup/', '/setup/'],
	['/status/', '/status/'],
	['/overwatch-2-wallhack/', '/overwatch-2-wallhack/'],
	['/overwatch-2-undetected/', '/overwatch-2-undetected/'],
	['/overwatch-2-wallhack/', '/overwatch-2-wallhack/'],
	['/overwatch-2-cheats/', '/overwatch-2-cheats/'],
	['overwatch-2-cheats', 'overwatch-2-cheats'],
	['overwatch-2-cheats', 'overwatch-2-cheats'],
	['overwatch-2-aimbot', 'overwatch-2-aimbot'],
	['setup', 'setup'],
	['status', 'status'],
	['overwatch-2-wallhack', 'overwatch-2-wallhack'],
	['overwatch-2-undetected', 'overwatch-2-undetected'],
	['overwatch-2-wallhack', 'overwatch-2-wallhack'],
	['overwatch-2-cheats', 'overwatch-2-cheats'],
	['project-name=overwatchcheats', 'project-name=overwatchcheats'],
	['name = "overwatchcheats"', 'name = "overwatchcheats"'],
	['what-are-overwatch-2-cheats', 'what-are-overwatch-2-cheats'],
	['Overwatch 2 cheats with ESP, aimbot, and wallhack', 'Overwatch 2 cheats with ESP, aimbot, and wallhack'],
	['linkOverwatch2Cheats', 'linkOverwatch2Cheats'],
];

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (!SKIP_DIRS.has(entry.name)) files.push(...(await walk(full)));
		} else files.push(full);
	}
	return files;
}

async function main() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const fromPath = path.join(ROOT, 'src/pages', from);
		const toPath = path.join(ROOT, 'src/pages', to);
		try {
			await rename(fromPath, toPath);
			console.log(`Renamed pages/${from} → pages/${to}`);
		} catch {
			/* already renamed */
		}
	}

	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file).toLowerCase();
		const textExts = new Set(['.ts', '.tsx', '.js', '.mjs', '.json', '.astro', '.md', '.css', '.txt', '.toml']);
		if (!textExts.has(ext) && path.basename(file) !== '_redirects') continue;
		const raw = await readFile(file, 'utf8');
		let next = raw;
		for (const [from, to] of REPLACEMENTS) next = next.split(from).join(to);
		if (next !== raw) {
			await writeFile(file, next, 'utf8');
			changed++;
		}
	}
	console.log(`Updated ${changed} files.`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
