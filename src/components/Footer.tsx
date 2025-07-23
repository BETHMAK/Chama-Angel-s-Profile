import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Angel Chama</h3>
            <p className="text-background/80 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions that drive business growth and enhance user experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-background/80 hover:text-background transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:centimida@gmail.com"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail size={16} />
                centimida@gmail.com
              </a>
              <p className="text-background/80">
                577/23 Livingstone street Mpatamato, Luanshya
              </p>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/angelchama"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/angelchama"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm">
              © {currentYear} Angel Chama. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-background/80 text-sm">
              Made with <Heart size={16} className="text-red-400" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;