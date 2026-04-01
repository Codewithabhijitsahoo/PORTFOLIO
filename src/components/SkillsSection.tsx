import {
  Brain,
  Layers,
  MessageSquare,
  BarChart3,
  Search,
  Code2,
  Database,
  TrendingUp,
  Table,
  PieChart,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "Machine Learning", icon: Brain, color: "from-blue-500 to-cyan-500" },
  { name: "Deep Learning", icon: Layers, color: "from-violet-500 to-purple-500" },
  { name: "LLM", icon: MessageSquare, color: "from-pink-500 to-rose-500" },
  { name: "Data Visualization", icon: BarChart3, color: "from-emerald-500 to-teal-500" },
  { name: "EDA", icon: Search, color: "from-amber-500 to-orange-500" },
  { name: "Python", icon: Code2, color: "from-blue-500 to-indigo-500" },
  { name: "SQL", icon: Database, color: "from-cyan-500 to-blue-500" },
  { name: "Statistics", icon: TrendingUp, color: "from-fuchsia-500 to-pink-500" },
  { name: "Excel", icon: Table, color: "from-green-500 to-emerald-500" },
  { name: "Tableau", icon: PieChart, color: "from-orange-500 to-red-500" },
];

/**
 * Skills section with an infinite horizontal scroller for a dynamic look.
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-4"
          />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Technologies and tools I work with to build data-driven solutions
          </p>
        </div>
      </div>

      {/* Infinite Scroller */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -100 * skills.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-shrink-0 w-44 p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}