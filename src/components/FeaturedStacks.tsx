import { Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { RelaySelector } from "@/components/RelaySelector";
import { StackCard } from "@/components/StackCard";
import { useStacks } from "@/hooks/useStacks";

export function FeaturedStacks() {
  const { data: stacks, isLoading, error } = useStacks();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
              
              <div className="space-y-2 mb-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-14" />
              </div>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-12" />
              </div>
              
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error || !stacks || stacks.length === 0) {
    return (
      <div className="col-span-full">
        <Card className="border-dashed">
          <CardContent className="py-12 px-8 text-center">
            <div className="max-w-sm mx-auto space-y-6">
              <p className="text-muted-foreground">
                {error ? 'Failed to load stacks. Try another relay?' : 'No stacks found. Try another relay?'}
              </p>
              <RelaySelector className="w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Sort stacks by creation date (newest first) and take the first 6
  const sortedStacks = [...stacks]
    .sort((a, b) => b.created_at - a.created_at)
    .slice(0, 6);

  // Check if we have the MKStack (featured stack)
  const mkStackIndex = sortedStacks.findIndex(stack => {
    const title = stack.tags.find(([name]) => name === 'title')?.[1] || '';
    return title.toLowerCase().includes('mkstack') || title.toLowerCase().includes('mk stack');
  });

  // If MKStack is found, move it to the front and mark as featured
  let featuredStacks = sortedStacks;
  if (mkStackIndex !== -1) {
    const mkStack = sortedStacks[mkStackIndex];
    featuredStacks = [mkStack, ...sortedStacks.filter((_, index) => index !== mkStackIndex)];
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredStacks.map((stack, index) => (
        <StackCard 
          key={`${stack.pubkey}:${stack.tags.find(([name]) => name === 'd')?.[1]}`}
          stack={stack} 
          featured={index === 0 && mkStackIndex !== -1}
        />
      ))}

      {/* More Templates Placeholder */}
      {featuredStacks.length < 6 && (
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded-xl mx-auto flex items-center justify-center">
                <Search className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Explore More</h3>
                <p className="text-gray-600">Discover hundreds of other templates on getstacks.dev</p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://getstacks.dev/" target="_blank" rel="noopener noreferrer">
                  Browse All Templates
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}