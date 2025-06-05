import { useParams } from 'react-router-dom';
import { BlogPost } from '@/components/blog/BlogPost';
import { getPostBySlug } from '@/lib/blog/utils';
import NotFound from '../NotFound';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPost post={post} />
    </div>
  );
}