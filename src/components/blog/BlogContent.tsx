import { wrapVideoEmbeds } from '@/lib/blog/videoUtils';

interface BlogContentProps {
  html: string;
  className?: string;
}

export function BlogContent({ html, className = '' }: BlogContentProps) {
  const processedHtml = wrapVideoEmbeds(html);
  
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: processedHtml }} 
    />
  );
}