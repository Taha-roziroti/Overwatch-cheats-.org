import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';
import { sitePaths as p } from '../../data/site-paths';

type FaqItem = { slug: string; question: string; answer: string; href: string };

type Props = {
	locale: string;
	faqs: FaqItem[];
};

function HomeSeoInner({ faqs }: Props) {
	const { t } = useTranslation();

	const categories = [
		{
			titleKey: 'homeSeo.catFeatures',
			hintKey: 'homeSeo.catFeaturesHint',
			links: [
				{ href: p.features, labelKey: 'homeSeo.linkFeatureList' },
				{ href: p.esp, labelKey: 'homeSeo.linkEspOverview' },
				{ href: p.aimbot, labelKey: 'homeSeo.linkAimbotControls' },
				{ href: p.radar, labelKey: 'homeSeo.linkWallhackOverlay' },
			],
		},
		{
			titleKey: 'homeSeo.catStatus',
			hintKey: 'homeSeo.catStatusHint',
			links: [
				{ href: p.updates, labelKey: 'homeSeo.linkLiveStatus' },
				{ href: p.anticheat, labelKey: 'homeSeo.linkPatchNotes' },
				{ href: p.setup, labelKey: 'homeSeo.linkQuickSetup' },
				{ href: p.faq, labelKey: 'homeSeo.linkFaqHub' },
			],
		},
		{
			titleKey: 'homeSeo.catStore',
			hintKey: 'homeSeo.catStoreHint',
			links: [
				{ href: p.pricing, labelKey: 'homeSeo.linkComparePlans' },
				{ href: p.reviews, labelKey: 'homeSeo.linkBuyerReviews' },
				{ href: p.cheats, labelKey: 'homeSeo.linkBuyLicense' },
				{ href: p.refund, labelKey: 'homeSeo.linkRefunds' },
			],
		},
		{
			titleKey: 'homeSeo.catHelp',
			hintKey: 'homeSeo.catHelpHint',
			links: [
				{ href: p.support, labelKey: 'homeSeo.linkContactSupport' },
				{ href: p.setup, labelKey: 'homeSeo.linkInstallGuide' },
				{ href: p.guides, labelKey: 'homeSeo.linkGameGuides' },
				{ href: p.blog, labelKey: 'homeSeo.linkCommunityForum' },
			],
		},
	];

	return (
		<section className="home-seo shell" aria-labelledby="home-seo-title">
			<header className="home-seo__head">
				<div>
					<h2 id="home-seo-title" className="home-seo__section-title">
						{t('homeSeo.eyebrow')}
					</h2>
					<p className="home-seo__section-sub">{t('homeSeo.title')}</p>
					<p className="home-seo__lede">{t('homeSeo.lede')}</p>
				</div>
			</header>

			<div className="home-seo__cats">
				{categories.map((cat) => (
					<nav key={cat.titleKey} className="home-seo__cat" aria-label={t(cat.titleKey)}>
						<header className="home-seo__cat-head">
							<h3>{t(cat.titleKey)}</h3>
							<p>{t(cat.hintKey)}</p>
						</header>
						<ul>
							{cat.links.map((link) => (
								<li key={link.href + link.labelKey}>
									<a href={link.href}>
										<span>{t(link.labelKey)}</span>
										<span className="home-seo__cat-arrow" aria-hidden="true" />
									</a>
								</li>
							))}
						</ul>
					</nav>
				))}
			</div>

			<section className="home-seo__faq" aria-labelledby="home-faq-title">
				<header className="home-seo__faq-head">
					<div>
						<h3 id="home-faq-title" className="home-seo__section-title">
							{t('homeSeo.faqEyebrow')}
						</h3>
						<p className="home-seo__section-sub">{t('homeSeo.faqTitle')}</p>
						<p className="home-seo__faq-lede">{t('homeSeo.faqLede')}</p>
					</div>
					<a className="home-seo__faq-link" href={p.faq}>
						{t('homeSeo.allAnswers')}
					</a>
				</header>
				<div className="home-seo__faq-list">
					{faqs.map((item) => (
						<details className="home-seo__item" id={item.slug} key={item.slug}>
							<summary>
								<span>{item.question}</span>
								<span className="home-seo__chev" aria-hidden="true" />
							</summary>
							<div className="home-seo__item-body">
								<p>{item.answer}</p>
								<a className="home-seo__item-link" href={item.href}>
									{item.question}
								</a>
							</div>
						</details>
					))}
				</div>
			</section>
		</section>
	);
}

export default function HomeSeoApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeSeoInner {...props} />
		</I18nProvider>
	);
}
