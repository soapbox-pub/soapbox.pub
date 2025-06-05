import { useState } from 'react';
import { Search, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BlogList } from '@/components/blog/BlogList';
import { Layout } from '@/components/Layout';
import { getAllPosts, formatDate } from '@/lib/blog/utils';

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const allPosts = getAllPosts();
  
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPost = allPosts[0]; // Most recent post as featured

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-8 h-8 text-azure" />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
              Blog
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, updates, and thoughts on decentralized social media, Nostr, and the future of the web.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
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
          <BlogList posts={filteredPosts.slice(1)} /> {/* Skip featured post */}
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