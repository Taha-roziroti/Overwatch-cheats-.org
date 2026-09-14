#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'Overwatch 2 Support'],
	['Activision Overwatch 2', 'Overwatch 2'],
	['Activision Support', 'Overwatch 2 Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromdestiny-2.com/support'],
	['www.epicgames.com/destiny-2', 'www.escapefromdestiny-2.com'],
	['www.destiny-2.com/competitive', 'www.escapefromdestiny-2.com'],
	['https://www.destiny-2.com/', 'https://www.escapefromdestiny-2.com/'],
	['Overwatch 2.com', 'Overwatch 2'],
	['Overwatch 2 Competitive', 'Overwatch 2'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
