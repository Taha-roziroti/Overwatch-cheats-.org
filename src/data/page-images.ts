import { siteConfig } from './site';
import { overwatchImages } from './overwatch2';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	overwatchImages.espWallhack,
	overwatchImages.aimbotCombat,
	overwatchImages.aimbotSkeleton,
	overwatchImages.playerEsp,
	overwatchImages.cheatsCombat,
	'/images/overwatch-2-cheats-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/overwatch-2-hero-poster.webp',
	'overwatch-2-esp': '/images/overwatch-2-cheats-esp-crucible.webp',
	'overwatch-2-aimbot': '/images/overwatch-2-cheats-crucible.webp',
	features: '/images/overwatch-2-cheats-aimbot-esp.webp',
	pricing: '/images/overwatch-2-cheats-pricing-store.webp',
	setup: '/images/overwatch-2-cheats-wallhack-skeleton.webp',
	updates: '/images/overwatch-2-cheats-status-updates.webp',
	faq: '/images/overwatch-2-cheats-esp-crucible.webp',
	support: '/images/overwatch-2-cheats-pve.webp',
	undetected: '/images/overwatch-2-cheats-wallhack-skeleton.webp',
	wallhack: '/images/overwatch-2-cheats-wallhack-skeleton.webp',
	radar: '/images/overwatch-2-cheats-radar.webp',
	anticheat: '/images/overwatch-2-cheats-crucible.webp',
	'cheats-2026': '/images/overwatch-2-hero-poster.webp',
	hacks: '/images/overwatch-2-cheats-pve.webp',
	'cheat-download': '/images/overwatch-2-cheats-aimbot-esp.webp',
	'crucible-cheats': '/images/overwatch-2-cheats-crucible.webp',
	'aim-assist': '/images/overwatch-2-cheats-aimbot-esp.webp',
	'best-cheats': '/images/overwatch-2-hero-poster.webp',
	'aimbot-hack': '/images/overwatch-2-cheats-crucible.webp',
	'esp-hack': '/images/overwatch-2-cheats-esp-crucible.webp',
	'pve-cheats': '/images/overwatch-2-cheats-pve.webp',
	privacy: '/images/overwatch-2-cheats-crucible.webp',
	refund: '/images/overwatch-2-cheats-pve.webp',
	terms: '/images/overwatch-2-cheats-aimbot-esp.webp',
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
