import { uiStrings } from './ui-strings-part1.mjs';
import { uiStringsPart2 } from './ui-strings-part2.mjs';
import { affiliateStringsByLocale } from './affiliate-strings.mjs';

const mergedUi = { ...uiStrings, ...uiStringsPart2 };

/** @type {Record<string, import('./ui-strings-part1.mjs').uiStrings.en & { affiliate: object }>} */
export const allUiStrings = Object.fromEntries(
	Object.entries(mergedUi).map(([locale, ui]) => [
		locale,
		{
			...ui,
			affiliate: affiliateStringsByLocale[locale] ?? affiliateStringsByLocale.en,
		},
	]),
);
