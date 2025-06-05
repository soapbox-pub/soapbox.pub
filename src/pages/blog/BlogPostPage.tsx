import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BlogPost as BlogPostComponent } from '@/components/blog/BlogPost';
import { getPostBySlug } from '@/lib/blog/utils';
import { BlogPost } from '@/lib/blog/types';
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

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {post.Component ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <post.Component />
        </div>
      ) : (
        <BlogPostComponent post={post} />
      )}
    </div>
  );
}