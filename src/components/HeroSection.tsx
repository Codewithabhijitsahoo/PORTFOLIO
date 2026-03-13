import { ArrowDown, Github, Linkedin } from "lucide-react";

const HERO_BG = "https://mgx-backend-cdn.metadl.com/generate/images/699307/2026-03-07/6e82aed0-3358-4f92-a6c1-df18f51deb6b.png";

/**
 * Hero section with animated intro, name, title, and call-to-action.
 */
export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900/95 dark:from-slate-900/80 dark:via-slate-900/90 dark:to-slate-900" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-500/20 animate-pulse"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 16}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-indigo-300 font-medium">
            Open to opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Abhijit Sahoo
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-6 animate-fade-in-up animation-delay-200">
          Data Science & Machine Learning Enthusiast
        </p>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
          I am a passionate data science student interested in Machine Learning,
          Deep Learning, and Large Language Models. I enjoy building intelligent
          systems and data-driven applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          <button
            onClick={() => scrollToSection("#projects")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300"
          >
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-3 rounded-full border border-slate-400/30 text-slate-300 font-semibold hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
          <a
            href="https://github.com/Codewithabhijitsahoo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/abhijitsahoo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-slate-400 hover:text-indigo-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}