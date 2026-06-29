import { Github, ExternalLink, Code, Lock, ShieldCheck } from 'lucide-react';

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
      title: 'EduSecure',
      subtitle: 'Cryptographically Secure Exam Paper Management',
      description: 'A production-ready, multi-role exam security platform with chaotic pixel scrambling and time-locked encryption, designed to enforce absolute confidentiality and tamper-proof tracking of digital exam papers.',
      category: 'Cryptography / Cyber Security',
      technologies: ['Python', 'Flask', 'Arnold Cat Map', 'RSA-2048', 'AES-256', 'MySQL', 'Audit Trail'],
      demoUrl: '#',
      githubUrl: 'https://github.com/rohitmosh/edusecure',
      challenge: 'Ensuring absolute confidentiality and tamper-proof tracking of digital exam papers prior to release times.',
      solution: 'Designed a triple-layer scrambling system with Logistic Map + Arnold Cat Map + Fisher-Yates algorithms, RSA-2048 + AES-256 hybrid encryption, and tamper-proof hash-chained audit logging.',
      outcome: 'Delivered real-time paper distribution, center-specific access control with dual-confirmation security, and Paillier homomorphic encryption for privacy-preserving analytics.',
      mockupType: 'crypto',
      mockupContent: {
        gridCells: Array.from({ length: 64 }).map((_, i) => {
          // Generate randomized chaotic colors to represent Arnold Cat Map pixel scrambling
          const colors = [
            'bg-indigo-500', 'bg-purple-600', 'bg-violet-700', 'bg-pink-500', 
            'bg-rose-500', 'bg-emerald-500', 'bg-cyan-500', 'bg-zinc-800'
          ];
          return colors[Math.floor(Math.random() * colors.length)];
        })
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
    }
  ];

  // Modified buttons with whitespace-nowrap and optimized padding to prevent wrapping
  const buttonStyle = "inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono whitespace-nowrap hover:bg-indigo-500/20 hover:border-indigo-400 hover:text-indigo-100 hover:shadow-[0_0_15px_rgba(99,102,241,0.22)] transition-all duration-300 active:scale-95 font-semibold";

  return (
    <section id="projects" className="py-36 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Label */}
        <span className="section-label text-center md:text-left text-indigo-400 text-base md:text-xl font-semibold tracking-wider">// work showcase</span>

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
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyle}
                    >
                      <Github size={16} /> REPOSITORY
                    </a>
                    {project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonStyle}
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

                      {/* Cryptography Mockup - Colorful Scrambling Matrices */}
                      {project.mockupType === 'crypto' && (
                        <div className="w-full h-full relative z-10 flex flex-col justify-between border border-zinc-800/80 rounded-lg bg-zinc-900/30 p-6">
                          <div className="text-[11px] text-zinc-400 flex justify-between items-center font-semibold">
                            <span>CRYPTOGRAPHIC SECURITY PLATFORM</span>
                            <span className="flex items-center gap-1.5 text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded text-[9px] font-bold">
                              <Lock size={10} /> TIME-LOCKED
                            </span>
                          </div>

                          <div className="grid grid-cols-12 gap-4 my-auto items-center pt-2">
                            {/* Arnold Cat Map pixel scrambling mockup (span 7) */}
                            <div className="col-span-7 space-y-2">
                              <p className="text-[9px] text-zinc-500 font-mono">ARNOLD_CAT_MAP_SCRAMBLING_STATE:</p>
                              <div className="grid grid-cols-8 gap-0.5 p-1 bg-zinc-950 border border-zinc-800/80 rounded-md overflow-hidden w-full aspect-square">
                                {project.mockupContent.gridCells?.map((cellColor, i) => (
                                  <div key={i} className={`w-full h-full rounded-[1px] ${cellColor} transition-colors duration-1000`} />
                                ))}
                              </div>
                            </div>

                            {/* Verification Keys & Status (span 5) */}
                            <div className="col-span-5 space-y-3">
                              <div className="p-2.5 rounded bg-zinc-950 border border-zinc-900 space-y-1.5">
                                <p className="text-[8px] text-zinc-500">AUTHORITY CONFIRMED:</p>
                                <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-bold">
                                  <ShieldCheck size={12} /> ADMIN_KEY
                                </div>
                                <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-bold">
                                  <ShieldCheck size={12} /> REGISTRAR_KEY
                                </div>
                              </div>

                              <div className="p-2.5 rounded bg-zinc-950 border border-zinc-900 space-y-1.5">
                                <p className="text-[8px] text-zinc-500">CIPHER METRIC:</p>
                                <p className="text-[9px] text-indigo-400 font-bold">RSA-2048 + AES-256</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[9px] text-zinc-500 pt-3 border-t border-zinc-900">
                            <span>DECRYPTION ACCESS STATE: <strong className="text-emerald-400">PENDING TIMELOCK</strong></span>
                            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse" />
                          </div>
                        </div>
                      )}

                      {/* Chart Mockup - Colorful Gradient Bars */}
                      {project.mockupType === 'chart' && (
                        <div className="w-full h-full relative z-10 flex flex-col justify-between border border-zinc-800/80 rounded-lg bg-zinc-900/30 p-6">
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

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Archive Link (Large Glowing Accent Button) */}
        <div className="text-center mt-36 reveal-on-scroll">
          <p className="text-zinc-500 text-sm font-mono mb-6">
            Curious about other experiments and side projects?
          </p>
          <a
            href="https://github.com/rohitmosh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-base font-mono hover:bg-indigo-500/20 hover:border-indigo-400 hover:text-indigo-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300 active:scale-95 font-semibold"
          >
            <Code size={18} /> VIEW FULL ARCHIVE ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;