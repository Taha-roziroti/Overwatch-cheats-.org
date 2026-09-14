/**
 * Cloudflare Worker — host canonicalization before static assets.
 * Canonical site: https://overwatchcheats.org (matches brand.url)
 *
 * Requires DNS: CNAME `www` → `overwatchcheats.org` (proxied) AND
 * Workers custom domain `www.overwatchcheats.org` attached — otherwise
 * www is NXDOMAIN and Seobility fails the www/non-www check.
 */
export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'overwatchcheats.org';

/** Legacy domains 301 → current canonical. */
const LEGACY_HOSTS = new Set([
	'warthundercheat.net',
	'www.warthundercheat.net',
	'destiny2cheats.org',
	'www.destiny2cheats.org',
]);

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const target = canonicalUrl(request);
		if (target) {
			return Response.redirect(target.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
