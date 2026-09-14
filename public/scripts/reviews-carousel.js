/** Reviews spotlight carousel — external module (CSP-safe, no inline scripts). */
const ROTATE_MS_DEFAULT = 5200;

function formatDate(iso, locale) {
	return new Date(`${iso}T12:00:00`).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
		month: 'short',
		year: 'numeric',
	});
}

function offsetIndex(index, active, count) {
	let d = index - active;
	if (d > count / 2) d -= count;
	if (d < -count / 2) d += count;
	return d;
}

function renderStars(rating) {
	return [1, 2, 3, 4, 5]
		.map(
			(i) =>
				`<svg viewBox="0 0 20 20" fill="currentColor" class="${i <= rating ? 'review-stars__on' : 'review-stars__off'}"><path d="M10 2.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L10 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L10 2.5z"/></svg>`,
		)
		.join('');
}

function updateDotProgress(root, active, rotateMs) {
	root.querySelectorAll('[data-reviews-dot]').forEach((dot, i) => {
		const existing = dot.querySelector('.reviews__dot-progress');
		if (existing) existing.remove();
		if (i === active) {
			const bar = document.createElement('span');
			bar.className = 'reviews__dot-progress';
			bar.style.animationDuration = `${rotateMs}ms`;
			dot.appendChild(bar);
		}
	});
}

function paintCarousel(root, active, rotateMs) {
	const locale = root.dataset.locale || 'en';
	const cards = [...root.querySelectorAll('[data-review-index]')];
	const count = cards.length;
	const mobile = window.matchMedia('(max-width: 760px)').matches;

	if (mobile) {
		cards.forEach((card, i) => {
			const isCenter = i === active;
			card.hidden = !isCenter;
			card.classList.toggle('review-spotlight--active', isCenter);
			card.setAttribute('aria-hidden', isCenter ? 'false' : 'true');
		});
		root.querySelectorAll('[data-reviews-dot]').forEach((dot, i) => {
			dot.classList.toggle('reviews__dot--active', i === active);
			dot.setAttribute('aria-selected', i === active ? 'true' : 'false');
		});
		updateDotProgress(root, active, rotateMs);
		return;
	}

	cards.forEach((card, i) => {
		const pos = offsetIndex(i, active, count);
		if (Math.abs(pos) > 2) {
			card.hidden = true;
			return;
		}

		card.hidden = false;
		const isCenter = pos === 0;
		const absPos = Math.abs(pos);
		card.classList.toggle('review-spotlight--active', isCenter);
		card.style.transform = `translate(-50%, -50%) translateX(${pos * 108}%) scale(${1 - absPos * 0.08}) rotateY(${pos * -8}deg)`;
		card.style.opacity = String(1 - absPos * 0.35);
		card.style.zIndex = String(10 - absPos);
		card.setAttribute('aria-hidden', isCenter ? 'false' : 'true');

		const quote = card.querySelector('.review-spotlight__quote');
		if (quote) {
			quote.textContent = isCenter ? quote.dataset.full || '' : quote.dataset.short || quote.dataset.full || '';
		}

		const tag = card.querySelector('.review-spotlight__tag');
		if (tag) tag.hidden = !isCenter;

		const shine = card.querySelector('.review-spotlight__shine');
		if (shine) shine.hidden = !isCenter;

		const stars = card.querySelector('.review-stars');
		if (stars) {
			stars.classList.toggle('review-stars--pop', isCenter);
		}

		const nameEl = card.querySelector('.review-spotlight__name');
		if (nameEl) {
			const href = nameEl.dataset.href || (nameEl instanceof HTMLAnchorElement ? nameEl.href : '');
			if (isCenter && href) {
				if (nameEl.tagName !== 'A') {
					const link = document.createElement('a');
					link.className = 'review-spotlight__name';
					link.href = href;
					link.textContent = nameEl.textContent;
					nameEl.replaceWith(link);
				}
			} else if (nameEl.tagName === 'A') {
				const span = document.createElement('span');
				span.className = 'review-spotlight__name';
				span.dataset.href = nameEl.getAttribute('href') || '';
				span.textContent = nameEl.textContent;
				nameEl.replaceWith(span);
			}
		}

		const timeEl = card.querySelector('time');
		if (timeEl && card.dataset.date) {
			timeEl.textContent = formatDate(card.dataset.date, locale);
		}
	});

	root.querySelectorAll('[data-reviews-dot]').forEach((dot, i) => {
		dot.classList.toggle('reviews__dot--active', i === active);
		dot.setAttribute('aria-selected', i === active ? 'true' : 'false');
	});

	updateDotProgress(root, active, rotateMs);
}

function initCarousel(root) {
	const cards = root.querySelectorAll('[data-review-index]');
	if (!cards.length) return;

	let active = 0;
	let paused = false;
	const rotateMs = Number(root.dataset.rotateMs) || ROTATE_MS_DEFAULT;

	const go = (index) => {
		active = ((index % cards.length) + cards.length) % cards.length;
		paintCarousel(root, active, rotateMs);
	};

	root.querySelector('[data-reviews-prev]')?.addEventListener('click', (event) => {
		event.preventDefault();
		go(active - 1);
	});

	root.querySelector('[data-reviews-next]')?.addEventListener('click', (event) => {
		event.preventDefault();
		go(active + 1);
	});

	root.querySelectorAll('[data-reviews-dot]').forEach((dot) => {
		dot.addEventListener('click', (event) => {
			event.preventDefault();
			go(Number(dot.dataset.reviewsDot));
		});
	});

	const stage = root.querySelector('.reviews__stage');
	stage?.addEventListener('mouseenter', () => {
		paused = true;
	});
	stage?.addEventListener('mouseleave', () => {
		paused = false;
	});
	stage?.addEventListener('focusin', () => {
		paused = true;
	});
	stage?.addEventListener('focusout', (event) => {
		if (stage.contains(event.relatedTarget)) return;
		paused = false;
	});

	if (cards.length > 1) {
		window.setInterval(() => {
			if (!paused) go(active + 1);
		}, rotateMs);
	}

	paintCarousel(root, active, rotateMs);
}

function boot() {
	document.querySelectorAll('[data-reviews-carousel]').forEach(initCarousel);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot);
} else {
	boot();
}
