import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const supportedLngs = [
	'en',
	'es',
	'fr',
	'de',
	'pt',
	'it',
	'nl',
	'pl',
	'ru',
	'tr',
	'ar',
	'ja',
	'ko',
	'zh',
	'hi',
	'id',
	'th',
	'vi',
	'uk',
	'cs',
	'ro',
	'sv',
];

const localeModules = import.meta.glob('./public/locales/*/translation.json', { eager: true });

const resources = {};
for (const [path, mod] of Object.entries(localeModules)) {
	const locale = path.match(/\/locales\/([^/]+)\//)?.[1];
	if (locale) {
		resources[locale] = { translation: mod.default ?? mod };
	}
}

if (!i18n.isInitialized) {
	i18n.use(initReactI18next).init({
		resources,
		lng: 'en',
		fallbackLng: 'en',
		supportedLngs,
		nonExplicitSupportedLngs: true,
		load: 'languageOnly',
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
	});
}

export default i18n;
