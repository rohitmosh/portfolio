const Skills = () => {
  const skillGroups = [
    {
      category: 'Languages',
      description: 'Foundational syntax and compilers used for high-level scripting and systems programming.',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C']
    },
    {
      category: 'Frontend Architecture',
      description: 'Building fast, accessible interfaces with robust state structures and clean CSS systems.',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5 / CSS3', 'shadcn/ui', 'Vite']
    },
    {
      category: 'Backend & APIs',
      description: 'Designing data-transfer routes, secure sessions, and scalable endpoint networks.',
      skills: ['Node.js', 'Express', 'FastAPI', 'RESTful APIs', 'JWT Auth']
    },
    {
      category: 'Databases & Storage',
      description: 'Modeling relational schemas, optimizing query execution, and managing dynamic cloud tables.',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'SQL Queries']
    },
    {
      category: 'AI & Intelligence',
      description: 'Integrating client-side inference pipelines and configuring large-language model pipelines.',
      skills: ['Transformers.js', 'OpenAI API', 'Gemini API', 'Prompt Design']
    },
    {
      category: 'Developer Workflows',
      description: 'Managing source versioning, local virtualization, and production cloud pipelines.',
      skills: ['Git / GitHub', 'Docker', 'Linux CLI', 'Figma', 'VS Code', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-36 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Label */}
        <span className="section-label text-indigo-400 font-semibold tracking-wider">// stack metrics</span>

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Skills & Competency
          </h2>
          <p className="text-zinc-400 text-base mt-3 md:mt-0 max-w-md font-light leading-relaxed">
            Focusing on architectural strength, system efficiency, and modern design patterns.
          </p>
        </div>

        {/* Skills Tag Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {skillGroups.map((group, index) => (
            <div 
              key={group.category} 
              className="space-y-6 reveal-on-scroll"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div>
                <h3 className="text-lg font-bold tracking-tight text-zinc-100">
                  {group.category}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 mt-2 leading-relaxed font-light">
                  {group.description}
                </p>
              </div>

              {/* Flex Tags */}
              <div className="flex flex-wrap gap-3 pt-1">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="tag font-mono text-xs py-2 px-4 font-semibold hover:border-indigo-500/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;