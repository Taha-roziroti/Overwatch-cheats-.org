/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Overwatch 2 Cheats',
	/** Short product label if needed */
	shortName: 'Overwatch 2',
	/** Canonical origin — no trailing slash */
	url: 'https://warthundercheat.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warthundercheat.net',
	checkoutUrl: 'https://zadeyo.com/go/TAHA?to=%2Fproducts%2Foverwatch-2',

	/** Game this template instance targets */
	game: 'Overwatch 2',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/overwatch-2-cheats-logo.webp',
	logoRaster: '/images/overwatch-2-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Overwatch 2 Cheats logo',
	defaultOgImage: '/images/overwatch-2-hero-poster.webp',
	heroImage: '/images/overwatch-2-hero-poster.webp',
	/** Hero background clip — swap at public/videos/overwatch-2-hero.mp4 when ready */
	heroVideo: '/videos/overwatch-2-hero.mp4',
	heroVideoPoster: '/images/overwatch-2-hero-poster.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — #1B1A1B canvas, #8F2699 brand accent, #61DCB5 secondary.
	 */
	theme: {
		accent: '#8F2699',
		bg: '#1B1A1B',
		soft: '#61DCB5',
		deep: '#6a1d75',
		hover: '#a832b8',
		panel: '#252425',
	},

	keywords: {
		primary: 'Overwatch 2 cheats',
		list: [
			'Overwatch 2 cheats',
			'Overwatch 2 aimbot',
			'Overwatch 2 ESP',
			'Overwatch 2 wallhack',
			'Overwatch 2 triggerbot',
			'Overwatch 2 flickbot',
			'buy Overwatch 2 cheats',
			'Overwatch 2 premium cheats',
		] as const,
	},

	seo: {
		homeTitle: 'Overwatch 2 Cheats | Undetected Aimbot & ESP',
		homeDescription:
			'Premium Overwatch 2 cheats for Windows PC — tracking aimbot, ESP, wallhack, flickbot, triggerbot, and hero scripts. Compare plans with instant delivery.',
		featuresTitle: '{game} Cheat Features | {brand}',
		featuresDescription:
			'Tracking, flickbot, triggerbot, bone targeting, ESP, skeleton, glow, hero scripts, and stream-proof overlays in one {game} license for Windows PC.',
		storeTitle: '{game} Cheats Store | {brand}',
		storeDescription:
			'Monthly and lifetime Overwatch 2 cheat plans for Windows PC. Same aimbot, ESP, wallhack, and hero scripts on both. Instant delivery after checkout.',
		statusTitle: '{game} Cheat Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before Quick Play or Competitive on Windows PC.',
		previewTitle: 'Buy Overwatch 2 Cheats | Windows PC License',
		previewDescription:
			'Purchase undetected Overwatch 2 cheats for Windows PC — ESP, aimbot, flickbot, hero scripts, and {antiCheat} rebuilds. Monthly and lifetime plans.',
		setupTitle: '{game} Cheat Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps for Quick Play and Competitive — follow each step before your first match.',
		supportTitle: '{game} Cheat Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} Cheats FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Overwatch 2 — delivery, setup, {antiCheat} updates, stream-proof mode, refunds, and Windows PC notes.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — aimbot, ESP, wallhack, hero scripts, and patch updates for Overwatch 2 on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — hero tips, Competitive, ESP, aimbot, and {antiCheat} update coverage for Windows PC players.',
	},

	copy: {
		tagline: 'Undetected {primaryKeyword} — aimbot, ESP, wallhack, and hero scripts for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes tracking aimbot, flickbot, ESP, wallhack, hero scripts, and stream-proof overlays with {antiCheat} maintenance.',
		heroLede:
			'Tracking aimbot, flickbot, ESP, wallhack, hero scripts, and stream-proof overlays for Overwatch 2 on Windows PC.',
		blogLabel: 'Overwatch 2 Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for Overwatch 2 — tracking aimbot, flickbot, ESP wallhack, hero scripts, triggerbot, and {antiCheat} rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — aimbot, ESP, wallhack, hero scripts, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Aimbot',
		chipRadar: 'Hero scripts',
		chipUpdates: 'Stream-proof',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-09-14',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/overwatch-2-cheats-esp-box.webp',
				title: 'Overwatch 2 ESP overlay with 2D box',
				caption: 'Player ESP boxes, skeleton wallhack, and distance readouts in Quick Play',
			},
			{
				src: '/images/overwatch-2-cheats-wallhack-skeleton.webp',
				title: 'Overwatch 2 wallhack and skeleton ESP',
				caption: 'Enemy hero outlines through walls with glow and health ESP',
			},
			{
				src: '/images/overwatch-2-cheats-aimbot-esp.webp',
				title: 'Overwatch 2 aimbot and ESP in PvP',
				caption: 'Tracking aimbot with box ESP and bone targeting for precision shots',
			},
			{
				src: '/images/overwatch-2-cheats-flickbot.webp',
				title: 'Overwatch 2 flickbot cheat overlay',
				caption: 'Undetected flickbot and triggerbot for Competitive matches',
			},
			{
				src: '/images/overwatch-2-cheats-hero-scripts.webp',
				title: 'Overwatch 2 hero scripts overlay',
				caption: 'Hero-specific scripts with ult charge overlay and target highlighting',
			},
			{
				src: '/images/overwatch-2-cheats-fov.webp',
				title: 'Overwatch 2 FOV and visual options',
				caption: 'Draw FOV, glow rainbow mode, and customizable ESP settings',
			},
		],
	},
} as const;

export type Brand = typeof brand;

export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
