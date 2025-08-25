import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Computer Science Student',
    'Web Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentFullText = texts[textIndex];
    
    if (charIndex < currentFullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((textIndex + 1) % texts.length);
        setCurrentText('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-glow opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/30 rounded-full blur-3xl animate-glow animate-delay-300"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-accent text-lg mb-4 animate-fade-in-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animate-delay-100">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Rohit Mohanty
            </span>
          </h1>

          {/* Animated role */}
          <div className="h-16 mb-8 animate-fade-in-up animate-delay-200">
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              <span className="typing">{currentText}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animate-delay-300">
            Passionate about GenAI, Problem Solving, and Graphic Design.
            Currently pursuing my degree in Computer & Communication Engineering with a focus on Web Development.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-delay-400">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-hero"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow"
            >
              Get In Touch
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animate-delay-500">
            <a
              href="https://github.com/rohitmosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitmohanty9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rohitm6002@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-accent hover:text-accent-glow transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;