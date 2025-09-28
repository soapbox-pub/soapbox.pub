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
      className={`bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 hover:from-purple-100 hover:to-blue-100 hover:border-purple-300 text-purple-700 font-semibold ${className}`}
    >
      <a href={shakespeareUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
        🎭 Edit with Shakespeare
        <ExternalLink className="h-4 w-4" />
      </a>
    </Button>
  );
}