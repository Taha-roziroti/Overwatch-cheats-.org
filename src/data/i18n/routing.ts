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
	| 'destiny-2-esp'
	| 'destiny-2-aimbot'
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
	'destiny-2-esp': '/destiny-2-esp/',
	'destiny-2-aimbot': '/destiny-2-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/status/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/d2-undetected/',
	wallhack: '/d2-wallhack/',
	radar: '/d2-radar/',
	'anticheat': '/d2-battleye/',
	'cheats-2026': '/d2-cheats-2026/',
	hacks: '/d2-cheats/',
	'cheat-download': '/d2-download/',
	'crucible-cheats': '/d2-crucible/',
	'aim-assist': '/d2-aim-assist/',
	'best-cheats': '/d2-cheats/',
	'aimbot-hack': '/destiny-2-aimbot/',
	'esp-hack': '/destiny-2-esp/',
	'pve-cheats': '/d2-pve/',
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
	'destiny-2-esp': {
		en: 'destiny-2-esp',
		es: 'trucos-destiny-2-esp',
		fr: 'triche-destiny-2-esp',
		de: 'destiny-2-esp-wallhack',
		pt: 'cheats-destiny-2-esp',
		it: 'trucchi-destiny-2-esp',
		nl: 'destiny-2-esp-wallhack',
		pl: 'cheaty-destiny-2-esp',
		ru: 'destiny-2-esp-chity',
		tr: 'destiny-2-esp-hile',
		ar: 'destiny-2-esp-wallhack',
		ja: 'destiny-2-esp-wallhack',
		ko: 'destiny-2-esp-wallhack',
		zh: 'destiny-2-esp-wallhack',
		hi: 'destiny-2-esp-wallhack',
		id: 'destiny-2-esp-wallhack',
		th: 'destiny-2-esp-wallhack',
		vi: 'destiny-2-esp-wallhack',
		uk: 'destiny-2-esp-chity',
		cs: 'destiny-2-esp-wallhack',
		ro: 'destiny-2-esp-wallhack',
		sv: 'destiny-2-esp-wallhack',
	},
	'destiny-2-aimbot': {
		en: 'destiny-2-aimbot',
		es: 'trucos-destiny-2-aimbot',
		fr: 'triche-destiny-2-aimbot',
		de: 'destiny-2-aimbot',
		pt: 'cheats-destiny-2-aimbot',
		it: 'trucchi-destiny-2-aimbot',
		nl: 'destiny-2-aimbot',
		pl: 'cheaty-destiny-2-aimbot',
		ru: 'destiny-2-aimbot-chity',
		tr: 'destiny-2-aimbot-hile',
		ar: 'destiny-2-aimbot',
		ja: 'destiny-2-aimbot',
		ko: 'destiny-2-aimbot',
		zh: 'destiny-2-aimbot',
		hi: 'destiny-2-aimbot',
		id: 'destiny-2-aimbot',
		th: 'destiny-2-aimbot',
		vi: 'destiny-2-aimbot',
		uk: 'destiny-2-aimbot-chity',
		cs: 'destiny-2-aimbot',
		ro: 'destiny-2-aimbot',
		sv: 'destiny-2-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-destiny-2',
		fr: 'fonctionnalites-triche-destiny-2',
		de: 'escape-from-destiny-2-cheats-funktionen',
		pt: 'recursos-cheats-destiny-2',
		it: 'funzioni-trucchi-destiny-2',
		nl: 'escape-from-destiny-2-cheats-functies',
		pl: 'funkcje-cheatow-destiny-2',
		ru: 'funkcii-chitov-destiny-2',
		tr: 'destiny-2-hile-ozellikleri',
		ar: 'escape-from-destiny-2-cheats-features',
		ja: 'escape-from-destiny-2-cheats-features',
		ko: 'escape-from-destiny-2-cheats-features',
		zh: 'escape-from-destiny-2-cheats-features',
		hi: 'escape-from-destiny-2-cheats-features',
		id: 'escape-from-destiny-2-cheats-features',
		th: 'escape-from-destiny-2-cheats-features',
		vi: 'escape-from-destiny-2-cheats-features',
		uk: 'funkcii-chitiv-destiny-2',
		cs: 'escape-from-destiny-2-cheats-funkce',
		ro: 'functii-cheats-destiny-2',
		sv: 'escape-from-destiny-2-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-destiny-2',
		fr: 'prix-triche-destiny-2',
		de: 'escape-from-destiny-2-cheats-preise',
		pt: 'precos-cheats-destiny-2',
		it: 'prezzi-trucchi-destiny-2',
		nl: 'escape-from-destiny-2-cheats-prijzen',
		pl: 'ceny-cheatow-destiny-2',
		ru: 'ceny-chitov-destiny-2',
		tr: 'destiny-2-hile-fiyatlari',
		ar: 'escape-from-destiny-2-cheats-pricing',
		ja: 'escape-from-destiny-2-cheats-pricing',
		ko: 'escape-from-destiny-2-cheats-pricing',
		zh: 'escape-from-destiny-2-cheats-pricing',
		hi: 'escape-from-destiny-2-cheats-pricing',
		id: 'escape-from-destiny-2-cheats-pricing',
		th: 'escape-from-destiny-2-cheats-pricing',
		vi: 'escape-from-destiny-2-cheats-pricing',
		uk: 'ciny-chitiv-destiny-2',
		cs: 'escape-from-destiny-2-cheats-ceny',
		ro: 'preturi-cheats-destiny-2',
		sv: 'escape-from-destiny-2-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-destiny-2',
		fr: 'installation-triche-destiny-2',
		de: 'escape-from-destiny-2-cheats-installation',
		pt: 'instalacao-cheats-destiny-2',
		it: 'installazione-trucchi-destiny-2',
		nl: 'escape-from-destiny-2-cheats-installatie',
		pl: 'instalacja-cheatow-destiny-2',
		ru: 'ustanovka-chitov-destiny-2',
		tr: 'destiny-2-hile-kurulum',
		ar: 'escape-from-destiny-2-cheats-setup',
		ja: 'escape-from-destiny-2-cheats-setup',
		ko: 'escape-from-destiny-2-cheats-setup',
		zh: 'escape-from-destiny-2-cheats-setup',
		hi: 'escape-from-destiny-2-cheats-setup',
		id: 'escape-from-destiny-2-cheats-setup',
		th: 'escape-from-destiny-2-cheats-setup',
		vi: 'escape-from-destiny-2-cheats-setup',
		uk: 'vstanovka-chitiv-destiny-2',
		cs: 'escape-from-destiny-2-cheats-instalace',
		ro: 'instalare-cheats-destiny-2',
		sv: 'escape-from-destiny-2-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-destiny-2',
		fr: 'mises-a-jour-triche-destiny-2',
		de: 'escape-from-destiny-2-cheats-updates',
		pt: 'atualizacoes-cheats-destiny-2',
		it: 'aggiornamenti-trucchi-destiny-2',
		nl: 'escape-from-destiny-2-cheats-updates',
		pl: 'aktualizacje-cheatow-destiny-2',
		ru: 'obnovleniya-chitov-destiny-2',
		tr: 'destiny-2-hile-guncellemeleri',
		ar: 'escape-from-destiny-2-cheats-updates',
		ja: 'escape-from-destiny-2-cheats-updates',
		ko: 'escape-from-destiny-2-cheats-updates',
		zh: 'escape-from-destiny-2-cheats-updates',
		hi: 'escape-from-destiny-2-cheats-updates',
		id: 'escape-from-destiny-2-cheats-updates',
		th: 'escape-from-destiny-2-cheats-updates',
		vi: 'escape-from-destiny-2-cheats-updates',
		uk: 'onovlennya-chitiv-destiny-2',
		cs: 'escape-from-destiny-2-cheats-aktualizace',
		ro: 'actualizari-cheats-destiny-2',
		sv: 'escape-from-destiny-2-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-destiny-2',
		fr: 'faq-triche-destiny-2',
		de: 'escape-from-destiny-2-cheats-faq',
		pt: 'faq-cheats-destiny-2',
		it: 'faq-trucchi-destiny-2',
		nl: 'escape-from-destiny-2-cheats-faq',
		pl: 'faq-cheatow-destiny-2',
		ru: 'faq-chitov-destiny-2',
		tr: 'destiny-2-hile-sss',
		ar: 'escape-from-destiny-2-cheats-faq',
		ja: 'escape-from-destiny-2-cheats-faq',
		ko: 'escape-from-destiny-2-cheats-faq',
		zh: 'escape-from-destiny-2-cheats-faq',
		hi: 'escape-from-destiny-2-cheats-faq',
		id: 'escape-from-destiny-2-cheats-faq',
		th: 'escape-from-destiny-2-cheats-faq',
		vi: 'escape-from-destiny-2-cheats-faq',
		uk: 'faq-chitiv-destiny-2',
		cs: 'escape-from-destiny-2-cheats-faq',
		ro: 'faq-cheats-destiny-2',
		sv: 'escape-from-destiny-2-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-destiny-2',
		fr: 'support-triche-destiny-2',
		de: 'escape-from-destiny-2-cheats-support',
		pt: 'suporte-cheats-destiny-2',
		it: 'supporto-trucchi-destiny-2',
		nl: 'escape-from-destiny-2-cheats-support',
		pl: 'wsparcie-cheatow-destiny-2',
		ru: 'podderzhka-chitov-destiny-2',
		tr: 'destiny-2-hile-destek',
		ar: 'escape-from-destiny-2-cheats-support',
		ja: 'escape-from-destiny-2-cheats-support',
		ko: 'escape-from-destiny-2-cheats-support',
		zh: 'escape-from-destiny-2-cheats-support',
		hi: 'escape-from-destiny-2-cheats-support',
		id: 'escape-from-destiny-2-cheats-support',
		th: 'escape-from-destiny-2-cheats-support',
		vi: 'escape-from-destiny-2-cheats-support',
		uk: 'pidtrymka-chitiv-destiny-2',
		cs: 'escape-from-destiny-2-cheats-podpora',
		ro: 'suport-cheats-destiny-2',
		sv: 'escape-from-destiny-2-cheats-support',
	},
	undetected: {
		en: 'undetected-destiny-2-cheats',
		es: 'trucos-destiny-2-indetectables',
		fr: 'triche-destiny-2-indetectable',
		de: 'unentdeckte-escape-from-destiny-2-cheats',
		pt: 'cheats-destiny-2-indetectaveis',
		it: 'trucchi-destiny-2-indetectabili',
		nl: 'undetected-destiny-2-cheats',
		pl: 'niewykrywalne-cheats-destiny-2',
		ru: 'nedecektiruemye-chity-destiny-2',
		tr: 'tespit-edilemeyen-destiny-2-hileleri',
		ar: 'undetected-destiny-2-cheats',
		ja: 'undetected-destiny-2-cheats',
		ko: 'undetected-destiny-2-cheats',
		zh: 'undetected-destiny-2-cheats',
		hi: 'undetected-destiny-2-cheats',
		id: 'undetected-destiny-2-cheats',
		th: 'undetected-destiny-2-cheats',
		vi: 'undetected-destiny-2-cheats',
		uk: 'nedecektovani-chity-destiny-2',
		cs: 'undetected-destiny-2-cheats',
		ro: 'cheats-destiny-2-nedetectabile',
		sv: 'undetected-destiny-2-cheats',
	},
	wallhack: {
		en: 'destiny-2-wallhack',
		es: 'wallhack-trucos-destiny-2',
		fr: 'wallhack-triche-destiny-2',
		de: 'destiny-2-wallhack',
		pt: 'wallhack-cheats-destiny-2',
		it: 'wallhack-trucchi-destiny-2',
		nl: 'destiny-2-wallhack',
		pl: 'wallhack-cheatow-destiny-2',
		ru: 'wallhack-chity-destiny-2',
		tr: 'destiny-2-wallhack-hile',
		ar: 'destiny-2-wallhack',
		ja: 'destiny-2-wallhack',
		ko: 'destiny-2-wallhack',
		zh: 'destiny-2-wallhack',
		hi: 'destiny-2-wallhack',
		id: 'destiny-2-wallhack',
		th: 'destiny-2-wallhack',
		vi: 'destiny-2-wallhack',
		uk: 'wallhack-chity-destiny-2',
		cs: 'destiny-2-wallhack',
		ro: 'wallhack-cheats-destiny-2',
		sv: 'destiny-2-wallhack',
	},
	radar: {
		en: 'destiny-2-radar-hack',
		es: 'radar-hack-trucos-destiny-2',
		fr: 'radar-hack-triche-destiny-2',
		de: 'destiny-2-radar-hack',
		pt: 'radar-hack-cheats-destiny-2',
		it: 'radar-hack-trucchi-destiny-2',
		nl: 'destiny-2-radar-hack',
		pl: 'radar-hack-cheatow-destiny-2',
		ru: 'radar-hack-chity-destiny-2',
		tr: 'destiny-2-radar-hack',
		ar: 'destiny-2-radar-hack',
		ja: 'destiny-2-radar-hack',
		ko: 'destiny-2-radar-hack',
		zh: 'destiny-2-radar-hack',
		hi: 'destiny-2-radar-hack',
		id: 'destiny-2-radar-hack',
		th: 'destiny-2-radar-hack',
		vi: 'destiny-2-radar-hack',
		uk: 'radar-hack-chity-destiny-2',
		cs: 'destiny-2-radar-hack',
		ro: 'radar-hack-cheats-destiny-2',
		sv: 'destiny-2-radar-hack',
	},
	'anticheat': {
		en: 'destiny-2-battleye-bypass',
		es: 'destiny-2-battleye-bypass-trucos',
		fr: 'destiny-2-battleye-bypass-triche',
		de: 'destiny-2-battleye-bypass',
		pt: 'destiny-2-battleye-bypass-cheats',
		it: 'destiny-2-battleye-bypass-trucchi',
		nl: 'destiny-2-battleye-bypass',
		pl: 'destiny-2-battleye-bypass-cheatow',
		ru: 'destiny-2-battleye-bypass-chity',
		tr: 'destiny-2-battleye-bypass',
		ar: 'destiny-2-battleye-bypass',
		ja: 'destiny-2-battleye-bypass',
		ko: 'destiny-2-battleye-bypass',
		zh: 'destiny-2-battleye-bypass',
		hi: 'destiny-2-battleye-bypass',
		id: 'destiny-2-battleye-bypass',
		th: 'destiny-2-battleye-bypass',
		vi: 'destiny-2-battleye-bypass',
		uk: 'destiny-2-battleye-bypass-chity',
		cs: 'destiny-2-battleye-bypass',
		ro: 'destiny-2-battleye-bypass-cheats',
		sv: 'destiny-2-battleye-bypass',
	},
	'cheats-2026': {
		en: 'destiny-2-cheats-2026',
		es: 'trucos-destiny-2-2026',
		fr: 'triche-destiny-2-2026',
		de: 'destiny-2-cheats-2026',
		pt: 'cheats-destiny-2-2026',
		it: 'trucchi-destiny-2-2026',
		nl: 'destiny-2-cheats-2026',
		pl: 'cheaty-destiny-2-2026',
		ru: 'chity-destiny-2-2026',
		tr: 'destiny-2-hileleri-2026',
		ar: 'destiny-2-cheats-2026',
		ja: 'destiny-2-cheats-2026',
		ko: 'destiny-2-cheats-2026',
		zh: 'destiny-2-cheats-2026',
		hi: 'destiny-2-cheats-2026',
		id: 'destiny-2-cheats-2026',
		th: 'destiny-2-cheats-2026',
		vi: 'destiny-2-cheats-2026',
		uk: 'chity-destiny-2-2026',
		cs: 'destiny-2-cheats-2026',
		ro: 'cheats-destiny-2-2026',
		sv: 'destiny-2-cheats-2026',
	},
	hacks: {
		en: 'destiny-2-cheats',
		es: 'hacks-trucos-destiny-2',
		fr: 'hacks-triche-destiny-2',
		de: 'destiny-2-cheats',
		pt: 'hacks-cheats-destiny-2',
		it: 'hacks-trucchi-destiny-2',
		nl: 'destiny-2-cheats',
		pl: 'hacks-cheatow-destiny-2',
		ru: 'haksy-chity-destiny-2',
		tr: 'destiny-2-hile-hacks',
		ar: 'destiny-2-cheats',
		ja: 'destiny-2-cheats',
		ko: 'destiny-2-cheats',
		zh: 'destiny-2-cheats',
		hi: 'destiny-2-cheats',
		id: 'destiny-2-cheats',
		th: 'destiny-2-cheats',
		vi: 'destiny-2-cheats',
		uk: 'haksy-chity-destiny-2',
		cs: 'destiny-2-cheats',
		ro: 'hacks-cheats-destiny-2',
		sv: 'destiny-2-cheats',
	},
	'cheat-download': {
		en: 'destiny-2-cheat-download',
		es: 'descarga-trucos-destiny-2',
		fr: 'telechargement-triche-destiny-2',
		de: 'destiny-2-cheat-download',
		pt: 'download-cheats-destiny-2',
		it: 'download-trucchi-destiny-2',
		nl: 'destiny-2-cheat-download',
		pl: 'pobieranie-cheatow-destiny-2',
		ru: 'skachat-chity-destiny-2',
		tr: 'destiny-2-hile-indir',
		ar: 'destiny-2-cheat-download',
		ja: 'destiny-2-cheat-download',
		ko: 'destiny-2-cheat-download',
		zh: 'destiny-2-cheat-download',
		hi: 'destiny-2-cheat-download',
		id: 'destiny-2-cheat-download',
		th: 'destiny-2-cheat-download',
		vi: 'destiny-2-cheat-download',
		uk: 'zavantazhennya-chitiv-destiny-2',
		cs: 'destiny-2-cheat-download',
		ro: 'descarcare-cheats-destiny-2',
		sv: 'destiny-2-cheat-download',
	},
	'crucible-cheats': {
		en: 'destiny-2-crucible-cheats',
		es: 'menu-mod-trucos-destiny-2',
		fr: 'menu-mod-triche-destiny-2',
		de: 'destiny-2-crucible-cheats',
		pt: 'menu-mod-cheats-destiny-2',
		it: 'menu-mod-trucchi-destiny-2',
		nl: 'destiny-2-crucible-cheats',
		pl: 'menu-mod-cheatow-destiny-2',
		ru: 'crucible-cheats-chity-destiny-2',
		tr: 'destiny-2-crucible-cheats',
		ar: 'destiny-2-crucible-cheats',
		ja: 'destiny-2-crucible-cheats',
		ko: 'destiny-2-crucible-cheats',
		zh: 'destiny-2-crucible-cheats',
		hi: 'destiny-2-crucible-cheats',
		id: 'destiny-2-crucible-cheats',
		th: 'destiny-2-crucible-cheats',
		vi: 'destiny-2-crucible-cheats',
		uk: 'crucible-cheats-chity-destiny-2',
		cs: 'destiny-2-crucible-cheats',
		ro: 'meniu-mod-cheats-destiny-2',
		sv: 'destiny-2-crucible-cheats',
	},
	'aim-assist': {
		en: 'destiny-2-aim-assist',
		es: 'aim-assist-trucos-destiny-2',
		fr: 'aim-assist-triche-destiny-2',
		de: 'destiny-2-aim-assist',
		pt: 'aim-assist-cheats-destiny-2',
		it: 'aim-assist-trucchi-destiny-2',
		nl: 'destiny-2-aim-assist',
		pl: 'aim-assist-cheatow-destiny-2',
		ru: 'aim-assist-chity-destiny-2',
		tr: 'destiny-2-aim-assist',
		ar: 'destiny-2-aim-assist',
		ja: 'destiny-2-aim-assist',
		ko: 'destiny-2-aim-assist',
		zh: 'destiny-2-aim-assist',
		hi: 'destiny-2-aim-assist',
		id: 'destiny-2-aim-assist',
		th: 'destiny-2-aim-assist',
		vi: 'destiny-2-aim-assist',
		uk: 'aim-assist-chity-destiny-2',
		cs: 'destiny-2-aim-assist',
		ro: 'aim-assist-cheats-destiny-2',
		sv: 'destiny-2-aim-assist',
	},
	'best-cheats': {
		en: 'best-destiny-2-cheats',
		es: 'mejores-trucos-destiny-2',
		fr: 'meilleures-triches-destiny-2',
		de: 'beste-escape-from-destiny-2-cheats',
		pt: 'melhores-cheats-destiny-2',
		it: 'migliori-trucchi-destiny-2',
		nl: 'beste-escape-from-destiny-2-cheats',
		pl: 'najlepsze-cheats-destiny-2',
		ru: 'luchshie-chity-destiny-2',
		tr: 'en-iyi-destiny-2-hileleri',
		ar: 'best-destiny-2-cheats',
		ja: 'best-destiny-2-cheats',
		ko: 'best-destiny-2-cheats',
		zh: 'best-destiny-2-cheats',
		hi: 'best-destiny-2-cheats',
		id: 'best-destiny-2-cheats',
		th: 'best-destiny-2-cheats',
		vi: 'best-destiny-2-cheats',
		uk: 'naykrashchi-chity-destiny-2',
		cs: 'nejlepsi-escape-from-destiny-2-cheats',
		ro: 'cele-mai-bune-cheats-destiny-2',
		sv: 'basta-escape-from-destiny-2-cheats',
	},
	'aimbot-hack': {
		en: 'destiny-2-aimbot-hack',
		es: 'aimbot-hack-trucos-destiny-2',
		fr: 'aimbot-hack-triche-destiny-2',
		de: 'destiny-2-aimbot-hack',
		pt: 'aimbot-hack-cheats-destiny-2',
		it: 'aimbot-hack-trucchi-destiny-2',
		nl: 'destiny-2-aimbot-hack',
		pl: 'aimbot-hack-cheatow-destiny-2',
		ru: 'aimbot-hack-chity-destiny-2',
		tr: 'destiny-2-aimbot-hack',
		ar: 'destiny-2-aimbot-hack',
		ja: 'destiny-2-aimbot-hack',
		ko: 'destiny-2-aimbot-hack',
		zh: 'destiny-2-aimbot-hack',
		hi: 'destiny-2-aimbot-hack',
		id: 'destiny-2-aimbot-hack',
		th: 'destiny-2-aimbot-hack',
		vi: 'destiny-2-aimbot-hack',
		uk: 'aimbot-hack-chity-destiny-2',
		cs: 'destiny-2-aimbot-hack',
		ro: 'aimbot-hack-cheats-destiny-2',
		sv: 'destiny-2-aimbot-hack',
	},
	'esp-hack': {
		en: 'destiny-2-esp-hack',
		es: 'esp-hack-trucos-destiny-2',
		fr: 'esp-hack-triche-destiny-2',
		de: 'destiny-2-esp-hack',
		pt: 'esp-hack-cheats-destiny-2',
		it: 'esp-hack-trucchi-destiny-2',
		nl: 'destiny-2-esp-hack',
		pl: 'esp-hack-cheatow-destiny-2',
		ru: 'esp-hack-chity-destiny-2',
		tr: 'destiny-2-esp-hack',
		ar: 'destiny-2-esp-hack',
		ja: 'destiny-2-esp-hack',
		ko: 'destiny-2-esp-hack',
		zh: 'destiny-2-esp-hack',
		hi: 'destiny-2-esp-hack',
		id: 'destiny-2-esp-hack',
		th: 'destiny-2-esp-hack',
		vi: 'destiny-2-esp-hack',
		uk: 'esp-hack-chity-destiny-2',
		cs: 'destiny-2-esp-hack',
		ro: 'esp-hack-cheats-destiny-2',
		sv: 'destiny-2-esp-hack',
	},
	'pve-cheats': {
		en: 'destiny-2-pve-cheats',
		es: 'pve-cheats-trucos-destiny-2',
		fr: 'pve-cheats-triche-destiny-2',
		de: 'destiny-2-pve-cheats',
		pt: 'pve-cheats-cheats-destiny-2',
		it: 'pve-cheats-trucchi-destiny-2',
		nl: 'destiny-2-pve-cheats',
		pl: 'pve-cheats-cheatow-destiny-2',
		ru: 'pve-cheats-chity-destiny-2',
		tr: 'destiny-2-pve-cheats',
		ar: 'destiny-2-pve-cheats',
		ja: 'destiny-2-pve-cheats',
		ko: 'destiny-2-pve-cheats',
		zh: 'destiny-2-pve-cheats',
		hi: 'destiny-2-pve-cheats',
		id: 'destiny-2-pve-cheats',
		th: 'destiny-2-pve-cheats',
		vi: 'destiny-2-pve-cheats',
		uk: 'pve-cheats-chity-destiny-2',
		cs: 'destiny-2-pve-cheats',
		ro: 'pve-cheats-cheats-destiny-2',
		sv: 'destiny-2-pve-cheats',
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

	if (rest[0] === 'blog' || rest[0] === 'destiny-2-cheats-blog') {
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
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('destiny-2-aimbot', locale), pageId: 'destiny-2-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('destiny-2-esp', locale), pageId: 'destiny-2-esp' },
		{ label: 'Blog', href: getBlogBasePath(locale) },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
