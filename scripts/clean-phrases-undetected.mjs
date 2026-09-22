#!/usr/bin/env node
/** Remove undetected keyword stuffing from phrases.mjs s1/s3 templates. */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), 'i18n-data/phrases.mjs');
let s = readFileSync(file, 'utf8');

s = s.replace(/, undetected: '[^']*'/g, '');
s = s.replace(/\$\{phrases\.\w+\.undetected\}/g, '');
s = s.replace(/ als  Paket/g, ' als Premium-Paket');
s = s.replace(/ jako  pakiet/g, ' jako pakiet premium');
s = s.replace(/ como  pakket/g, ' als premium pakket');
s = s.replace(/ in  pachet/g, ' într-un pachet premium');
s = s.replace(/ como  pacote/g, ' como pacote premium');
s = s.replace(/ como  balíček/g, ' jako prémiový balíček');
s = s.replace(/ у  пакет/g, ' у премиум-пакет');
s = s.replace(/ у  пакеті/g, ' у преміум-пакет');
s = s.replace(/  +/g, ' ');

const s3Replacements = [
	[/undetected status/gi, 'patch status'],
	[/undetected stav/gi, 'stav patchů'],
	[/undetected statu/gi, 'statu patchů'],
	[/undetected stat/gi, 'patch status'],
	[/undetected/gi, 'patch'],
	[/indetectable permanente/gi, 'estado estable permanente'],
	[/indétectable permanent/gi, 'statut stable permanent'],
	[/indetectável permanente/gi, 'status estável permanente'],
	[/indetectable permanente/gi, 'stato stabile permanente'],
	[/indetectables/gi, 'premium'],
	[/indétectables/gi, 'premium'],
	[/indetectáveis/gi, 'premium'],
];
for (const [re, rep] of s3Replacements) s = s.replace(re, rep);

writeFileSync(file, s);
console.log('Cleaned undetected stuffing from phrases.mjs');
