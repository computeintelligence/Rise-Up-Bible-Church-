import fs from "fs";
import path from "path";

/**
 * Extract frontmatter and content from a blog post.
 * This script helps convert TSX blog posts to MDX format.
 * Run: node --loader tsx src/scripts/extract-blog-frontmatter.ts
 */

// Map of TSX filenames to their metadata from blog-posts.ts
const getBlogPostMetadata = (slug: string) => {
  const blogPosts: Record<string, any> = {
    "the-will-of-god": {
      slug: "the-will-of-god",
      title: "The Will Of God",
      subtitle: "Understanding and aligning with God's divine plan",
      author: "Pastor T. Nkosi",
      initials: "TN",
      date: "February 22, 2026",
      isoDate: "2026-02-22",
      readTime: "5 min read",
      imageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/YX4x0rj3WLFkzV0X/black-and-orange-modern-church-presentation-2-Ba0CO9yxhIczhfG9.jpg",
    },
    "godly-fatherhood": {
      slug: "godly-fatherhood",
      title: "Godly Fatherhood",
      subtitle: "The profound spiritual responsibility of fathers in God's design",
      author: "Rise-Up Bible Church",
      initials: "RB",
      date: "June 15, 2025",
      isoDate: "2025-06-15",
      readTime: "15 min read",
      imageSrc:
        "https://images.unsplash.com/photo-1503160814947-656030efef06?auto=jpeg&fit=crop&w=1200&h=630",
    },
    "the-healing-word": {
      slug: "the-healing-word",
      title: "The Healing Word",
      subtitle: "The transformative power of God's Word to heal",
      author: "Thato Ndlovu",
      initials: "TN",
      date: "December 28, 2025",
      isoDate: "2025-12-28",
      readTime: "7 min read",
      imageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/YX4x0rj3WLFkzV0X/sermon_cover-1-7AxCZWPNSh4hNjNw.png",
    },
  };

  return blogPosts[slug];
};

export function generateFrontmatter(metadata: any): string {
  return `---
slug: ${metadata.slug}
title: ${metadata.title}
subtitle: ${metadata.subtitle}
author: ${metadata.author}
initials: ${metadata.initials}
date: ${metadata.date}
isoDate: ${metadata.isoDate}
readTime: ${metadata.readTime}
imageSrc: ${metadata.imageSrc}
---
`;
}

// Helper to extract plain text content from prose/HTML-like TSX sections
export function extractMarkdownContent(tsxContent: string): string {
  // This is a placeholder - actual extraction would need more sophisticated parsing
  // For now, manual conversion is recommended to ensure quality formatting
  return "";
}
