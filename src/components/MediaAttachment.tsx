import { useState } from 'react';
import { Play, Volume2, VolumeX, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MediaAttachmentProps {
  url: string;
  mimeType?: string;
  dimensions?: string;
  alt?: string;
  blurhash?: string;
  className?: string;
}

export function MediaAttachment({
  url,
  mimeType,
  dimensions,
  alt,
  blurhash: _blurhash,
  className
}: MediaAttachmentProps) {
  const [imageError, setImageError] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Parse dimensions if provided
  const parsedDimensions = dimensions ? dimensions.split('x').map(Number) : null;
  const aspectRatio = parsedDimensions ? parsedDimensions[0] / parsedDimensions[1] : undefined;

  // Determine media type from MIME type or URL
  const isImage = mimeType?.startsWith('image/') || /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
  const isVideo = mimeType?.startsWith('video/') || /\.(mp4|webm|mov|avi|mkv)$/i.test(url);
  const isAudio = mimeType?.startsWith('audio/') || /\.(mp3|wav|ogg|m4a|flac)$/i.test(url);

  const handleVideoPlay = (video: HTMLVideoElement) => {
    setIsPlaying(true);
    video.play();
  };

  const handleVideoPause = (video: HTMLVideoElement) => {
    setIsPlaying(false);
    video.pause();
  };

  const toggleMute = (video: HTMLVideoElement) => {
    video.muted = !video.muted;
    setVideoMuted(video.muted);
  };

  if (imageError) {
    return (
      <Card className={cn("p-4 border-dashed", className)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Media attachment</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </Button>
        </div>
      </Card>
    );
  }

  if (isImage) {
    return (
      <div className={cn("relative overflow-hidden rounded-lg", className)}>
        <img
          src={url}
          alt={alt || "Image attachment"}
          className="w-full h-auto max-h-96 object-cover"
          style={aspectRatio ? { aspectRatio } : undefined}
          onError={() => setImageError(true)}
          loading="lazy"
        />
        {alt && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
            {alt}
          </div>
        )}
      </div>
    );
  }

  if (isVideo) {
    return (
      <div className={cn("relative overflow-hidden rounded-lg bg-black", className)}>
        <video
          src={url}
          className="w-full h-auto max-h-96"
          style={aspectRatio ? { aspectRatio } : undefined}
          controls={false}
          muted={videoMuted}
          loop
          playsInline
          onError={() => setImageError(true)}
          onClick={(e) => {
            const video = e.currentTarget;
            if (isPlaying) {
              handleVideoPause(video);
            } else {
              handleVideoPlay(video);
            }
          }}
        />
        
        {/* Video controls overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const video = e.currentTarget.parentElement?.previousElementSibling as HTMLVideoElement;
              if (video) {
                if (isPlaying) {
                  handleVideoPause(video);
                } else {
                  handleVideoPlay(video);
                }
              }
            }}
          >
            <Play className={cn("h-6 w-6", isPlaying && "hidden")} />
            <span className={cn("text-sm", !isPlaying && "hidden")}>Pause</span>
          </Button>
        </div>

        {/* Mute button */}
        <div className="absolute top-2 right-2">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full opacity-70 hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              const video = e.currentTarget.parentElement?.querySelector('video') as HTMLVideoElement;
              if (video) {
                toggleMute(video);
              }
            }}
          >
            {videoMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </div>

        {alt && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
            {alt}
          </div>
        )}
      </div>
    );
  }

  if (isAudio) {
    return (
      <Card className={cn("p-4", className)}>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Audio attachment</span>
            </div>
            <audio
              src={url}
              controls
              className="w-full"
              onError={() => setImageError(true)}
            />
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    );
  }

  // Fallback for unknown media types
  return (
    <Card className={cn("p-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
          <div>
            <span className="text-sm font-medium">File attachment</span>
            {mimeType && (
              <span className="text-xs text-muted-foreground ml-2">({mimeType})</span>
            )}
          </div>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Button>
      </div>
    </Card>
  );
}