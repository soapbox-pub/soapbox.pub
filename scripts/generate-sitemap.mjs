#!/usr/bin/env node

/**
 * Sitemap Generator
 *
 * Generates public/sitemap.xml from the same route discovery used by update-routes.mjs.
 * This ensures the sitemap always stays in sync with the prerender routes.
 *
 * Usage:
 *   node scripts/generate-sitemap.mjs
 *   npm run generate-sitemap
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { discoverRoutes } from './update-routes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const BASE_URL = 'https://soapbox.pub';

/** Routes that should not appear in the sitemap (utility pages, etc.). */
const SITEMAP_EXCLUDE = new Set(['/search']);

/**
 * Determine the priority for a route.
 */
function getPriority(route) {
  if (route === '/') return '1.0';
  if (route.startsWith('/blog/')) return '0.7';
  if (route.startsWith('/tools/')) return '0.8';
  return '0.8';
}

/**
 * Determine the change frequency for a route.
 */
function getChangeFreq(route) {
  if (route.startsWith('/blog/')) return 'monthly';
  return 'weekly';
}

function generateSitemap() {
  const routes = discoverRoutes().filter((route) => !SITEMAP_EXCLUDE.has(route));
  const today = new Date().toISOString().split('T')[0];

  const urls = routes.map(route => {
    const loc = route === '/' ? BASE_URL : `${BASE_URL}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  const outputPath = path.join(projectRoot, 'public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Generated sitemap.xml with ${routes.length} URLs`);
}

generateSitemap();
