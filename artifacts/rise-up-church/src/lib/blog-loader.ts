// Parse YAML-style frontmatter
export function parseFrontmatter(content: string): { metadata: Record<string, string>; body: string } {
  const lines = content.split('\n');
  
  if (lines[0] !== '---') {
    return { metadata: {}, body: content };
  }

  let frontmatterEnd = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      frontmatterEnd = i;
      break;
    }
  }

  if (frontmatterEnd === -1) {
    return { metadata: {}, body: content };
  }

  const frontmatterLines = lines.slice(1, frontmatterEnd);
  const metadata: Record<string, string> = {};

  frontmatterLines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      metadata[key.trim()] = value;
    }
  });

  const body = lines.slice(frontmatterEnd + 1).join('\n').trim();

  return { metadata, body };
}

// Blog post type
export interface BlogPostMeta {
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

// Blog post with content
export interface BlogPost extends BlogPostMeta {
  content: string;
}

// Dynamic import blogs from glob
const blogModules = import.meta.glob('../blog-posts/*.mdx', { as: 'raw' });

let blogCache: Map<string, BlogPost> | null = null;

export async function loadAllBlogPosts(): Promise<BlogPost[]> {
  if (blogCache) {
    return Array.from(blogCache.values());
  }

  const posts: BlogPost[] = [];
  blogCache = new Map();

  for (const [path, loadModule] of Object.entries(blogModules)) {
    const content = await loadModule();
    const { metadata, body } = parseFrontmatter(content as string);

    const post: BlogPost = {
      slug: metadata.slug || '',
      title: metadata.title || '',
      subtitle: metadata.subtitle || '',
      author: metadata.author || '',
      initials: metadata.initials || '',
      date: metadata.date || '',
      isoDate: metadata.isoDate || '',
      readTime: metadata.readTime || '',
      imageSrc: metadata.imageSrc || '',
      content: body,
    };

    if (post.slug) {
      posts.push(post);
      blogCache.set(post.slug, post);
    }
  }

  return posts.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await loadAllBlogPosts();
  return posts.find(p => p.slug === slug) || null;
}
