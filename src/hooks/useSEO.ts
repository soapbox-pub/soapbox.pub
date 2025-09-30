import { useEffect } from 'react';

export interface SEOData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, unknown>;
}

const defaultSEO: SEOData = {
  title: 'Soapbox',
  description: 'Soapbox is customizable open-source software that puts the power of social media in the hands of the people.',
  image: '/og-image.png',
  type: 'website',
  siteName: 'Soapbox',
  locale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterSite: '@soapbox_pub',
  keywords: 'soapbox, nostr, decentralized, social media, open source, ditto, fediverse, activitypub',
  author: 'Soapbox Technology',
};

function updateMetaTag(property: string, content: string) {
  let element = document.querySelector(`meta[property="${property}"]`) || 
                document.querySelector(`meta[name="${property}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    if (property.startsWith('og:') || property.startsWith('article:') || property.startsWith('fb:')) {
      element.setAttribute('property', property);
    } else {
      element.setAttribute('name', property);
    }
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

function updateTitle(title: string) {
  document.title = title;
}

function updateCanonicalUrl(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (link) {
    link.setAttribute('href', url);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}

function updateStructuredData(data: Record<string, unknown>) {
  // Remove existing structured data script
  const existingScript = document.getElementById('structured-data');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create new structured data script
  const script = document.createElement('script');
  script.id = 'structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
}

function getFullUrl(path: string): string {
  const baseUrl = "https://soapbox.pub";
  if (path.startsWith('http')) {
    return path;
  }
  return baseUrl + (path.startsWith('/') ? path : `/${path}`);
}

export function useSEO(seoData: SEOData = {}) {
  useEffect(() => {
    const finalSEO = { ...defaultSEO, ...seoData };
    
    // Get current URL if not provided
    const currentUrl = finalSEO.url || new URL(window.location.pathname, "https://soapbox.pub").href;
    const fullImageUrl = finalSEO.image ? getFullUrl(finalSEO.image) : undefined;
    
    // Update title
    if (finalSEO.title) {
      updateTitle(finalSEO.title);
    }
    
    // Update basic meta tags
    if (finalSEO.description) {
      updateMetaTag('description', finalSEO.description);
    }
    if (finalSEO.keywords) {
      updateMetaTag('keywords', finalSEO.keywords);
    }
    if (finalSEO.author) {
      updateMetaTag('author', finalSEO.author);
    }
    
    // Update Open Graph tags
    if (finalSEO.title) {
      updateMetaTag('og:title', finalSEO.title);
    }
    if (finalSEO.description) {
      updateMetaTag('og:description', finalSEO.description);
    }
    if (fullImageUrl) {
      updateMetaTag('og:image', fullImageUrl);
      updateMetaTag('image', fullImageUrl); // General image meta tag
      updateMetaTag('og:image:width', '1200');
      updateMetaTag('og:image:height', '630');
      updateMetaTag('og:image:type', 'image/jpeg');
    }
    if (currentUrl) {
      updateMetaTag('og:url', currentUrl);
    }
    if (finalSEO.type) {
      updateMetaTag('og:type', finalSEO.type);
      
      // Add article-specific meta tags for blog posts
      if (finalSEO.type === 'article') {
        if (finalSEO.author) {
          updateMetaTag('article:author', finalSEO.author);
        }
        // Add published time if available in structured data
        if (finalSEO.structuredData && 'datePublished' in finalSEO.structuredData) {
          updateMetaTag('article:published_time', finalSEO.structuredData.datePublished as string);
        }
        // Add modified time if available in structured data
        if (finalSEO.structuredData && 'dateModified' in finalSEO.structuredData) {
          updateMetaTag('article:modified_time', finalSEO.structuredData.dateModified as string);
        }
        // Add article section
        updateMetaTag('article:section', 'Technology');
        // Add article tags from keywords
        if (finalSEO.keywords) {
          const tags = finalSEO.keywords.split(', ').slice(0, 5); // Limit to 5 tags
          tags.forEach(tag => {
            updateMetaTag('article:tag', tag);
          });
        }
      }
    }
    if (finalSEO.siteName) {
      updateMetaTag('og:site_name', finalSEO.siteName);
    }
    if (finalSEO.locale) {
      updateMetaTag('og:locale', finalSEO.locale);
    }
    
    // Update Twitter tags
    if (finalSEO.twitterCard) {
      updateMetaTag('twitter:card', finalSEO.twitterCard);
    }
    if (finalSEO.title) {
      updateMetaTag('twitter:title', finalSEO.title);
    }
    if (finalSEO.description) {
      updateMetaTag('twitter:description', finalSEO.description);
    }
    if (fullImageUrl) {
      updateMetaTag('twitter:image', fullImageUrl);
    }
    if (finalSEO.twitterSite) {
      updateMetaTag('twitter:site', finalSEO.twitterSite);
      updateMetaTag('twitter:creator', finalSEO.twitterSite);
    }
    
    // Update canonical URL
    if (finalSEO.canonicalUrl || currentUrl) {
      updateCanonicalUrl(finalSEO.canonicalUrl || currentUrl);
    }
    
    // Update structured data
    if (finalSEO.structuredData) {
      updateStructuredData(finalSEO.structuredData);
    } else if (finalSEO.title && finalSEO.description) {
      // Create default structured data
      const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": finalSEO.title,
        "description": finalSEO.description,
        "url": currentUrl,
        ...(fullImageUrl && { "image": fullImageUrl }),
        "isPartOf": {
          "@type": "WebSite",
          "name": finalSEO.siteName,
          "url": "https://soapbox.pub"
        }
      };
      updateStructuredData(defaultStructuredData);
    }
    
  }, [seoData]);
}

export default useSEO;