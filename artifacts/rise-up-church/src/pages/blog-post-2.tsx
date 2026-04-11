import { FadeIn } from "@/components/fade-in";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export function BlogPost2() {
  return (
    <div className="w-full bg-white min-h-screen pb-24">
      {/* Article Header */}
      <section className="pt-12 pb-8 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn direction="down">
            <Link href="/blog" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors mb-8">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-secondary mb-6 leading-tight">
              The Power & Value of a Family
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              God's most powerful system for shaping humanity
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">TN</div>
                <span className="text-secondary">Pastor T. Nkosi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                March 1, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                6 min read
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 mb-16">
        <FadeIn>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://assets.zyrosite.com/YX4x0rj3WLFkzV0X/yellow-red-and-blue-modern-sunday-service-instagram-post-ECMn8fI5PCiqvUCl.gif"
              alt="The Power & Value of a Family"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn direction="up">
          <div className="prose prose-lg md:prose-xl prose-headings:font-display prose-headings:text-secondary prose-p:text-muted-foreground prose-a:text-primary max-w-none">
            <p className="lead text-2xl text-secondary font-medium mb-10">
              Family is one of God's most powerful and intentional systems for shaping humanity. Before governments, institutions, churches, or communities existed, family was established as the primary environment where life is nurtured, identity is formed, values are transmitted, and purpose is cultivated.
            </p>

            <p>
              Family is not merely a social arrangement or biological connection—it is a divine framework designed for development, continuity, and transformation.
            </p>

            <p>
              At its core, family is the place where people grow from one level to another: from infancy to childhood, from adolescence to maturity, and from dependency to responsibility. It is within family that character is refined, belief systems are formed, and individuals are prepared to function effectively in the wider society. When families are healthy, communities thrive. When families are broken or misaligned, communities experience instability.
            </p>

            <p>
              Today we will explore the power and value of family from a biblical and practical perspective. We will examine family as God's tool for lineage, leadership, and community influence, as well as the distinct roles of fathers, mothers, and children. Ultimately, we will see that lasting transformation in society begins not in public policy or social programs, but within the structure of the family.
            </p>

            <h2>Family as an Environment of Development and Transformation</h2>
            <p>
              A family is an environment intentionally designed for development and transformation. Just as a seed requires the right soil, water, and sunlight to grow, human beings require a nurturing environment where they can mature holistically—spiritually, emotionally, mentally, and socially. Family provides this environment.
            </p>

            <p>
              Growth within a family is progressive. It involves movement from one stage to another, such as the physical changes of puberty, the emotional growth that comes with responsibility, and the spiritual maturity that develops through guidance and example. Transformation is not instant; it is cultivated over time through teaching, correction, affirmation, and modeling.
            </p>

            <p>
              In Scripture, family is consistently portrayed as a place where instruction and identity are formed. Beliefs are not only taught verbally but demonstrated through daily living. Children observe how parents handle conflict, finances, faith, relationships, and adversity. These observations quietly but powerfully shape how they will later function in the world.
            </p>

            <p>
              Because of this, family is not neutral. It is either intentionally shaping individuals toward purpose and stability or unintentionally producing confusion and dysfunction. God's design is that families become centers of transformation—places where individuals are equipped to contribute positively to society.
            </p>

            <h2>The Meaning of Family: Dwelling, Home, and Lineage</h2>
            <p>
              Biblical language offers deep insight into the concept of family. The term <em>Oikos</em> refers to a dwelling, house, or home. It goes beyond a physical structure to describe a living environment—a shared life under one covering. An oikos is where daily life unfolds, where relationships are built, and where values are reinforced.
            </p>

            <p>
              Another important concept is <em>Bayity</em>, which speaks of lineage—people connected to a common source. This highlights that family is not only about who lives together, but also about heritage, inheritance, and continuity. Families carry histories, stories, traits, and callings that flow from one generation to the next.
            </p>

            <p>
              Lineage explains why certain strengths, weaknesses, talents, and tendencies often appear repeatedly within families. These can be natural, emotional, spiritual, or even vocational traits. God is fully aware of this generational reality and works intentionally through it.
            </p>

            <p>
              The family, therefore, is God's chosen system for continuity on the earth. It is how identity is passed down, how legacy is preserved, and how purpose is sustained across generations.
            </p>

            <h2>God's Sovereignty in Lineage and Identity</h2>
            <p>
              God's sovereignty is clearly seen in how He works through family lines to fulfill His purposes across generations. The family unit is His ordained channel for transmitting faith, values, and calling. No family line is an accident. God is deliberate in every lineage He establishes, and He works through ordinary families to accomplish extraordinary purposes.
            </p>

            <p>
              Understanding this truth changes how we view our own families. Rather than seeing family struggles as mere social problems, we begin to see them as spiritual opportunities—places where God's redemptive work can take root and transform generations to come.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <h4 className="font-display font-bold text-xl text-secondary">Share this message</h4>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
