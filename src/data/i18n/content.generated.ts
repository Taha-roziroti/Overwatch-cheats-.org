import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'destiny-2-esp' | 'destiny-2-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anticheat' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'crucible-cheats' | 'aim-assist' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'pve-cheats' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected Destiny 2 cheats 2026",
					subtitle: "Destiny 2 cheats with Destiny 2 ESP, radar hack and Destiny 2 aimbot for Windows PC — BattlEye maintenance included.",
					subtitleShort: "Destiny 2 esp, radar & aimbot for PC",
					buyNow: "Buy Destiny 2 Cheats",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Destiny 2 Cheats — undetected Destiny 2 cheats live for Destiny 2 on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye maintenance supported",
					antiCheatShort: "BattlEye anti-cheat supported",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Destiny 2 cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Destiny 2 Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Destiny 2 Cheats",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected Destiny 2 cheats for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats | Undetected PC Hacks",
					description: "Official Destiny 2 cheats for Windows PC — aimbot, ESP, wallhack, radar, and BattlEye updates. Compare plans and buy with instant delivery.",
					h1: "Destiny 2 Cheats",
					intro: "Undetected Destiny 2 cheats for Windows PC — ESP, soft aim, and radar in one license with BattlEye maintenance after patches.",
					imageAlt: "Destiny 2 Cheats homepage hero — ESP and aimbot for Destiny 2",
					galleryTitle: "Destiny 2 Cheats gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 rewards map awareness. Destiny 2 Cheats combines ESP for Guardians and enemies, radar-style threat cues, and configurable aimbot so you can read fights before committing in Crucible, Trials, and raids.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a> and <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>. We rebuild ESP, radar, and aimbot modules when those patches require maintenance — then post status on the <a href=\"/status/\">Updates page</a>.",
								"Licenses ship digitally after payment. Monthly ($35) and lifetime ($150) plans include BattlEye rebuilds when anti-cheat or game patches require updates.",
							],
						},
						{
							h2: "ESP, radar, and aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Destiny 2 Cheats bundles player ESP, loot markers, 2D radar, and aimbot profiles in one package built for raids and PvE.",
								"Browse the <a href=\"/destiny-2-esp/\">ESP</a>, <a href=\"/destiny-2-aimbot/\">Aimbot</a>, and <a href=\"/d2-radar/\">radar</a> pages for control details — or open <a href=\"/d2-cheats/\">the product page</a> and <a href=\"/pricing/\">Pricing</a> when you are ready to buy.",
								"Before patch days, check <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> for service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Follow <a href=\"/setup/\">Setup</a> after delivery and keep <a href=\"/faq/\">FAQ</a> or <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-esp.webp",
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected Destiny 2 cheats.",
					h1: "Destiny 2 ESP — Player Boxes & Wallhack",
					intro: "Player boxes, loot markers, and distance readouts for Crucible, Trials, and raids. Toggle categories so the overlay stays readable mid-match.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP overlay visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Destiny 2 wallhack guide",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "What Destiny 2 ESP solves in raids",
							paragraphs: [
								"Destiny 2 maps punish incomplete information. Destiny 2 Cheats ESP wallhack helps you spot enemy squads early, spot Guardians and enemies before they push your angle, and mark powerful loot worth the detour.",
								"In raids, strikes, and Crucible matches, that visibility gap is often the difference between a clean flank and a wiped fireteam. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Destiny 2’s live seasons and map updates are published by Bungie (<a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, objective cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports raids and PvE matches alike.",
								"Compare category detail on the <a href=\"/destiny-2-esp/\">wallhack page</a> and pair visibility with the <a href=\"/d2-radar/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and objective awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with BattlEye maintenance",
							paragraphs: [
								"Destiny 2 Cheats ESP wallhack is maintained for Destiny 2 with rebuilds after BattlEye anti-cheat patches. Check the <a href=\"/status/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/status/\">BattlEye bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first raid.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/destiny-2-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? Read the <a href=\"/d2-cheats/\">product overview</a> and <a href=\"/blog/buyers-guide/\">buyers guide</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-radar.webp",
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim for Windows PC",
					description: "Destiny 2 aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our Destiny 2 cheats package.",
					h1: "Destiny 2 Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Destiny 2 firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot combat previews",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Destiny 2 combat pace",
							paragraphs: [
								"Destiny 2 mixes long-range AR fights with close-quarters SMG pushes. Destiny 2 Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range close-range PvP fights.",
								"Weapon balance and season rules change via <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and zone clears without reopening menus every raid.",
								"Prefer softer tracking? Read the <a href=\"/destiny-2-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/destiny-2-esp/\">ESP wallhack</a> and <a href=\"/d2-radar/\">2D radar</a> in the same Destiny 2 Cheats license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "BattlEye maintenance for undetected Aimbot",
							paragraphs: [
								"Destiny 2 Cheats rebuilds Aimbot behavior when BattlEye anti-cheat or major Destiny 2 patches land. Maintenance notes appear on the <a href=\"/status/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> and anti-cheat context on <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>, then follow our <a href=\"/status/\">BattlEye maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
				},
				features: {
					title: "Destiny 2 Cheats Features | ESP, Soft Aim & Radar",
					description: "Full Destiny 2 cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Destiny 2 Cheats Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in the Destiny 2 Cheats package on Windows PC — with BattlEye maintenance after major patches.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Destiny 2 Cheats feature gallery",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and objective awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.",
								"Team and enemy colour coding supports raids and PvE. Deep-dive the <a href=\"/destiny-2-esp/\">ESP page</a> and <a href=\"/destiny-2-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a> season and content updates — toggleable ESP categories keep overlays useful when zones rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-raid objectives, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Destiny 2 sessions. See <a href=\"/d2-radar/\">radar</a> and <a href=\"/destiny-2-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/d2-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and BattlEye maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. BattlEye maintenance rebuilds publish on the <a href=\"/status/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@destiny2cheats.org.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/d2-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
				},
				pricing: {
					title: "Destiny 2 Cheats Pricing | $35/mo or $150 Life",
					description: "Destiny 2 cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Destiny 2 Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Destiny 2 Cheats — ESP wallhack, radar hack, and Aimbot for Destiny 2 on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Destiny 2 Cheats package visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Destiny 2 Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with BattlEye maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Destiny 2 Cheats package — ideal if you play Destiny 2 regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after BattlEye anti-cheat or major Destiny 2 patches.",
								"Season calendars and client updates come from <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/status/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read the <a href=\"/d2-cheats/\">product overview</a>, check <a href=\"/status/\">live status</a>, and browse <a href=\"/faq/\">FAQ</a> before checkout.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-raid.webp",
				},
				setup: {
					title: "Destiny 2 Cheats Setup | Windows PC Guide",
					description: "Set up Destiny 2 cheats on Windows PC — activate ESP boxes, soft aim profiles, and radar. Check BattlEye updates before your first queue.",
					h1: "Destiny 2 Cheats Setup — Windows PC Guide",
					intro: "Install and configure Destiny 2 Cheats for Destiny 2 on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify BattlEye maintenance status before queueing.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Destiny 2 Cheats setup visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Destiny 2 Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/status/\">Updates page</a> for the latest BattlEye maintenance build before launching Destiny 2.",
								"Also glance at <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> if Bungie services look unstable on patch day — a platform outage is not a license fault.",
								"Destiny 2 Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for Guardians, enemies, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for BattlEye module live on <a href=\"/destiny-2-esp/\">ESP</a>, <a href=\"/destiny-2-aimbot/\">Aimbot</a>, and <a href=\"/d2-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/destiny-2-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Destiny 2 or BattlEye anti-cheat patches",
							paragraphs: [
								"When Bungie ships a major Destiny 2 update or BattlEye anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/status/\">BattlEye bypass page</a> and <a href=\"/d2-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-radar.webp",
				},
				updates: {
					title: "Destiny 2 Cheats Updates | BattlEye Maintenance Log",
					description: "Destiny 2 cheats update log: BattlEye rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Destiny 2 Cheats Updates — Maintenance Log",
					intro: "Track BattlEye maintenance and Destiny 2 patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Destiny 2 patch and maintenance visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Destiny 2 and BattlEye anti-cheat receive frequent patches. Destiny 2 Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> for Bungie platform health and this page for Destiny 2 Cheats build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on raids and PvE.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note BattlEye anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/status/\">BattlEye bypass guide</a> and <a href=\"/d2-cheats/\">undetected Destiny 2 cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a BattlEye update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-esp.webp",
				},
				faq: {
					title: "Destiny 2 Cheats FAQ | ESP, Soft Aim & Radar Answers",
					description: "Destiny 2 cheats FAQ: ESP boxes, soft aim, BattlEye maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Destiny 2 Cheats FAQ — Common Questions",
					intro: "Answers about undetected Destiny 2 Cheats — ESP wallhack, radar hack, Aimbot, BattlEye maintenance, checkout, and Destiny 2 compatibility on Windows PC.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "Destiny 2 Cheats FAQ visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Destiny 2 Cheats?",
							paragraphs: [
								"Destiny 2 Cheats is an undetected cheat package for Destiny 2 on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with BattlEye maintenance updates.",
								"Packages cover raids and PvE. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/destiny-2-esp/\">ESP</a> / <a href=\"/destiny-2-aimbot/\">Aimbot</a> for module detail.",
								"Destiny 2 itself is published by Bungie (<a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>). Cheats are third-party tools and may violate Bungie's rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Destiny 2 Cheats undetected in 2026?",
							paragraphs: [
								"Destiny 2 Cheats is maintained with rebuilds after BattlEye anti-cheat and game patches. Check the <a href=\"/status/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/d2-cheats/\">undetected Destiny 2 cheats</a> and the <a href=\"/status/\">BattlEye guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@destiny2cheats.org or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
				},
				support: {
					title: "Destiny 2 Cheats Support | Help & Contact",
					description: "Contact Destiny 2 cheats support for licenses, ESP setup, soft aim profiles, and radar on Windows PC. Include your order ID for faster help.",
					h1: "Destiny 2 Cheats Support — Contact Us",
					intro: "Get help with Destiny 2 Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and BattlEye maintenance for Destiny 2 on Windows PC.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Destiny 2 Cheats support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after BattlEye maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/status/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Destiny 2 Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Bungie bans.",
								"Account and game policy questions belong with Bungie. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. BattlEye bypass notes live on the dedicated <a href=\"/status/\">BattlEye anti-cheat page</a>.",
								"Email: support@destiny2cheats.org",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-raid.webp",
				},
				undetected: {
					title: "Undetected Destiny 2 Cheats | BattlEye Maintenance",
					description: "Undetected Destiny 2 cheats with BattlEye maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Destiny 2 Cheats — BattlEye Maintenance",
					intro: "How Destiny 2 Cheats stays maintained for Destiny 2 after BattlEye anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Destiny 2 Cheats visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "BattlEye bypass guide",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "What undetected means for Destiny 2 Cheats",
							paragraphs: [
								"Undetected Destiny 2 Cheats means the package is actively maintained against BattlEye anti-cheat and major Destiny 2 patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after BattlEye security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>; Destiny 2 client updates ship through <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "BattlEye maintenance workflow",
							paragraphs: [
								"When BattlEye anti-cheat or Destiny 2 updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/status/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/status/\">BattlEye bypass Destiny 2 guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should read the <a href=\"/d2-cheats/\">product overview</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Boxes & Visibility",
					description: "Destiny 2 wallhack ESP with player boxes and loot markers for Windows PC. Undetected Destiny 2 cheats — learn overlays and buy.",
					h1: "Destiny 2 Wallhack — ESP Boxes & Visibility",
					intro: "Destiny 2 wallhack ESP for Destiny 2 — see players, loot, bosses, and containers through toggleable wallhack overlays built for raids and PvE.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 wallhack ESP gallery",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Destiny 2 ESP page",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Destiny 2 wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Destiny 2 Cheats bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and boss phases.",
								"For the broader ESP keyword page see <a href=\"/destiny-2-esp/\">Destiny 2 ESP</a>; for combat assist see <a href=\"/destiny-2-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, PvE, and competitive matches with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/d2-radar/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after BattlEye anti-cheat patches. Follow the <a href=\"/status/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Follow <a href=\"/status/\">Updates</a> for BattlEye maintenance notes.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/destiny-2-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
				},
				radar: {
					title: "Destiny 2 Radar Hack | 2D Threat Overlay",
					description: "Destiny 2 radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our Destiny 2 cheats package.",
					h1: "Destiny 2 Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Destiny 2 — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Destiny 2 radar hack visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Destiny 2",
							paragraphs: [
								"raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"Destiny 2 Cheats radar complements <a href=\"/destiny-2-esp/\">ESP wallhack</a> markers during squad pushes and objective camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight boss phases. Directional cues highlight flanks during building clears and flank pushes across raids and PvE.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys — see <a href=\"/features/\">Features</a> for the control list.",
								"Combat follow-up lives on <a href=\"/destiny-2-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive BattlEye maintenance rebuilds with the full Destiny 2 Cheats package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/status/\">Updates</a> after major Destiny 2 patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/status/\">live status</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-radar.webp",
				},
				anticheat: {
					title: "BattlEye Bypass Destiny 2 | Destiny 2 Cheats Maintenance",
					description: "How Destiny 2 cheats rebuild after BattlEye patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "BattlEye Bypass — Destiny 2 Cheats Maintenance",
					intro: "Understand BattlEye anti-cheat maintenance for Destiny 2 Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Destiny 2 security updates.",
					imageAlt: "Destiny 2 Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye maintenance visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye anti-cheat overview",
							paragraphs: [
								"BattlEye anti-cheat is Bungie's anti-cheat for Destiny 2 on PC (see <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Destiny 2 Cheats monitors BattlEye patch notes and Destiny 2 seasonal updates from <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a> to schedule module reviews.",
								"“BattlEye bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a BattlEye patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/status/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Bungie service health on <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/d2-cheats/\">undetected Destiny 2 cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"BattlEye bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
				},
				"cheats-2026": {
					title: "Destiny 2 Cheats | ESP Soft Aim & Radar",
					description: "Best Destiny 2 cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected Destiny 2 cheats with BattlEye maintenance — compare and buy.",
					h1: "Destiny 2 Cheats 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Destiny 2 Cheats package for Destiny 2 — undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Cheats 2026 gallery",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why Destiny 2 cheats buyers choose Destiny 2 Cheats in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and BattlEye anti-cheat updates. Destiny 2 Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>, then use our <a href=\"/status/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover raids and PvE loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Module pages: <a href=\"/destiny-2-esp/\">ESP</a>, <a href=\"/destiny-2-aimbot/\">Aimbot</a>, <a href=\"/d2-radar/\">radar</a>, and <a href=\"/status/\">live status</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/d2-cheats/\">Destiny 2 cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also read the <a href=\"/blog/cheats-2026-updates/\">season updates post</a> and <a href=\"/faq/\">FAQ</a> before checkout.",
								"Support is available at support@destiny2cheats.org via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-esp.webp",
				},
				hacks: {
					title: "Buy Destiny 2 Cheats | Windows PC License",
					description: "Purchase undetected Destiny 2 cheats for Windows PC — ESP, aimbot, radar, and BattlEye rebuilds. Monthly and lifetime plans with instant delivery.",
					h1: "Buy Destiny 2 Cheats",
					intro: "Destiny 2 Cheats for Windows PC — ESP, soft aim, and radar in one license with BattlEye rebuilds after patches.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 cheats gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "View features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What you get",
							paragraphs: [
								"One license for Destiny 2 on Windows PC — built for Crucible, Trials, and PvE activities.",
								"The stack includes ESP with distance readouts, soft aim profiles, 2D radar for flanks, and BattlEye rebuilds after patches.",
								"Monthly ($35) and lifetime ($150) plans unlock the same features after checkout.",
							],
						},
						{
							h2: "Built for Destiny 2 raids",
							paragraphs: [
								"Read Guardians and enemies before you push, mark loot worth the risk, and stay aware of flanks. Tune soft aim per weapon class for Crucible, Trials, and raid encounters.",
								"Module guides: <a href=\"/destiny-2-esp/\">ESP</a>, <a href=\"/destiny-2-aimbot/\">Aimbot</a>, and <a href=\"/d2-radar/\">radar</a>. Research posts: <a href=\"/blog/buyers-guide/\">buyers guide</a> and <a href=\"/blog/undetected-battleye/\">BattlEye notes</a>.",
								"Official game updates come from <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>; maintenance notes publish on the <a href=\"/status/\">Updates page</a>. Cross-check <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> before patch-day queues.",
							],
						},
						{
							h2: "How to start",
							paragraphs: [
								"Buy a plan, get your license by email, then follow setup. Check status after every major patch.",
								"Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a>, and read <a href=\"/faq/\">FAQ</a> if you need delivery or license help.",
								"No cheat stays undetected forever — check status first, then play with conservative settings.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-raid.webp",
				},
				"cheat-download": {
					title: "Destiny 2 Hack Download | Instant Access",
					description: "Destiny 2 cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Destiny 2 Hack Download — Instant License Delivery",
					intro: "How Destiny 2 cheat download works for Destiny 2 — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2 cheat download visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Destiny 2 cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, Destiny 2 Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Bungie services are down, check <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Destiny 2 cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for raids and PvE.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/destiny-2-esp/\">ESP</a>, <a href=\"/destiny-2-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Destiny 2 or BattlEye anti-cheat patches ship, check the <a href=\"/status/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Check <a href=\"/status/\">live status</a> so you know when a build is ready after a patch.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-raid.webp",
				},
				"crucible-cheats": {
					title: "Destiny 2 Mod Menu | ESP & Soft Aim Toggles",
					description: "Destiny 2 mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected Destiny 2 cheats package.",
					h1: "Destiny 2 Mod Menu — In-Client Control Panel",
					intro: "Destiny 2 mod menu controls for Destiny 2 — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Destiny 2 session on Windows PC.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 mod menu gallery",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Destiny 2 mod menu controls",
							paragraphs: [
								"A Destiny 2 mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Destiny 2 Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Destiny 2.",
								"Control deep-dives: <a href=\"/destiny-2-esp/\">ESP</a>, <a href=\"/destiny-2-aimbot/\">Aimbot</a>, <a href=\"/d2-radar/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for raids and PvE",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and boss phases.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a> seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/destiny-2-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after BattlEye patches",
							paragraphs: [
								"Destiny 2 mod menu behavior is rebuilt when BattlEye anti-cheat or major Destiny 2 updates land. Follow the <a href=\"/status/\">Updates page</a> and <a href=\"/status/\">BattlEye bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-radar.webp",
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aimbot Settings",
					description: "Destiny 2 soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our Destiny 2 cheats with ESP boxes.",
					h1: "Destiny 2 Soft Aim — Smooth Aimbot Controls",
					intro: "Destiny 2 soft aim settings for Destiny 2 — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 soft aim gallery",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "What Destiny 2 soft aim means",
							paragraphs: [
								"Destiny 2 soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Destiny 2 Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in Crucible firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/destiny-2-aimbot/\">Destiny 2 Aimbot</a>. Alternate wording: <a href=\"/destiny-2-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/destiny-2-esp/\">ESP wallhack</a> and <a href=\"/d2-radar/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with BattlEye maintenance",
							paragraphs: [
								"Aimbot modules rebuild after BattlEye anti-cheat patches. Check the <a href=\"/status/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Destiny 2 Cheats | Buyer Guide",
					description: "Best Destiny 2 cheats for 2026: ESP boxes, soft aim, and BattlEye maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Destiny 2 Cheats — 2026 Buyer Guide",
					intro: "Compare the Destiny 2 cheats for Destiny 2 in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with BattlEye anti-cheat rebuilds and instant delivery.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Best Destiny 2 cheats gallery",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the Destiny 2 cheats in 2026",
							paragraphs: [
								"The Destiny 2 cheats combine active BattlEye maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Destiny 2 Cheats covers raids and PvE with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://help.bungie.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Bungie Help</a>, then confirm our <a href=\"/status/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Destiny 2 cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Destiny 2 patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/status/\">live status</a>, and <a href=\"/pricing/\">Pricing</a> before checkout.",
								"Open the <a href=\"/destiny-2-esp/\">ESP</a> and <a href=\"/destiny-2-aimbot/\">Aimbot</a> guides for module details.",
							],
						},
						{
							h2: "Buying the Destiny 2 cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Bungie terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-esp.webp",
				},
				"aimbot-hack": {
					title: "Destiny 2 Aimbot Hack | Soft Aim Assist",
					description: "Destiny 2 aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Destiny 2 cheats package.",
					h1: "Destiny 2 Aimbot Hack — Soft Aim Assist",
					intro: "Destiny 2 aimbot hack tools for Destiny 2 — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 aimbot hack gallery",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 aimbot hack vs visibility tools",
							paragraphs: [
								"A Destiny 2 aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Destiny 2 Cheats bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Destiny 2 combat pace across raids and PvE.",
								"Prefer softer tracking language? See <a href=\"/destiny-2-aimbot/\">soft aim</a>. Full settings: <a href=\"/destiny-2-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid objectives.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after BattlEye anti-cheat updates. Follow the <a href=\"/status/\">Updates page</a> and <a href=\"/status/\">BattlEye bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/destiny-2-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Destiny 2 ESP Hack | Player Boxes & Loot",
					description: "Destiny 2 ESP hack with player boxes and loot markers for Windows PC. Undetected Destiny 2 cheats with — see overlays and buy.",
					h1: "Destiny 2 ESP Hack — Player Boxes Guide",
					intro: "Destiny 2 ESP hack overlays for Destiny 2 — player outlines, boss threat cues, loot and container markers with distance readouts across raids and PvE.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP hack gallery",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "What a Destiny 2 ESP hack shows",
							paragraphs: [
								"A Destiny 2 ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during fireteam pushes and cleanup scenarios.",
								"Canonical visibility guide: <a href=\"/destiny-2-esp/\">Destiny 2 ESP</a>. Wallhack wording: <a href=\"/destiny-2-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for raids",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports raids and PvE.",
								"POI and loot changes publish through <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with BattlEye maintenance",
							paragraphs: [
								"ESP hack modules rebuild after BattlEye anti-cheat and Destiny 2 patches. Check the <a href=\"/status/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/d2-radar/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/status/\">live status</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Really Means",
					description: "Destiny 2 unlock all explained vs real Destiny 2 cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Destiny 2 Unlock All — What Players Search For",
					intro: "Destiny 2 unlock all is a common search term for Destiny 2 — this page clarifies what pve-cheats tools claim versus the ESP wallhack, radar hack, and Aimbot tools Destiny 2 Cheats actually provides on Windows PC.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 unlock all guide visuals",
					ctaPrimary: "Buy Destiny 2 Cheats",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Destiny 2 unlock all usually means",
							paragraphs: [
								"Destiny 2 unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Destiny 2 Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and seasonal progression items are sold through <a href=\"https://www.bungie.net/7/en/Destiny/New\" target=\"_blank\" rel=\"noopener noreferrer\">Destiny 2</a>. Be wary of cheat downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs pve-cheats claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and powerful loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/destiny-2-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"See the <a href=\"/d2-cheats/\">product overview</a> for the full stack.",
							],
						},
						{
							h2: "Buying Destiny 2 Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Destiny 2 on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/status/\">Updates page</a> after BattlEye anti-cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Destiny 2 Cheats",
					description: "Privacy policy for Destiny 2 Cheats. How we handle support emails, order data, and checkout for Destiny 2 cheats licenses on destiny2cheats.org.",
					h1: "Privacy Policy",
					intro: "How Destiny 2 Cheats handles information when you browse destiny2cheats.org or contact support about a Destiny 2 license.",
					imageAlt: "Destiny 2 Cheats privacy policy page",
					galleryTitle: "Destiny 2 Cheats legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Destiny 2 Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@destiny2cheats.org with your request details.",
								"Policy updates publish on this page. Continued use of destiny2cheats.org after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Destiny 2 Cheats",
					description: "Refund policy for Destiny 2 Cheats. Digital delivery terms and eligibility for Destiny 2 cheats packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Destiny 2 Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Destiny 2.",
					imageAlt: "Destiny 2 Cheats refund policy page",
					galleryTitle: "Destiny 2 Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Destiny 2 Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@destiny2cheats.org with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-raid.webp",
				},
				terms: {
					title: "Terms of Use | Destiny 2 Cheats Rules",
					description: "Terms of use for destiny2cheats.org and Destiny 2 Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of destiny2cheats.org and Destiny 2 Cheats licenses for Destiny 2 on Windows PC.",
					imageAlt: "Destiny 2 Cheats terms of use page",
					galleryTitle: "Destiny 2 Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Destiny 2 Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Destiny 2 on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Destiny 2 may violate Bungie terms and result in account penalties. Destiny 2 Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/d2-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@destiny2cheats.org for questions. Related policies: <a href=\"/privacy/\">Privacy</a> and <a href=\"/refund/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Destiny 2 indetectables",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack y Aimbot para Destiny 2 en PC Windows — mantenimiento BattlEye anti-cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Destiny 2 PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Destiny 2 Cheats está activo para Destiny 2 en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento BattlEye anti-cheat incluido",
					antiCheatShort: "BattlEye anti-cheat incluido",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Destiny 2",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Destiny 2 Cheats",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Destiny 2 — checkout en Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Destiny 2 indetectables para Destiny 2 en PC. ESP wallhack, radar hack y Aimbot con mantenimiento BattlEye anti-cheat. Entrega digital instantánea.",
					h1: "Destiny 2 Cheats — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Destiny 2 en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye anti-cheat tras cada parche.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Galería Destiny 2 Cheats — ESP, Aimbot y wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Destiny 2 Cheats en 2026",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Ideal para leer escuadrones enemigos en Crucible y PvE.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Cajas de jugador y wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Controles soft aim",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Funciones.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Precios.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Instalación.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro BattlEye",
					description: "Actualizaciones: BattlEye patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Actualizaciones.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. BattlEye patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Soporte.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after BattlEye anti-cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Trucos indetectables.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | Visibilidad ESP",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Mantenimiento de parches",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Destiny 2 2026 | Guía del comprador",
					description: "Trucos Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Destiny 2 2026",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Trucos Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Trucos Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Trucos Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. 2026 Destiny 2 cheats checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Destiny 2 | Guía ESP y Aimbot",
					description: "Trucos Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Trucos Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Destiny 2 Cheats | Acceso instantáneo",
					description: "Descarga Destiny 2 Cheats: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Destiny 2 Cheats",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Descarga Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Descarga Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Menú mod Destiny 2 | Controles en partida",
					description: "Menú mod Destiny 2: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Menú mod Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Menú mod Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Ajustes soft aim",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Destiny 2 | Lista de compra",
					description: "Mejores trucos Destiny 2: what to compare before buying Destiny 2 cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Mejores trucos Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Mejores trucos Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. what to compare before buying Destiny 2 cheats.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Destiny 2 | Asistencia soft aim",
					description: "Hack aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Hack aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. undetected Aimbot hack assist for Destiny 2.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Cajas y loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | Qué significa",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Destiny 2 Cheats",
					description: "Política de privacidad for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Política de privacidad for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Destiny 2 Cheats",
					description: "Política de reembolso for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Política de reembolso for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Destiny 2 Cheats",
					description: "Términos de uso for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Términos de uso for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Destiny 2 Cheats ofrece ESP wallhack, radar hack y Destiny 2 aimbot indetectables para Destiny 2 en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@destiny2cheats.org para solicitudes legales o de soporte.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Destiny 2 indétectables",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Destiny 2 sur PC Windows — maintenance BattlEye anti-cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Destiny 2 PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Destiny 2 Cheats est actif pour Destiny 2 sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance BattlEye anti-cheat incluse",
					antiCheatShort: "BattlEye anti-cheat inclus",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Destiny 2",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Destiny 2 Cheats",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Destiny 2 — checkout via Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Destiny 2 indétectables pour Destiny 2 sur PC. ESP wallhack, radar hack et Aimbot avec maintenance BattlEye anti-cheat. Livraison numérique instantanée.",
					h1: "Destiny 2 Cheats — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Destiny 2 sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye anti-cheat après chaque patch.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Galerie Destiny 2 Cheats — ESP, Aimbot et wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Destiny 2 Cheats en 2026",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Parfait pour lire les escouades ennemies en Crucible et PvE.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Boîtes joueur et wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Contrôles soft aim",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Fonctions.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Tarifs.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Installation.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal BattlEye",
					description: "Mises à jour: BattlEye patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Mises à jour.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. BattlEye patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Support.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after BattlEye anti-cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Triches indétectables.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | Visibilité ESP",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Maintenance des patchs",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Destiny 2 2026 | Guide acheteur",
					description: "Triches Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Destiny 2 2026",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Triches Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Triches Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Triches Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. 2026 Destiny 2 cheats checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Destiny 2 | Guide ESP et Aimbot",
					description: "Triches Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Triches Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Destiny 2 Cheats | Accès instantané",
					description: "Téléchargement Destiny 2 Cheats: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Destiny 2 Cheats",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Téléchargement Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Téléchargement Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Menu mod Destiny 2 | Contrôles en jeu",
					description: "Menu mod Destiny 2: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Menu mod Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Menu mod Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Réglages soft aim",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Destiny 2 | Checklist acheteur",
					description: "Meilleures triches Destiny 2: what to compare before buying Destiny 2 cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Meilleures triches Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Meilleures triches Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. what to compare before buying Destiny 2 cheats.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Destiny 2 | Assistance soft aim",
					description: "Hack aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Hack aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. undetected Aimbot hack assist for Destiny 2.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Boîtes et loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | Ce que ça signifie",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acheter Destiny 2 Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Destiny 2 Cheats",
					description: "Politique de confidentialité for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Politique de confidentialité for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Destiny 2 Cheats",
					description: "Politique de remboursement for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Politique de remboursement for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Destiny 2 Cheats",
					description: "Conditions d'utilisation for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Conditions d'utilisation for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Destiny 2 Cheats combine ESP wallhack, radar hack et Destiny 2 aimbot indétectables pour Destiny 2 sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@destiny2cheats.org pour le support ou les demandes légales.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Destiny 2 Cheats",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Destiny 2 auf Windows PC — BattlEye anti-cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Destiny 2 PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Destiny 2 Cheats Paket ist live für Destiny 2 auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-Wartung unterstützt",
					antiCheatShort: "BattlEye anti-cheat Support",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Destiny 2 Cheats Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Destiny 2 — Checkout über Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Destiny 2 Cheats für Destiny 2 auf PC. ESP Wallhack, Radar Hack und Aimbot mit BattlEye anti-cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Destiny 2: ESP Wallhack, Radar und Aimbot mit BattlEye anti-cheat-Wartung nach jedem Patch.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Destiny 2 Cheats Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Destiny 2 Cheats 2026 führt",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Ideal um feindliche Squads in Crucible und PvE zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Spielerboxen & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft-Aim Steuerung",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Features.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Preise.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Setup.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | BattlEye Wartungslog",
					description: "Updates: BattlEye patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Updates.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. BattlEye patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Support.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after BattlEye anti-cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Undetected Cheats.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Sichtbarkeit",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch-Wartung",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. how BattlEye updates are handled for Destiny 2 cheats.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 Cheats 2026 | Käuferleitfaden",
					description: "Destiny 2 Cheats 2026: 2026 Destiny 2 cheats checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Cheats 2026",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Cheats 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Cheats 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. 2026 Destiny 2 cheats checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 Cheats | ESP Aimbot Guide",
					description: "Destiny 2 Cheats: the Destiny 2 hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Cheats",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Destiny 2 Cheat Download | Sofortzugang",
					description: "Destiny 2 Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Cheat Download",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Cheat Download.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2 Cheat Download",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destiny 2 Cheat Download",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2 Mod-Menü | In-Game Toggles",
					description: "Destiny 2 Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Mod-Menü",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Mod-Menü.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 Mod-Menü",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Mod-Menü",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Soft-Aim Einstellungen",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Destiny 2 Cheats | Käufer-Checkliste",
					description: "Beste Destiny 2 Cheats: what to compare before buying Destiny 2 cheats. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Destiny 2 Cheats",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Beste Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Beste Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. what to compare before buying Destiny 2 cheats.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2 Aimbot Hack | Soft-Aim Assist",
					description: "Destiny 2 Aimbot Hack: undetected Aimbot hack assist for Destiny 2. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot Hack",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Aimbot Hack.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 Aimbot Hack",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Aimbot Hack",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. undetected Aimbot hack assist for Destiny 2.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP Hack | Boxen & Loot",
					description: "Destiny 2 ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 ESP Hack",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 ESP Hack.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP Hack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP Hack",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | Was es bedeutet",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. pve-cheats searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Destiny 2 Cheats",
					description: "Datenschutz for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Datenschutz for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Destiny 2 Cheats",
					description: "Rückerstattung for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Rückerstattung for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Destiny 2 Cheats",
					description: "Nutzungsbedingungen for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Nutzungsbedingungen for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Destiny 2 Cheats bündelt ESP wallhack, radar hack und Destiny 2 aimbot als undetected Paket für Destiny 2 auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@destiny2cheats.org für Support und rechtliche Anfragen.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Destiny 2 indetectáveis",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot para Destiny 2 no PC Windows — manutenção BattlEye anti-cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Destiny 2 PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Destiny 2 Cheats está ativo para Destiny 2 no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção BattlEye anti-cheat incluída",
					antiCheatShort: "BattlEye anti-cheat incluído",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Destiny 2",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Destiny 2 Cheats",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Destiny 2 — checkout via Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Destiny 2 indetectáveis para Destiny 2 no PC. ESP wallhack, radar hack e Aimbot com manutenção BattlEye anti-cheat. Entrega digital instantánea.",
					h1: "Destiny 2 Cheats — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Destiny 2 no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye anti-cheat após cada patch.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Galeria Destiny 2 Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Destiny 2 Cheats em 2026",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Ideal para ler esquadrões inimigos em Crucible e PvE.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Caixas de jogador e wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Controles soft aim",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Recursos.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Preços.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Instalação.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro BattlEye",
					description: "Atualizações: BattlEye patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Atualizações.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. BattlEye patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Suporte.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after BattlEye anti-cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Cheats indetectáveis.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | Visibilidade ESP",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Manutenção de patches",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Destiny 2 2026 | Guia do comprador",
					description: "Cheats Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Destiny 2 2026",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Cheats Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Cheats Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheats Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. 2026 Destiny 2 cheats checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Destiny 2 | Guia ESP e Aimbot",
					description: "Cheats Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Cheats Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Destiny 2 Cheats | Acesso instantâneo",
					description: "Download Destiny 2 Cheats: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Destiny 2 Cheats",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Download Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Download Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Menu mod Destiny 2 | Controles in-game",
					description: "Menu mod Destiny 2: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Menu mod Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Menu mod Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Ajustes soft aim",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Destiny 2 | Checklist do comprador",
					description: "Melhores cheats Destiny 2: what to compare before buying Destiny 2 cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Melhores cheats Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Melhores cheats Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. what to compare before buying Destiny 2 cheats.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Destiny 2 | Assistência soft aim",
					description: "Hack aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Hack aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. undetected Aimbot hack assist for Destiny 2.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Caixas e loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | O que significa",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Comprar Destiny 2 Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Destiny 2 Cheats",
					description: "Política de privacidade for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Política de privacidade for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Destiny 2 Cheats",
					description: "Política de reembolso for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Política de reembolso for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Destiny 2 Cheats",
					description: "Termos de uso for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Termos de uso for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats reúne ESP wallhack, radar hack e Destiny 2 aimbot indetectáveis para Destiny 2 no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@destiny2cheats.org para suporte ou questões legais.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Destiny 2 indetectable",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot per Destiny 2 su PC Windows — manutenzione BattlEye anti-cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Destiny 2 PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Destiny 2 Cheats è attivo per Destiny 2 su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione BattlEye anti-cheat supportata",
					antiCheatShort: "BattlEye anti-cheat supportato",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Destiny 2",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Destiny 2 Cheats",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Destiny 2 — checkout via Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Destiny 2 indetectable per Destiny 2 su PC. ESP wallhack, radar hack e Aimbot con manutenzione BattlEye anti-cheat. Consegna digitale istantanea.",
					h1: "Destiny 2 Cheats — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Destiny 2 su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye anti-cheat dopo ogni patch.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Galleria Destiny 2 Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Destiny 2 Cheats nel 2026",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Ideale per leggere squadre nemiche in Crucible e PvE.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Box giocatore e wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Controlli soft aim",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Funzioni.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Prezzi.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Setup.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione BattlEye",
					description: "Aggiornamenti: BattlEye patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Aggiornamenti.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. BattlEye patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Supporto.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after BattlEye anti-cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Cheat indetectable.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | Visibilità ESP",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Manutenzione patch",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Destiny 2 2026 | Guida acquirente",
					description: "Cheat Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Destiny 2 2026",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Cheat Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Cheat Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheat Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. 2026 Destiny 2 cheats checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Destiny 2 | Guida ESP e Aimbot",
					description: "Cheat Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Cheat Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Destiny 2 Cheats | Accesso istantaneo",
					description: "Download Destiny 2 Cheats: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Destiny 2 Cheats",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Download Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Download Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Mod menu Destiny 2 | Toggle in-game",
					description: "Mod menu Destiny 2: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Mod menu Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Mod menu Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Impostazioni soft aim",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Destiny 2 | Checklist acquirente",
					description: "Migliori cheat Destiny 2: what to compare before buying Destiny 2 cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Migliori cheat Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Migliori cheat Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. what to compare before buying Destiny 2 cheats.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Destiny 2 | Assist soft aim",
					description: "Hack aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Hack aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. undetected Aimbot hack assist for Destiny 2.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Box e loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | Cosa significa",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Acquista Destiny 2 Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Destiny 2 Cheats",
					description: "Informativa privacy for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Informativa privacy for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Destiny 2 Cheats",
					description: "Politica di rimborso for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Politica di rimborso for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Destiny 2 Cheats",
					description: "Termini di utilizzo for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Termini di utilizzo for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats unisce ESP wallhack, radar hack e Destiny 2 aimbot indetectable per Destiny 2 su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@destiny2cheats.org per supporto o richieste legali.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Destiny 2 Cheats",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Destiny 2 op Windows PC — BattlEye anti-cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Destiny 2 PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Destiny 2 Cheats pakket is live voor Destiny 2 op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-onderhoud ondersteund",
					antiCheatShort: "BattlEye anti-cheat support",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Destiny 2 Cheats kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Destiny 2 — checkout via Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Destiny 2 cheats voor Destiny 2 op PC. ESP wallhack, radar hack en Aimbot met BattlEye anti-cheat-onderhoud. Directe digitale levering.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Destiny 2: ESP wallhack, radar en Aimbot met BattlEye anti-cheat-onderhoud na elke patch.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Destiny 2 Cheats galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Destiny 2 Cheats in 2026",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Ideaal om vijandelijke squads te lezen in Crucible en PvE.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Functies.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Prijzen.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Setup.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | BattlEye Maintenance Log",
					description: "Updates: BattlEye patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Updates.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. BattlEye patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Support.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | BattlEye Safe Status",
					description: "Undetected Cheats: undetected maintenance after BattlEye anti-cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Undetected Cheats.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. directe digitale levering. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 Cheats 2026 | Buyer Guide",
					description: "Destiny 2 Cheats 2026: 2026 Destiny 2 cheats checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Cheats 2026",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Cheats 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Cheats 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. 2026 Destiny 2 cheats checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 Cheats | ESP Aimbot Guide",
					description: "Destiny 2 Cheats: the Destiny 2 hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Cheats",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Destiny 2 Cheat Download | Instant Access",
					description: "Destiny 2 Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Cheat Download",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Cheat Download.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2 Cheat Download",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destiny 2 Cheat Download",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2 Mod Menu | In-Game Toggles",
					description: "Destiny 2 Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Mod Menu",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Mod Menu.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 Mod Menu",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Mod Menu",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Destiny 2 Cheats | Buyer Checklist",
					description: "Beste Destiny 2 Cheats: what to compare before buying Destiny 2 cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Destiny 2 Cheats",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Beste Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Beste Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. what to compare before buying Destiny 2 cheats.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2 Aimbot Hack | Soft Aim Assist",
					description: "Destiny 2 Aimbot Hack: undetected Aimbot hack assist for Destiny 2. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot Hack",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Aimbot Hack.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 Aimbot Hack",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Aimbot Hack",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. undetected Aimbot hack assist for Destiny 2.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP Hack | Boxes & Loot",
					description: "Destiny 2 ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 ESP Hack",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 ESP Hack.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP Hack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP Hack",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@destiny2cheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Destiny 2 Cheats",
					description: "Privacybeleid for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Privacybeleid for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org voor support en juridische vragen.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Destiny 2 Cheats",
					description: "Restitutiebeleid for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Restitutiebeleid for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org voor support en juridische vragen.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Destiny 2 Cheats",
					description: "Gebruiksvoorwaarden for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Gebruiksvoorwaarden for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats bundelt ESP wallhack, radar hack en Destiny 2 aimbot als undetected pakket voor Destiny 2 op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org voor support en juridische vragen.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Destiny 2",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack i Aimbot do Destiny 2 na PC Windows — konserwacja BattlEye anti-cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Destiny 2 PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Destiny 2 Cheats jest aktywny dla Destiny 2 na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat wsparcie",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Destiny 2",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Destiny 2 Cheats",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Destiny 2 — checkout przez Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Destiny 2 dla Destiny 2 na PC. ESP wallhack, radar hack i Aimbot z konserwacją BattlEye anti-cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Destiny 2 na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye anti-cheat po każdym patchu.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Galeria Destiny 2 Cheats — ESP, Aimbot i wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Destiny 2 Cheats w 2026",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Idealny do czytania wrogich squadów w Crucible i PvE.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Player Boxes & Wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Soft Aim Controls",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Funkcje.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Cennik.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Instalacja.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | BattlEye Maintenance Log",
					description: "Aktualizacje: BattlEye patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Aktualizacje.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. BattlEye patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Wsparcie.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | BattlEye Safe Status",
					description: "Cheaty undetected: undetected maintenance after BattlEye anti-cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Cheaty undetected.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | ESP Visibility",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Destiny 2 2026 | Buyer Guide",
					description: "Cheaty Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Destiny 2 2026",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Cheaty Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Cheaty Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheaty Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. 2026 Destiny 2 cheats checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Destiny 2 | ESP Aimbot Guide",
					description: "Cheaty Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Cheaty Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Destiny 2 Cheats | Instant Access",
					description: "Pobieranie Destiny 2 Cheats: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Destiny 2 Cheats",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Pobieranie Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Pobieranie Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Mod menu Destiny 2 | In-Game Toggles",
					description: "Mod menu Destiny 2: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Mod menu Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Mod menu Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Smooth Aim Settings",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Destiny 2 | Buyer Checklist",
					description: "Najlepsze cheaty Destiny 2: what to compare before buying Destiny 2 cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Najlepsze cheaty Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Najlepsze cheaty Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. what to compare before buying Destiny 2 cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Destiny 2 | Soft Aim Assist",
					description: "Hack aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Hack aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. undetected Aimbot hack assist for Destiny 2.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Boxes & Loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | What It Means",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Kup Destiny 2 Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Destiny 2 Cheats",
					description: "Polityka prywatności for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Polityka prywatności for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Destiny 2 Cheats",
					description: "Polityka zwrotów for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Polityka zwrotów for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Destiny 2 Cheats",
					description: "Warunki użytkowania for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Warunki użytkowania for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats łączy ESP wallhack, radar hack i Destiny 2 aimbot jako pakiet undetected dla Destiny 2 na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org w sprawach wsparcia i prawnych.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Destiny 2",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack и Aimbot для Destiny 2 на Windows PC — обслуживание BattlEye anti-cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Destiny 2 PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Destiny 2 Cheats активен для Destiny 2 на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat поддержка",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Destiny 2 Cheats",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Destiny 2 — оплата через Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Destiny 2 для Destiny 2 на PC. ESP wallhack, radar hack и Aimbot с обслуживанием BattlEye anti-cheat. Мгновенная цифровая доставка.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Destiny 2 на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye anti-cheat после патчей.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Галерея Destiny 2 Cheats — ESP, Aimbot и wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Destiny 2 Cheats в 2026",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Идеально для чтения вражеских отрядов в Crucible и PvE.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Боксы игроков и wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Управление soft aim",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Функции.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Цены.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Установка.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал BattlEye",
					description: "Обновления: BattlEye patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Обновления.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. BattlEye patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Поддержка.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after BattlEye anti-cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Undetected читы.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | Видимость ESP",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. how BattlEye updates are handled for Destiny 2 cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Destiny 2 2026 | Гайд покупателя",
					description: "Читы Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Destiny 2 2026",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Читы Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Читы Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Читы Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. 2026 Destiny 2 cheats checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Destiny 2 | Гайд ESP и Aimbot",
					description: "Читы Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Читы Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Destiny 2 Cheats | Мгновенный доступ",
					description: "Скачать Destiny 2 Cheats: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Destiny 2 Cheats",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Скачать Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Скачать Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Мод-меню Destiny 2 | Игровые переключатели",
					description: "Мод-меню Destiny 2: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Мод-меню Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Мод-меню Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Настройки soft aim",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Destiny 2 | Чеклист покупателя",
					description: "Лучшие читы Destiny 2: what to compare before buying Destiny 2 cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Лучшие читы Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Лучшие читы Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. what to compare before buying Destiny 2 cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Destiny 2 | Soft aim ассист",
					description: "Хак aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Хак aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. undetected Aimbot hack assist for Destiny 2.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Destiny 2 | Боксы и лут",
					description: "Хак ESP Destiny 2: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Хак ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Хак ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | Что это значит",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купить Destiny 2 Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. pve-cheats searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Destiny 2 Cheats",
					description: "Политика конфиденциальности for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Политика конфиденциальности for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Destiny 2 Cheats",
					description: "Политика возврата for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Политика возврата for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Destiny 2 Cheats",
					description: "Условия использования for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Условия использования for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats объединяет ESP wallhack, radar hack и Destiny 2 aimbot в undetected пакете для Destiny 2 на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org для поддержки и юридических вопросов.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Destiny 2 hileleri",
					accentShort: "Destiny 2 Cheats",
					subtitle: "Destiny 2 Windows PC için ESP wallhack, radar hack ve Aimbot — BattlEye anti-cheat bakımı dahil.",
					subtitleShort: "Destiny 2 PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Destiny 2 Cheats paketi Destiny 2 Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "BattlEye anti-cheat bakım desteği",
					antiCheatShort: "BattlEye anti-cheat destek",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Destiny 2 Cheats alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Destiny 2 için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack ve Aimbot",
					description: "Destiny 2 için undetected hileler. ESP wallhack, radar hack ve Aimbot — BattlEye anti-cheat bakımı. Anında dijital teslimat.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack ve Aimbot",
					intro: "Destiny 2 Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye anti-cheat bakımı dahil.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Destiny 2 Cheats galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Crucible ve PvE'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | BattlEye Maintenance Log",
					description: "Güncellemeler: BattlEye patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. BattlEye patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and BattlEye questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. SSS.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destek.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | BattlEye Safe Status",
					description: "Undetected hileler: undetected maintenance after BattlEye anti-cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye bypass | Patch Maintenance",
					description: "BattlEye bypass: how BattlEye updates are handled for Destiny 2 cheats. anında dijital teslimat. undetected — Windows PC.",
					h1: "BattlEye bypass",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. BattlEye bypass.",
					imageAlt: "BattlEye bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye bypass",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. how BattlEye updates are handled for Destiny 2 cheats.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 Hileleri 2026 | Buyer Guide",
					description: "Destiny 2 Hileleri 2026: 2026 Destiny 2 cheats checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Hileleri 2026",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Hileleri 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Hileleri 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 Hileleri 2026",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. 2026 Destiny 2 cheats checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 Hileleri | ESP Aimbot Guide",
					description: "Destiny 2 Hileleri: the Destiny 2 hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Hileleri",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Hileleri.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 Hileleri",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Hileleri",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Destiny 2 Hile İndir | Instant Access",
					description: "Destiny 2 Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Hile İndir",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Hile İndir.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2 Hile İndir",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destiny 2 Hile İndir",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2 Mod Menü | In-Game Toggles",
					description: "Destiny 2 Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Mod Menü",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Mod Menü.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 Mod Menü",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Mod Menü",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Destiny 2 Hileleri | Buyer Checklist",
					description: "En İyi Destiny 2 Hileleri: what to compare before buying Destiny 2 cheats. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Destiny 2 Hileleri",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. En İyi Destiny 2 Hileleri.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "En İyi Destiny 2 Hileleri",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Destiny 2 Hileleri",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. what to compare before buying Destiny 2 cheats.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2 Aimbot Hilesi | Soft Aim Assist",
					description: "Destiny 2 Aimbot Hilesi: undetected Aimbot hack assist for Destiny 2. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot Hilesi",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Aimbot Hilesi.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 Aimbot Hilesi",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Aimbot Hilesi",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. undetected Aimbot hack assist for Destiny 2.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP Hilesi | Boxes & Loot",
					description: "Destiny 2 ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 ESP Hilesi",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 ESP Hilesi.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP Hilesi",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP Hilesi",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. pve-cheats searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@destiny2cheats.org.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Destiny 2 Cheats",
					description: "Gizlilik politikası for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Gizlilik politikası for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@destiny2cheats.org.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Destiny 2 Cheats",
					description: "İade politikası for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. İade politikası for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@destiny2cheats.org.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Destiny 2 Cheats",
					description: "Kullanım şartları for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Kullanım şartları for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats, Destiny 2 için Windows PC üzerinde ESP wallhack, radar hack ve Destiny 2 aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@destiny2cheats.org.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Destiny 2 غير مكتشف",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Destiny 2 على Windows PC — صيانة BattlEye anti-cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Destiny 2 PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Destiny 2 Cheats نشطة لـ Destiny 2 على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة BattlEye anti-cheat",
					antiCheatShort: "دعم BattlEye anti-cheat",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Destiny 2 Cheats",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Destiny 2 — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP وWallhack وAimbot",
					description: "غش Destiny 2 undetected لـ Destiny 2 على PC. ESP wallhack ورadar hack وAimbot مع صيانة BattlEye anti-cheat. تسليم رقمي فوري.",
					h1: "Destiny 2 Cheats — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Destiny 2 على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye anti-cheat.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "معرض Destiny 2 Cheats — ESP وAimbot وwallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Destiny 2 Cheats في 2026",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. مثالي لقراءة فرق العدو في Crucible وPvE.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Player Boxes & Wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. player boxes, loot markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Soft Aim Controls",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. الميزات.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. الأسعار.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. التثبيت.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | BattlEye Maintenance Log",
					description: "التحديثات: BattlEye patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. التحديثات.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. BattlEye patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and BattlEye questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. الأسئلة.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. الدعم.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | BattlEye Safe Status",
					description: "غش undetected: undetected maintenance after BattlEye anti-cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. غش undetected.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | ESP Visibility",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. how BattlEye updates are handled for Destiny 2 cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Destiny 2 2026 | Buyer Guide",
					description: "غش Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Destiny 2 2026",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. غش Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "غش Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "غش Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. 2026 Destiny 2 cheats checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Destiny 2 | ESP Aimbot Guide",
					description: "غش Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. غش Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "غش Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Destiny 2 Cheats | Instant Access",
					description: "تحميل Destiny 2 Cheats: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Destiny 2 Cheats",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. تحميل Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "تحميل Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "قائمة مود Destiny 2 | In-Game Toggles",
					description: "قائمة مود Destiny 2: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. قائمة مود Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "قائمة مود Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Smooth Aim Settings",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Destiny 2 | Buyer Checklist",
					description: "أفضل غش Destiny 2: what to compare before buying Destiny 2 cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. أفضل غش Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "أفضل غش Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. what to compare before buying Destiny 2 cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Destiny 2 | Soft Aim Assist",
					description: "هاك Aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. هاك Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. undetected Aimbot hack assist for Destiny 2.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Destiny 2 | Boxes & Loot",
					description: "هاك ESP Destiny 2: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. هاك ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "هاك ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | What It Means",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "اشترِ Destiny 2 Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. pve-cheats searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Destiny 2 Cheats",
					description: "سياسة الخصوصية for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. سياسة الخصوصية for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Destiny 2 Cheats",
					description: "سياسة الاسترداد for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. سياسة الاسترداد for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Destiny 2 Cheats",
					description: "شروط الاستخدام for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. شروط الاستخدام for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Destiny 2 Cheats يجمع ESP wallhack وradar hack وDestiny 2 aimbot غير مكتشف لـ Destiny 2 على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@destiny2cheats.org للدعم والطلبات القانونية.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Destiny 2チート",
					accentShort: "Destiny 2 Cheats",
					subtitle: "Destiny 2 Windows PC向けESP wallhack、radar hack、Aimbot — BattlEye anti-cheatメンテナンス付き。",
					subtitleShort: "Destiny 2 PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Destiny 2 CheatsパッケージはDestiny 2 Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheatメンテナンス対応",
					antiCheatShort: "BattlEye anti-cheat対応",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Destiny 2 Cheats購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Destiny 2向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP・Wallhack・Aimbot",
					description: "Destiny 2向けundetectedチート。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheatメンテナンス。即時デジタル配信。",
					h1: "Destiny 2 Cheats — Undetected ESP・Wallhack・Aimbot",
					intro: "Destiny 2 Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEye anti-cheatメンテナンス付き。",
					imageAlt: "Destiny 2 cheats hero ESP aimbot wallhack",
					galleryTitle: "Destiny 2 Cheatsギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にDestiny 2 Cheatsを選ぶ理由",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。CrucibleとPvEで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。機能.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。料金.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | BattlEye Maintenance Log",
					description: "更新: BattlEye patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。更新.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "更新",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。BattlEye patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | BattlEye Safe Status",
					description: "Undetectedチート: undetected maintenance after BattlEye anti-cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. 即時デジタル配信. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。how BattlEye updates are handled for Destiny 2 cheats.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 Cheats 2026 | Buyer Guide",
					description: "Destiny 2 Cheats 2026: 2026 Destiny 2 cheats checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Cheats 2026",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Cheats 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Cheats 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。2026 Destiny 2 cheats checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 Cheats | ESP Aimbot Guide",
					description: "Destiny 2 Cheats: the Destiny 2 hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Cheats",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Destiny 2 Cheat Download | Instant Access",
					description: "Destiny 2 Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Cheat Download",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Cheat Download.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2 Cheat Download",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destiny 2 Cheat Download",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2 Mod Menu | In-Game Toggles",
					description: "Destiny 2 Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Mod Menu",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Mod Menu.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 Mod Menu",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Mod Menu",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Destiny 2チート | Buyer Checklist",
					description: "最強Destiny 2チート: what to compare before buying Destiny 2 cheats. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Destiny 2チート",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。最強Destiny 2チート.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "最強Destiny 2チート",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Destiny 2チート",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。what to compare before buying Destiny 2 cheats.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2 Aimbot Hack | Soft Aim Assist",
					description: "Destiny 2 Aimbot Hack: undetected Aimbot hack assist for Destiny 2. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot Hack",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Aimbot Hack.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 Aimbot Hack",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Aimbot Hack",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。undetected Aimbot hack assist for Destiny 2.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP Hack | Boxes & Loot",
					description: "Destiny 2 ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 ESP Hack",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 ESP Hack.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP Hack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP Hack",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。pve-cheats searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@destiny2cheats.org",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Destiny 2 Cheats",
					description: "プライバシーポリシー for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。プライバシーポリシー for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Destiny 2 Cheats",
					description: "返金ポリシー for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。返金ポリシー for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Destiny 2 Cheats",
					description: "利用規約 for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。利用規約 for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Destiny 2 CheatsはDestiny 2向けWindows PC用ESP wallhack、radar hack、Destiny 2 aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Destiny 2 치트",
					accentShort: "Destiny 2 Cheats",
					subtitle: "Destiny 2 Windows PC용 ESP wallhack, radar hack, Aimbot — BattlEye anti-cheat 유지보수 포함.",
					subtitleShort: "Destiny 2 PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Destiny 2 Cheats 패키지는 Destiny 2 Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat 유지보수 지원",
					antiCheatShort: "BattlEye anti-cheat 지원",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Destiny 2 Cheats 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Destiny 2용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack, Aimbot",
					description: "Destiny 2 undetected 치트. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat 유지보수. 즉시 디지털 배송.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack, Aimbot",
					intro: "Destiny 2 Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye anti-cheat 유지보수 포함.",
					imageAlt: "Destiny 2 cheats hero ESP aimbot wallhack",
					galleryTitle: "Destiny 2 Cheats 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Destiny 2 Cheats를 선택하는 이유",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. BR 및 PvE에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | BattlEye Maintenance Log",
					description: "업데이트: BattlEye patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. BattlEye patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | BattlEye Safe Status",
					description: "Undetected 치트: undetected maintenance after BattlEye anti-cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. how BattlEye updates are handled for Destiny 2 cheats.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 Cheats 2026 | Buyer Guide",
					description: "Destiny 2 Cheats 2026: 2026 Destiny 2 cheats checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 Cheats 2026",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 Cheats 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Cheats 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 2026 Destiny 2 cheats checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 Cheats | ESP Aimbot Guide",
					description: "Destiny 2 Cheats: the Destiny 2 hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 Cheats",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Destiny 2 Cheat Download | Instant Access",
					description: "Destiny 2 Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 Cheat Download",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 Cheat Download.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2 Cheat Download",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destiny 2 Cheat Download",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2 모드 메뉴 | In-Game Toggles",
					description: "Destiny 2 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 모드 메뉴",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 모드 메뉴.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 모드 메뉴",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 모드 메뉴",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Destiny 2 치트 | Buyer Checklist",
					description: "최고의 Destiny 2 치트: what to compare before buying Destiny 2 cheats. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Destiny 2 치트",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 최고의 Destiny 2 치트.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "최고의 Destiny 2 치트",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Destiny 2 치트",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. what to compare before buying Destiny 2 cheats.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2 에임봇 핵 | Soft Aim Assist",
					description: "Destiny 2 에임봇 핵: undetected Aimbot hack assist for Destiny 2. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 에임봇 핵",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 에임봇 핵.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 에임봇 핵",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 에임봇 핵",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. undetected Aimbot hack assist for Destiny 2.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP 핵 | Boxes & Loot",
					description: "Destiny 2 ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 ESP 핵",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 ESP 핵.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP 핵",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP 핵",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. pve-cheats searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@destiny2cheats.org",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Destiny 2 Cheats",
					description: "개인정보 처리방침 for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 개인정보 처리방침 for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Destiny 2 Cheats",
					description: "환불 정책 for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 환불 정책 for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Destiny 2 Cheats",
					description: "이용 약관 for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. 이용 약관 for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats는 Destiny 2 Windows PC용 ESP wallhack, radar hack, Destiny 2 aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Destiny 2作弊",
					accentShort: "Destiny 2 Cheats",
					subtitle: "适用于Destiny 2 Windows PC的ESP wallhack、radar hack和Aimbot — 含BattlEye anti-cheat维护。",
					subtitleShort: "Destiny 2 PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Destiny 2 Cheats套餐已在Destiny 2 Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持BattlEye anti-cheat维护",
					antiCheatShort: "BattlEye anti-cheat支持",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Destiny 2 Cheats 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Destiny 2 undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP、Wallhack、Aimbot",
					description: "Destiny 2 undetected作弊。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheat维护。即时数字交付。",
					h1: "Destiny 2 Cheats — Undetected ESP、Wallhack、Aimbot",
					intro: "Destiny 2 Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含BattlEye anti-cheat维护。",
					imageAlt: "Destiny 2 cheats hero ESP aimbot wallhack",
					galleryTitle: "Destiny 2 Cheats图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Destiny 2 Cheats的原因",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。适合在Crucible和PvE中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。一个许可证而非多个工具。",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。player boxes, loot markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。功能.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。价格.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。安装.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | BattlEye Maintenance Log",
					description: "更新: BattlEye patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。更新.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "更新",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。BattlEye patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and BattlEye questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。常见问题.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。ESP, soft aim, delivery, and BattlEye questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。支持.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | BattlEye Safe Status",
					description: "Undetected作弊: undetected maintenance after BattlEye anti-cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。undetected maintenance after BattlEye anti-cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. 即时数字交付. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。how BattlEye updates are handled for Destiny 2 cheats.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2作弊 2026 | Buyer Guide",
					description: "Destiny 2作弊 2026: 2026 Destiny 2 cheats checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2作弊 2026",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2作弊 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2作弊 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2作弊 2026",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。2026 Destiny 2 cheats checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2作弊 | ESP Aimbot Guide",
					description: "Destiny 2作弊: the Destiny 2 hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2作弊",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2作弊.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2作弊",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2作弊",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。the Destiny 2 hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Destiny 2作弊下载 | Instant Access",
					description: "Destiny 2作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2作弊下载",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2作弊下载.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2作弊下载",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destiny 2作弊下载",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2修改菜单 | In-Game Toggles",
					description: "Destiny 2修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2修改菜单",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2修改菜单.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2修改菜单",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2修改菜单",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Destiny 2作弊 | Buyer Checklist",
					description: "最佳Destiny 2作弊: what to compare before buying Destiny 2 cheats. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Destiny 2作弊",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。最佳Destiny 2作弊.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "最佳Destiny 2作弊",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Destiny 2作弊",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。what to compare before buying Destiny 2 cheats.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2自瞄外挂 | Soft Aim Assist",
					description: "Destiny 2自瞄外挂: undetected Aimbot hack assist for Destiny 2. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2自瞄外挂",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2自瞄外挂.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2自瞄外挂",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2自瞄外挂",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。undetected Aimbot hack assist for Destiny 2.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP外挂 | Boxes & Loot",
					description: "Destiny 2 ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2 ESP外挂",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2 ESP外挂.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP外挂",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP外挂",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "购买 Destiny 2 Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。pve-cheats searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@destiny2cheats.org",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Destiny 2 Cheats",
					description: "隐私政策 for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。隐私政策 for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Destiny 2 Cheats",
					description: "退款政策 for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。退款政策 for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Destiny 2 Cheats",
					description: "使用条款 for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。使用条款 for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats为Destiny 2Windows PC提供ESP wallhack、radar hack和Destiny 2 aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected Destiny 2 cheats",
					accentShort: "Destiny 2 Cheats",
					subtitle: "Destiny 2 Windows PC के लिए ESP wallhack, radar hack और Aimbot — BattlEye maintenance शामिल।",
					subtitleShort: "Destiny 2 PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Destiny 2 Cheats पैकेज Destiny 2 Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "BattlEye maintenance समर्थित",
					antiCheatShort: "BattlEye anti-cheat समर्थित",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Destiny 2 Cheats खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Destiny 2 के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack और Aimbot",
					description: "Destiny 2 undetected cheats. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. Instant digital delivery.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack और Aimbot",
					intro: "Destiny 2 Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.",
					imageAlt: "Destiny 2 cheats hero ESP aimbot wallhack",
					galleryTitle: "Destiny 2 Cheats gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Destiny 2 Cheats क्यों",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। BR और PvE में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | BattlEye Maintenance Log",
					description: "अपडेट: BattlEye patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। BattlEye patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | BattlEye Safe Status",
					description: "Undetected cheats: undetected maintenance after BattlEye anti-cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। how BattlEye updates are handled for Destiny 2 cheats.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 Cheats 2026 | Buyer Guide",
					description: "Destiny 2 Cheats 2026: 2026 Destiny 2 cheats checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Cheats 2026",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Cheats 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Cheats 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। 2026 Destiny 2 cheats checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 Cheats | ESP Aimbot Guide",
					description: "Destiny 2 Cheats: the Destiny 2 hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Cheats",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Destiny 2 Cheat Download | Instant Access",
					description: "Destiny 2 Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Cheat Download",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Cheat Download.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2 Cheat Download",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destiny 2 Cheat Download",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2 Mod Menu | In-Game Toggles",
					description: "Destiny 2 Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Mod Menu",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Mod Menu.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 Mod Menu",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Mod Menu",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Destiny 2 Cheats | Buyer Checklist",
					description: "सर्वश्रेष्ठ Destiny 2 Cheats: what to compare before buying Destiny 2 cheats. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Destiny 2 Cheats",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "सर्वश्रेष्ठ Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। what to compare before buying Destiny 2 cheats.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2 Aimbot Hack | Soft Aim Assist",
					description: "Destiny 2 Aimbot Hack: undetected Aimbot hack assist for Destiny 2. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot Hack",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Aimbot Hack.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 Aimbot Hack",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Aimbot Hack",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Destiny 2.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP Hack | Boxes & Loot",
					description: "Destiny 2 ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 ESP Hack",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 ESP Hack.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP Hack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP Hack",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Destiny 2 Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। pve-cheats searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@destiny2cheats.org",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Destiny 2 Cheats",
					description: "गोपनीयता नीति for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। गोपनीयता नीति for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Destiny 2 Cheats",
					description: "रिफंड नीति for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। रिफंड नीति for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Destiny 2 Cheats",
					description: "उपयोग की शर्तें for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। उपयोग की शर्तें for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats Destiny 2 के लिए Windows PC पर ESP wallhack, radar hack और Destiny 2 aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@destiny2cheats.org",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Destiny 2 undetected",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Destiny 2 di PC Windows — pemeliharaan BattlEye anti-cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Destiny 2 PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Destiny 2 Cheats aktif untuk Destiny 2 di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan BattlEye anti-cheat didukung",
					antiCheatShort: "BattlEye anti-cheat didukung",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Destiny 2 Cheats",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Destiny 2 — checkout via Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Destiny 2 undetected untuk Destiny 2 di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan BattlEye anti-cheat. Pengiriman digital instan.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Destiny 2 di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye anti-cheat.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Galeri Destiny 2 Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Destiny 2 Cheats di 2026",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Ideal membaca squad musuh di Crucible dan PvE.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Player Boxes & Wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. player boxes, loot markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Soft Aim Controls",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Fitur.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Harga.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Setup.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | BattlEye Maintenance Log",
					description: "Pembaruan: BattlEye patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Pembaruan.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. BattlEye patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Dukungan.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | BattlEye Safe Status",
					description: "Cheat undetected: undetected maintenance after BattlEye anti-cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Cheat undetected.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | ESP Visibility",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. how BattlEye updates are handled for Destiny 2 cheats.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Destiny 2 2026 | Buyer Guide",
					description: "Cheat Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Destiny 2 2026",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Cheat Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Cheat Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheat Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. 2026 Destiny 2 cheats checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Destiny 2 | ESP Aimbot Guide",
					description: "Cheat Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Cheat Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Destiny 2 | Instant Access",
					description: "Download Cheat Destiny 2: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Download Cheat Destiny 2.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Download Cheat Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Menu mod Destiny 2 | In-Game Toggles",
					description: "Menu mod Destiny 2: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Menu mod Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Menu mod Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Smooth Aim Settings",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Destiny 2 terbaik | Buyer Checklist",
					description: "Cheat Destiny 2 terbaik: what to compare before buying Destiny 2 cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Destiny 2 terbaik",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Cheat Destiny 2 terbaik.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Cheat Destiny 2 terbaik",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Destiny 2 terbaik",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. what to compare before buying Destiny 2 cheats.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Destiny 2 | Soft Aim Assist",
					description: "Hack aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Hack aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. undetected Aimbot hack assist for Destiny 2.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Boxes & Loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | What It Means",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Beli Destiny 2 Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. pve-cheats searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@destiny2cheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Destiny 2 Cheats",
					description: "Kebijakan privasi for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Kebijakan privasi for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org untuk dukungan dan legal.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Destiny 2 Cheats",
					description: "Kebijakan refund for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Kebijakan refund for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org untuk dukungan dan legal.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Destiny 2 Cheats",
					description: "Syarat penggunaan for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Syarat penggunaan for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats menyediakan ESP wallhack, radar hack, dan Destiny 2 aimbot undetected untuk Destiny 2 di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org untuk dukungan dan legal.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "Destiny 2 cheats ไม่ถูกตรวจจับ",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Destiny 2 บน Windows PC — รวมการดูแล BattlEye anti-cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Destiny 2 PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Destiny 2 Cheats พร้อมใช้งานสำหรับ Destiny 2 บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat รองรับ",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Destiny 2 Cheats",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Destiny 2 — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Destiny 2 undetected สำหรับ Destiny 2 บน PC. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Destiny 2 บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "แกลเลอรี Destiny 2 Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Destiny 2 Cheats ปี 2026",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน Crucible และ PvE",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC player boxes, loot markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ฟีเจอร์.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ราคา.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ติดตั้ง.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | BattlEye Maintenance Log",
					description: "อัปเดต: BattlEye patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC อัปเดต.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC BattlEye patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ESP, soft aim, delivery, and BattlEye questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC สนับสนุน.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | BattlEye Safe Status",
					description: "Cheats undetected: undetected maintenance after BattlEye anti-cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Cheats undetected.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC undetected maintenance after BattlEye anti-cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC how BattlEye updates are handled for Destiny 2 cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 Cheats 2026 | Buyer Guide",
					description: "Destiny 2 Cheats 2026: 2026 Destiny 2 cheats checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Destiny 2 Cheats 2026",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Destiny 2 Cheats 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Cheats 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC 2026 Destiny 2 cheats checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 Cheats | ESP Aimbot Guide",
					description: "Destiny 2 Cheats: the Destiny 2 hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Destiny 2 Cheats",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC the Destiny 2 hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Destiny 2 Cheats | Instant Access",
					description: "ดาวน์โหลด Destiny 2 Cheats: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Destiny 2 Cheats",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ดาวน์โหลด Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "เมนูมอด Destiny 2 | In-Game Toggles",
					description: "เมนูมอด Destiny 2: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Destiny 2",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC เมนูมอด Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "เมนูมอด Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Destiny 2 ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Destiny 2 ที่ดีที่สุด: what to compare before buying Destiny 2 cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Destiny 2 ที่ดีที่สุด",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Cheat Destiny 2 ที่ดีที่สุด.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Cheat Destiny 2 ที่ดีที่สุด",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Destiny 2 ที่ดีที่สุด",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC what to compare before buying Destiny 2 cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Destiny 2 | Soft Aim Assist",
					description: "Hack Aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Destiny 2",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Hack Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC undetected Aimbot hack assist for Destiny 2.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Boxes & Loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "ซื้อ Destiny 2 Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC pve-cheats searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@destiny2cheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Destiny 2 Cheats",
					description: "นโยบายความเป็นส่วนตัว for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC นโยบายความเป็นส่วนตัว for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org สำหรับการสนับสนุน",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Destiny 2 Cheats",
					description: "นโยบายการคืนเงิน for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC นโยบายการคืนเงิน for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org สำหรับการสนับสนุน",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Destiny 2 Cheats",
					description: "ข้อกำหนดการใช้งาน for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC ข้อกำหนดการใช้งาน for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats รวม ESP wallhack, radar hack และ Destiny 2 aimbot แบบ undetected สำหรับ Destiny 2 บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org สำหรับการสนับสนุน",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Destiny 2 undetected",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Destiny 2 trên PC Windows — bảo trì BattlEye anti-cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Destiny 2 PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Destiny 2 Cheats đang hoạt động cho Destiny 2 trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì BattlEye anti-cheat",
					antiCheatShort: "Hỗ trợ BattlEye anti-cheat",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Destiny 2 Cheats",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Destiny 2 — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Destiny 2 undetected cho Destiny 2 trên PC. ESP wallhack, radar hack, Aimbot, bảo trì BattlEye anti-cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Destiny 2 trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye anti-cheat.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Thư viện Destiny 2 Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Lý tưởng đọc squad địch trong Crucible và PvE.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Player Boxes & Wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. player boxes, loot markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Soft Aim Controls",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Tính năng.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Giá.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Cài đặt.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | BattlEye Maintenance Log",
					description: "Cập nhật: BattlEye patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Cập nhật.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. BattlEye patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Hỗ trợ.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | BattlEye Safe Status",
					description: "Cheat undetected: undetected maintenance after BattlEye anti-cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Cheat undetected.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | ESP Visibility",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. how BattlEye updates are handled for Destiny 2 cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Destiny 2 2026 | Buyer Guide",
					description: "Cheat Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Destiny 2 2026",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Cheat Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Cheat Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheat Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. 2026 Destiny 2 cheats checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Destiny 2 | ESP Aimbot Guide",
					description: "Cheat Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Cheat Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Destiny 2 | Instant Access",
					description: "Tải Cheat Destiny 2: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Tải Cheat Destiny 2.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Tải Cheat Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Mod menu Destiny 2 | In-Game Toggles",
					description: "Mod menu Destiny 2: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Mod menu Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Mod menu Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Smooth Aim Settings",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Destiny 2 tốt nhất | Buyer Checklist",
					description: "Cheat Destiny 2 tốt nhất: what to compare before buying Destiny 2 cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Destiny 2 tốt nhất",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Cheat Destiny 2 tốt nhất.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Cheat Destiny 2 tốt nhất",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Destiny 2 tốt nhất",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. what to compare before buying Destiny 2 cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Destiny 2 | Soft Aim Assist",
					description: "Hack aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Hack aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. undetected Aimbot hack assist for Destiny 2.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Boxes & Loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | What It Means",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Mua Destiny 2 Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. pve-cheats searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Destiny 2 Cheats",
					description: "Chính sách bảo mật for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Chính sách bảo mật for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Destiny 2 Cheats",
					description: "Chính sách hoàn tiền for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Chính sách hoàn tiền for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Destiny 2 Cheats",
					description: "Điều khoản sử dụng for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Điều khoản sử dụng for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats cung cấp ESP wallhack, radar hack và Destiny 2 aimbot undetected cho Destiny 2 trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org cho hỗ trợ và pháp lý.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Destiny 2",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack і Aimbot для Destiny 2 на Windows PC — обслуговування BattlEye anti-cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Destiny 2 PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Destiny 2 Cheats активний для Destiny 2 на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat підтримка",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Destiny 2 Cheats",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Destiny 2 — оплата через Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Destiny 2 для Destiny 2 на PC. ESP wallhack, radar hack, Aimbot, обслуговування BattlEye anti-cheat. Мгновенная цифровая доставка.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Destiny 2 на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye anti-cheat.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Галерея Destiny 2 Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Destiny 2 Cheats у 2026",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Ідеально для читання ворожих загонів у Crucible і PvE.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Player Boxes & Wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Soft Aim Controls",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Функції.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Ціни.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Встановлення.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | BattlEye Maintenance Log",
					description: "Оновлення: BattlEye patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Оновлення.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. BattlEye patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Підтримка.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | BattlEye Safe Status",
					description: "Undetected чіти: undetected maintenance after BattlEye anti-cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Undetected чіти.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | ESP Visibility",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. how BattlEye updates are handled for Destiny 2 cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Destiny 2 2026 | Buyer Guide",
					description: "Чіти Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Destiny 2 2026",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Чіти Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Чіти Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Чіти Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. 2026 Destiny 2 cheats checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Destiny 2 | ESP Aimbot Guide",
					description: "Чіти Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Чіти Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Destiny 2 Cheats | Instant Access",
					description: "Завантаження Destiny 2 Cheats: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Destiny 2 Cheats",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Завантаження Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Завантаження Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Мод-меню Destiny 2 | In-Game Toggles",
					description: "Мод-меню Destiny 2: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Мод-меню Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Мод-меню Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Smooth Aim Settings",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Destiny 2 | Buyer Checklist",
					description: "Найкращі чіти Destiny 2: what to compare before buying Destiny 2 cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Найкращі чіти Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Найкращі чіти Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. what to compare before buying Destiny 2 cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Destiny 2 | Soft Aim Assist",
					description: "Хак aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Хак aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. undetected Aimbot hack assist for Destiny 2.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Destiny 2 | Boxes & Loot",
					description: "Хак ESP Destiny 2: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Хак ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Хак ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | What It Means",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Купити Destiny 2 Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. pve-cheats searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@destiny2cheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Destiny 2 Cheats",
					description: "Політика конфіденційності for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Політика конфіденційності for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org для підтримки та правових питань.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Destiny 2 Cheats",
					description: "Політика повернення for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Політика повернення for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org для підтримки та правових питань.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Destiny 2 Cheats",
					description: "Умови використання for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Умови використання for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats об'єднує ESP wallhack, radar hack і Destiny 2 aimbot у undetected пакеті для Destiny 2 на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org для підтримки та правових питань.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Destiny 2 cheaty",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Destiny 2 na Windows PC — údržba BattlEye anti-cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Destiny 2 PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Destiny 2 Cheats je aktivní pro Destiny 2 na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat podpora",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Destiny 2 Cheats",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Destiny 2 — checkout přes Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected Destiny 2 cheaty pro Destiny 2 na PC. ESP wallhack, radar hack, Aimbot, údržba BattlEye anti-cheat. Okamžité digitální doručení.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Destiny 2 na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye anti-cheat.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Galerie Destiny 2 Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Destiny 2 Cheats v roce 2026",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Ideální pro čtení nepřátelských squadů v Crucible a PvE.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Funkce.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Ceny.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Instalace.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | BattlEye Maintenance Log",
					description: "Aktualizace: BattlEye patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Aktualizace.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. BattlEye patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Podpora.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | BattlEye Safe Status",
					description: "Undetected cheaty: undetected maintenance after BattlEye anti-cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Undetected cheaty.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 cheaty 2026 | Buyer Guide",
					description: "Destiny 2 cheaty 2026: 2026 Destiny 2 cheats checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 cheaty 2026",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 cheaty 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 cheaty 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 cheaty 2026",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. 2026 Destiny 2 cheats checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 cheaty | ESP Aimbot Guide",
					description: "Destiny 2 cheaty: the Destiny 2 hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 cheaty",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 cheaty.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 cheaty",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 cheaty",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Destiny 2 Cheats | Instant Access",
					description: "Stáhnout Destiny 2 Cheats: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Destiny 2 Cheats",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Stáhnout Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Stáhnout Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2 mod menu | In-Game Toggles",
					description: "Destiny 2 mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 mod menu",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 mod menu.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 mod menu",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 mod menu",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Destiny 2 cheaty | Buyer Checklist",
					description: "Nejlepší Destiny 2 cheaty: what to compare before buying Destiny 2 cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Destiny 2 cheaty",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Nejlepší Destiny 2 cheaty.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Nejlepší Destiny 2 cheaty",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Destiny 2 cheaty",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. what to compare before buying Destiny 2 cheats.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2 aimbot hack | Soft Aim Assist",
					description: "Destiny 2 aimbot hack: undetected Aimbot hack assist for Destiny 2. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 aimbot hack",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 aimbot hack.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 aimbot hack",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 aimbot hack",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. undetected Aimbot hack assist for Destiny 2.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP hack | Boxes & Loot",
					description: "Destiny 2 ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 ESP hack",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 ESP hack.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP hack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP hack",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Koupit Destiny 2 Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@destiny2cheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Destiny 2 Cheats",
					description: "Zásady ochrany soukromí for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Zásady ochrany soukromí for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org pro podporu a právní dotazy.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Destiny 2 Cheats",
					description: "Zásady vrácení peněz for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Zásady vrácení peněz for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org pro podporu a právní dotazy.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Destiny 2 Cheats",
					description: "Podmínky použití for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Podmínky použití for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats spojuje ESP wallhack, radar hack a Destiny 2 aimbot jako undetected balíček pro Destiny 2 na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org pro podporu a právní dotazy.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Destiny 2 undetected",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Destiny 2 pe PC Windows — mentenanță BattlEye anti-cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Destiny 2 PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Destiny 2 Cheats este activ pentru Destiny 2 pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță BattlEye anti-cheat suportată",
					antiCheatShort: "BattlEye anti-cheat suportat",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Destiny 2 Cheats",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Destiny 2 — checkout via Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Destiny 2 undetected pentru Destiny 2 pe PC. ESP wallhack, radar hack, Aimbot, mentenanță BattlEye anti-cheat. Livrare digitală instantă.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Destiny 2 pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye anti-cheat.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Galerie Destiny 2 Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Destiny 2 Cheats în 2026",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Ideal pentru citirea squad-urilor inamice în Crucible și PvE.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "ESP Destiny 2 | Player Boxes & Wallhack",
					description: "ESP Destiny 2: player boxes, loot markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Aimbot Destiny 2 | Soft Aim Controls",
					description: "Aimbot Destiny 2: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Funcții.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Prețuri.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Instalare.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | BattlEye Maintenance Log",
					description: "Actualizări: BattlEye patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Actualizări.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. BattlEye patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Suport.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | BattlEye Safe Status",
					description: "Cheats undetected: undetected maintenance after BattlEye anti-cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Cheats undetected.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Destiny 2 | ESP Visibility",
					description: "Wallhack Destiny 2: wallhack ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Wallhack Destiny 2.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Wallhack Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Radar hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				anticheat: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Destiny 2 cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Bypass BattlEye.",
					imageAlt: "Bypass BattlEye — Destiny 2 Cheats screenshot",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Destiny 2 2026 | Buyer Guide",
					description: "Cheats Destiny 2 2026: 2026 Destiny 2 cheats checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Destiny 2 2026",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Cheats Destiny 2 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Cheats Destiny 2 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Cheats Destiny 2 2026",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. 2026 Destiny 2 cheats checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Destiny 2 | ESP Aimbot Guide",
					description: "Cheats Destiny 2: the Destiny 2 hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Cheats Destiny 2.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Destiny 2",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Destiny 2 Cheats | Instant Access",
					description: "Descărcare Destiny 2 Cheats: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Destiny 2 Cheats",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Descărcare Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Descărcare Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Meniu mod Destiny 2 | In-Game Toggles",
					description: "Meniu mod Destiny 2: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Meniu mod Destiny 2.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Meniu mod Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Soft aim Destiny 2 | Smooth Aim Settings",
					description: "Soft aim Destiny 2: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Soft aim Destiny 2.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Soft aim Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Destiny 2 | Buyer Checklist",
					description: "Cele mai bune cheats Destiny 2: what to compare before buying Destiny 2 cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Cele mai bune cheats Destiny 2.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Cele mai bune cheats Destiny 2",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. what to compare before buying Destiny 2 cheats.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Destiny 2 | Soft Aim Assist",
					description: "Hack aimbot Destiny 2: undetected Aimbot hack assist for Destiny 2. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Hack aimbot Destiny 2.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Destiny 2",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. undetected Aimbot hack assist for Destiny 2.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Destiny 2 | Boxes & Loot",
					description: "Hack ESP Destiny 2: ESP hack boxes, loot pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Hack ESP Destiny 2.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Destiny 2",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Hack ESP Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Unlock all Destiny 2 | What It Means",
					description: "Unlock all Destiny 2: pve-cheats searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Destiny 2",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Unlock all Destiny 2.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Unlock all Destiny 2",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Cumpără Destiny 2 Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Destiny 2",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@destiny2cheats.org pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Destiny 2 Cheats",
					description: "Politica de confidențialitate for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Politica de confidențialitate for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org pentru suport și legal.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Destiny 2 Cheats",
					description: "Politica de rambursare for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Politica de rambursare for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org pentru suport și legal.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Destiny 2 Cheats",
					description: "Termeni de utilizare for Destiny 2 Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Termeni de utilizare for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats combină ESP wallhack, radar hack și Destiny 2 aimbot undetected pentru Destiny 2 pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org pentru suport și legal.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected Destiny 2 cheats",
					accentShort: "Destiny 2 Cheats",
					subtitle: "ESP wallhack, radar hack och Aimbot för Destiny 2 på Windows PC — BattlEye anti-cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Destiny 2 PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Destiny 2 Cheats-paketet är live för Destiny 2 på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-underhåll stöds",
					antiCheatShort: "BattlEye anti-cheat stöd",
				},
				product: {
					title: "Destiny 2 Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Destiny 2",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Destiny 2 Cheats-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Destiny 2 — checkout via Zadeyo.",
				},
				images: {
					hero: "Destiny 2 Cheats hero — ESP and aimbot overlay in Destiny 2",
					espWallhack: "Wallhack outlines showing Guardians and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during an Destiny 2 raid",
					squadFight: "Destiny 2 Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Destiny 2 raid",
					headerArt: "Aimbot view and bone priority controls for Destiny 2",
					cheatsPackage: "2D radar threat overlay for Destiny 2",
					rebootFight: "Aimbot assist during a Destiny 2 firefight",
					battleRoyale: "Destiny 2 Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and objectives in Destiny 2",
				},
			},
			pages: {
				home: {
					title: "Destiny 2 Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Destiny 2 cheats för Destiny 2 på PC. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat-underhåll. Omedelbar digital leverans.",
					h1: "Destiny 2 Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Destiny 2 på Windows PC: ESP wallhack, radar, Aimbot med BattlEye anti-cheat-underhåll.",
					imageAlt: "Destiny 2 ESP player tags hack",
					galleryTitle: "Destiny 2 Cheats galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Ideal för att läsa fiendesquads i Crucible och PvE.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"destiny-2-esp": {
					title: "Destiny 2 ESP | Player Boxes & Wallhack",
					description: "Destiny 2 ESP: player boxes, loot markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 ESP",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 ESP.",
					imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
					galleryTitle: "Destiny 2 ESP",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 ESP",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"destiny-2-aimbot": {
					title: "Destiny 2 Aimbot | Soft Aim Controls",
					description: "Destiny 2 Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Aimbot.",
					imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
					galleryTitle: "Destiny 2 Aimbot",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Aimbot",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Funktioner.",
					imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Priser.",
					imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Installation.",
					imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | BattlEye Maintenance Log",
					description: "Uppdateringar: BattlEye patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Uppdateringar.",
					imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. BattlEye patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. FAQ.",
					imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Support.",
					imageAlt: "Destiny 2 Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | BattlEye Safe Status",
					description: "Undetected cheats: undetected maintenance after BattlEye anti-cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Undetected cheats.",
					imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Destiny 2 Wallhack | ESP Visibility",
					description: "Destiny 2 Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Wallhack",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Wallhack.",
					imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
					galleryTitle: "Destiny 2 Wallhack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 Wallhack",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Radar Hack.",
					imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				anticheat: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Destiny 2 cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. BattlEye Bypass.",
					imageAlt: "BattlEye Bypass — Destiny 2 Cheats screenshot",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. how BattlEye updates are handled for Destiny 2 cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Destiny 2 Cheats 2026 | Buyer Guide",
					description: "Destiny 2 Cheats 2026: 2026 Destiny 2 cheats checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Cheats 2026",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Cheats 2026.",
					imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
					galleryTitle: "Destiny 2 Cheats 2026",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/d2-cheats/",
					sections: [
						{
							h2: "Destiny 2 Cheats 2026",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. 2026 Destiny 2 cheats checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Destiny 2 Cheats | ESP Aimbot Guide",
					description: "Destiny 2 Cheats: the Destiny 2 hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Cheats",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. the Destiny 2 hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Destiny 2 Cheat Download | Instant Access",
					description: "Destiny 2 Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Cheat Download",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Cheat Download.",
					imageAlt: "Destiny 2 Cheats download and install delivery flow",
					galleryTitle: "Destiny 2 Cheat Download",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destiny 2 Cheat Download",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"crucible-cheats": {
					title: "Destiny 2 Mod-meny | In-Game Toggles",
					description: "Destiny 2 Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Mod-meny",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Mod-meny.",
					imageAlt: "Destiny 2 Cheats in-game menu controls",
					galleryTitle: "Destiny 2 Mod-meny",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Mod-meny",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"aim-assist": {
					title: "Destiny 2 Soft Aim | Smooth Aim Settings",
					description: "Destiny 2 Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Soft Aim",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Soft Aim.",
					imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
					galleryTitle: "Destiny 2 Soft Aim",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Soft Aim",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Destiny 2 Cheats | Buyer Checklist",
					description: "Bästa Destiny 2 Cheats: what to compare before buying Destiny 2 cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Destiny 2 Cheats",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Bästa Destiny 2 Cheats.",
					imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
					galleryTitle: "Bästa Destiny 2 Cheats",
					heroImage: "/images/destiny-2-cheats-esp.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Destiny 2 Cheats",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. what to compare before buying Destiny 2 cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Destiny 2 Aimbot Hack | Soft Aim Assist",
					description: "Destiny 2 Aimbot Hack: undetected Aimbot hack assist for Destiny 2. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Aimbot Hack",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Aimbot Hack.",
					imageAlt: "Destiny 2 aimbot hack controls and bone priority",
					galleryTitle: "Destiny 2 Aimbot Hack",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/destiny-2-aimbot/",
					sections: [
						{
							h2: "Destiny 2 Aimbot Hack",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. undetected Aimbot hack assist for Destiny 2.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Destiny 2 ESP Hack | Boxes & Loot",
					description: "Destiny 2 ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 ESP Hack",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 ESP Hack.",
					imageAlt: "Destiny 2 ESP hack boxes and loot markers",
					galleryTitle: "Destiny 2 ESP Hack",
					heroImage: "/images/destiny-2-cheats-wallhack.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/destiny-2-esp/",
					sections: [
						{
							h2: "Destiny 2 ESP Hack",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				"pve-cheats": {
					title: "Destiny 2 Unlock All | What It Means",
					description: "Destiny 2 Unlock All: pve-cheats searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Destiny 2 Unlock All",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Destiny 2 Unlock All.",
					imageAlt: "Destiny 2 Cheats license features overview",
					galleryTitle: "Destiny 2 Unlock All",
					heroImage: "/images/destiny-2-cheats-radar.webp",
					ctaPrimary: "Köp Destiny 2 Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Destiny 2 Unlock All",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. pve-cheats searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@destiny2cheats.org för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Destiny 2 Cheats",
					description: "Integritetspolicy for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Integritetspolicy for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed at checkout — not stored on destiny2cheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@destiny2cheats.org för support och juridik.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Destiny 2 Cheats",
					description: "Återbetalningspolicy for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Återbetalningspolicy for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@destiny2cheats.org för support och juridik.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Destiny 2 Cheats",
					description: "Användarvillkor for Destiny 2 Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Användarvillkor for destiny2cheats.org and Destiny 2 licenses.",
					imageAlt: "Destiny 2 cheats",
					galleryTitle: "Destiny 2 cheats",
					heroImage: "/images/destiny-2-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Destiny 2 Cheats kombinerar ESP wallhack, radar hack och Destiny 2 aimbot som undetected paket för Destiny 2 på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Bungie terms of service — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@destiny2cheats.org för support och juridik.",
								"Email: support@destiny2cheats.org",
							],
						},
					],
				},
			},
		},
	};
