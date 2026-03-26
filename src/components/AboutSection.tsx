import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years Exp." },
  { value: "5+", label: "Companies" },
  { value: "MS", label: "Data Science" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-alt relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-display uppercase tracking-[0.25em] text-primary">About Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl font-display font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-display uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              Engineer with 7+ years building enterprise-grade backends, cloud-native architectures, and AI-powered applications. Expert in Java, Spring Boot, AWS, and modern frontend frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Passionate about clean architecture, fault-tolerant systems, and making AI production-ready. Currently exploring GenAI, RAG pipelines, and agentic AI systems for real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 glow-border"
          >
            <h3 className="font-display font-semibold text-sm mb-6 text-foreground uppercase tracking-wider">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Enterprise Architecture",
                "Cloud-Native Systems",
                "AI/ML Integration",
                "Microservices Design",
                "Performance Optimization",
                "CI/CD & DevOps",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
