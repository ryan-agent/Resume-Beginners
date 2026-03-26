import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Application Developer",
    company: "ADP Technology Services",
    period: "Nov 2024 – Present",
    tags: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "Microservices"],
    points: [
      "Architected scalable client management platform serving enterprise clients",
      "Built async processing components cutting data pipeline latency by 40%",
      "Engineered RESTful APIs powering dynamic reporting dashboards",
    ],
  },
  {
    title: "Student Technician IV",
    company: "University of Houston System",
    period: "Apr 2023 – May 2024",
    tags: ["React", "TypeScript", "OpenAI GPT-4", "AWS Lambda", "Vector DB"],
    points: [
      "Implemented GPT-4 powered archive search — 35% efficiency boost",
      "Architected RESTful APIs optimizing query processing by 50%",
      "Integrated vector database for enhanced semantic search accuracy",
    ],
  },
  {
    title: "Software Engineer – Java Full Stack",
    company: "IVY Software / Entain",
    period: "Dec 2021 – Dec 2022",
    tags: ["Java", "Spring Boot", "MongoDB", "REST/SOAP", "OAuth2"],
    points: [
      "Designed gaming backend supporting 500K concurrent users",
      "Built REST/SOAP APIs — 42% faster turnaround time",
      "Engineered cron jobs processing 150K players' data, 27% efficiency gain",
    ],
  },
  {
    title: "Associate Consultant – Java Developer",
    company: "Capgemini / Discover Financial",
    period: "Sep 2018 – Nov 2021",
    tags: ["Spring MVC", "Angular", "AWS", "Kafka", "PostgreSQL", "Docker"],
    points: [
      "Implemented Spring MVC for banking apps — 17% faster development cycles",
      "Built serverless APIs with AWS Lambda reducing latency by 30%",
      "Created Angular components enhancing data processing speed by 25%",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-display uppercase tracking-[0.25em] text-primary">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 60 }}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-16 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 md:-translate-x-1.5 top-6 z-10 ring-4 ring-background shadow-[0_0_12px_hsl(200_100%_55%/0.4)]" />

              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"} pl-10 md:pl-0`}>
                <span className="text-xs font-display text-primary/80 uppercase tracking-wider">{exp.period}</span>
              </div>

              <div className={`md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card p-6 glow-border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-[8px]">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-display bg-secondary text-secondary-foreground rounded-md border border-border">{tag}</span>
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

export default ExperienceSection;
