import { blogPosts, getPostBySlug as getPostComponent } from './blogIndex';
import type { BlogPost } from './types';

export function getAllPosts() {
  // Return all posts including shakespeare-resource posts
  return blogPosts;
}

export function getAllPostsIncludingResources() {
  // Return all posts including shakespeare-resource posts
  return blogPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Search in all posts including shakespeare-resource posts
  const postMeta = getAllPostsIncludingResources().find(post => post.slug === slug);
  if (!postMeta) return null;

  const PostComponent = await getPostComponent(slug);
  if (!PostComponent) return null;

  return {
    ...postMeta,
    content: '', // We render the component directly instead
    Component: PostComponent
  };
}

export function getRecentPosts(limit: number = 5) {
  // Get recent posts including shakespeare-resource posts
  return getAllPosts().slice(0, limit);
}

export function getLatestPost() {
  // Get latest post including shakespeare-resource posts
  const mainBlogPosts = getAllPosts();
  return mainBlogPosts[0] || null;
}

export function getFeaturedPost() {
  // Find the most recent featured post, including shakespeare-resource posts
  const mainBlogPosts = getAllPosts();
  const featuredPosts = mainBlogPosts.filter(post => post.featured);
  if (featuredPosts.length > 0) {
    return featuredPosts[0]; // Already sorted by date, so first is most recent
  }
  // If no featured posts, return the latest post
  return getLatestPost();
}

export function getRecentPostsSkipFirst(limit: number = 3) {
  // Get recent posts including shakespeare-resource posts, skipping the first
  return getAllPosts().slice(1, 1 + limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function extractSEOData(post: BlogPost) {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return {
    title: `${post.title} - Soapbox Blog`,
    description: post.excerpt,
    image: post.ogImage?.url || post.coverImage || '/og-image.png',
    url: `${baseUrl}/blog/${post.slug}`,
    type: 'article' as const,
    author: post.author.name || 'Soapbox Team',
    publishedTime: post.date + 'T00:00:00Z',
    modifiedTime: post.date + 'T00:00:00Z',
    section: 'Technology',
    tags: [
      post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(' ').filter(Boolean),
      'soapbox',
      'decentralized social media',
      'open source',
      'nostr'
    ].flat(),
    keywords: `${post.title}, ${post.author.name || 'soapbox team'}, soapbox blog, decentralized social media, open source, nostr`,
    canonicalUrl: `${baseUrl}/blog/${post.slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": {
        "@type": "ImageObject",
        "url": post.ogImage?.url || post.coverImage ? baseUrl + (post.ogImage?.url || post.coverImage) : baseUrl + '/og-image.png',
        "width": 1200,
        "height": 630
      },
      "datePublished": post.date + 'T00:00:00Z',
      "dateModified": post.date + 'T00:00:00Z',
      "author": {
        "@type": "Person",
        "name": post.author.name || "Soapbox Team",
        ...(post.author.picture && {
          "image": {
            "@type": "ImageObject",
            "url": baseUrl + post.author.picture
          }
        })
      },
      "publisher": {
        "@type": "Organization",
        "name": "Soapbox",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": baseUrl + "/assets/logo.svg",
          "width": 200,
          "height": 200
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": baseUrl + `/blog/${post.slug}`
      },
      "articleSection": "Technology",
      "keywords": `${post.title}, ${post.author.name || 'soapbox team'}, decentralized social media, open source, nostr`,
      "inLanguage": "en-US"
    }
  };
}