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
		intro:
			'Everything included in one {brand} license for {game} on Windows PC — combat assist, visual ESP, hero scripts, and quality-of-life tools. Monthly and lifetime plans unlock the same feature set; compare options on the <a href="/pricing/">store</a> before checkout.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: p.pricing,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Features: Aimbot & targeting',
				paragraphs: [
					'Tracking, flickbot, and triggerbot with prediction and gravity prediction for every hero. Use them together or enable only what fits your role.',
					'Tune FOV adjustment, hitbox scaling, flick speed, tracking speed, and tracking acceleration to match your play style. Dynamic FOV and separate FOVs keep assist inside the angle you expect.',
					'Deep-dive controls live on the <a href="/overwatch-2-aimbot/">aimbot guide</a>. The full package overview is on <a href="/overwatch-2-cheats/">Overwatch 2 cheats</a>.',
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
					'Full visual ESP suite with player info, skeleton, glow, and ult charge overlay. Toggle categories so Quick Play and Competitive stays readable.',
					'Choose 2D box, 3D box, cornered box, or lines — plus draw FOV and target highlighting for every setting. Team and enemy colour coding helps during objective fights.',
					'See the <a href="/overwatch-2-esp/">ESP guide</a> for overlay tuning and the <a href="/overwatch-2-wallhack/">wallhack guide</a> for flank-focused visuals.',
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
					'Hero-specific options and automated combos for the most played heroes in Overwatch 2. Scripts sit beside aimbot and ESP — one license, no extra modules.',
					'Global auto-melee plus dedicated scripts for Genji, Tracer, Roadhog, Sojourn, Reaper, Mei, Widowmaker, Zarya, Doomfist, and Hanzo.',
					'Questions about what ships in the box? Read <a href="/faq/hero-scripts-included/">hero scripts FAQ</a> or open the <a href="/faq/">FAQ hub</a>.',
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
				h2: 'License extras, updates, and proof',
				paragraphs: [
					'Stream-proof rendering, change ingame FOV, automatic config saving with swapping, and a target-allies toggle are included. Save profiles per hero or play style and swap with hotkeys.',
					'We rebuild after big {game} or {antiCheat} patches — check <a href="/status/">Status</a> before you queue. New buyers should follow the <a href="/setup/">setup guide</a> right after delivery.',
					'Licenses deliver digitally through checkout; timing can vary by payment method. See <a href="/faq/license-delivery/">license delivery FAQ</a> for details.',
					'Want social proof before you buy? Browse <a href="/reviews/">buyer reviews</a> (ESP, aimbot, and setup feedback) or read the <a href="/forum/buyers-guide/">buyers guide</a> on the forum.',
				],
				list: [
					'Streamproof mode',
					'Change ingame FOV',
					'Automatic config saving + swapping',
					'Target allies toggle',
					'<a href="/support/">Email support</a> with your order ID',
				],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro:
			'Compare monthly and lifetime plans for {brand} on Windows PC. Both unlock the same aimbot, ESP, wallhack overlays, and hero scripts — pick the billing that fits how long you play. Open the store page when you are ready to checkout.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: p.setup,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What every plan includes',
				paragraphs: [
					'You are buying one full license, not separate modules. Tracking aimbot, flickbot, triggerbot, bone targeting, prediction, and FOV tools ship with the same download as ESP, skeleton, glow, boxes, and stream-proof visuals.',
					'Hero scripts, config save slots, hotkeys, and patch rebuilds while your plan is active are included too. See the complete control list on <a href="/features/">Features</a> or the <a href="/overwatch-2-cheats/">product overview</a>.',
					'Module guides: <a href="/overwatch-2-esp/">ESP</a>, <a href="/overwatch-2-aimbot/">aimbot</a>, and <a href="/overwatch-2-wallhack/">wallhack</a>.',
				],
				list: [
					'Tracking aimbot, flickbot & triggerbot',
					'Full ESP suite & hero scripts',
					'Stream-proof mode & config swapping',
					'{antiCheat} maintenance while active',
					'Windows 10 and 11 support',
				],
			},
			{
				h2: 'Monthly vs lifetime pricing',
				paragraphs: [
					'Monthly is $35 USD for 30 days — good if you want to test the package for a season or two before committing long term.',
					'Lifetime is $150 USD one-time — same feature set, no renewal date. You still need to check <a href="/status/">Status</a> after major patches so you run the latest build.',
					'Prices are in USD at checkout. Use the Buy now button above when you are ready; delivery is digital after payment clears.',
				],
				list: [
					'Monthly — $35 / 30 days, full package',
					'Lifetime — $150 one-time, full package',
					'Same features on both plans',
				],
			},
			{
				h2: 'Checkout, delivery, and activation',
				paragraphs: [
					'After checkout you receive license details by email. Timing can vary by payment method or order review — keep your confirmation handy.',
					'Read <a href="/faq/license-delivery/">how licenses are delivered</a> and the <a href="/faq/">FAQ hub</a> for common setup questions.',
					'New buyers should open the <a href="/setup/">setup guide</a> first launch: install, activate, tune ESP and aimbot in a custom game, then queue when <a href="/status/">Status</a> shows online.',
				],
			},
			{
				h2: 'Refunds, proof, and support',
				paragraphs: [
					'Read the <a href="/refund/">refund policy</a> before you pay if chargebacks or eligibility matter to you.',
					'Want buyer feedback first? Browse <a href="/reviews/">reviews</a> for ESP, aimbot, and setup notes, or the <a href="/forum/buyers-guide/">buyers guide</a> thread.',
					'Stuck after purchase? Email support from <a href="/support/">Support</a> with your order ID and a short description — faster replies when details are complete.',
				],
				list: [
					'<a href="/refund/">Refund policy</a>',
					'<a href="/faq/buy-undetected-pc/">Buying on PC FAQ</a>',
					'<a href="/support/">Contact support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro:
			'Live patch notes for {brand} on Windows PC. Check this page after {game} or {antiCheat} updates before you queue Quick Play or Competitive.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Overwatch 2 Cheats overview',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of Sep 2026 the package is online for Overwatch 2 on Windows PC. We post a new note here when a game or Blizzard Anti-Cheat patch needs a rebuild.',
					'If the build is green, you can queue Quick Play or Competitive. If we are rebuilding, wait for the next note before you launch.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — read the note first, then play',
				],
			},
			{
				h2: 'What this status page covers',
				paragraphs: [
					'This status page tracks loader availability, rebuild progress, and known issues after Blizzard Anti-Cheat or seasonal patches — not individual account outcomes in {game}.',
					'When maintenance finishes we update the note at the top. Active monthly and lifetime plans receive the same rebuild; you do not buy a separate patch pass.',
					'If something looks outdated, refresh the page and compare the date in the latest note with the patch you installed on Battle.net or Steam.',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Check the note first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Buy Overwatch 2 Cheats',
		intro:
			'{brand} is one Windows PC license for {game} — aimbot, ESP, wallhack overlays, hero scripts, and stream-proof visuals. Use this page as the product hub, then open module guides or the store when you are ready to buy.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: p.features,
		galleryTitle: 'In-match look',
		sections: [
			{
				h2: 'Buy: What one license includes',
				paragraphs: [
					'You are not stacking separate products. Tracking aimbot, flickbot, triggerbot, prediction, bone targeting, and FOV tools ship in the same build as ESP boxes, skeleton lines, glow, ult charge overlay, and wallhack-style draw FOV cues.',
					'Hero scripts cover high-impact kits — Genji, Tracer, Roadhog, Sojourn, Reaper, Mei, Widowmaker, Zarya, Doomfist, Hanzo, and more — plus global auto-melee and config save slots.',
					'The complete control list is on <a href="/features/">Features</a>. Quick answers live in the <a href="/faq/what-are-overwatch-2-cheats/">what is {brand}</a> FAQ entry.',
				],
				list: [
					'Tracking aimbot, flickbot & triggerbot',
					'Full ESP with skeleton, glow & boxes',
					'Hero scripts for Genji, Tracer & more',
					'Stream-proof mode & hotkey toggles',
					'{antiCheat} rebuilds while your plan is active',
				],
			},
			{
				h2: 'Module guides for Overwatch 2',
				paragraphs: [
					'Each major feature has its own page so you can research before checkout. ESP covers player info and readability; aimbot covers tracking and flick settings; wallhack covers FOV rings, glow, and off-screen emphasis.',
					'Works in Quick Play, Competitive, Arcade, and Custom Games on Windows 10 and 11. Tune in a custom lobby before ranked — see <a href="/setup/">setup</a> for the first-launch checklist.',
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
				h2: 'Plans, delivery, and checkout',
				paragraphs: [
					'Monthly is $35 USD for 30 days. Lifetime is $150 USD one-time. Both unlock the same package — pick monthly to try the build, or lifetime if you already know you will main {game} for multiple seasons.',
					'Checkout is on the <a href="/pricing/">store</a> with instant digital delivery after payment clears. Read <a href="/faq/license-delivery/">license delivery FAQ</a> if the email is slow, and <a href="/refund/">refund policy</a> before you dispute a charge.',
					'Checkout runs on our external payment partner after you click Buy now.',
				],
			},
			{
				h2: 'Proof, patches, and support',
				paragraphs: [
					'Browse <a href="/reviews/">buyer reviews</a> for ESP, aimbot, and setup feedback, or read the <a href="/forum/buyers-guide/">buyers guide</a> thread before you compare other shops.',
					'No cheat stays safe through every patch forever. Check <a href="/status/">Status</a> after {game} or {antiCheat} updates and read <a href="/faq/blizzard-anticheat-and-cheats/">anti-cheat FAQ</a> for how maintenance works.',
					'Need help after purchase? Start with <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> — include your order ID and the step that failed.',
				],
			},
		],
	}),
	'overwatch-2-esp': page({
		title: 'Overwatch 2 ESP | {brand}',
		description:
			'Overwatch 2 ESP for Windows PC — player info, skeleton ESP, glow, 2D and 3D boxes, ult charge overlay, and stream-proof visuals in one license.',
		h1: 'ESP',
		intro:
			'Overwatch 2 ESP shows heroes and enemies through walls so you can read fights before you commit. It ships inside the same {brand} license as aimbot, wallhack overlays, and hero scripts on Windows PC.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Overwatch 2 Cheats overview',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'What Overwatch 2 ESP does',
				paragraphs: [
					'ESP (extra sensory perception) draws match information on top of the game. You see player positions, health cues, and ult charge even when a target is behind cover or off your screen edge.',
					'That matters on payload, control, and push maps where one flank can delete your back line. ESP does not replace map knowledge — it gives you faster reads so rotations and peeks line up with what is actually on the field.',
					'Everything on this page is part of {brand}. You do not buy ESP as a separate module. Open the <a href="/overwatch-2-cheats/">product overview</a> or <a href="/features/">feature list</a> if you want the full package scope.',
				],
			},
			{
				h2: 'Visual layers and controls',
				paragraphs: [
					'Turn categories on or off so the overlay stays readable in Quick Play, Competitive, and Arcade. Use lighter settings for long sessions and add skeleton or glow only when you need extra detail.',
					'Distance readouts, snaplines, and enemy view angle help you judge when to hold an angle versus swing. Pair boxes with the <a href="/overwatch-2-wallhack/">wallhack guide</a> when you want emphasis on threats outside your FOV.',
				],
				list: [
					'Player info, skeleton ESP, and ult charge overlay',
					'2D box, 3D box, cornered box, lines, and glow modes',
					'Draw FOV, target highlighting, and team or enemy colour coding',
					'Stream-proof rendering for capture setups',
					'Per-setting visual options so you can reduce clutter mid-match',
				],
			},
			{
				h2: 'Modes, maps, and maintenance',
				paragraphs: [
					'ESP works in Quick Play, Competitive, Arcade, and Custom Games on Windows 10 and 11. Toggle fewer categories in chaotic Arcade modes; add ult and hero markers when you need objective awareness in Competitive.',
					'{brand} is rebuilt after major {game} and {antiCheat} updates. Check <a href="/status/">Status</a> before you queue — no cheat stays safe forever without maintenance and sensible in-game settings.',
					'After purchase, follow the <a href="/setup/">setup guide</a> to load your license, save configs, and test overlays in a custom game before ranked.',
				],
			},
			{
				h2: 'Buy, combine with aimbot, get help',
				paragraphs: [
					'ESP wins information; <a href="/overwatch-2-aimbot/">aimbot</a> handles tracking, flickbot, and triggerbot when you want both in one license. Compare <a href="/pricing/">monthly and lifetime plans</a> on the store page.',
					'Questions about delivery or activation? Read the <a href="/faq/">FAQ</a> or email support from the <a href="/support/">Support</a> page with your order details.',
					'Still comparing shops? See <a href="/reviews/">buyer reviews</a> and the <a href="/forum/buyers-guide/">buyers guide</a> on the forum, then return here to tune ESP before your next match.',
				],
			},
		],
	}),
	'overwatch-2-aimbot': page({
		title: 'Overwatch 2 Aimbot | {brand}',
		description:
			'Overwatch 2 aimbot for Windows PC — tracking, flickbot, triggerbot, prediction, bone targeting, and dynamic FOV tuned per hero in one license.',
		h1: 'Aimbot',
		intro:
			'Overwatch 2 aimbot covers tracking, flickbot, and triggerbot with FOV and bone priority you can tune before you queue. It is included in the same {brand} license as ESP, wallhack overlays, and hero scripts on Windows PC.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Overwatch 2 Cheats overview',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'What the aimbot module does',
				paragraphs: [
					'Aim assist in Overwatch 2 has to handle hitscan duels, projectile arcs, and close-range brawls in the same match. Tracking keeps your crosshair on a moving target; flickbot snaps for burst damage; triggerbot fires when your reticle crosses a valid hitbox.',
					'Prediction and gravity prediction help projectiles land on heroes that strafe or jump. Bone targeting and target lock let you prefer head, chest, or the closest bone depending on hero and range.',
					'None of this is sold separately. Aimbot ships with the full package — see the <a href="/overwatch-2-cheats/">product page</a> and <a href="/features/">features list</a> for everything else in the license.',
				],
			},
			{
				h2: 'Tuning FOV, speed, and profiles',
				paragraphs: [
					'Set FOV adjustment, dynamic FOV, and separate FOVs so assist only engages inside the angle you expect. Tracking speed, flick speed, and tracking acceleration control how fast the crosshair moves — start conservative for longer sessions.',
					'Save profiles for hitscan versus projectile heroes so you are not reopening the menu every round. Hotkeys let you toggle aimbot mid-match when you switch roles or game modes.',
					'Pair aimbot with <a href="/overwatch-2-esp/">ESP</a> for target awareness and the <a href="/overwatch-2-wallhack/">wallhack guide</a> when you want extra visual cues outside your FOV.',
				],
				list: [
					'Tracking, flickbot, triggerbot, and autoshoot options',
					'Prediction, gravity prediction, and hitbox scaling',
					'Bone targeting, target lock, and closest-bone selection',
					'Dynamic FOV, aim layers, and skill keybinding in Aim 2',
					'Hero-specific options and config save or swap slots',
				],
			},
			{
				h2: 'Modes, patches, and responsible use',
				paragraphs: [
					'Aimbot works in Quick Play, Competitive, Arcade, and Custom Games on Windows 10 and 11. Test in a custom lobby first, then tune down strength before ranked if you want a lower profile.',
					'{brand} rebuilds aimbot behavior after major {game} and {antiCheat} patches. Read <a href="/status/">Status</a> before you queue — maintenance and sensible settings matter more than maxed sliders.',
					'Weapon balance and season updates change TTK and fight pace. Revisit smoothness and FOV after big combat patches so your profile still matches live play.',
				],
			},
			{
				h2: 'Buy, setup, and support',
				paragraphs: [
					'Compare <a href="/pricing/">monthly and lifetime plans</a> — both unlock the same aimbot, ESP, and hero scripts. Follow the <a href="/setup/">setup guide</a> after checkout to activate and save your first profile.',
					'Delivery and license questions are covered in the <a href="/faq/">FAQ</a>. Need a human reply? Use <a href="/support/">Support</a> with your order ID and a short description of the issue.',
					'Read <a href="/reviews/">buyer reviews</a> or the <a href="/forum/aimbot-settings/">aimbot settings</a> forum thread, then return here to dial in FOV and smoothness for your main heroes.',
				],
			},
		],
	}),
	radar: page({
		title: 'Overwatch 2 Wallhack | {brand}',
		description:
			'Overwatch 2 wallhack for Windows PC — draw FOV, glow, skeleton ESP, target highlighting, and stream-proof overlays in one license.',
		h1: 'Wallhack',
		intro:
			'Overwatch 2 wallhack highlights threats through cover and outside your view — FOV rings, glow, skeleton lines, and target emphasis. It is bundled with ESP and aimbot in the same {brand} license on Windows PC.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Overwatch 2 Cheats overview',
		ctaSecondaryHref: '/overwatch-2-cheats/',
		galleryTitle: 'Visual overlay',
		sections: [
			{
				h2: 'What wallhack means here',
				paragraphs: [
					'Wallhack overlays show where enemies are relative to geometry — even when you cannot see them on screen. In {brand} that includes draw FOV circles, glow modes, skeleton ESP, and target highlighting you can tune per match.',
					'Wallhack is not a separate purchase. It shares the visual menu with <a href="/overwatch-2-esp/">ESP</a> — boxes and player info for mid-fight reads, wallhack-style cues for flanks and off-angle threats.',
					'Read <a href="/faq/what-is-wallhack/">what wallhack is</a> in the FAQ if you are comparing search terms. The full module list lives on <a href="/features/">Features</a>.',
				],
			},
			{
				h2: 'Controls and visual layers',
				paragraphs: [
					'Enable draw FOV and draw FOV 2 to see the angle your aim assist or awareness tools use. Glow, glow HP indicators, and rainbow mode make low-visibility heroes easier to track in cluttered fights.',
					'Skeleton ESP and enemy view angle show body lines and where a target is looking — useful for deciding whether to peek or wait for cooldowns.',
					'Turn categories off when the screen feels busy. Competitive matches often need fewer layers than Arcade custom games.',
				],
				list: [
					'Draw FOV & draw FOV 2',
					'Glow, glow HP indicator & rainbow mode',
					'Skeleton ESP & enemy view angle',
					'Target highlighting and visual options per setting',
					'Stream-proof rendering when you record',
				],
			},
			{
				h2: 'Pair with ESP and aimbot',
				paragraphs: [
					'Use wallhack overlays for map control and <a href="/overwatch-2-esp/">ESP</a> for ult charge, distance, and box styles during objective fights. Together they cover rotation timing and close-range trades.',
					'When you are ready to add combat assist, open the <a href="/overwatch-2-aimbot/">aimbot guide</a> — tracking, flickbot, and triggerbot use the same license and hotkeys.',
					'New to the package? Start on the <a href="/overwatch-2-cheats/">product overview</a>, then follow <a href="/setup/">setup</a> before ranked.',
				],
			},
			{
				h2: 'Patches, plans, and help',
				paragraphs: [
					'Visual modules are rebuilt after major {game} and {antiCheat} updates. Check <a href="/status/">Status</a> before you queue so you are on the current build.',
					'Monthly and lifetime plans on the <a href="/pricing/">store</a> include the same wallhack and ESP tools. Delivery is digital after checkout — see <a href="/faq/license-delivery/">license delivery FAQ</a>.',
					'Questions or overlay bugs? Use <a href="/support/">Support</a> with your order ID, or browse <a href="/reviews/">buyer reviews</a> for how others tune visuals.',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro:
			'Install and launch {brand} on Windows PC after you buy. This guide walks through delivery, loader activation, first-launch checks, and what to do before Quick Play or Competitive.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: p.updates,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Setup: Before you install',
				paragraphs: [
					'You need an active license first. Complete checkout on the <a href="/pricing/">store</a>, then wait for the delivery email with your key and loader link.',
					'Use a Windows 10 or 11 PC with {game} installed through Battle.net or Steam. Close or disable other overlays that hook the game — Discord overlays, third-party capture tools, and old cheat loaders often conflict.',
					'Keep your order confirmation and license key in one place. If delivery is delayed, read <a href="/faq/license-delivery/">license delivery FAQ</a> before you open a support ticket.',
				],
				list: [
					'Windows 10 / 11 (64-bit)',
					'Admin rights for the loader when prompted',
					'Stable internet for activation',
					'Official game install — <a href="https://store.steampowered.com/app/2357570/Overwatch_2/" target="_blank" rel="noopener noreferrer">Steam</a> or Battle.net',
				],
			},
			{
				h2: 'Install and activate',
				paragraphs: [
					'Download the loader from your delivery email. Run it as administrator, paste the license key exactly as shown, and wait for activation to finish before starting the game.',
					'Launch {game} only after the loader reports a successful bind. If you patch the game or {antiCheat}, stop and read <a href="/status/">Status</a> — playing on an outdated build after a major update is the most common setup mistake.',
					'First time with the menu? Skim <a href="/features/">Features</a> so you know which toggles map to ESP, aimbot, and hero scripts.',
				],
				list: [
					'Download loader from delivery email',
					'Run as admin and paste license key',
					'Confirm activation success in the loader',
					'Start {game} from Battle.net or Steam',
				],
			},
			{
				h2: 'Tune overlays before ranked',
				paragraphs: [
					'Open a Custom Game or practice range before Quick Play or Competitive. Enable ESP categories one at a time so the screen stays readable — skeleton, boxes, and ult markers do not all need to be on at once.',
					'Set conservative aimbot FOV and smoothness first. Save a profile, then adjust using the <a href="/overwatch-2-aimbot/">aimbot guide</a> and <a href="/overwatch-2-esp/">ESP guide</a> if you want module-specific tips.',
					'Use automatic config saving so your profiles survive restarts. Stream-proof mode is available if you capture gameplay — see Features for the full misc list.',
				],
			},
			{
				h2: 'Troubleshooting and support',
				paragraphs: [
					'Loader will not activate: verify the key, run as admin, and confirm your plan is still active. After a {game} patch, wait for our Status note before retrying.',
					'Game crash or black screen: disable other overlays, verify game files in Steam or Battle.net, then relaunch the loader once.',
					'Still stuck? Email <a href="/support/">Support</a> with your order ID, Windows version, and what step failed. Check <a href="/faq/contact-support/">contact support FAQ</a> and <a href="/faq/check-updates/">where to check updates</a> for faster answers.',
				],
				list: [
					'<a href="/status/">Status page</a> after every patch',
					'<a href="/faq/">FAQ hub</a>',
					'<a href="/overwatch-2-cheats/">Product overview</a>',
					'<a href="/pricing/">Buy or renew</a>',
				],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro:
			'Human help for {brand} on Windows PC — setup, license delivery, billing, and patch-day issues. Email {email} with your order ID so we can reply with the right steps.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: p.faq,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact support',
				paragraphs: [
					'Email {email} from the address you used at checkout. Put your order ID in the subject line when possible — it matches your license in our system faster than a username alone.',
					'Describe what you expected versus what happened. One paragraph is enough if you include the step that failed (activation, loader, in-game menu, or crash).',
					'We answer setup, delivery, and billing questions for active customers. We do not configure cheats for you remotely; we point you to the right doc or build.',
				],
				list: [
					'Order ID or checkout receipt',
					'Windows version (10 or 11)',
					'How you installed {game} (Steam or Battle.net)',
					'Screenshots only if they show the error text',
				],
			},
			{
				h2: 'What to include by issue type',
				paragraphs: [
					'License not received: wait for the delivery window in <a href="/faq/license-delivery/">license delivery FAQ</a>, check spam, then email with payment confirmation — no key in the body of public forums.',
					'Loader or activation errors: say whether you run as admin, paste the exact error string, and confirm you read <a href="/status/">Status</a> after the last {game} patch.',
					'In-game menu or overlay problems: list which modules you enabled (ESP, aimbot, hero scripts) and whether a custom game works but Quick Play does not.',
				],
			},
			{
				h2: 'Self-serve resources (faster than email)',
				paragraphs: [
					'Most tickets are solved without a reply. Walk through the <a href="/setup/">setup guide</a> line by line, then open the <a href="/faq/">FAQ hub</a> for delivery, refunds, and patch checks.',
					'Module questions belong on the <a href="/overwatch-2-esp/">ESP</a>, <a href="/overwatch-2-aimbot/">aimbot</a>, and <a href="/features/">features</a> pages. Buying or renewing? Use the <a href="/pricing/">store</a> and read the <a href="/refund/">refund policy</a> first.',
					'After {antiCheat} or seasonal updates, read <a href="/faq/check-updates/">where to check updates</a> and wait for a green Status note before you assume the loader is broken.',
				],
				list: [
					'<a href="/setup/">Setup guide</a>',
					'<a href="/status/">Live status</a>',
					'<a href="/faq/contact-support/">Contact support FAQ</a>',
					'<a href="/reviews/">Buyer reviews</a>',
				],
			},
			{
				h2: 'Response expectations and product help',
				paragraphs: [
					'Reply times depend on queue volume and time zone. Include complete details in the first email to avoid back-and-forth.',
					'We cannot guarantee account outcomes in {game} — cheats carry risk. Support focuses on license, loader, and documented features.',
					'Not a customer yet? Read the <a href="/overwatch-2-cheats/">product overview</a> and <a href="/forum/buyers-guide/">buyers guide</a> before purchase; after checkout, start with setup and FAQ before writing in.',
				],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro:
			'This FAQ hub answers common questions about {brand} on Windows PC — delivery, setup, patch checks, and billing. Skim the sections below or open a linked answer for step-by-step detail.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: p.support,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Faq: Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Faq topics at a glance',
				paragraphs: [
					'Use this FAQ before you email support — most delivery and setup questions are covered here with links to Status, Setup, and the store.',
					'Each FAQ entry stays short on purpose. Follow the linked guides when you need screenshots or a full checklist.',
				],
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
