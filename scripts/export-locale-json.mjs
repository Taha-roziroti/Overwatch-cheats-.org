#!/usr/bin/env node
/**
 * Export public/locales/{locale}/translation.json for all 22 locales.
 * Merges ui-strings (SEO pipeline) with English shell template + shell phrases.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { LOCALES } from './i18n-data/constants.mjs';
import { getShellPhrases } from './i18n-data/ui-shell-phrases.mjs';
import { navCheatsLabels, navStatusLabels } from './i18n-data/nav-cheats-labels.mjs';
import { buildLocaleOverlay } from './i18n-data/locale-overlays.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const localesDir = path.join(root, 'public', 'locales');

function deepClone(value) {
	return JSON.parse(JSON.stringify(value));
}

function deepAssign(target, source) {
	for (const [key, value] of Object.entries(source)) {
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			if (!target[key] || typeof target[key] !== 'object') target[key] = {};
			deepAssign(target[key], value);
		} else {
			target[key] = value;
		}
	}
}

function mergeUiIntoTemplate(template, locale, ui, shell) {
	const out = deepClone(template);

	if (ui.nav) {
		Object.assign(out.nav, ui.nav);
		out.nav.preview = navCheatsLabels[locale] ?? ui.nav.hacks ?? out.nav.preview;
		out.nav.hacks = navCheatsLabels[locale] ?? ui.nav.hacks ?? out.nav.hacks;
		out.nav.store = ui.nav.pricing ?? out.nav.store;
		out.nav.status = navStatusLabels[locale] ?? ui.nav.updates ?? out.nav.status;
		out.nav.forum = shell.forum;
		out.nav.reviews = shell.reviewsEyebrow;
		out.nav.openMenu = shell.openMenu;
		out.nav.closeMenu = shell.closeMenu;
		out.nav.primaryAria = locale === 'en' ? 'Primary' : out.nav.primaryAria ?? 'Primary';
		out.nav.mobileAria = locale === 'en' ? 'Mobile' : out.nav.mobileAria ?? 'Mobile';
	}

	if (ui.hero) {
		out.hero.accent = ui.hero.accent;
		out.hero.accentShort = ui.hero.accentShort;
		out.hero.subtitle = ui.hero.subtitle;
		out.hero.subtitleShort = ui.hero.subtitleShort;
		out.hero.buyNow = ui.hero.buyNow;
		out.hero.seeFeatures = ui.hero.seeFeatures;
		out.hero.title = locale === 'en' ? out.hero.title : ui.hero.accent;
		out.hero.priceFrom = shell.priceFrom;
		out.hero.chipEsp = shell.chipEsp;
		out.hero.chipAim = shell.chipAim;
		out.hero.chipRadar = shell.chipRadar;
		out.hero.chipUpdates = shell.chipUpdates;
	}

	if (ui.trust) Object.assign(out.trust, ui.trust);
	if (ui.product) Object.assign(out.product, ui.product);
	if (ui.reviews) {
		Object.assign(out.reviews, ui.reviews);
		out.reviews.eyebrow = shell.reviewsEyebrow;
		out.reviews.homeTitle = ui.reviews.title;
		out.reviews.buyerReviews = shell.buyerReviews;
		out.reviews.averageAria = shell.averageAria;
		out.reviews.outOfFiveAria = `${ui.reviews.outOf ?? 'out of 5'}`.includes('{{')
			? '{{rating}} out of 5'
			: `{{rating}} ${ui.reviews.outOf}`;
		out.reviews.readAll = shell.readAllReviews;
	}

	if (ui.common) {
		Object.assign(out.common, ui.common);
		out.common.selectLanguage = shell.selectLanguage;
	}

	if (ui.footer) Object.assign(out.footer, ui.footer);
	if (ui.images) Object.assign(out.images, ui.images);
	if (ui.affiliate) {
		out.affiliate = { ...(out.affiliate ?? {}), ...ui.affiliate };
	}

	out.cta.buy = ui.hero?.buyNow ?? ui.common?.buyNow ?? out.cta.buy;
	out.cta.buyShort = shell.buyShort;

	// Home section — derive from localized hero/product/nav
	out.home.aboutEyebrow = shell.overview;
	out.home.aboutTitle = ui.hero?.accent ?? out.home.aboutTitle;
	out.home.aboutLede = ui.hero?.subtitle ?? out.home.aboutLede;
	out.home.featEsp = shell.chipEsp;
	out.home.featAim = shell.chipAim;
	out.home.featRadar = shell.chipRadar;
	out.home.featStream = shell.chipUpdates;
	out.home.ctaPlans = shell.viewPlans;
	out.home.ctaStatus = shell.checkStatus;
	out.home.guidesLabel = shell.guidesLabel;
	out.home.linkCheats = ui.nav?.hacks ?? out.home.linkCheats;
	out.home.linkEsp = ui.nav?.esp ?? out.home.linkEsp;
	out.home.linkAimbot = ui.nav?.aimbot ?? out.home.linkAimbot;
	out.home.linkFeatures = ui.nav?.features ?? out.home.linkFeatures;

	// homeSeo — category titles from nav; link labels stay unique (locale-overlays)
	out.homeSeo.catFeatures = ui.nav?.features ?? out.homeSeo.catFeatures;
	out.homeSeo.catStatus = ui.nav?.updates ?? out.homeSeo.catStatus;
	out.homeSeo.catStore = ui.nav?.pricing ?? out.homeSeo.catStore;

	out.deals.pricing = ui.nav?.pricing ?? out.deals.pricing;
	out.deals.featEsp = shell.chipEsp;
	out.deals.featAim = `${shell.chipAim} & hotkeys`;
	out.deals.featRadar = 'wallhack overlays';
	out.deals.featUpdates = ui.nav?.updates ?? out.deals.featUpdates;

	out.categoryRow.hacks = ui.nav?.hacks ?? out.categoryRow.hacks;
	out.categoryRow.esp = ui.nav?.esp ?? out.categoryRow.esp;
	out.categoryRow.aimbot = ui.nav?.aimbot ?? out.categoryRow.aimbot;
	out.categoryRow.pricing = ui.nav?.pricing ?? out.categoryRow.pricing;
	out.categoryRow.setup = ui.nav?.setup ?? out.categoryRow.setup;

	deepAssign(out, buildLocaleOverlay(locale, ui));

	return out;
}

const enTemplate = JSON.parse(
	fs.readFileSync(path.join(localesDir, 'en', 'translation.json'), 'utf8'),
);

for (const locale of LOCALES) {
	const ui = allUiStrings[locale];
	if (!ui) {
		console.warn(`skip ${locale}: no ui strings`);
		continue;
	}

	const shell = getShellPhrases(locale);
	const merged = mergeUiIntoTemplate(enTemplate, locale, ui, shell);

	// Preserve hand-maintained Spanish file sections where richer
	if (locale === 'es' && fs.existsSync(path.join(localesDir, 'es', 'translation.json'))) {
		const existing = JSON.parse(
			fs.readFileSync(path.join(localesDir, 'es', 'translation.json'), 'utf8'),
		);
		Object.assign(merged.homeSeo, existing.homeSeo);
		Object.assign(merged.home, existing.home);
		Object.assign(merged.gallery, existing.gallery);
		Object.assign(merged.blog, existing.blog);
	}

	const dir = path.join(localesDir, locale);
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(
		path.join(dir, 'translation.json'),
		`${JSON.stringify(merged, null, 2)}\n`,
		'utf8',
	);
	console.log(`wrote ${locale}/translation.json`);
}

console.log(`Exported ${LOCALES.length} locale catalogs.`);
