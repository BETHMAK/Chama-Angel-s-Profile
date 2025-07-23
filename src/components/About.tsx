import { Calendar, MapPin, User, Heart, Users } from "lucide-react";

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: "Date of Birth", value: "23rd March 2000" },
    { icon: MapPin, label: "Nationality", value: "Zambian" },
    { icon: User, label: "NRC", value: "332701/68/1" },
    { icon: User, label: "Gender", value: "Male" },
    { icon: Heart, label: "Religion", value: "Christian" },
    { icon: Users, label: "Marital Status", value: "Single" }
  ];

  return (
    <section id="about" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {info.label}
                        </p>
                        <p className="text-foreground font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a collaborative team player with an ownership mentality and a proven track record of delivering high-quality strategic solutions. My experience spans across web development, project management, and technical leadership.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my undergraduate education at Plekhanov Russian University of Economics while gaining practical experience in various technical roles. I'm passionate about creating innovative solutions that drive business growth and enhance user experiences.
                </p>
                
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">Current Focus</h4>
                  <p className="text-muted-foreground">
                    Specializing in full-stack development with expertise in Node.js, React, and modern web technologies. Always eager to learn and implement cutting-edge solutions.
                  </p>
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