import { Code, Database, Globe, Users, Briefcase, Languages } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      skills: ["Node.js & Express", "React", "C#", "Web Development"]
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: ["MySQL", "API Development", "Data Management"]
    },
    {
      icon: Briefcase,
      title: "Project Management",
      skills: ["Project Management", "Technical Leadership", "Team Collaboration"]
    },
    {
      icon: Languages,
      title: "Languages",
      skills: ["Fluent in English", "Native Language Skills"]
    }
  ];

  const technicalSkills = [
    { name: "Node.js & Express", level: 85 },
    { name: "React", level: 80 },
    { name: "C#", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "Web Development", level: 85 },
    { name: "Project Management", level: 90 }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technical proficiencies and soft skills that drive successful project delivery
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <category.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Technical Proficiency Bars */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary-glow h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Competencies */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="text-lg font-semibold text-foreground mb-3">Technical Excellence</h4>
              <p className="text-muted-foreground">
                Strong foundation in modern web technologies with focus on scalable, maintainable solutions.
              </p>
            </div>
            <div className="bg-accent/5 rounded-xl p-6 border-l-4 border-accent">
              <h4 className="text-lg font-semibold text-foreground mb-3">Leadership</h4>
              <p className="text-muted-foreground">
                Proven track record in technical leadership and project management across diverse teams.
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="text-lg font-semibold text-foreground mb-3">Problem Solving</h4>
              <p className="text-muted-foreground">
                Strategic approach to challenges with focus on delivering high-quality business solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;