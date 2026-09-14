#!/usr/bin/env node
/**
 * Build + serve static site + Cloudflare quick tunnel (works from any browser).
 * Usage: npm run serve:public
 */
import { spawn } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const ROOT = process.cwd();
const PORT = 8080;
const CF = '/tmp/cloudflared';
const LOG = '/tmp/serve-public.log';
const URL_FILE = path.join(ROOT, 'PUBLIC_DEV_URL.txt');

function log(msg) {
	const line = `[serve-public] ${msg}`;
	console.log(line);
	writeFileSync(LOG, `${line}\n`, { flags: 'a' });
}

function run(cmd, args, opts = {}) {
	return new Promise((resolve, reject) => {
		const child = spawn(cmd, args, { cwd: ROOT, stdio: opts.stdio ?? 'inherit', ...opts });
		child.on('error', reject);
		child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))));
	});
}

async function ensureCloudflared() {
	if (existsSync(CF)) return CF;
	log('Downloading cloudflared…');
	await run('curl', ['-sL', 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64', '-o', CF]);
	await run('chmod', ['+x', CF]);
	return CF;
}

function waitForPort() {
	return new Promise((resolve, reject) => {
		const start = Date.now();
		const tick = () => {
			const req = http.get(`http://127.0.0.1:${PORT}/`, (res) => {
				res.resume();
				if (res.statusCode === 200) resolve();
				else if (Date.now() - start > 60000) reject(new Error('server timeout'));
				else setTimeout(tick, 1000);
			});
			req.on('error', () => {
				if (Date.now() - start > 60000) reject(new Error('server timeout'));
				else setTimeout(tick, 1000);
			});
		};
		tick();
	});
}

function startServe() {
	log(`Serving dist/ on port ${PORT}…`);
	return spawn('npx', ['--yes', 'serve', 'dist', '-l', String(PORT)], {
		cwd: ROOT,
		stdio: 'ignore',
		detached: true,
	}).unref();
}

function startTunnel(cf) {
	return new Promise((resolve, reject) => {
		log('Starting Cloudflare tunnel…');
		const proc = spawn(cf, ['tunnel', '--url', `http://127.0.0.1:${PORT}`], { stdio: ['ignore', 'pipe', 'pipe'] });
		let buf = '';
		const tryMatch = () => {
			const m = buf.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/);
			if (m) resolve({ url: m[0], proc });
		};
		proc.stdout.on('data', (d) => {
			buf += d.toString();
			tryMatch();
		});
		proc.stderr.on('data', (d) => {
			buf += d.toString();
			tryMatch();
		});
		proc.on('error', reject);
		setTimeout(() => reject(new Error('tunnel timeout')), 45000);
	});
}

async function main() {
	writeFileSync(LOG, '');
	if (!existsSync(path.join(ROOT, 'dist/index.html'))) {
		log('Building site…');
		await run('npm', ['run', 'build']);
	}

	startServe();
	await waitForPort();

	const cf = await ensureCloudflared();
	const { url } = await startTunnel(cf);

	writeFileSync(URL_FILE, `${url}\n`);
	log('');
	log('══════════════════════════════════════════════════════════');
	log(`  OPEN THIS URL IN YOUR BROWSER: ${url}`);
	log(`  (also saved to PUBLIC_DEV_URL.txt)`);
	log('══════════════════════════════════════════════════════════');
	log('');
	log('Press Ctrl+C to stop.');

	process.on('SIGINT', () => process.exit(0));
	await new Promise(() => {});
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
