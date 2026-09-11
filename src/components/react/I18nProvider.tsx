import { useEffect, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n.js';

type Props = {
	locale: string;
	children: ReactNode;
};

function syncLocale(locale: string) {
	if (i18n.language === locale) return;
	// Sync before paint so SSR markup matches the first client render.
	i18n.language = locale;
	void i18n.changeLanguage(locale);
}

/** Syncs react-i18next with the Astro page locale (URL is source of truth for SEO). */
export default function I18nProvider({ locale, children }: Props) {
	syncLocale(locale);

	useEffect(() => {
		syncLocale(locale);
	}, [locale]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
