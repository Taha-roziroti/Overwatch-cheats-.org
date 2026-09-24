import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';
import { AFFILIATE_LINK_REL } from '../../lib/affiliate';
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
	const [menuOpen, setMenuOpen] = useState(false);
	const menuBtnRef = useRef<HTMLButtonElement>(null);
	const drawerRef = useRef<HTMLElement>(null);

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

	const closeMenu = useCallback(() => setMenuOpen(false), []);
	const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		closeMenu();
	}, [currentPath, closeMenu]);

	useEffect(() => {
		if (!menuOpen) return;

		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		document.body.classList.add('nav-open');

		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') closeMenu();
		};

		window.addEventListener('keydown', onKey);

		const firstLink = drawerRef.current?.querySelector<HTMLElement>('a, button, summary');
		firstLink?.focus();

		return () => {
			document.body.style.overflow = prevOverflow;
			document.body.classList.remove('nav-open');
			window.removeEventListener('keydown', onKey);
		};
	}, [menuOpen, closeMenu]);

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
		<header
			className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}
			data-nav
		>
			<div className="shell site-header__bar">
				<button
					type="button"
					ref={menuBtnRef}
					className="site-header__menu-btn"
					aria-expanded={menuOpen}
					aria-controls="site-mobile-nav"
					aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
					onClick={toggleMenu}
				>
					<span className="site-header__menu-icon" aria-hidden="true">
						<span />
						<span />
						<span />
					</span>
				</button>

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
						rel={AFFILIATE_LINK_REL}
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

			<div
				className="site-mobile-nav__backdrop"
				hidden={!menuOpen}
				onClick={closeMenu}
				aria-hidden="true"
			/>

			<nav
				id="site-mobile-nav"
				ref={drawerRef}
				className="site-mobile-nav"
				aria-label={t('nav.mobileAria')}
				hidden={!menuOpen}
			>
				<div className="site-mobile-nav__inner shell">
					<ul className="site-mobile-nav__links">
						{navLinks.map((item) => (
							<li key={item.id}>
								<a
									href={item.href}
									className={item.active ? 'is-active' : undefined}
									onClick={closeMenu}
								>
									<span data-edit={item.edit}>{item.label}</span>
								</a>
							</li>
						))}
					</ul>

					<div className="site-mobile-nav__tools">
						<p className="site-mobile-nav__tools-label">{t('common.selectLanguage')}</p>
						<LanguageSwitcher
							currentLocale={locale}
							locales={locales}
							hrefForLocale={hrefForLocale}
						/>
						<a
							href={checkoutUrl}
							className="site-mobile-nav__buy"
							rel={AFFILIATE_LINK_REL}
							onClick={closeMenu}
						>
							<span data-edit="ctaBuyShort">{t('cta.buy')}</span>
						</a>
					</div>
				</div>
			</nav>
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
