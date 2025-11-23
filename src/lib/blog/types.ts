import type { ComponentType } from 'react';

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
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  Component?: ComponentType;
}