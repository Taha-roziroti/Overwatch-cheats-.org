import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/translation.json';
import es from './public/locales/es/translation.json';

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

const resources = {
	en: { translation: en },
	es: { translation: es },
};

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
