import { blogPosts, getPostBySlug as getPostComponent } from './blogIndex';
import type { BlogPost } from './types';

export function getAllPosts() {
  return blogPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const postMeta = blogPosts.find(post => post.slug === slug);
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
  return blogPosts.slice(0, limit);
}

export function getLatestPost() {
  return blogPosts[0] || null;
}

export function getRecentPostsSkipFirst(limit: number = 3) {
  return blogPosts.slice(1, 1 + limit);
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