#!/usr/bin/env node
/**
 * Audit internal href="/..." links in built HTML and old path usage in src/.
 * Run after build: node scripts/audit-internal-links.mjs
 */
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const REDIRECTS_FILE = path.join(ROOT, 'public', '_redirects');
const SRC_DIR = path.join(ROOT, 'src');

const OLD_PATH_PREFIXES = [
	'/features/',
	'/pricing/',
	'/setup/',
	'/updates/',
	'/faq/',
	'/support/',
	'/reviews/',
	'/blog/',
	'/privacy-policy/',
	'/refund-policy/',
	'/terms/',
	'/hacks/',
];

/** href="/..." — exclude http(s), mailto, # */
const HREF_RE = /\bhref\s*=\s*(["'])(\/(?!\/)[^"'#]*)\1/gi;

async function resolveDistRoot() {
	for (const dir of [path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'client')]) {
		try {
			await access(path.join(dir, 'index.html'));
			return dir;
		} catch {
			/* next */
		}
	}
	throw new Error('dist/ missing — run `npm run build` first');
}

/** @returns {Set<string>} paths relative to dist root */
async function indexDistFiles(distRoot) {
	const files = new Set();
	async function walk(absDir, relPrefix = '') {
		const entries = await readdir(absDir, { withFileTypes: true });
		for (const entry of entries) {
			const rel = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;
			if (entry.isDirectory()) {
				await walk(path.join(absDir, entry.name), rel);
			} else {
				files.add(rel.replace(/\\/g, '/'));
			}
		}
	}
	await walk(distRoot);
	return files;
}

function parse301Redirects(text) {
	const rules = [];
	for (const line of text.split(/\r?\n/)) {
		const t = line.trim();
		if (!t || t.startsWith('#')) continue;
		const parts = t.split(/\s+/);
		if (parts.length < 3) continue;
		const [from, to, status] = parts;
		if (status !== '301') continue;
		rules.push({
			from,
			to,
			wildcard: from.endsWith('/*'),
			prefix: from.endsWith('/*') ? from.slice(0, -1) : null,
		});
	}
	return rules;
}

function normalizeUrlPath(raw) {
	let p = raw.split(/[?#]/)[0];
	if (!p.startsWith('/')) p = `/${p}`;
	return p;
}

function pathVariants(p) {
	const variants = new Set([p]);
	if (p.endsWith('/') && p.length > 1) variants.add(p.slice(0, -1));
	else if (p !== '/') variants.add(`${p}/`);
	return [...variants];
}

function applyRedirect(urlPath, rules) {
	for (const rule of rules) {
		for (const variant of pathVariants(urlPath)) {
			if (rule.wildcard) {
				const prefix = rule.prefix;
				const prefixNoSlash = prefix.endsWith('/') ? prefix.slice(0, -1) : prefix;
				if (variant === prefix || variant === prefixNoSlash) {
					return rule.to.replace(':splat', '');
				}
				if (variant.startsWith(prefix)) {
					const splat = variant.slice(prefix.length);
					return rule.to.replace(':splat', splat);
				}
				if (variant.startsWith(`${prefixNoSlash}/`)) {
					const splat = variant.slice(prefixNoSlash.length + 1);
					return rule.to.replace(':splat', splat);
				}
			} else if (variant === rule.from) {
				return rule.to;
			}
		}
	}
	return null;
}

function resolveRedirectChain(urlPath, rules, maxHops = 12) {
	let current = normalizeUrlPath(urlPath);
	const seen = new Set();
	for (let i = 0; i < maxHops; i++) {
		if (seen.has(current)) return { final: current, hasRedirect: true, loop: true };
		seen.add(current);
		const next = applyRedirect(current, rules);
		if (!next) return { final: current, hasRedirect: i > 0 };
		current = normalizeUrlPath(next);
	}
	return { final: current, hasRedirect: true, loop: true };
}

function distHasUrl(urlPath, distFiles) {
	const p = normalizeUrlPath(urlPath);
	if (p === '/') return distFiles.has('index.html');

	const rel = p.replace(/^\//, '').replace(/\/$/, '');
	if (!rel) return distFiles.has('index.html');

	const candidates = [
		`${rel}/index.html`,
		rel,
		`${rel}.html`,
	];
	for (const c of candidates) {
		if (distFiles.has(c)) return true;
	}
	return false;
}

function isInternalHref(href) {
	if (!href.startsWith('/')) return false;
	if (href.startsWith('//')) return false;
	const lower = href.toLowerCase();
	if (lower.startsWith('/http') || lower.startsWith('/mailto')) return false;
	return true;
}

async function collectHtmlFiles(dir, prefix = '') {
	const out = [];
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const rel = prefix ? `${relPrefix(entry, prefix)}` : entry.name;
		const abs = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			out.push(...(await collectHtmlFiles(abs, rel)));
		} else if (entry.name.endsWith('.html')) {
			out.push({ rel: rel.replace(/\\/g, '/'), abs });
		}
	}
	return out;
}

function relPrefix(entry, prefix) {
	return `${prefix}/${entry.name}`;
}

function extractHrefs(html) {
	const hrefs = [];
	let m;
	HREF_RE.lastIndex = 0;
	while ((m = HREF_RE.exec(html)) !== null) {
		const href = m[2];
		if (isInternalHref(href)) hrefs.push(href);
	}
	return hrefs;
}

async function collectSrcFiles(dir, prefix = '') {
	const out = [];
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
		const abs = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			out.push(...(await collectSrcFiles(abs, rel)));
		} else if (/\.(astro|tsx?|jsx?|mjs|cjs|vue|svelte|md|mdx|json|css)$/i.test(entry.name)) {
			out.push({ rel: rel.replace(/\\/g, '/'), abs });
		}
	}
	return out;
}

