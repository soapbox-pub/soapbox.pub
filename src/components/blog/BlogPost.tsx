import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Separator } from '@/components/ui/separator';
import { MarkdownContent } from './MarkdownContent';

import { formatDate, getReadingTime } from '@/lib/blog/utils';
import type { BlogPost } from '@/lib/blog/types';

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
  const readingTime = getReadingTime(post.content);

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link to="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {post.coverImage && (
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>

            {post.author.name && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="mb-8" />

      {/* Content */}
      <MarkdownContent content={post.content} />

      {/* Footer */}
      <div className="mt-12 pt-8 border-t">
        <Link to="/blog">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    </article>
  );
}