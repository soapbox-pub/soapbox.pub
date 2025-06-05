import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CustomNipView } from '@/components/CustomNipView';
import { useCustomNip } from '@/hooks/useCustomNip';
import { RelaySelector } from '@/components/RelaySelector';

function CustomNipSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Skeleton */}
      <Card>
        <div className="p-6 space-y-4">
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-16" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        </div>
      </Card>

      {/* Author Skeleton */}
      <Card>
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </div>
      </Card>

      {/* Content Skeleton */}
      <Card>
        <div className="p-6 space-y-4">
          <Skeleton className="h-6 w-32" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function CustomNipPage() {
  const { naddr } = useParams<{ naddr: string }>();
  
  // Always call the hook, but pass empty string if naddr is undefined
  const { data: nip, isLoading, error } = useCustomNip(naddr || '');

  // Validate naddr parameter
  if (!naddr) {
    return <Navigate to="/tools/nostrhub" replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <a href="/tools/nostrhub">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to NostrHub
              </a>
            </Button>
          </div>
          <CustomNipSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <a href="/tools/nostrhub">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to NostrHub
              </a>
            </Button>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error instanceof Error ? error.message : 'Failed to load custom NIP'}
              </AlertDescription>
            </Alert>
            
            <Card className="mt-6 border-dashed">
              <CardContent className="py-12 px-8 text-center">
                <div className="max-w-sm mx-auto space-y-6">
                  <p className="text-muted-foreground">
                    Custom NIP not found. Try switching to a different relay?
                  </p>
                  <RelaySelector className="w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!nip) {
    return <Navigate to="/tools/nostrhub" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <a href="/tools/nostrhub">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to NostrHub
            </a>
          </Button>
        </div>
        
        <CustomNipView nip={nip} />
      </div>
    </div>
  );
}