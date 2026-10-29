/** Absolute https URL for same-site paths (audit-friendly internal links). */
export function absInternal(href: string, origin: string): string {
	if (/^https?:\/\//i.test(href)) return href;
	return new URL(href, origin.endsWith('/') ? origin : `${origin}/`).href;
}
