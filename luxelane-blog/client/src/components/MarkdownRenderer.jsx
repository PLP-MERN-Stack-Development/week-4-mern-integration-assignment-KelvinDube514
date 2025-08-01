import React from 'react';

const MarkdownRenderer = ({ content, className = '' }) => {
  if (!content) return null;

  // Simple markdown parser for basic formatting
  const parseMarkdown = (text) => {
    if (!text) return '';

    return text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-6">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-8">$1</h1>')
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-pink-400 hover:text-pink-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
      
      // Lists
      .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc text-white/80 mb-4">$1</ul>')
      
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto"><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">$1</code>')
      
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4 text-white/80 leading-relaxed">')
      .replace(/^(?!<[h|u|p|pre])(.*$)/gim, '<p class="mb-4 text-white/80 leading-relaxed">$1</p>')
      
      // Clean up empty paragraphs
      .replace(/<p class="mb-4 text-white\/80 leading-relaxed"><\/p>/g, '')
      .replace(/<p class="mb-4 text-white\/80 leading-relaxed">\s*<\/p>/g, '');
  };

  const htmlContent = parseMarkdown(content);

  return (
    <div 
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer; 