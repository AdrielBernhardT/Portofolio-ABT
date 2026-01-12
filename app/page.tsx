"use client";

import Image from "next/image";
import mainImage from "./images/main-image.png";
import project1 from "./images/project-1.png";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full bg-black text-white selection:bg-blue-500/30">
      {/* ================= HOME SECTION ================= */}
      <section
        id="home"
        /* Menggunakan min-h-svh agar lebih akurat di browser mobile (iOS/Android) */
        className="min-h-svh w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-6 py-10 max-w-7xl mx-auto overflow-hidden"
      >
        <div className="space-y-4 text-center md:text-left order-2 md:order-1 flex-1">
          <h2 className="text-sm md:text-xl text-blue-500 tracking-[0.2em] font-bold">
            HELLO, MY NAME IS
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
            ADRIEL <br className="hidden md:block" />
            <span className="text-gray-500 text-xl sm:text-2xl md:text-4xl font-bold block mt-2">
              BERNHARD TANUHARIONO
            </span>
          </h1>

          <div className="w-16 md:w-24 h-1 bg-gray-700 my-4 md:my-6 rounded-full mx-auto md:mx-0"></div>

          <p className="max-w-lg text-gray-400 text-base md:text-lg leading-relaxed">
            Computer Science Student at BINUS Online collaboration with Bank
            Central Asia as a PPTI Scholarship Awardee. Passionate about{" "}
            <span className="text-white font-bold">Backend</span> and{" "}
            <span className="text-white font-bold">Cyber Security</span>.
          </p>

          <div className="pt-6">
            <button
              onClick={scrollToContact}
              className="w-full md:w-auto border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 font-bold text-sm tracking-wider"
            >
              CONTACT ME
            </button>
          </div>
        </div>

        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[400px] md:h-[500px] order-1 md:order-2 border-2 border-gray-800 rounded-2xl overflow-hidden shrink-0">
          <Image
            src={mainImage}
            alt="Profile Image Adriel"
            fill
            priority
            className="object-cover object-top scale-110 md:scale-125"
          />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        /* Di mobile kita ganti min-h agar konten panjang tidak terpotong */
        className="min-h-screen w-full flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg">
            <p>
              Hi! I'm{" "}
              <span className="text-white font-semibold">
                Adriel Bernhard Tanuhariono
              </span>
              , a 4th-semester Computer Science student at BINUS Online Learning
              based in{" "}
              <span className="text-white">Sentul, West Java, Indonesia</span>.
            </p>
            <p>
              I am currently part of the prestigious{" "}
              <span className="text-white">PPTI BCA Scholarship</span> program.
              My journey in tech is driven by curiosity in{" "}
              <span className="text-white">Backend</span> and{" "}
              <span className="text-white">Cyber Security</span>.
            </p>
            <p>
              When I'm not coding, you can find me experimenting with{" "}
              <span className="text-white">Photography</span> or learning about{" "}
              <span className="text-white">Machine Learning</span> models.
            </p>
          </div>

          {/* Stats Grid - Responsive Column */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { val: "04+", label: "Semester" },
              { val: "05+", label: "Projects Done" },
              { val: "20+", label: "Git Repos" },
              { val: "24/7", label: "Learning" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#111] p-5 md:p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300 group"
              >
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-1 group-hover:scale-105 transition origin-left">
                  {stat.val}
                </h3>
                <p className="text-[10px] md:text-xs text-blue-500 uppercase tracking-widest font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section
        id="skills"
        className="min-h-screen w-full flex flex-col py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Backend & Languages",
              skills: ["Python", "Java", "C", "C++", "SQL", "Go", "Node.js", "PHP"],
            },
            {
              title: "Cyber Security",
              skills: ["Linux (Kali)", "Wireshark", "PenTest", "Metasploit", "Nmap"],
            },
            {
              title: "Data & ML",
              skills: ["Pandas", "Scikit-Learn", "TensorFlow", "NumPy", "Matplotlib"],
            },
            {
              title: "Web Dev",
              skills: ["Next.js", "Tailwind CSS", "React", "TypeScript", "REST API"],
            },
            {
              title: "Tools & DevOps",
              skills: ["Git", "Docker", "Linux", "Postman", "Figma", "Vim"],
            },
            {
              title: "Soft Skills",
              skills: ["Problem Solving", "Teamwork", "Public Speaking", "Photography"],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 group"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900 border border-gray-700 rounded-full text-xs md:text-sm text-gray-300 group-hover:border-blue-500/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section
        id="projects"
        className="min-h-screen w-full flex flex-col py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              backgroundImage: project1,
              title: "EduTIA",
              desc: "Online learning platform for Indonesian youth to gain industry-relevant skills and connect with corporate partners.",
              tech: ["Next.js", "PostgreSQL", "Prisma"],
              type: "Full Stack",
              githubLink: "#",
              notionLink: "#",
            },
            {
              title: "ATAIM",
              desc: "Camera-based attendance system using real-time facial recognition and object detection for secure verification.",
              tech: ["Python", "Flask", "Dlib", "YOLOv5"],
              type: "AI & Web",
              githubLink: "#",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 group flex flex-col overflow-hidden"
            >
              <div className="h-40 md:h-48 w-full bg-gray-900 relative">
                {project.backgroundImage ? (
                  <Image
                    src={project.backgroundImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-800">
                    {project.title.charAt(0)}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-blue-400 border border-blue-500/30">
                  {project.type}
                </div>
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-gray-900 text-gray-400 rounded-md border border-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800/50 text-xs font-medium text-gray-400">
                  {project.githubLink && <span className="hover:text-white cursor-pointer">Code</span>}
                  {project.notionLink && <span className="hover:text-white cursor-pointer">Docs</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Let's work <span className="text-gray-500">together!</span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Open for opportunities or collaborations. Feel free to reach out via email or social media.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <a href="mailto:adrielbth01@gmail.com" className="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-white text-sm md:text-base font-medium truncate">adrielbth01@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800">
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400">Your Name</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400">Your Email</label>
                  <input type="email" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="john@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none resize-none transition-colors" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 rounded-lg transition-all text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500 text-[10px] md:text-sm uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Adriel Bernhard Tanuhariono.</p>
        </footer>
      </section>
    </main>
  );
}