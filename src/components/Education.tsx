import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Undergraduate Education",
      institution: "Plekhanov Russian University of Economics",
      location: "Russia",
      period: "2021-2025",
      description: "Currently pursuing undergraduate studies in Economics with focus on business analytics and strategic planning.",
      status: "In Progress"
    },
    {
      degree: "High Secondary School Certificate",
      institution: "Nkulumashiba High School",
      location: "Zambia",
      period: "2016-2018",
      description: "Completed secondary education with strong academic performance in mathematics and sciences.",
      status: "Completed"
    },
    {
      degree: "Junior Secondary School Certificate",
      institution: "Luanshya Trust School",
      location: "Zambia",
      period: "2014-2015",
      description: "Foundation in core academic subjects with excellent results.",
      status: "Completed"
    },
    {
      degree: "Primary School Certificate",
      institution: "Suzika Private School",
      location: "Zambia",
      period: "2007-2013",
      description: "Early education foundation with strong academic performance.",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My educational journey spanning from primary school in Zambia to university studies in Russia
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                  
                  <div className="md:ml-16">
                    <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2 lg:mb-0">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <GraduationCap size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {edu.degree}
                            </h3>
                            <p className="text-primary font-semibold">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'In Progress' 
                              ? 'bg-accent/20 text-accent-foreground' 
                              : 'bg-primary/20 text-primary'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;