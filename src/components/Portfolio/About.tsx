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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Profile Image + Main content */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Profile image container with glow effect */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-1">
                    <div className="relative overflow-hidden rounded-xl bg-card">
                      <img
                        src="/profilepic.jpg" // Updated to match your naming
                        alt="Rohit Mohanty"
                        className="w-64 h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Try .png if .jpg fails
                          const target = e.currentTarget as HTMLImageElement;
                          if (target.src.includes('.jpg')) {
                            target.src = '/profilepic.png';
                          } else {
                            // Show fallback if both fail
                            target.style.display = 'none';
                            const sibling = target.nextElementSibling as HTMLElement;
                            if (sibling) sibling.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="hidden w-64 h-80 bg-gradient-to-br from-accent/10 to-primary/10 items-center justify-center">
                        <div className="text-center">
                          <User size={48} className="text-accent mx-auto mb-2" />
                          <p className="text-muted-foreground text-sm">Add your photo as<br />profilepic.jpg or profilepic.png</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                  </div>
                  
                  {/* Floating accent elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/60 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Main content below image */}
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated Computer Science student with a passion for building reliable and scalable solutions. I love learning new technologies and applying them through personal and academic projects with a love for creating innovative 
                  digital experiences. 
                </p>
                
                {/* Show Resume button */}
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className="inline-flex items-center btn-hero"
                  >
                    Show Resume
                  </button>
                </div>
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
                    <p className="text-muted-foreground mb-1">Bachelor of Technology in Computer & Communication Engineering</p>
                    <p className="text-sm text-accent">Manipal Institute of Technology, Manipal • Expected 2027</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming,
                      Database Management Systems, Operating Systems, Information Security
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
                    <div className="space-y-1 text-muted-foreground">
                      <p><span className="text-foreground font-medium">Location:</span> Bangalore, KA</p>
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
                      {['GenAI', 'UI/UX Design', 'Problem Solving', 'Team Management', 'Graphic Design'].map((interest) => (
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