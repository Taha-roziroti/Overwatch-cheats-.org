import CANNIBAL_REDIRECTS from './cannibal-redirects.json';

const CANONICAL_ORIGIN = 'https://warthundercheat.net';
const APEX_HOST = 'warthundercheat.net';
const WWW_HOST = 'www.warthundercheat.net';

/** Legacy domains → canonical apex (301). */
const LEGACY_HOSTS = new Set([
	'bestdestiny-2cheats.com',
	'www.bestdestiny-2cheats.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

// Keep in sync with public/_redirects (which preserves query strings by default, as we do below).
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	// Pillar trailing slashes (no-slash → slash only; never redirect canonical /path/ to itself)
	'/overwatch-2-esp': '/overwatch-2-esp/',
	'/overwatch-2-aimbot': '/overwatch-2-aimbot/',
	'/d2-cheats': '/ow2-cheats/',
	// EN cannibal stub pages → pillars (keep in sync with scripts/sync-en-redirects.mjs)
	'/d2-cheats-2026': '/ow2-cheats/',
	'/ow2-cheats-2026/': '/ow2-cheats/',
	'/d2-undetected': '/ow2-cheats/',
	'/ow2-undetected/': '/ow2-cheats/',
	'/d2-crucible': '/ow2-cheats/',
	'/ow2-hero-scripts/': '/ow2-cheats/',
	'/d2-pve': '/ow2-cheats/',
	'/ow2-hero-scripts/': '/ow2-cheats/',
	'/d2-aim-assist': '/overwatch-2-aimbot/',
	'/ow2-aim-assist/': '/overwatch-2-aimbot/',
	'/d2-wallhack': '/overwatch-2-esp/',
	'/ow2-wallhack/': '/overwatch-2-esp/',
	'/d2-download': '/setup/',
	'/ow2-download/': '/setup/',
	'/d2-easy-anticheat': '/status/',
	'/ow2-anticheat/': '/status/',
	'/d2-best-cheats': '/ow2-cheats/',
	'/d2-best-cheats/': '/ow2-cheats/',
	'/overwatch-2-aimbot-hack': '/overwatch-2-aimbot/',
	'/overwatch-2-aimbot-hack/': '/overwatch-2-aimbot/',
	'/overwatch-2-esp-hack': '/overwatch-2-esp/',
	'/overwatch-2-esp-hack/': '/overwatch-2-esp/',
	// Long SEO paths → short canonical URLs
	'/overwatch-2-cheats': '/ow2-cheats/',
	'/overwatch-2-cheats/': '/ow2-cheats/',
	'/best-overwatch-2-cheats': '/ow2-cheats/',
	'/best-overwatch-2-cheats/': '/ow2-cheats/',
	'/undetected-overwatch-2-cheats': '/ow2-cheats/',
	'/undetected-overwatch-2-cheats/': '/ow2-cheats/',
	'/overwatch-2-hero-scripts': '/ow2-cheats/',
	'/overwatch-2-hero-scripts/': '/ow2-cheats/',
	'/overwatch-2-hero-scripts': '/ow2-cheats/',
	'/overwatch-2-hero-scripts/': '/ow2-cheats/',
	'/overwatch-2-cheats-2026': '/ow2-cheats/',
	'/overwatch-2-cheats-2026/': '/ow2-cheats/',
	'/overwatch-2-cheat-download': '/setup/',
	'/overwatch-2-cheat-download/': '/setup/',
	'/overwatch-2-anticheat-bypass': '/status/',
	'/overwatch-2-anticheat-bypass/': '/status/',
	'/overwatch-2-wallhack': '/overwatch-2-esp/',
	'/overwatch-2-wallhack/': '/overwatch-2-esp/',
	'/overwatch-2-aim-assist': '/overwatch-2-aimbot/',
	'/overwatch-2-aim-assist/': '/overwatch-2-aimbot/',
	// Legacy cross-game keyword paths
	'/warzone-esp': '/overwatch-2-esp/',
	'/warzone-esp/': '/overwatch-2-esp/',
	'/warzone-aimbot': '/overwatch-2-aimbot/',
	'/warzone-aimbot/': '/overwatch-2-aimbot/',
	'/fortnite-aimbot': '/overwatch-2-aimbot/',
	'/fortnite-aimbot/': '/overwatch-2-aimbot/',
	'/fortnite-esp': '/overwatch-2-esp/',
	'/fortnite-esp/': '/overwatch-2-esp/',
	'/eac-bypass-fortnite': '/status/',
	'/eac-bypass-fortnite/': '/status/',
	// Legacy Fortnite blog slugs → short D2 posts
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/patch-notes/',
	'/blog/patch-notes-buffs-nerfs-vaults/': '/blog/patch-notes/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/skin-leaks/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/blog/skin-leaks/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/weapon-tier-list/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/blog/weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies': '/blog/pve-strategies/',
	'/blog/zero-build-meta-broken-aggressive-strategies/': '/blog/pve-strategies/',
	'/blog/fncs-meta-watch-tournament-drops': '/blog/tournament-meta/',
	'/blog/fncs-meta-watch-tournament-drops/': '/blog/tournament-meta/',
	'/blog/secret-loot-routes-full-gold': '/blog/loot-routes/',
	'/blog/secret-loot-routes-full-gold/': '/blog/loot-routes/',
	'/blog/bugha-settings-pro-setup': '/blog/pro-settings/',
	'/blog/bugha-settings-pro-setup/': '/blog/pro-settings/',
	'/blog/creative-warmup-maps-pros-use': '/blog/warmup-routine/',
	'/blog/creative-warmup-maps-pros-use/': '/blog/warmup-routine/',
	// Legacy review slugs
	'/reviews/overwatch-2-esp-zero-build-review-buildsr4k': '/reviews/esp-dungeon-buildsr4k/',
	'/reviews/overwatch-2-esp-zero-build-review-buildsr4k/': '/reviews/esp-dungeon-buildsr4k/',
	'/reviews/d2-radar-review-vanlifefn': '/reviews/radar-vanlifeeft/',
	'/reviews/d2-radar-review-vanlifefn/': '/reviews/radar-vanlifeeft/',
	'/reviews/d2-radar-review-vanlifewz': '/reviews/radar-vanlifeeft/',
	'/reviews/d2-radar-review-vanlifewz/': '/reviews/radar-vanlifeeft/',
	'/reviews/destiny-2-controller-aim-assist-review-ctrl-player99': '/reviews/aim-assist-ctrl-player99/',
	'/reviews/destiny-2-controller-aim-assist-review-ctrl-player99/': '/reviews/aim-assist-ctrl-player99/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		// Browser always revalidates; Cloudflare edge caches briefly for TTFB.
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
	}
}

/** Flat .xml sitemaps — redirect any other *.xml/ trailing-slash URL (locale sitemaps). */
function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Add trailing slash for directory-style paths (matches Astro trailingSlash: 'always'). */
function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect =
		PATH_REDIRECTS[url.pathname] ??
		CANNIBAL_REDIRECTS[url.pathname] ??
		xmlTrailingSlashRedirect(url.pathname) ??
		trailingSlashRedirect(url.pathname);
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
