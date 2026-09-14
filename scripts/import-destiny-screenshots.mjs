#!/usr/bin/env node
/** Import user-provided Overwatch 2 screenshots into public/images */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const imagesDir = path.join(root, 'public/images');
const publicDir = path.join(root, 'public');
const assetsDir = '/home/ubuntu/.cursor/projects/workspace/assets';

const SCREENSHOTS = [
	{
		source: 'cb1d5776-5fff-467c-a96a-7204637b72d3.jpg',
		file: 'overwatch-2-cheats-pve.webp',
	},
	{
		source: '2f856e5d-335b-42ba-a52f-04dae9a8c6a3.jpg',
		file: 'overwatch-2-cheats-wallhack-skeleton.webp',
	},
	{
		source: '1bb70899-1276-4ee5-b51d-7571cfa05817.jpg',
		file: 'overwatch-2-cheats-crucible.webp',
	},
	{
		source: '4248f417-1bbe-4505-bd4d-38af9b69744f.jpg',
		file: 'overwatch-2-cheats-esp-crucible.webp',
	},
	{
		source: 'b4bf5484-aa0f-4df7-b164-f18c8b5c6f05.jpg',
		file: 'overwatch-2-cheats-aimbot-esp.webp',
	},
];

const DERIVED = [
	{ from: 'overwatch-2-cheats-esp-crucible.webp', file: 'overwatch-2-cheats-esp.webp' },
	{ from: 'overwatch-2-cheats-crucible.webp', file: 'overwatch-2-cheats-aimbot.webp' },
	{ from: 'overwatch-2-cheats-wallhack-skeleton.webp', file: 'overwatch-2-cheats-radar.webp' },
];

const HERO_WIDTHS = [640, 1024, 1536];
const CONTENT_WIDTHS = [480, 960];

const THEME_BG = { r: 12, g: 10, b: 18, alpha: 1 };

async function convertScreenshots() {
	await mkdir(imagesDir, { recursive: true });
	for (const { source, file } of SCREENSHOTS) {
		const input = path.join(assetsDir, source);
		const base = file.replace('.webp', '');
		const outPath = path.join(imagesDir, file);
		await sharp(input)
			.resize({ width: 1920, withoutEnlargement: true })
			.webp({ quality: 82, effort: 6 })
			.toFile(outPath);
		console.log(`Wrote ${outPath}`);
		for (const w of CONTENT_WIDTHS) {
			const variant = path.join(imagesDir, `${base}-${w}w.webp`);
			await sharp(input)
				.resize(w, null, { withoutEnlargement: true })
				.webp({ quality: 80, effort: 6 })
				.toFile(variant);
			console.log(`Wrote ${variant}`);
		}
	}
}

async function createDerived() {
	for (const { from, file } of DERIVED) {
		const input = path.join(imagesDir, from);
		const base = file.replace('.webp', '');
		await sharp(input).webp({ quality: 82 }).toFile(path.join(imagesDir, file));
		for (const w of CONTENT_WIDTHS) {
			await sharp(input)
				.resize(w, null, { withoutEnlargement: true })
				.webp({ quality: 80 })
				.toFile(path.join(imagesDir, `${base}-${w}w.webp`));
		}
		console.log(`Derived ${file}`);
	}
}

async function createHeroPoster() {
	const input = path.join(imagesDir, 'overwatch-2-cheats-crucible.webp');
	const posterPath = path.join(imagesDir, 'overwatch-2-hero-poster.webp');
	await sharp(input)
		.resize(1920, 608, { fit: 'cover', position: 'centre' })
		.webp({ quality: 85, effort: 6 })
		.toFile(posterPath);
	console.log(`Wrote hero poster ${posterPath}`);
	for (const w of HERO_WIDTHS) {
		const variant = path.join(imagesDir, `overwatch-2-hero-poster-${w}w.webp`);
		await sharp(input)
			.resize(w, Math.round(w / 3.15), { fit: 'cover', position: 'centre' })
			.webp({ quality: 82, effort: 6 })
			.toFile(variant);
	}
}

async function createLogo() {
	const input = path.join(imagesDir, 'overwatch-2-cheats-crucible.webp');
	const logoPng = path.join(imagesDir, 'overwatch-2-cheats-logo.png');
	const logoWebp = path.join(imagesDir, 'overwatch-2-cheats-logo.webp');
	await sharp(input)
		.resize(512, 512, { fit: 'cover', position: 'centre', background: THEME_BG })
		.png()
		.toFile(logoPng);
	await sharp(logoPng).webp({ quality: 90 }).toFile(logoWebp);
	console.log('Wrote logo assets');

	const logoBuffer = await sharp(logoPng).toBuffer();
	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(
			path.join(publicDir, name),
			await sharp(logoBuffer).resize(size, size).png().toBuffer(),
		);
	}
	await writeFile(
		path.join(publicDir, 'favicon.ico'),
		await sharp(logoBuffer).resize(32, 32).png().toBuffer(),
	);
	const svgBase64 = logoBuffer.toString('base64');
	await writeFile(
		path.join(publicDir, 'favicon.svg'),
		`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><rect width="512" height="512" fill="#0c0a10"/><image width="512" height="512" href="data:image/png;base64,${svgBase64}"/></svg>`,
	);
	console.log('Wrote favicons');
}

await convertScreenshots();
await createDerived();
await createHeroPoster();
await createLogo();
console.log('Done — Overwatch 2 screenshots imported.');
