import { useState } from "react";
import {
  GraduationCap,
  Mail,
  Send,
  Github,
  Linkedin,
  Heart,
  MapPin,
  BookOpen,
} from "lucide-react";

const CONTACT_BG =
  "https://mgx-backend-cdn.metadl.com/generate/images/699307/2026-03-07/aa47d1aa-3d22-4453-91d6-c0317b2ff796.png";

/**
 * Combined Education, Contact, and Footer section.
 */
export default function EducationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* ================= EDUCATION SECTION ================= */}

      <section
        id="education"
        className="py-20 md:py-28 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title */}

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-2xl mx-auto space-y-12">

            {/* ================= BTECH ================= */}

            <div className="relative group">


              <div className="flex gap-6 items-start">

                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 items-center justify-center shadow-lg shadow-indigo-500/25">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1 p-6 md:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-500/5">

                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-medium text-indigo-500">
                      Currently Pursuing
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    B.Tech in Computer Science Engineering
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-1">
                    Synergy Institute of Engineering and Technology, Dhenkanal
                  </p>

                  <p className="text-sm text-indigo-500 font-medium mb-3">
                    2023 – 2027
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4" />
                    Odisha, India
                  </div>

                </div>
              </div>
            </div>


            {/* ================= 12TH ================= */}

            <div className="relative group">

              <div className="flex gap-6 items-start">

                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 items-center justify-center shadow-lg shadow-indigo-500/25">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1 p-6 md:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-500/5">

                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-medium text-indigo-500">
                      Higher Secondary
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    Higher Secondary (12th)
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-1">
                    Sridhar Swami Higher Secondary School, Sadangi
                  </p>

                  <p className="text-sm text-indigo-500 font-medium mb-3">
                    2021 – 2023
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4" />
                    Odisha, India
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section
        id="contact"
        className="relative py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
      >

        <div
          className="absolute inset-0 opacity-5 dark:opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${CONTACT_BG})` }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h2>

            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              If you would like to collaborate or hire me for AI, Data Science,
              or Machine Learning projects, feel free to contact me.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">

            <input
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e)=>setFormData({...formData,email:e.target.value})}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <textarea
              rows={5}
              required
              placeholder="Message"
              value={formData.message}
              onChange={(e)=>setFormData({...formData,message:e.target.value})}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold">
              <Send className="w-5 h-5"/>
              {submitted ? "Message Sent!" : "Send Message"}
            </button>

          </form>

        </div>
      </section>


      {/* ================= FOOTER ================= */}

      <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 text-center w-full">
  © {new Date().getFullYear()} Abhijit Sahoo. Made with
  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
</p>

         

        </div>

      </footer>

    </>
  );
}