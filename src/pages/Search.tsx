import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, BookOpen, FileText, Wrench } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import { useSEO } from '@/hooks/useSEO';
import { useSearchIndex, type SiteSearchResult } from '@/hooks/useSearchIndex';

const TYPE_META = {
  blog: { label: 'Blog', icon: BookOpen },
  tool: { label: 'Tool', icon: Wrench },
  page: { label: 'Page', icon: FileText },
} as const;

/**
 * Build a short snippet of the page content centered on the first matched
 * term, with the matched terms emphasized.
 */
function buildSnippet(result: SiteSearchResult): React.ReactNode {
  const text = result.content || result.description;
  if (!text) return null;

  const lowerText = text.toLowerCase();
  let matchIndex = -1;
  for (const term of result.terms) {
    const idx = lowerText.indexOf(term.toLowerCase());
    if (idx !== -1 && (matchIndex === -1 || idx < matchIndex)) {
      matchIndex = idx;
    }
  }

  const radius = 120;
  let start = 0;
  let snippet = text;
  if (matchIndex > radius) {
    start = matchIndex - radius;
    snippet = '…' + text.slice(start);
  }
  if (snippet.length > 300) {
    snippet = snippet.slice(0, 300) + '…';
  }

  // Highlight matched terms.
  if (result.terms.length === 0) return snippet;
  const lowerTerms = new Set(result.terms.map((t) => t.toLowerCase()));
  const pattern = new RegExp(
    `(${result.terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi',
  );
  const parts = snippet.split(pattern);
  return parts.map((part, i) =>
    lowerTerms.has(part.toLowerCase()) ? (
      <mark key={i} className="bg-azure-100 text-azure-900 rounded px-0.5">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const { search, isLoading } = useSearchIndex();

  useSEO({
    title: query ? `Search: ${query} - Soapbox` : 'Search - Soapbox',
    description: 'Search blog posts, tools, and pages across the Soapbox website.',
    type: 'website',
  });

  const results = useMemo(() => search(query, 100), [search, query]);

  const setQuery = (value: string) => {
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Search
          </h1>
          <p className="text-lg text-gray-600">
            Find anything across blog posts, tools, and pages.
          </p>
        </div>

        <div className="relative mb-10">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            autoFocus
            placeholder="Search the entire site..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 py-3 text-lg border-2 border-gray-200 focus:border-azure rounded-xl"
          />
        </div>

        {query.trim() === '' ? (
          <p className="text-center text-gray-500">
            Type above to search the entire website.
          </p>
        ) : isLoading ? (
          <p className="text-center text-gray-500">Searching…</p>
        ) : results.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="py-12 px-8 text-center">
              <p className="text-muted-foreground">
                No results found for "{query}". Try different keywords.
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-6">
              {results.length} result{results.length === 1 ? '' : 's'} for "
              {query}"
            </p>
            <div className="space-y-4">
              {results.map((result) => {
                const meta = TYPE_META[result.type];
                const Icon = meta.icon;
                return (
                  <Link key={result.id} to={result.path} className="group block">
                    <Card className="transition-shadow hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Badge
                            variant="secondary"
                            className="gap-1 text-xs font-normal"
                          >
                            <Icon className="h-3 w-3" />
                            {meta.label}
                          </Badge>
                          <span className="text-xs text-gray-400 truncate">
                            {result.path}
                          </span>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-azure transition-colors">
                          {result.title}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                          {buildSnippet(result)}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
