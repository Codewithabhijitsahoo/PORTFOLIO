import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const PROFILE_IMG = "/images/my_image.jpeg";
const TITLES = [
  "Data Science Enthusiast",
  "Machine Learning Engineer",
  "Deep Learning Specialist",
  "LLM Developer",
];

/** Floating orb that orbits the photo frame */
function OrbitDot({ angle, radius, size, color, duration }: {
  angle: number; radius: number; size: number; color: string; duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        top: "50%",
        left: "50%",
      }}
      animate={{
        rotate: [angle, angle + 360],
      }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: -size / 2,
          left: radius - size / 2,
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
        }}
      />
    </motion.div>
  );
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), { stiffness: 120, damping: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background is handled by global InteractiveBackground */}

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: i % 2 === 0 ? "rgba(99,102,241,0.15)" : "rgba(139,92,246,0.12)",
              width: `${10 + i * 12}px`,
              height: `${10 + i * 12}px`,
              top: `${8 + i * 11}%`,
              left: `${3 + i * 12}%`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-24 pb-16">

        {/* ── LEFT: Text Content ── */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-sm text-green-300 font-medium tracking-wide">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-3"
          >
            Hi, I'm{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Abhijit
            </span>
          </motion.h1>

          {/* Animated title */}
          <div className="h-10 sm:h-12 mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                transition={{ duration: 0.45 }}
                className="text-xl sm:text-2xl font-semibold text-indigo-300 tracking-wide"
              >
                {TITLES[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0"
          >
            Passionate about building intelligent systems with Machine Learning,
            Deep Learning, and Large Language Models — turning complex data into
            real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }} />
              <span className="relative flex items-center gap-2">
                View My Projects
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>→</motion.span>
              </span>
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-3.5 rounded-xl border border-slate-600/60 text-slate-300 font-semibold hover:bg-white/5 hover:border-indigo-400/60 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2"><Download className="w-4 h-4" /> Get In Touch</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            {[
              { href: "https://github.com/Codewithabhijitsahoo", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/abhijit-sahoo-3a2872294", icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Photo Frame ── */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 800 }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Outer spinning conic gradient ring */}
            <motion.div
              className="absolute -inset-3 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 0deg, transparent 60%, #6366f1, #a78bfa, #c084fc, transparent 80%)",
                borderRadius: "50%",
              }}
            />
            {/* Second counter-rotating ring */}
            <motion.div
              className="absolute -inset-5 rounded-full opacity-40"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 180deg, transparent 70%, #818cf8, transparent 85%)",
                borderRadius: "50%",
              }}
            />

            {/* Glow base */}
            <div
              className="absolute -inset-6 rounded-full opacity-30 blur-2xl"
              style={{ background: "radial-gradient(circle, #6366f1 0%, #8b5cf6 40%, transparent 70%)" }}
            />

            {/* Orbit dots */}
            {[
              { angle: 0,   radius: 170, size: 8,  color: "#818cf8", duration: 5 },
              { angle: 120, radius: 155, size: 6,  color: "#c084fc", duration: 7 },
              { angle: 240, radius: 165, size: 5,  color: "#34d399", duration: 9 },
            ].map((dot, i) => (
              <OrbitDot key={i} {...dot} />
            ))}

            {/* Photo container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-indigo-400/20"
              style={{ boxShadow: "0 0 60px rgba(99,102,241,0.25), inset 0 0 30px rgba(99,102,241,0.05)" }}
            >
              <img
                src={PROFILE_IMG}
                alt="Abhijit Sahoo — Data Scientist"
                className="w-full h-full object-cover object-top"
              />
              {/* Inner glamour overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, rgba(99,102,241,0.10) 0%, transparent 50%, rgba(139,92,246,0.08) 100%)",
                }}
              />
            </div>


          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          onClick={() => scrollToSection("#about")}
          className="text-slate-500 hover:text-indigo-400 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}