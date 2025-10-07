import React from 'react';

interface YouTubeEmbedProps {
  src: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ src, title, className = "" }: YouTubeEmbedProps) {
  return (
    <div className={`relative w-full aspect-video mb-8 ${className}`}>
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}