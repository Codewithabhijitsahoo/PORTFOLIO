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
 * Skills section with animated glassmorphism skill cards.
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Technologies and tools I work with to build data-driven solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative flex flex-col items-center text-center gap-3">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}