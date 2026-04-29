import type { ComponentType } from 'react';

export interface BlogAuthor {
  name: string;
  slug: string;
  picture?: string;
}

/** A single FAQ entry for FAQPage JSON-LD structured data. */
export interface BlogFAQ {
  question: string;
  answer: string;
}

/** A single step for HowTo JSON-LD structured data. */
export interface BlogHowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

/** HowTo metadata for JSON-LD structured data. */
export interface BlogHowTo {
  name: string;
  description?: string;
  totalTime?: string; // ISO 8601 duration, e.g. "PT5M"
  steps: BlogHowToStep[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name?: string;
    picture?: string;
  };
  ogImage: {
    url?: string;
  };
  featured?: boolean;
  tags?: string[];
  hidden?: boolean;
  /**
   * SEO keywords for this post (comma-separated when used as a meta tag).
   * Merged with site-wide defaults by `extractSEOData`.
   */
  keywords?: string;
  /**
   * FAQ entries. When present, an `FAQPage` JSON-LD block is emitted
   * alongside the `BlogPosting` schema for rich SERP results.
   */
  faq?: BlogFAQ[];
  /**
   * HowTo steps. When present, a `HowTo` JSON-LD block is emitted for
   * step-by-step SERP rich results.
   */
  howTo?: BlogHowTo;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  Component?: ComponentType;
}