#!/usr/bin/env node
/**
 * Phase 3 — de-stuff pages-en.mjs: differentiate home vs product page, fix internal links.
 * Run: node scripts/phase3-destuff-pages-en.mjs && node scripts/generate-i18n-content.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'scripts/i18n-data/pages-en.mjs');

let src = readFileSync(FILE, 'utf8');

/** Global link and phrasing fixes (order matters). */
const REPLACEMENTS = [
	// Duplicate self-links on same line
	[
		/'Related: <a href="\/d2-cheats\/">Overwatch 2 cheats<\/a> and <a href="\/d2-cheats\/">Overwatch 2 cheats<\/a>\.'/,
		"'See the <a href=\"/overwatch-2-cheats/\">product overview</a> for the full stack.'",
	],
	[
		/'Use this pillar for the core product overview\. For year-specific buying notes, see the <a href="\/d2-cheats\/">Overwatch 2 cheats 2026<\/a> and <a href="\/d2-cheats\/">Overwatch 2 cheats<\/a> pages cover buyer comparisons in cheats wording\.'/, 
		"'This page is the product overview. For buyer notes, see the <a href=\"/blog/buyers-guide/\">buyers guide</a> and <a href=\"/blog/cheats-guide-2026/\">complete guide</a>.'",
	],
	[
		/'Deep links: <a href="\/d2-cheats\/">Overwatch 2 cheats pillar<\/a>, <a href="\/overwatch-2-esp\/">ESP<\/a>, <a href="\/overwatch-2-aimbot\/">Aimbot<\/a>, <a href="\/overwatch-2-esp\/">wallhack<\/a>, <a href="\/d2-radar\/">radar<\/a>, <a href="\/d2-cheats\/">undetected<\/a>\.'/, 
		"'Module pages: <a href=\"/overwatch-2-esp/\">ESP</a>, <a href=\"/overwatch-2-aimbot/\">Aimbot</a>, <a href=\"/overwatch-2-wallhack/\">radar</a>, and <a href=\"/status/\">live status</a>.'",
	],
	[
		/'Also compare the <a href="\/d2-cheats\/">Overwatch 2 cheats<\/a> checklist, <a href="\/blog\/cheats-2026-updates\/">2026 blog guide<\/a>, and <a href="\/faq\/">FAQ<\/a>\.'/, 
		"'Also read the <a href=\"/blog/cheats-2026-updates/\">season updates post</a> and <a href=\"/faq/\">FAQ</a> before checkout.'",
	],
	[
		/'Read the <a href="\/d2-cheats\/">Overwatch 2 cheats<\/a> pillar, Features, Pricing, Setup, and Updates pages\.'/, 
		"'Read <a href=\"/features/\">Features</a>, <a href=\"/pricing/\">Pricing</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/status/\">Updates</a> before checkout.'",
	],
	[
		/'Start with the <a href="\/d2-cheats\/">Overwatch 2 cheats pillar<\/a>, <a href="\/overwatch-2-esp\/">ESP guide<\/a>, <a href="\/overwatch-2-aimbot\/">Aimbot controls<\/a>, and <a href="\/d2-cheats\/">undetected status<\/a> pages if you are comparing tools before checkout\.'/, 
		"'Compare the <a href=\"/overwatch-2-cheats/\">product page</a>, <a href=\"/overwatch-2-esp/\">ESP guide</a>, <a href=\"/overwatch-2-aimbot/\">Aimbot controls</a>, and <a href=\"/status/\">live status</a> before checkout.'",
	],
	[
		/'Still researching\? The <a href="\/d2-cheats\/">Overwatch 2 cheats pillar<\/a> and <a href="\/d2-cheats\/">2026 buyer guide<\/a> summarize the full stack\.'/, 
		"'Still researching? Read the <a href=\"/overwatch-2-cheats/\">product overview</a> and <a href=\"/blog/buyers-guide/\">buyers guide</a>.'",
	],
	[
		/'Review <a href="\/features\/">Features<\/a>, <a href="\/d2-cheats\/">undetected status<\/a>, and <a href="\/d2-cheats\/">Overwatch 2 cheats 2026<\/a> before checkout — monthly \(\$35\) and lifetime \(\$150\) plans available\.'/, 
		"'Review <a href=\"/features/\">Features</a>, <a href=\"/status/\">live status</a>, and <a href=\"/pricing/\">Pricing</a> before checkout.'",
	],
	[
		/'Module pages worth opening: <a href="\/overwatch-2-esp\/">ESP<\/a>, <a href="\/overwatch-2-aimbot\/">Aimbot<\/a>, <a href="\/d2-cheats\/">hacks<\/a>\.'/, 
		"'Open the <a href=\"/overwatch-2-esp/\">ESP</a> and <a href=\"/overwatch-2-aimbot/\">Aimbot</a> guides for module details.'",
	],
	[
		/'New buyers should also read <a href="\/d2-cheats\/">Overwatch 2 cheats 2026<\/a> and complete <a href="\/setup\/">Setup<\/a> after delivery\.'/, 
		"'New buyers should read the <a href=\"/overwatch-2-cheats/\">product overview</a> and complete <a href=\"/setup/\">Setup</a> after delivery.'",
	],
	[
		/'Related reading: <a href="\/d2-cheats\/">undetected Overwatch 2 cheats<\/a>\.'/, 
		"'Related reading: <a href=\"/status/\">live status</a>.'",
	],
	[
		/'Learn the full maintenance story on <a href="\/d2-cheats\/">undetected Overwatch 2 cheats<\/a> and <a href="\/status\/">Easy Anti-Cheat bypass<\/a>\.'/, 
		"'Follow <a href=\"/status/\">Updates</a> for Easy Anti-Cheat maintenance notes.'",
	],
	[
		/'Install steps: <a href="\/setup\/">Setup<\/a>\. Status questions: <a href="\/d2-cheats\/">undetected guide<\/a>\.'/, 
		"'Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/status/\">live status</a>.'",
	],
	[
		/'Also read <a href="\/d2-cheats\/">undetected status<\/a> so you know what “download ready” means after a patch\.'/, 
		"'Check <a href=\"/status/\">live status</a> so you know when a build is ready after a patch.'",
	],
	[
		/'Pair with <a href="\/d2-cheats\/">undetected Overwatch 2 cheats<\/a> for status language buyers expect\.'/, 
		"'Check <a href=\"/status/\">live status</a> before you queue after patches.'",
	],
	[
		/'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="\/d2-cheats\/">mod menu<\/a> page\.'/, 
		"'Toggle radar alongside ESP and Aimbot with in-client hotkeys — see <a href=\"/features/\">Features</a> for the control list.'",
	],
	[
		/'Related landings: <a href="\/setup\/">cheat download<\/a>, <a href="\/d2-cheats\/">mod menu<\/a>, <a href="\/overwatch-2-aimbot\/">aimbot<\/a>, <a href="\/overwatch-2-esp\/">ESP<\/a>\.'/, 
		"'Related pages: <a href=\"/setup/\">Setup</a>, <a href=\"/features/\">Features</a>, <a href=\"/overwatch-2-aimbot/\">Aimbot</a>, and <a href=\"/overwatch-2-esp/\">ESP</a>.'",
	],
	[
		/'See also <a href="\/d2-cheats\/">undetected status<\/a>\.'/, 
		"'See also <a href=\"/status/\">live status</a>.'",
	],
	[
		/'New to the stack\? Start at <a href="\/features\/">Features<\/a> or <a href="\/d2-cheats\/">undetected status<\/a>\.'/, 
		"'New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/status/\">live status</a>.'",
	],
	// Cannibal stub paths → pillars
	[/href="\/d2-crucible\/"/g, 'href="/overwatch-2-aimbot/"'],
	[/href="\/d2-pve\/"/g, 'href="/blog/pve-strategies/"'],
	[/href="\/d2-wallhack\/"/g, 'href="/overwatch-2-esp/"'],
	[/href="\/d2-aim-assist\/"/g, 'href="/overwatch-2-aimbot/"'],
	[/href="\/d2-easy-anticheat\/"/g, 'href="/status/"'],
	// Trim year stuffing in titles
	[/title: '([^']+) 2026 \|/g, "title: '$1 |"],
	[/title: '([^']+) 2026'/g, "title: '$1'"],
];

for (const [from, to] of REPLACEMENTS) {
	src = src.replace(from, to);
}

writeFileSync(FILE, src);
console.log('phase3-destuff-pages-en: applied global fixes to pages-en.mjs');
