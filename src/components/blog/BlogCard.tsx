import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { formatDate } from '@/lib/blog/utils';
import type { BlogPostMeta } from '@/lib/blog/types';

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-2 hover:border-azure/20">
      <Link to={`/blog/${post.slug}`}>
        {post.coverImage && (
          <div className="aspect-video overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            {post.author.name && (
              <div className="flex items-center gap-2">
                <Avatar className="h-5 w-5">
                  {post.author.picture && (
                    <AvatarImage src={post.author.picture} alt={post.author.name} />
                  )}
                  <AvatarFallback className="text-xs">
                    {post.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span>{post.author.name}</span>
              </div>
            )}
          </div>
          <h3 className="text-xl font-display font-semibold text-gray-900 line-clamp-2 group-hover:text-azure transition-colors leading-tight">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  );
}