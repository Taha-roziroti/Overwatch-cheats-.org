import type { APIRoute } from 'astro';
import { absolutePageUrl, pageSitemapEntries, type PageSitemapEntry } from '../data/page-sitemap';
import { i18nLocaleCodes } from '../data/sitemap-locale';
import { getLocalizedPath } from '../data/i18n/routing';
import { pageSitemapMeta } from '../data/sitemap-meta';
import { sitemapLastmod } from '../data/brand-sitemap';
import { getPageCrawlImage } from '../data/page-images';
import { getBlogSitemapEntries } from '../data/blog/helpers';
import { getReviewSitemapEntries } from '../data/reviews';
import { getFaqSitemapEntries } from '../data/faq';
import { getGuideSitemapEntries } from '../data/guides/helpers';
import { hreflangLinksXml, resolvePageIdFromPath } from '../data/i18n/routing';
import { escapeXml, renderImageExtension, renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** English page urlset (listed under sitemap.xml index). */
export const GET: APIRoute = () => {
	const blogEntries = getBlogSitemapEntries()
		.filter((entry) => !entry.path.match(/^\/[a-z]{2}\//))
		.map((entry) => ({
			path: entry.path,
			lastmod: entry.lastmod,
			changefreq: entry.changefreq,
			priority: entry.priority,
			images: entry.images,
		}));

	const reviewEntries = getReviewSitemapEntries();
	const faqEntries = getFaqSitemapEntries();
	const guideEntries = getGuideSitemapEntries();

	const homeMeta = pageSitemapMeta.home;
	const homeCrawl = getPageCrawlImage('home');
	const localeHomeEntries: PageSitemapEntry[] = i18nLocaleCodes.map((locale) => ({
		path: getLocalizedPath('home', locale),
		priority: homeMeta.i18nPriority,
		changefreq: homeMeta.changefreq,
		lastmod: sitemapLastmod(homeMeta.lastmod),
		images: [{ url: homeCrawl.url, title: homeCrawl.title, caption: homeCrawl.caption }],
	}));

	const urls = [
		...pageSitemapEntries,
		...localeHomeEntries,
		...blogEntries,
		...reviewEntries,
		...faqEntries,
		...guideEntries,
	].map((entry) => {
		const images = entry.images
			.map((image) => renderImageExtension(image, entry.path))
			.join('\n');

		const imageBlock = images ? `\n${images}` : '';
		const pageId = resolvePageIdFromPath(entry.path);
		const hreflangBlock = pageId ? `\n${hreflangLinksXml(pageId, escapeXml)}` : '';

		return `  <url>
    <loc>${escapeXml(absolutePageUrl(entry.path))}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>${hreflangBlock}${imageBlock}
  </url>`;
	});

	const xml = renderUrlsetXml(urls);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
