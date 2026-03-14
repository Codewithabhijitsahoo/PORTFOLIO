import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  GraduationCap,
  Send,
  Heart,
  MapPin,
  BookOpen,
} from "lucide-react";

const CONTACT_BG =
  "https://mgx-backend-cdn.metadl.com/generate/images/699307/2026-03-07/aa47d1aa-3d22-4453-91d6-c0317b2ff796.png";

export default function EducationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await emailjs.send(
        "service_9u9srbl",
        "template_48dc926",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "BW1Tggan4KoAAuNLO"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      {/* EDUCATION SECTION */}

      <section
        id="education"
        className="py-20 md:py-28 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

            {/* BTECH */}

            <div className="flex gap-6 items-start">

              <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>

              <div className="flex-1 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border">

                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm text-indigo-500">
                    Currently Pursuing
                  </span>
                </div>

                <h3 className="text-xl font-bold dark:text-white">
                  B.Tech in Computer Science Engineering
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                  Synergy Institute of Engineering and Technology, Dhenkanal
                </p>

                <p className="text-sm text-indigo-500">2023 – 2027</p>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  Odisha, India
                </div>

              </div>
            </div>

            {/* 12TH */}

            <div className="flex gap-6 items-start">

              <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>

              <div className="flex-1 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border">

                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm text-indigo-500">
                    Higher Secondary
                  </span>
                </div>

                <h3 className="text-xl font-bold dark:text-white">
                  Higher Secondary (12th)
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                  Sridhar Swami Higher Secondary School, Sadangi
                </p>

                <p className="text-sm text-indigo-500">2021 – 2023</p>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  Odisha, India
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="relative py-20 md:py-28 bg-slate-50 dark:bg-slate-900"
      >

        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${CONTACT_BG})` }}
        />

        <div className="relative max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
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
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border"
            />

            <textarea
              rows={5}
              required
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
            >
              <Send className={`w-5 h-5 ${status === "submitting" ? "animate-pulse" : ""}`} />

              {status === "submitting"
                ? "Sending..."
                : status === "success"
                ? "Message Sent!"
                : status === "error"
                ? "Failed"
                : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-500">
                Message sent successfully!
              </p>
            )}

          </form>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="py-8 bg-white dark:bg-slate-900 border-t">

        <div className="max-w-7xl mx-auto px-4 flex justify-center">

          <p className="text-sm text-slate-500 flex items-center gap-1">
            © {new Date().getFullYear()} Abhijit Sahoo. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>

        </div>

      </footer>

    </>
  );
}