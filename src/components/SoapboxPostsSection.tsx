import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { RelaySelector } from '@/components/RelaySelector';
import { NostrPost } from '@/components/NostrPost';
import { useSoapboxPosts } from '@/hooks/useSoapboxPosts';

export function SoapboxPostsSection() {
  const { data: posts, isLoading, error } = useSoapboxPosts(3);

  if (isLoading) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Latest Posts from Soapbox
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights and updates directly from the Soapbox team on Nostr.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-3/5" />
                  </div>
                  <div className="flex items-center space-x-4 pt-3">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !posts || posts.length === 0) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Latest Posts from Soapbox
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights and updates directly from the Soapbox team on Nostr.
            </p>
          </div>

          <div className="col-span-full">
            <Card className="border-dashed">
              <CardContent className="py-12 px-8 text-center">
                <div className="max-w-sm mx-auto space-y-6">
                  <p className="text-muted-foreground">
                    No posts found. Try another relay?
                  </p>
                  <RelaySelector className="w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Latest Posts from Soapbox
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights and updates directly from the Soapbox team on Nostr.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <NostrPost key={post.id} event={post} maxHeight={350} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
            <a
              href={`https://ditto.pub/@ditto@ditto.pub`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}