import { Package, ExternalLink } from 'lucide-react';
import { useMKStackApps } from '@/hooks/useMKStackApps';
import { AppCard } from '@/components/AppCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { RelaySelector } from '@/components/RelaySelector';

export function MKStackAppsFeed() {
  const { data: apps, isLoading, error } = useMKStackApps();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="h-32">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
              <div className="space-y-2 mb-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
              </div>
              <Skeleton className="h-9 w-full" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-full">
        <Card className="border-dashed border-red-200">
          <CardContent className="py-12 px-8 text-center">
            <div className="max-w-sm mx-auto space-y-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Failed to Load Apps
                </h3>
                <p className="text-gray-600 mb-4">
                  There was an error loading MKStack apps. This might be a temporary issue.
                </p>
              </div>
              <RelaySelector className="w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!apps || apps.length === 0) {
    return (
      <div className="col-span-full">
        <Card className="border-dashed">
          <CardContent className="py-12 px-8 text-center">
            <div className="max-w-sm mx-auto space-y-6">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No MKStack Apps Found
                </h3>
                <p className="text-gray-600 mb-4">
                  No apps built with MKStack were found on this relay. Try switching to a different relay or check back later.
                </p>
              </div>
              <div className="space-y-4">
                <RelaySelector className="w-full" />
                <Button variant="outline" size="sm" asChild>
                  <a href="https://nostrhub.io/apps/t/mkstack/" target="_blank" rel="noopener noreferrer">
                    Browse Apps on NostrHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <AppCard key={`${app.pubkey}-${app.tags.find(([name]) => name === 'd')?.[1]}`} event={app} />
        ))}
      </div>
      
      {/* Browse More Apps Button */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="px-8 py-3" asChild>
          <a href="https://nostrhub.io/apps/t/mkstack/" target="_blank" rel="noopener noreferrer">
            Browse More MKStack Apps on NostrHub
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </>
  );
}