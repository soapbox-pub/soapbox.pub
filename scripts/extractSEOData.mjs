/**
 * Extract SEO data from actual page components for static generation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define page routes and their corresponding files
const pageRoutes = [
  {
    path: '/',
    file: 'src/pages/Index.tsx',
    extractSEO: extractIndexSEO
  },
  {
    path: '/about',
    file: 'src/pages/About.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/tools',
    file: 'src/pages/Tools.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/tools/ditto',
    file: 'src/pages/tools/Ditto.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/mkstack',
    file: 'src/pages/tools/MKStack.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/tools/nostrhub',
    file: 'src/pages/tools/NostrHub.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/tools/nostrify',
    file: 'src/pages/tools/Nostrify.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/tools/nostrbook',
    file: 'src/pages/tools/Nostrbook.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/tools/stacks',
    file: 'src/pages/tools/Stacks.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/showcase',
    file: 'src/pages/Showcase.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/get-involved',
    file: 'src/pages/GetInvolved.tsx',
    extractSEO: extractGenericSEO
  },
  {
    path: '/blog',
    file: 'src/pages/blog/BlogIndex.tsx',
    extractSEO: extractGenericSEO
  }
];

// Default SEO values
const defaultSEO = {
  title: 'Soapbox',
  description: 'Soapbox is customizable open-source software that puts the power of social media in the hands of the people.',
  image: '/og-image.png',
  type: 'website',
  siteName: 'Soapbox',
  locale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterSite: '@soapbox_pub',
  keywords: 'soapbox, nostr, decentralized, social media, open source, ditto, fediverse, activitypub',
  author: 'Soapbox Technology',
};

function extractIndexSEO(content) {
  // Extract SEO data from Index.tsx useSEO call using improved parsing
  const seoMatch = extractUseSEOCall(content);
  if (seoMatch) {
    try {
      const seo = parseUseSEOObject(seoMatch);
      if (Object.keys(seo).length > 0) {
        return { ...defaultSEO, ...seo };
      }
    } catch (error) {
      console.warn('Failed to parse SEO data from Index.tsx:', error.message);
    }
  }
  
  return {
    ...defaultSEO,
    title: 'Soapbox - Build Your Decentralized Platform',
    description: 'Create your own social platforms, communities, and applications with Soapbox\'s open-source toolkit. Tools for Nostr, ActivityPub, and the decentralized web.',
    keywords: 'soapbox, nostr, decentralized, social media, open source, ditto, fediverse, activitypub, platform builder'
  };
}

function extractGenericSEO(content, filePath) {
  // Extract SEO data from useSEO call with improved parsing for nested objects
  const seoMatch = extractUseSEOCall(content);
  if (seoMatch) {
    try {
      const seo = parseUseSEOObject(seoMatch);
      if (Object.keys(seo).length > 0) {
        return { ...defaultSEO, ...seo };
      }
    } catch (error) {
      console.warn(`Failed to parse SEO data from ${filePath}:`, error.message);
    }
  }
  
  // Generate fallback SEO based on file path
  const fileName = path.basename(filePath, '.tsx');
  return generateFallbackSEO(fileName);
}

function extractUseSEOCall(content) {
  // More robust extraction that handles nested objects
  const useSEOStart = content.indexOf('useSEO(');
  if (useSEOStart === -1) return null;
  
  // Find the opening brace
  const openBraceStart = content.indexOf('{', useSEOStart);
  if (openBraceStart === -1) return null;
  
  // Find the matching closing brace by counting braces
  let braceCount = 1;
  let pos = openBraceStart + 1;
  
  while (pos < content.length && braceCount > 0) {
    const char = content[pos];
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
    } else if (char === '"' || char === "'" || char === '`') {
      // Skip over string literals to avoid counting braces inside strings
      const quote = char;
      pos++;
      while (pos < content.length && content[pos] !== quote) {
        if (content[pos] === '\\') pos++; // Skip escaped characters
        pos++;
      }
    }
    pos++;
  }
  
  if (braceCount === 0) {
    // Extract the content between the braces
    return content.substring(openBraceStart + 1, pos - 1);
  }
  
  return null;
}

function parseUseSEOObject(seoContent) {
  const seo = {};
  
  // Helper function to extract string values, handling multi-line strings
  function extractStringValue(property) {
    // Match property with various quote types and handle multi-line
    const patterns = [
      new RegExp(`${property}:\\s*['"\`]([^'"\`]*)['"\`]`, 's'),
      new RegExp(`${property}:\\s*['"\`]([\\s\\S]*?)['"\`](?=\\s*[,}])`, 's')
    ];
    
    for (const pattern of patterns) {
      const match = seoContent.match(pattern);
      if (match) {
        return match[1].trim();
      }
    }
    return null;
  }
  
  // Extract all SEO properties
  const title = extractStringValue('title');
  if (title) seo.title = title;
  
  const description = extractStringValue('description');
  if (description) seo.description = description;
  
  const image = extractStringValue('image');
  if (image) seo.image = image;
  
  const type = extractStringValue('type');
  if (type) seo.type = type;
  
  const keywords = extractStringValue('keywords');
  if (keywords) seo.keywords = keywords;
  
  return seo;
}

function generateFallbackSEO(fileName) {
  const fallbacks = {
    'About': {
      title: 'About Soapbox - Empowering Decentralized Communities',
      description: 'Learn about Soapbox\'s mission to empower creators and communities with decentralized, censorship-resistant social media tools.',
      keywords: 'about soapbox, decentralized social media, open source mission, community empowerment'
    },
    'Tools': {
      title: 'Soapbox Tools - Build Your Decentralized Platform',
      description: 'Explore our comprehensive suite of tools for building decentralized social platforms, communities, and applications.',
      keywords: 'soapbox tools, decentralized platform builder, nostr tools, community tools'
    },
    'Ditto': {
      title: 'Ditto - Decentralized Community Platform | Soapbox',
      description: 'Build your own censorship-resistant community platform with Ditto. Features Nostr integration, Lightning payments, and complete customization.',
      image: '/assets/images/ditto/ditto-phones.png',
      keywords: 'ditto, community platform, nostr, decentralized communities, lightning payments'
    },
    'MKStack': {
      title: 'MKstack - Platform Framework | Soapbox',
      description: 'Create custom social platforms and applications with our flexible framework. Powers Bookstr, Blobbi, and more innovative projects.',
      keywords: 'mkstack, platform framework, social platform builder, rapid development'
    },
    'NostrHub': {
      title: 'NostrHub - NIP Explorer | Soapbox',
      description: 'Explore and understand Nostr Improvement Proposals (NIPs) with our comprehensive database and tools for developers.',
      keywords: 'nostrhub, nostr nips, nostr development, nip explorer, developer tools'
    },
    'Nostrify': {
      title: 'Nostrify - Nostr Framework for Deno and Web | Soapbox',
      description: 'A powerful Nostr framework for building decentralized applications in Deno and web environments.',
      keywords: 'nostrify, nostr framework, deno, web development, decentralized apps'
    },
    'Nostrbook': {
      title: 'Nostrbook - Bookmarks on Nostr | Soapbox',
      description: 'Manage and share your bookmarks on the Nostr network with this decentralized bookmarking application.',
      keywords: 'nostrbook, nostr bookmarks, decentralized bookmarks, bookmark sharing'
    },
    'Stacks': {
      title: 'Stacks - Project Showcase | Soapbox',
      description: 'Discover projects and applications built with Soapbox tools. A showcase of the decentralized ecosystem.',
      keywords: 'soapbox stacks, project showcase, decentralized projects, community showcase'
    },
    'Showcase': {
      title: 'Showcase - Projects Built with Soapbox Tools',
      description: 'Explore real platforms and applications built using Soapbox tools. See what\'s possible with our decentralized toolkit.',
      keywords: 'soapbox showcase, projects, examples, community built, success stories'
    },
    'GetInvolved': {
      title: 'Get Involved - Join the Soapbox Community',
      description: 'Join our community of builders creating the decentralized future. Contribute, collaborate, and grow with us.',
      keywords: 'get involved, soapbox community, contribute, collaboration, decentralized development'
    },
    'BlogIndex': {
      title: 'Soapbox Blog - Insights on Decentralized Social Media',
      description: 'Read the latest updates from the Soapbox team about decentralized social media, open source development, and community building.',
      keywords: 'soapbox blog, decentralized social media news, open source updates, nostr insights'
    }
  };
  
  return { ...defaultSEO, ...(fallbacks[fileName] || {}) };
}

async function getBlogPosts() {
  try {
    const blogIndexPath = path.resolve(__dirname, '../src/lib/blog/blogIndex.ts');
    const blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');
    
    // Extract blog post imports and metadata
    const blogPosts = [];
    const importMatches = blogIndexContent.match(/import \* as (\w+) from '([^']+)'/g);
    
    if (importMatches) {
      for (const importMatch of importMatches) {
        const [, varName, filePath] = importMatch.match(/import \* as (\w+) from '([^']+)'/);
        const fullPath = path.resolve(__dirname, '../src/components/blog/posts/' + path.basename(filePath) + '.tsx');
        
        try {
          const postContent = fs.readFileSync(fullPath, 'utf8');
          const metaMatch = postContent.match(/export const meta: BlogPostMeta = \{([^}]+)\}/s);
          
          if (metaMatch) {
            const metaContent = metaMatch[1];
            const post = {};
            
            // Extract slug
            const slugMatch = metaContent.match(/["']slug["']:\s*["']([^"']+)["']/);
            if (slugMatch) post.slug = slugMatch[1];
            
            // Extract title
            const titleMatch = metaContent.match(/["']title["']:\s*["']([^"']+)["']/);
            if (titleMatch) post.title = titleMatch[1];
            
            // Extract excerpt
            const excerptMatch = metaContent.match(/["']excerpt["']:\s*["']([^"']+)["']/);
            if (excerptMatch) post.excerpt = excerptMatch[1];
            
            // Extract coverImage
            const coverImageMatch = metaContent.match(/["']coverImage["']:\s*["']([^"']+)["']/);
            if (coverImageMatch) post.coverImage = coverImageMatch[1];
            
            // Extract date
            const dateMatch = metaContent.match(/["']date["']:\s*["']([^"']+)["']/);
            if (dateMatch) post.date = dateMatch[1];
            
            // Extract author name
            const authorMatch = metaContent.match(/["']name["']:\s*["']([^"']+)["']/);
            if (authorMatch) post.author = { name: authorMatch[1] };
            
            if (post.slug && post.title) {
              blogPosts.push(post);
            }
          }
        } catch (error) {
          console.warn(`Failed to read blog post ${filePath}:`, error.message);
        }
      }
    }
    
    return blogPosts;
  } catch (error) {
    console.warn('Failed to extract blog posts:', error.message);
    return [];
  }
}

export async function extractAllSEOData() {
  const routes = [];
  
  // Extract SEO data from regular pages
  for (const route of pageRoutes) {
    try {
      const filePath = path.resolve(__dirname, '../' + route.file);
      const content = fs.readFileSync(filePath, 'utf8');
      const seoData = route.extractSEO(content, route.file);
      
      routes.push({
        path: route.path,
        ...seoData
      });
    } catch (error) {
      console.warn(`Failed to extract SEO from ${route.file}:`, error.message);
      // Add fallback route
      routes.push({
        path: route.path,
        ...defaultSEO
      });
    }
  }
  
  // Extract blog posts
  const blogPosts = await getBlogPosts();
  for (const post of blogPosts) {
    routes.push({
      path: `/blog/${post.slug}`,
      title: `${post.title} - Soapbox Blog`,
      description: post.excerpt || 'Read the latest updates from the Soapbox team.',
      image: post.coverImage || '/og-image.png',
      keywords: `${post.title}, soapbox blog, decentralized social media, open source`,
      type: 'article',
      publishedTime: post.date,
      author: post.author?.name || 'Soapbox Team'
    });
  }
  
  return routes;
}

export default extractAllSEOData;