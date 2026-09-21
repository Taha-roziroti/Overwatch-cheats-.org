#!/usr/bin/env node
/**
 * Sync canonical host redirects into public/_redirects (Cloudflare Pages).
 * Ensures www and http traffic 301 to https://overwatchcheats.org
 *
 * Requires DNS: proxied CNAME www → apex (see DEPLOY.md).
 * Worker middleware + src/worker.ts also enforce these when requests reach the edge.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REDIRECTS = path.join(ROOT, 'public/_redirects');

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

const apex = readBrandUrl().replace(/^https?:\/\//, '');
const www = `www.${apex}`;

const MARKER = '# Canonical host redirects (scripts/sync-host-redirects.mjs)';

function buildBlock() {
	return [
		MARKER,
		'# Do not edit by hand — regenerated on sync:brand / prebuild',
		`https://${www}/* https://${apex}/:splat 301`,
		`http://${www}/* https://${apex}/:splat 301`,
		`http://${apex}/* https://${apex}/:splat 301`,
		'',
	].join('\n');
}

let content = readFileSync(REDIRECTS, 'utf8');
const start = content.indexOf(MARKER);
if (start >= 0) {
	const end = content.indexOf('\n#', start + MARKER.length);
	const sliceEnd = end >= 0 ? end + 1 : content.length;
	content = content.slice(0, start) + buildBlock() + content.slice(sliceEnd);
} else {
	// Insert after brand-studio block (first non-comment infrastructure section)
	const insertAt = content.indexOf('# Legacy sitemap URL');
	const block = `${buildBlock()}`;
	content =
		insertAt >= 0
			? content.slice(0, insertAt) + block + content.slice(insertAt)
			: block + content;
}

writeFileSync(REDIRECTS, content.endsWith('\n') ? content : `${content}\n`);
console.log(`Synced host redirects: www/http → https://${apex}`);
