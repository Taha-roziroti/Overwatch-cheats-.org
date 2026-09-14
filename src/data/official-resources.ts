/** Official Overwatch 2 references — use sparingly for E-E-A-T, not on every paragraph. */
export type OfficialResource = {
	id: string;
	label: string;
	href: string;
};

export const overwatch2OfficialResources: OfficialResource[] = [
	{
		id: 'blizzard',
		label: 'Overwatch 2 (Blizzard)',
		href: 'https://overwatch.blizzard.com/',
	},
	{
		id: 'steam',
		label: 'Overwatch 2 on Steam',
		href: 'https://store.steampowered.com/app/2357570/Overwatch_2/',
	},
	{
		id: 'fandom',
		label: 'Overwatch Wiki (Fandom)',
		href: 'https://overwatch.fandom.com/wiki/Overwatch_2',
	},
	{
		id: 'patchnotes',
		label: 'Overwatch 2 Patch Notes',
		href: 'https://overwatch.blizzard.com/en-us/news/patch-notes',
	},
];

/** @deprecated alias for template compatibility */
export const destiny2OfficialResources = overwatch2OfficialResources;
