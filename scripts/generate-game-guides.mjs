#!/usr/bin/env node
/**
 * Generates isolated game guide articles (1 URL = 1 page) for /guides/
 */
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { URL_LIST } from './guides-data/url-list.mjs';
import { classifyUrl, slugFromUrl } from './guides-data/game-classifier.mjs';
import { getIgnImageForGame } from './guides-data/ign-images.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../src/data/guides/guides.generated.ts');

const ANCHOR_TEXTS = [
  'this resource',
  'more game information',
  'additional guides',
  'related resources',
  'further reading',
  'supplementary guides',
  'extra reference material',
  'more detailed coverage',
];

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function pick(arr, seed) {
  return arr[seed % arr.length];
}

function buildSections(gameName, gameId, seed) {
  const topics = [
    {
      title: `${gameName} Core Gameplay Overview`,
      body: `${gameName} rewards players who understand its core loop, map flow, and role-specific responsibilities. Whether you are learning the fundamentals or refining advanced tactics, a structured approach to positioning, resource management, and team coordination will consistently outperform raw mechanical skill alone.`,
    },
    {
      title: `PvP and Competitive Considerations in ${gameName}`,
      body: `Competitive ${gameName} play demands awareness of sightlines, audio cues, and opponent tendencies. Study common engagement angles, practice crosshair placement for your preferred weapons, and review each fight to identify whether you lost due to positioning, timing, or information gaps rather than aim alone.`,
    },
    {
      title: `${gameName} PvE, Progression, and Loot`,
      body: `Progression systems in ${gameName} often tie activity completion to gear upgrades, unlocks, or seasonal rewards. Plan efficient farming routes, prioritize objectives that match your build, and rotate between high-value activities so you avoid burnout while still advancing your account.`,
    },
    {
      title: `Settings, Performance, and Quality of Life`,
      body: `Stable frame rates and readable visuals matter in ${gameName}. Tune sensitivity, field of view, and audio mix to your hardware, disable distracting effects where allowed, and keep drivers updated. Small configuration changes frequently produce larger consistency gains than switching loadouts every session.`,
    },
    {
      title: `Community, Updates, and Staying Current`,
      body: `${gameName} evolves through patches, balance changes, and seasonal content. Follow official patch notes, watch credible creators who test changes on live servers, and adapt loadouts or strategies quickly when metas shift so you are never fighting yesterday's version of the game.`,
    },
    {
      title: `Build Crafting and Loadout Strategy`,
      body: `Effective ${gameName} loadouts combine synergy between weapons, abilities, and playstyle. Experiment in low-pressure environments, keep one reliable fallback build, and document what works against different archetypes so you can swap intelligently between matches or missions.`,
    },
    {
      title: `Map Knowledge and Rotations`,
      body: `Deep map knowledge separates average ${gameName} players from great ones. Learn choke points, flanking paths, and safe reset locations. Practice calling rotations aloud with teammates so everyone shares the same mental model of where fights will happen next.`,
    },
    {
      title: `Economy, Crafting, and Resource Planning`,
      body: `Many ${gameName} systems hinge on currencies, crafting materials, or vendor rotations. Track weekly caps, prioritize high-return tasks, and avoid overspending on situational items before confirmed content plans so you always have resources for meaningful upgrades.`,
    },
  ];

  const count = 4 + (seed % 2);
  const start = seed % topics.length;
  const sections = [];
  for (let i = 0; i < count; i++) {
    sections.push(topics[(start + i) % topics.length]);
  }
  return sections;
}

function buildGuide(url, index) {
  const { gameId, gameName } = classifyUrl(url);
  const slug = slugFromUrl(url);
  const seed = hashStr(url + slug);
  const anchorText = pick(ANCHOR_TEXTS, seed + index);
  const sections = buildSections(gameName, gameId, seed);
  const title = `${gameName} Guide: Tips, Strategies, and Gameplay Essentials`;
  const description = `A comprehensive ${gameName} guide covering gameplay fundamentals, competitive tips, progression paths, settings optimization, and staying current with updates.`;
  const intro = `${gameName} continues to attract dedicated players who want to improve at every level—from first sessions to high-skill competitive play. This guide collects practical strategies, settings advice, and progression tips so you can learn the game efficiently without wading through scattered forum threads.`;
  const closingSentence = `For more game updates, guides, and related resources, you can also explore <a href="${url}" target="_blank" rel="noopener noreferrer">${anchorText}</a>.`;

  return {
    slug,
    url,
    gameId,
    gameName,
    title,
    description,
    intro,
    sections,
    closingSentence,
    anchorText,
    image: getIgnImageForGame(gameId),
    publishedAt: '2026-03-20',
    isExternal: true,
  };
}

function normalizeUrl(url) {
  let u = url.trim();
  if (!u.startsWith('http')) u = `https://${u}`;
  try {
    const parsed = new URL(u);
    parsed.protocol = 'https:';
    parsed.hash = '';
    let path = parsed.pathname.replace(/\/+$/, '') || '';
    parsed.pathname = path;
    return parsed.href.replace(/\/$/, '');
  } catch {
    return u;
  }
}

function dedupeUrls(urls) {
  const seen = new Set();
  const out = [];
  for (const raw of urls) {
    const n = normalizeUrl(raw);
    if (!seen.has(n)) {
      seen.add(n);
      out.push(n);
    }
  }
  return out;
}

function escapeTs(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function generate() {
  const urls = dedupeUrls(URL_LIST);
  const guides = urls.map((url, i) => buildGuide(url, i));

  const byGame = {};
  for (const g of guides) {
    if (!byGame[g.gameId]) byGame[g.gameId] = g.gameName;
  }

  const lines = [
    '/* eslint-disable */',
    '// AUTO-GENERATED by scripts/generate-game-guides.mjs — do not edit manually',
    "import type { GameGuide } from './types';",
    '',
    `export const GAME_GUIDES: GameGuide[] = [`,
  ];

  for (const g of guides) {
    lines.push('  {');
    lines.push(`    slug: '${escapeTs(g.slug)}',`);
    lines.push(`    url: '${escapeTs(g.url)}',`);
    lines.push(`    gameId: '${escapeTs(g.gameId)}',`);
    lines.push(`    gameName: '${escapeTs(g.gameName)}',`);
    lines.push(`    title: '${escapeTs(g.title)}',`);
    lines.push(`    description: '${escapeTs(g.description)}',`);
    lines.push(`    intro: '${escapeTs(g.intro)}',`);
    lines.push(`    sections: [`);
    for (const s of g.sections) {
      lines.push(`      { title: '${escapeTs(s.title)}', body: '${escapeTs(s.body)}' },`);
    }
    lines.push(`    ],`);
    lines.push(`    closingSentence: '${escapeTs(g.closingSentence)}',`);
    lines.push(`    anchorText: '${escapeTs(g.anchorText)}',`);
    lines.push(`    image: '${escapeTs(g.image)}',`);
    lines.push(`    publishedAt: '${g.publishedAt}',`);
    lines.push(`    isExternal: true,`);
    lines.push('  },');
  }

  lines.push('];');
  lines.push('');
  lines.push(`export const GUIDE_GAME_GROUPS: Record<string, string> = ${JSON.stringify(byGame, null, 2)};`);
  lines.push('');

  writeFileSync(OUT, lines.join('\n'), 'utf8');
  console.log(`Generated ${guides.length} game guides → ${OUT}`);
  return guides;
}

generate();
