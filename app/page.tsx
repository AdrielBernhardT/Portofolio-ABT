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
        className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-6 py-12 md:py-0 max-w-7xl mx-auto"
      >
        {/* Konten Teks */}
        <div className="space-y-4 text-center md:text-left order-2 md:order-1 flex-1">
          <h2 className="text-xs md:text-sm lg:text-xl text-blue-500 tracking-[0.3em] font-bold">
            HELLO, MY NAME IS
          </h2>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
            ADRIEL <br />
            <span className="text-gray-500 text-lg sm:text-2xl lg:text-4xl font-bold block mt-1 md:mt-2">
              BERNHARD TANUHARIONO
            </span>
          </h1>

          <div className="w-16 md:w-24 h-1 bg-gray-700 my-4 md:my-6 rounded-full mx-auto md:mx-0"></div>

          <p className="max-w-lg text-gray-400 text-sm md:text-base lg:text-lg mx-auto md:mx-0 leading-relaxed">
            Computer Science Student at BINUS Online collaboration with Bank
            Central Asia as a <span className="text-blue-400">PPTI Scholarship Awardee</span>. 
            Focused on <span className="text-white font-bold">Backend</span> and{" "}
            <span className="text-white font-bold">Cyber Security</span>.
          </p>

          <div className="pt-4 md:pt-6">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 font-bold text-sm md:text-base"
            >
              CONTACT ME
            </button>
          </div>
        </div>

        {/* Gambar Profil */}
        <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] order-1 md:order-2 border-2 border-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
          <Image
            src={mainImage}
            alt="Profile Image Adriel"
            fill
            priority
            className="object-cover object-top scale-110"
          />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="min-h-screen w-full flex flex-col justify-center py-16 md:py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-12 md:w-16 h-1 bg-gray-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-4 md:space-y-6 text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg">
            <p>
              Hi! I'm <span className="text-white font-semibold">Adriel Bernhard Tanuhariono</span>, 
              based in <span className="text-white">Sentul, West Java</span>.
            </p>
            <p>
              I am a <span className="text-blue-400">PPTI BCA Scholar</span>. My tech journey is 
              driven by curiosity in <span className="text-white">Backend systems</span> and 
              <span className="text-white"> Cyber Security</span>.
            </p>
            <p>
              Outside of coding, I explore <span className="text-white">Photography</span> and 
              <span className="text-white"> Machine Learning</span> models.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { label: "Semester", value: "04+" },
              { label: "Projects", value: "05+" },
              { label: "Git Repos", value: "20+" },
              { label: "Learning", value: "24/7" },
            ].map((item, i) => (
              <div key={i} className="bg-[#111] p-4 md:p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-1">{item.value}</h3>
                <p className="text-[10px] md:text-xs text-blue-500 uppercase tracking-widest font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section
        id="skills"
        className="min-h-screen w-full flex flex-col py-16 md:py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-12 md:w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Backend", skills: ["Python", "Java", "SQL", "Go", "Node.js", "PHP"] },
            { title: "Cyber Security", skills: ["Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit"] },
            { title: "Web Dev", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
            { title: "Data & ML", skills: ["Pandas", "Scikit-Learn", "TensorFlow", "NumPy"] },
            { title: "Tools", skills: ["Git", "Docker", "VS Code", "Postman", "Figma"] },
            { title: "Soft Skills", skills: ["Adaptability", "Teamwork", "Public Speaking", "English"] },
          ].map((cat, i) => (
            <div key={i} className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all h-full">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-[10px] md:text-xs text-gray-300">
                    {s}
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
        className="min-h-screen w-full flex flex-col py-16 md:py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-12 md:w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card logic simplified for mobile */}
          {[
            {
              title: "EduTIA",
              desc: "Online learning platform for Indonesian youth workforce preparation.",
              tech: ["Next.js", "PostgreSQL"],
              type: "Full Stack"
            },
            {
              title: "ATAIM",
              desc: "Attendance system using real-time facial recognition and AI.",
              tech: ["Python", "Flask", "YOLOv5"],
              type: "AI & Web"
            }
          ].map((project, index) => (
            <div key={index} className="bg-[#111] rounded-2xl border border-gray-800 overflow-hidden flex flex-col">
              <div className="h-40 md:h-48 bg-gray-900 flex items-center justify-center relative">
                <span className="text-4xl font-bold text-gray-800">{project.title.charAt(0)}</span>
                <div className="absolute top-3 right-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                  {project.type}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-black rounded border border-gray-800 text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col justify-center py-16 px-6 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Contact <span className="text-blue-500">Me</span></h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I'm open for collaborations. Feel free to reach out!
            </p>
            
            <div className="space-y-3">
              <a href="mailto:adrielbth01@gmail.com" className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-gray-800 text-xs md:text-sm">
                <span className="text-blue-500">📧</span> adrielbth01@gmail.com
              </a>
              <a href="https://wa.me/6285155353750" className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-gray-800 text-xs md:text-sm">
                <span className="text-green-500">💬</span> +62 851-5535-3750
              </a>
            </div>
          </div>

          <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800">
            <form className="space-y-4">
              <input placeholder="Name" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none" />
              <input placeholder="Email" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none" />
              <textarea rows={4} placeholder="Message" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none resize-none" />
              <button className="w-full bg-blue-600 py-3 rounded-lg font-bold text-sm">Send Message</button>
            </form>
          </div>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-gray-900 text-center text-gray-500 text-[10px] md:text-xs">
          © {new Date().getFullYear()} Adriel Bernhard Tanuhariono.
        </footer>
      </section>
    </main>
  );
}