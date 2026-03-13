import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import { useDarkMode } from "@/hooks/useDarkMode";

/**
 * Main portfolio page composing all sections with smooth scrolling.
 */
export default function PortfolioPage() {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
}