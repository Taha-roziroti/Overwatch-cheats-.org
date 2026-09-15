#!/usr/bin/env node
/** Fail if any non-en locale still uses English for critical shell UI keys. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES } from './i18n-data/constants.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, '..', 'public', 'locales');

const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en', 'translation.json'), 'utf8'));

const critical = [
	['nav', 'home'],
	['nav', 'preview'],
	['nav', 'store'],
	['nav', 'status'],
	['cta', 'buyShort'],
	['hero', 'accent'],
	['hero', 'subtitle'],
	['reviews', 'homeTitle'],
	['reviews', 'eyebrow'],
	['homeSeo', 'title'],
	['homeSeo', 'lede'],
	['common', 'selectLanguage'],
	['common', 'breadcrumb'],
];

const allowSameAsEn = new Set([
	'nav.esp',
	'nav.aimbot',
	'nav.faq',
	'nav.forum',
	'nav.reviews',
	'nav.status',
	'hero.chipEsp',
	'hero.chipAim',
]);

function get(obj, parts) {
	return parts.reduce((a, k) => a?.[k], obj);
}

let failed = false;

for (const locale of LOCALES) {
	if (locale === 'en') continue;
	const data = JSON.parse(fs.readFileSync(path.join(localesDir, locale, 'translation.json'), 'utf8'));
	const issues = [];

	for (const parts of critical) {
		const key = parts.join('.');
		const ev = get(en, parts);
		const lv = get(data, parts);
		if (!lv || lv === ev) {
			if (!allowSameAsEn.has(key)) issues.push(key);
		}
		if (typeof lv === 'string' && /\bUndetected\b/i.test(lv) && locale !== 'en') {
			issues.push(`${key} contains English "Undetected"`);
		}
	}

	if (issues.length) {
		failed = true;
		console.error(`${locale}: ${issues.join(', ')}`);
	}
}

if (failed) {
	console.error('\nLocale validation failed.');
	process.exit(1);
}

console.log(`✓ All ${LOCALES.length} locale catalogs passed shell UI validation.`);
