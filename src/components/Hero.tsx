import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Angel
                <span className="block text-accent">Chama</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-light">
                Full Stack Developer & Technical Leader
              </p>
              <p className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                Collaborative team player with ownership mentality and a track record of delivering the highest quality strategic solutions to resolve challenges and propel business growth.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Luanshya, Zambia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+7 980 060-60-11</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>centimida@gmail.com</span>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="https://github.com/angelchama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
              >
                <Github size={24} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/angelchama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional workspace" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;