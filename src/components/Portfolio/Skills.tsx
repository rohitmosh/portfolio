const Skills = () => {
  const skillGroups = [
    {
      category: 'Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C']
    },
    {
      category: 'Frontend Architecture',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5 / CSS3', 'shadcn/ui', 'Vite']
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Express', 'FastAPI', 'RESTful APIs', 'JWT Auth']
    },
    {
      category: 'Databases & Storage',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'SQL Queries']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Teamwork', 'Management', 'Adaptability']
    },
    {
      category: 'Developer Workflows',
      skills: ['Git / GitHub', 'Docker', 'Linux CLI', 'Figma', 'VS Code', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-36 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Label */}
        <span className="section-label text-indigo-400 text-base md:text-xl font-semibold tracking-wider">// skill board</span>

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
                <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                  {group.category}
                </h3>
              </div>

              {/* Flex Tags (Scaled up to text-base and larger padding) */}
              <div className="flex flex-wrap gap-3.5 pt-1">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="tag font-mono text-base py-3 px-6 rounded-xl font-semibold hover:border-indigo-400 hover:text-zinc-100 transition-all duration-300"
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