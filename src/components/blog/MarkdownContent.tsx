interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Convert markdown to HTML
  const convertMarkdownToHtml = (text: string): string => {
    return text
      // Headers
      .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-semibold mt-8 mb-4">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-semibold mt-10 mb-6">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold mt-12 mb-8">$1</h1>')
      
      // Images
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg my-6 max-w-full h-auto" />')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')
      
      // Bold and italic
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
      
      // Code blocks (simple)
      .replace(/```([^`]+)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">$1</code>')
      
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^/, '<p class="mb-4">')
      .replace(/$/, '</p>')
      
      // Clean up empty paragraphs
      .replace(/<p class="mb-4"><\/p>/g, '')
      .replace(/<p class="mb-4">(\s*<h[1-6])/g, '$1')
      .replace(/(<\/h[1-6]>)\s*<\/p>/g, '$1');
  };

  return (
    <div 
      className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-a:text-primary"
      dangerouslySetInnerHTML={{ 
        __html: convertMarkdownToHtml(content)
      }}
    />
  );
}