import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C', level: 70 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'MySQL', level: 70 },
        { name: 'Vercel', level: 65 },
      ],
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Adobe PS', level: 85 },
        { name: 'Linux', level: 75 },
        { name: 'PyCharm', level: 70 },
      ],
    },
  ];

  const ProgressBar = ({ skill, delay = 0 }: { skill: { name: string; level: number }; delay?: number }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setProgress(skill.level);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, delay]);

    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-foreground font-medium">{skill.name}</span>
        </div>
        <div className="progress-glow">
          <div
            className="progress-fill transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="card-glow">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/20 p-3 rounded-lg mr-4">
                    <category.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'Project Management',
                'Team Collaboration',
                'UI/UX Design',
                'Graphic Design',
                'Problem Solving',
              ].map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 bg-secondary hover:bg-accent hover:text-accent-foreground 
                    text-secondary-foreground rounded-full text-sm transition-all duration-300 
                    hover:scale-105 cursor-default animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;