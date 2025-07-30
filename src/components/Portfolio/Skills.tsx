import { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Wrench, 
  Palette, 
  Cloud,
  GitBranch,
  Terminal,
  Smartphone,
  Settings,
  Zap,
  Brain
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    // Large cards
    { 
      name: 'React & Next.js', 
      icon: Code2, 
      size: 'large',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Modern frontend frameworks'
    },
    { 
      name: 'TypeScript', 
      icon: Terminal, 
      size: 'large',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Type-safe development'
    },
    
    // Medium cards
    { 
      name: 'Node.js', 
      icon: Settings, 
      size: 'medium',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Backend development'
    },
    { 
      name: 'PostgreSQL', 
      icon: Database, 
      size: 'medium',
      gradient: 'from-indigo-500 to-blue-500',
      description: 'Database management'
    },
    { 
      name: 'AWS Cloud', 
      icon: Cloud, 
      size: 'medium',
      gradient: 'from-orange-500 to-red-500',
      description: 'Cloud infrastructure'
    },
    { 
      name: 'Git & GitHub', 
      icon: GitBranch, 
      size: 'medium',
      gradient: 'from-gray-600 to-gray-800',
      description: 'Version control'
    },

    // Small cards
    { 
      name: 'JavaScript', 
      icon: Zap, 
      size: 'small',
      gradient: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Python', 
      icon: Code2, 
      size: 'small',
      gradient: 'from-green-400 to-blue-500'
    },
    { 
      name: 'Docker', 
      icon: Settings, 
      size: 'small',
      gradient: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'Figma', 
      icon: Palette, 
      size: 'small',
      gradient: 'from-pink-500 to-violet-500'
    },
    { 
      name: 'Mobile Dev', 
      icon: Smartphone, 
      size: 'small',
      gradient: 'from-teal-500 to-green-500'
    },
    { 
      name: 'AI/ML', 
      icon: Brain, 
      size: 'small',
      gradient: 'from-violet-600 to-purple-600'
    }
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
    const sizeClasses = {
      large: 'col-span-2 row-span-2 p-8',
      medium: 'col-span-1 row-span-2 p-6',
      small: 'col-span-1 row-span-1 p-4'
    };

    const iconSizes = {
      large: 48,
      medium: 32,
      small: 24
    };

    return (
      <div
        className={`relative group overflow-hidden rounded-2xl bg-card border border-border/50 
          hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-glow
          ${sizeClasses[skill.size]} animate-fade-in`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-5 
          group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.gradient} 
          shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
          <skill.icon 
            size={iconSizes[skill.size]} 
            className="text-white"
          />
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className={`font-bold text-foreground group-hover:text-accent transition-colors duration-300
            ${skill.size === 'large' ? 'text-xl' : skill.size === 'medium' ? 'text-lg' : 'text-base'}`}>
            {skill.name}
          </h3>
          
          {skill.description && (
            <p className="text-muted-foreground text-sm mt-2 opacity-0 group-hover:opacity-100 
              transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {skill.description}
            </p>
          )}
        </div>

        {/* Hover glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} 
          opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building modern digital experiences
            </p>
          </div>

          {/* Skills masonry grid */}
          <div className="grid grid-cols-4 gap-6 auto-rows-[120px]">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Always learning and adapting to new technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;