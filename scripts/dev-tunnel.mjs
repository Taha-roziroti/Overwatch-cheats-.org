#!/usr/bin/env node
/**
 * Start dev server + public tunnel for Cloud Agent browsing.
 * Usage: npm run dev:tunnel
 */
import { spawn } from 'node:child_process';
import { createWriteStream, readFileSync, existsSync } from 'node:fs';
import http from 'node:http';

const PORT = 4321;
const LOG = '/tmp/dev-tunnel.log';

function log(msg) {
	const line = `[dev-tunnel] ${msg}\n`;
	process.stdout.write(line);
	createWriteStream(LOG, { flags: 'a' }).write(line);
}

function waitForServer(ms = 60000) {
	const start = Date.now();
	return new Promise((resolve, reject) => {
		const tick = () => {
			const req = http.get(`http://127.0.0.1:${PORT}/`, (res) => {
				res.resume();
				if (res.statusCode === 200) resolve();
				else if (Date.now() - start > ms) reject(new Error('timeout'));
				else setTimeout(tick, 1000);
			});
			req.on('error', () => {
				if (Date.now() - start > ms) reject(new Error('dev server did not start'));
				else setTimeout(tick, 1000);
			});
		};
		tick();
	});
}

function startDev() {
	log('Starting Astro dev server…');
	return spawn('npm', ['run', 'dev'], {
		cwd: process.cwd(),
		stdio: 'ignore',
		detached: true,
	}).unref();
}

function startTunnel() {
	return new Promise((resolve, reject) => {
		log('Starting public tunnel (localtunnel)…');
		const lt = spawn('npx', ['--yes', 'localtunnel', '--port', String(PORT)], {
			cwd: process.cwd(),
			stdio: ['ignore', 'pipe', 'pipe'],
		});
		let out = '';
		lt.stdout.on('data', (d) => {
			out += d.toString();
			const m = out.match(/https:\/\/[^\s]+\.loca\.lt/);
			if (m) resolve(m[0]);
		});
		lt.stderr.on('data', (d) => {
			out += d.toString();
		});
		lt.on('error', reject);
		lt.on('close', (code) => {
			if (code !== 0) reject(new Error(out || `localtunnel exited ${code}`));
		});
		setTimeout(() => reject(new Error('tunnel timeout')), 30000);
	});
}

async function main() {
	// Reuse running dev server when possible
	try {
		await waitForServer(3000);
		log(`Dev server already listening on http://localhost:${PORT}/`);
	} catch {
		startDev();
		await waitForServer();
		log(`Dev server ready at http://localhost:${PORT}/`);
	}

	const url = await startTunnel();
	log('');
	log('══════════════════════════════════════════════════');
	log(`  PUBLIC URL: ${url}`);
	log('  (Click Continue on the localtunnel page if prompted)');
	log(`  Local VM:   http://localhost:${PORT}/`);
	log('══════════════════════════════════════════════════');
	log('');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
