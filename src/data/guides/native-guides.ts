import { destinyImages } from '../destiny';
import type { NativeGuide } from './types';

/** Site-native Destiny 2 guides shown above the fold on /guides/ */
export const nativeGuides: NativeGuide[] = [
	{
		slug: 'destiny-2-cheats',
		title: 'Destiny 2 Cheats Overview',
		description: 'ESP, soft aim, radar, and package features for Destiny 2 on Windows PC.',
		href: '/d2-cheats/',
		image: destinyImages.cheatsPackage,
	},
	{
		slug: 'destiny-2-esp',
		title: 'Destiny 2 ESP & Wallhack Guide',
		description: 'Player boxes, skeleton ESP, and distance tracking for Crucible and PvE.',
		href: '/destiny-2-esp/',
		image: destinyImages.espWallhack,
	},
	{
		slug: 'destiny-2-aimbot',
		title: 'Destiny 2 Aimbot Guide',
		description: 'Soft aim settings, smoothing, and combat positioning for PvP and PvE.',
		href: '/destiny-2-aimbot/',
		image: destinyImages.aimbotCombat,
	},
	{
		slug: 'destiny-2-wallhack',
		title: 'Destiny 2 Wallhack Guide',
		description: 'Line-of-sight awareness, cover denial, and wallhack best practices.',
		href: '/d2-wallhack/',
		image: destinyImages.playerEsp,
	},
	{
		slug: 'destiny-2-radar-hack',
		title: 'Destiny 2 Radar Hack Guide',
		description: '2D radar overlays, flanking awareness, and map control tips.',
		href: '/d2-radar/',
		image: destinyImages.loadoutBuilder,
	},
	{
		slug: 'features',
		title: 'Destiny 2 Cheats Features',
		description: 'Full feature breakdown — ESP, aim assist, radar, and configuration options.',
		href: '/features/',
		image: destinyImages.aimbotSkeleton,
	},
	{
		slug: 'setup',
		title: 'Destiny 2 Cheats Setup',
		description: 'Installation, configuration, and first-launch checklist for Windows PC.',
		href: '/setup/',
		image: destinyImages.squadFight,
	},
	{
		slug: 'destiny-2-crucible-cheats',
		title: 'Destiny 2 Crucible Cheats',
		description: 'Trials, Iron Banner, and competitive PvP strategies with overlay tools.',
		href: '/d2-crucible/',
		image: destinyImages.battleRoyaleCombat,
	},
	{
		slug: 'destiny-2-pve-cheats',
		title: 'Destiny 2 PvE Cheats',
		description: 'Raids, dungeons, and farming routes with ESP and radar support.',
		href: '/d2-pve/',
		image: destinyImages.cheatsCombat,
	},
];
