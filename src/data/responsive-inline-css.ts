/**
 * Inlined in Layout <head> so HTML-only SEO crawlers see @media breakpoints
 * (Vite bundles component/global CSS into external files they often skip).
 */
export const responsiveInlineCss = `
html {
	-webkit-text-size-adjust: 100%;
}
img,
video {
	max-width: 100%;
	height: auto;
}
.shell {
	width: min(100%, 1240px);
	margin-inline: auto;
	padding-inline: max(1rem, 4.2vw);
	box-sizing: border-box;
}
@media (max-width: 1024px) {
	.shell {
		padding-inline: max(1rem, 3.5vw);
	}
}
@media (max-width: 768px) {
	:root {
		--header-h: 3.65rem;
	}
	.shell {
		padding-inline: max(1rem, 4vw);
	}
	.section-head {
		flex-direction: column;
		align-items: flex-start;
	}
}
@media (max-width: 480px) {
	:root {
		--page-gutter: max(0.875rem, 3.5vw);
	}
	body {
		font-size: 14.5px;
	}
	.shell {
		padding-inline: var(--page-gutter, 0.875rem);
	}
}
@media (max-height: 480px) and (orientation: landscape) {
	:root {
		--header-h: 3.25rem;
	}
}
`.trim();
