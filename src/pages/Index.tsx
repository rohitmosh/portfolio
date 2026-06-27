import { useEffect } from 'react';
import Header from '@/components/Portfolio/Header';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Skills from '@/components/Portfolio/Skills';
import Projects from '@/components/Portfolio/Projects';
import Experience from '@/components/Portfolio/Experience';
import Contact from '@/components/Portfolio/Contact';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  // Intersection Observer for Scroll Reveals
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  // Scroll Progress Indicator Fallback (e.g. for Firefox)
  useEffect(() => {
    const progressElement = document.querySelector('.scroll-progress') as HTMLElement;
    if (!progressElement) return;

    const handleScroll = () => {
      if (window.CSS && window.CSS.supports && window.CSS.supports('animation-timeline', 'scroll()')) {
        // Browser supports native CSS scroll-driven animations, skip JS fallback
        return;
      }
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = window.scrollY;
      const percentage = scrolled / scrollable;
      progressElement.style.transform = `scaleX(${percentage})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative text-zinc-100 overflow-x-hidden">
      {/* Scroll Progress Line */}
      <div className="scroll-progress" aria-hidden="true" />

      {/* Subtle Dot Grid Background */}
      <div className="dot-grid fixed inset-0 z-[-1] pointer-events-none" />

      {/* Navigation & Layout Sections */}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
