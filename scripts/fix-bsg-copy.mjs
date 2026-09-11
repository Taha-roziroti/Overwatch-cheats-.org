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
	['Activision security', 'BattlEye security'],
	['Activision Status', 'Destiny 2 Support'],
	['Activision Destiny 2', 'Destiny 2'],
	['Activision Support', 'Destiny 2 Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'BattlEye guide'],
	['undetected EAC notes', 'undetected BattlEye notes'],
	['status.epicgames.com', 'www.escapefromdestiny-2.com/support'],
	['www.epicgames.com/destiny-2', 'www.escapefromdestiny-2.com'],
	['www.destiny-2.com/competitive', 'www.escapefromdestiny-2.com'],
	['https://www.destiny-2.com/', 'https://www.escapefromdestiny-2.com/'],
	['Destiny 2.com', 'Destiny 2'],
	['Destiny 2 Competitive', 'Destiny 2'],
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
