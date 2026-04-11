import { FadeIn } from "@/components/fade-in";
import { Calendar, Clock, MapPin } from "lucide-react";

export function Events() {
  const events = [
    {
      title: "Sunday Worship Service",
      day: "Every Sunday",
      time: "09:00 AM",
      desc: "Join us for our weekly worship service filled with vibrant praise, powerful preaching, and wonderful fellowship.",
      type: "Service",
    },
    {
      title: "Mid-Week Bible Study",
      day: "Every Wednesday",
      time: "18:00 PM",
      desc: "Deepen your understanding of the Word in an interactive teaching environment where questions are welcomed.",
      type: "Teaching",
    },
    {
      title: "Youth Empowerment Meeting",
      day: "Every Friday",
      time: "17:00 PM",
      desc: "A safe space for the next generation to connect, grow, and learn to navigate life through a biblical lens.",
      type: "Youth",
    },
    {
      title: "Corporate Prayer Meeting",
      day: "Every Saturday",
      time: "08:00 AM",
      desc: "Come together as an army of believers to stand in the gap, intercede for our city, and seek God's face.",
      type: "Prayer",
    },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-secondary py-20 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join us throughout the week as we gather to worship, learn, and grow together.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((evt, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col sm:flex-row">
                  
                  <div className="bg-primary/5 sm:w-1/3 p-8 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary opacity-0 hover:opacity-5 transition-opacity duration-300"></div>
                    <Calendar className="text-primary mb-3" size={32} />
                    <span className="font-bold text-secondary mb-1">{evt.day}</span>
                    <span className="text-primary font-medium">{evt.time}</span>
                  </div>
                  
                  <div className="p-8 sm:w-2/3 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-muted-foreground w-max mb-4">
                      {evt.type}
                    </div>
                    <h3 className="text-2xl font-bold font-display text-secondary mb-3">{evt.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{evt.desc}</p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                      <MapPin size={16} className="text-primary" />
                      Main Sanctuary
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.4} className="mt-20">
            <div className="bg-secondary rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              <h3 className="text-3xl font-display font-bold text-white mb-4 relative z-10">Looking for special events?</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 relative z-10">
                Subscribe to our newsletter to receive notifications about guest speakers, conferences, and special holiday services.
              </p>
              <button className="px-8 py-4 rounded-[28px] bg-primary text-white font-bold hover:bg-white hover:text-primary transition-all duration-300 relative z-10">
                Join Mailing List
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
