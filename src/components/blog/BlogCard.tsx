import { Link, useNavigate } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatDate, authorNameToSlug } from '@/lib/blog/utils';
import type { BlogPostMeta } from '@/lib/blog/types';

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-2 hover:border-azure/20 cursor-pointer"
      onClick={() => navigate(`/blog/${post.slug}`)}
    >
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
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <Link
                to={`/blog/author/${authorNameToSlug(post.author.name)}`}
                className="hover:text-azure hover:underline transition-colors relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                {post.author.name}
              </Link>
            </div>
          )}
        </div>
        <h3
          className="text-xl font-display font-semibold text-gray-900 line-clamp-2 group-hover:text-azure transition-colors leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3 leading-relaxed">{post.excerpt}</p>
      </CardContent>
    </Card>
  );
}