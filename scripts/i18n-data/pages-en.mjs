import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Overwatch 2 Cheats | Undetected PC Hacks',
		description:
			'Official Overwatch 2 cheats for Windows PC — aimbot, ESP, wallhack, and Blizzard Anti-Cheat updates. Compare plans and buy with instant delivery.',
		h1: 'Overwatch 2 Cheats',
		intro:
			'Undetected Overwatch 2 cheats for Windows PC — ESP, tracking aimbot, and wallhack in one license with Blizzard Anti-Cheat maintenance after patches.',
		imageAlt: "Overwatch 2 Cheats homepage hero — ESP and aimbot for Overwatch 2",
		galleryTitle: 'Overwatch 2 Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Overwatch 2 Cheats',
				'Overwatch 2 rewards map awareness. Overwatch 2 Cheats combines ESP for heroes and enemies, wallhack threat cues, and configurable aimbot so you can read fights before committing in Quick Play, Competitive, and Arcade.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT['overwatch-2']} and ${EXT.anticheat}. We rebuild ESP, wallhack, and aimbot modules when those patches require maintenance — then post status on the <a href="/status/">Updates page</a>.`,
				'Licenses ship digitally after payment. Monthly ($35) and lifetime ($150) plans include Blizzard Anti-Cheat rebuilds when anti-cheat or game patches require updates.',
			),
			section(
				'ESP, wallhack, and aimbot in one license',
				'Instead of stacking separate tools, Overwatch 2 Cheats bundles player ESP, hero markers, wallhack overlays, and aimbot profiles in one package built for Quick Play and Arcade.',
				'Browse the <a href="/overwatch-2-esp/">ESP</a>, <a href="/overwatch-2-aimbot/">Aimbot</a>, and <a href="/overwatch-2-wallhack/">wallhack</a> pages for control details — or open <a href="/overwatch-2-cheats/">the product page</a> and <a href="/pricing/">Pricing</a> when you are ready to buy.',
				`Before patch days, check ${EXT.status} for service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Follow <a href="/setup/">Setup</a> after delivery and keep <a href="/faq/">FAQ</a> or <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'overwatch-2-esp': {
		title: 'Overwatch 2 ESP | Player Boxes & Wallhack',
		description:
			'Overwatch 2 ESP for Windows PC — player boxes, hero markers, and distance readouts. Part of our undetected Overwatch 2 cheats.',
		h1: 'Overwatch 2 ESP — Player Boxes & Wallhack',
		intro:
			'Player boxes, hero markers, and distance readouts for Quick Play, Competitive, and Arcade. Toggle categories so the overlay stays readable mid-match.',
		imageAlt: "Overwatch 2 ESP player boxes and distance readouts in a match",
		galleryTitle: 'Overwatch 2 ESP overlay visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Overwatch 2 wallhack guide',
		ctaSecondaryHref: '/overwatch-2-esp/',
		sections: [
			section(
				'What Overwatch 2 ESP solves in matches',
				'Overwatch 2 maps punish incomplete information. Overwatch 2 Cheats ESP wallhack helps you spot enemy squads early, spot heroes and enemies before they push your angle, and mark ult charge worth the detour.',
				'In Quick Play, Arcade, and Quick Play matches, that visibility gap is often the difference between a clean flank and a wiped team. ESP ships bundled with wallhack overlays and Aimbot in one license.',
				`Overwatch 2’s live seasons and map updates are published by Blizzard (${EXT['overwatch-2']}). When POIs or map layouts shift, ESP categories stay useful because they track players and objectives — not a single static landmark.`,
			),
			section(
				'Player, ult, and hero ESP wallhack categories',
				'Toggle enemy player outlines, ult markers, objective cues, and hero markers so only match-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Quick Play and Arcade matches alike.',
				'Pair visibility with the <a href="/overwatch-2-wallhack/">wallhack overlay</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Hero and objective markers for faster rotations',
					'Hero and objective awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Blizzard Anti-Cheat maintenance',
				'Overwatch 2 Cheats ESP wallhack is maintained for Overwatch 2 with rebuilds after Blizzard Anti-Cheat patches. Check the <a href="/status/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.anticheat} for how anti-cheat updates ship, then cross-check our <a href="/status/">Blizzard Anti-Cheat maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first match.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/overwatch-2-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? Read the <a href="/overwatch-2-cheats/">product overview</a> and <a href="/forum/buyers-guide/">buyers guide</a>.',
			),
		],
	},
	'overwatch-2-aimbot': {
		title: 'Overwatch 2 Aimbot | Tracking Aimbot for Windows PC',
		description:
			'Overwatch 2 aimbot with tracking aimbot tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our Overwatch 2 cheats package.',
		h1: 'Overwatch 2 Aimbot — Tracking Aimbot for Windows PC',
		intro:
			'Tracking aimbot with FOV, smoothness, and bone priority you can tune per weapon. Ships with ESP and wallhack in one license.',
		imageAlt: "Overwatch 2 aimbot and tracking aimbot controls on Windows PC",
		galleryTitle: 'Overwatch 2 Aimbot combat previews',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/overwatch-2-esp/',
		sections: [
			section(
				'Aimbot tuned for Overwatch 2 combat pace',
				'Overwatch 2 mixes long-range mid-range fights with close-quarters flank pushes. Overwatch 2 Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights and close-range PvP.',
				`Weapon balance and season rules change via ${EXT['overwatch-2']}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-hero Aimbot profiles',
				'Save separate Aimbot profiles for hitscan and projectile heroes, and hitscans. Switch between long-range mid-range fights and team fights without reopening menus every match.',
				'Prefer softer tracking? Read the <a href="/overwatch-2-aimbot/">tracking aimbot guide</a>.',
				'Aimbot ships alongside <a href="/overwatch-2-esp/">ESP wallhack</a> and <a href="/overwatch-2-wallhack/">wallhack overlays</a> in the same Overwatch 2 Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-hero profile slots for hitscan / projectile / flick',
				],
			),
			section(
				'Blizzard Anti-Cheat maintenance for undetected Aimbot',
				'Overwatch 2 Cheats rebuilds Aimbot behavior when Blizzard Anti-Cheat or major Overwatch 2 patches land. Maintenance notes appear on the <a href="/status/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.anticheat}, then follow our <a href="/status/">Blizzard Anti-Cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and wallhack. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Overwatch 2 Cheats Features | ESP, Tracking Aimbot & Wallhack',
		description:
			'Full Overwatch 2 cheats feature list: ESP boxes, tracking aimbot, wallhack, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Overwatch 2 Cheats Features — Full Control List',
		intro:
			'Every ESP and wallhack, and Aimbot control included in the Overwatch 2 Cheats package on Windows PC — with Blizzard Anti-Cheat maintenance after major patches.',
		imageAlt: "Overwatch 2 Cheats features — ESP, tracking aimbot, and wallhack screenshots",
		galleryTitle: 'Overwatch 2 Cheats feature gallery',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, hero and objective awareness cues, hero and objective markers, distance readouts, snaplines, and toggleable ESP categories for match-critical overlays only.',
				'Team and enemy colour coding supports Quick Play and Arcade. Deep-dive the <a href="/overwatch-2-esp/">ESP page</a> and <a href="/overwatch-2-esp/">wallhack guide</a> for category-level detail.',
				`Map and ult tracking systems evolve with ${EXT['overwatch-2']} season and content updates — toggleable ESP categories keep overlays useful when maps rotate.`,
			),
			section(
				'Wallhack and Aimbot controls',
				'wallhack overlay with directional threat cues, configurable range for rotations and late-match objectives, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-hero profiles.',
				'All tools share in-client toggles so you can adjust ESP, wallhack, and Aimbot during live Overwatch 2 sessions. See <a href="/overwatch-2-wallhack/">wallhack</a> and <a href="/overwatch-2-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/overwatch-2-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Blizzard Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Blizzard Anti-Cheat maintenance rebuilds publish on the <a href="/status/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@overwatchcheats.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/overwatch-2-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Overwatch 2 Cheats Pricing | $35/mo or $150 Life',
		description:
			'Overwatch 2 cheats pricing: $35/month or $150 lifetime for ESP, tracking aimbot, and wallhack on Windows PC. Instant delivery — pick a plan.',
		h1: 'Overwatch 2 Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Overwatch 2 Cheats — ESP and wallhack, and Aimbot for Overwatch 2 on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Overwatch 2 Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Overwatch 2 Cheats package visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Overwatch 2 Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP and wallhack, and Aimbot access with Blizzard Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Overwatch 2 Cheats package — ideal if you play Overwatch 2 regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, hero markers, wallhack overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Blizzard Anti-Cheat or major Overwatch 2 patches.',
				`Season calendars and client updates come from ${EXT['overwatch-2']}. Active licenses receive rebuild access when we publish maintenance on <a href="/status/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read the <a href="/overwatch-2-cheats/">product overview</a>, check <a href="/status/">live status</a>, and browse <a href="/faq/">FAQ</a> before checkout.',
			),
		],
	},
	setup: {
		title: 'Overwatch 2 Cheats Setup | Windows PC Guide',
		description:
			'Set up Overwatch 2 cheats on Windows PC — activate ESP boxes, tracking aimbot profiles, and wallhack. Check Blizzard Anti-Cheat updates before your first queue.',
		h1: 'Overwatch 2 Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Overwatch 2 Cheats for Overwatch 2 on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Blizzard Anti-Cheat maintenance status before queueing.',
		imageAlt: "Overwatch 2 Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Overwatch 2 Cheats setup visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Overwatch 2 Cheats',
				'Confirm your order email and license details. Check the <a href="/status/">Updates page</a> for the latest Blizzard Anti-Cheat maintenance build before launching Overwatch 2.',
				`Also glance at ${EXT.status} if Blizzard services look unstable on patch day — a platform outage is not a license fault.`,
				'Overwatch 2 Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for heroes, enemies, and ult tracking — then tune wallhack range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, wallhack, and Aimbot mid-match. Details for Blizzard Anti-Cheat module live on <a href="/overwatch-2-esp/">ESP</a>, <a href="/overwatch-2-aimbot/">Aimbot</a>, and <a href="/overwatch-2-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/overwatch-2-aimbot/">tracking aimbot</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Overwatch 2 or Blizzard Anti-Cheat patches',
				'When Blizzard ships a major Overwatch 2 update or Blizzard Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.anticheat}. Our practical workflow is documented on the <a href="/status/">Blizzard Anti-Cheat maintenance page</a> and <a href="/overwatch-2-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Overwatch 2 Cheats Updates | Blizzard Anti-Cheat Maintenance Log',
		description:
			'Overwatch 2 cheats update log: Blizzard Anti-Cheat rebuilds for ESP boxes, tracking aimbot, and wallhack on Windows PC. Check status before queueing after patches.',
		h1: 'Overwatch 2 Cheats Updates — Maintenance Log',
		intro:
			'Track Blizzard Anti-Cheat maintenance and Overwatch 2 patch rebuilds for the undetected ESP and wallhack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Overwatch 2 Cheats live status after Blizzard Anti-Cheat and game patches",
		galleryTitle: 'Overwatch 2 patch and maintenance visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Overwatch 2 and Blizzard Anti-Cheat receive frequent patches. Overwatch 2 Cheats publishes maintenance notes when ESP and wallhack, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Blizzard platform health and this page for Overwatch 2 Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on Quick Play and Arcade.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Blizzard Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, wallhack range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/status/">Blizzard Anti-Cheat maintenance guide</a> and <a href="/overwatch-2-cheats/">undetected Overwatch 2 cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT['overwatch-2']}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Blizzard Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Overwatch 2 Cheats FAQ | ESP, Tracking Aimbot & Wallhack Answers',
		description:
			'Overwatch 2 cheats FAQ: ESP boxes, tracking aimbot, Blizzard Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Overwatch 2 Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Overwatch 2 Cheats — ESP and wallhack, Aimbot, Blizzard Anti-Cheat maintenance, checkout, and Overwatch 2 compatibility on Windows PC.',
		imageAlt: "Overwatch 2 Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Overwatch 2 Cheats FAQ visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Overwatch 2 Cheats?',
				'Overwatch 2 Cheats is an undetected cheat package for Overwatch 2 on Windows PC. It includes ESP and wallhack overlays-style awareness, and Aimbot controls with Blizzard Anti-Cheat maintenance updates.',
				'Packages cover Quick Play and Arcade. Explore <a href="/features/">Features</a> for the full control list and <a href="/overwatch-2-esp/">ESP</a> / <a href="/overwatch-2-aimbot/">Aimbot</a> for module detail.',
				`Overwatch 2 itself is published by Blizzard (${EXT['overwatch-2']}). Cheats are third-party tools and may violate Blizzard's rules — use is at your own risk.`,
			),
			section(
				'Are Overwatch 2 Cheats undetected in 2026?',
				'Overwatch 2 Cheats is maintained with rebuilds after Blizzard Anti-Cheat and game patches. Check the <a href="/status/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/overwatch-2-cheats/">undetected Overwatch 2 cheats</a> and the <a href="/status/">Blizzard Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@overwatchcheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Overwatch 2 Cheats Support | Help & Contact',
		description:
			'Contact Overwatch 2 cheats support for licenses, ESP setup, tracking aimbot profiles, and wallhack on Windows PC. Include your order ID for faster help.',
		h1: 'Overwatch 2 Cheats Support — Contact Us',
		intro:
			'Get help with Overwatch 2 Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Blizzard Anti-Cheat maintenance for Overwatch 2 on Windows PC.',
		imageAlt: "Overwatch 2 Cheats support page for license and setup help",
		galleryTitle: 'Overwatch 2 Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Blizzard Anti-Cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/status/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Overwatch 2 Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Blizzard bans.',
				`Account and game policy questions belong with Blizzard. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Blizzard Anti-Cheat maintenance notes live on the dedicated <a href="/status/">Blizzard Anti-Cheat page</a>.',
				'Email: support@overwatchcheats.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Overwatch 2 Cheats | Blizzard Anti-Cheat Maintenance',
		description:
			'Undetected Overwatch 2 cheats with Blizzard Anti-Cheat maintenance for ESP boxes, tracking aimbot, and wallhack on Windows PC. Check status before you queue.',
		h1: 'Undetected Overwatch 2 Cheats — Blizzard Anti-Cheat Maintenance',
		intro:
			'How Overwatch 2 Cheats stays maintained for Overwatch 2 after Blizzard Anti-Cheat patches — ESP and wallhack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Overwatch 2 Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Overwatch 2 Cheats visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Blizzard Anti-Cheat maintenance guide',
		ctaSecondaryHref: '/status/',
		sections: [
			section(
				'What undetected means for Overwatch 2 Cheats',
				'Undetected Overwatch 2 Cheats means the package is actively maintained against Blizzard Anti-Cheat and major Overwatch 2 patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, wallhack behavior, and Aimbot signatures after Blizzard Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.anticheat}; Overwatch 2 client updates ship through ${EXT['overwatch-2']}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Blizzard Anti-Cheat maintenance workflow',
				'When Blizzard Anti-Cheat or Overwatch 2 updates ship, the team assesses ESP, wallhack, and Aimbot modules, publishes status on the <a href="/status/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/status/">Blizzard Anti-Cheat maintenance Overwatch 2 guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should read the <a href="/overwatch-2-cheats/">product overview</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Overwatch 2 Wallhack | ESP Boxes & Visibility',
		description:
			'Overwatch 2 wallhack ESP with player boxes and hero markers for Windows PC. Undetected Overwatch 2 cheats — learn overlays and buy.',
		h1: 'Overwatch 2 Wallhack — ESP Boxes & Visibility',
		intro:
			'Overwatch 2 wallhack ESP — see players, hero markers, and objectives through toggleable wallhack overlays built for Quick Play and Arcade.',
		imageAlt: "Overwatch 2 wallhack visibility through walls in a match",
		galleryTitle: 'Overwatch 2 wallhack ESP gallery',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Overwatch 2 ESP page',
		ctaSecondaryHref: '/overwatch-2-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Overwatch 2 wallhack focuses on information — player outlines, hero markers, ult threat cues — rather than automatic aiming. Overwatch 2 Cheats bundles wallhack ESP with optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and objective pushes.',
				'For the broader ESP keyword page see <a href="/overwatch-2-esp/">Overwatch 2 ESP</a>; for combat assist see <a href="/overwatch-2-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support match, Arcade, and competitive matches with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT['overwatch-2']}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/overwatch-2-wallhack/">wallhack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Blizzard Anti-Cheat patches. Follow the <a href="/status/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Follow <a href="/status/">Updates</a> for Blizzard Anti-Cheat maintenance notes.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/overwatch-2-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Overwatch 2 Wallhack | 2D Threat Overlay',
		description:
			'Overwatch 2 wallhack for flank awareness on Windows PC. Bundled with ESP boxes, tracking aimbot, and wallhack in our Overwatch 2 cheats package.',
		h1: 'Overwatch 2 Wallhack — 2D Threat Awareness',
		intro:
			'wallhack overlays-style overlay for Overwatch 2 — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Overwatch 2 wallhack overlay showing nearby threats",
		galleryTitle: 'Overwatch 2 wallhack visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/overwatch-2-esp/',
		sections: [
			section(
				'Why wallhack matters in Overwatch 2',
				'team fights happen in three dimensions — rooftops, windows, and flanks. A wallhack overlay shows nearby player threats outside direct line of sight so you can reposition before a flank.',
				'Overwatch 2 Cheats wallhack complements <a href="/overwatch-2-esp/">ESP</a> markers during team pushes and objective fights.',
				`Mode rules and seasonal changes come from ${EXT['overwatch-2']}. Wallhack range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable wallhack range',
				'Adjust wallhack range for early rotations versus tight objective pushes. Directional cues highlight flanks during building clears and flank pushes across Quick Play and Arcade.',
				'Toggle wallhack alongside ESP and Aimbot with in-client hotkeys — see <a href="/features/">Features</a> for the control list.',
				'Combat follow-up lives on <a href="/overwatch-2-aimbot/">Aimbot</a> when you convert wallhack info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Wallhack modules receive Blizzard Anti-Cheat maintenance rebuilds with the full Overwatch 2 Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/status/">Updates</a> after major Overwatch 2 patches before relying on previous wallhack configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/status/">live status</a>.',
			),
		],
	},
	'anticheat': {
		title: 'Blizzard Anti-Cheat Bypass Overwatch 2 | Overwatch 2 Cheats Maintenance',
		description:
			'How Overwatch 2 cheats rebuild after Blizzard Anti-Cheat patches — ESP boxes, tracking aimbot, and wallhack maintenance for Windows PC. Read before queueing.',
		h1: 'Blizzard Anti-Cheat Bypass — Overwatch 2 Cheats Maintenance',
		intro:
			'Understand Blizzard Anti-Cheat maintenance for Overwatch 2 Cheats — how ESP and wallhack, and Aimbot rebuild after Overwatch 2 security updates.',
		imageAlt: "Overwatch 2 Cheats maintenance after a Blizzard Anti-Cheat patch",
		galleryTitle: 'Blizzard Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/status/',
		sections: [
			section(
				'Blizzard Anti-Cheat overview',
				`${EXT.anticheat} protects Overwatch 2 on PC. Security updates can affect ESP, wallhack, and aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Overwatch 2 Cheats monitors Blizzard Anti-Cheat patch notes and Overwatch 2 seasonal updates from ${EXT['overwatch-2']} to schedule module reviews.`,
				'“Blizzard Anti-Cheat maintenance” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Blizzard Anti-Cheat patch',
				'The team tests ESP overlays, wallhack signatures, and Aimbot profiles against the new build, publishes status on <a href="/status/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Blizzard service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/overwatch-2-cheats/">undetected Overwatch 2 cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Blizzard Anti-Cheat maintenance in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Overwatch 2 Cheats | ESP Tracking Aimbot & Wallhack',
		description:
			'Best Overwatch 2 cheats 2026: ESP boxes, tracking aimbot, and wallhack for Windows PC. Undetected Overwatch 2 cheats with Blizzard Anti-Cheat maintenance — compare and buy.',
		h1: 'Overwatch 2 Cheats 2026 — ESP, Tracking Aimbot & Wallhack',
		intro:
			'The 2026 Overwatch 2 Cheats package for Overwatch 2 — undetected ESP and wallhack, and Aimbot with Blizzard Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Overwatch 2 Cheats product overview for Overwatch 2",
		galleryTitle: 'Overwatch 2 Cheats 2026 gallery',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Overwatch 2 cheats buyers choose Overwatch 2 Cheats in 2026',
				'2026 seasons bring new maps, weapons, and Blizzard Anti-Cheat updates. Overwatch 2 Cheats bundles ESP and wallhack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT['overwatch-2']}, then use our <a href="/status/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover Quick Play and Arcade loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, hero markers, wallhack overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Module pages: <a href="/overwatch-2-esp/">ESP</a>, <a href="/overwatch-2-aimbot/">Aimbot</a>, <a href="/overwatch-2-wallhack/">wallhack</a>, and <a href="/status/">live status</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/overwatch-2-cheats/">Overwatch 2 cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also read the <a href="/forum/cheats-2026-updates/">season updates post</a> and <a href="/faq/">FAQ</a> before checkout.',
				'Support is available at support@overwatchcheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Buy Overwatch 2 Cheats | Windows PC License',
		description:
			'Purchase undetected Overwatch 2 cheats for Windows PC — ESP, aimbot, wallhack, and Blizzard Anti-Cheat rebuilds. Monthly and lifetime plans with instant delivery.',
		h1: 'Buy Overwatch 2 Cheats',
		intro:
			'Overwatch 2 Cheats for Windows PC — ESP, tracking aimbot, and wallhack in one license with Blizzard Anti-Cheat rebuilds after patches.',
		imageAlt: "Overwatch 2 Cheats product page — ESP, aimbot, and wallhack",
		galleryTitle: 'Overwatch 2 cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What you get',
				'One license for Overwatch 2 on Windows PC — built for Quick Play, Competitive, and Arcade modes.',
				'The stack includes ESP with distance readouts, tracking aimbot profiles, wallhack overlays for flanks, and Blizzard Anti-Cheat rebuilds after patches.',
				'Monthly ($35) and lifetime ($150) plans unlock the same features after checkout.',
			),
			section(
				'Built for Overwatch 2 matchs',
				'Read heroes and enemies before you push, mark objectives worth pushing, and stay aware of flanks. Tune tracking aimbot per hero role for Quick Play, Competitive, and hero matchups.',
				'Module guides: <a href="/overwatch-2-esp/">ESP</a>, <a href="/overwatch-2-aimbot/">Aimbot</a>, and <a href="/overwatch-2-wallhack/">wallhack</a>. Research posts: <a href="/forum/buyers-guide/">buyers guide</a> and <a href="/forum/undetected-blizzard-anticheat/">Blizzard Anti-Cheat notes</a>.',
				`Official game updates come from ${EXT['overwatch-2']}; maintenance notes publish on the <a href="/status/">Updates page</a>. Cross-check ${EXT.status} before patch-day queues.`,
			),
			section(
				'How to start',
				'Buy a plan, get your license by email, then follow setup. Check status after every major patch.',
				'Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a>, and read <a href="/faq/">FAQ</a> if you need delivery or license help.',
				'No cheat stays undetected forever — check status first, then play with conservative settings.',
			),
		],
	},
	'cheat-download': {
		title: 'Overwatch 2 Hack Download | Instant Access',
		description:
			'Overwatch 2 cheat download with instant license delivery — ESP boxes, tracking aimbot, and wallhack for Windows PC. Buy, activate, and play.',
		h1: 'Overwatch 2 Hack Download — Instant License Delivery',
		intro:
			'How Overwatch 2 cheat download works for Overwatch 2 — digital license delivery after payment confirmation, with ESP and wallhack, and Aimbot access on Windows PC.',
		imageAlt: "Overwatch 2 Cheats download and install delivery flow",
		galleryTitle: 'Overwatch 2 cheat download visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Overwatch 2 cheat download delivery works',
				'After checkout confirms payment, Overwatch 2 Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Blizzard services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Overwatch 2 cheat download includes player ESP wallhack, hero and objective markers, wallhack overlays, Aimbot profiles, and in-client toggles for Quick Play and Arcade.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/overwatch-2-esp/">ESP</a>, <a href="/overwatch-2-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Overwatch 2 or Blizzard Anti-Cheat patches ship, check the <a href="/status/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Check <a href="/status/">live status</a> so you know when a build is ready after a patch.',
			),
		],
	},
	'crucible-cheats': {
		title: 'Overwatch 2 Mod Menu | ESP & Tracking Aimbot Toggles',
		description:
			'Overwatch 2 mod menu for in-match toggles — ESP boxes, tracking aimbot, wallhack, and on Windows PC. Undetected Overwatch 2 cheats package.',
		h1: 'Overwatch 2 Mod Menu — In-Client Control Panel',
		intro:
			'Overwatch 2 mod menu controls for Overwatch 2 — toggle ESP wallhack categories, wallhack range, and Aimbot profiles mid-match without leaving your Overwatch 2 session on Windows PC.',
		imageAlt: "Overwatch 2 Cheats in-game menu controls",
		galleryTitle: 'Overwatch 2 mod menu gallery',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Overwatch 2 mod menu controls',
				'A Overwatch 2 mod menu is the in-client panel where you enable ESP wallhack overlays, adjust wallhack range, and switch Aimbot profiles during live matches. Overwatch 2 Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, hero markers, ult cues, and per-hero Aimbot settings without alt-tabbing out of Overwatch 2.',
				'Control deep-dives: <a href="/overwatch-2-esp/">ESP</a>, <a href="/overwatch-2-aimbot/">Aimbot</a>, <a href="/overwatch-2-wallhack/">wallhack</a>.',
			),
			section(
				'Mod menu categories for Quick Play and Arcade',
				'Separate ESP wallhack categories for players, hero markers, objectives, and objectives let you reduce overlay noise during rotations and objective pushes.',
				`Wallhack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT['overwatch-2']} seasons change fight distances and mobility.`,
				'Soft tracking players should start with <a href="/overwatch-2-aimbot/">tracking aimbot</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Blizzard Anti-Cheat patches',
				'Overwatch 2 mod menu behavior is rebuilt when Blizzard Anti-Cheat or major Overwatch 2 updates land. Follow the <a href="/status/">Updates page</a> and <a href="/status/">Blizzard Anti-Cheat maintenance guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'aim-assist': {
		title: 'Overwatch 2 Tracking Aimbot | Smooth Aimbot Settings',
		description:
			'Overwatch 2 tracking aimbot settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our Overwatch 2 cheats with ESP boxes.',
		h1: 'Overwatch 2 Tracking Aimbot — Smooth Aimbot Controls',
		intro:
			'Overwatch 2 tracking aimbot settings for Overwatch 2 — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and wallhack in one undetected license.',
		imageAlt: "Overwatch 2 tracking aimbot FOV and smoothness settings",
		galleryTitle: 'Overwatch 2 tracking aimbot gallery',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/overwatch-2-aimbot/',
		sections: [
			section(
				'What Overwatch 2 tracking aimbot means',
				'Overwatch 2 tracking aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Overwatch 2 Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in Quick Play firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/overwatch-2-aimbot/">Overwatch 2 Aimbot</a>. Alternate wording: <a href="/overwatch-2-aimbot/">aimbot hack</a>.',
			),
			section(
				'Tracking aimbot profiles per hero role',
				'Save separate tracking aimbot profiles for hitscan and projectile heroes, and hitscans. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT['overwatch-2']} balance patches — retune smoothness after major combat updates.`,
				'Tracking aimbot ships alongside <a href="/overwatch-2-esp/">ESP wallhack</a> and <a href="/overwatch-2-wallhack/">wallhack overlays</a> overlays.',
			),
			section(
				'Undetected tracking aimbot with Blizzard Anti-Cheat maintenance',
				'Aimbot modules rebuild after Blizzard Anti-Cheat patches. Check the <a href="/status/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Overwatch 2 Cheats | Buyer Guide',
		description:
			'Best Overwatch 2 cheats for 2026: ESP boxes, tracking aimbot, and Blizzard Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Overwatch 2 Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Overwatch 2 cheats for Overwatch 2 in 2026 — undetected ESP and wallhack, and Aimbot in one maintained package with Blizzard Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "Overwatch 2 Cheats overview for Overwatch 2 on PC",
		galleryTitle: 'Best Overwatch 2 cheats gallery',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Overwatch 2 cheats in 2026',
				'The Overwatch 2 cheats combine active Blizzard Anti-Cheat maintenance, a full ESP wallhack and wallhack stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Overwatch 2 Cheats covers Quick Play and Arcade with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/status/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Overwatch 2 cheats feature checklist',
				'Look for player ESP wallhack, hero markers, wallhack overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Overwatch 2 patches.',
				'Review <a href="/features/">Features</a>, <a href="/status/">live status</a>, and <a href="/pricing/">Pricing</a> before checkout.',
				'Open the <a href="/overwatch-2-esp/">ESP</a> and <a href="/overwatch-2-aimbot/">Aimbot</a> guides for module details.',
			),
			section(
				'Buying the Overwatch 2 cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Blizzard terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Overwatch 2 Aimbot Hack | Tracking Aimbot Assist',
		description:
			'Overwatch 2 aimbot hack with tracking aimbot for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Overwatch 2 cheats package.',
		h1: 'Overwatch 2 Aimbot Hack — Tracking Aimbot Assist',
		intro:
			'Overwatch 2 aimbot hack tools for Overwatch 2 — smoothness, FOV, bone priority, per-hero profiles, and hotkey toggles bundled with ESP wallhack and wallhack in one undetected license.',
		imageAlt: "Overwatch 2 aimbot hack controls and bone priority",
		galleryTitle: 'Overwatch 2 aimbot hack gallery',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/overwatch-2-aimbot/',
		sections: [
			section(
				'Overwatch 2 aimbot hack vs visibility tools',
				'A Overwatch 2 aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and wallhack handle map awareness. Overwatch 2 Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Overwatch 2 combat pace across Quick Play and Arcade.',
				'Prefer softer tracking language? See <a href="/overwatch-2-aimbot/">tracking aimbot</a>. Full settings: <a href="/overwatch-2-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-match objectives.',
				'Per-hero profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT['overwatch-2']} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Blizzard Anti-Cheat updates. Follow the <a href="/status/">Updates page</a> and <a href="/status/">Blizzard Anti-Cheat maintenance guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/overwatch-2-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Overwatch 2 ESP Hack | Player Boxes & Heroes',
		description:
			'Overwatch 2 ESP hack with player boxes and hero markers for Windows PC. Undetected Overwatch 2 cheats with — see overlays and buy.',
		h1: 'Overwatch 2 ESP Hack — Player Boxes Guide',
		intro:
			'Overwatch 2 ESP hack overlays for Overwatch 2 — player outlines, ult threat cues, hero and objective markers with distance readouts across Quick Play and Arcade.',
		imageAlt: "Overwatch 2 ESP hack boxes and hero markers",
		galleryTitle: 'Overwatch 2 ESP hack gallery',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/overwatch-2-esp/',
		sections: [
			section(
				'What a Overwatch 2 ESP hack shows',
				'A Overwatch 2 ESP hack renders enemy player outlines, vehicle positions, and hero markers through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during team pushes and cleanup scenarios.',
				'Canonical visibility guide: <a href="/overwatch-2-esp/">Overwatch 2 ESP</a>. Wallhack wording: <a href="/overwatch-2-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for matches',
				'Toggle player ESP hack, hero markers, hero markers, and ult cues independently so only match-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports Quick Play and Arcade.',
				`Map and hero changes publish through ${EXT['overwatch-2']} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Blizzard Anti-Cheat maintenance',
				'ESP hack modules rebuild after Blizzard Anti-Cheat and Overwatch 2 patches. Check the <a href="/status/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/overwatch-2-wallhack/">wallhack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/status/">live status</a>.',
			),
		],
	},
	'pve-cheats': {
		title: 'Overwatch 2 Unlock All | What It Really Means',
		description:
			'Overwatch 2 unlock all explained vs real Overwatch 2 cheats — ESP boxes, tracking aimbot, and wallhack for Windows PC. Know what you are buying.',
		h1: 'Overwatch 2 Unlock All — What Players Search For',
		intro:
			'Overwatch 2 unlock all is a common search term for Overwatch 2 — this page clarifies what pve-cheats tools claim versus the ESP and wallhack, and Aimbot tools Overwatch 2 Cheats actually provides on Windows PC.',
		imageAlt: "Overwatch 2 Cheats license features overview",
		galleryTitle: 'Overwatch 2 unlock all guide visuals',
		ctaPrimary: 'Buy Overwatch 2 Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Overwatch 2 unlock all usually means',
				'Overwatch 2 unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Overwatch 2 Cheats focuses on in-match awareness — player ESP, hero markers, wallhack overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and seasonal progression items are sold through ${EXT['overwatch-2']}. Be wary of cheat downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs pve-cheats claims',
				'ESP wallhack helps you spot enemy squads, objectives, and ult charge during live matches. Wallhack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, hero and objective markers speed map rotations — see the <a href="/overwatch-2-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'See the <a href="/overwatch-2-cheats/">product overview</a> for the full stack.',
			),
			section(
				'Buying Overwatch 2 Cheats for the right reasons',
				'If you need undetected ESP and wallhack, and Aimbot for Overwatch 2 on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/status/">Updates page</a> after Blizzard Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Overwatch 2 Cheats',
		description:
			'Privacy policy for Overwatch 2 Cheats. How we handle support emails, order data, and checkout for Overwatch 2 cheats licenses on overwatchcheats.org.',
		h1: 'Privacy Policy',
		intro: 'How Overwatch 2 Cheats handles information when you browse overwatchcheats.org or contact support about a Overwatch 2 license.',
		imageAlt: "Overwatch 2 Cheats privacy policy page",
		galleryTitle: 'Overwatch 2 Cheats legal resources',
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
				'Analytics may use aggregated traffic data without identifying individual Overwatch 2 Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@overwatchcheats.org with your request details.',
				'Policy updates publish on this page. Continued use of overwatchcheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Overwatch 2 Cheats',
		description:
			'Refund policy for Overwatch 2 Cheats. Digital delivery terms and eligibility for Overwatch 2 cheats packages with ESP, tracking aimbot, and wallhack.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Overwatch 2 Cheats licenses — ESP and wallhack, and Aimbot packages purchased through checkout for Overwatch 2.',
		imageAlt: "Overwatch 2 Cheats refund policy page",
		galleryTitle: 'Overwatch 2 Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Overwatch 2 Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@overwatchcheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use | Overwatch 2 Cheats Rules',
		description:
			'Terms of use for overwatchcheats.org and Overwatch 2 Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of overwatchcheats.org and Overwatch 2 Cheats licenses for Overwatch 2 on Windows PC.',
		imageAlt: "Overwatch 2 Cheats terms of use page",
		galleryTitle: 'Overwatch 2 Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Overwatch 2 Cheats you agree to these terms. Licenses grant personal use of ESP and wallhack, and Aimbot tools for Overwatch 2 on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Overwatch 2 may violate Blizzard terms and result in account penalties. Overwatch 2 Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/overwatch-2-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@overwatchcheats.org for questions. Related policies: <a href="/privacy/">Privacy</a> and <a href="/refund/">Refunds</a>.',
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
