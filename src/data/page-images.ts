import { siteConfig } from './site';
import { destinyImages } from './destiny';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	destinyImages.espWallhack,
	destinyImages.aimbotCombat,
	destinyImages.aimbotSkeleton,
	destinyImages.playerEsp,
	destinyImages.cheatsCombat,
	'/images/destiny-2-cheats-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/destiny-2-hero-poster.webp',
	'destiny-2-esp': '/images/destiny-2-cheats-esp-crucible.webp',
	'destiny-2-aimbot': '/images/destiny-2-cheats-crucible.webp',
	features: '/images/destiny-2-cheats-aimbot-esp.webp',
	pricing: '/images/destiny-2-cheats-pve.webp',
	setup: '/images/destiny-2-cheats-wallhack-skeleton.webp',
	updates: '/images/destiny-2-cheats-crucible.webp',
	faq: '/images/destiny-2-cheats-esp-crucible.webp',
	support: '/images/destiny-2-cheats-pve.webp',
	undetected: '/images/destiny-2-cheats-wallhack-skeleton.webp',
	wallhack: '/images/destiny-2-cheats-wallhack-skeleton.webp',
	radar: '/images/destiny-2-cheats-radar.webp',
	anticheat: '/images/destiny-2-cheats-crucible.webp',
	'cheats-2026': '/images/destiny-2-hero-poster.webp',
	hacks: '/images/destiny-2-cheats-pve.webp',
	'cheat-download': '/images/destiny-2-cheats-aimbot-esp.webp',
	'crucible-cheats': '/images/destiny-2-cheats-crucible.webp',
	'aim-assist': '/images/destiny-2-cheats-aimbot-esp.webp',
	'best-cheats': '/images/destiny-2-hero-poster.webp',
	'aimbot-hack': '/images/destiny-2-cheats-crucible.webp',
	'esp-hack': '/images/destiny-2-cheats-esp-crucible.webp',
	'pve-cheats': '/images/destiny-2-cheats-pve.webp',
	privacy: '/images/destiny-2-cheats-crucible.webp',
	refund: '/images/destiny-2-cheats-pve.webp',
	terms: '/images/destiny-2-cheats-aimbot-esp.webp',
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
