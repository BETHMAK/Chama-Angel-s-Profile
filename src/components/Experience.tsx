import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Reception and Selection Specialist",
      company: "Ozon Fresh",
      location: "Russia",
      period: "07/2024 - 09/2024",
      type: "Contract",
      responsibilities: [
        "Verified incoming shipments against purchase orders and packing slips",
        "Conducted thorough quality checks for damage documentation",
        "Managed inventory systems with barcode reader technology",
        "Recorded received and outgoing goods with precision",
        "Maintained accurate data entry standards"
      ]
    },
    {
      position: "School Secretary",
      company: "Hola Speaking School",
      location: "Russia",
      period: "2023 - 2024",
      type: "Full-time",
      responsibilities: [
        "Designed and implemented engaging lesson plans aligned with curriculum standards",
        "Managed comprehensive data entry for pupil and teacher information systems",
        "Conducted regular student assessments to monitor academic progress",
        "Tailored teaching strategies to meet diverse learning needs",
        "Maintained detailed academic records and administrative documentation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional experience across education and logistics sectors with focus on quality and efficiency
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 lg:mb-0">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Briefcase size={28} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-primary font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities:</h4>
                    <div className="grid gap-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground leading-relaxed">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;