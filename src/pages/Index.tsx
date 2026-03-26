import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackStrip from "@/components/TechStackStrip";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ResearchSection from "@/components/ResearchSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechStackStrip />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ResearchSection />
      <EducationSection />
      <ContactSection />
      <footer className="py-6 text-center text-xs text-muted-foreground/60 font-display border-t border-border/50">
        © {new Date().getFullYear()} Sathvik Poreddy. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
