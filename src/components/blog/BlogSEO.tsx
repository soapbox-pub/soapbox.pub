import { useEffect } from 'react';
import type { BlogPost } from '@/lib/blog/types';

interface BlogSEOProps {
  post: BlogPost;
}

export function BlogSEO({ post }: BlogSEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${post.title} | Soapbox Blog`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.excerpt);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = post.excerpt;
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateMeta('og:title', post.title);
    updateOrCreateMeta('og:description', post.excerpt);
    updateOrCreateMeta('og:type', 'article');
    updateOrCreateMeta('og:url', `${window.location.origin}/blog/${post.slug}`);
    
    if (post.coverImage) {
      updateOrCreateMeta('og:image', `${window.location.origin}${post.coverImage}`);
    }

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', post.title);
    updateOrCreateMeta('twitter:description', post.excerpt);
    
    if (post.coverImage) {
      updateOrCreateMeta('twitter:image', `${window.location.origin}${post.coverImage}`);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'Soapbox';
    };
  }, [post]);

  return null;
}