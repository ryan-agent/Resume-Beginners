import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding bg-section-alt relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-display uppercase tracking-[0.25em] text-primary">Academic Contributions</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">Research & Publications</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 glow-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="px-3 py-1 text-[10px] font-display uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 rounded-full">
                  IEEE Publication
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                Adversarial Image Defense Study
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                CNN Robustness Against Adversarial Attacks
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Investigated image transformation techniques (Affine, Gaussian, Median, Bilateral blurring) to defend against adversarial attacks on CNNs. Evaluated using FGSM, RFGSM, and PGD with ResNet50 and DenseNet121.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "TensorFlow", "PyTorch", "Deep Learning", "ImageNet", "ResNet50"].map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 text-[10px] font-display bg-secondary text-secondary-foreground rounded-md border border-border">{tag}</span>
                ))}
              </div>

              <a
                href="https://ieeexplore.ieee.org/document/10737087"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-display"
              >
                View on IEEE Xplore
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
