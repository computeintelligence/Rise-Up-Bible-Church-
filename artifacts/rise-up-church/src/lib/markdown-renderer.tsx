import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

// Simple markdown to React element converter
function parseMarkdown(markdown: string) {
  const lines = markdown.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headings
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-secondary mb-6 leading-tight">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4 mt-8">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-2xl font-display font-bold text-secondary mb-3 mt-6">
          {line.slice(4)}
        </h3>
      );
    }
    // Blockquotes
    else if (line.startsWith('> ')) {
      const quote = line.slice(2);
      elements.push(
        <blockquote key={i} className="border-l-4 border-primary pl-6 py-2 my-4 italic text-muted-foreground">
          {quote}
        </blockquote>
      );
    }
    // Emphasis
    else if (line.trim() === '') {
      elements.push(<div key={i} className="py-2" />);
    }
    // Bold italic
    else if (line.startsWith('*')) {
      elements.push(
        <p key={i} className="text-xl text-muted-foreground mb-4 font-medium">
          {line.replace(/\*/g, '')}
        </p>
      );
    }
    // Regular paragraphs
    else if (line.trim()) {
      elements.push(
        <p key={i} className="text-lg text-muted-foreground mb-4 leading-relaxed">
          {formatText(line)}
        </p>
      );
    }

    i++;
  }

  return elements;
}

// Format inline text with bold, italic, etc.
function formatText(text: string) {
  // Handle **bold**
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Handle ***bold italic***
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<em><strong>$1</strong></em>');
  // Handle *italic*
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Handle __bold__
  text = text.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  // Handle `code`
  text = text.replace(/`([^`]+)`/g, '<code class="bg-secondary/20 px-2 py-1 rounded">$1</code>');

  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg md:prose-xl prose-headings:font-display prose-headings:text-secondary prose-p:text-muted-foreground prose-a:text-primary max-w-none">
      {parseMarkdown(content)}
    </div>
  );
}
