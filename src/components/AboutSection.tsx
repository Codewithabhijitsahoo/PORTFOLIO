import { Brain, Database, LineChart, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ABOUT_IMG = "/images/my_image.jpeg";

const highlights = [
  { icon: Brain,       title: "Machine Learning",    desc: "Predictive models & intelligent systems",    color: "#6366f1" },
  { icon: Sparkles,    title: "Deep Learning",        desc: "Neural networks for complex patterns",       color: "#8b5cf6" },
  { icon: Database,    title: "Data Analytics",       desc: "Extracting insights from complex datasets",  color: "#a78bfa" },
  { icon: LineChart,   title: "Data Visualization",   desc: "Transforming data into compelling stories",  color: "#c084fc" },
];


/** Decorative SVG corner bracket */
function CornerBracket({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotate = { tl: 0, tr: 90, br: 180, bl: 270 }[position];
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -2, left: -2 },
    tr: { top: -2, right: -2 },
    br: { bottom: -2, right: -2 },
    bl: { bottom: -2, left: -2 },
  };
  return (
    <div className="absolute w-8 h-8" style={{ ...pos[position] }}>
      <svg
        width="32" height="32" viewBox="0 0 32 32" fill="none"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <path d="M2 30 L2 2 L30 2" stroke="url(#bracketGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <defs>
          <linearGradient id="bracketGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-transparent"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-indigo-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-indigo-400 mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Me
            </span>
          </h2>
          <div className="w-16 h-1 mt-5 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #6366f1, #c084fc)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── LEFT: Creative Image Frame ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative" style={{ width: 360, height: 420 }}>
              {/* Background offset "shadow" card */}
              <div
                className="absolute rounded-3xl"
                style={{
                  inset: 0,
                  top: 18,
                  left: 18,
                  background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 100%)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  borderRadius: "24px",
                }}
              />
              {/* Second offset card */}
              <div
                className="absolute rounded-3xl"
                style={{
                  inset: 0,
                  top: 9,
                  left: 9,
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.12)",
                  borderRadius: "24px",
                }}
              />

              {/* Main photo frame */}
              <div
                className="relative overflow-hidden group"
                style={{
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: "24px",
                  width: "100%",
                  height: "100%",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <img
                  src={ABOUT_IMG}
                  alt="Abhijit Sahoo — Data Scientist"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{ background: "linear-gradient(to top, rgba(10,14,26,0.85) 0%, transparent 100%)" }}
                />
                {/* Name chip at bottom */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-lg leading-tight">Abhijit Sahoo</p>
                  <p className="text-indigo-300 text-sm font-medium">Data Scientist & ML Engineer</p>
                </div>

                {/* Corner brackets */}
                <CornerBracket position="tl" />
                <CornerBracket position="tr" />
                <CornerBracket position="bl" />
                <CornerBracket position="br" />
              </div>



              {/* Glow behind the frame */}
              <div
                className="absolute -z-10 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{
                  inset: "-20px",
                  background: "radial-gradient(ellipse at center, #6366f1 0%, #8b5cf6 50%, transparent 70%)",
                }}
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Text + Highlights + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Bio */}
            <p className="text-slate-400 leading-relaxed text-base mb-5">
              I'm a student deeply passionate about{" "}
              <span className="text-indigo-300 font-medium">Artificial Intelligence</span>,{" "}
              <span className="text-violet-300 font-medium">Machine Learning</span>, and{" "}
              <span className="text-purple-300 font-medium">Data Analytics</span>. My journey
              has led me through Deep Learning, Natural Language Processing, and
              Large Language Models — building systems that solve real problems.
            </p>
            <p className="text-slate-400 leading-relaxed text-base mb-10">
              From recommendation engines to medical image analysis, I thrive on
              turning raw data into actionable insights and building AI-powered
              applications that make a measurable impact.
            </p>


            {/* Highlight Cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="group p-4 rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.04) 100%)",
                    border: "1px solid rgba(99,102,241,0.15)",
                  }}
                  whileHover={{ borderColor: "rgba(99,102,241,0.45)", boxShadow: `0 12px 32px rgba(99,102,241,0.12)` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}20` }}
                  >
                    <item.icon className="w-4.5 h-4.5" style={{ color: item.color, width: 18, height: 18 }} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}