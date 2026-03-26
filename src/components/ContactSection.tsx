import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "sathvik0197@gmail.com", href: "mailto:sathvik0197@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "sathvikporeddy0197", href: "https://linkedin.com/in/sathvikporeddy0197" },
  { icon: Github, label: "GitHub", value: "github.com/sathvik", href: "https://github.com/sathvik" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Always interested in collaborating on AI ideas, product experiments, and meaningful engineering challenges.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contactLinks.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glow-border p-5 min-w-[200px] text-center"
            >
              <info.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-xs text-muted-foreground font-display uppercase tracking-wider mb-1">{info.label}</div>
              <div className="text-sm text-foreground font-medium">{info.value}</div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:sathvik0197@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-display text-sm tracking-wide hover:bg-foreground/90 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
