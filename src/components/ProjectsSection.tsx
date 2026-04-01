import { ExternalLink, Github, Film, Network, BrainCircuit, Clapperboard } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Hybrid Movie Recommendation System",
    description:
      "A sophisticated recommendation engine combining collaborative filtering and content-based approaches for personalized movie suggestions.",
    tags: ["Python", "Machine Learning", "Streamlit", "Recommendation"],
    icon: Film,
    github: "https://github.com/Codewithabhijitsahoo/Hybrid_movie_recommendations_system",
    demo: "https://hybridmovierecommendationssystem-aebztpjj32hxms7er5n7ej.streamlit.app/",
    gradient: "from-blue-500 to-cyan-500",
    image: "/images/movie_rec_mockup_1775035285833.png",
  },
  {
    title: "Network Traffic Forecasting using LSTM",
    description:
      "Time-series forecasting model using Long Short-Term Memory networks to predict network traffic patterns and anomalies.",
    tags: ["Deep Learning", "LSTM", "Time Series", "Streamlit"],
    icon: Network,
    github: "https://github.com/Codewithabhijitsahoo/Network_traffic_Forecasting",
    demo: "https://networktrafficforecasting-9k3fuu2esxhpcw7dxevf69.streamlit.app/",
    gradient: "from-violet-500 to-purple-500",
    image: "/images/network_traffic_mockup_1775035327692.png",
  },
  {
    title: "Brain Tumor Detection using Deep Learning",
    description:
      "Deep learning-based medical image classification system for detecting brain tumors from MRI scans with high accuracy.",
    tags: ["Deep Learning", "CNN", "Medical AI", "Flask"],
    icon: BrainCircuit,
    github: "https://github.com/Codewithabhijitsahoo/Brain_tumor_prediction_System",
    demo: "https://brain-tumor-prediction-system-7.onrender.com",
    gradient: "from-pink-500 to-rose-500",
    image: "/images/brain_tumor_mockup_1775035353699.png",
  },
  {
    title: "Content-Based Movie Recommendation System",
    description:
      "A content-based filtering system that recommends movies based on features like genre, cast, and plot similarity.",
    tags: ["Python", "NLP", "Content Filtering", "Streamlit"],
    icon: Clapperboard,
    github: "https://github.com/Codewithabhijitsahoo/Movie_recommend_system_",
    demo: "https://movierecommendsystem-zgqjyqzpthdc9kvvdh6ete.streamlit.app/",
    gradient: "from-amber-500 to-orange-500",
    image: "/images/movie_rec_mockup_1775035285833.png",
  },
];

/**
 * Projects section with animated project cards, GitHub and demo links.
 */
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-4"
          />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A selection of projects showcasing my skills in ML, DL, and data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                      title="View GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} text-white shadow-md`}
                  >
                    <project.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Links (mobile friendly) */}
                <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}