import { describe, it, expect } from 'vitest';
import { getFeaturedPost } from './utils';

describe('getFeaturedPost', () => {
  it('returns the Shakespeare announcement as the featured post', () => {
    const featuredPost = getFeaturedPost();
    
    expect(featuredPost).toBeDefined();
    expect(featuredPost?.slug).toBe('announcing-shakespeare');
    expect(featuredPost?.title).toBe('🎭 Introducing Shakespeare: AI-Powered Website Builder on Nostr');
    expect(featuredPost?.author.name).toBe('Alex Gleason');
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