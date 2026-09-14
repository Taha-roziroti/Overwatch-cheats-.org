import type { PageId } from './i18n/content.generated';
import { sitePaths as p } from './site-paths';

export type RelatedPageLink = {
	href: string;
	label: string;
};

/** Curated internal links — hub-and-spoke, keyword-aware, no duplicate targets per page. */
export const pageRelatedLinks: Partial<Record<PageId, RelatedPageLink[]>> = {
	hacks: [
		{ href: p.esp, label: 'Overwatch 2 ESP' },
		{ href: p.aimbot, label: 'Overwatch 2 aimbot' },
		{ href: p.radar, label: 'Overwatch 2 wallhack' },
		{ href: p.features, label: 'Full feature list' },
		{ href: p.pricing, label: 'Pricing & plans' },
	],
	'overwatch-2-esp': [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.radar, label: 'Wallhack overlays' },
		{ href: p.features, label: 'All features' },
	],
	'overwatch-2-aimbot': [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.features, label: 'All features' },
		{ href: p.pricing, label: 'Store' },
	],
	radar: [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.features, label: 'All features' },
	],
	features: [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.esp, label: 'ESP' },
		{ href: p.aimbot, label: 'Aimbot' },
		{ href: p.pricing, label: 'Pricing' },
	],
	pricing: [
		{ href: p.cheats, label: 'Product overview' },
		{ href: p.features, label: 'Feature list' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.reviews, label: 'Buyer reviews' },
	],
	setup: [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.updates, label: 'Live status' },
		{ href: p.support, label: 'Support' },
	],
	updates: [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.faq, label: 'FAQ' },
	],
	faq: [
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.pricing, label: 'Pricing' },
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
	],
	support: [
		{ href: p.faq, label: 'FAQ' },
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.updates, label: 'Live status' },
	],
	wallhack: [
		{ href: p.radar, label: 'Wallhack guide' },
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
	],
	'esp-hack': [
		{ href: p.esp, label: 'ESP guide' },
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
	],
	'aimbot-hack': [
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
	],
	'aim-assist': [
		{ href: p.aimbot, label: 'Aimbot guide' },
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
	],
	undetected: [
		{ href: p.updates, label: 'Live status' },
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
	],
	'best-cheats': [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.features, label: 'All features' },
	],
	'cheats-2026': [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.blog, label: 'Blog updates' },
	],
	'crucible-cheats': [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.aimbot, label: 'Aimbot guide' },
	],
	'pve-cheats': [
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
		{ href: p.features, label: 'Hero scripts' },
	],
	'cheat-download': [
		{ href: p.setup, label: 'Setup guide' },
		{ href: p.pricing, label: 'Pricing' },
	],
	anticheat: [
		{ href: p.updates, label: 'Live status' },
		{ href: p.cheats, label: 'Overwatch 2 cheats' },
	],
};

export function getRelatedPageLinks(pageId: PageId): RelatedPageLink[] {
	return pageRelatedLinks[pageId] ?? [];
}
