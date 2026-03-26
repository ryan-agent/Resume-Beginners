import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science, Data Science",
    school: "University of Houston – Clear Lake",
    period: "Jan 2023 – May 2024",
  },
  {
    degree: "B.Tech, Electrical & Electronics Engineering",
    school: "VNR VJIET (JNTU)",
    period: "June 2014 – June 2018",
  },
];

const certifications = [
  { name: "Oracle Certified Java SE 8 Programmer", period: "Dec 2018" },
  { name: "AWS Cloud Essentials", period: "Sept 2024" },
  { name: "Google SRE Culture", period: "Dec 2020" },
];

const EducationSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-display uppercase tracking-[0.25em] text-primary">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 glow-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                  <p className="text-xs text-primary/80 font-display mt-2">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-semibold text-sm text-foreground mb-6 text-center uppercase tracking-wider">Certifications</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 text-center"
              >
                <Award className="w-5 h-5 text-accent mx-auto mb-3" />
                <h4 className="font-display text-xs font-semibold text-foreground mb-1">{cert.name}</h4>
                <p className="text-[10px] text-muted-foreground">{cert.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
