import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Review = {
	slug: string;
	handle: string;
	text: string;
	short?: string;
	date: string;
	rating: number;
	href: string;
	tag?: string;
};

type Props = {
	locale: string;
	reviews: Review[];
	averageRating: number;
	totalCount: number;
	reviewsBasePath: string;
};

const ROTATE_MS = 5200;

function formatDate(iso: string, locale: string) {
	return new Date(`${iso}T12:00:00`).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
		month: 'short',
		year: 'numeric',
	});
}

function initial(handle: string) {
	return handle.replace(/^@/, '').charAt(0).toUpperCase();
}

function Stars({ rating, animate }: { rating: number; animate?: boolean }) {
	return (
		<span className={`review-stars${animate ? ' review-stars--pop' : ''}`} aria-hidden="true">
			{[1, 2, 3, 4, 5].map((i) => (
				<svg
					key={i}
					viewBox="0 0 20 20"
					fill="currentColor"
					className={i <= rating ? 'review-stars__on' : 'review-stars__off'}
				>
					<path d="M10 2.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L10 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L10 2.5z" />
				</svg>
			))}
		</span>
	);
}

function HomeReviewsInner({
	locale,
	reviews,
	averageRating,
	totalCount,
	reviewsBasePath,
}: Props) {
	const { t } = useTranslation();
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	const [tick, setTick] = useState(0);
	const count = reviews.length;
	const ratingLabel = averageRating.toFixed(1);

	const go = useCallback(
		(index: number) => {
			setActive(((index % count) + count) % count);
			setTick((n) => n + 1);
		},
		[count],
	);

	const prev = useCallback(() => {
		setActive((current) => (current - 1 + count) % count);
		setTick((n) => n + 1);
	}, [count]);

	const next = useCallback(() => {
		setActive((current) => (current + 1) % count);
		setTick((n) => n + 1);
	}, [count]);

	useEffect(() => {
		if (paused || count <= 1) return;
		const id = window.setInterval(() => {
			setActive((current) => (current + 1) % count);
			setTick((n) => n + 1);
		}, ROTATE_MS);
		return () => window.clearInterval(id);
	}, [paused, count]);

	const offset = (i: number) => {
		let d = i - active;
		if (d > count / 2) d -= count;
		if (d < -count / 2) d += count;
		return d;
	};

	return (
		<section className="reviews" aria-labelledby="reviews-title">
			<div className="reviews__glow" aria-hidden="true" />
			<div className="shell">
				<header className="reviews__head">
					<div className="reviews__head-copy">
						<p className="reviews__eyebrow">{t('reviews.eyebrow')}</p>
						<h2 id="reviews-title" className="reviews__section-title">
							{t('reviews.homeTitle')}
						</h2>
						<p className="reviews__section-sub">{t('reviews.subtitle')}</p>
					</div>
					<div
						className="reviews__score"
						aria-label={t('reviews.averageAria', { rating: ratingLabel, count: totalCount })}
					>
						<strong>{ratingLabel}</strong>
						<div>
							<Stars rating={Math.round(averageRating)} />
							<p>{t('reviews.buyerReviews', { count: totalCount })}</p>
						</div>
					</div>
				</header>

				<div
					className="reviews__stage"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
					onFocus={() => setPaused(true)}
					onBlur={() => setPaused(false)}
				>
					<button
						type="button"
						className="reviews__nav reviews__nav--prev"
						onClick={(event) => {
							event.stopPropagation();
							prev();
						}}
						aria-label="Previous review"
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M15 18l-6-6 6-6" />
						</svg>
					</button>

					<div className="reviews__carousel" role="list">
						{reviews.map((review, i) => {
							const pos = offset(i);
							if (Math.abs(pos) > 2) return null;
							const isCenter = pos === 0;
							const absPos = Math.abs(pos);
							return (
								<article
									key={review.slug}
									className={`review-spotlight${isCenter ? ' review-spotlight--active' : ''}`}
									style={{
										transform: `translate(-50%, -50%) translateX(${pos * 108}%) scale(${1 - absPos * 0.08}) rotateY(${pos * -8}deg)`,
										opacity: 1 - absPos * 0.35,
										zIndex: 10 - absPos,
									}}
									role="listitem"
									aria-hidden={!isCenter}
								>
									{isCenter && review.tag && <span className="review-spotlight__tag">{review.tag}</span>}
									<Stars rating={review.rating} animate={isCenter} />
									<blockquote className="review-spotlight__quote">
										{isCenter ? review.text : (review.short ?? review.text)}
									</blockquote>
									<footer className="review-spotlight__foot">
										<span className="review-spotlight__avatar" aria-hidden="true">
											{initial(review.handle)}
										</span>
										<div className="review-spotlight__who">
											{isCenter ? (
												<a className="review-spotlight__name" href={review.href}>
													{review.handle}
												</a>
											) : (
												<span className="review-spotlight__name">{review.handle}</span>
											)}
											<time dateTime={review.date}>{formatDate(review.date, locale)}</time>
										</div>
										<span className="review-spotlight__rating">{review.rating}/5</span>
									</footer>
									{isCenter && <div className="review-spotlight__shine" aria-hidden="true" />}
								</article>
							);
						})}
					</div>

					<button
						type="button"
						className="reviews__nav reviews__nav--next"
						onClick={(event) => {
							event.stopPropagation();
							next();
						}}
						aria-label="Next review"
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M9 18l6-6-6-6" />
						</svg>
					</button>
				</div>

				<div className="reviews__controls">
					<div className="reviews__dots" role="tablist" aria-label="Review slides">
						{reviews.map((review, i) => (
							<button
								key={review.slug}
								type="button"
								role="tab"
								className={`reviews__dot${i === active ? ' reviews__dot--active' : ''}`}
								aria-selected={i === active}
								aria-label={`Review by ${review.handle}`}
								onClick={() => go(i)}
							>
								{i === active && (
									<span
										key={tick}
										className="reviews__dot-progress"
										style={{ animationDuration: `${ROTATE_MS}ms` }}
									/>
								)}
							</button>
						))}
					</div>
					<p className="reviews__more">
						<a href={reviewsBasePath}>{t('reviews.readAll')}</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default function HomeReviewsApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeReviewsInner {...props} />
		</I18nProvider>
	);
}
