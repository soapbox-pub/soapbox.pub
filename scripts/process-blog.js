import fs from 'fs';
import path from 'path';

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { metadata: {}, content };
  }
  
  const [, frontmatterStr, bodyContent] = match;
  const metadata = {};
  
  // Parse YAML-like frontmatter
  const lines = frontmatterStr.split('\n');
  let currentKey = '';
  let inObject = false;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;
    
    if (trimmedLine === 'author:' || trimmedLine === 'ogImage:') {
      currentKey = trimmedLine.replace(':', '');
      metadata[currentKey] = {};
      inObject = true;
    } else if (inObject && trimmedLine.startsWith('  ')) {
      const [key, ...valueParts] = trimmedLine.trim().split(':');
      const value = valueParts.join(':').trim();
      if (metadata[currentKey]) {
        metadata[currentKey][key] = value.replace(/['"]/g, '');
      }
    } else if (trimmedLine.includes(':')) {
      inObject = false;
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.substring(0, colonIndex).trim();
      const value = trimmedLine.substring(colonIndex + 1).trim();
      metadata[key] = value.replace(/['"]/g, '');
    }
  }
  
  return { metadata, content: bodyContent };
}

function convertMdxToMarkdown(content) {
  let converted = content;
  
  // Remove EmailSignupForm components
  converted = converted.replace(/<EmailSignupForm[^>]*\/>/g, '');
  
  // Convert Button components to links
  converted = converted.replace(/<Button[^>]*href=['"]([^'"]*)['"]*[^>]*>([^<]*)<\/Button>/g, '[$2]($1)');
  
  // Convert iframe embeds to links
  converted = converted.replace(/<iframe[^>]*src=['"]([^'"]*)['"]*[^>]*><\/iframe>/g, '[View Video]($1)');
  
  // Convert figure/figcaption to markdown
  converted = converted.replace(/<figure>\s*<img[^>]*src=['"]([^'"]*)['"]*[^>]*alt=['"]([^'"]*)['"]*[^>]*\/?\s*\/>\s*<figcaption>([^<]*)<\/figcaption>\s*<\/figure>/g, '![$2]($1)\n*$3*');
  
  // Convert remaining img tags
  converted = converted.replace(/<img[^>]*src=['"]([^'"]*)['"]*[^>]*alt=['"]([^'"]*)['"]*[^>]*\/?>/g, '![$2]($1)');
  
  // Convert div grids to simple layout
  converted = converted.replace(/<div className=['"]grid[^'"]*['"]>\s*<img[^>]*src=['"]([^'"]*)['"]*[^>]*\/?>\s*<img[^>]*src=['"]([^'"]*)['"]*[^>]*\/?>\s*<\/div>/g, '![]($1)\n![]($2)');
  
  // Remove remaining HTML tags but preserve content
  converted = converted.replace(/<[^>]*>/g, '');
  
  // Clean up extra whitespace
  converted = converted.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return converted.trim();
}

// Read all blog files
const blogDir = '../soapbox.pub/_blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

console.log(`Processing ${files.length} blog files...`);

const posts = [];

files.forEach(filename => {
  try {
    const content = fs.readFileSync(path.join(blogDir, filename), 'utf8');
    const { metadata, content: bodyContent } = parseFrontmatter(content);
    
    const slug = filename.replace('.mdx', '');
    
    const post = {
      slug,
      title: metadata.title || '',
      excerpt: metadata.excerpt || '',
      coverImage: metadata.coverImage || '',
      date: metadata.date || '',
      author: metadata.author || { name: 'Unknown', picture: '' },
      ogImage: metadata.ogImage || { url: '' },
      content: convertMdxToMarkdown(bodyContent)
    };
    
    posts.push(post);
    console.log(`Processed: ${post.title}`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message);
  }
});

// Sort by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Write to TypeScript file
const tsContent = `export const blogPosts = ${JSON.stringify(posts, null, 2)} as const;`;

fs.writeFileSync('src/lib/blog/posts.ts', tsContent);
console.log(`\nGenerated blog posts data file with ${posts.length} posts`);