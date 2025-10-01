#!/usr/bin/env node

/**
 * Automatic Route Discovery and Vite Config Update Script
 *
 * This script automatically discovers routes from the project structure
 * and updates the vite.config.ts file with the prerender routes.
 *
 * Usage:
 *   node scripts/update-routes.mjs
 *   npm run update-routes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

/**
 * Extract routes from AppRouter.tsx to get the actual route definitions
 */
function getRoutesFromAppRouter() {
  const appRouterPath = path.join(projectRoot, 'src/AppRouter.tsx');
  const content = fs.readFileSync(appRouterPath, 'utf8');

  const routes = new Set();

  // Extract route paths using regex
  const routeMatches = content.match(/<Route\s+path="([^"]+)"[^>]*>/g);
  if (routeMatches) {
    routeMatches.forEach(match => {
      const path = match.match(/path="([^"]+)"/)[1];
      // Skip dynamic routes, catch-all routes, and redirect routes
      if (!path.includes(':') && path !== '*' && !match.includes('Navigate')) {
        routes.add(path);
      }
    });
  }

  return Array.from(routes);
}

/**
 * Discover all routes from the project structure
 */
function discoverRoutes() {
  const routes = new Set();

  console.log('🔍 Discovering routes...');

  // First, get routes from AppRouter.tsx (this is the source of truth)
  const appRouterRoutes = getRoutesFromAppRouter();
  appRouterRoutes.forEach(route => routes.add(route));
  console.log(`  🎯 Found ${appRouterRoutes.length} routes from AppRouter.tsx`);

  // Blog posts from src/components/blog/posts/
  const blogDir = path.join(projectRoot, 'src/components/blog/posts');
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir)
      .filter(file => file.endsWith('.tsx'));

    blogFiles.forEach(file => {
      const postSlug = file.replace('.tsx', '');
      routes.add(`/blog/${postSlug}`);
    });

    console.log(`  📝 Found ${blogFiles.length} blog posts`);
  }

  return Array.from(routes).sort();
}

/**
 * Read current vite.config.ts and extract existing routes
 */
function getCurrentRoutes() {
  const viteConfigPath = path.join(projectRoot, 'vite.config.ts');
  const content = fs.readFileSync(viteConfigPath, 'utf8');

  // Extract routes array using regex
  const routesMatch = content.match(/routes:\s*\[([\s\S]*?)\]/);
  if (!routesMatch) {
    throw new Error('Could not find routes array in vite.config.ts');
  }

  const routesContent = routesMatch[1];
  const routes = [];

  // Extract quoted strings (routes)
  const routeMatches = routesContent.match(/"([^"]+)"/g);
  if (routeMatches) {
    routes.push(...routeMatches.map(match => match.slice(1, -1)));
  }

  return routes;
}

/**
 * Update vite.config.ts with new routes
 */
function updateViteConfig(newRoutes) {
  const viteConfigPath = path.join(projectRoot, 'vite.config.ts');
  let content = fs.readFileSync(viteConfigPath, 'utf8');

  // Organize routes by category
  const mainPages = newRoutes.filter(route =>
    route === '/' ||
    (!route.startsWith('/tools/') && !route.startsWith('/blog/') && route.split('/').length === 2)
  );

  const toolPages = newRoutes.filter(route => route.startsWith('/tools/'));
  const blogPosts = newRoutes.filter(route => route.startsWith('/blog/'));

  // Build new routes array content
  const routesContent = `[
        // Main pages
${mainPages.map(route => `        "${route}",`).join('\n')}

        // Tool pages
${toolPages.map(route => `        "${route}",`).join('\n')}

        // Blog posts
${blogPosts.map(route => `        "${route}",`).join('\n')}
      ]`;

  // Replace the routes array
  content = content.replace(
    /routes:\s*\[([\s\S]*?)\]/,
    `routes: ${routesContent}`
  );

  fs.writeFileSync(viteConfigPath, content, 'utf8');

  console.log(`✅ Updated vite.config.ts with ${newRoutes.length} routes`);
  console.log(`   📄 Main pages: ${mainPages.length}`);
  console.log(`   🛠️  Tool pages: ${toolPages.length}`);
  console.log(`   📝 Blog posts: ${blogPosts.length}`);
}

/**
 * Main execution
 */
function main() {
  try {
    console.log('🚀 Starting automatic route discovery...\n');

    const discoveredRoutes = discoverRoutes();
    const currentRoutes = getCurrentRoutes();

    console.log(`\n📊 Route Summary:`);
    console.log(`   Current routes: ${currentRoutes.length}`);
    console.log(`   Discovered routes: ${discoveredRoutes.length}`);

    // Find new routes
    const newRoutes = discoveredRoutes.filter(route => !currentRoutes.includes(route));
    const removedRoutes = currentRoutes.filter(route => !discoveredRoutes.includes(route));

    if (newRoutes.length > 0) {
      console.log(`\n✨ New routes found:`);
      newRoutes.forEach(route => console.log(`   + ${route}`));
    }

    if (removedRoutes.length > 0) {
      console.log(`\n🗑️  Routes to remove:`);
      removedRoutes.forEach(route => console.log(`   - ${route}`));
    }

    if (newRoutes.length === 0 && removedRoutes.length === 0) {
      console.log(`\n✅ No changes needed - routes are up to date!`);
      return;
    }

    // Update the config
    updateViteConfig(discoveredRoutes);

    console.log(`\n🎉 Route update complete!`);
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Review the changes in vite.config.ts`);
    console.log(`   2. Test the build:`);
    console.log(`      - Development: npm run build`);
    console.log(`      - With prerendering: npm run build:prerender`);
    console.log(`   3. Commit the changes`);

  } catch (error) {
    console.error('❌ Error updating routes:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { discoverRoutes, updateViteConfig };