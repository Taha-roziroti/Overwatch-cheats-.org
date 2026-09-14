import { siteConfig } from '../site';
import { GAME_GUIDES, GUIDE_GAME_GROUPS } from './guides.generated';
import { nativeGuides } from './native-guides';
import type { GameGuide } from './types';

export const guidesBasePath = '/guides/';

export function getGuidePath(slug: string): string {
	return `${guidesBasePath}${slug}/`;
}

export function getGuideBySlug(slug: string): GameGuide | undefined {
	return GAME_GUIDES.find((g) => g.slug === slug);
}

export function getGuidesGroupedByGame(): { gameId: string; gameName: string; guides: GameGuide[] }[] {
	const groups = new Map<string, GameGuide[]>();

	for (const guide of GAME_GUIDES) {
		const list = groups.get(guide.gameId) ?? [];
		list.push(guide);
		groups.set(guide.gameId, list);
	}

	return [...groups.entries()]
		.map(([gameId, guides]) => ({
			gameId,
			gameName: GUIDE_GAME_GROUPS[gameId] ?? guides[0]?.gameName ?? gameId,
			guides: guides.sort((a, b) => a.title.localeCompare(b.title)),
		}))
		.sort((a, b) => a.gameName.localeCompare(b.gameName));
}

export function getAllGuideStaticPaths() {
	return GAME_GUIDES.map((guide) => ({
		params: { slug: guide.slug },
		props: { guide },
	}));
}

export function absoluteGuideUrl(slug?: string): string {
	return new URL(slug ? getGuidePath(slug) : guidesBasePath, siteConfig.url).href;
}

export function getGuideSitemapEntries() {
	const indexLastmod = GAME_GUIDES.reduce(
		(max, g) => (g.publishedAt > max ? g.publishedAt : max),
		GAME_GUIDES[0]?.publishedAt ?? new Date().toISOString().slice(0, 10),
	);

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: guidesBasePath,
			lastmod: indexLastmod,
			priority: 0.82,
			changefreq: 'weekly',
			images: nativeGuides.slice(0, 1).map((g) => ({
				url: new URL(g.image, siteConfig.url).href,
				title: 'Overwatch 2 Guides',
				caption: g.description,
			})),
		},
	];

	for (const guide of GAME_GUIDES) {
		entries.push({
			path: getGuidePath(guide.slug),
			lastmod: guide.publishedAt,
			priority: 0.7,
			changefreq: 'monthly',
			images: [
				{
					url: guide.image,
					title: guide.title,
					caption: guide.description,
				},
			],
		});
	}

	return entries;
}

/** Native product guides relevant to a game — used for contextual internal links on guide articles. */
export function getRelatedNativeGuides(gameId: string, limit = 3) {
	const slugsByGame: Record<string, string[]> = {
		'destiny-2': ['overwatch-2-cheats', 'overwatch-2-esp', 'overwatch-2-aimbot', 'overwatch-2-hero-scripts'],
	};

	const slugs = slugsByGame[gameId];
	if (!slugs) return [];

	return nativeGuides.filter((guide) => slugs.includes(guide.slug)).slice(0, limit);
}

export { nativeGuides, GAME_GUIDES };