function findOldPathsInContent(content, fileRel) {
	const hits = [];
	for (const prefix of OLD_PATH_PREFIXES) {
		let idx = 0;
		while ((idx = content.indexOf(prefix, idx)) !== -1) {
			hits.push({ file: fileRel, path: prefix, index: idx });
			idx += prefix.length;
		}
	}
	// Also match exact paths without trailing segment (e.g. href="/features")
	for (const prefix of OLD_PATH_PREFIXES) {
		const exact = prefix.slice(0, -1);
		const re = new RegExp(`(?<![\\w-])${exact.replace(/\//g, '\\/')}(?=["'\\s/?]|$)`, 'g');
		let m;
		while ((m = re.exec(content)) !== null) {
			const already = hits.some(
				(h) => h.file === fileRel && h.index <= m.index && m.index < h.index + h.path.length,
			);
			if (!already) hits.push({ file: fileRel, path: exact, index: m.index });
		}
	}
	return hits;
}

async function main() {
	const distRoot = await resolveDistRoot();
	const distFiles = await indexDistFiles(distRoot);
	const redirectsText = await readFile(REDIRECTS_FILE, 'utf8');
	const redirectRules = parse301Redirects(redirectsText);

	const htmlFiles = await collectHtmlFiles(distRoot);
	const brokenLinks = [];
	const brokenByHref = new Map();

	for (const { rel: htmlRel, abs } of htmlFiles) {
		const html = await readFile(abs, 'utf8');
		const hrefs = extractHrefs(html);
		for (const href of hrefs) {
			const normalized = normalizeUrlPath(href);
			const hadRedirect = applyRedirect(normalized, redirectRules) !== null;
			const { final, loop } = resolveRedirectChain(normalized, redirectRules);

			if (loop) {
				brokenLinks.push({
					source: htmlRel,
					href,
					reason: 'redirect loop',
					resolved: final,
				});
				brokenByHref.set(href, (brokenByHref.get(href) || 0) + 1);
				continue;
			}

			const directExists = distHasUrl(normalized, distFiles);
			const resolvedExists = distHasUrl(final, distFiles);

			if (resolvedExists) continue;

			if (!hadRedirect && !directExists) {
				brokenLinks.push({
					source: htmlRel,
					href,
					reason: 'no dist file and no 301 redirect',
				});
			} else {
				brokenLinks.push({
					source: htmlRel,
					href,
					reason: hadRedirect
						? '301 redirect target missing in dist'
						: 'no dist file at resolved path',
					resolved: final !== normalized ? final : undefined,
				});
			}
			brokenByHref.set(href, (brokenByHref.get(href) || 0) + 1);
		}
	}

	const srcFiles = await collectSrcFiles(SRC_DIR);
	const oldPathHits = [];
	const oldPathByFile = new Map();

	for (const { rel, abs } of srcFiles) {
		const content = await readFile(abs, 'utf8');
		const hits = findOldPathsInContent(content, rel);
		if (hits.length) {
			oldPathHits.push(...hits);
			oldPathByFile.set(rel, hits);
		}
	}

	const uniqueBrokenHrefs = [...brokenByHref.keys()];
	const uniqueOldPathFiles = [...oldPathByFile.keys()];

	const report = {
		summary: {
			htmlFilesScanned: htmlFiles.length,
			brokenLinkInstances: brokenLinks.length,
			uniqueBrokenHrefs: uniqueBrokenHrefs.length,
			srcFilesWithOldPaths: uniqueOldPathFiles.length,
			oldPathInstances: oldPathHits.length,
		},
		brokenLinks,
		uniqueBrokenHrefs: uniqueBrokenHrefs.sort(),
		srcOldPaths: uniqueOldPathFiles.sort().map((file) => ({
			file,
			paths: [...new Set(oldPathByFile.get(file).map((h) => h.path))].sort(),
			count: oldPathByFile.get(file).length,
		})),
	};

	console.log(JSON.stringify(report, null, 2));

	if (brokenLinks.length || oldPathHits.length) {
		process.exitCode = 1;
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
