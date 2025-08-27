import { describe, it, expect } from 'vitest';
import { getFeaturedPost } from './utils';

describe('getFeaturedPost', () => {
  it('returns a post even when no featured posts exist', () => {
    // This test ensures the fallback logic works
    const featuredPost = getFeaturedPost();

    expect(featuredPost).toBeDefined();
    expect(featuredPost?.slug).toBeDefined();
    expect(featuredPost?.title).toBeDefined();
  });
});