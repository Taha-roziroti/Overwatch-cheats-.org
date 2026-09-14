import { overwatchImages } from '../overwatch2';
import type { NativeGuide } from './types';

/** Site-native Overwatch 2 guides shown above the fold on /guides/ */
export const nativeGuides: NativeGuide[] = [
	{
		slug: 'overwatch-2-cheats',
		title: 'Overwatch 2 Cheats Overview',
		description: 'ESP, tracking aimbot, wallhack, and hero scripts for Overwatch 2 on Windows PC.',
		href: '/overwatch-2-cheats/',
		image: overwatchImages.cheatsPackage,
	},
	{
		slug: 'overwatch-2-esp',
		title: 'Overwatch 2 ESP & Wallhack Guide',
		description: 'Player boxes, skeleton ESP, and distance tracking for Quick Play and Competitive.',
		href: '/overwatch-2-esp/',
		image: overwatchImages.espWallhack,
	},
	{
		slug: 'overwatch-2-aimbot',
		title: 'Overwatch 2 Aimbot Guide',
		description: 'Tracking, flickbot, and triggerbot settings for PvP positioning on Windows PC.',
		href: '/overwatch-2-aimbot/',
		image: overwatchImages.aimbotCombat,
	},
	{
		slug: 'overwatch-2-wallhack',
		title: 'Overwatch 2 Wallhack Guide',
		description: 'Line-of-sight awareness, cover denial, and wallhack best practices.',
		href: '/overwatch-2-wallhack/',
		image: overwatchImages.playerEsp,
	},
	{
		slug: 'features',
		title: 'Overwatch 2 Cheats Features',
		description: 'Full feature breakdown — ESP, aimbot, hero scripts, and configuration options.',
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
		title: 'Overwatch 2 Hero Scripts Guide',
		description: 'Hero-specific scripts for movement, abilities, and ult tracking in Competitive.',
		href: '/overwatch-2-cheats/',
		image: overwatchImages.battleRoyaleCombat,
	},
	{
		slug: 'overwatch-2-competitive',
		title: 'Overwatch 2 Competitive Cheats',
		description: 'Quick Play, Competitive, and Arcade strategies with ESP and aimbot tools.',
		href: '/overwatch-2-cheats/',
		image: overwatchImages.cheatsCombat,
	},
];
