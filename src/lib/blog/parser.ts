import { BlogPost } from './types';

export function parseFrontmatter(content: string): { metadata: Record<string, unknown>; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { metadata: {}, content };
  }
  
  const [, frontmatterStr, bodyContent] = match;
  const metadata: Record<string, unknown> = {};
  
  // Parse YAML-like frontmatter
  const lines = frontmatterStr.split('\n');
  let currentKey = '';
  const _currentValue = '';
  let inMultiline = false;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;
    
    if (inMultiline) {
      if (trimmedLine.startsWith('name:') || trimmedLine.startsWith('picture:') || trimmedLine.startsWith('url:')) {
        // Handle nested objects
        const [key, value] = trimmedLine.split(':').map(s => s.trim());
        if (currentKey === 'author') {
          if (!metadata.author) metadata.author = {};
          (metadata.author as Record<string, unknown>)[key] = value.replace(/['"]/g, '');
        } else if (currentKey === 'ogImage') {
          if (!metadata.ogImage) metadata.ogImage = {};
          (metadata.ogImage as Record<string, unknown>)[key] = value.replace(/['"]/g, '');
        }
      } else {
        inMultiline = false;
      }
    }
    
    if (!inMultiline && trimmedLine.includes(':')) {
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.substring(0, colonIndex).trim();
      const value = trimmedLine.substring(colonIndex + 1).trim();
      
      if (key === 'author' || key === 'ogImage') {
        currentKey = key;
        inMultiline = true;
        metadata[key] = {};
      } else {
        metadata[key] = value.replace(/['"]/g, '');
      }
    }
  }
  
  return { metadata, content: bodyContent };
}

export function convertMdxToMarkdown(content: string): string {
  // Convert JSX components to HTML or remove them
  let converted = content;
  
  // Remove EmailSignupForm components
  converted = converted.replace(/<EmailSignupForm[^>]*\/>/g, '');
  
  // Convert Button components to links
  converted = converted.replace(/<Button[^>]*href=['"]([^'"]*)['"]*[^>]*>([^<]*)<\/Button>/g, '[$2]($1)');
  
  // Convert iframe embeds to links
  converted = converted.replace(/<iframe[^>]*src=['"]([^'"]*)['"]*[^>]*><\/iframe>/g, '[View Video]($1)');
  
  // Convert figure/figcaption to markdown
  converted = converted.replace(/<figure>\s*<img[^>]*src=['"]([^'"]*)['"]*[^>]*alt=['"]([^'"]*)['"]*[^>]*\/>\s*<figcaption>([^<]*)<\/figcaption>\s*<\/figure>/g, '![alt]($1)\n*$3*');
  
  // Convert remaining img tags
  converted = converted.replace(/<img[^>]*src=['"]([^'"]*)['"]*[^>]*alt=['"]([^'"]*)['"]*[^>]*\/?>/g, '![$2]($1)');
  
  // Convert div grids to simple layout
  converted = converted.replace(/<div className=['"]grid[^'"]*['"]>\s*<img[^>]*src=['"]([^'"]*)['"]*[^>]*\/?>\s*<img[^>]*src=['"]([^'"]*)['"]*[^>]*\/?>\s*<\/div>/g, '![]($1)\n![]($2)');
  
  // Remove remaining HTML tags
  converted = converted.replace(/<[^>]*>/g, '');
  
  // Clean up extra whitespace
  converted = converted.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return converted.trim();
}

export function createBlogPost(filename: string, content: string): BlogPost {
  const { metadata, content: bodyContent } = parseFrontmatter(content);
  const slug = filename.replace(/\.mdx?$/, '');
  
  return {
    slug,
    title: (metadata.title as string) || '',
    excerpt: (metadata.excerpt as string) || '',
    coverImage: (metadata.coverImage as string) || '',
    date: (metadata.date as string) || '',
    author: (metadata.author as { name?: string; picture?: string }) || { name: '', picture: '' },
    ogImage: (metadata.ogImage as { url?: string }) || { url: '' },
    content: convertMdxToMarkdown(bodyContent)
  };
}