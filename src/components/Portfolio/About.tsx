import { GraduationCap, User, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student with a love for creating innovative 
                digital experiences. My journey in tech began with curiosity about how things work, 
                and has evolved into a deep appreciation for clean code, user-centered design, 
                and solving complex problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor's degree in Computer Science, I've gained hands-on 
                experience through various projects and internships. I enjoy working with modern 
                technologies and am always eager to learn new frameworks and tools that can help 
                me build better solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing 
                to open-source projects, or enjoying outdoor activities. I believe in continuous 
                learning and am always looking for opportunities to grow both personally and professionally.
              </p>

              {/* Download Resume button */}
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center btn-hero"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right side - Info cards */}
            <div className="space-y-6">
              {/* Education Card */}
              <div className="card-glow">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground mb-1">Bachelor of Science in Computer Science</p>
                    <p className="text-sm text-accent">University of Technology • Expected 2025</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Relevant Coursework: Data Structures, Algorithms, Web Development, 
                      Database Systems, Software Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Info Card */}
              <div className="card-glow">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <User className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p><span className="text-foreground font-medium">Location:</span> San Francisco, CA</p>
                      <p><span className="text-foreground font-medium">Age:</span> 22</p>
                      <p><span className="text-foreground font-medium">Languages:</span> English, Spanish</p>
                      <p><span className="text-foreground font-medium">Availability:</span> Open to opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests Card */}
              <div className="card-glow">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Heart className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Machine Learning', 'Open Source', 'Photography', 'Hiking', 'Gaming', 'Reading'].map((interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;