import { useState } from 'react';
import { Search, BookOpen, Calendar } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BlogList } from '@/components/blog/BlogList';
import { Layout } from '@/components/Layout';
import { getAllPosts, formatDate, getFeaturedPost } from '@/lib/blog/utils';
import { useSEO } from '@/hooks/useSEO';

export default function BlogIndex() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const tagFilter = searchParams.get('tag');

  // Set custom SEO for blog index with featured post data
  useSEO({
    title: tagFilter ? `${tagFilter} - Soapbox Blog` : 'Soapbox Blog - Insights on Decentralized Social Media',
    description: tagFilter
      ? `Read all posts tagged with "${tagFilter}" from the Soapbox team.`
      : featuredPost
        ? `Latest: ${featuredPost.title}. ${featuredPost.excerpt.slice(0, 100)}...`
        : 'Read the latest updates from the Soapbox team about decentralized social media, open source development, and community building.',
    type: 'website',
    image: featuredPost?.ogImage?.url || featuredPost?.coverImage || '/og-image.png',
    keywords: `soapbox blog, decentralized social media news, open source updates, nostr insights${featuredPost ? `, ${featuredPost.title}` : ''}${tagFilter ? `, ${tagFilter}` : ''}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Soapbox Blog",
      "description": "Insights on decentralized social media, open source development, and community building",
      "url": "https://soapbox.pub/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Soapbox",
        "url": "https://soapbox.pub",
        "logo": {
          "@type": "ImageObject",
          "url": "https://soapbox.pub/assets/logo.svg"
        }
      },
      "blogPost": allPosts.slice(0, 5).map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://soapbox.pub/blog/${post.slug}`,
        "datePublished": post.date + 'T00:00:00Z',
        "author": {
          "@type": "Person",
          "name": post.author.name || "Soapbox Team"
        },
        "image": post.ogImage?.url || post.coverImage ? "https://soapbox.pub" + (post.ogImage?.url || post.coverImage) : undefined
      }))
    }
  });

  const filteredPosts = allPosts.filter(post => {
    // Filter by search term
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by tag if specified
    const matchesTag = !tagFilter || (post.tags && post.tags.includes(tagFilter));

    return matchesSearch && matchesTag;
  });

  // Get posts excluding the featured post for the "All Posts" section
  const nonFeaturedPosts = filteredPosts.filter(post => post.slug !== featuredPost?.slug);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-8 h-8 text-azure" />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
              {tagFilter ? `${tagFilter}` : 'Blog'}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {tagFilter
              ? `All posts tagged with "${tagFilter}"`
              : 'Insights, updates, and thoughts on decentralized social media, Nostr, and the future of the web.'
            }
          </p>
          {tagFilter && (
            <div className="mt-4">
              <Link to="/blog" className="text-azure hover:text-azure-600 underline">
                ← View all posts
              </Link>
            </div>
          )}
        </div>

        {/* Featured Post */}
        {featuredPost && !tagFilter && (
          <div className="mb-20">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200">
                ✨ Featured Post
              </Badge>
            </div>
            <Link to={`/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {featuredPost.coverImage && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={featuredPost.date}>
                        {formatDate(featuredPost.date)}
                      </time>
                    </div>
                    {featuredPost.author.name && (
                      <span>by {featuredPost.author.name}</span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 group-hover:text-azure transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-lg border-2 border-gray-200 focus:border-azure rounded-xl"
            />
          </div>
        </div>

        {/* All Posts Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            {searchTerm ? 'Search Results' : 'All Posts'}
          </h2>
          <BlogList posts={nonFeaturedPosts} />
        </div>

        {/* Stats */}
        <div className="text-center text-gray-500">
          <p className="text-lg">
            {searchTerm ? (
              <>Showing {filteredPosts.length} results for "{searchTerm}"</>
            ) : (
              <>Showing {allPosts.length} posts total</>
            )}
          </p>
        </div>
      </div>
    </Layout>
  );
}