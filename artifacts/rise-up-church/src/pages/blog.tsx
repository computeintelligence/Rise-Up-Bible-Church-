import { FadeIn } from "@/components/fade-in";
import { BlogCard } from "@/components/blog-card";
import { useEffect, useState } from "react";
import { loadAllBlogPosts, BlogPost } from "@/lib/blog-loader";

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllBlogPosts().then(posts => {
      setPosts(posts.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()));
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full bg-background min-h-screen">
      <section className="bg-secondary py-20 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              From the Pastor's Desk
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Insights, teachings, and biblical reflections from Rise-Up Bible Church.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-muted-foreground">Loading blog posts...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <FadeIn key={post.slug} direction="up" delay={Math.min(i * 0.05, 0.3)}>
                  <BlogCard
                    title={post.title}
                    subtitle={post.subtitle}
                    author={post.author}
                    date={post.date}
                    readTime={post.readTime}
                    href={`/${post.slug}`}
                    imageSrc={post.imageSrc}
                  />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
