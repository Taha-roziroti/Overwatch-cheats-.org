import type { PageId } from './i18n/content.generated';
import { sitePaths as p } from './site-paths';

export type RelatedPageLink = {
	href: string;
	label: string;
};

/** Curated internal links per page — hub-and-spoke to live pillar URLs only. */
export const pageRelatedLinks: Partial<Record<PageId, RelatedPageLink[]>> = {
	hacks: [
		{ href: p.esp, label: 'ESP & wallhack' },
		{ href: p.aimbot, label: 'Aimbot & soft aim' },
		{ href: p.radar, label: 'Radar hack' },
		{ href: p.features, label: 'All features' },
		{ href: p.pricing, label: 'Store & plans' },
		{ href: p.guides, label: 'Guides hub' },
	],
	'destiny-2-esp': [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.radar, label: 'Radar overlay' },
		{ href: p.features, label: 'All features' },
		{ href: p.pricing, label: 'Store' },
		{ href: p.guides, label: 'Guides hub' },
	],
	'destiny-2-aimbot': [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.radar, label: 'Radar overlay' },
		{ href: p.features, label: 'All features' },
		{ href: p.pricing, label: 'Store' },
		{ href: p.guides, label: 'Guides hub' },
	],
	radar: [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.features, label: 'All features' },
		{ href: p.guides, label: 'Guides hub' },
	],
	features: [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.pricing, label: 'Pricing' },
		{ href: p.setup, label: 'Setup guide' },
	],
	pricing: [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.features, label: 'Feature list' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.reviews, label: 'Buyer reviews' },
		{ href: p.faq, label: 'FAQ' },
	],
	setup: [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.updates, label: 'Live status' },
		{ href: p.features, label: 'Feature list' },
		{ href: p.support, label: 'Support' },
		{ href: p.guides, label: 'Guides hub' },
	],
	updates: [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.faq, label: 'FAQ' },
		{ href: p.blog, label: 'Blog' },
		{ href: p.support, label: 'Support' },
	],
	faq: [
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.support, label: 'Support' },
		{ href: p.pricing, label: 'Pricing' },
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.guides, label: 'Guides hub' },
	],
	support: [
		{ href: p.faq, label: 'FAQ' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.updates, label: 'Live status' },
		{ href: p.cheats, label: 'Product overview' },
	],
	wallhack: [
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.features, label: 'All features' },
	],
	'esp-hack': [
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.radar, label: 'Radar overlay' },
	],
	'aimbot-hack': [
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.esp, label: 'ESP guide' },
	],
	'aim-assist': [
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.esp, label: 'ESP guide' },
	],
	undetected: [
		{ href: p.updates, label: 'Live status' },
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.faq, label: 'FAQ' },
	],
	'best-cheats': [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.features, label: 'All features' },
		{ href: p.reviews, label: 'Buyer reviews' },
	],
	'cheats-2026': [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.blog, label: 'Blog updates' },
		{ href: p.features, label: 'All features' },
	],
	'crucible-cheats': [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: '/blog/pve-strategies/', label: 'PvE strategies' },
	],
	'pve-cheats': [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: '/blog/pve-strategies/', label: 'PvE strategies' },
		{ href: p.guides, label: 'Guides hub' },
	],
	'cheat-download': [
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.pricing, label: 'Pricing' },
		{ href: p.cheats, label: 'Product overview' },
	],
	anticheat: [
		{ href: p.updates, label: 'Live status' },
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.setup, label: 'Setup guide' },
	],
};

export function getRelatedPageLinks(pageId: PageId): RelatedPageLink[] {
	return pageRelatedLinks[pageId] ?? [];
}
