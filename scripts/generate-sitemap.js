import fs from 'fs';

const baseUrl = 'https://soapbox.pub';

// Read the blog posts from the TypeScript file
const postsContent = fs.readFileSync('src/lib/blog/posts.ts', 'utf8');
const blogSlugs = [];

// Extract slugs from the posts file
const slugMatches = postsContent.match(/"slug":\s*"([^"]+)"/g);
if (slugMatches) {
  slugMatches.forEach(match => {
    const slug = match.match(/"slug":\s*"([^"]+)"/)[1];
    blogSlugs.push(slug);
  });
}

function generateSitemap() {
  const staticPages = [
    '',
    '/tools',
    '/showcase',
    '/blog'
  ];

  const blogPages = blogSlugs.map(slug => `/blog/${slug}`);
  
  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.startsWith('/blog/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/blog/') ? '0.7' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log(`Generated sitemap with ${allPages.length} pages`);
}

generateSitemap();