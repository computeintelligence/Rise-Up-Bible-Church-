import { FadeIn } from "@/components/fade-in";
import { BookOpen, Users, Heart, Target, Mic, Globe } from "lucide-react";

export function About() {
  const ministryApproach = [
    { icon: BookOpen, title: "Biblical Teaching & Preaching", desc: "Strong, uncompromised declaration and exposition of God's Word." },
    { icon: Users, title: "Small Group Discipleship", desc: "Intimate communities for deeper spiritual growth and accountability." },
    { icon: Globe, title: "Community Outreach & Evangelism", desc: "Reaching the unsaved with the good news of Christ." },
    { icon: Mic, title: "Prayer & Intercession", desc: "A house of prayer standing in the gap for communities and nations." },
    { icon: Heart, title: "Youth & Children's Ministry", desc: "Empowering the next generation to know and serve God." },
    { icon: Target, title: "Equipping Believers", desc: "Training and releasing every member for effective ministry." },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-secondary py-20 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              About Rise-Up Bible Church
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Learn about our vision, mission, and the people behind our ministry.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <img
                src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?q=80&w=2940&auto=format&fit=crop"
                alt="Church worship"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </FadeIn>

            <div className="space-y-10">
              <FadeIn direction="left" delay={0.1}>
                <div>
                  <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Vision</h2>
                  <p className="text-3xl font-display font-bold text-secondary leading-tight">
                    "Raising the Lord's Army for the End-Time Harvest"
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="h-px w-full bg-border"></div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <div>
                  <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Connecting and equipping believers for the effective work of ministry through preaching, teaching, and small group discipleship so that together we reach the unsaved with good news.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Our History</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Rise-Up Bible Church was founded with a clear vision to raise an army for the Lord's end-time harvest. Under the leadership of Dr. Joel Motlafi and his wife Mrs. Ellen Motlafi, our main branch in Benoni has grown into a vibrant community of believers dedicated to spreading the Gospel.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mb-5">1</div>
                <h4 className="text-xl font-display font-bold text-secondary mb-3">Main Branch (Benoni, Gauteng)</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our founding branch in Benoni, Gauteng, led by Dr. Joel Motlafi and Mrs. Ellen Motlafi. This thriving congregation is the heartbeat of Rise-Up Bible Church's mission to reach the nation.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mb-5">2</div>
                <h4 className="text-xl font-display font-bold text-secondary mb-3">Newcastle Branch (Osizweni)</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our Newcastle branch, led by Pastor Thulani Nkosi and Mrs. Noluthando Nkosi, extends our ministry's reach into the KwaZulu-Natal region. This branch carries forward our vision while serving the unique needs of the local community.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meet Our Leaders */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary">Meet Our Leaders</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Dr. Joel Motlafi */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-background rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/dr-motlafi.jpg"
                    alt="Dr. Joel & Mrs Ellen Motlafi"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-display font-bold text-secondary mb-1">Dr. Joel Motlafi</h4>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">General Overseer (Benoni Branch)</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Joel Motlafi, alongside his wife Mrs. Ellen Motlafi, founded Rise-Up Bible Church with a vision to raise an army for the Lord's end-time harvest.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Pastor Thulani Nkosi */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-background rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/pastor-nkosi.jpg"
                    alt="Pastor Thulani & Mrs Noluthando Nkosi"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-display font-bold text-secondary mb-1">Pastor Thulani Nkosi</h4>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Branch Pastor (Osizweni, Newcastle)</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Pastor Thulani Nkosi, together with his wife Mrs. Noluthando Nkosi, leads our Newcastle branch with dedication and passion for community transformation.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ministry Approach */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How We Serve</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Our Ministry Approach</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At Rise-Up Bible Church, we believe in a holistic approach to ministry that encompasses every aspect of the believer's life.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministryApproach.map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon size={26} />
                  </div>
                  <h4 className="text-lg font-bold font-display text-secondary mb-3">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Foundation</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Our Values</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              We are a Church that lives by values that are underpinned by love.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {["Unity", "Respect", "Excellence", "Integrity", "Reading the Bible"].map((value, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.06}>
                <div className="bg-white/5 border border-white/10 rounded-2xl py-6 px-4 hover:bg-primary/20 hover:border-primary/40 transition-all">
                  <p className="text-white font-display font-bold text-lg">{value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
