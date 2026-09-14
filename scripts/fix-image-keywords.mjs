#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'Overwatch 2 cheats', espWallhack: 'Overwatch 2 cheats wallhack', aimbotCombat: 'Overwatch 2 cheats aimbot', squadFight: 'Overwatch 2 cheats', playerEsp: 'Overwatch 2 cheats esp', headerArt: 'Overwatch 2 cheats aimbot', cheatsPackage: 'Overwatch 2 cheats radar', rebootFight: 'Overwatch 2 cheats aimbot', battleRoyale: 'Overwatch 2 cheats', battleRoyaleIsland: 'Overwatch 2 cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Overwatch 2 ESP player tags hack'", "imageAlt: 'Overwatch 2 cheats esp'"],
	["imageAlt: 'Overwatch 2 ESP radar hack'", "imageAlt: 'Overwatch 2 cheats radar'"],
	["imageAlt: 'Overwatch 2 aimbot sniper kill'", "imageAlt: 'Overwatch 2 cheats aimbot'"],
	["imageAlt: 'Overwatch 2 aimbot skeleton targeting'", "imageAlt: 'Overwatch 2 cheats aimbot'"],
	["imageAlt: 'Overwatch 2 cheats ADS combat'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheats setup PC activation'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheats FAQ ESP aimbot'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheats support license help'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Undetected Overwatch 2 cheats ESP wallhack'", "imageAlt: 'undetected Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 wallhack skeleton ESP'", "imageAlt: 'Overwatch 2 cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass destiny-2 ESP aimbot'", "imageAlt: 'Overwatch 2 cheats easy-anticheat'"],
	["imageAlt: 'Overwatch 2 cheats 2026 ESP aimbot'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheats combat aimbot'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheat download ESP aimbot'", "imageAlt: 'Overwatch 2 cheats download'"],
	["imageAlt: 'Overwatch 2 mod menu ESP aimbot'", "imageAlt: 'Overwatch 2 cheats mod menu'"],
	["imageAlt: 'Overwatch 2 soft aim aimbot settings'", "imageAlt: 'Overwatch 2 cheats soft aim'"],
	["imageAlt: 'Best Overwatch 2 cheats 2026 ESP'", "imageAlt: 'best Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 aimbot hack combat'", "imageAlt: 'Overwatch 2 cheats aimbot'"],
	["imageAlt: 'Overwatch 2 ESP hack wallhack'", "imageAlt: 'Overwatch 2 cheats esp'"],
	["imageAlt: 'Overwatch 2 unlock all ESP aimbot guide'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheats privacy policy'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheats refund policy'", "imageAlt: 'Overwatch 2 cheats'"],
	["imageAlt: 'Overwatch 2 cheats terms of use'", "imageAlt: 'Overwatch 2 cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Overwatch 2 ${meta.altKeyword}`")
	.join("imageAlt: 'Overwatch 2 cheats'")
	.split("galleryTitle: `Overwatch 2 Cheats ${topicName}`")
	.join("galleryTitle: 'Overwatch 2 cheats'")
	.split("imageAlt: `Overwatch 2 cheats ${kind} policy`")
	.join("imageAlt: 'Overwatch 2 cheats'")
	.split("galleryTitle: `Overwatch 2 Cheats ${kind} resources`")
	.join("galleryTitle: 'Overwatch 2 cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
