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
	{ label: fillBrandTokens('{game} hacks'), href: '/destiny-2-cheats/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/destiny-2-cheats/' },
	{ label: fillBrandTokens('{game} esp'), href: '/destiny-2-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/destiny-2-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: p.setup },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/destiny-2-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/destiny-2-esp/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/destiny-2-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/destiny-2-cheats/' },
	{ label: 'Aimbot', href: '/destiny-2-aimbot/' },
	{ label: 'ESP', href: '/destiny-2-esp/' },
	{ label: 'Features', href: p.features },
	{ label: 'Pricing', href: p.pricing },
	{ label: 'Setup', href: p.setup },
	{ label: 'Updates', href: p.updates },
	{ label: 'FAQ', href: p.faq },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: p.updates },
	{ label: fillBrandTokens('Contact {brand} support'), href: p.support },
	{ label: 'Refund policy details', href: englishPaths.refund },
	{ label: 'Privacy policy details', href: englishPaths.privacy },
	{ label: 'Terms of use', href: englishPaths.terms },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/destiny-2-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: p.updates },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/destiny-2-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/destiny-2-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/destiny-2-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: p.features },
	{ label: 'Monthly & lifetime pricing', href: p.pricing },
	{ label: fillBrandTokens('{game} hack setup guide'), href: p.setup },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: p.faq },
	{ label: fillBrandTokens('{brand} reviews'), href: reviewsBasePath },
	{ label: fillBrandTokens('{game} Intel blog'), href: p.blog },
	{ label: fillBrandTokens('Contact {brand} support'), href: p.support },
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
			'{brand} is an undetected {primaryKeyword} package for Destiny 2 on Windows PC. It includes aimbot, ESP wallhack, radar, no recoil, triggerbot, and stream-proof overlays with {antiCheat} maintenance.',
		slug: 'what-are-destiny-2-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-destiny-2-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in Crucible, Trials, and PvE activities?',
		answer:
			'Yes. Aimbot, ESP, radar, and wallhack work in Crucible PvP, Trials of Osiris, raids, dungeons, and PvE farming on Windows PC.',
		slug: 'crucible-trials-and-pve',
		seoTitle: 'Crucible, Trials & PvE Support | FAQ',
		seoDescription:
			'{brand} works in Crucible, Trials, and PvE activities — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles aimbot, ESP wallhack, radar, no recoil, no spread, triggerbot, movement tools, and stream-proof overlays in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after an Destiny 2 or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when an Destiny 2 or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
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
			'A {game} wallhack is an ESP overlay that shows Guardians, enemies, and loot through walls. {brand} includes skeleton ESP, box ESP, health bars, distance readouts, and toggleable categories.',
		slug: 'what-is-a-destiny-2-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals Guardians, enemies, and loot through walls — with distance, extracts, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and extract holds.',
		slug: 'does-destiny-2-cheats-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you raid.',
		slug: 'battleye-anti-cheat-and-destiny-2-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-destiny-2-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
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
		handle: 'xKrypt0_D2',
		rating: 5,
		text: 'Soft aim feels smooth in Crucible. Menu took a few minutes to figure out, but once I had profiles set per weapon, PvP felt a lot easier.',
		short: 'Soft aim feels smooth in Crucible once profiles are set.',
		slug: 'destiny-2-aim-assist-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_D2 — 5/5 | {brand}',
		seoDescription: '@xKrypt0_D2 rates {brand} soft aim 5/5 for Crucible on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes are clutch in dungeons. You can see who is holding a lane before you push. Monthly is still worth it for me.',
		short: 'ESP boxes help in dungeons before you push a lane.',
		slug: 'destiny-2-esp-scav-run-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for PvE on Windows PC.',
		date: '2026-07-19',
		tag: 'PvE',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'Switched here after Lightfall. Setup was straightforward and it stayed up after the last BattlEye update when my old loader died. Lifetime was worth it.',
		short: 'Stayed up after the last BattlEye update. Lifetime was worth it.',
		slug: 'destiny-2-update-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Soft aim is easy to tune on PC. Dialed FOV down a bit and it feels natural. Menu is pretty clear.',
		short: 'Soft aim is easy to tune — FOV changes feel natural.',
		slug: 'destiny-2-aim-assist-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} soft aim 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Works great once it is running. First launch was slow because Windows Defender flagged the loader. Support got back in about two hours. ESP in open maps is solid.',
		short: 'ESP in open maps is solid. Support helped after a slow first launch.',
		slug: 'destiny-2-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP in open maps is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Loot ESP alone pays for the monthly. Distance readouts make farming runs much faster.',
		short: 'Loot ESP and distance readouts make farming runs faster.',
		slug: 'destiny-2-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates {brand} loot ESP 5/5 for farming on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'Been on it since Lightfall. Per-weapon profiles actually help in Trials. Status page after patches could be clearer, but they had a rebuild up the next day.',
		short: 'Per-weapon profiles help in Trials. Rebuild was up the next day.',
		slug: 'destiny-2-aim-assist-raid-review-rankedgrind42',
		seoTitle: 'Trials Soft Aim by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} soft aim 4/5 for Trials on Windows PC.',
		date: '2026-07-07',
		tag: 'Trials',
	}),
	reviewMeta({
		handle: 'vanLifeD2',
		rating: 5,
		text: 'Radar saved me twice in Trials when a flank came from nowhere. Boxes plus radar stay clean on stream.',
		short: 'Radar caught two flanks in Trials. Clean on stream too.',
		slug: 'destiny-2-radar-hack-review-vanlifeeft',
		seoTitle: 'Radar Review by @vanLifeD2 — 5/5 | {brand}',
		seoDescription: '@vanLifeD2 rates {brand} radar 5/5 for Trials on Windows PC.',
		date: '2026-07-28',
		tag: 'Radar',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most tools go down on patch day. Status page updated within a few hours and I was back the next morning. My old cheat left me waiting days.',
		short: 'Back the next morning after a patch. Old tool left me waiting days.',
		slug: 'destiny-2-battleye-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'BattlEye updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Bolt-action soft aim plus ESP is nasty for sniper lanes. Simple setup, does what it says.',
		short: 'Bolt-action soft aim plus ESP is strong for sniper lanes.',
		slug: 'destiny-2-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper soft aim 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
