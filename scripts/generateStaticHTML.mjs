/**
 * Generate static HTML pages using actual page SEO data
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractAllSEOData } from './extractSEOData.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateHTMLPage(route, baseHTML) {
  const baseUrl = process.env.SOAPBOX_BASE_URL || 'https://soapbox.pub';
  const pageUrl = route.path === '/' ? baseUrl : `${baseUrl}${route.path}`;
  const ogType = route.type === 'article' ? 'article' : 'website';
  
  // Convert relative image URLs to absolute URLs for social media crawlers
  const imageUrl = route.image.startsWith('/') ? `${baseUrl}${route.image}` : route.image;
  
  let html = baseHTML
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${route.description}`)
    .replace(/(<meta property="og:type" content=")[^"]*/, `$1${ogType}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${route.title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${route.description}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${imageUrl}" data-original-image="${route.image}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${pageUrl}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${route.title}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${route.description}`)
    .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${imageUrl}" data-original-image="${route.image}`)
    .replace(/(<meta name="image" content=")[^"]*/, `$1${imageUrl}" data-original-image="${route.image}`)
    .replace(/(<meta name="keywords" content=")[^"]*/, `$1${route.keywords}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${pageUrl}`);

  // Add article-specific meta tags for blog posts
  if (route.type === 'article' && route.publishedTime && route.author) {
    const articleTags = `
    <!-- Article specific meta tags -->
    <meta property="article:published_time" content="${route.publishedTime}">
    <meta property="article:author" content="${route.author}">
    <meta property="article:section" content="Technology">
    <meta property="article:tag" content="Decentralized Social Media">
    <meta property="article:tag" content="Open Source">
    <meta property="article:tag" content="Nostr">`;
    
    html = html.replace(
      /(<meta property="og:image:type" content="image\/png">)/,
      `$1${articleTags}`
    );
  }

  return html;
}

async function main() {
  const distDir = path.resolve(__dirname, '../dist');
  const indexHTMLPath = path.join(distDir, 'index.html');
  
  if (!fs.existsSync(indexHTMLPath)) {
    console.error('index.html not found in dist directory. Please build the project first.');
    process.exit(1);
  }

  console.log('🔍 Extracting SEO data from actual page components...');
  const routes = await extractAllSEOData();
  console.log(`📄 Found ${routes.length} routes to generate`);

  const baseHTML = fs.readFileSync(indexHTMLPath, 'utf8');
  
  routes.forEach(route => {
    if (route.path === '/') {
      // Update the main index.html with home page SEO
      const homeHTML = generateHTMLPage(route, baseHTML);
      fs.writeFileSync(indexHTMLPath, homeHTML, 'utf8');
      console.log(`✅ Updated: index.html (${route.title})`);
    } else {
      // Create directory structure for nested paths
      const routePath = route.path.slice(1); // Remove leading slash
      const routeDir = path.join(distDir, routePath);
      
      // Ensure directory exists
      fs.mkdirSync(routeDir, { recursive: true });
      
      // Generate HTML with route-specific meta tags
      const routeHTML = generateHTMLPage(route, baseHTML);
      const routeHTMLPath = path.join(routeDir, 'index.html');
      
      fs.writeFileSync(routeHTMLPath, routeHTML, 'utf8');
      console.log(`✅ Generated: ${routePath}/index.html (${route.title})`);
    }
  });
  
  console.log('\n🎉 All static pages generated successfully!');
  console.log('\n📋 Generated routes:');
  routes.forEach(route => {
    const url = route.path === '/' ? '/' : `${route.path}/`;
    const baseUrl = process.env.SOAPBOX_BASE_URL || 'https://soapbox.pub';
    const imageUrl = route.image.startsWith('/') ? `${baseUrl}${route.image}` : route.image;
    const displayImage = route.image === '/og-image.png' ? 'default' : imageUrl;
    console.log(`   ${url.padEnd(35)} -> ${displayImage}`);
  });
}

main().catch(console.error);