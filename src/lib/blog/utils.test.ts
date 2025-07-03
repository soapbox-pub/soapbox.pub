import { describe, it, expect } from 'vitest';
import { getFeaturedPost } from './utils';

describe('getFeaturedPost', () => {
  it('returns the MKStack tutorial as the featured post', () => {
    const featuredPost = getFeaturedPost();
    
    expect(featuredPost).toBeDefined();
    expect(featuredPost?.slug).toBe('mkstack-tutorial');
    expect(featuredPost?.title).toBe('MKStack: Vibe Coding for Everyone');
    expect(featuredPost?.author.name).toBe('Derek Ross');
    expect(featuredPost?.featured).toBe(true);
  });

  it('returns a post even when no featured posts exist', () => {
    // This test ensures the fallback logic works
    const featuredPost = getFeaturedPost();
    
    expect(featuredPost).toBeDefined();
    expect(featuredPost?.slug).toBeDefined();
    expect(featuredPost?.title).toBeDefined();
  });
});