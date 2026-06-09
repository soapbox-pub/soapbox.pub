import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import MiniSearch, { type SearchResult as MiniSearchResult } from 'minisearch';

import { getAllPosts } from '@/lib/blog/utils';

/** A single document in the search index. */
export interface SearchDoc {
  /** Unique id (the route path). */
  id: string;
  /** Route to navigate to. */
  path: string;
  /** Page category, used for grouping in the UI. */
  type: 'page' | 'tool' | 'blog';
  /** Page title. */
  title: string;
  /** Short description (meta description or excerpt). */
  description: string;
  /** Truncated body text used for full-text matching. */
  content: string;
}

/** A search result returned to consumers. */
export interface SiteSearchResult extends SearchDoc {
  /** MiniSearch relevance score. */
  score: number;
  /** Terms that matched, for snippet highlighting. */
  terms: string[];
}

const INDEX_OPTIONS = {
  fields: ['title', 'description', 'content'],
  storeFields: ['path', 'type', 'title', 'description', 'content'],
  searchOptions: {
    boost: { title: 4, description: 2, content: 1 },
    prefix: true,
    fuzzy: 0.2,
    combineWith: 'AND' as const,
  },
};

/**
 * Build a fallback index from blog metadata. Used in development (or any time
 * the prerendered `search-index.json` is unavailable) so search still works,
 * albeit limited to blog titles/excerpts/tags rather than full site text.
 */
function buildFallbackDocs(): SearchDoc[] {
  return getAllPosts().map((post) => ({
    id: `/blog/${post.slug}`,
    path: `/blog/${post.slug}`,
    type: 'blog' as const,
    title: post.title,
    description: post.excerpt,
    content: [post.excerpt, post.tags?.join(' '), post.keywords]
      .filter(Boolean)
      .join(' '),
  }));
}

async function loadSearchDocs(signal?: AbortSignal): Promise<SearchDoc[]> {
  try {
    const res = await fetch('/search-index.json', { signal });
    if (!res.ok) throw new Error(`search-index.json: ${res.status}`);
    const data = (await res.json()) as SearchDoc[];
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
    throw new Error('empty index');
  } catch {
    // No prerendered index (e.g. dev server) — fall back to blog metadata.
    return buildFallbackDocs();
  }
}

/**
 * Loads the site search index and returns a `search` function backed by
 * MiniSearch. The index JSON is fetched lazily and cached by React Query.
 */
export function useSearchIndex() {
  const { data: docs, isLoading } = useQuery({
    queryKey: ['search-index'],
    queryFn: ({ signal }) => loadSearchDocs(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const miniSearch = useMemo(() => {
    if (!docs) return null;
    const ms = new MiniSearch<SearchDoc>(INDEX_OPTIONS);
    ms.addAll(docs);
    return ms;
  }, [docs]);

  const search = useMemo(() => {
    return (query: string, limit = 50): SiteSearchResult[] => {
      const trimmed = query.trim();
      if (!miniSearch || !docs || trimmed.length === 0) return [];

      const docsById = new Map(docs.map((d) => [d.id, d]));

      return miniSearch
        .search(trimmed)
        .slice(0, limit)
        .map((result: MiniSearchResult) => {
          const doc = docsById.get(result.id as string);
          if (!doc) return null;
          return {
            ...doc,
            score: result.score,
            terms: result.terms,
          } satisfies SiteSearchResult;
        })
        .filter((r): r is SiteSearchResult => r !== null);
    };
  }, [miniSearch, docs]);

  return { search, isLoading: isLoading || !miniSearch };
}
