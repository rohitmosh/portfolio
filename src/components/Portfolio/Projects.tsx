import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {

  const projects = [
    {
      title: 'FindIt - Lost and Found App',
      description: 'A community-powered lost-and-found platform that reconnects people with their items using live interactive maps, smart matching, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Supabase', 'Google Maps', 'Tailwind CSS'],
      category: 'Full Stack',
      demoUrl: 'https://findit-connect.vercel.app/',
      githubUrl: 'https://github.com/rohitmosh/lost-found-locale-connect',
    },
    {
      title: 'NutriTrack - Complete Health Platform',
      description: 'A comprehensive health management system with AI-powered personalized diet planning, BMI tracking, and appointment scheduling for healthcare professionals.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MySQL', 'JWT', 'Tailwind CSS'],
      category: 'Full Stack',
      demoUrl: 'https://nutritrack-app-pi.vercel.app/',
      githubUrl: 'https://github.com/rohitmosh/diet-nutrition-app',
    },
    {
      title: 'MoodyTunes - AI Music Generator',
      description: 'Revolutionary AI-powered mood music generator that analyzes emotions through voice and facial expressions to create personalized playlists.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'AI/ML', 'shadcn/ui', 'Vite'],
      category: 'AI/Full Stack',
      demoUrl: '#',
      githubUrl: 'https://github.com/rohitmosh/vibe-sync-generator',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and experience in various technologies
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card-glow group animate-fade-in-up flex flex-col h-full`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Action buttons at top */}
                <div className="flex gap-3 justify-center mb-4">
                  {project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Repository
                  </a>
                </div>

                {/* Project image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Project content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/rohitmosh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-hero"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;