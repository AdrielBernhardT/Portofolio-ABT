"use client";

import { useState } from "react";
import Image from "next/image";
import mainImage from "./images/main-image.png";
import project1 from "./images/project-1.png";
import project2 from "./images/project-2.png";

export default function Home() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "06081cd6-7a4b-44eb-a323-d0edfefef440");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Message sent successfully.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <main className="w-full bg-black text-white">
      {/* ================= HOME SECTION ================= */}
      <section
        id="home"
        className="min-h-screen w-full md:snap-center flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 py-20 lg:py-0 max-w-7xl mx-auto"
      >
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-[400px] lg:w-[450px] lg:h-[550px] order-1 lg:order-2 border-2 border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={mainImage}
            alt="Profile Image Adriel"
            fill
            priority
            className="object-cover object-top origin-top scale-110 lg:scale-125"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4 text-center lg:text-left order-2 lg:order-1 flex-1">
          <h2 className="text-sm sm:text-base lg:text-xl text-blue-500 tracking-widest font-semibold">
            HELLO, MY NAME IS
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            ADRIEL <br className="hidden sm:block" />
            <span className="text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold block mt-1 sm:mt-2">
              BERNHARD TANUHARIONO
            </span>
          </h1>

          <div className="w-16 sm:w-24 h-1 bg-gray-700 my-4 sm:my-6 rounded-full mx-auto lg:mx-0"></div>

          <p className="max-w-md sm:max-w-lg mx-auto lg:mx-0 text-gray-400 text-base sm:text-lg leading-relaxed">
            Computer Science Student at <span className="text-blue-400">BINUS Online</span> collaboration with 
            <span className="text-blue-400 font-medium"> Bank Central Asia</span> as a PPTI Scholarship Awardee. 
            Passionate about <span className="text-white font-bold underline decoration-blue-500/50">Backend</span> and 
            <span className="text-white font-bold underline decoration-blue-500/50"> Cyber Security</span>.
          </p>

          <div className="pt-4 sm:pt-6">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold active:scale-95"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="min-h-screen w-full md:snap-center flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="mb-10 lg:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-5 text-gray-400 leading-relaxed text-base md:text-lg order-2 lg:order-1">
            <p>
              Hi! I'm{" "}
              <span className="text-white font-semibold">
                Adriel Bernhard Tanuhariono
              </span>
              , a 4th-semester Computer Science student at{" "}
              <span className="text-blue-400">BINUS Online</span> based in{" "}
              <span className="text-white">Sentul, West Java</span>.
            </p>
            <p>
              I am currently part of the prestigious{" "}
              <span className="text-white border-b border-blue-500/30">PPTI BCA Scholarship</span> program.
              My journey in tech is driven by curiosity, specifically in how
              systems work behind the scenes (
              <span className="text-white font-medium">Backend</span>) and how to secure
              them (<span className="text-white font-medium">Cyber Security</span>).
            </p>
            <p>
              When I'm not coding or exploring <span className="italic text-gray-300">Kali Linux</span>, 
              you can find me experimenting with{" "}
              <span className="text-white">Photography</span> or learning about{" "}
              <span className="text-white">Machine Learning</span> models.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
            {[
              { label: "Semester", value: "04+" },
              { label: "Skills", value: "20+" },
              { label: "Git Repos", value: "10+" },
              { label: "Learning", value: "24/7" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-[#111] p-5 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-center items-center lg:items-start"
              >
                <h3 className="text-white text-2xl md:text-4xl font-extrabold mb-1 group-hover:text-blue-500 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-medium text-center lg:text-left">
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
        className="h-screen w-full md:snap-center flex flex-col justify-center py-10 px-6 max-w-7xl mx-auto overflow-hidden"
      >
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
          {/* Hint Swipe untuk semua perangkat */}
          <p className="text-gray-500 text-[10px] mt-4 animate-pulse tracking-widest uppercase">
            ← Swipe Left/Right to Explore Categories →
          </p>
        </div>

        <div className="grid grid-flow-col grid-rows-2 overflow-x-auto pb-6 gap-4 snap-x snap-mandatory no-scrollbar h-auto max-h-[70vh]">
          {[
            {
              title: "Backend & Languages",
              skills: [
                "Python",
                "Java",
                "C",
                "C++",
                "SQL",
              ],
            },
            {
              title: "Cyber Security",
              skills: [
                "Linux (Kali)",
                "Network Analysis",
                "Wireshark",
                "Penetration Testing",
                "Burp Suite",
                "Cryptography",
                "Metasploit",
                "Nmap",
              ],
            },
            {
              title: "Data & ML",
              skills: [
                "Pandas",
                "Scikit-Learn",
                "Data Visualization",
                "Jupyter",
                "NumPy",
                "Matplotlib",
                "BioPython",
                "Seaborn",
                "TensorFlow",
                "Pyplotlib",
                "Regression",
                "Random Forest",
              ],
            },
            {
              title: "Web Dev",
              skills: [
                "Next.js",
                "Tailwind CSS",
                "HTML5/CSS3",
                "React",
                "TypeScript",
                "REST API",
              ],
            },
            {
              title: "Tools & DevOps",
              skills: [
                "Git & GitHub",
                "Docker",
                "Linux (Ubuntu)",
                "VS Code",
                "Figma",
              ],
            },
            {
              title: "Soft Skills",
              skills: [
                "Problem Solving",
                "Teamwork",
                "Adaptability",
                "Critical Thinking",
                "English",
                "Project Management",
                "Public Speaking",
                "Time Management",
                "Marketing",
                "Photography",
                "Sport",
                "Music",
              ],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[320px] lg:min-w-[380px] snap-start bg-[#0a0a0a] p-4 md:p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 group flex flex-col shadow-lg"
            >
              <h3 className="text-sm md:text-lg font-bold text-white mb-3 group-hover:text-blue-500 transition-colors uppercase tracking-wider">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 md:gap-2 content-start flex-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-[9px] md:text-[11px] text-gray-400 group-hover:text-gray-200 group-hover:border-gray-700 transition-all duration-300 whitespace-nowrap"
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
        className="h-auto w-full md:snap-start flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
          <p className="text-white text-xs mt-4 md:hidden animate-pulse tracking-widest uppercase">
            ← Swipe to see projects →
          </p>
        </div>

        <div className="flex overflow-x-auto pb-10 gap-6 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-2 xl:gap-8 md:overflow-visible md:pb-0">
          {[
            {
              backgroundImage: project1,
              title: "EduTIA",
              desc: "EduTIA is an online learning platform dedicated to preparing Indonesian youth for the workforce with industry-relevant skills. We connect graduates directly with corporate partners to secure roles that match their specialties.",
              tech: ["Next.js", "PostgreSQL", "Prisma"],
              type: "Full Stack",
              githubLink: "https://github.com/leonardo-alexander/EduTIA",
              notionLink: "https://www.notion.so/...",
            },
            {
              title: "ATAIM",
              desc: "An attendance system operating entirely through a camera-based interface. Utilizes real-time facial recognition and object detection to ensure a secure and efficient verification process.",
              tech: ["Python", "Flask", "Dlib", "YOLOv5"],
              type: "AI & Full Stack",
              githubLink: "https://github.com/AdrielBernhardT/...",
              notionLink: null,
            },
            {
              title: "LUMEO",
              desc: "LUMEO is a digital platform that offers a curated collection of movies, series, and entertainment content. It provides an intuitive interface for smooth browsing and streaming.",
              tech: ["Figma"],
              type: "UI/UX & Frontend",
              githubLink: null,
              notionLink: "https://descriptive-pie-f20.notion.site/Human-Computer-Interaction-29a5a90a0af580ee8d1be73fcd51d9b1",
            },
            {
              title: "FIMA",
              desc: "FIMA is a comprehensive financial management application designed to streamline personal budgeting and expense tracking through an intuitive interface and real-time analytics.",
              tech: ["Figma"],
              type: "UI/UX & Frontend",
              githubLink: null,
              notionLink: "https://descriptive-pie-f20.notion.site/Entrepreneur-Prototyping-2ed5a90a0af580cdb896d87baa22b4e9",
            },
            {
              backgroundImage: project2,
              title: "PALORANT",
              desc: "Palorant is a fun mini project inspired by Valorant, designed to showcase character abilities and interactions through an engaging web interface.",
              tech: ["Figma", "HTML", "CSS", "JavaScript"],
              type: "UI/UX & Frontend",
              githubLink: "https://github.com/AdrielBernhardT/Human-Computer-Interaction/tree/main/Project%20Lab",
              notionLink: "https://www.figma.com/design/CT7GbEhedIFBminRRL9mx4/HCI-Lab-Figma?t=x64y4LJOa5pGRGyA-1",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="min-w-[85%] sm:min-w-[300px] md:min-w-0 w-full lg:max-w-none snap-center bg-[#111] rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 group flex flex-col overflow-hidden h-full shadow-lg"
            >
              {/* Bagian 1: Image */}
              <div className="h-44 sm:h-48 w-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                {project.backgroundImage ? (
                  <Image
                    src={project.backgroundImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                    <span className="text-gray-700 font-black text-6xl group-hover:text-blue-500/20 transition-colors duration-500">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400 border border-blue-500/30 z-10">
                  {project.type}
                </div>
              </div>

              {/* Bagian 2: Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-3 py-1 bg-gray-950 text-gray-400 rounded-md border border-gray-800 group-hover:border-gray-700 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto pt-6 border-t border-gray-800/50">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-white transition-all uppercase tracking-wider">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      Code
                    </a>
                  )}
                  {project.notionLink && (
                    <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-white transition-all uppercase tracking-wider">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      Docs
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section 
        id="contact" 
        className="min-h-screen w-full md:snap-start flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact <span className="text-blue-500">Me</span></h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kolom Kiri: Info Kontak & Sosmed */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              Let's work <span className="text-gray-500">together!</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm currently open for new opportunities, collaborations, or just
              a casual chat about technology. Feel free to reach out via email
              or connect with me on social media.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:adrielbth01@gmail.com"
                className="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-blue-500 transition-colors">
                    Mail Me
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/6285155353750"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-blue-500 transition-colors">
                    WhatsApp Me
                  </p>
                </div>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <p className="text-gray-500 text-sm mb-4 tracking-widest uppercase">
                Follow Me
              </p>
              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/AdrielBernhardT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/adriel-bernhard-tanuhariono-b81459279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/driel_chen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Contact Form*/}
          <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 order-1 lg:order-2">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-widest">Name</label>
                  <input type="text" name="name" required placeholder="Your Name" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</label>
                  <input type="email" name="email" required placeholder="Your Email" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase font-bold tracking-widest">Message</label>
                <textarea name="message" required rows={4} placeholder="How can I help you?" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Tampilkan Status Pengiriman */}
              {result && (
                <p className={`text-center text-sm font-medium mt-4 ${result.includes("Success") ? "text-green-500" : "text-red-500"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Kecil */}
        <div className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Adriel Bernhard Tanuhariono. All
            rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}