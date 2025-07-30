import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2025 Rohit Mohanty. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start mt-1">
                Made with <Heart className="text-red-500 mx-1 animate-pulse" size={16} /> lots of coffee.
              </p>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="bg-accent hover:bg-accent-glow text-accent-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;