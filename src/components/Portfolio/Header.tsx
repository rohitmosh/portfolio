import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-550 ${isScrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900/80 py-5'
          : 'bg-transparent py-8'
        }`}
    >
      <nav className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-3xl font-bold tracking-tight text-zinc-100 transition-colors duration-300 hover:text-indigo-400"
        >
          RM<span className="text-indigo-400 font-extrabold">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 text-base font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>

          <span className="h-5 w-[1px] bg-zinc-800" aria-hidden="true" />

          {/* Ghost Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider text-indigo-300 border border-indigo-500/30 px-4.5 py-2.5 rounded-lg hover:border-indigo-400 hover:text-indigo-100 transition-all duration-300 bg-indigo-500/10 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Premium Full-Screen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-x-0 top-[72px] bottom-0 bg-zinc-950/98 backdrop-blur-lg z-40 transition-all duration-500 md:hidden flex flex-col justify-between p-8 border-t border-zinc-900 ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="flex flex-col space-y-8 pt-8">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-3xl font-semibold text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-12px)',
                transitionProperty: 'all'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="border-t border-zinc-900 pt-6 pb-16 flex flex-col space-y-5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-xl font-mono text-base tracking-wider font-semibold"
          >
            VIEW RESUME
          </a>
          <p className="text-zinc-600 text-xs text-center font-mono">
            Designed for digital precision.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;