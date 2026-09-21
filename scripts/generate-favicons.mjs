#!/usr/bin/env node
/**
 * Generate favicon PNG/ICO assets from the Overwatch logo emblem.
 * Crops to the circular mark (top of logo) for legibility at 16–32px.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');

const defaultSource = path.join(publicDir, 'overwatch-logo-source.png');
const source = process.argv[2] ? path.resolve(process.argv[2]) : defaultSource;

if (!fs.existsSync(source)) {
	console.error(`Source image not found: ${source}`);
	process.exit(1);
}

const BG = { r: 27, g: 26, b: 27, alpha: 1 }; // --bg #1B1A1B

async function emblemPipeline() {
	const trimmed = await sharp(source).trim({ threshold: 12 }).toBuffer();
	const meta = await sharp(trimmed).metadata();
	const width = meta.width ?? 447;
	const height = meta.height ?? 447;
	// Upper emblem only — text is illegible below ~32px.
	const emblemHeight = Math.min(height, Math.round(width * 0.56));
	return sharp(trimmed)
		.extract({ left: 0, top: 0, width, height: emblemHeight })
		.flatten({ background: BG })
		.toBuffer();
}

async function writeSquarePng(emblem, size, outPath) {
	await sharp(emblem)
		.resize(size, size, {
			fit: 'contain',
			background: BG,
		})
		.png({ compressionLevel: 9 })
		.toFile(outPath);
	console.log(`wrote ${path.relative(root, outPath)}`);
}

async function writeIco(emblem, outPath) {
	const sizes = [16, 32, 48];
	const pngBuffers = await Promise.all(
		sizes.map((size) =>
			sharp(emblem)
				.resize(size, size, { fit: 'contain', background: BG })
				.png()
				.toBuffer(),
		),
	);

	// Minimal ICO container: one PNG per entry (Vista+ style)
	const parts = [];
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0);
	header.writeUInt16LE(1, 2);
	header.writeUInt16LE(pngBuffers.length, 4);
	parts.push(header);

	const dirEntries = [];
	let offset = 6 + pngBuffers.length * 16;
	for (let i = 0; i < pngBuffers.length; i++) {
		const size = sizes[i];
		const png = pngBuffers[i];
		const entry = Buffer.alloc(16);
		entry.writeUInt8(size === 256 ? 0 : size, 0);
		entry.writeUInt8(size === 256 ? 0 : size, 1);
		entry.writeUInt8(0, 2);
		entry.writeUInt8(0, 3);
		entry.writeUInt16LE(1, 4);
		entry.writeUInt16LE(32, 6);
		entry.writeUInt32LE(png.length, 8);
		entry.writeUInt32LE(offset, 12);
		dirEntries.push(entry);
		offset += png.length;
	}

	const ico = Buffer.concat([...parts, ...dirEntries, ...pngBuffers]);
	fs.writeFileSync(outPath, ico);
	console.log(`wrote ${path.relative(root, outPath)}`);
}

const emblem = await emblemPipeline();

await writeSquarePng(emblem, 16, path.join(publicDir, 'favicon-16x16.png'));
await writeSquarePng(emblem, 32, path.join(publicDir, 'favicon-32x32.png'));
await writeSquarePng(emblem, 192, path.join(publicDir, 'favicon.png'));
await writeSquarePng(emblem, 180, path.join(publicDir, 'apple-touch-icon.png'));
await writeIco(emblem, path.join(publicDir, 'favicon.ico'));

console.log('Favicon generation complete.');
