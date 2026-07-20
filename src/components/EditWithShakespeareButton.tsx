import React from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

interface EditWithShakespeareButtonProps {
  gitUrl: string;
  className?: string;
}

export function EditWithShakespeareButton({ gitUrl, className = "" }: EditWithShakespeareButtonProps) {
  const shakespeareUrl = `https://shakespeare.diy/?import=${encodeURIComponent(gitUrl)}`;
  
  return (
    <Button
      asChild
      variant="outline"
      className={`bg-gradient-to-r from-shakespeare-blue-50 to-shakespeare-gold-50 border-shakespeare-blue-200 hover:from-shakespeare-blue-100 hover:to-shakespeare-gold-100 hover:border-shakespeare-blue-300 text-shakespeare-navy-700 font-semibold ${className}`}
    >
      <a href={shakespeareUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
        🎭 Edit with Shakespeare
        <ExternalLink className="h-4 w-4" />
      </a>
    </Button>
  );
}