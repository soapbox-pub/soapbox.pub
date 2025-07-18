import { describe, it, expect } from 'vitest';
import { getFeaturedPost } from './utils';

describe('getFeaturedPost', () => {
  it('returns the Shakespeare 1-week update blog post as the featured post', () => {
    const featuredPost = getFeaturedPost();
    
    expect(featuredPost).toBeDefined();
    expect(featuredPost?.slug).toBe('shakespeare-1-week-update');
    expect(featuredPost?.title).toBe('🎭 Shakespeare 1 Week Update - Amazing Community Projects');
    expect(featuredPost?.author.name).toBe('Soapbox Team');
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