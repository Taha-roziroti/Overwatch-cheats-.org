import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';
import LanguageSwitcher, { type LocaleMeta } from './LanguageSwitcher';

type NavLink = {
	id: string;
	labelKey: string;
	edit?: string;
	href: string;
};

type Props = {
	locale: string;
	siteName?: string;
	checkoutUrl: string;
	currentPath: string;
	homeHref: string;
	reviewsBasePath: string;
	locales: LocaleMeta[];
	hrefForLocale: Record<string, string>;
	links: NavLink[];
};

function NavbarInner({
	locale,
	checkoutUrl,
	currentPath,
	reviewsBasePath,
	locales,
	hrefForLocale,
	links,
}: Props) {
	const { t } = useTranslation();
	const [scrolled, setScrolled] = useState(false);

	const isActive = (href: string) => {
		if (href === '/') return currentPath === '/' || currentPath === `/${locale}/`;
		if (href === reviewsBasePath) return currentPath === href || currentPath.startsWith(href);
		if (href.endsWith('/forum/')) {
			return (
				currentPath === href ||
				currentPath.startsWith(href) ||
				currentPath.startsWith(href.replace('/forum/', '/blog/'))
			);
		}
		return currentPath === href || currentPath.startsWith(href);
	};

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const navLinks = useMemo(
		() =>
			links.map((item) => ({
				...item,
				label: t(item.labelKey),
				active: isActive(item.href),
			})),
		[links, t, currentPath, locale, reviewsBasePath],
	);

	return (
		<header className={`site-header${scrolled ? ' is-scrolled' : ''}`} data-nav>
			<div className="shell site-header__bar">
				<nav className="site-nav" aria-label={t('nav.primaryAria')}>
					{navLinks.map((item) => (
						<a key={item.id} href={item.href} className={item.active ? 'is-active' : undefined}>
							<span data-edit={item.edit}>{item.label}</span>
						</a>
					))}
				</nav>

				<div className="site-tools">
					<div className="site-tools__lang">
						<LanguageSwitcher
							currentLocale={locale}
							locales={locales}
							hrefForLocale={hrefForLocale}
						/>
					</div>
					<a
						href={checkoutUrl}
						className="site-tools__buy"
						rel="noopener noreferrer"
						aria-label={t('cta.buyShort')}
					>
						<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M4.5 6.5h2.1l1.2 9.2h9.4l1.8-6.6H8.1M9.2 19.2a.9.9 0 100-1.8.9.9 0 000 1.8zm7.4 0a.9.9 0 100-1.8.9.9 0 000 1.8z"
								stroke="currentColor"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span data-edit="ctaBuyShort">{t('cta.buyShort')}</span>
					</a>
				</div>
			</div>
		</header>
	);
}

export default function NavbarApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<NavbarInner {...props} />
		</I18nProvider>
	);
}
