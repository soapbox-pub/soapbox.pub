#!/usr/bin/env node

/**
 * Search Index Generator
 *
 * Builds `public/search-index.json` — a full-text search index covering the
 * ENTIRE website (marketing pages, tool pages, and every blog post).
 *
 * It works by post-processing the prerendered HTML in `dist/` (produced by
 * `npm run build:prerender`). For each route discovered by `discoverRoutes()`
 * it reads the rendered `index.html`, extracts the visible text, and records a
 * truncated snippet alongside the page title and meta description. Blog routes
 * are additionally enriched with structured metadata (tags, excerpt, author).
 *
 * Because the index is derived from rendered output, it captures the real text
 * users see — including blog post bodies that are authored as JSX.
 *
 * Usage:
 *   node scripts/generate-search-index.mjs
 *   npm run generate-search-index   (runs automatically in build:prerender)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { discoverRoutes } from './update-routes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DIST_DIR = path.join(projectRoot, 'dist');
const OUTPUT_PATH = path.join(projectRoot, 'public/search-index.json');

/** Max number of characters of body text stored per page (keeps the JSON small). */
const MAX_CONTENT_CHARS = 2000;

/**
 * Resolve the prerendered HTML file for a given route.
 * The prerender plugin emits `dist/index.html` for "/" and
 * `dist/<route>/index.html` for everything else.
 */
function htmlPathForRoute(route) {
  if (route === '/') {
    return path.join(DIST_DIR, 'index.html');
  }
  const clean = route.replace(/^\/+/, '').replace(/\/+$/, '');
  return path.join(DIST_DIR, clean, 'index.html');
}

/** Decode the handful of HTML entities that survive tag stripping. */
function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

/** Extract the <title> contents, stripping the site suffix. */
function extractTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return '';
  return decodeEntities(match[1].trim());
}

/** Extract the meta description. */
function extractDescription(html) {
  const match =
    html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']description["']/i);
  return match ? decodeEntities(match[1].trim()) : '';
}

/**
 * Extract visible body text from the rendered HTML.
 * We isolate the <main> region when present (the Layout wraps page content in
 * <main>), otherwise fall back to <body>. Navigation/header/footer chrome is
 * always stripped so it doesn't pollute the per-page content.
 */
function extractBodyText(html) {
  let region = html;

  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    region = mainMatch[1];
  } else {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) region = bodyMatch[1];
  }

  const text = region
    // Remove site chrome (present when there is no <main> wrapper).
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    // Remove non-visible elements entirely.
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    // Strip all remaining tags.
    .replace(/<[^>]+>/g, ' ');

  return decodeEntities(text).replace(/\s+/g, ' ').trim();
}

/** Categorize a route for grouping/filtering in the UI. */
function getType(route) {
  if (route === '/blog' || route.startsWith('/blog/')) return 'blog';
  if (route === '/ditto' || route === '/shakespeare' || route === '/mkstack' || route.startsWith('/tools/')) {
    return 'tool';
  }
  return 'page';
}

function main() {
  console.log('🔎 Generating search index...');

  if (!fs.existsSync(DIST_DIR)) {
    console.warn(
      '⚠️  dist/ not found. Run `npm run build:prerender` first to generate ' +
        'full-text content. Skipping search index generation.',
    );
    process.exit(0);
  }

  const routes = discoverRoutes();
  const records = [];
  let missing = 0;

  for (const route of routes) {
    const htmlPath = htmlPathForRoute(route);
    if (!fs.existsSync(htmlPath)) {
      missing += 1;
      continue;
    }

    const html = fs.readFileSync(htmlPath, 'utf8');
    const title = extractTitle(html);
    const description = extractDescription(html);
    const fullText = extractBodyText(html);
    const content = fullText.slice(0, MAX_CONTENT_CHARS);

    const type = getType(route);
    const slug = route.startsWith('/blog/') ? route.slice('/blog/'.length) : undefined;

    records.push({
      id: route,
      path: route,
      type,
      title: title || route,
      description,
      content,
      ...(slug ? { slug } : {}),
    });
  }

  // Sort blog routes newest-style after pages for a stable, readable file.
  records.sort((a, b) => a.path.localeCompare(b.path));

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(records, null, 0));

  console.log(`✅ Wrote ${records.length} entries to public/search-index.json`);
  if (missing > 0) {
    console.log(
      `   ℹ️  ${missing} route(s) had no prerendered HTML and were skipped ` +
        `(run build:prerender to include them).`,
    );
  }
}

main();
