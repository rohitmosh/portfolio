import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FindIt',
      subtitle: 'Lost & Found Locale Connect',
      description: 'A community lost-and-found engine that reconnects people with their misplaced belongings using live interactive maps, geo-spatial query matching, and real-time pub/sub notifications.',
      category: 'Full Stack / Geo-Spatial',
      technologies: ['React', 'TypeScript', 'Supabase', 'PostGIS', 'Google Maps API', 'Tailwind'],
      demoUrl: 'https://findit-connect.vercel.app/',
      githubUrl: 'https://github.com/rohitmosh/lost-found-locale-connect',
      challenge: 'Calculating item matches across changing user coordinates without causing server bottleneck.',
      solution: 'Moved proximity matching logic entirely database-side utilizing Postgres PostGIS index operations, querying bounding boxes rather than calculating absolute distances in memory.',
      outcome: 'Decreased match query latency from 800ms to 45ms, supporting real-time notifications on mobile browsers.',
      mockupType: 'map',
      mockupContent: {
        points: [
          { label: 'Lost Wallet', dist: '12m away', x: '40%', y: '35%', color: 'bg-rose-500', glow: 'shadow-[0_0_12px_rgba(244,63,94,0.8)]' },
          { label: 'Found Keys', dist: '110m away', x: '65%', y: '60%', color: 'bg-emerald-500', glow: 'shadow-[0_0_12px_rgba(16,185,129,0.8)]' },
          { label: 'Lost Phone', dist: '50m away', x: '25%', y: '75%', color: 'bg-amber-500', glow: 'shadow-[0_0_12px_rgba(245,158,11,0.8)]' },
        ]
      }
    },
    {
      title: 'NutriTrack',
      subtitle: 'Clinical Health Platform',
      description: 'A patient management application offering automated nutritional diet logs, BMI progression metrics, and digital appointment scheduling workflows for clinical healthcare practitioners.',
      category: 'Backend / Database Systems',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT Auth', 'Tailwind'],
      demoUrl: 'https://nutritrack-app-pi.vercel.app/',
      githubUrl: 'https://github.com/rohitmosh/diet-nutrition-app',
      challenge: 'Managing highly relational tables containing user credentials, medical indicators, and meal schedules.',
      solution: 'Engineered a highly normalized MySQL schema utilizing third normal form rules, foreign key triggers, and prepared statements to eliminate transactional anomalies.',
      outcome: 'Secured patient logs with custom JWT authentication and realized consistent sub-100ms database reads.',
      mockupType: 'chart',
      mockupContent: {
        bars: [
          { label: 'Carbs', val: '65%', gradient: 'from-blue-600 via-indigo-500 to-cyan-400' },
          { label: 'Protein', val: '80%', gradient: 'from-indigo-600 via-purple-500 to-pink-500' },
          { label: 'Fats', val: '45%', gradient: 'from-amber-500 via-orange-500 to-red-500' },
          { label: 'Kcal', val: '90%', gradient: 'from-emerald-500 via-teal-500 to-cyan-400' },
        ]
      }
    },
    {
      title: 'MoodyTunes',
      subtitle: 'Facial Emotion Playlist Engine',
      description: 'An intelligent playlist generation utility that scans voice inflection and facial indicators using client-side AI modules, compiling curated playlists suited to the user\'s state.',
      category: 'AI / Client-side Engineering',
      technologies: ['React', 'TypeScript', 'Transformers.js', 'WebAudio API', 'shadcn/ui', 'Vite'],
      demoUrl: '#',
      githubUrl: 'https://github.com/rohitmosh/vibe-sync-generator',
      challenge: 'Performing multi-modal sentiment evaluation locally on under-powered mobile hardware.',
      solution: 'Configured quantized ONNX models leveraging web workers for multi-threaded inference, caching weights inside local IndexedDB directories to guarantee instant offline execution.',
      outcome: 'Achieved sentiment recognition and audio playlist matching within 120ms of capturing voice/facial data.',
      mockupType: 'music',
      mockupContent: {
        songs: [
          { title: 'Ambient Waves', artist: 'Focus State', mood: 'Calm 94%', color: 'from-teal-400 to-emerald-500' },
          { title: 'Synthetic Horizon', artist: 'Cyber Drift', mood: 'Energy 88%', color: 'from-indigo-500 to-purple-600' },
          { title: 'Ethereal Forest', artist: 'Organic Flow', mood: 'Relaxed 91%', color: 'from-pink-500 to-rose-600' },
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-36 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Label */}
        <span className="section-label text-center md:text-left text-indigo-400 font-semibold tracking-wider">// work showcase</span>

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-base mt-3 md:mt-0 max-w-md font-light leading-relaxed">
            Showcasing clean architectures, robust database models, and optimized execution pipelines.
          </p>
        </div>

        {/* Alternating Projects List */}
        <div className="space-y-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.title}
                className="grid md:grid-cols-12 gap-10 md:gap-16 items-center reveal-on-scroll"
              >
                {/* 1. Project Info */}
                <div className={`md:col-span-5 space-y-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-indigo-400/80 font-bold uppercase tracking-widest">
                      {project.category}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-mono tracking-tight font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-zinc-300 text-base leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Engineering Deep Dive */}
                  <div className="border-l-2 border-indigo-500/40 pl-6 space-y-3 py-2 bg-zinc-900/10 rounded-r-lg">
                    <p className="text-sm text-zinc-400 font-mono">
                      <strong className="text-zinc-200">Challenge:</strong> {project.challenge}
                    </p>
                    <p className="text-sm text-zinc-400 font-mono">
                      <strong className="text-zinc-200">Solution:</strong> {project.solution}
                    </p>
                    <p className="text-sm text-indigo-300 font-mono font-medium">
                      <span className="text-zinc-200">Result:</span> {project.outcome}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag text-xs py-1.5 px-4 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-6 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm font-mono text-zinc-400 hover:text-indigo-400 transition-colors duration-300 font-semibold"
                    >
                      <Github size={16} /> REPOSITORY
                    </a>
                    {project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-indigo-400 transition-colors duration-300 font-semibold"
                      >
                        <ExternalLink size={16} /> LIVE DEMO
                      </a>
                    )}
                  </div>
                </div>

                {/* 2. Colorful Interactive CSS Mockup */}
                <div className={`md:col-span-7 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/80 p-1 shadow-2xl overflow-hidden aspect-[16/10] group hover:border-zinc-700 transition-all duration-500">

                    {/* Browser Mockup Header bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-900 text-xs font-mono text-zinc-500">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="bg-zinc-950/90 px-6 py-1 rounded-md text-zinc-400 border border-zinc-900 w-3/5 text-center overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-mono">
                        {project.demoUrl !== '#' ? project.demoUrl.replace('https://', '') : `${project.title.toLowerCase()}.local`}
                      </div>
                      <div className="w-12 text-right">···</div>
                    </div>

                    {/* Browser Content Area (Colorful & High contrast) */}
                    <div className="p-8 h-[calc(100%-43px)] bg-zinc-950 relative overflow-hidden font-mono flex items-center justify-center">

                      {/* Gradient glow background for color presence */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/10 via-zinc-950 to-zinc-950 pointer-events-none" />

                      {/* Map Mockup - Colorful */}
                      {project.mockupType === 'map' && (
                        <div className="w-full h-full relative border border-zinc-800/80 rounded-lg bg-zinc-900/30 p-6 overflow-hidden">
                          {/* Colored map roads representation */}
                          <div className="absolute inset-0 opacity-[0.06] bg-grid-white pointer-events-none" />
                          <div className="absolute h-full w-[2px] bg-indigo-500/10 left-1/3 top-0" />
                          <div className="absolute h-full w-[2px] bg-indigo-500/10 left-2/3 top-0" />
                          <div className="absolute w-full h-[2px] bg-indigo-500/10 top-1/3 left-0" />
                          <div className="absolute w-full h-[2px] bg-indigo-500/10 top-2/3 left-0" />

                          <div className="absolute inset-0 opacity-[0.2] bg-radial-gradient from-indigo-500/20 to-transparent pointer-events-none" />
                          <div className="text-[11px] text-zinc-400 flex justify-between items-center mb-4 font-semibold">
                            <span>GEO_PORTAL // SYNC_ONLINE</span>
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                          </div>

                          {/* Radial search grid lines representation */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-indigo-500/10 border-dashed" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full border border-indigo-500/5 border-dashed" />

                          {/* Render colorful pins */}
                          {project.mockupContent.points?.map((p, i) => (
                            <div
                              key={i}
                              className="absolute bg-zinc-900/95 border border-zinc-800 rounded-lg p-2 text-[10px] flex items-center gap-2.5 transition-all duration-500 group-hover:scale-105"
                              style={{ left: p.x, top: p.y }}
                            >
                              <span className={`h-2.5 w-2.5 rounded-full ${p.color} ${p.glow}`} />
                              <div className="leading-tight">
                                <p className="text-zinc-200 font-bold">{p.label}</p>
                                <p className="text-zinc-500 text-[8px] mt-0.5">{p.dist}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Chart Mockup - Colorful Gradient Bars */}
                      {project.mockupType === 'chart' && (
                        <div className="w-full h-full flex flex-col justify-between border border-zinc-800/80 rounded-lg bg-zinc-900/30 p-6">
                          <div className="text-[11px] text-zinc-400 flex justify-between items-center font-semibold">
                            <span>NUTRITIONAL METRICS LOG</span>
                            <span className="text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded text-[9px]">STATUS: COMPLETED</span>
                          </div>
                          <div className="flex items-end justify-around h-3/5 w-full pt-4">
                            {project.mockupContent.bars?.map((b, i) => (
                              <div key={i} className="flex flex-col items-center gap-3 w-14">
                                <div className="w-full bg-zinc-900/90 border border-zinc-800 rounded-md h-32 relative overflow-hidden flex items-end">
                                  <div
                                    className={`w-full bg-gradient-to-t ${b.gradient} transition-all duration-1000`}
                                    style={{ height: b.val }}
                                  />
                                </div>
                                <span className="text-[10px] text-zinc-400 font-bold">{b.label}</span>
                              </div>
                            ))}
                          </div>
                          <div className="text-[9px] text-zinc-500 flex justify-between border-t border-zinc-900 pt-3">
                            <span>CALORIES REQ: <strong className="text-zinc-300">2,400 kcal</strong></span>
                            <span>COMPLETED: <strong className="text-emerald-400">84%</strong></span>
                          </div>
                        </div>
                      )}

                      {/* Audio Mockup - Colored Album/Mood Art */}
                      {project.mockupType === 'music' && (
                        <div className="w-full h-full flex flex-col justify-between border border-zinc-800/80 rounded-lg bg-zinc-900/30 p-6">
                          <div className="text-[11px] text-zinc-400 flex justify-between items-center font-semibold">
                            <span>FACIAL SENTIMENT // MATRIX_PLAYLIST</span>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold">MODEL: ONNX</span>
                          </div>

                          <div className="space-y-2.5 my-auto pt-3">
                            {project.mockupContent.songs?.map((s, i) => (
                              <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 group-hover:border-zinc-800/80 transition-colors duration-300">
                                <div className="flex items-center gap-3">
                                  {/* Color gradient thumbnail disk placeholder */}
                                  <div className={`h-7 w-7 rounded bg-gradient-to-tr ${s.color} shadow-md flex items-center justify-center text-[10px] text-zinc-950 font-bold`} />
                                  <div className="leading-tight">
                                    <p className="text-zinc-200 font-bold text-[10px]">{s.title}</p>
                                    <p className="text-zinc-500 text-[8px] mt-0.5">{s.artist}</p>
                                  </div>
                                </div>
                                <span className="font-mono text-zinc-300 bg-zinc-900 px-2 py-1 rounded border border-zinc-800 text-[9px] font-bold">{s.mood}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-[9px] text-zinc-400 pt-3 border-t border-zinc-900">
                            <span>SENTIMENT IDENTIFIED: <strong className="text-indigo-400">CALM (92%)</strong></span>
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Archive Link */}
        <div className="text-center mt-36 reveal-on-scroll">
          <p className="text-zinc-500 text-sm font-mono mb-6">
            Curious about auxiliary experiments and modules?
          </p>
          <a
            href="https://github.com/rohitmosh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-3 text-sm font-mono py-3 px-8"
          >
            <Code size={16} /> VIEW FULL ARCHIVE ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;