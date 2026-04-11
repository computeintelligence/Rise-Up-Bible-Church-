import { useRoute } from "wouter";
import { useState, useEffect } from "react";
import { FadeIn } from "@/components/fade-in";
import { MarkdownRenderer } from "@/lib/markdown-renderer";
import { getBlogPostBySlug, BlogPost } from "@/lib/blog-loader";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link } from "wouter";

export function BlogPostPage() {
  const [match, params] = useRoute("/:slug");
  const slug = params?.slug as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    
    getBlogPostBySlug(slug).then(post => {
      if (post) {
        setPost(post);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    });
  }, [slug]);

  if (!match) return null;

  if (loading) {
    return (
      <div className="w-full bg-background min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="w-full bg-background min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-secondary mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <Link href="/blog" className="text-primary hover:text-secondary transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen pb-24">
      <section className="pt-12 pb-8 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn direction="down">
            <Link href="/blog" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors mb-8">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-secondary mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              {post.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">
                  {post.initials}
                </div>
                <span className="text-secondary">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                {post.readTime}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 mb-16">
        <FadeIn>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={post.imageSrc}
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </FadeIn>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn direction="up">
          <MarkdownRenderer content={post.content} />
        </FadeIn>
      </section>
    </div>
  );
}
