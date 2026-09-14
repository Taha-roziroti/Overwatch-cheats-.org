/**
 * Near-duplicate pageIds → stronger pillars.
 * Kept free of routing imports to avoid circular deps with localizeInternalHref.
 */
export const cannibalRedirectTargets = {
	'best-cheats': 'hacks',
	'cheats-2026': 'hacks',
	undetected: 'hacks',
	'crucible-cheats': 'hacks',
	'pve-cheats': 'hacks',
	'aimbot-hack': 'overwatch-2-aimbot',
	'aim-assist': 'overwatch-2-aimbot',
	'esp-hack': 'overwatch-2-esp',
	wallhack: 'overwatch-2-esp',
	'cheat-download': 'setup',
	anticheat: 'updates',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
