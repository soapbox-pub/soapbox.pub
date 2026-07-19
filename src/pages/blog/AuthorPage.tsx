import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import { BlogList } from '@/components/blog/BlogList';
import { getAuthorBySlug, getPostsByAuthorSlug, formatDate } from '@/lib/blog/utils';
import { useSEO } from '@/hooks/useSEO';
import NotFound from '../NotFound';

export default function AuthorPage() {
  const { slug } = useParams<{ slug: string }>();

  const author = slug ? getAuthorBySlug(slug) : null;
  const posts = slug ? getPostsByAuthorSlug(slug) : [];

  useSEO(author ? {
    title: `${author.name} - Soapbox Blog`,
    description: `Read all ${posts.length} articles by ${author.name} on the Soapbox blog.`,
    type: 'website',
    image: author.picture || '/og-image-v2.png',
    keywords: `${author.name}, soapbox blog, author, decentralized social media, nostr`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": author.name,
        ...(author.picture && {
          "image": {
            "@type": "ImageObject",
            "url": "https://soapbox.pub" + author.picture,
          },
        }),
      },
    },
  } : {
    title: 'Author Not Found - Soapbox Blog',
    description: 'The requested author could not be found.',
    type: 'website',
  });

  if (!author) {
    return <NotFound />;
  }

  const latestPost = posts[0];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Back to Blog */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 hover:bg-azure/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Author Header */}
        <Card className="mb-12 overflow-hidden border-2">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {author.picture ? (
                <img
                  src={author.picture}
                  alt={author.name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-azure/10 flex-shrink-0"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-12 h-12 text-azure" />
                </div>
              )}
              <div className="text-center sm:text-left">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                  {author.name}
                </h1>
                <p className="text-gray-500 text-lg">
                  {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
                </p>
                {latestPost && (
                  <p className="text-sm text-gray-400 mt-1">
                    Latest post: {formatDate(latestPost.date)}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Articles by Author */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
            Articles by {author.name}
          </h2>
          <BlogList posts={posts} />
        </div>

        {/* Stats */}
        <div className="text-center text-gray-500">
          <p className="text-lg">
            Showing {posts.length} {posts.length === 1 ? 'article' : 'articles'} by {author.name}
          </p>
        </div>
      </div>
    </Layout>
  );
}
