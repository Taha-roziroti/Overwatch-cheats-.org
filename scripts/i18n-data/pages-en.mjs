import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Destiny 2 Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'Destiny 2 cheats for Windows PC — ESP, soft aim, radar, and BattlEye updates. Compare plans and buy.',
		h1: 'Destiny 2 Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Destiny 2 Cheats is the undetected Destiny 2 cheats package for Windows PC — built for Destiny 2 on Windows PC. Destiny 2 esp wallhack, 2D radar, and Destiny 2 aimbot with BattlEye maintenance after every major patch.',
		imageAlt: "Destiny 2 Cheats homepage hero — ESP and aimbot for Destiny 2",
		galleryTitle: 'Destiny 2 Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Destiny 2 cheats in 2026',
				'Destiny 2 rewards map awareness. Destiny 2 Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, scav-run, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.destiny-2} and ${EXT.battleye}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include BattlEye maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/destiny-2-cheats/">Destiny 2 cheats pillar</a>, <a href="/destiny-2-esp/">ESP guide</a>, <a href="/destiny-2-aimbot/">Aimbot controls</a>, and <a href="/destiny-2-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Destiny 2 Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for Guardian raids and scav-runs — covering both “Destiny 2 cheats” and “Destiny 2 cheats” search intent.',
				'Browse the <a href="/destiny-2-esp/">ESP</a>, <a href="/destiny-2-aimbot/">Aimbot</a>, <a href="/destiny-2-esp/">wallhack</a>, and <a href="/destiny-2-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'destiny-2-esp': {
		title: 'Destiny 2 ESP 2026 | Player Boxes & Wallhack',
		description:
			'Destiny 2 ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected Destiny 2 cheats for Destiny 2.',
		h1: 'Destiny 2 ESP — Player Boxes & Wallhack',
		intro:
			'Destiny 2 esp visibility tools for raid and scav-run. Read enemy squads, Guardians, enemies, loot, and distance before you commit — toggleable Destiny 2 ESP wallhack overlays bundled in our Destiny 2 cheats package.',
		imageAlt: "Destiny 2 ESP player boxes and distance readouts in a raid",
		galleryTitle: 'Destiny 2 ESP overlay visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Destiny 2 wallhack guide',
		ctaSecondaryHref: '/destiny-2-esp/',
		sections: [
			section(
				'What Destiny 2 ESP solves in raids',
				'Destiny 2 maps punish incomplete information. Destiny 2 Cheats ESP wallhack helps you spot enemy squads early, spot Guardians and enemies before they push your angle, and mark powerful loot worth the detour.',
				'On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Destiny 2’s live seasons and map updates are published by Battlestate Games (${EXT.destiny-2}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, extract cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Guardian raids and scav-runs lobbies alike.',
				'Compare category detail on the <a href="/destiny-2-esp/">wallhack page</a> and pair visibility with the <a href="/destiny-2-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and extract awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with BattlEye maintenance',
				'Destiny 2 Cheats ESP wallhack is maintained for Destiny 2 with rebuilds after BattlEye anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.battleye} for how anti-cheat updates ship, then cross-check our <a href="/updates/">BattlEye bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first raid.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/destiny-2-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/destiny-2-cheats/">Destiny 2 cheats pillar</a> and <a href="/destiny-2-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'destiny-2-aimbot': {
		title: 'Destiny 2 Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Destiny 2 aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our Destiny 2 cheats package.',
		h1: 'Destiny 2 Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Destiny 2 firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Destiny 2 aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Destiny 2 Aimbot combat previews',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/destiny-2-esp/',
		sections: [
			section(
				'Aimbot tuned for Destiny 2 combat pace',
				'Destiny 2 mixes long-range AR fights with close-quarters SMG pushes. Destiny 2 Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.destiny-2}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every raid.',
				'Prefer softer tracking? Read the <a href="/destiny-2-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/destiny-2-esp/">ESP wallhack</a> and <a href="/destiny-2-radar-hack/">2D radar</a> in the same Destiny 2 Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'BattlEye maintenance for undetected Aimbot',
				'Destiny 2 Cheats rebuilds Aimbot behavior when BattlEye anti-cheat or major Destiny 2 patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.battleye}, then follow our <a href="/updates/">BattlEye maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Destiny 2 Cheats Features | ESP, Soft Aim & Radar',
		description:
			'Full Destiny 2 cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Destiny 2 Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Destiny 2 Cheats package for Destiny 2 on Windows PC — with BattlEye maintenance after major patches.',
		imageAlt: "Destiny 2 Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Destiny 2 Cheats feature gallery',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and extract awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.',
				'Team and enemy colour coding supports Guardian raids and scav-runs. Deep-dive the <a href="/destiny-2-esp/">ESP page</a> and <a href="/destiny-2-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.destiny-2} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-raid extracts, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Destiny 2 sessions. See <a href="/destiny-2-radar-hack/">radar</a> and <a href="/destiny-2-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/destiny-2-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and BattlEye maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. BattlEye maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@warthundercheat.net.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/destiny-2-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Destiny 2 Cheats Pricing | $35/mo or $150 Life',
		description:
			'Destiny 2 cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Destiny 2 Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Destiny 2 Cheats — ESP wallhack, radar hack, and Aimbot for Destiny 2 on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Destiny 2 Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Destiny 2 Cheats package visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Destiny 2 Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with BattlEye maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Destiny 2 Cheats package — ideal if you play Destiny 2 regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after BattlEye anti-cheat or major Destiny 2 patches.',
				`Season calendars and client updates come from ${EXT.destiny-2}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/destiny-2-cheats/">Destiny 2 cheats</a>, <a href="/destiny-2-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Destiny 2 Cheats Setup | Windows PC Guide',
		description:
			'Set up Destiny 2 cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check BattlEye updates before your first queue.',
		h1: 'Destiny 2 Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Destiny 2 Cheats for Destiny 2 on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify BattlEye maintenance status before queueing.',
		imageAlt: "Destiny 2 Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Destiny 2 Cheats setup visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Destiny 2 Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest BattlEye maintenance build before launching Destiny 2.',
				`Also glance at ${EXT.status} if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.`,
				'Destiny 2 Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for Guardians, enemies, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for BattlEye module live on <a href="/destiny-2-esp/">ESP</a>, <a href="/destiny-2-aimbot/">Aimbot</a>, and <a href="/destiny-2-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/destiny-2-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Destiny 2 or BattlEye anti-cheat patches',
				'When Battlestate Games ships a major Destiny 2 update or BattlEye anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.battleye}. Our practical workflow is documented on the <a href="/updates/">BattlEye bypass page</a> and <a href="/destiny-2-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Destiny 2 Cheats Updates | BattlEye Maintenance Log',
		description:
			'Destiny 2 cheats update log: BattlEye rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Destiny 2 Cheats Updates — Maintenance Log',
		intro:
			'Track BattlEye maintenance and Destiny 2 patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Destiny 2 Cheats live status after BattlEye and game patches",
		galleryTitle: 'Destiny 2 patch and maintenance visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/destiny-2-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Destiny 2 and BattlEye anti-cheat receive frequent patches. Destiny 2 Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Battlestate Games platform health and this page for Destiny 2 Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note BattlEye anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">BattlEye bypass guide</a> and <a href="/destiny-2-cheats/">undetected Destiny 2 cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.destiny-2}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a BattlEye update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Destiny 2 Cheats FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Destiny 2 cheats FAQ: ESP boxes, soft aim, BattlEye maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Destiny 2 Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Destiny 2 Cheats — ESP wallhack, radar hack, Aimbot, BattlEye maintenance, checkout, and Destiny 2 compatibility on Windows PC.',
		imageAlt: "Destiny 2 Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Destiny 2 Cheats FAQ visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Destiny 2 Cheats?',
				'Destiny 2 Cheats is an undetected cheat package for Destiny 2 on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with BattlEye maintenance updates.',
				'Packages cover raid and scav-run. Explore <a href="/features/">Features</a> for the full control list and <a href="/destiny-2-esp/">ESP</a> / <a href="/destiny-2-aimbot/">Aimbot</a> for module detail.',
				`Destiny 2 itself is published by Battlestate Games (${EXT.destiny-2}). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.`,
			),
			section(
				'Are Destiny 2 Cheats undetected in 2026?',
				'Destiny 2 Cheats is maintained with rebuilds after BattlEye anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/destiny-2-cheats/">undetected Destiny 2 cheats</a> and the <a href="/updates/">BattlEye guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@warthundercheat.net or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Destiny 2 Cheats Support | Help & Contact',
		description:
			'Contact Destiny 2 cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Destiny 2 Cheats Support — Contact Us',
		intro:
			'Get help with Destiny 2 Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and BattlEye maintenance for Destiny 2 on Windows PC.',
		imageAlt: "Destiny 2 Cheats support page for license and setup help",
		galleryTitle: 'Destiny 2 Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after BattlEye maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Destiny 2 Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.',
				`Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. BattlEye bypass notes live on the dedicated <a href="/updates/">BattlEye anti-cheat page</a>.',
				'Email: support@warthundercheat.net',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Destiny 2 Cheats 2026 | BattlEye Maintenance',
		description:
			'Undetected Destiny 2 cheats with BattlEye maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Destiny 2 Cheats — BattlEye Maintenance',
		intro:
			'How Destiny 2 Cheats stays maintained for Destiny 2 after BattlEye anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Destiny 2 Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Destiny 2 Cheats visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'BattlEye bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Destiny 2 Cheats',
				'Undetected Destiny 2 Cheats means the package is actively maintained against BattlEye anti-cheat and major Destiny 2 patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after BattlEye security updates.',
				`Anti-cheat technology is documented by ${EXT.battleye}; Destiny 2 client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'BattlEye maintenance workflow',
				'When BattlEye anti-cheat or Destiny 2 updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">BattlEye bypass Destiny 2 guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/destiny-2-cheats/">Destiny 2 cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Destiny 2 Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Destiny 2 wallhack ESP with player boxes and loot markers for Windows PC. Undetected Destiny 2 cheats — learn overlays and buy.',
		h1: 'Destiny 2 Wallhack — ESP Boxes & Visibility',
		intro:
			'Destiny 2 wallhack ESP for Destiny 2 — see players, loot, bosses, and containers through toggleable wallhack overlays built for Guardian raids and scav-runs.',
		imageAlt: "Destiny 2 wallhack visibility through walls in a raid",
		galleryTitle: 'Destiny 2 wallhack ESP gallery',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Destiny 2 ESP page',
		ctaSecondaryHref: '/destiny-2-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Destiny 2 wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Destiny 2 Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and extract holds.',
				'For the broader ESP keyword page see <a href="/destiny-2-esp/">Destiny 2 ESP</a>; for combat assist see <a href="/destiny-2-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.destiny-2}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/destiny-2-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after BattlEye anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/destiny-2-cheats/">undetected Destiny 2 cheats</a> and <a href="/updates/">BattlEye bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/destiny-2-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Destiny 2 Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Destiny 2 radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our Destiny 2 cheats package.',
		h1: 'Destiny 2 Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Destiny 2 — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Destiny 2 2D radar overlay showing nearby threats",
		galleryTitle: 'Destiny 2 radar hack visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/destiny-2-esp/',
		sections: [
			section(
				'Why radar hack matters in Destiny 2',
				'raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Destiny 2 Cheats radar complements <a href="/destiny-2-esp/">ESP wallhack</a> markers during squad pushes and extract camp fights.',
				`Mode rules and seasonal changes come from ${EXT.destiny-2}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight extract holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/destiny-2-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/destiny-2-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive BattlEye maintenance rebuilds with the full Destiny 2 Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Destiny 2 patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/destiny-2-cheats/">undetected status</a>.',
			),
		],
	},
	'anticheat': {
		title: 'BattlEye Bypass Destiny 2 | Destiny 2 Cheats Maintenance',
		description:
			'How Destiny 2 cheats rebuild after BattlEye patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'BattlEye Bypass — Destiny 2 Cheats Maintenance',
		intro:
			'Understand BattlEye anti-cheat maintenance for Destiny 2 Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Destiny 2 security updates.',
		imageAlt: "Destiny 2 Cheats maintenance after a BattlEye patch",
		galleryTitle: 'BattlEye maintenance visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'BattlEye anti-cheat overview',
				`BattlEye anti-cheat is Battlestate Games' anti-cheat for Destiny 2 on PC (see ${EXT.battleye}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Destiny 2 Cheats monitors BattlEye patch notes and Destiny 2 seasonal updates from ${EXT.destiny-2} to schedule module reviews.`,
				'“BattlEye bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a BattlEye patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Battlestate Games service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/destiny-2-cheats/">undetected Destiny 2 cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'BattlEye bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Destiny 2 Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best Destiny 2 cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected Destiny 2 cheats with BattlEye maintenance — compare and buy.',
		h1: 'Destiny 2 Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Destiny 2 Cheats package for Destiny 2 — undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Destiny 2 Cheats product overview for Destiny 2",
		galleryTitle: 'Destiny 2 Cheats 2026 gallery',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Destiny 2 cheats buyers choose Destiny 2 Cheats in 2026',
				'2026 seasons bring new maps, weapons, and BattlEye anti-cheat updates. Destiny 2 Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.destiny-2}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/destiny-2-cheats/">Destiny 2 cheats pillar</a>, <a href="/destiny-2-esp/">ESP</a>, <a href="/destiny-2-aimbot/">Aimbot</a>, <a href="/destiny-2-esp/">wallhack</a>, <a href="/destiny-2-radar-hack/">radar</a>, <a href="/destiny-2-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/destiny-2-cheats/">Destiny 2 cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/destiny-2-cheats/">Destiny 2 cheats</a> checklist, <a href="/blog/destiny-2-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@warthundercheat.net via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Destiny 2 Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'Destiny 2 cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance. Compare Destiny 2 cheats options and buy the full package.',
		h1: 'Destiny 2 Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Destiny 2 cheats for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after BattlEye anti-cheat patches. This is the pillar guide for Destiny 2 cheats in 2026.',
		imageAlt: "Destiny 2 Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'Destiny 2 cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/destiny-2-cheats/',
		sections: [
			section(
				'What Destiny 2 cheats include in 2026',
				'Players searching for Destiny 2 cheats usually want visibility and combat tools without stacking separate downloads. Destiny 2 Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called Destiny 2 cheats.',
				'Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.destiny-2}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Destiny 2 cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/destiny-2-cheats/">Destiny 2 cheats 2026</a> and <a href="/destiny-2-cheats/">Destiny 2 cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/destiny-2-esp/">Destiny 2 ESP</a>, <a href="/destiny-2-aimbot/">Destiny 2 Aimbot</a>, <a href="/destiny-2-esp/">wallhack</a>, <a href="/destiny-2-radar-hack/">radar hack</a>, and <a href="/destiny-2-aimbot/">soft aim</a>.',
				'Blog guides expand BattlEye keyword: <a href="/blog/destiny-2-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/escape-from-destiny-2-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-destiny-2-cheats-battleye/">undetected BattlEye notes</a>.',
			),
			section(
				'Destiny 2 cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Destiny 2 Cheats maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/destiny-2-esp/">ESP</a>, <a href="/destiny-2-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/destiny-2-cheats/">mod menu</a>, <a href="/destiny-2-aimbot/">aimbot</a>, <a href="/destiny-2-esp/">ESP</a>.',
			),
			section(
				'Undetected Destiny 2 cheats with BattlEye maintenance',
				'Undetected Destiny 2 cheats require rebuilds after BattlEye anti-cheat and major Destiny 2 patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.battleye} for anti-cheat background and our <a href="/updates/">BattlEye bypass guide</a> for the practical workflow. Pair with <a href="/destiny-2-cheats/">undetected Destiny 2 cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Destiny 2 Hack Download 2026 | Instant Access',
		description:
			'Destiny 2 cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Destiny 2 Hack Download — Instant License Delivery',
		intro:
			'How Destiny 2 cheat download works for Destiny 2 — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Destiny 2 Cheats download and install delivery flow",
		galleryTitle: 'Destiny 2 cheat download visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Destiny 2 cheat download delivery works',
				'After checkout confirms payment, Destiny 2 Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Battlestate Games services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Destiny 2 cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for Guardian raids and scav-runs.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/destiny-2-esp/">ESP</a>, <a href="/destiny-2-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Destiny 2 or BattlEye anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/destiny-2-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'crucible-cheats': {
		title: 'Destiny 2 Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Destiny 2 mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected Destiny 2 cheats package.',
		h1: 'Destiny 2 Mod Menu — In-Client Control Panel',
		intro:
			'Destiny 2 mod menu controls for Destiny 2 — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Destiny 2 session on Windows PC.',
		imageAlt: "Destiny 2 Cheats in-game menu controls",
		galleryTitle: 'Destiny 2 mod menu gallery',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Destiny 2 mod menu controls',
				'A Destiny 2 mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Destiny 2 Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Destiny 2.',
				'Control deep-dives: <a href="/destiny-2-esp/">ESP</a>, <a href="/destiny-2-aimbot/">Aimbot</a>, <a href="/destiny-2-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for Guardian raids and scav-runs',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extract holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.destiny-2} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/destiny-2-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after BattlEye patches',
				'Destiny 2 mod menu behavior is rebuilt when BattlEye anti-cheat or major Destiny 2 updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">BattlEye bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'aim-assist': {
		title: 'Destiny 2 Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Destiny 2 soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our Destiny 2 cheats with ESP boxes.',
		h1: 'Destiny 2 Soft Aim — Smooth Aimbot Controls',
		intro:
			'Destiny 2 soft aim settings for Destiny 2 — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Destiny 2 soft aim FOV and smoothness settings",
		galleryTitle: 'Destiny 2 soft aim gallery',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/destiny-2-aimbot/',
		sections: [
			section(
				'What Destiny 2 soft aim means',
				'Destiny 2 soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Destiny 2 Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/destiny-2-aimbot/">Destiny 2 Aimbot</a>. Alternate wording: <a href="/destiny-2-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.destiny-2} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/destiny-2-esp/">ESP wallhack</a> and <a href="/destiny-2-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with BattlEye maintenance',
				'Aimbot modules rebuild after BattlEye anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Destiny 2 Cheats 2026 | Buyer Guide',
		description:
			'Best Destiny 2 cheats for 2026: ESP boxes, soft aim, and BattlEye maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Destiny 2 Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Destiny 2 cheats for Destiny 2 in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with BattlEye anti-cheat rebuilds and instant delivery.',
		imageAlt: "Destiny 2 Cheats overview for Destiny 2 on PC",
		galleryTitle: 'Best Destiny 2 cheats gallery',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Destiny 2 cheats in 2026',
				'The Destiny 2 cheats combine active BattlEye maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Destiny 2 Cheats covers raid and scav-run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Destiny 2 cheats feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Destiny 2 patches.',
				'Review <a href="/features/">Features</a>, <a href="/destiny-2-cheats/">undetected status</a>, and <a href="/destiny-2-cheats/">Destiny 2 cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/destiny-2-esp/">ESP</a>, <a href="/destiny-2-aimbot/">Aimbot</a>, <a href="/destiny-2-cheats/">hacks</a>.',
			),
			section(
				'Buying the Destiny 2 cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Destiny 2 Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Destiny 2 aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Destiny 2 cheats package.',
		h1: 'Destiny 2 Aimbot Hack — Soft Aim Assist',
		intro:
			'Destiny 2 aimbot hack tools for Destiny 2 — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Destiny 2 aimbot hack controls and bone priority",
		galleryTitle: 'Destiny 2 aimbot hack gallery',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/destiny-2-aimbot/',
		sections: [
			section(
				'Destiny 2 aimbot hack vs visibility tools',
				'A Destiny 2 aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Destiny 2 Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Destiny 2 combat pace across Guardian raids and scav-runs.',
				'Prefer softer tracking language? See <a href="/destiny-2-aimbot/">soft aim</a>. Full settings: <a href="/destiny-2-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid extracts.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.destiny-2} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after BattlEye anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">BattlEye bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/destiny-2-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Destiny 2 ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Destiny 2 ESP hack with player boxes and loot markers for Windows PC. Undetected Destiny 2 cheats with — see overlays and buy.',
		h1: 'Destiny 2 ESP Hack — Player Boxes Guide',
		intro:
			'Destiny 2 ESP hack overlays for Destiny 2 — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.',
		imageAlt: "Destiny 2 ESP hack boxes and loot markers",
		galleryTitle: 'Destiny 2 ESP hack gallery',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/destiny-2-esp/',
		sections: [
			section(
				'What a Destiny 2 ESP hack shows',
				'A Destiny 2 ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/destiny-2-esp/">Destiny 2 ESP</a>. Wallhack wording: <a href="/destiny-2-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for raids',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports Guardian raids and scav-runs.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with BattlEye maintenance',
				'ESP hack modules rebuild after BattlEye anti-cheat and Destiny 2 patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/destiny-2-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/destiny-2-cheats/">undetected guide</a>.',
			),
		],
	},
	'pve-cheats': {
		title: 'Destiny 2 Unlock All 2026 | What It Really Means',
		description:
			'Destiny 2 unlock all explained vs real Destiny 2 cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Destiny 2 Unlock All — What Players Search For',
		intro:
			'Destiny 2 unlock all is a common search term for Destiny 2 — this page clarifies what pve-cheats tools claim versus the ESP wallhack, radar hack, and Aimbot tools Destiny 2 Cheats actually provides on Windows PC.',
		imageAlt: "Destiny 2 Cheats license features overview",
		galleryTitle: 'Destiny 2 unlock all guide visuals',
		ctaPrimary: 'Buy Destiny 2 Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Destiny 2 unlock all usually means',
				'Destiny 2 unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Destiny 2 Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.destiny-2}. Be wary of pve-cheats downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs pve-cheats claims',
				'ESP wallhack helps you spot enemy squads, bosses, and powerful loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/destiny-2-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/destiny-2-cheats/">Destiny 2 cheats</a> and <a href="/destiny-2-cheats/">Destiny 2 cheats</a>.',
			),
			section(
				'Buying Destiny 2 Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Destiny 2 on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after BattlEye anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Destiny 2 Cheats',
		description:
			'Privacy policy for Destiny 2 Cheats. How we handle support emails, order data, and checkout for Destiny 2 cheats licenses on warthundercheat.net.',
		h1: 'Privacy Policy',
		intro: 'How Destiny 2 Cheats handles information when you browse warthundercheat.net or contact support about a Destiny 2 license.',
		imageAlt: "Destiny 2 Cheats privacy policy page",
		galleryTitle: 'Destiny 2 Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Destiny 2 Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@warthundercheat.net with your request details.',
				'Policy updates publish on this page. Continued use of warthundercheat.net after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Destiny 2 Cheats',
		description:
			'Refund policy for Destiny 2 Cheats. Digital delivery terms and eligibility for Destiny 2 cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Destiny 2 Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Destiny 2.',
		imageAlt: "Destiny 2 Cheats refund policy page",
		galleryTitle: 'Destiny 2 Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Destiny 2 Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@warthundercheat.net with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Destiny 2 Cheats Rules',
		description:
			'Terms of use for warthundercheat.net and Destiny 2 Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of warthundercheat.net and Destiny 2 Cheats licenses for Destiny 2 on Windows PC.',
		imageAlt: "Destiny 2 Cheats terms of use page",
		galleryTitle: 'Destiny 2 Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Destiny 2 Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Destiny 2 on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Destiny 2 may violate Battlestate Games terms and result in account penalties. Destiny 2 Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/destiny-2-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@warthundercheat.net for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
