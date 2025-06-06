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
  const element = document.getElementById('structured-data');
  if (element) {
    element.textContent = JSON.stringify(data, null, 2);
  }
}

function getFullUrl(path: string): string {
  const baseUrl = window.location.origin;
  if (path.startsWith('http')) {
    return path;
  }
  return baseUrl + (path.startsWith('/') ? path : `/${path}`);
}

export function useSEO(seoData: SEOData = {}) {
  useEffect(() => {
    const finalSEO = { ...defaultSEO, ...seoData };
    
    // Get current URL if not provided
    const currentUrl = finalSEO.url || window.location.href;
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
    }
    if (currentUrl) {
      updateMetaTag('og:url', currentUrl);
    }
    if (finalSEO.type) {
      updateMetaTag('og:type', finalSEO.type);
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
          "url": window.location.origin
        }
      };
      updateStructuredData(defaultStructuredData);
    }
    
  }, [seoData]);
}

export default useSEO;