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
      href: 'https://github.com/rohitmosh',
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
    <section id="contact" className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-glow">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

                <div className="space-y-2">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                    >
                      <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors duration-300">
                        <info.icon className="text-accent" size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="card-glow">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>

                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-secondary rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>

                <p className="text-muted-foreground mt-3 text-xs">
                  Let's connect and build something amazing together!
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