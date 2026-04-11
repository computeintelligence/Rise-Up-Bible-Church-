import { Link } from "wouter";
import { Clock, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  readTime: string;
  href: string;
  imageSrc: string;
}

export function BlogCard({ title, subtitle, author, date, readTime, href, imageSrc }: BlogCardProps) {
  return (
    <Link href={href} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent z-10 transition-colors duration-300"></div>
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-primary" />
            {author}
          </span>
          <span className="w-1 h-1 rounded-full bg-border"></span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-primary" />
            {date} &bull; {readTime}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold font-display text-secondary mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {subtitle}
          </p>
        )}
        
        <div className="mt-auto pt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
          Read Article <ArrowRight size={18} className="ml-1" />
        </div>
      </div>
    </Link>
  );
}
