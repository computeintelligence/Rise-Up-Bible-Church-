import { Link } from "wouter";
import { useState, useEffect } from "react";
import { FadeIn } from "@/components/fade-in";
import { BlogCard } from "@/components/blog-card";
import { Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { loadAllBlogPosts, BlogPost } from "@/lib/blog-loader";

export function Home() {
  const { toast } = useToast();
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    loadAllBlogPosts().then(posts => {
      const sorted = [...posts]
        .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime())
        .slice(0, 3);
      setRecentPosts(sorted);
    });
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for reaching out. We will get back to you soon!",
      className: "bg-green-50 text-green-900 border-green-200",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2946&auto=format&fit=crop"
            alt="Church Worship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pt-20">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium text-sm tracking-wider uppercase mb-6 backdrop-blur-sm">
              Welcome to Rise-Up Bible Church
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight max-w-4xl">
              RAISING THE LORD'S <span className="text-primary">ARMY</span> FOR THE END-TIME HARVEST
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Connecting and equipping believers for effective ministry through preaching, teaching, and small group discipleship.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/about"
                className="px-8 py-4 rounded-[28px] bg-primary text-white font-bold text-lg hover:bg-white hover:text-primary shadow-[0_0_20px_rgba(238,73,2,0.3)] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
              <Link
                href="/events"
                className="px-8 py-4 rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Events
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-[40px] transform -rotate-3"></div>
                <img
                  src="https://pixabay.com/get/ge82176f9f29822a137fc2e355f5fc64b78ee8a67e341d11a08265e0cb75c6dc8a5c0dcdf6c0987b92555a743ff459118bdca307186f69d293f3819c28033e71d_1280.jpg"
                  alt="Bible Study Community"
                  className="relative rounded-3xl shadow-xl z-10 w-full h-[500px] object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Mission</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
                Equipping Believers for the Work of Ministry
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Connecting and equipping believers for the effective work of ministry through preaching, teaching, and small group discipleship so that together we reach the unsaved with good news.
              </p>

              <div className="space-y-4 mb-10">
                {['Preaching the Word', 'Interactive Teaching', 'Small Group Discipleship'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      ✓
                    </div>
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex px-8 py-4 rounded-[28px] bg-secondary text-white font-bold hover:bg-primary transition-colors duration-300"
              >
                Read Our Full Story
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-24 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <FadeIn direction="up">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Latest Messages</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary">
                From the Pastor's Desk
              </h3>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <Link
                href="/blog"
                className="inline-flex px-6 py-3 rounded-[28px] border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-colors duration-300"
              >
                View All Posts
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, i) => (
              <FadeIn key={post.slug} direction="up" delay={i * 0.1}>
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
                We'd Love to Hear From You
              </h3>
              <p className="text-muted-foreground text-lg">
                Whether you have a question, a prayer request, or just want to connect, our team is ready to help.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5">

                <div className="md:col-span-2 bg-secondary text-white p-10 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-2xl font-bold mb-6">Contact Information</h4>
                    <p className="text-gray-400 mb-10">Fill out the form and our team will get back to you within 24 hours.</p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Phone className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-400">076-255-0626</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Send className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-400">admin@rubcosizweni.org</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="font-medium mb-4">Location</p>
                    <p className="text-gray-400 leading-relaxed">
                      Ob63 St, Osizweni A,<br />
                      Newcastle, 2952
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3 p-10">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary">First Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary">Last Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary">Your Message</label>
                      <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none" placeholder="How can we help you?"></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 rounded-[28px] bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-4">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
