#!/usr/bin/env node
/**
 * Strip cross-game leftovers and fix canonical paths across content sources.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PATH_REPLACEMENTS = [
	['/features/', '/features/'],
	['/pricing/', '/pricing/'],
	['/setup/', '/setup/'],
	['/updates/', '/status/'],
	['/faq/', '/faq/'],
	['/support/', '/support/'],
	['/reviews/', '/reviews/'],
	['/blog/', '/blog/'],
	['/privacy-policy/', '/privacy/'],
	['/refund-policy/', '/refund/'],
	['/terms/', '/terms/'],
	['/hacks/', '/d2-cheats/'],
];

const COPY_REPLACEMENTS = [
	[/https:\/\/www\.escapefromdestiny-2\.com\/support\//g, 'https://help.bungie.net/'],
	[/https:\/\/www\.escapefromdestiny-2\.com\//g, 'https://www.bungie.net/7/en/Destiny/New'],
	[/Battlestate Games/g, 'Bungie'],
	[/Battlestate client/gi, 'Bungie client'],
	[/Battlestate services/gi, 'Bungie services'],
	[/Customs push/gi, 'Crucible push'],
	[/Customs with/gi, 'Crucible with'],
	[/Customs/g, 'Crucible'],
	[/Interchange/g, 'Europa'],
	[/Woods and/g, 'Nessus and'],
	[/Woods/g, 'Nessus'],
	[/Flea Market/g, 'Eververse'],
	[/flea market/g, 'Eververse'],
	[/flea money/g, 'glimmer'],
	[/roubles/g, 'glimmer'],
	[/dorms clears/g, 'zone clears'],
	[/dorms/g, 'zones'],
	[/scav fights/g, 'close-range PvP fights'],
	[/scav-run/g, 'PvE'],
	[/scav-runs/g, 'PvE activities'],
	[/scav run/g, 'PvE activity'],
	[/BR and PvE/g, 'Crucible and PvE'],
	[/BR and/g, 'Crucible and'],
	[/ BR /g, ' Crucible '],
	[/PMC loadout/gi, 'Guardian loadout'],
	[/PMC/g, 'Guardian'],
	[/extract camp/g, 'objective camp'],
	[/extract holds/g, 'boss phases'],
	[/extract cues/g, 'objective cues'],
	[/extract camping/g, 'objective camping'],
	[/extract or map/g, 'activity or map'],
	[/extract awareness/g, 'objective awareness'],
	[/late-raid extracts/g, 'late-raid objectives'],
	[/extracts/g, 'objectives'],
	[/extract/g, 'objective'],
	[/trader unlocks/g, 'vendor unlocks'],
	[/class-five plates/g, 'high-resilience targets'],
	[/armor pen/g, 'shield break'],
	[/warthundercheat\.net/gi, 'destiny2cheats.org'],
	[/support@warthundercheat\.net/gi, 'support@destiny2cheats.org'],
	[/Epic Games terms/g, 'Bungie terms of service'],
	[/Activision/g, 'Bungie'],
	[/EXT\.activision/g, "EXT['destiny-2']"],
	[/Bungie' anti-cheat/g, "Bungie's anti-cheat"],
	[/Bungie' rules/g, "Bungie's rules"],
	[/undetected Destiny 2 cheats for Destiny 2/g, 'undetected Destiny 2 cheats'],
	[/Destiny 2 cheats package for Destiny 2/g, 'Destiny 2 cheats package'],
	[/for Destiny 2 on Windows PC — with/g, 'on Windows PC — with'],
	[/Blog guides expand BattlEye keyword:/g, 'Related guides:'],
	[/escape-from-buyers-guide/g, 'buyers-guide'],
	[/budget EFT Shops/g, 'Budget Cheat Shops'],
	[/Budget EFT Cheat Shops/g, 'Budget Cheat Shops'],
	[/budget eft cheats/gi, 'budget cheat shops'],
	[/eft cheats/gi, 'Destiny 2 cheats'],
	[/eft esp/gi, 'Destiny 2 ESP'],
	[/eft undetected/gi, 'undetected Destiny 2 cheats'],
	[/eft cheat comparison/gi, 'Destiny 2 cheat comparison'],
	[/Typical Budget EFT Shops/g, 'Typical Budget Cheat Shops'],
	[/against budget EFT cheat shops/g, 'against budget cheat shops'],
	[/destiny-2 wipe/g, 'destiny-2 season'],
	[/wipe updates/g, 'season updates'],
	[/wipe feel/g, 'season feel'],
	[/before a wipe/g, 'before a season reset'],
	[/late-wipe/g, 'late-season'],
	[/\/blog\/destiny-2-scav-run-aggressive-strategies\//g, '/blog/pve-strategies/'],
	[/destiny-2-destiny-2-pve/g, 'destiny-2-pve'],
	[/customs loot path/gi, 'Crucible loot path'],
	[/interchange loot/gi, 'Europa loot'],
	[/pmc habits/gi, 'Guardian habits'],
	[/pmc warmup/gi, 'Guardian warmup'],
	[/pmc loadout/gi, 'Guardian loadout'],
	[/Factory or zones/g, 'Patrol zones'],
	[/Factory/g, 'Patrol zone'],
	[/“eft hacks,”/g, '"Destiny 2 wallhack,"'],
	[/PvE activitys/g, 'PvE activities'],
	[/scav strategies/gi, 'PvE strategies'],
	[/Destiny 2 scav/gi, 'Destiny 2 PvE'],
	[/scav AI shuffle/gi, 'enemy AI movement'],
	[/scavenger panic/gi, 'loot panic'],
	[/Crucible or Factory/g, 'Crucible or Patrol'],
	[/Crucible or Patrol zone/g, 'Crucible or Patrol'],
	[/zones or Factory/g, 'Patrol zones'],
	[/interchangeably/g, 'loosely'],
	[/soft aim profiles, and \. Check/g, 'soft aim profiles, and radar. Check'],
	[/soft aim profiles, and on Windows/g, 'soft aim profiles, and radar on Windows'],
	[/destiny-2:\s*\n/g, "'destiny-2':\n"],
	[/\$\{EXT\.destiny-2\}/g, "${EXT['destiny-2']}"],
	[/Shoreline and Lighthouse/g, 'Nessus and Europa'],
	[/M4A1/g, 'hand cannon'],
	[/class-five armor/g, 'high-resilience targets'],
	[/class-five plates/g, 'high-resilience targets'],
	[/time-to-pen/g, 'time-to-kill'],
	[/meds/g, 'healing'],
	[/stash /g, 'inventory '],
	[/ wiped lobby/g, ' cleared encounter'],
	[/lobbies/g, 'matches'],
	[/third-parties/g, 'flanks'],
	[/third-party scenarios/g, 'cleanup scenarios'],
	[/wipe cadence/g, 'season cadence'],
	[/wipe progression/g, 'seasonal progression'],
	[/ wipe and map/g, ' season and content'],
	[/NaN wipe/g, 'season'],
	[/battleRoyaleIsland: "ESP markers for loot and extracts/g, 'battleRoyaleIsland: "ESP markers for loot and objectives'],
	[/Extract überleben/g, 'Begegnungen überstehen'],
	[/survivre au objective/g, 'terminer les objectifs'],
	[/sobrevivir al objective/g, 'completar objetivos'],
];

function clean(text) {
	let out = text;
	for (const [from, to] of PATH_REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	for (const [from, to] of COPY_REPLACEMENTS) {
		out = out.replace(from, to);
	}
	return out;
}

const TARGETS = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/generate-blog-posts.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'src/data/i18n/gallery-ui.ts',
	'src/data/i18n/locales.ts',
	'src/data/i18n/simple-pages.ts',
	'src/data/site.ts',
	'src/data/faq.ts',
];

for (const rel of TARGETS) {
	const abs = path.join(ROOT, rel);
	const before = readFileSync(abs, 'utf8');
	const after = clean(before);
	if (after !== before) {
		writeFileSync(abs, after, 'utf8');
		console.log(`cleaned ${rel}`);
	}
}

// Blog slug redirect for renamed buyers guide
const redirectsPath = path.join(ROOT, 'public/_redirects');
let redirects = readFileSync(redirectsPath, 'utf8');
const blogRedirect = '/blog/escape-from-buyers-guide';
if (!redirects.includes(blogRedirect)) {
	redirects += `\n${blogRedirect} /blog/buyers-guide/ 301\n${blogRedirect}/ /blog/buyers-guide/ 301\n`;
	writeFileSync(redirectsPath, redirects, 'utf8');
	console.log('added blog slug redirect');
}

// Tarkov legacy paths → Destiny 2 canonical landings
const tarkovRedirects = [
	['/escape-from-tarkov-cheats', '/d2-cheats/'],
	['/tarkov-esp-hack', '/destiny-2-esp/'],
	['/tarkov-aimbot-hack', '/destiny-2-aimbot/'],
	['/best-tarkov-cheats', '/d2-cheats/'],
	['/tarkov-cheats-2026', '/d2-cheats/'],
	['/undetected-tarkov-cheats', '/d2-cheats/'],
	['/tarkov-mod-menu', '/d2-crucible/'],
	['/tarkov-unlock-all', '/d2-cheats/'],
	['/tarkov-soft-aim', '/destiny-2-aimbot/'],
	['/tarkov-wallhack', '/destiny-2-esp/'],
];
let added = 0;
for (const [from, to] of tarkovRedirects) {
	const rule = `${from} ${to} 301`;
	if (!redirects.includes(rule)) {
		redirects += `\n${from} ${to} 301\n${from}/ ${to} 301`;
		added++;
	}
}
if (added) {
	writeFileSync(redirectsPath, redirects, 'utf8');
	console.log(`updated ${added} tarkov redirect targets`);
}

console.log('clean-destiny-copy complete');
