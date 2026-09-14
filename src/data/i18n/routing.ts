import { siteConfig } from '../site';
import { getBlogBasePath } from '../blog/helpers';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'overwatch-2-esp'
	| 'overwatch-2-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'anticheat'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'crucible-cheats'
	| 'aim-assist'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'pve-cheats'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'overwatch-2-esp': '/overwatch-2-esp/',
	'overwatch-2-aimbot': '/overwatch-2-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/status/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/overwatch-2-undetected/',
	wallhack: '/overwatch-2-wallhack/',
	radar: '/overwatch-2-wallhack/',
	'anticheat': '/status/',
	'cheats-2026': '/overwatch-2-cheats/',
	hacks: '/overwatch-2-cheats/',
	'cheat-download': '/setup/',
	'crucible-cheats': '/overwatch-2-cheats/',
	'aim-assist': '/overwatch-2-aimbot/',
	'best-cheats': '/overwatch-2-cheats/',
	'aimbot-hack': '/overwatch-2-aimbot/',
	'esp-hack': '/overwatch-2-esp/',
	'pve-cheats': '/overwatch-2-cheats/',
	privacy: '/privacy/',
	refund: '/refund/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'overwatch-2-esp': {
		en: 'overwatch-2-esp',
		es: 'trucos-overwatch-2-esp',
		fr: 'triche-overwatch-2-esp',
		de: 'overwatch-2-esp-wallhack',
		pt: 'cheats-overwatch-2-esp',
		it: 'trucchi-overwatch-2-esp',
		nl: 'overwatch-2-esp-wallhack',
		pl: 'cheaty-overwatch-2-esp',
		ru: 'overwatch-2-esp-chity',
		tr: 'overwatch-2-esp-hile',
		ar: 'overwatch-2-esp-wallhack',
		ja: 'overwatch-2-esp-wallhack',
		ko: 'overwatch-2-esp-wallhack',
		zh: 'overwatch-2-esp-wallhack',
		hi: 'overwatch-2-esp-wallhack',
		id: 'overwatch-2-esp-wallhack',
		th: 'overwatch-2-esp-wallhack',
		vi: 'overwatch-2-esp-wallhack',
		uk: 'overwatch-2-esp-chity',
		cs: 'overwatch-2-esp-wallhack',
		ro: 'overwatch-2-esp-wallhack',
		sv: 'overwatch-2-esp-wallhack',
	},
	'overwatch-2-aimbot': {
		en: 'overwatch-2-aimbot',
		es: 'trucos-overwatch-2-aimbot',
		fr: 'triche-overwatch-2-aimbot',
		de: 'overwatch-2-aimbot',
		pt: 'cheats-overwatch-2-aimbot',
		it: 'trucchi-overwatch-2-aimbot',
		nl: 'overwatch-2-aimbot',
		pl: 'cheaty-overwatch-2-aimbot',
		ru: 'overwatch-2-aimbot-chity',
		tr: 'overwatch-2-aimbot-hile',
		ar: 'overwatch-2-aimbot',
		ja: 'overwatch-2-aimbot',
		ko: 'overwatch-2-aimbot',
		zh: 'overwatch-2-aimbot',
		hi: 'overwatch-2-aimbot',
		id: 'overwatch-2-aimbot',
		th: 'overwatch-2-aimbot',
		vi: 'overwatch-2-aimbot',
		uk: 'overwatch-2-aimbot-chity',
		cs: 'overwatch-2-aimbot',
		ro: 'overwatch-2-aimbot',
		sv: 'overwatch-2-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-overwatch-2',
		fr: 'fonctionnalites-triche-overwatch-2',
		de: 'overwatch-2-cheats-funktionen',
		pt: 'recursos-cheats-overwatch-2',
		it: 'funzioni-trucchi-overwatch-2',
		nl: 'overwatch-2-cheats-functies',
		pl: 'funkcje-cheatow-overwatch-2',
		ru: 'funkcii-chitov-overwatch-2',
		tr: 'overwatch-2-hile-ozellikleri',
		ar: 'overwatch-2-cheats-features',
		ja: 'overwatch-2-cheats-features',
		ko: 'overwatch-2-cheats-features',
		zh: 'overwatch-2-cheats-features',
		hi: 'overwatch-2-cheats-features',
		id: 'overwatch-2-cheats-features',
		th: 'overwatch-2-cheats-features',
		vi: 'overwatch-2-cheats-features',
		uk: 'funkcii-chitiv-overwatch-2',
		cs: 'overwatch-2-cheats-funkce',
		ro: 'functii-cheats-overwatch-2',
		sv: 'overwatch-2-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-overwatch-2',
		fr: 'prix-triche-overwatch-2',
		de: 'overwatch-2-cheats-preise',
		pt: 'precos-cheats-overwatch-2',
		it: 'prezzi-trucchi-overwatch-2',
		nl: 'overwatch-2-cheats-prijzen',
		pl: 'ceny-cheatow-overwatch-2',
		ru: 'ceny-chitov-overwatch-2',
		tr: 'overwatch-2-hile-fiyatlari',
		ar: 'overwatch-2-cheats-pricing',
		ja: 'overwatch-2-cheats-pricing',
		ko: 'overwatch-2-cheats-pricing',
		zh: 'overwatch-2-cheats-pricing',
		hi: 'overwatch-2-cheats-pricing',
		id: 'overwatch-2-cheats-pricing',
		th: 'overwatch-2-cheats-pricing',
		vi: 'overwatch-2-cheats-pricing',
		uk: 'ciny-chitiv-overwatch-2',
		cs: 'overwatch-2-cheats-ceny',
		ro: 'preturi-cheats-overwatch-2',
		sv: 'overwatch-2-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-overwatch-2',
		fr: 'installation-triche-overwatch-2',
		de: 'overwatch-2-cheats-installation',
		pt: 'instalacao-cheats-overwatch-2',
		it: 'installazione-trucchi-overwatch-2',
		nl: 'overwatch-2-cheats-installatie',
		pl: 'instalacja-cheatow-overwatch-2',
		ru: 'ustanovka-chitov-overwatch-2',
		tr: 'overwatch-2-hile-kurulum',
		ar: 'overwatch-2-cheats-setup',
		ja: 'overwatch-2-cheats-setup',
		ko: 'overwatch-2-cheats-setup',
		zh: 'overwatch-2-cheats-setup',
		hi: 'overwatch-2-cheats-setup',
		id: 'overwatch-2-cheats-setup',
		th: 'overwatch-2-cheats-setup',
		vi: 'overwatch-2-cheats-setup',
		uk: 'vstanovka-chitiv-overwatch-2',
		cs: 'overwatch-2-cheats-instalace',
		ro: 'instalare-cheats-overwatch-2',
		sv: 'overwatch-2-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-overwatch-2',
		fr: 'mises-a-jour-triche-overwatch-2',
		de: 'overwatch-2-cheats-updates',
		pt: 'atualizacoes-cheats-overwatch-2',
		it: 'aggiornamenti-trucchi-overwatch-2',
		nl: 'overwatch-2-cheats-updates',
		pl: 'aktualizacje-cheatow-overwatch-2',
		ru: 'obnovleniya-chitov-overwatch-2',
		tr: 'overwatch-2-hile-guncellemeleri',
		ar: 'overwatch-2-cheats-updates',
		ja: 'overwatch-2-cheats-updates',
		ko: 'overwatch-2-cheats-updates',
		zh: 'overwatch-2-cheats-updates',
		hi: 'overwatch-2-cheats-updates',
		id: 'overwatch-2-cheats-updates',
		th: 'overwatch-2-cheats-updates',
		vi: 'overwatch-2-cheats-updates',
		uk: 'onovlennya-chitiv-overwatch-2',
		cs: 'overwatch-2-cheats-aktualizace',
		ro: 'actualizari-cheats-overwatch-2',
		sv: 'overwatch-2-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-overwatch-2',
		fr: 'faq-triche-overwatch-2',
		de: 'overwatch-2-cheats-faq',
		pt: 'faq-cheats-overwatch-2',
		it: 'faq-trucchi-overwatch-2',
		nl: 'overwatch-2-cheats-faq',
		pl: 'faq-cheatow-overwatch-2',
		ru: 'faq-chitov-overwatch-2',
		tr: 'overwatch-2-hile-sss',
		ar: 'overwatch-2-cheats-faq',
		ja: 'overwatch-2-cheats-faq',
		ko: 'overwatch-2-cheats-faq',
		zh: 'overwatch-2-cheats-faq',
		hi: 'overwatch-2-cheats-faq',
		id: 'overwatch-2-cheats-faq',
		th: 'overwatch-2-cheats-faq',
		vi: 'overwatch-2-cheats-faq',
		uk: 'faq-chitiv-overwatch-2',
		cs: 'overwatch-2-cheats-faq',
		ro: 'faq-cheats-overwatch-2',
		sv: 'overwatch-2-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-overwatch-2',
		fr: 'support-triche-overwatch-2',
		de: 'overwatch-2-cheats-support',
		pt: 'suporte-cheats-overwatch-2',
		it: 'supporto-trucchi-overwatch-2',
		nl: 'overwatch-2-cheats-support',
		pl: 'wsparcie-cheatow-overwatch-2',
		ru: 'podderzhka-chitov-overwatch-2',
		tr: 'overwatch-2-hile-destek',
		ar: 'overwatch-2-cheats-support',
		ja: 'overwatch-2-cheats-support',
		ko: 'overwatch-2-cheats-support',
		zh: 'overwatch-2-cheats-support',
		hi: 'overwatch-2-cheats-support',
		id: 'overwatch-2-cheats-support',
		th: 'overwatch-2-cheats-support',
		vi: 'overwatch-2-cheats-support',
		uk: 'pidtrymka-chitiv-overwatch-2',
		cs: 'overwatch-2-cheats-podpora',
		ro: 'suport-cheats-overwatch-2',
		sv: 'overwatch-2-cheats-support',
	},
	undetected: {
		en: 'undetected-overwatch-2-cheats',
		es: 'trucos-overwatch-2-indetectables',
		fr: 'triche-overwatch-2-indetectable',
		de: 'unentdeckte-overwatch-2-cheats',
		pt: 'cheats-overwatch-2-indetectaveis',
		it: 'trucchi-overwatch-2-indetectabili',
		nl: 'undetected-overwatch-2-cheats',
		pl: 'niewykrywalne-cheats-overwatch-2',
		ru: 'nedecektiruemye-chity-overwatch-2',
		tr: 'tespit-edilemeyen-overwatch-2-hileleri',
		ar: 'undetected-overwatch-2-cheats',
		ja: 'undetected-overwatch-2-cheats',
		ko: 'undetected-overwatch-2-cheats',
		zh: 'undetected-overwatch-2-cheats',
		hi: 'undetected-overwatch-2-cheats',
		id: 'undetected-overwatch-2-cheats',
		th: 'undetected-overwatch-2-cheats',
		vi: 'undetected-overwatch-2-cheats',
		uk: 'nedecektovani-chity-overwatch-2',
		cs: 'undetected-overwatch-2-cheats',
		ro: 'cheats-overwatch-2-nedetectabile',
		sv: 'undetected-overwatch-2-cheats',
	},
	wallhack: {
		en: 'overwatch-2-wallhack',
		es: 'wallhack-trucos-overwatch-2',
		fr: 'wallhack-triche-overwatch-2',
		de: 'overwatch-2-wallhack',
		pt: 'wallhack-cheats-overwatch-2',
		it: 'wallhack-trucchi-overwatch-2',
		nl: 'overwatch-2-wallhack',
		pl: 'wallhack-cheatow-overwatch-2',
		ru: 'wallhack-chity-overwatch-2',
		tr: 'overwatch-2-wallhack-hile',
		ar: 'overwatch-2-wallhack',
		ja: 'overwatch-2-wallhack',
		ko: 'overwatch-2-wallhack',
		zh: 'overwatch-2-wallhack',
		hi: 'overwatch-2-wallhack',
		id: 'overwatch-2-wallhack',
		th: 'overwatch-2-wallhack',
		vi: 'overwatch-2-wallhack',
		uk: 'wallhack-chity-overwatch-2',
		cs: 'overwatch-2-wallhack',
		ro: 'wallhack-cheats-overwatch-2',
		sv: 'overwatch-2-wallhack',
	},
	radar: {
		en: 'overwatch-2-visuals',
		es: 'radar-hack-trucos-overwatch-2',
		fr: 'radar-hack-triche-overwatch-2',
		de: 'overwatch-2-visuals',
		pt: 'radar-hack-cheats-overwatch-2',
		it: 'radar-hack-trucchi-overwatch-2',
		nl: 'overwatch-2-visuals',
		pl: 'radar-hack-cheatow-overwatch-2',
		ru: 'radar-hack-chity-overwatch-2',
		tr: 'overwatch-2-visuals',
		ar: 'overwatch-2-visuals',
		ja: 'overwatch-2-visuals',
		ko: 'overwatch-2-visuals',
		zh: 'overwatch-2-visuals',
		hi: 'overwatch-2-visuals',
		id: 'overwatch-2-visuals',
		th: 'overwatch-2-visuals',
		vi: 'overwatch-2-visuals',
		uk: 'radar-hack-chity-overwatch-2',
		cs: 'overwatch-2-visuals',
		ro: 'radar-hack-cheats-overwatch-2',
		sv: 'overwatch-2-visuals',
	},
	'anticheat': {
		en: 'overwatch-2-anticheat-bypass',
		es: 'overwatch-2-anticheat-bypass-trucos',
		fr: 'overwatch-2-anticheat-bypass-triche',
		de: 'overwatch-2-anticheat-bypass',
		pt: 'overwatch-2-anticheat-bypass-cheats',
		it: 'overwatch-2-anticheat-bypass-trucchi',
		nl: 'overwatch-2-anticheat-bypass',
		pl: 'overwatch-2-anticheat-bypass-cheatow',
		ru: 'overwatch-2-anticheat-bypass-chity',
		tr: 'overwatch-2-anticheat-bypass',
		ar: 'overwatch-2-anticheat-bypass',
		ja: 'overwatch-2-anticheat-bypass',
		ko: 'overwatch-2-anticheat-bypass',
		zh: 'overwatch-2-anticheat-bypass',
		hi: 'overwatch-2-anticheat-bypass',
		id: 'overwatch-2-anticheat-bypass',
		th: 'overwatch-2-anticheat-bypass',
		vi: 'overwatch-2-anticheat-bypass',
		uk: 'overwatch-2-anticheat-bypass-chity',
		cs: 'overwatch-2-anticheat-bypass',
		ro: 'overwatch-2-anticheat-bypass-cheats',
		sv: 'overwatch-2-anticheat-bypass',
	},
	'cheats-2026': {
		en: 'overwatch-2-cheats-2026',
		es: 'trucos-overwatch-2-2026',
		fr: 'triche-overwatch-2-2026',
		de: 'overwatch-2-cheats-2026',
		pt: 'cheats-overwatch-2-2026',
		it: 'trucchi-overwatch-2-2026',
		nl: 'overwatch-2-cheats-2026',
		pl: 'cheaty-overwatch-2-2026',
		ru: 'chity-overwatch-2-2026',
		tr: 'overwatch-2-hileleri-2026',
		ar: 'overwatch-2-cheats-2026',
		ja: 'overwatch-2-cheats-2026',
		ko: 'overwatch-2-cheats-2026',
		zh: 'overwatch-2-cheats-2026',
		hi: 'overwatch-2-cheats-2026',
		id: 'overwatch-2-cheats-2026',
		th: 'overwatch-2-cheats-2026',
		vi: 'overwatch-2-cheats-2026',
		uk: 'chity-overwatch-2-2026',
		cs: 'overwatch-2-cheats-2026',
		ro: 'cheats-overwatch-2-2026',
		sv: 'overwatch-2-cheats-2026',
	},
	hacks: {
		en: 'overwatch-2-cheats',
		es: 'hacks-trucos-overwatch-2',
		fr: 'hacks-triche-overwatch-2',
		de: 'overwatch-2-cheats',
		pt: 'hacks-cheats-overwatch-2',
		it: 'hacks-trucchi-overwatch-2',
		nl: 'overwatch-2-cheats',
		pl: 'hacks-cheatow-overwatch-2',
		ru: 'haksy-chity-overwatch-2',
		tr: 'overwatch-2-hile-hacks',
		ar: 'overwatch-2-cheats',
		ja: 'overwatch-2-cheats',
		ko: 'overwatch-2-cheats',
		zh: 'overwatch-2-cheats',
		hi: 'overwatch-2-cheats',
		id: 'overwatch-2-cheats',
		th: 'overwatch-2-cheats',
		vi: 'overwatch-2-cheats',
		uk: 'haksy-chity-overwatch-2',
		cs: 'overwatch-2-cheats',
		ro: 'hacks-cheats-overwatch-2',
		sv: 'overwatch-2-cheats',
	},
	'cheat-download': {
		en: 'overwatch-2-cheat-download',
		es: 'descarga-trucos-overwatch-2',
		fr: 'telechargement-triche-overwatch-2',
		de: 'overwatch-2-cheat-download',
		pt: 'download-cheats-overwatch-2',
		it: 'download-trucchi-overwatch-2',
		nl: 'overwatch-2-cheat-download',
		pl: 'pobieranie-cheatow-overwatch-2',
		ru: 'skachat-chity-overwatch-2',
		tr: 'overwatch-2-hile-indir',
		ar: 'overwatch-2-cheat-download',
		ja: 'overwatch-2-cheat-download',
		ko: 'overwatch-2-cheat-download',
		zh: 'overwatch-2-cheat-download',
		hi: 'overwatch-2-cheat-download',
		id: 'overwatch-2-cheat-download',
		th: 'overwatch-2-cheat-download',
		vi: 'overwatch-2-cheat-download',
		uk: 'zavantazhennya-chitiv-overwatch-2',
		cs: 'overwatch-2-cheat-download',
		ro: 'descarcare-cheats-overwatch-2',
		sv: 'overwatch-2-cheat-download',
	},
	'crucible-cheats': {
		en: 'overwatch-2-hero-scripts',
		es: 'menu-mod-trucos-overwatch-2',
		fr: 'menu-mod-triche-overwatch-2',
		de: 'overwatch-2-hero-scripts',
		pt: 'menu-mod-cheats-overwatch-2',
		it: 'menu-mod-trucchi-overwatch-2',
		nl: 'overwatch-2-hero-scripts',
		pl: 'menu-mod-cheatow-overwatch-2',
		ru: 'crucible-cheats-chity-overwatch-2',
		tr: 'overwatch-2-hero-scripts',
		ar: 'overwatch-2-hero-scripts',
		ja: 'overwatch-2-hero-scripts',
		ko: 'overwatch-2-hero-scripts',
		zh: 'overwatch-2-hero-scripts',
		hi: 'overwatch-2-hero-scripts',
		id: 'overwatch-2-hero-scripts',
		th: 'overwatch-2-hero-scripts',
		vi: 'overwatch-2-hero-scripts',
		uk: 'crucible-cheats-chity-overwatch-2',
		cs: 'overwatch-2-hero-scripts',
		ro: 'meniu-mod-cheats-overwatch-2',
		sv: 'overwatch-2-hero-scripts',
	},
	'aim-assist': {
		en: 'overwatch-2-aim-assist',
		es: 'aim-assist-trucos-overwatch-2',
		fr: 'aim-assist-triche-overwatch-2',
		de: 'overwatch-2-aim-assist',
		pt: 'aim-assist-cheats-overwatch-2',
		it: 'aim-assist-trucchi-overwatch-2',
		nl: 'overwatch-2-aim-assist',
		pl: 'aim-assist-cheatow-overwatch-2',
		ru: 'aim-assist-chity-overwatch-2',
		tr: 'overwatch-2-aim-assist',
		ar: 'overwatch-2-aim-assist',
		ja: 'overwatch-2-aim-assist',
		ko: 'overwatch-2-aim-assist',
		zh: 'overwatch-2-aim-assist',
		hi: 'overwatch-2-aim-assist',
		id: 'overwatch-2-aim-assist',
		th: 'overwatch-2-aim-assist',
		vi: 'overwatch-2-aim-assist',
		uk: 'aim-assist-chity-overwatch-2',
		cs: 'overwatch-2-aim-assist',
		ro: 'aim-assist-cheats-overwatch-2',
		sv: 'overwatch-2-aim-assist',
	},
	'best-cheats': {
		en: 'best-overwatch-2-cheats',
		es: 'mejores-trucos-overwatch-2',
		fr: 'meilleures-triches-destiny-2',
		de: 'beste-overwatch-2-cheats',
		pt: 'melhores-cheats-overwatch-2',
		it: 'migliori-trucchi-overwatch-2',
		nl: 'beste-overwatch-2-cheats',
		pl: 'najlepsze-cheats-overwatch-2',
		ru: 'luchshie-chity-overwatch-2',
		tr: 'en-iyi-overwatch-2-hileleri',
		ar: 'best-overwatch-2-cheats',
		ja: 'best-overwatch-2-cheats',
		ko: 'best-overwatch-2-cheats',
		zh: 'best-overwatch-2-cheats',
		hi: 'best-overwatch-2-cheats',
		id: 'best-overwatch-2-cheats',
		th: 'best-overwatch-2-cheats',
		vi: 'best-overwatch-2-cheats',
		uk: 'naykrashchi-chity-overwatch-2',
		cs: 'nejlepsi-overwatch-2-cheats',
		ro: 'cele-mai-bune-cheats-overwatch-2',
		sv: 'basta-overwatch-2-cheats',
	},
	'aimbot-hack': {
		en: 'overwatch-2-aimbot-hack',
		es: 'aimbot-hack-trucos-overwatch-2',
		fr: 'aimbot-hack-triche-overwatch-2',
		de: 'overwatch-2-aimbot-hack',
		pt: 'aimbot-hack-cheats-overwatch-2',
		it: 'aimbot-hack-trucchi-overwatch-2',
		nl: 'overwatch-2-aimbot-hack',
		pl: 'aimbot-hack-cheatow-overwatch-2',
		ru: 'aimbot-hack-chity-overwatch-2',
		tr: 'overwatch-2-aimbot-hack',
		ar: 'overwatch-2-aimbot-hack',
		ja: 'overwatch-2-aimbot-hack',
		ko: 'overwatch-2-aimbot-hack',
		zh: 'overwatch-2-aimbot-hack',
		hi: 'overwatch-2-aimbot-hack',
		id: 'overwatch-2-aimbot-hack',
		th: 'overwatch-2-aimbot-hack',
		vi: 'overwatch-2-aimbot-hack',
		uk: 'aimbot-hack-chity-overwatch-2',
		cs: 'overwatch-2-aimbot-hack',
		ro: 'aimbot-hack-cheats-overwatch-2',
		sv: 'overwatch-2-aimbot-hack',
	},
	'esp-hack': {
		en: 'overwatch-2-esp-hack',
		es: 'esp-hack-trucos-overwatch-2',
		fr: 'esp-hack-triche-overwatch-2',
		de: 'overwatch-2-esp-hack',
		pt: 'esp-hack-cheats-overwatch-2',
		it: 'esp-hack-trucchi-overwatch-2',
		nl: 'overwatch-2-esp-hack',
		pl: 'esp-hack-cheatow-overwatch-2',
		ru: 'esp-hack-chity-overwatch-2',
		tr: 'overwatch-2-esp-hack',
		ar: 'overwatch-2-esp-hack',
		ja: 'overwatch-2-esp-hack',
		ko: 'overwatch-2-esp-hack',
		zh: 'overwatch-2-esp-hack',
		hi: 'overwatch-2-esp-hack',
		id: 'overwatch-2-esp-hack',
		th: 'overwatch-2-esp-hack',
		vi: 'overwatch-2-esp-hack',
		uk: 'esp-hack-chity-overwatch-2',
		cs: 'overwatch-2-esp-hack',
		ro: 'esp-hack-cheats-overwatch-2',
		sv: 'overwatch-2-esp-hack',
	},
	'pve-cheats': {
		en: 'overwatch-2-hero-scripts',
		es: 'pve-cheats-trucos-overwatch-2',
		fr: 'pve-cheats-triche-overwatch-2',
		de: 'overwatch-2-hero-scripts',
		pt: 'pve-cheats-cheats-overwatch-2',
		it: 'pve-cheats-trucchi-overwatch-2',
		nl: 'overwatch-2-hero-scripts',
		pl: 'pve-cheats-cheatow-overwatch-2',
		ru: 'pve-cheats-chity-overwatch-2',
		tr: 'overwatch-2-hero-scripts',
		ar: 'overwatch-2-hero-scripts',
		ja: 'overwatch-2-hero-scripts',
		ko: 'overwatch-2-hero-scripts',
		zh: 'overwatch-2-hero-scripts',
		hi: 'overwatch-2-hero-scripts',
		id: 'overwatch-2-hero-scripts',
		th: 'overwatch-2-hero-scripts',
		vi: 'overwatch-2-hero-scripts',
		uk: 'pve-cheats-chity-overwatch-2',
		cs: 'overwatch-2-hero-scripts',
		ro: 'pve-cheats-cheats-overwatch-2',
		sv: 'overwatch-2-hero-scripts',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog' || rest[0] === 'overwatch-2-cheats-blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.preview ?? labels.hacks ?? 'Cheats', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('overwatch-2-aimbot', locale), pageId: 'overwatch-2-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('overwatch-2-esp', locale), pageId: 'overwatch-2-esp' },
		{ label: 'Blog', href: getBlogBasePath(locale) },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
