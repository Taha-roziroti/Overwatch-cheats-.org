/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'overwatch-2-esp', 'overwatch-2-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'anticheat',
	'cheats-2026', 'hacks', 'cheat-download', 'crucible-cheats', 'aim-assist', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'pve-cheats', 'privacy', 'refund', 'terms',
];

/** Hero image per page — simple Overwatch 2 cheats keyword filenames. */
export const HERO_IMAGES = {
	home: '/images/overwatch-2-cheats-esp.webp',
	'overwatch-2-esp': '/images/overwatch-2-cheats-radar.webp',
	'overwatch-2-aimbot': '/images/overwatch-2-cheats-aimbot.webp',
	features: '/images/overwatch-2-cheats-aimbot-view.webp',
	pricing: '/images/overwatch-2-cheats-raid.webp',
	setup: '/images/overwatch-2-cheats-radar.webp',
	updates: '/images/overwatch-2-cheats-esp.webp',
	faq: '/images/overwatch-2-cheats-aimbot-view.webp',
	support: '/images/overwatch-2-cheats-raid.webp',
	undetected: '/images/overwatch-2-cheats-wallhack.webp',
	wallhack: '/images/overwatch-2-cheats-wallhack.webp',
	radar: '/images/overwatch-2-cheats-radar.webp',
	anticheat: '/images/overwatch-2-cheats-aimbot.webp',
	'cheats-2026': '/images/overwatch-2-cheats-esp.webp',
	hacks: '/images/overwatch-2-cheats-raid.webp',
	'cheat-download': '/images/overwatch-2-cheats-raid.webp',
	'crucible-cheats': '/images/overwatch-2-cheats-radar.webp',
	'aim-assist': '/images/overwatch-2-cheats-aimbot-view.webp',
	'best-cheats': '/images/overwatch-2-cheats-esp.webp',
	'aimbot-hack': '/images/overwatch-2-cheats-aimbot-view.webp',
	'esp-hack': '/images/overwatch-2-cheats-wallhack.webp',
	'pve-cheats': '/images/overwatch-2-cheats-radar.webp',
	privacy: '/images/overwatch-2-cheats-aimbot.webp',
	refund: '/images/overwatch-2-cheats-raid.webp',
	terms: '/images/overwatch-2-cheats-aimbot-view.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'overwatch-2-esp' | 'overwatch-2-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anticheat' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'crucible-cheats' | 'aim-assist' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'pve-cheats' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Overwatch 2 Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	'overwatch-2':
		'<a href="https://overwatch.blizzard.com/" target="_blank" rel="noopener noreferrer">Overwatch 2</a>',
	status:
		'<a href="https://support.blizzard.com/" target="_blank" rel="noopener noreferrer">Blizzard Support</a>',
	anticheat:
		'<a href="https://overwatch.blizzard.com/" target="_blank" rel="noopener noreferrer">Blizzard Anti-Cheat</a>',
	steam:
		'<a href="https://store.steampowered.com/app/2357570/Overwatch_2/" target="_blank" rel="noopener noreferrer">Overwatch 2 on Steam</a>',
};
