import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { BlogList } from '@/components/blog/BlogList';
import { getAllPosts } from '@/lib/blog/utils';

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const allPosts = getAllPosts();
  
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, updates, and thoughts on decentralized social media, Nostr, and the future of the web.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Posts */}
      <BlogList posts={filteredPosts} />

      {/* Stats */}
      <div className="text-center mt-12 text-sm text-muted-foreground">
        Showing {filteredPosts.length} of {allPosts.length} posts
      </div>
    </div>
  );
}