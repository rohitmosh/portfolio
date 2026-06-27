import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-20">
      {/* Dynamic top gradient line for modern finish */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl z-10">
        <div className="max-w-4xl space-y-10 animate-fade-up">


          {/* Heading block */}
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-zinc-100 leading-[0.9]">
              Rohit Mohanty
            </h1>
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-indigo-300 font-mono">
              Software Dev
            </p>
          </div>

          {/* Editorial Tagline */}
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl font-light">
            I build software that prioritizes performance, usability, and thoughtful engineering. I enjoy system design, web dev, and product engineering.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-ghost border border-zinc-800 hover:border-zinc-700"
            >
              Get in Touch
            </button>
          </div>

          {/* Minimal Social & Contact Links */}
          <div className="flex items-center gap-6 pt-10 border-t border-zinc-900 max-w-lg">
            <a
              href="https://github.com/rohitmosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-indigo-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitmohanty9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-indigo-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rohitm6002@gmail.com"
              className="text-zinc-500 hover:text-indigo-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Down arrow link positioned lower-right */}
      <div className="absolute bottom-12 right-8 md:right-16 hidden sm:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button
          onClick={() => scrollToSection('#about')}
          className="text-zinc-500 hover:text-indigo-400 hover:border-indigo-500/30 p-3 rounded-full border border-zinc-900 transition-all duration-500"
          aria-label="Scroll down"
        >
          <ArrowDown size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;