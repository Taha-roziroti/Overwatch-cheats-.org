#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'Destiny 2 cheats', espWallhack: 'Destiny 2 cheats wallhack', aimbotCombat: 'Destiny 2 cheats aimbot', squadFight: 'Destiny 2 cheats', playerEsp: 'Destiny 2 cheats esp', headerArt: 'Destiny 2 cheats aimbot', cheatsPackage: 'Destiny 2 cheats radar', rebootFight: 'Destiny 2 cheats aimbot', battleRoyale: 'Destiny 2 cheats', battleRoyaleIsland: 'Destiny 2 cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Destiny 2 ESP player tags hack'", "imageAlt: 'Destiny 2 cheats esp'"],
	["imageAlt: 'Destiny 2 ESP radar hack'", "imageAlt: 'Destiny 2 cheats radar'"],
	["imageAlt: 'Destiny 2 aimbot sniper kill'", "imageAlt: 'Destiny 2 cheats aimbot'"],
	["imageAlt: 'Destiny 2 aimbot skeleton targeting'", "imageAlt: 'Destiny 2 cheats aimbot'"],
	["imageAlt: 'Destiny 2 cheats ADS combat'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheats setup PC activation'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheats updates BattlEye maintenance'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheats FAQ ESP aimbot'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheats support license help'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Undetected Destiny 2 cheats ESP wallhack'", "imageAlt: 'undetected Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 wallhack skeleton ESP'", "imageAlt: 'Destiny 2 cheats wallhack'"],
	["imageAlt: 'BattlEye bypass destiny-2 ESP aimbot'", "imageAlt: 'Destiny 2 cheats battleye'"],
	["imageAlt: 'Destiny 2 cheats 2026 ESP aimbot'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheats combat aimbot'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheat download ESP aimbot'", "imageAlt: 'Destiny 2 cheats download'"],
	["imageAlt: 'Destiny 2 mod menu ESP aimbot'", "imageAlt: 'Destiny 2 cheats mod menu'"],
	["imageAlt: 'Destiny 2 soft aim aimbot settings'", "imageAlt: 'Destiny 2 cheats soft aim'"],
	["imageAlt: 'Best Destiny 2 cheats 2026 ESP'", "imageAlt: 'best Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 aimbot hack combat'", "imageAlt: 'Destiny 2 cheats aimbot'"],
	["imageAlt: 'Destiny 2 ESP hack wallhack'", "imageAlt: 'Destiny 2 cheats esp'"],
	["imageAlt: 'Destiny 2 unlock all ESP aimbot guide'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheats privacy policy'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheats refund policy'", "imageAlt: 'Destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 cheats terms of use'", "imageAlt: 'Destiny 2 cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Destiny 2 ${meta.altKeyword}`")
	.join("imageAlt: 'Destiny 2 cheats'")
	.split("galleryTitle: `Destiny 2 Cheats ${topicName}`")
	.join("galleryTitle: 'Destiny 2 cheats'")
	.split("imageAlt: `Destiny 2 cheats ${kind} policy`")
	.join("imageAlt: 'Destiny 2 cheats'")
	.split("galleryTitle: `Destiny 2 Cheats ${kind} resources`")
	.join("galleryTitle: 'Destiny 2 cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
