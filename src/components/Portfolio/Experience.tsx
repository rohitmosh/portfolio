import { Calendar, Award, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "B.Tech in Computer & Communication Engineering",
      company: "Manipal Institute of Technology",
      period: "2023 — 2027 (Expected)",
      description: "Focusing on software engineering, database systems, and human-computer interaction. Actively engaged in developing student community projects and leading technical workshops.",
      type: "education",
      icon: BookOpen,
      highlights: [
        "Core coursework in Data Structures, Algorithms, DBMS, Operating Systems",
        "GPA: 8.8 / 10.0",
        "Technical mentor for junior developers in web development bootcamps"
      ]
    },
    {
      role: "Independent Software Developer & Designer",
      company: "Freelance / Open Source",
      period: "2024 — Present",
      description: "Building production-grade web applications and developer tools with a focus on performance, minimalism, and precise UX design.",
      type: "work",
      icon: Award,
      highlights: [
        "Developed and deployed FindIt, a community lost-and-found portal with real-time sync",
        "Created custom UI components and libraries using Tailwind CSS and TypeScript",
        "Designed promotional branding, assets, and vector layouts for local events"
      ]
    },
    {
      role: "Open Source Contributor & Club Member",
      company: "Technical Student Clubs",
      period: "2024 — 2025",
      description: "Collaborated with cross-functional student teams to construct tools and digital experiences for campus-wide festivals.",
      type: "work",
      icon: Calendar,
      highlights: [
        "Crafted responsive websites viewed by over 5,000 students",
        "Configured robust state management patterns and optimized rendering pipelines",
        "Integrated AI APIs for automated grading and feedback tools"
      ]
    }
  ];

  return (
    <section id="experience" className="py-36 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Label */}
        <span className="section-label text-indigo-400 text-base md:text-xl font-semibold tracking-wider">// career path</span>

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Education & Experience
          </h2>

        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-zinc-850 ml-6 md:ml-8 pl-10 md:pl-12 space-y-20 py-4">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="relative group transition-opacity duration-300 hover:opacity-100 reveal-on-scroll"
              >
                {/* Timeline Node Icon wrapper */}
                <span className="absolute -left-[57px] md:-left-[65px] top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 group-hover:border-indigo-500/40 group-hover:text-indigo-300 transition-all duration-300 shadow-md">
                  <Icon size={16} />
                </span>

                {/* Content */}
                <div className="grid md:grid-cols-4 gap-8">
                  {/* Period column */}
                  <div className="md:col-span-1">
                    <p className="text-base font-mono text-zinc-500 pt-1 tracking-tight font-medium">
                      {exp.period}
                    </p>
                  </div>

                  {/* Body column */}
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-base text-zinc-400 font-medium">
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl font-light">
                      {exp.description}
                    </p>

                    {/* Highlights list */}
                    <ul className="space-y-2 pt-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-zinc-400 flex items-start leading-relaxed">
                          <span className="text-indigo-400/80 mr-3 select-none">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
