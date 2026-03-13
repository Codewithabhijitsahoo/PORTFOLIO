import { ExternalLink, Github, Film, Network, BrainCircuit, Clapperboard } from "lucide-react";

const PROJECTS_BG = "https://mgx-backend-cdn.metadl.com/generate/images/699307/2026-03-07/ad10c9f9-6524-4965-9d5b-893e7a5a7844.png";

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
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${PROJECTS_BG})` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A selection of projects showcasing my skills in ML, DL, and data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 bg-gradient-to-r ${project.gradient} group-hover:h-1.5 transition-all duration-300`}
              />

              <div className="p-6 md:p-8">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}