import { compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export interface BlogPostMetadata {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  initials: string;
  date: string;
  isoDate: string;
  readTime: string;
  imageSrc: string;
}

export interface BlogPost {
  metadata: BlogPostMetadata;
  content: string;
}

// Parse YAML frontmatter from MDX
export function parseFrontmatter(content: string): { metadata: BlogPostMetadata; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("No frontmatter found");

  const [, frontmatter, body] = match;
  const metadata: BlogPostMetadata = {} as any;

  frontmatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    const value = valueParts.join(":").trim().replace(/^["']|["']$/g, "");
    if (key && value) {
      metadata[key.trim() as keyof BlogPostMetadata] = value;
    }
  });

  return { metadata, body };
}

// Custom MDX components for blog rendering
export const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-secondary mb-6 leading-tight" {...props} />,
  h2: (props: any) => <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-display font-bold text-secondary mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-lg text-muted-foreground mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-6 py-3 mb-6 italic text-muted-foreground bg-background/50 rounded-r" {...props} />
  ),
  a: (props: any) => <a className="text-primary hover:text-secondary transition-colors underline" {...props} />,
  strong: (props: any) => <strong className="font-bold text-secondary" {...props} />,
  code: (props: any) => <code className="bg-background px-2 py-1 rounded text-sm font-mono" {...props} />,
};

