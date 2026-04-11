import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="overflow-hidden rounded-lg shadow-sm border border-border/50">
                <img
                  src={`${import.meta.env.BASE_URL}logo.jpg`}
                  alt="Rise-Up Bible Church Logo"
                  className="w-12 h-12 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-secondary">
                  Rise-Up
                </span>
                <span className="font-sans text-xs tracking-widest text-primary font-medium">
                  BIBLE CHURCH
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/about"
                className="px-6 py-2.5 rounded-[28px] bg-primary text-white font-medium hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Join Us
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-xl font-bold border-b border-border pb-4 ${
                  location === link.href ? "text-primary" : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="mt-4 px-8 py-4 text-center rounded-[28px] bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all"
            >
              Join Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-1 rounded-lg">
                  <img
                    src={`${import.meta.env.BASE_URL}logo.jpg`}
                    alt="Rise-Up Bible Church Logo"
                    className="w-10 h-10 object-cover rounded"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Rise-Up
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Raising the Lord's Army for the End-Time Harvest. Connecting and
                equipping believers for the effective work of ministry.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100066479535576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight
                        size={16}
                        className="text-primary group-hover:translate-x-1 transition-transform"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-white">
                Contact Info
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <span>Ob63 St, Osizweni A,<br />Newcastle, 2952</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary shrink-0" size={20} />
                  <span>076-255-0626</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary shrink-0" size={20} />
                  <span>admin@rubcosizweni.org</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-white">
                Newsletter
              </h4>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates on our latest events and sermons.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing!");
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-[28px] bg-primary text-white font-medium hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Rise-Up Bible Church. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
