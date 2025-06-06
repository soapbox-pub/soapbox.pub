/**
 * Generate static HTML pages with proper meta tags for SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog posts data
const blogPostsData = [
  { slug: 'announcing-ditto', title: 'Announcing Ditto', excerpt: 'Introducing Ditto, our new decentralized community platform built on Nostr.', coverImage: '/assets/images/ditto/ditto-phones.png', date: '2024-03-15', author: { name: 'Alex Gleason' } },
  { slug: 'announcing-nostrify', title: 'Announcing Nostrify', excerpt: 'Nostrify is a powerful framework for building Nostr applications in Deno and web environments.', coverImage: '/og-image.png', date: '2024-05-20', author: { name: 'Soapbox Team' } },
  { slug: 'ditto-1.3', title: 'Ditto 1.3 Release', excerpt: 'Latest updates and improvements to the Ditto platform with enhanced features and performance.', coverImage: '/assets/images/ditto/ditto-phones.png', date: '2024-05-30', author: { name: 'Alex Gleason' } },
  { slug: 'future-is-decentralized', title: 'The Future is Decentralized', excerpt: 'Why decentralized social media is the future and how Soapbox is leading the way.', coverImage: '/og-image.png', date: '2024-04-10', author: { name: 'Soapbox Team' } },
  { slug: 'nostr101', title: 'Nostr 101: Getting Started', excerpt: 'A beginner\'s guide to understanding and using the Nostr protocol.', coverImage: '/og-image.png', date: '2024-06-01', author: { name: 'Soapbox Team' } }
];

// Define all routes and their SEO data
const routes = [
  {
    path: '/',
    title: 'Soapbox - Build Your Decentralized Platform',
    description: 'Create your own social platforms, communities, and applications with Soapbox\'s open-source toolkit. Tools for Nostr, ActivityPub, and the decentralized web.',
    image: '/og-image.png',
    keywords: 'soapbox, nostr, decentralized, social media, open source, ditto, fediverse, activitypub, platform builder'
  },
  {
    path: '/about',
    title: 'About Soapbox - Empowering Decentralized Communities',
    description: 'Learn about Soapbox\'s mission to empower creators and communities with decentralized, censorship-resistant social media tools.',
    image: '/og-image.png',
    keywords: 'about soapbox, decentralized social media, open source mission, community empowerment'
  },
  {
    path: '/tools',
    title: 'Soapbox Tools - Build Your Decentralized Platform',
    description: 'Explore our comprehensive suite of tools for building decentralized social platforms, communities, and applications.',
    image: '/og-image.png',
    keywords: 'soapbox tools, decentralized platform builder, nostr tools, community tools'
  },
  {
    path: '/tools/ditto',
    title: 'Ditto - Decentralized Community Platform | Soapbox',
    description: 'Build your own censorship-resistant community platform with Ditto. Features Nostr integration, Lightning payments, and complete customization.',
    image: '/assets/images/ditto/ditto-phones.png',
    keywords: 'ditto, community platform, nostr, decentralized communities, lightning payments'
  },
  {
    path: '/tools/mkstack',
    title: 'MKstack - Platform Framework | Soapbox',
    description: 'Create custom social platforms and applications with our flexible framework. Powers Bookstr, Blobbi, and more innovative projects.',
    image: '/og-image.png',
    keywords: 'mkstack, platform framework, social platform builder, rapid development'
  },
  {
    path: '/tools/nostrhub',
    title: 'NostrHub - NIP Explorer | Soapbox',
    description: 'Explore and understand Nostr Improvement Proposals (NIPs) with our comprehensive database and tools for developers.',
    image: '/og-image.png',
    keywords: 'nostrhub, nostr nips, nostr development, nip explorer, developer tools'
  },
  {
    path: '/tools/nostrify',
    title: 'Nostrify - Nostr Framework for Deno and Web | Soapbox',
    description: 'A powerful Nostr framework for building decentralized applications in Deno and web environments.',
    image: '/og-image.png',
    keywords: 'nostrify, nostr framework, deno, web development, decentralized apps'
  },
  {
    path: '/tools/nostrbook',
    title: 'Nostrbook - Bookmarks on Nostr | Soapbox',
    description: 'Manage and share your bookmarks on the Nostr network with this decentralized bookmarking application.',
    image: '/og-image.png',
    keywords: 'nostrbook, nostr bookmarks, decentralized bookmarks, bookmark sharing'
  },
  {
    path: '/tools/stacks',
    title: 'Stacks - Project Showcase | Soapbox',
    description: 'Discover projects and applications built with Soapbox tools. A showcase of the decentralized ecosystem.',
    image: '/og-image.png',
    keywords: 'soapbox stacks, project showcase, decentralized projects, community showcase'
  },
  {
    path: '/showcase',
    title: 'Showcase - Projects Built with Soapbox Tools',
    description: 'Explore real platforms and applications built using Soapbox tools. See what\'s possible with our decentralized toolkit.',
    image: '/og-image.png',
    keywords: 'soapbox showcase, projects, examples, community built, success stories'
  },
  {
    path: '/get-involved',
    title: 'Get Involved - Join the Soapbox Community',
    description: 'Join our community of builders creating the decentralized future. Contribute, collaborate, and grow with us.',
    image: '/og-image.png',
    keywords: 'get involved, soapbox community, contribute, collaboration, decentralized development'
  },
  {
    path: '/blog',
    title: 'Soapbox Blog - Insights on Decentralized Social Media',
    description: 'Read the latest updates from the Soapbox team about decentralized social media, open source development, and community building.',
    image: '/og-image.png',
    keywords: 'soapbox blog, decentralized social media news, open source updates, nostr insights'
  }
];

// Add blog posts to routes
blogPostsData.forEach(post => {
  routes.push({
    path: `/blog/${post.slug}`,
    title: `${post.title} - Soapbox Blog`,
    description: post.excerpt,
    image: post.coverImage,
    keywords: `${post.title}, soapbox blog, decentralized social media, open source`,
    type: 'article',
    publishedTime: post.date,
    author: post.author.name
  });
});

function generateHTMLPage(route, baseHTML) {
  const baseUrl = 'https://soapbox.pub';
  const pageUrl = route.path === '/' ? baseUrl : `${baseUrl}${route.path}`;
  const ogType = route.type === 'article' ? 'article' : 'website';
  
  let html = baseHTML
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${route.description}`)
    .replace(/(<meta property="og:type" content=")[^"]*/, `$1${ogType}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${route.title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${route.description}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${route.image}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${pageUrl}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${route.title}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${route.description}`)
    .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${route.image}`)
    .replace(/(<meta name="image" content=")[^"]*/, `$1${route.image}`)
    .replace(/(<meta name="keywords" content=")[^"]*/, `$1${route.keywords}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${pageUrl}`);

  // Add article-specific meta tags for blog posts
  if (route.type === 'article' && route.publishedTime && route.author) {
    // Insert article-specific meta tags after the existing og:image:type tag
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

function main() {
  const distDir = path.resolve(__dirname, '../dist');
  const indexHTMLPath = path.join(distDir, 'index.html');
  
  if (!fs.existsSync(indexHTMLPath)) {
    console.error('index.html not found in dist directory. Please build the project first.');
    process.exit(1);
  }

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
  console.log('\nNow each route will have proper meta tags visible in view source:');
  routes.forEach(route => {
    const url = route.path === '/' ? '/' : `${route.path}/`;
    console.log(`   ${url} -> ${url}index.html`);
  });
}

main();