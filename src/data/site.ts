export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';
import { englishPaths } from './i18n/routing';
import { sitePaths as p } from './site-paths';
import { reviewsBasePath } from './reviews';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/overwatch-2-cheats/' },
	{ label: fillBrandTokens('{game} ESP'), href: '/overwatch-2-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/overwatch-2-aimbot/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/overwatch-2-wallhack/' },
	{ label: fillBrandTokens('{game} setup'), href: p.setup },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/overwatch-2-cheats/' },
	{ label: 'Aimbot', href: '/overwatch-2-aimbot/' },
	{ label: 'ESP', href: '/overwatch-2-esp/' },
	{ label: 'Wallhack', href: '/overwatch-2-wallhack/' },
	{ label: 'Features', href: p.features },
	{ label: 'Pricing', href: p.pricing },
	{ label: 'Status', href: p.updates },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: p.updates },
	{ label: fillBrandTokens('Contact {brand} support'), href: p.support },
	{ label: 'Refund policy details', href: englishPaths.refund },
	{ label: 'Privacy policy details', href: englishPaths.privacy },
	{ label: 'Terms of use', href: englishPaths.terms },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/overwatch-2-cheats/' },
	{ label: fillBrandTokens('{game} ESP'), href: '/overwatch-2-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/overwatch-2-aimbot/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/overwatch-2-wallhack/' },
	{ label: fillBrandTokens('All {game} features'), href: p.features },
	{ label: 'Pricing', href: p.pricing },
	{ label: 'Setup', href: p.setup },
	{ label: 'Status', href: p.updates },
	{ label: 'FAQ', href: p.faq },
	{ label: 'Reviews', href: reviewsBasePath },
	{ label: 'Forum', href: p.blog },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Overwatch 2 on Windows PC. It includes tracking aimbot, ESP wallhack, flickbot, triggerbot, hero scripts, and stream-proof overlays with {antiCheat} maintenance.',
		slug: 'what-are-overwatch-2-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, wallhack, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in Quick Play, Competitive, and Arcade modes?',
		answer:
			'Yes. Aimbot, ESP, and wallhack work in Quick Play, Competitive, Arcade, and Custom Games on Windows PC.',
		slug: 'quick-play-competitive-arcade',
		seoTitle: 'Quick Play, Competitive & Arcade Support | FAQ',
		seoDescription:
			'{brand} works in Quick Play, Competitive, and Arcade — ESP, wallhack, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, or aimbot?',
		answer:
			'{brand} bundles tracking aimbot, flickbot, triggerbot, ESP wallhack, hero scripts, bone targeting, and stream-proof overlays in one license. See Features for the full list.',
		slug: 'esp-wallhack-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, hero markers, threat cues, and configurable aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'license-delivery',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after an Overwatch 2 or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when an Overwatch 2 or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows heroes, enemies, and ult charge through walls. {brand} includes skeleton ESP, box ESP, health bars, distance readouts, and toggleable categories.',
		slug: 'what-is-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals heroes, enemies, and objectives through walls — with distance readouts and category toggles.',
	}),
	faq({
		question: 'Does {brand} include hero scripts?',
		answer:
			'Yes. {brand} includes hero-specific scripts for movement, ability timing, and ult tracking — useful for flank routes and objective control.',
		slug: 'hero-scripts-included',
		seoTitle: 'Does {brand} Include Hero Scripts? | FAQ',
		seoDescription:
			'Yes — {brand} includes hero scripts for movement, abilities, and ult tracking on Windows PC.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'blizzard-anticheat-and-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, wallhack, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, wallhack, and aimbot in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_OW',
		rating: 5,
		text: 'Tracking aimbot feels smooth in Quick Play. Menu took a few minutes to figure out, but once I had profiles set per hero, PvP felt a lot easier.',
		short: 'Tracking aimbot feels smooth in Quick Play once profiles are set.',
		slug: 'aimbot-xkrypt0',
		seoTitle: 'Aimbot Review by @xKrypt0_OW — 5/5 | {brand}',
		seoDescription: '@xKrypt0_OW rates {brand} tracking aimbot 5/5 for Quick Play on Windows PC.',
		date: '2026-07-24',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes are clutch on Control maps. You can see who is holding a lane before you push. Monthly is still worth it for me.',
		short: 'ESP boxes help on Control maps before you push a lane.',
		slug: 'esp-control-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for Competitive on Windows PC.',
		date: '2026-07-19',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'Switched here after Season 12. Setup was straightforward and it stayed up after the last Blizzard Anti-Cheat update when my old loader died. Lifetime was worth it.',
		short: 'Stayed up after the last Blizzard Anti-Cheat update. Lifetime was worth it.',
		slug: 'update-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Flickbot is easy to tune on PC. Dialed FOV down a bit and it feels natural. Menu is pretty clear.',
		short: 'Flickbot is easy to tune — FOV changes feel natural.',
		slug: 'flickbot-ctrl-player99',
		seoTitle: 'Flickbot Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} flickbot 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Flickbot',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Works great once it is running. First launch was slow because Windows Defender flagged the loader. Support got back in about two hours. ESP in open maps is solid.',
		short: 'ESP in open maps is solid. Support helped after a slow first launch.',
		slug: 'setup-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP in open maps is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'ultTrackerx',
		rating: 5,
		text: 'Hero ESP and ult tracking alone pay for the monthly. Distance readouts make team fights much easier to read.',
		short: 'Hero ESP and ult tracking make team fights easier to read.',
		slug: 'hero-esp-ulttrackerx',
		seoTitle: 'Hero ESP Review by @ultTrackerx — 5/5 | {brand}',
		seoDescription: '@ultTrackerx rates {brand} hero ESP 5/5 for Competitive on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'Been on it since Season 12. Per-hero profiles actually help in Competitive. Status page after patches could be clearer, but they had a rebuild up the next day.',
		short: 'Per-hero profiles help in Competitive. Rebuild was up the next day.',
		slug: 'aimbot-competitive-rankedgrind42',
		seoTitle: 'Competitive Aimbot by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} aimbot 4/5 for Competitive on Windows PC.',
		date: '2026-07-07',
		tag: 'Competitive',
	}),
	reviewMeta({
		handle: 'vanLifeOW',
		rating: 5,
		text: 'Wallhack saved me twice in Competitive when a flank came from nowhere. Boxes plus wallhack overlay stay clean on stream.',
		short: 'Wallhack caught two flanks in Competitive. Clean on stream too.',
		slug: 'wallhack-vanlifeow',
		seoTitle: 'Wallhack Review by @vanLifeOW — 5/5 | {brand}',
		seoDescription: '@vanLifeOW rates {brand} wallhack 5/5 for Competitive on Windows PC.',
		date: '2026-07-28',
		tag: 'Wallhack',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most tools go down on patch day. Status page updated within a few hours and I was back the next morning. My old cheat left me waiting days.',
		short: 'Back the next morning after a patch. Old tool left me waiting days.',
		slug: 'patch-update-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'Blizzard Anti-Cheat updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Hitscan tracking plus ESP is nasty for long sightlines. Simple setup, does what it says.',
		short: 'Hitscan tracking plus ESP is strong for long sightlines.',
		slug: 'sniper-aim-snipezonly',
		seoTitle: 'Sniper Aimbot by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper aimbot 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
