import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / ML / GenAI",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenAI APIs", "Claude", "LangChain", "RAG", "Vector Databases", "Embeddings", "Agentic AI", "MLOps"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Hibernate", "GraphQL", "REST APIs", "Microservices", "Kafka", "RabbitMQ"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Terraform", "Linux", "PCF"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Oracle SQL", "MySQL", "DynamoDB", "Redis", "Elasticsearch"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-display uppercase tracking-[0.25em] text-primary">Technical Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 60 }}
              className={`glass-card p-6 glow-border ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <h3 className="font-display font-semibold text-sm text-primary uppercase tracking-wider mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-display bg-secondary/80 text-secondary-foreground rounded-lg border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
