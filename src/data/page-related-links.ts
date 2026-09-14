import type { PageId } from './i18n/content.generated';
import { sitePaths as p } from './site-paths';

export type RelatedPageLink = {
	href: string;
	label: string;
};

/** Curated internal links per page — hub-and-spoke, no duplicate overload. */
export const pageRelatedLinks: Partial<Record<PageId, RelatedPageLink[]>> = {
	hacks: [
		{ href: p.esp, label: 'ESP & wallhack' },
		{ href: p.aimbot, label: 'Aimbot & soft aim' },
		{ href: p.radar, label: 'Radar hack' },
		{ href: '/d2-crucible/', label: 'Crucible cheats' },
		{ href: '/d2-pve/', label: 'PvE cheats' },
		{ href: p.guides, label: 'Guides hub' },
	],
	'destiny-2-esp': [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.radar, label: 'Radar overlay' },
		{ href: '/d2-wallhack/', label: 'Wallhack guide' },
		{ href: p.features, label: 'All features' },
		{ href: p.guides, label: 'Guides hub' },
	],
	'destiny-2-aimbot': [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.radar, label: 'Radar overlay' },
		{ href: '/d2-aim-assist/', label: 'Aim assist' },
		{ href: p.features, label: 'All features' },
		{ href: p.guides, label: 'Guides hub' },
	],
	radar: [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.features, label: 'All features' },
		{ href: p.guides, label: 'Guides hub' },
	],
	features: [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.pricing, label: 'Pricing' },
		{ href: p.setup, label: 'Setup guide' },
	],
	pricing: [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.features, label: 'Feature list' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.reviews, label: 'Buyer reviews' },
		{ href: p.faq, label: 'FAQ' },
	],
	setup: [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.updates, label: 'Live status' },
		{ href: p.features, label: 'Feature list' },
		{ href: p.support, label: 'Support' },
		{ href: p.guides, label: 'Guides hub' },
	],
	updates: [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: '/d2-battleye/', label: 'BattlEye notes' },
		{ href: p.blog, label: 'Blog' },
		{ href: p.support, label: 'Support' },
	],
	faq: [
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.support, label: 'Support' },
		{ href: p.pricing, label: 'Pricing' },
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.guides, label: 'Guides hub' },
	],
	support: [
		{ href: p.faq, label: 'FAQ' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.updates, label: 'Live status' },
		{ href: p.cheats, label: 'Cheats overview' },
	],
	wallhack: [
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.features, label: 'All features' },
	],
	'esp-hack': [
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: '/d2-wallhack/', label: 'Wallhack guide' },
	],
	'aimbot-hack': [
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: '/d2-aim-assist/', label: 'Aim assist' },
	],
	'aim-assist': [
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.esp, label: 'ESP guide' },
	],
	undetected: [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.updates, label: 'Live status' },
		{ href: '/d2-cheats/', label: 'Best cheats' },
	],
	'best-cheats': [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.features, label: 'All features' },
		{ href: p.reviews, label: 'Buyer reviews' },
	],
	'cheats-2026': [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.features, label: 'All features' },
		{ href: p.blog, label: 'Blog' },
	],
	'crucible-cheats': [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: '/d2-pve/', label: 'PvE cheats' },
	],
	'pve-cheats': [
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: '/d2-crucible/', label: 'Crucible cheats' },
		{ href: p.guides, label: 'Guides hub' },
	],
	'cheat-download': [
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.pricing, label: 'Pricing' },
		{ href: p.cheats, label: 'Cheats overview' },
	],
	anticheat: [
		{ href: p.updates, label: 'Live status' },
		{ href: p.cheats, label: 'Cheats overview' },
		{ href: p.setup, label: 'Setup guide' },
	],
};

export function getRelatedPageLinks(pageId: PageId): RelatedPageLink[] {
	return pageRelatedLinks[pageId] ?? [];
}
