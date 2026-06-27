import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-zinc-900 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Column: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm font-mono text-zinc-500">
              © {new Date().getFullYear()} Rohit Mohanty.
            </p>
          </div>

          {/* Right Column: Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 px-4.5 py-2.5 rounded-lg border border-zinc-850 hover:border-indigo-500/40 hover:text-indigo-300 text-zinc-400 font-mono text-xs transition-all duration-300 active:scale-95 hover:bg-indigo-500/5 font-semibold"
            aria-label="Back to top"
          >
            BACK TO TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;