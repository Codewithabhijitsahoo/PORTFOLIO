import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  link: string;
  image: string;
  isFeatured?: boolean;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Data Analytics: A Beginner-Friendly Guide with Real-World Use Cases",
    description: "A beginner-friendly guide explaining data analytics, its importance, types, and real-world applications.",
    category: "Data Analytics",
    date: "Mar 15, 2024",
    link: "https://medium.com/@abhijitsahoo052/data-analytics-a-beginner-friendly-guide-with-real-world-use-cases-4275c7eb2ccc",
    image: "/blog-analytics.png",
    isFeatured: true,
  },
  {
    id: 2,
    title: "🚀 MCP Server in AI: The Hidden Power Behind Smart Applications",
    description: "AI uses MCP Servers as 'hands' to fetch real-time data, remember information, and interact with various apps and services.",
    category: "AI & Technology",
    date: "Apr 01, 2026",
    link: "https://medium.com/@abhijitsahoo052/mcp-server-in-ai-the-hidden-power-behind-smart-applications-2c2e1c632a77",
    image: "/blog-mcp.png",
    isFeatured: true,
  },
];

/**
 * Modern, responsive Blog Section with glassmorphism and animations.
 */
export default function BlogSection() {
  return (
    <section id="blogs" className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Article
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sharing insights and experiences in Data Science and Analytics
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="
                group relative flex flex-col rounded-3xl overflow-hidden
                bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50
                hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] hover:-translate-y-2 transition-all duration-500
                animate-fade-in-up
              "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500 text-white border border-indigo-400/30">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 flex flex-col">
                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-6 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    {blog.date}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                  {blog.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {blog.description}
                </p>

                {/* Footer / Read More */}
                <div className="mt-auto flex flex-col sm:flex-row items-center gap-6">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
                    <BookOpen className="w-4 h-4" />
                    Featured Publication
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
