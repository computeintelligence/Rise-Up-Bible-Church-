import { Link } from "wouter";
import { FadeIn } from "@/components/fade-in";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <FadeIn className="text-center">
        <h1 className="text-9xl font-display font-extrabold text-primary/20 mb-4 relative">
          404
          <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-secondary">
            Page Not Found
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-[28px] bg-primary text-white font-bold hover:bg-primary/90 hover:shadow-lg transition-all"
        >
          <ArrowLeft size={20} />
          Return Home
        </Link>
      </FadeIn>
    </div>
  );
}
