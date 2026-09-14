import { overwatchImages } from '../overwatch2';
import type { NativeGuide } from './types';

/** Site-native Overwatch 2 guides shown above the fold on /guides/ */
export const nativeGuides: NativeGuide[] = [
	{
		slug: 'overwatch-2-cheats',
		title: 'Overwatch 2 Cheats Overview',
		description: 'ESP, soft aim, radar, and package features for Overwatch 2 on Windows PC.',
		href: '/ow2-cheats/',
		image: overwatchImages.cheatsPackage,
	},
	{
		slug: 'overwatch-2-esp',
		title: 'Overwatch 2 ESP & Wallhack Guide',
		description: 'Player boxes, skeleton ESP, and distance tracking for Quick Play and Arcade.',
		href: '/overwatch-2-esp/',
		image: overwatchImages.espWallhack,
	},
	{
		slug: 'overwatch-2-aimbot',
		title: 'Overwatch 2 Aimbot Guide',
		description: 'Soft aim settings, smoothing, and combat positioning for PvP and PvE.',
		href: '/overwatch-2-aimbot/',
		image: overwatchImages.aimbotCombat,
	},
	{
		slug: 'overwatch-2-wallhack',
		title: 'Overwatch 2 Wallhack Guide',
		description: 'Line-of-sight awareness, cover denial, and wallhack best practices.',
		href: '/ow2-wallhack/',
		image: overwatchImages.playerEsp,
	},
	{
		slug: 'overwatch-2-visuals',
		title: 'Overwatch 2 Radar Hack Guide',
		description: '2D radar overlays, flanking awareness, and map control tips.',
		href: '/ow2-visuals/',
		image: overwatchImages.loadoutBuilder,
	},
	{
		slug: 'features',
		title: 'Overwatch 2 Cheats Features',
		description: 'Full feature breakdown — ESP, aim assist, radar, and configuration options.',
		href: '/features/',
		image: overwatchImages.aimbotSkeleton,
	},
	{
		slug: 'setup',
		title: 'Overwatch 2 Cheats Setup',
		description: 'Installation, configuration, and first-launch checklist for Windows PC.',
		href: '/setup/',
		image: overwatchImages.squadFight,
	},
	{
		slug: 'overwatch-2-hero-scripts',
		title: 'Overwatch 2 Quick Play Cheats',
		description: 'Competitive, Iron Banner, and competitive PvP strategies with overlay tools.',
		href: '/ow2-hero-scripts/',
		image: overwatchImages.battleRoyaleCombat,
	},
	{
		slug: 'overwatch-2-hero-scripts',
		title: 'Overwatch 2 PvE Cheats',
		description: 'Raids, dungeons, and farming routes with ESP and radar support.',
		href: '/ow2-hero-scripts/',
		image: overwatchImages.cheatsCombat,
	},
];
