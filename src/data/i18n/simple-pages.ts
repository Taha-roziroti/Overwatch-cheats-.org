import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';
import { sitePaths as p } from '../site-paths';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: p.pricing,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Aimbot & targeting',
				paragraphs: [
					'Tracking, flickbot, and triggerbot with prediction and gravity prediction for every hero.',
					'Tune FOV adjustment, hitbox scaling, flick speed, tracking speed, and tracking acceleration to match your play style.',
				],
				list: [
					'Tracking, flickbot & triggerbot',
					'Prediction & gravity prediction',
					'Bone targeting & target closest bone',
					'FOV adjustment, dynamic FOV & separate FOVs',
					'Hitbox scaling, aim layers & target lock',
					'Autoshoot, keybinds & skill keybinding in Aim 2',
				],
			},
			{
				h2: 'Visual ESP options',
				paragraphs: [
					'Full visual ESP suite with player info, skeleton, glow, and ult charge overlay.',
					'Choose 2D box, 3D box, cornered box, or lines — plus draw FOV and target highlighting for every setting.',
				],
				list: [
					'Player info, skeleton & ult charge overlay',
					'Glow, glow HP indicator & rainbow mode',
					'2D/3D/cornered box, lines & enemy view angle',
					'Draw FOV, draw FOV 2 & target highlighting',
					'Visual options for every ESP setting',
				],
			},
			{
				h2: 'Hero scripts',
				paragraphs: [
					'Hero-specific options and automated combos for the most played heroes in Overwatch 2.',
					'Global auto-melee plus dedicated scripts for Genji, Tracer, Roadhog, Sojourn, Reaper, Mei, Widowmaker, Zarya, Doomfist, and Hanzo.',
				],
				list: [
					'Genji flick + auto-ash & auto-blade',
					'Tracer recall + ult bomb',
					'Roadhog hook + self-heal',
					'Sojourn railgun on guarantee kill',
					'Reaper wraith form, Mei cryofreeze, Widow auto-unscope',
					'Zarya bubble, Doomfist power block, Hanzo flick/bow charge prediction',
				],
			},
			{
				h2: 'Miscellaneous & support',
				paragraphs: [
					'Stream-proof rendering, change ingame FOV, and automatic config saving with swapping.',
					'We rebuild after big {game} or {antiCheat} patches — check Status before you queue.',
				],
				list: [
					'Streamproof mode',
					'Change ingame FOV',
					'Automatic config saving + swapping',
					'Target allies toggle',
					'Status page, setup guide & email support',
				],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: p.setup,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same aimbot, ESP, hero scripts, and visual options on monthly and lifetime plans.',
				],
				list: [
					'Tracking aimbot, flickbot & triggerbot',
					'Full ESP suite & hero scripts',
					'Patch rebuilds while active',
					'Digital delivery after checkout',
				],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Overwatch 2 Cheats overview',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of Sep 2026 the package is online for Overwatch 2 on Windows PC. We post a new note here when a game or Easy Anti-Cheat patch needs a rebuild.',
					'If Status is green, you can queue Quick Play or Competitive. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Buy Overwatch 2 Cheats',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: p.features,
		galleryTitle: 'In-match look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for Overwatch 2 on Windows PC — built for Quick Play, Competitive, and hero-specific play.',
				],
				list: [
					'Tracking aimbot, flickbot & triggerbot',
					'Full ESP with skeleton, glow & boxes',
					'Hero scripts for Genji, Tracer & more',
					'Easy Anti-Cheat rebuilds after patches',
				],
			},
			{
				h2: 'Built for Overwatch 2',
				paragraphs: [
					'Track enemies through cover, highlight targets with glow and ult charge overlay, and run hero-specific scripts. Tune tracking speed, flick speed, and bone targeting per hero.',
				],
				list: [
					'<a href="/overwatch-2-esp/">ESP guide</a>',
					'<a href="/overwatch-2-aimbot/">Aimbot controls</a>',
					'<a href="/overwatch-2-wallhack/">Wallhack guide</a>',
					'<a href="/guides/">Guides hub</a>',
					'<a href="/status/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/status/">Check status</a>',
				],
			},
		],
	}),
	'overwatch-2-esp': page({
		title: 'Overwatch 2 ESP | {brand}',
		description:
			'Overwatch 2 ESP and wallhack for Windows PC — player info, skeleton, glow, 2D/3D boxes, ult charge overlay, and stream-proof rendering.',
		h1: 'ESP',
		intro: 'See heroes and enemies through walls during Overwatch 2 matches. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Overwatch 2 Cheats overview',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: ['Player info, skeleton, glow, boxes, lines, and ult charge overlay with full visual customization.'],
				list: [
					'Player info & skeleton ESP',
					'2D/3D/cornered box & lines',
					'Glow, ult charge & target highlighting',
				],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Clear Quick Play and Competitive without flooding the screen.'],
				list: ['Visual options for every ESP setting', 'Draw FOV & enemy view angle', 'Stream-proof rendering'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot and hero scripts in one plan.'],
				list: [
					'<a href="/overwatch-2-cheats/">Full product</a>',
					'<a href="/overwatch-2-aimbot/">Aimbot guide</a>',
					'<a href="/overwatch-2-wallhack/">Wallhack guide</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'overwatch-2-aimbot': page({
		title: 'Overwatch 2 Aimbot | {brand}',
		description:
			'Overwatch 2 aimbot for Windows PC — tracking, flickbot, triggerbot, prediction, bone targeting, and dynamic FOV you can tune per hero.',
		h1: 'Aimbot',
		intro: 'Tracking, flickbot, and triggerbot you can tune for Overwatch 2. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Overwatch 2 Cheats overview',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV, tracking speed, flick speed, and bone priority before you queue.'],
				list: [
					'Tracking, flickbot & triggerbot',
					'Prediction & gravity prediction',
					'Bone targeting & target lock',
				],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Legit tracking aimbot', 'Hero-specific options', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and hero scripts in one license.'],
				list: [
					'<a href="/overwatch-2-cheats/">Full product</a>',
					'<a href="/overwatch-2-esp/">ESP guide</a>',
					'<a href="/overwatch-2-wallhack/">Wallhack guide</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Overwatch 2 Wallhack | {brand}',
		description:
			'Overwatch 2 wallhack for Windows PC — draw FOV, glow, skeleton ESP, target highlighting, and customizable visual overlays.',
		h1: 'Wallhack',
		intro: 'Draw FOV, glow modes, and target highlighting for threats outside your view. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Overwatch 2 Cheats overview',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		galleryTitle: 'Visual overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: ['Draw FOV circles, glow HP indicators, and enemy view angles with full customization.'],
				list: ['Draw FOV & draw FOV 2', 'Glow rainbow mode', 'Target highlighting'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use visual options alongside skeleton and box ESP for complete awareness.'],
				list: [
					'<a href="/overwatch-2-esp/">ESP guide</a>',
					'<a href="/overwatch-2-cheats/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: p.updates,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: [
					'Run the loader as admin, paste your license, then launch {game}. If you play through Battle.net or Steam, install or verify the game from the official store page first.',
				],
				list: [
					'Download the loader from your delivery email',
					'Paste license key',
					'Launch the game',
					'<a href="https://store.steampowered.com/app/2357570/Overwatch_2/" target="_blank" rel="noopener noreferrer">Overwatch 2 on Steam</a>',
				],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/status/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: p.faq,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/status/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: p.support,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/status/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
