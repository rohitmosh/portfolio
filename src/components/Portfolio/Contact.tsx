import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rohitm6002@gmail.com',
      href: 'mailto:rohitm6002@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7411566537',
      href: 'tel:+917411566537'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, KA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto text-xs">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact form */}
            <div className="card-glow p-4">
              <h3 className="text-lg font-semibold mb-3">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-glow w-full text-sm py-2"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-glow w-full text-sm py-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input-glow w-full text-sm py-2"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="input-glow w-full resize-none text-sm py-2"
                    placeholder="Tell me more about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-glow text-accent-foreground px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="card-glow p-4">
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>

                <div className="space-y-2">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                    >
                      <div className="bg-accent/20 p-1.5 rounded-lg group-hover:bg-accent/30 transition-colors duration-300">
                        <info.icon className="text-accent" size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium text-xs">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="card-glow p-4">
                <h3 className="text-lg font-semibold mb-3">Follow Me</h3>

                <div className="flex space-x-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-secondary rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                      title={social.label}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>

                <p className="text-muted-foreground mt-2 text-xs">
                  Let's connect and build something amazing together!
                </p>
              </div>

              {/* Availability */}
              <div className="card-glow p-4">
                <h3 className="text-lg font-semibold mb-2">Availability</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-foreground text-xs">Available for new opportunities</span>
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  Currently seeking internships and entry-level positions in software development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;