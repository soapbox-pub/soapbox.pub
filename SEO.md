# Custom Open Graph (OG) Meta Data

This project includes a flexible system for setting custom Open Graph and meta data for each page, which works perfectly with PWAs.

## Overview

The system provides two approaches for setting custom SEO and OG data:
1. **Hook-based**: Using the `useSEO` hook
2. **Component-based**: Using the `<SEO />` component

Both approaches update the document's meta tags dynamically without requiring server-side rendering.

## Two Ways to Use

### 1. Hook Approach (Recommended)

```tsx
import { useSEO } from '@/hooks/useSEO';

export default function MyPage() {
  useSEO({
    title: 'Custom Page Title',
    description: 'This is a custom page description',
    image: '/custom-og-image.jpg',
    type: 'article',
    keywords: 'react, typescript, open graph'
  });

  return <div>Page content</div>;
}
```

### 2. Component Approach

```tsx
import { SEO } from '@/components/SEO';

export default function MyPage() {
  return (
    <div>
      <SEO 
        title="Custom Page Title"
        description="This is a custom page description"
        image="/custom-og-image.jpg"
        type="article"
        keywords="react, typescript, open graph"
      />
      <div>Page content</div>
    </div>
  );
}
```

## Available Options

```typescript
interface SEOData {
  title?: string;                    // Page title
  description?: string;              // Meta description
  image?: string;                    // OG image URL (relative or absolute)
  url?: string;                      // Canonical URL (defaults to current URL)
  type?: string;                     // OG type (website, article, etc.)
  siteName?: string;                 // Site name
  locale?: string;                   // Page locale
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;              // Twitter handle
  keywords?: string;                 // Meta keywords
  author?: string;                   // Page author
  canonicalUrl?: string;             // Override canonical URL
  structuredData?: any;              // JSON-LD structured data
}
```

## Features

- **Automatic URL handling**: Relative image paths are automatically converted to full URLs
- **Current page URL**: Uses the current page URL if none is provided
- **Default fallbacks**: Falls back to site defaults for any unspecified values
- **Structured data**: Automatically generates JSON-LD for better SEO
- **Twitter optimization**: Includes Twitter Card meta tags
- **Dynamic updates**: Changes meta tags when navigation occurs

## Examples

### Blog Post with Dynamic Content

```tsx
export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>();

  // Dynamic SEO based on loaded content
  useSEO({
    title: post ? `${post.title} - Blog` : 'Loading...',
    description: post?.excerpt || 'Read our latest blog post',
    type: 'article',
    image: post?.coverImage || '/default-blog-image.jpg',
    structuredData: post ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.coverImage,
      "datePublished": post.date,
      "author": { "@type": "Person", "name": post.author.name }
    } : undefined
  });

  // ... rest of component
}
```

### Product Page

```tsx
export default function ProductPage() {
  return (
    <div>
      <SEO 
        title="Amazing Product - Buy Now"
        description="The best product you'll ever buy. Features include X, Y, and Z."
        image="/products/amazing-product.jpg"
        type="product"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Amazing Product",
          "description": "The best product you'll ever buy",
          "image": "/products/amazing-product.jpg",
          "offers": {
            "@type": "Offer",
            "price": "99.99",
            "priceCurrency": "USD"
          }
        }}
      />
      {/* Product content */}
    </div>
  );
}
```

## Implementation Notes

- The system updates meta tags immediately when the hook/component is called
- Image URLs are automatically prefixed with the current origin if relative
- The canonical URL defaults to the current page URL
- All meta tags are created if they don't exist, or updated if they do
- Works perfectly with client-side routing (React Router)
- No server-side rendering required - perfect for PWAs

## Default Values

The system includes sensible defaults for the Soapbox brand:

```typescript
const defaultSEO = {
  title: 'Soapbox',
  description: 'Soapbox is customizable open-source software that puts the power of social media in the hands of the people.',
  image: '/og-image.png',
  type: 'website',
  siteName: 'Soapbox',
  locale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterSite: '@soapbox_pub'
};
```

These defaults are merged with your custom values, so you only need to specify what you want to override.