import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Layout } from '@/components/Layout';
import { SupportCard } from '@/components/SupportCard';
import { ShakespeareMailchimpForm } from '@/components/ShakespeareMailchimpForm';
import { getPostBySlug, formatDate, getReadingTime, extractSEOData, authorNameToSlug } from '@/lib/blog/utils';
import { wrapVideoEmbeds } from '@/lib/blog/videoUtils';
import { BlogPost } from '@/lib/blog/types';
import { useSEO } from '@/hooks/useSEO';
import NotFound from '../NotFound';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }

    getPostBySlug(slug)
      .then(setPost)
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  // Set dynamic SEO for blog post with rich metadata extraction
  useSEO(post ? {
    ...extractSEOData(post),
    twitterCard: 'summary_large_image'
  } : {
    title: 'Loading... - Soapbox Blog',
    description: 'Read the latest updates from the Soapbox team about decentralized social media, open source development, and community building.',
    type: 'article' as const,
    image: '/og-image-v2.png',
    keywords: 'soapbox blog'
  });

  if (loading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-64 w-full mb-8 rounded-xl" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-2/3 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  const _readingTime = getReadingTime(post.content || '');

  return (
    <Layout>
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 pt-8" data-print-hide>
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 hover:bg-azure/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Featured Image */}
      {post.coverImage && (
        <div className="max-w-6xl mx-auto px-4 mb-12" data-print-hide>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header */}
        <header className="mb-12" data-print-hide>
          <h1
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date} className="font-medium">
                {formatDate(post.date)}
              </time>
            </div>

            {post.author.name && (
              <Link
                to={`/blog/author/${authorNameToSlug(post.author.name)}`}
                className="flex items-center gap-2 hover:text-azure transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="font-medium hover:underline">{post.author.name}</span>
              </Link>
            )}
          </div>
        </header>

        <Separator className="mb-12" data-print-hide />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.Component ? (
            <post.Component />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: wrapVideoEmbeds(post.content || '') }} />
          )}
        </div>

        {/* Email Signup for Shakespeare Resource Posts */}
        {post.tags?.includes('shakespeare-resource') && (
          <div className="mt-16 mb-16">
            <ShakespeareMailchimpForm />
          </div>
        )}

        {/* Support Card */}
        <div data-print-hide>
          <SupportCard />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200" data-print-hide>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link to="/blog">
              <Button variant="outline" className="hover:bg-azure hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            {post.author.name && (
              <div className="text-sm text-gray-500">
                Written by{' '}
                <Link
                  to={`/blog/author/${authorNameToSlug(post.author.name)}`}
                  className="font-medium text-gray-700 hover:text-azure hover:underline transition-colors"
                >
                  {post.author.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
}