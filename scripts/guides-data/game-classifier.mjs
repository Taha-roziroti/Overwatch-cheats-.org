/** Classify a hostname into a game id + display name. Order matters — first match wins. */
const rules = [
	{ id: 'destiny-2', game: 'Overwatch 2', re: /destiny2|destiny-2/i },
	{ id: 'tarkov', game: 'Escape from Tarkov', re: /tarkov|eft|cheatsfortarkov/i },
	{ id: 'valorant', game: 'Valorant', re: /valorant|valo/i },
	{ id: 'warzone', game: 'Call of Duty: Warzone', re: /warzone|codcheat|codhack|codhacks/i },
	{ id: 'fortnite', game: 'Fortnite', re: /fortnite/i },
	{ id: 'arc-raiders', game: 'ARC Raiders', re: /arcraider/i },
	{ id: 'marathon', game: 'Marathon', re: /marathon/i },
	{ id: 'marvel-rivals', game: 'Marvel Rivals', re: /marvelrival/i },
	{ id: 'overwatch', game: 'Overwatch 2', re: /overwatch/i },
	{ id: 'rainbow-six', game: 'Rainbow Six Siege', re: /r6siege|siegehack|siegecheat/i },
	{ id: 'the-finals', game: 'The Finals', re: /thefinals|thefinal/i },
	{ id: 'gray-zone', game: 'Gray Zone Warfare', re: /grayzone/i },
	{ id: 'the-isle', game: 'The Isle', re: /theisle|islecheat/i },
	{ id: 'palworld', game: 'Palworld', re: /palworld/i },
	{ id: 'war-thunder', game: 'War Thunder', re: /warthunder/i },
	{ id: 'battlefield', game: 'Battlefield', re: /battlefield/i },
	{ id: 'dead-by-daylight', game: 'Dead by Daylight', re: /dbd/i },
	{ id: 'deadside', game: 'Deadside', re: /deadside/i },
	{ id: 'genshin-impact', game: 'Genshin Impact', re: /genshin/i },
	{ id: 'unturned', game: 'Unturned', re: /unturned/i },
	{ id: 'league-of-legends', game: 'League of Legends', re: /lolcheat|lolcheats|lolhack/i },
	{ id: 'dayz', game: 'DayZ', re: /dayz/i },
	{ id: 'rust', game: 'Rust', re: /rusthack|rustcheat/i },
	{ id: 'hunt-showdown', game: 'Hunt: Showdown', re: /hunt/i },
	{ id: 'squad', game: 'Squad', re: /squad/i },
	{ id: 'once-human', game: 'Once Human', re: /oncehuman/i },
	{ id: 'arena-breakout', game: 'Arena Breakout: Infinite', re: /abi/i },
	{ id: 'bodycam', game: 'Bodycam', re: /bodycam/i },
	{ id: 'arma-reforger', game: 'Arma Reforger', re: /reforger/i },
	{ id: 'the-front', game: 'The Front', re: /thefront/i },
	{ id: 'lost-ark', game: 'Lost Ark', re: /lostark/i },
	{ id: 'warframe', game: 'Warframe', re: /warframe/i },
	{ id: 'naraka', game: 'Naraka: Bladepoint', re: /naraka/i },
	{ id: 'minecraft', game: 'Minecraft', re: /minecraft/i },
	{ id: 'path-of-exile', game: 'Path of Exile', re: /poe/i },
	{ id: 'raft', game: 'Raft', re: /raft/i },
	{ id: 'sand-raiders', game: 'Sand Raiders', re: /sandraider/i },
	{ id: 'sand', game: 'SAND', re: /sandhack/i },
	{ id: 'sea-of-thieves', game: 'Sea of Thieves', re: /seaofthieves/i },
	{ id: 'delta-force', game: 'Delta Force', re: /deltaforce/i },
	{ id: 'ark', game: 'ARK: Survival Ascended', re: /arkascended|arkcheat/i },
	{ id: 'dune', game: 'Dune: Awakening', re: /dune/i },
	{ id: 'wuthering-waves', game: 'Wuthering Waves', re: /wuthering/i },
	{ id: 'combat-master', game: 'Combat Master', re: /combatmaster/i },
	{ id: 'fnf', game: 'Friday Night Funkin', re: /fncheat|fncheats/i },
	{ id: 'foxhole', game: 'Foxhole', re: /foxhole/i },
	{ id: 'exoborne', game: 'Exoborne', re: /exoborne/i },
	{ id: 'nba-2k26', game: 'NBA 2K26', re: /nba2k26/i },
	{ id: 'tf2', game: 'Team Fortress 2', re: /tf2/i },
	{ id: 'enlisted', game: 'Enlisted', re: /enlisted/i },
	{ id: 'scum', game: 'SCUM', re: /scum/i },
	{ id: 'grounded', game: 'Grounded', re: /grounded/i },
	{ id: 'dota-2', game: 'Dota 2', re: /dota2/i },
	{ id: 'caliber', game: 'Caliber', re: /caliber/i },
	{ id: 'civ-6', game: 'Sid Meier\'s Civilization VI', re: /civ6/i },
	{ id: 'enshrouded', game: 'Enshrouded', re: /enshrouded/i },
	{ id: 'fragpunk', game: 'FragPunk', re: /fragpunk/i },
	{ id: 'backrooms', game: 'Backrooms', re: /backrooms/i },
	{ id: 'mecha-break', game: 'Mecha BREAK', re: /mecca|meccha/i },
];

export function classifyHost(host) {
	const h = host.toLowerCase();
	for (const rule of rules) {
		if (rule.re.test(h)) return { gameId: rule.id, game: rule.game };
	}
	return { gameId: 'gaming', game: 'PC Gaming' };
}

export function slugFromHost(host) {
	return host.replace(/\./g, '-').replace(/[^a-z0-9-]/gi, '');
}

export function classifyUrl(url) {
	const host = new URL(url.startsWith('http') ? url : `https://${url}`).hostname.replace(/^www\./, '');
	const { gameId, game } = classifyHost(host);
	return { gameId, gameName: game };
}

export function slugFromUrl(url) {
	const host = new URL(url.startsWith('http') ? url : `https://${url}`).hostname.replace(/^www\./, '');
	return slugFromHost(host);
}
