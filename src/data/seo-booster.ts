import { brand, fillBrandTokens } from './brand';

/** Canonical origin — no trailing slash (SEO-SUPER-BOOSTER §1). */
export const SITE_URL = brand.url.replace(/\/$/, '');
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '');

/** Organization / WebSite purpose — {game} only (§3). */
export const SITE_PURPOSE = fillBrandTokens(
	'{brand} sells undetected {primaryKeyword} for {game} on Windows PC. We do not target other games or platforms.',
);

/** Exactly six knowsAbout terms for Organization schema (§3). */
export const SITE_ABOUT = [
	fillBrandTokens('{game} cheats'),
	fillBrandTokens('{game} ESP'),
	fillBrandTokens('{game} aimbot'),
	fillBrandTokens('{game} wallhack'),
	fillBrandTokens('{antiCheat} maintenance'),
	'Windows PC game software',
] as const;

/**
 * Intent map for copywriters — not rendered as meta keywords (§4).
 * Keys are EN canonical paths without trailing slash (except `/`).
 */
export const SEO_ROUTE_INTENTS: Record<string, string> = {
	'/': fillBrandTokens('{primaryKeyword}, ESP, aimbot, availability, undetected status'),
	'/overwatch-2-cheats': fillBrandTokens('buy {primaryKeyword}, product features, one license'),
	'/overwatch-2-esp': fillBrandTokens('{game} ESP, wallhack visibility, competitive modes'),
	'/overwatch-2-aimbot': fillBrandTokens('{game} aimbot, tracking, flickbot, triggerbot'),
	'/overwatch-2-wallhack': fillBrandTokens('{game} wallhack, glow, skeleton ESP'),
	'/features': fillBrandTokens('cheat feature list, toggles, stream-proof overlay'),
	'/pricing': fillBrandTokens('monthly vs lifetime, plans, instant delivery'),
	'/setup': fillBrandTokens('install {brand}, Windows PC setup'),
	'/support': fillBrandTokens('order help, contact {email}'),
	'/status': fillBrandTokens('patch status, {antiCheat} updates'),
	'/faq': fillBrandTokens('pricing, Windows, delivery, refunds'),
	'/reviews': 'buyer feedback, ratings, ESP and aimbot experience',
	'/forum': fillBrandTokens('setup, ESP, aimbot, {antiCheat} patch day'),
};

export const ROBOTS_INDEX =
	'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
