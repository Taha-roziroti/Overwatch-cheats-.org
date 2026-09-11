#!/usr/bin/env node
/** Import user-provided Destiny 2 screenshots into public/images */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const imagesDir = path.join(root, 'public/images');
const assetsDir = '/home/ubuntu/.cursor/projects/workspace/assets';

const SCREENSHOTS = [
	{
		source: '1f16461c-8ccd-453a-854e-dea0b9353315.png',
		file: 'destiny-2-cheats-pve.webp',
		alt: 'Destiny 2 PvE raid damage overlay with aimbot and ESP',
	},
	{
		source: '34da72ef-8eb0-4669-8ca3-9f99e9fbdac3.png',
		file: 'destiny-2-cheats-crucible.webp',
		alt: 'Destiny 2 Crucible PvP aimbot and skeleton ESP wallhack',
	},
	{
		source: 'e2c6411e-cda6-494d-831f-bf7dd190f20a.png',
		file: 'destiny-2-cheats-esp-crucible.webp',
		alt: 'Destiny 2 ESP player wallhack in Crucible match',
	},
	{
		source: '5ba42463-77b5-4591-9da2-adc911c40764.png',
		file: 'destiny-2-cheats-wallhack-skeleton.webp',
		alt: 'Destiny 2 skeleton ESP and wallhack through walls',
	},
	{
		source: '9ee118f5-2352-4553-a359-a07859257b51.png',
		file: 'destiny-2-cheats-aimbot-esp.webp',
		alt: 'Destiny 2 aimbot ESP box overlay in PvP',
	},
];

const CONTENT_WIDTHS = [480, 960];

async function convertScreenshots() {
	await mkdir(imagesDir, { recursive: true });
	for (const { source, file } of SCREENSHOTS) {
		const input = path.join(assetsDir, source);
		const base = file.replace('.webp', '');
		const outPath = path.join(imagesDir, file);
		await sharp(input).webp({ quality: 82, effort: 6 }).toFile(outPath);
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

async function createHeroPoster() {
	const input = path.join(assetsDir, '34da72ef-8eb0-4669-8ca3-9f99e9fbdac3.png');
	const posterPath = path.join(imagesDir, 'destiny-2-hero-poster.webp');
	await sharp(input)
		.resize(1920, 608, { fit: 'cover', position: 'centre' })
		.webp({ quality: 85, effort: 6 })
		.toFile(posterPath);
	console.log(`Wrote hero poster ${posterPath}`);
	for (const w of [640, 1024, 1536]) {
		const variant = path.join(imagesDir, `destiny-2-hero-poster-${w}w.webp`);
		await sharp(input)
			.resize(w, Math.round(w / 3.15), { fit: 'cover', position: 'centre' })
			.webp({ quality: 82, effort: 6 })
			.toFile(variant);
	}
}

async function createLogo() {
	const input = path.join(assetsDir, '1f16461c-8ccd-453a-854e-dea0b9353315.png');
	const BG = { r: 12, g: 10, b: 18, alpha: 1 };
	const logoPng = path.join(imagesDir, 'destiny-2-cheats-logo.png');
	const logoWebp = path.join(imagesDir, 'destiny-2-cheats-logo.webp');
	await sharp(input).resize(512, 512, { fit: 'cover', position: 'centre', background: BG }).png().toFile(logoPng);
	await sharp(logoPng).webp({ quality: 90 }).toFile(logoWebp);
	console.log('Wrote logo assets');
}

await convertScreenshots();
await createHeroPoster();
await createLogo();
