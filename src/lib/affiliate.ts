import { brand } from '../data/brand';

/** rel for outbound purchase / affiliate checkout links (SEO booster §6). */
export const AFFILIATE_LINK_REL = brand.affiliate.linkRel;

export function isAffiliateCheckoutUrl(href: string): boolean {
	const value = href.trim();
	if (!value) return false;
	if (value === brand.checkoutUrl) return true;
	try {
		const target = new URL(value);
		const checkout = new URL(brand.checkoutUrl);
		return target.hostname === checkout.hostname && target.pathname.startsWith('/go/');
	} catch {
		return value.includes('zadeyo.com/go/');
	}
}

/** rel for external anchors — affiliate checkout vs other outbound links. */
export function externalLinkRel(href: string): string | undefined {
	if (!href.startsWith('http')) return undefined;
	return isAffiliateCheckoutUrl(href) ? AFFILIATE_LINK_REL : 'noopener noreferrer';
}
