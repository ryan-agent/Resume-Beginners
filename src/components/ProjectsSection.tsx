import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Archive Search with GPT-4",
    impact: "AI-powered semantic search boosting retrieval efficiency by 35%",
    description: "Built an intelligent archive search system using OpenAI's GPT-4 API and vector database technology for enhanced semantic retrieval.",
    tags: ["React", "TypeScript", "OpenAI", "AWS Lambda", "Vector DB"],
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "Gaming Backend System",
    impact: "High-performance system supporting 500K concurrent users",
    description: "Designed and shipped a gaming backend with REST/SOAP APIs reducing turnaround by 42%, processing 150K players' data via cron jobs.",
    tags: ["Java", "Spring", "MongoDB", "OAuth2", "REST/SOAP"],
    gradient: "from-accent/15 via-accent/5 to-transparent",
  },
  {
    title: "Client Management Platform",
    impact: "Enterprise-scale microservices architecture at ADP",
    description: "Architected scalable software for client management using Docker, Kubernetes, and cloud messaging with Amazon Kinesis and SQS.",
    tags: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes"],
    gradient: "from-primary/15 via-accent/5 to-transparent",
  },
  {
    title: "FinTechPortal Application",
    impact: "Full-stack banking platform with modern UI",
    description: "Engineered a Java/J2EE web application for user registration, deposits, transfers, and transaction management with Angular frontend.",
    tags: ["Angular", "Java 8", "Spring Boot", "Hibernate", "Oracle SQL"],
    gradient: "from-accent/20 via-primary/5 to-transparent",
  },
  {
    title: "Solar Radiation Forecasting",
    impact: "ML model predicting solar output from geo-coordinates",
    description: "Built a deep learning model using backpropagation and CNNs with containerized deployment on Docker and Kubernetes.",
    tags: ["Python", "Deep Learning", "CNNs", "Docker", "Kubernetes"],
    gradient: "from-primary/10 via-accent/10 to-transparent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-section-alt relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-display uppercase tracking-[0.25em] text-primary">Premium Work Collection</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">Featured Projects</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 60 }}
              className="glass-card overflow-hidden group glow-border"
            >
              <div className="flex flex-col md:flex-row">
                <div className={`md:w-48 flex items-center justify-center p-8 bg-gradient-to-br ${project.gradient}`}>
                  <span className="text-5xl md:text-6xl font-display font-bold text-foreground/10 group-hover:text-primary/30 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-primary/80 font-display mt-1">{project.impact}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 text-[10px] font-display bg-secondary text-secondary-foreground rounded-md border border-border">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
