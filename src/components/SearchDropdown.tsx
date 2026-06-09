import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileText, Search, Wrench, CornerDownLeft } from 'lucide-react';

import { useSearchIndex } from '@/hooks/useSearchIndex';

interface SearchDropdownProps {
  query: string;
  /** Called after navigating, so the parent can close/collapse the dropdown. */
  onClose: () => void;
}

const TYPE_ICON = {
  blog: BookOpen,
  tool: Wrench,
  page: FileText,
} as const;

export function SearchDropdown({ query, onClose }: SearchDropdownProps) {
  const navigate = useNavigate();
  const { search } = useSearchIndex();

  const results = useMemo(() => search(query, 20), [search, query]);

  const go = useCallback(
    (path: string) => {
      onClose();
      navigate(path);
    },
    [navigate, onClose],
  );

  const seeAll = useCallback(() => {
    const trimmed = query.trim();
    onClose();
    navigate(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search');
  }, [navigate, onClose, query]);

  const hasQuery = query.trim().length > 0;

  return (
    <div className="max-h-[70vh] overflow-y-auto py-2">
      {!hasQuery && (
        <div className="px-4 py-6 text-center text-sm text-gray-500">
          Search blog posts, tools, and pages.
        </div>
      )}

      {hasQuery && results.length === 0 && (
        <div className="px-4 py-6 text-center text-sm text-gray-500">
          No results found.
        </div>
      )}

      {results.length > 0 && (
        <div className="px-2">
          {results.map((result) => {
            const Icon = TYPE_ICON[result.type];
            return (
              <button
                key={result.id}
                type="button"
                onClick={() => go(result.path)}
                className="flex w-full items-start gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-gray-50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-gray-900">
                    {result.title}
                  </div>
                  {result.description && (
                    <div className="truncate text-xs text-gray-500">
                      {result.description}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {hasQuery && (
        <div className="mt-1 border-t px-2 pt-2">
          <button
            type="button"
            onClick={seeAll}
            className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-sm text-gray-600 transition-colors hover:bg-gray-50"
          >
            <Search className="h-4 w-4 text-gray-400" />
            <span>
              See all results for{' '}
              <span className="font-medium text-gray-900">"{query.trim()}"</span>
            </span>
            <CornerDownLeft className="ml-auto h-3.5 w-3.5 text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
}

