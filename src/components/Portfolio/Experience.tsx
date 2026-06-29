import { Calendar, Award, BookOpen, Briefcase, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "B.Tech in Computer & Communication Engineering",
      company: "Manipal Institute of Technology",
      period: "2023 — 2027",
      description: "Focusing on software engineering, database systems, and human-computer interaction. Actively engaged in developing student community projects and leading technical workshops.",
      type: "education",
      tag: "Education",
      icon: BookOpen,
      highlights: [
        "Core coursework in Data Structures, Algorithms, DBMS, Operating Systems",
        "Technical mentor for junior developers in web dev bootcamps",
      ]
    },
    {
      role: "Organizing Committee",
      company: "Revels 2025 (Flagship Cultural Festival)",
      period: "2025",
      description: "Managed logistics and operations for a 3-day cultural festival hosting 3,000+ attendees and 15+ events across multiple venues.",
      type: "management",
      tag: "Management & Logistics",
      icon: Users,
      highlights: [
        "Coordinated logistics with 40+ vendors and 100+ volunteers for seamless resource allocation",
        "Led a 12-member logistics team, maintaining 95%+ on-time starts and reducing event transition times by 25%",
        "Designed and implemented operational workflows optimizing manpower deployment to minimize peak-hour downtime"
      ]
    },
    {
      role: "Core Committee",
      company: "TechTatva 2025 (Flagship Technical Festival)",
      period: "2025",
      description: "Directed the design and execution of interactive physical installations and thematic experiences for 3,000+ attendees.",
      type: "management",
      tag: "Leadership & Operations",
      icon: Users,
      highlights: [
        "Led a 20-member multidisciplinary design team from concept development to fabrication and execution",
        "Directed the fabrication and setup of 25+ large-scale 3D models, sculptures, and murals",
        "Managed material planning and resource allocation for 30+ installations, reducing wastage by 15%"
      ]
    },
    {
      role: "Independent Software Developer & Designer",
      company: "Freelance",
      period: "2024 — 2025",
      description: "Building production-grade web applications and developer tools with a focus on performance, minimalism, and precise UX design.",
      type: "work",
      tag: "Software & Design",
      icon: Award,
      highlights: [
        "Developed and deployed FindIt, a community lost-and-found portal with real-time sync",
        "Created custom UI components and libraries using Tailwind CSS and TypeScript",
        "Designed promotional branding, assets, and vector layouts for local events"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Odisha Hydro Power Corporation (OHPC)",
      period: "2026",
      description: "Modernized IT asset governance and secured document management systems for a state power utility serving 10+ offices and 8 hydro stations.",
      type: "work",
      tag: "Software Engineering",
      icon: Briefcase,
      highlights: [
        "Built 'AssetOne' EAMS with a SHA-256 chained audit trail and HMAC verification, reducing manual audit prep time by 45%",
        "Architected 'DocShield' DMS using AES-256-CBC, RSA-4096, and FastAPI, achieving secure sub-150ms document retrieval",
        "Developed spreadsheet-style React 19 interfaces to manage 5,000+ asset records, reducing registration time by 60%",
        "Containerized stack with Docker for 99.9% deployment reliability and optimized PostgreSQL query performance"
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
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1.5">
                        <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 leading-snug">
                          {exp.role}
                        </h3>
                        {exp.tag && (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${exp.type === 'education'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : exp.type === 'work'
                              ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}>
                            {exp.tag}
                          </span>
                        )}
                      </div>
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
