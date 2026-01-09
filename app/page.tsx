import Image from "next/image";

// Pastikan file gambar ada di folder public:
// public/main-image.png
// public/project-1.png

export default function Home() {
  return (
    <main className="w-full bg-black text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* ================= HOME SECTION ================= */}
      <section
        id="home"
        className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-6 max-w-7xl mx-auto py-20 md:py-0"
      >
        {/* Text Content */}
        <div className="space-y-4 text-center md:text-left order-2 md:order-1 flex-1 z-10">
          <h2 className="text-sm md:text-xl text-blue-500 tracking-[0.2em] font-medium">
            HELLO, MY NAME IS
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight md:leading-none">
            ADRIEL <br />
            <span className="text-gray-500 text-xl sm:text-2xl md:text-4xl font-bold block mt-2">
              BERNHARD TANUHARIONO
            </span>
          </h1>

          <div className="w-16 md:w-24 h-1 bg-gray-700 my-4 md:my-6 rounded-full mx-auto md:mx-0"></div>

          <p className="max-w-lg text-gray-400 text-base md:text-lg leading-relaxed mx-auto md:mx-0">
            Computer Science Student at BINUS Online collaboration with Bank
            Central Asia as a PPTI Scholarship Awardee. Passionate about{" "}
            <span className="text-white font-bold">Backend</span> and{" "}
            <span className="text-white font-bold">Cyber Security</span>.
          </p>

          <div className="pt-6">
            <button className="border border-white px-6 py-2 md:px-8 md:py-3 rounded-none hover:bg-white hover:text-black transition duration-300 font-bold text-sm md:text-base tracking-widest">
              CONTACT ME
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-[400px] md:h-[500px] order-1 md:order-2 border-2 border-gray-800 rounded-lg overflow-hidden shrink-0">
          <Image
            src="/main-image.png"
            alt="Profile Image Adriel"
            fill
            className="object-cover object-top origin-top scale-110 hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="min-h-screen w-full flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg text-justify md:text-left">
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
              My journey in tech is driven by curiosity, specifically in how
              systems work behind the scenes (
              <span className="text-white">Backend</span>) and how to secure
              them (<span className="text-white">Cyber Security</span>).
            </p>
            <p>
              When I'm not coding or exploring Kali Linux, you can find me
              experimenting with{" "}
              <span className="text-white">Photography </span>
              or learning about{" "}
              <span className="text-white">Machine Learning</span> models.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { num: "04+", label: "Semester" },
              { num: "05+", label: "Projects Done" },
              { num: "20+", label: "Git Repos" },
              { num: "24/7", label: "Learning" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111] p-4 md:p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300 group text-center md:text-left">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 group-hover:scale-105 transition inline-block">
                  {item.num}
                </h3>
                <p className="text-xs md:text-sm text-blue-500 uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section
        id="skills"
        className="min-h-screen w-full flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
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
              skills: ["Linux (Kali)", "Wireshark", "Penetration Testing", "Burp Suite", "Cryptography", "Metasploit", "Nmap"],
            },
            {
              title: "Data & ML",
              skills: ["Pandas", "Scikit-Learn", "Jupyter", "NumPy", "Matplotlib", "TensorFlow", "Regression", "Random Forest"],
            },
            {
              title: "Web Dev",
              skills: ["Next.js", "Tailwind CSS", "HTML5/CSS3", "React", "TypeScript", "REST API"],
            },
            {
              title: "Tools & DevOps",
              skills: ["Git & GitHub", "Docker", "Linux (Ubuntu)", "VS Code", "Postman", "Vim"],
            },
            {
              title: "Soft Skills",
              skills: ["Problem Solving", "Teamwork", "Adaptability", "English", "Project Management", "Public Speaking"],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group h-full"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-blue-500 transition-colors">
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
        className="min-h-screen w-full flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              backgroundImage: "/project-1.png",
              title: "EduTIA",
              desc: "EduTIA is an online learning platform dedicated to preparing Indonesian youth for the workforce with industry-relevant skills.",
              tech: ["Next.js", "PostgreSQL", "Prisma"],
              type: "Full Stack",
              githubLink: "https://github.com/leonardo-alexander/EduTIA",
              notionLink: "https://www.notion.so/29c76c253de88022b2b6ccb5ee1d453f",
              demoLink: null,
            },
            {
              title: "ATAIM",
              desc: "ATAIM is an attendance system that operates entirely through a camera-based interface. It utilizes real-time facial recognition technology.",
              tech: ["Jupyter", "Python", "Flask", "YOLOv5"],
              type: "AI/ML",
              githubLink: "https://github.com/AdrielBernhardT/Artificial-Intelligence/tree/main/ATAIM",
              notionLink: null,
              demoLink: null,
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group flex flex-col overflow-hidden h-full"
            >
              <div className="h-48 w-full bg-gray-900 flex items-center justify-center relative overflow-hidden shrink-0">
                {project.backgroundImage ? (
                  <Image
                    src={project.backgroundImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-gray-600 font-bold text-4xl group-hover:scale-110 transition-transform duration-300">
                    {project.title.charAt(0)}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-400 border border-blue-500/30 z-10">
                  {project.type}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-4 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800">
                        {t}
                        </span>
                    ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50">
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                        <svg className="w-5 h-5 group-hover/link:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                        <span>Code</span>
                        </a>
                    )}
                    {project.notionLink && (
                        <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                        <svg className="w-5 h-5 group-hover/link:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        <span>Docs</span>
                        </a>
                    )}
                    </div>
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
        <div className="mb-5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Let's work <span className="text-gray-500">together!</span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Open for opportunities. Feel free to reach out via email or connect on social media.
            </p>

            <div className="space-y-4">
              <a href="mailto:adrielbth01@gmail.com" className="flex flex-col md:flex-row items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group text-center md:text-left">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mail Me</p>
                  <p className="text-white font-medium group-hover:text-blue-500 transition-colors break-all">adrielbth01@gmail.com</p>
                </div>
              </a>
              {/* WhatsApp similar structure... */}
            </div>
            
            {/* Social Media - Centered on mobile */}
            <div className="pt-4 flex flex-col items-center md:items-start">
               <p className="text-gray-500 text-sm mb-4 tracking-widest uppercase">Follow Me</p>
               <div className="flex gap-4">
                  {/* Icons remain same, just flex container adjusted */}
                  <a href="https://github.com/AdrielBernhardT" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  {/* LinkedIn & Instagram links here (same as before) */}
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800">
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea rows={4} placeholder="Hi Adriel..." className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 rounded-lg transition-all shadow-lg shadow-blue-500/20">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Adriel Bernhard Tanuhariono. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}