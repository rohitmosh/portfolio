import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'rohitm6002@gmail.com',
      href: 'mailto:rohitm6002@gmail.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/rohitmohanty9',
      href: 'https://www.linkedin.com/in/rohitmohanty9/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/rohitmosh',
      href: 'https://github.com/rohitmosh',
      icon: Github,
    },
    {
      label: 'Resume',
      value: 'resume.pdf',
      href: '/resume.pdf',
      icon: FileText,
    }
  ];

  return (
    <section id="contact" className="py-44 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* Left Column: Narrative Headline (span 6) */}
          <div className="md:col-span-6 space-y-8 reveal-on-scroll">
            <span className="section-label text-indigo-400 text-base md:text-xl font-semibold tracking-wider">// connect</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-100 leading-tight">
              Let's start a conversation.
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md font-light">
              I am open to software engineering internships, full-time associate roles, and open-source collaborations. Drop a line if you want to work together.
            </p>
          </div>

          {/* Right Column: Direct action rows (span 6) */}
          <div className="md:col-span-6 space-y-6 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="divide-y divide-zinc-900 border-y border-zinc-900">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-6 group transition-colors duration-300 hover:bg-zinc-900/10 px-3 rounded-lg"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors duration-300">
                        <Icon size={22} />
                      </span>
                      <div>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">{link.label}</p>
                        <p className="text-base md:text-lg font-semibold text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300 mt-1">{link.value}</p>
                      </div>
                    </div>
                    <span className="text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </a>
                );
              })}
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;