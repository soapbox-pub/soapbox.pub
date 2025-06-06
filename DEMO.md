# Demo: Custom OG Data for PWA

## Test the Implementation

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Visit these pages and inspect the HTML:**
   - Home page: `/` - Custom title and description
   - About page: `/about` - Different custom meta data  
   - Tools page: `/tools` - Uses the SEO component approach
   - Any blog post: `/blog/[slug]` - Dynamic SEO based on post content

3. **Inspect the meta tags in DevTools:**
   - Right-click → Inspect → Elements tab
   - Look at the `<head>` section to see dynamically updated meta tags
   - Notice how OG image, description, title, etc. change per page

## Testing Social Media Sharing

To test OG data for social sharing:

1. **Use debugging tools:**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

2. **Or use browser extensions:**
   - "OpenGraph Preview" for Chrome/Firefox
   - "Meta SEO inspector" for Chrome

## Key Features Implemented

✅ **Dynamic meta tag updates** - Changes without page reload  
✅ **PWA compatible** - No server-side rendering required  
✅ **Two usage approaches** - Hook or component based  
✅ **Automatic URL handling** - Converts relative to absolute URLs  
✅ **Rich structured data** - JSON-LD for better SEO  
✅ **Fallback defaults** - Sensible defaults for missing data  
✅ **TypeScript support** - Fully typed SEO configuration  

## Example Usage

### Hook Approach (pages/MyPage.tsx):
```tsx
import { useSEO } from '@/hooks/useSEO';

export default function MyPage() {
  useSEO({
    title: 'My Custom Page Title',
    description: 'This page has custom OG data',
    image: '/custom-page-image.jpg'
  });
  
  return <div>Page content</div>;
}
```

### Component Approach (pages/AnotherPage.tsx):
```tsx
import { SEO } from '@/components/SEO';

export default function AnotherPage() {
  return (
    <div>
      <SEO 
        title="Another Custom Page"
        description="Using the component approach"
        image="/another-image.jpg"
      />
      <div>Page content</div>
    </div>
  );
}
```

The system is now ready to use! Each page can have custom OG data without any changes to the underlying PWA architecture.