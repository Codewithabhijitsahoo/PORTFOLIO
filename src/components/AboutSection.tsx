import { Brain, Database, LineChart, Sparkles } from "lucide-react";

const ABOUT_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/699307/2026-03-07/ffce7122-394c-4d3f-8574-83f76355c1ff.png";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Building predictive models and intelligent systems",
  },
  {
    icon: Sparkles,
    title: "Deep Learning",
    desc: "Neural networks for complex pattern recognition",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Extracting insights from complex datasets",
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    desc: "Transforming data into compelling visual stories",
  },
];

/**
 * About Me section with image, bio, and highlight cards.
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
              <img
                src={ABOUT_IMG}
                alt="Abhijit Sahoo - Data Scientist"
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Abhijit Sahoo
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I am a student deeply passionate about Artificial Intelligence,
              Machine Learning, and Data Analytics. My journey in data science
              has led me to explore various domains including Deep Learning,
              Natural Language Processing, and Large Language Models.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              I love turning raw data into actionable insights and building
              intelligent systems that solve real-world problems. From
              recommendation engines to medical image analysis, I thrive on
              tackling challenging problems with data-driven approaches.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <item.icon className="w-6 h-6 text-indigo-500 mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}