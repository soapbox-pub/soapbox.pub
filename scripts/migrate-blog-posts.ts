import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import matter from 'gray-matter';

// Directory paths
const oldBlogDir = '/home/mk/Projects/soapbox.pub/_blog';
const newPostsDir = '/home/mk/Projects/soapbox2/src/components/blog/posts';

// Convert markdown content to React JSX
function convertMarkdownToJSX(content: string): string {
  // Basic markdown to JSX conversions
  const jsx = content
    // Headers
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^##### (.+)$/gm, '<h5>$1</h5>')
    .replace(/^###### (.+)$/gm, '<h6>$1</h6>')
    
    // Bold and italic
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />')
    
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    
    // Line breaks and paragraphs
    .split('\n\n')
    .filter(paragraph => paragraph.trim())
    .map(paragraph => {
      if (paragraph.startsWith('<')) {
        return paragraph;
      }
      return `<p>${paragraph.replace(/\n/g, ' ')}</p>`;
    })
    .join('\n\n');
    
  return jsx;
}

// Generate TypeScript component content
function generateComponentContent(data: Record<string, unknown>, content: string): string {
  const componentName = data.slug
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const jsx = convertMarkdownToJSX(content);

  return `import React from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: any;
  ogImage: any;
}

export const meta: BlogPostMeta = ${JSON.stringify({
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    date: data.date,
    author: data.author || {},
    ogImage: data.ogImage || {}
  }, null, 2)};

export default function ${componentName}() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: \`${jsx.replace(/`/g, '\\`').replace(/\${/g, '\\${')}}\`
      }} />
    </article>
  );
}
`;
}

// Main migration function
function migrateBlogPosts() {
  const files = readdirSync(oldBlogDir).filter(file => file.endsWith('.mdx'));
  
  console.log(`Found ${files.length} blog posts to migrate...`);
  
  files.forEach(file => {
    const filePath = join(oldBlogDir, file);
    const fileContent = readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    // Extract slug from filename
    const slug = basename(file, '.mdx');
    data.slug = slug;
    
    // Generate component content
    const componentContent = generateComponentContent(data, content);
    
    // Write to new location
    const outputPath = join(newPostsDir, `${slug}.tsx`);
    writeFileSync(outputPath, componentContent);
    
    console.log(`✓ Migrated: ${slug}`);
  });
  
  console.log(`Migration complete! Migrated ${files.length} posts.`);
}

// Run migration
migrateBlogPosts();