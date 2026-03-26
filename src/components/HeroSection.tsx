import { motion } from "framer-motion";
import sathvikPhoto from "@/assets/sathvik-photo.jpeg";
import FloatingIcons from "./FloatingIcons";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      
      <FloatingIcons />
      
      <div className="section-container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 1 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary font-display text-xs tracking-[0.25em] uppercase mb-8"
            >
              Full Stack & AI Engineer
            </motion.span>

            <h1 className="hero-name mb-2">SATHVIK</h1>
            <h1 className="hero-name-outline mb-10">POREDDY</h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-4 font-body leading-relaxed"
            >
              I build full-stack systems, AI workflows, and product ideas that turn complex problems into simple, scalable solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-muted-foreground/70 max-w-lg mb-10 font-body"
            >
              Exploring GenAI, RAG pipelines, agentic AI systems, and real-world intelligent applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="px-7 py-3.5 bg-foreground text-background rounded-xl font-display text-sm tracking-wide flex items-center gap-2 hover:bg-foreground/90 transition-all duration-300"
              >
                See My Work
                <span>→</span>
              </button>
              <button
                onClick={() => scrollTo("#experience")}
                className="px-7 py-3.5 border border-border rounded-xl font-display text-sm tracking-wide text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                My Experience
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3.5 border border-border rounded-xl font-display text-sm tracking-wide text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 rounded-3xl blur-2xl animate-glow-pulse" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden glow-border bg-card p-1.5">
                <img
                  src={sathvikPhoto}
                  alt="Sathvik Poreddy"
                  className="w-full h-full object-cover rounded-[calc(1rem-4px)]"
                  width={512}
                  height={512}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
