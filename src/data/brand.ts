/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Destiny 2 Cheats',
	/** Short product label if needed */
	shortName: 'Destiny 2',
	/** Canonical origin — no trailing slash */
	url: 'https://destiny2cheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@destiny2cheats.org',
	checkoutUrl: 'https://zadeyo.com/go/TAHA?to=%2Fproducts%2Fdestiny-2',

	/** Game this template instance targets */
	game: 'Destiny 2',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/destiny-2-cheats-logo.webp',
	logoRaster: '/images/destiny-2-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Destiny 2 Cheats logo',
	defaultOgImage: '/images/destiny-2-hero-poster.webp',
	heroImage: '/images/destiny-2-hero-poster.webp',
	/** Set to /videos/destiny-2-hero.mp4 after uploading the hero clip — until then poster shows */
	heroVideo: '/videos/destiny-2-hero.mp4',
	heroVideoPoster: '/images/destiny-2-hero-poster.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — #FAFBFD canvas, #B10FF6 brand accent, derived soft/deep/hover.
	 */
	theme: {
		accent: '#B10FF6',
		bg: '#FAFBFD',
		soft: '#d085f1',
		deep: '#7602a7',
		hover: '#bf45f3',
		panel: '#FFFFFF',
	},

	keywords: {
		primary: 'Destiny 2 cheats',
		list: [
			'Destiny 2 cheats',
			'Destiny 2 hacks',
			'Destiny 2 aimbot',
			'Destiny 2 ESP',
			'Destiny 2 wallhack',
			'Destiny 2 PvP cheats',
			'undetected Destiny 2 cheats',
			'best Destiny 2 cheats',
		] as const,
	},

	seo: {
		homeTitle: 'Destiny 2 Cheats | Undetected PC Hacks',
		homeDescription:
			'Official Destiny 2 cheats for Windows PC — aimbot, ESP, wallhack, radar, no recoil, and stream-proof overlays. Compare plans and buy with instant delivery.',
		featuresTitle: '{game} Cheat Features | {brand}',
		featuresDescription:
			'Aimbot, ESP, wallhack, radar, recoil control, triggerbot, no spread, movement tools, and stream-proof overlays in one {game} license for Windows PC.',
		storeTitle: '{game} Cheats Store | {brand}',
		storeDescription:
			'Monthly and lifetime Destiny 2 cheat plans for Windows PC. Same aimbot, ESP, wallhack, and radar on both. Instant delivery after checkout.',
		statusTitle: '{game} Cheat Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before Crucible, Trials, or raids on Windows PC.',
		previewTitle: 'Buy Destiny 2 Cheats | Windows PC License',
		previewDescription:
			'Purchase undetected Destiny 2 cheats for Windows PC — ESP, aimbot, radar, and BattlEye rebuilds. Monthly and lifetime plans with instant delivery.',
		setupTitle: '{game} Cheat Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps for Crucible, Trials, and PvE — follow each step before your first match.',
		supportTitle: '{game} Cheat Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} Cheats FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Destiny 2 — delivery, setup, {antiCheat} updates, stream-proof mode, refunds, and Windows PC notes.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — aimbot, ESP, wallhack, radar, and patch updates for Destiny 2 on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — Crucible tips, Trials, raids, ESP, aimbot, and {antiCheat} update coverage for Windows PC players.',
	},

	copy: {
		tagline: 'Undetected {primaryKeyword} — aimbot, ESP, wallhack, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes aimbot, ESP, wallhack, radar, recoil control, and stream-proof overlays with {antiCheat} maintenance.',
		heroLede: 'Aimbot, ESP, wallhack, radar, no recoil, and stream-proof overlays for Destiny 2 on Windows PC.',
		blogLabel: 'Destiny 2 Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for Destiny 2 — aimbot, ESP wallhack, radar, no recoil, triggerbot, and BattlEye rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — aimbot, ESP, wallhack, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Aimbot',
		chipRadar: 'Radar',
		chipUpdates: 'Stream-proof',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-09-11',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/destiny-2-cheats-esp-crucible.webp',
				title: 'Destiny 2 ESP overlay in Crucible',
				caption: 'Player ESP boxes, skeleton wallhack, and distance readouts in PvP',
			},
			{
				src: '/images/destiny-2-cheats-wallhack-skeleton.webp',
				title: 'Destiny 2 wallhack and skeleton ESP',
				caption: 'Enemy Guardian outlines through walls with health ESP',
			},
			{
				src: '/images/destiny-2-cheats-aimbot-esp.webp',
				title: 'Destiny 2 aimbot and ESP in PvP',
				caption: 'Precision aimbot with box ESP and no spread for perfect shots',
			},
			{
				src: '/images/destiny-2-cheats-crucible.webp',
				title: 'Destiny 2 Crucible aimbot cheat',
				caption: 'Undetected aimbot and triggerbot for Trials and Crucible',
			},
			{
				src: '/images/destiny-2-cheats-pve.webp',
				title: 'Destiny 2 PvE raid cheat overlay',
				caption: 'Raid and dungeon ESP with damage multiplier visibility',
			},
			{
				src: '/images/destiny-2-cheats-radar.webp',
				title: 'Destiny 2 radar hack overlay',
				caption: '2D radar enemy tracker for flanks outside your FOV',
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
