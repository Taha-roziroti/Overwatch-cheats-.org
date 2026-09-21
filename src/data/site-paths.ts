import { englishPaths } from './i18n/routing';
import { reviewsBasePath } from './reviews';
import { faqBasePath } from './faq';
import { getBlogBasePath } from './blog/helpers';
import { defaultLocale } from './i18n/locales';

/** Canonical EN paths for internal linking — keep in sync with englishPaths + module base paths. */
export const sitePaths = {
	features: englishPaths.features,
	pricing: englishPaths.pricing,
	setup: englishPaths.setup,
	updates: englishPaths.updates,
	anticheat: englishPaths.anticheat,
	faq: englishPaths.faq,
	faqIndex: faqBasePath,
	support: englishPaths.support,
	cheats: englishPaths.hacks,
	esp: englishPaths['overwatch-2-esp'],
	aimbot: englishPaths['overwatch-2-aimbot'],
	radar: englishPaths.radar,
	reviews: reviewsBasePath,
	blog: getBlogBasePath(defaultLocale),
	guides: '/guides/',
	privacy: englishPaths.privacy,
	refund: englishPaths.refund,
	terms: englishPaths.terms,
} as const;
