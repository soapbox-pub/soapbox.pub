# URL Filtering Implementation for Showcase Page

## Overview

The Showcase page now supports URL-based filtering using query parameters. Users can filter apps by tag using URLs like:

```
http://localhost:8080/showcase/?tag=Template
http://localhost:8080/showcase/?tag=Social
http://localhost:8080/showcase/?tag=Game
```

## Implementation Details

### 1. URL Parameter Reading

The component uses React Router's `useSearchParams` hook to read the `tag` parameter from the URL:

```typescript
const [searchParams, setSearchParams] = useSearchParams();

// Initialize selectedTag from URL parameter
useEffect(() => {
  const tagParam = searchParams.get('tag');
  if (tagParam) {
    setSelectedTag(tagParam);
  }
}, [searchParams]);
```

### 2. URL Parameter Updates

When a user clicks a tag filter button, both the local state and URL are updated:

```typescript
const handleTagSelect = (tag: string | null) => {
  setSelectedTag(tag);
  
  // Update URL parameters
  const newSearchParams = new URLSearchParams(searchParams);
  if (tag) {
    newSearchParams.set('tag', tag);
  } else {
    newSearchParams.delete('tag');
  }
  setSearchParams(newSearchParams);
};
```

### 3. Tag Filter Buttons

All tag filter buttons now use the `handleTagSelect` function instead of directly setting state:

```typescript
// "All Tags" button clears the filter
<Button onClick={() => handleTagSelect(null)}>
  All Tags
</Button>

// Individual tag buttons toggle the filter
<Button onClick={() => handleTagSelect(selectedTag === tag ? null : tag)}>
  {tag}
</Button>
```

## Usage Examples

### Direct URL Access
- `http://localhost:8080/showcase/` - Shows all apps
- `http://localhost:8080/showcase/?tag=Template` - Shows only template apps
- `http://localhost:8080/showcase/?tag=Social` - Shows only social apps

### Browser Navigation
- Users can bookmark filtered views
- Browser back/forward buttons work correctly
- Refreshing the page maintains the current filter

### Sharing Filtered Views
- Users can copy and share URLs with specific filters applied
- Links will open with the correct filter pre-selected

## Technical Benefits

1. **Bookmarkable**: Users can bookmark specific filtered views
2. **Shareable**: Filtered URLs can be shared with others
3. **Browser-friendly**: Back/forward navigation works as expected
4. **SEO-friendly**: Search engines can index filtered views
5. **User Experience**: Maintains filter state on page refresh

## Filter Behavior

- **Template Filter**: When `?tag=Template` is applied, only the Templates section is shown
- **Other Filters**: When any other tag is applied, the filtered apps appear in their respective sections (Featured, All Apps, etc.)
- **No Filter**: When no tag parameter is present, all sections are displayed normally

## Error Handling

The implementation gracefully handles:
- Invalid tag parameters (non-existent tags)
- Malformed URLs
- Missing tag parameters
- Empty tag values

## Browser Compatibility

This implementation uses standard web APIs that are supported in all modern browsers:
- `URLSearchParams` (supported in all modern browsers)
- React Router's `useSearchParams` hook
- Standard React hooks (`useState`, `useEffect`)