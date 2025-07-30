import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Wrench, Star } from 'lucide-react';

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
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'JavaScript', featured: true },
        { name: 'TypeScript', featured: true },
        { name: 'Python', featured: false },
        { name: 'Java', featured: false },
        { name: 'C++', featured: false },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'React', featured: true },
        { name: 'Next.js', featured: true },
        { name: 'Node.js', featured: false },
        { name: 'HTML/CSS', featured: true },
        { name: 'Tailwind CSS', featured: true },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'PostgreSQL', featured: false },
        { name: 'MongoDB', featured: false },
        { name: 'Git', featured: true },
        { name: 'Docker', featured: false },
        { name: 'AWS', featured: false },
      ],
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'VS Code', featured: true },
        { name: 'Figma', featured: false },
        { name: 'Postman', featured: false },
        { name: 'Linux', featured: false },
        { name: 'Webpack', featured: false },
      ],
    },
  ];

  const SkillTag = ({ skill, delay = 0 }: { skill: { name: string; featured: boolean }; delay?: number }) => {
    return (
      <div
        className={`group relative px-4 py-2 rounded-full border border-border/50 
          bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 
          hover:scale-105 hover:shadow-glow cursor-default animate-fade-in
          ${skill.featured ? 'ring-2 ring-accent/30 bg-accent/10' : ''}`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="flex items-center gap-2">
          {skill.featured && <Star className="w-3 h-3 fill-accent text-accent" />}
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        {skill.featured && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 to-accent-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
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
              <div key={category.title} className="card-glow p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4 shadow-glow`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
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
                'Agile Development',
                'UI/UX Design',
                'API Development',
                'Testing',
                'DevOps',
                'Mobile Development',
                'Data Analysis',
                'Problem Solving',
                'Team Collaboration',
                'Project Management',
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