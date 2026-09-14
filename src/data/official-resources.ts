/** Official Destiny 2 references — use sparingly for E-E-A-T, not on every paragraph. */
export type OfficialResource = {
	id: string;
	label: string;
	href: string;
};

export const destiny2OfficialResources: OfficialResource[] = [
	{
		id: 'bungie',
		label: 'Bungie.net',
		href: 'https://www.bungie.net/7/en/destiny',
	},
	{
		id: 'steam',
		label: 'Destiny 2 on Steam',
		href: 'https://store.steampowered.com/app/1085660/Destiny_2/',
	},
	{
		id: 'fandom',
		label: 'Destiny Wiki (Fandom)',
		href: 'https://destiny.fandom.com/wiki/Destiny_2',
	},
	{
		id: 'destinypedia',
		label: 'Destinypedia',
		href: 'https://www.destinypedia.com/',
	},
];
