import { GraduationCap, MapPin, User, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* Left Column: Asymmetric Profile Image (span 5) */}
          <div className="md:col-span-5 flex justify-center md:justify-start reveal-on-scroll">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-xl">
              <img
                src="/profilepic.jpg"
                alt="Rohit Mohanty"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src.includes('.jpg')) {
                    target.src = '/profilepic.png';
                  } else {
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback silhouette if image fails */}
              <div className="hidden absolute inset-0 bg-zinc-900 items-center justify-center">
                <div className="text-center p-6">
                  <User size={36} className="text-zinc-600 mx-auto mb-3" />
                  <p className="text-sm text-zinc-500 font-mono">Profile Photo</p>
                </div>
              </div>

              {/* Subtle top light reflection */}
              <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl" />
            </div>
          </div>

          {/* Right Column: Narrative & Stats (span 7) */}
          <div className="md:col-span-7 space-y-10 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div>

              <span className="section-label text-indigo-400 font-semibold">// about me</span>

            </div>

            <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                I am a final-year Computer Science student at MIT Manipal, graduating in 2027. My approach to software engineering centers on architectural clarity and visual precision.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 border-y border-zinc-900 py-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold font-mono text-zinc-100">11+</p>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mt-1.5 font-semibold">Featured Projects</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold font-mono text-zinc-100">MIT</p>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mt-1.5 font-semibold">Manipal</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold font-mono text-zinc-100">IN</p>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mt-1.5 font-semibold">Bangalore-based</p>
              </div>
            </div>

            {/* Education Highlight (Minimalist) */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-indigo-400/80 uppercase tracking-widest flex items-center gap-2.5 font-bold">
                <GraduationCap size={16} /> Education
              </h3>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-zinc-200">
                  B.Tech in Computer & Communication Engineering
                </h4>
                <p className="text-sm text-zinc-500 font-mono mt-1.5">
                  Manipal Institute of Technology • Graduation 2027
                </p>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-zinc-400 text-sm font-mono">
                <MapPin size={14} className="text-indigo-400" />
                <span>Based in Bangalore, India — open to remote roles</span>
              </div>
            </div>

            {/* Show Resume Button */}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2.5 text-sm font-mono py-3 px-8"
              >
                <FileText size={16} /> SHOW FULL RESUME
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;