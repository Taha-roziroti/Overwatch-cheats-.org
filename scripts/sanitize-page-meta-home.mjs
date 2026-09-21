/**
 * One-shot sanitizer for PAGE_META_HOME — removes SEO dancing, undetected stuffing,
 * and broken "ESP and wallhack y/et/e Aimbot" hybrids.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const file = path.join(import.meta.dirname, 'i18n-data/pages-i18n.mjs');
let src = readFileSync(file, 'utf8');

const start = src.indexOf('const PAGE_META_HOME = {');
const end = src.indexOf('\n};', start) + 3;
if (start < 0 || end < 3) {
	console.error('PAGE_META_HOME block not found');
	process.exit(1);
}

let block = src.slice(start, end);

block = block
	.replace(/ 2026/g, '')
	.replace(/\s*—\s*Undetected ESP/g, ' — ESP')
	.replace(/\s*—\s*Undetected /g, ' — ')
	.replace(/\bundetected\b/gi, '')
	.replace(/\bundetectable\b/gi, '')
	.replace(/\bindetectables?\b/gi, '')
	.replace(/\bindétectables?\b/gi, '')
	.replace(/\bindetectáveis?\b/gi, '')
	.replace(/ESP and wallhack y Aimbot/gi, 'ESP, wallhack y aimbot')
	.replace(/ESP and wallhack et Aimbot/gi, 'ESP, wallhack et aimbot')
	.replace(/ESP and wallhack e Aimbot/gi, 'ESP, wallhack e aimbot')
	.replace(/ESP and wallhack i Aimbot/gi, 'ESP, wallhack i aimbot')
	.replace(/ESP and wallhack ve Aimbot/gi, 'ESP, wallhack ve aimbot')
	.replace(/ESP and wallhack en Aimbot/gi, 'ESP, wallhack en aimbot')
	.replace(/ESP and wallhack och Aimbot/gi, 'ESP, wallhack och aimbot')
	.replace(/ESP and wallhack și Aimbot/gi, 'ESP, wallhack și aimbot')
	.replace(/ESP and wallhack a Aimbot/gi, 'ESP, wallhack a aimbot')
	.replace(/ESP and wallhack и Aimbot/gi, 'ESP, wallhack и aimbot')
	.replace(/ESP and wallhack і Aimbot/gi, 'ESP, wallhack і aimbot')
	.replace(/ESP and wallhack, Aimbot/gi, 'ESP, wallhack, aimbot')
	.replace(/ESP and wallhack /gi, 'ESP, wallhack, ')
	.replace(/Paquete\s+/g, 'Paquete ')
	.replace(/Pack\s+/g, 'Pack ')
	.replace(/Paket\s+/g, 'Paket ')
	.replace(/Pacchetto\s+/g, 'Pacchetto ')
	.replace(/pakket\s+/gi, 'pakket ')
	.replace(/пакет\s+/gi, 'пакет ')
	.replace(/  +/g, ' ')
	.replace(/title: 'Overwatch 2 Cheats \|/g, "title: 'Buy Overwatch 2 Cheats |")
	.replace(/,\s*,/g, ',')
	.replace(/\s+\./g, '.');

src = src.slice(0, start) + block + src.slice(end);
writeFileSync(file, src);
console.log('Sanitized PAGE_META_HOME in pages-i18n.mjs');
