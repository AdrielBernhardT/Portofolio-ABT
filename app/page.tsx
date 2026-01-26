"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import mainImage from "./images/main-image.png";
import project1 from "./images/project-1.png";
import project2 from "./images/project-2.png";
import project3 from "./images/project-3.png";
import brownsugar from "./images/camera-brownsugar.jpg";
import padel from "./images/camera-padel.jpg";
import lasem from "./images/camera-lasem.png";
import pelayanan1 from "./images/camera-pelayanan1.jpg";
import pelayanan2 from "./images/camera-pelayanan2.jpg";
import batangan from "./images/camera-batangan.png";
import bali from "./images/camera-bali.png";
import semarang from "./images/camera-semarang.png";
import fisher from "./images/camera-fisher.jpg";

// DATABASE PROJECTS
const ALL_PROJECTS = [
  // --- Programming ---
  {
    category: "Programming",
    backgroundImage: project1,
    title: "EduTIA",
    desc: "EduTIA is an online learning platform dedicated to preparing Indonesian youth for the workforce.",
    tech: ["Next.js", "PostgreSQL"],
    type: "Full Stack",
    githubLink: "https://github.com/leonardo-alexander/EduTIA",
    notionLink: "https://edutia.notion.site/EduTIA-Documentation-2a576c253de880bdadb2ebb8a9436012?pvs=143",
  },
  {
    category: "Programming",
    backgroundImage: project2,
    title: "PALORANT",
    desc: "Valorant inspired mini-project showcasing character abilities with interactive web interface.",
    tech: ["HTML", "JS", "CSS"],
    type: "Frontend",
    githubLink: "https://github.com/AdrielBernhardT/Human-Computer-Interaction/tree/main/Project%20Lab",
    notionLink: "https://www.figma.com/design/CT7GbEhedIFBminRRL9mx4/HCI-Lab-Figma?t=x64y4LJOa5pGRGyA-1",
  },
  {
    category: "Programming",
    backgroundImage: project3,
    title: "LUMEO",
    desc: "Digital platform for streaming movies and series with intuitive smooth browsing.",
    tech: ["Figma", "UI/UX"],
    type: "UI Design",
    githubLink: null,
    notionLink: "https://descriptive-pie-f20.notion.site/Human-Computer-Interaction-29a5a90a0af580ee8d1be73fcd51d9b1",
  },
  {
    category: "Programming",
    title: "ATAIM",
    desc: "Attendance system using camera-based interface and real-time facial recognition.",
    tech: ["Python", "YOLOv5"],
    type: "AI & ML",
    githubLink: "https://github.com/AdrielBernhardT/Artificial-Intelligence/tree/main/ATAIM",
    notionLink: null,
  },
  {
    category: "Programming",
    title: "FIMA",
    desc: "Comprehensive financial management to streamline personal budgeting and expense tracking through real-time analytics.",
    tech: ["Figma"],
    type: "UI/UX & Frontend",
    githubLink: null,
    notionLink: "https://descriptive-pie-f20.notion.site/Entrepreneur-Prototyping-2ed5a90a0af580cdb896d87baa22b4e9",
  },
  // --- Photography ---
  {
    category: "Photography",
    title: "Brown Sugar Semarang",
    desc: "Street photography session capturing the vibrant essence of Semarang's urban life.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "Street",
    backgroundImage: brownsugar, 
  },
  {
    category: "Photography",
    title: "Padel Community",
    desc: "Sport photography session capturing high intensity moments.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "Sport",
    backgroundImage: padel, 
  },
  {
    category: "Photography",
    title: "Lasem Heritage",
    desc: "Exploring the cultural richness of Lasem through vibrant street photography.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "Street",
    backgroundImage: lasem, 
  },
  {
    category: "Photography",
    title: "Church Serve Photography",
    desc: "Capturing memorable moments during church events and services.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "Serve",
    backgroundImage: pelayanan2, 
  },
  {
    category: "Photography",
    title: "Fisher Occupation",
    desc: "Documenting the daily life and work of fishermen in their natural environment.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "UMKM",
    backgroundImage: fisher, 
  },
  {
    category: "Photography",
    title: "Old Town Semarang",
    desc: "Exploring Semarang's rich heritage through captivating old town photography.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "Vintage",
    backgroundImage: semarang, 
  },
  {
    category: "Photography",
    title: "Church Ambience Photography",
    desc: "Capturing memorable moments during church events and services.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "Serve",
    backgroundImage: pelayanan1, 
  },
  {
    category: "Photography",
    title: "Vitamin Sea",
    desc: "Beach photography session capturing the essence of seaside relaxation.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "Nature",
    backgroundImage: batangan, 
  },
  {
    category: "Photography",
    title: "Island of Gods",
    desc: "Exploring Bali's scenic beauty through captivating island photography.",
    tech: ["Nikon Z30", "Nikkor 35mm"],
    type: "Nature",
    backgroundImage: bali, 
  },
];

export default function Home() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Programming");
  const [clickedPhotoIndex, setClickedPhotoIndex] = useState<number | null>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);

  const projectContainerRef = useRef<HTMLDivElement>(null);

  const originalProjects = ALL_PROJECTS.filter(p => p.category === activeCategory);
  const loopedProjects = [...originalProjects, ...originalProjects];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setClickedPhotoIndex(null);
    setActiveIndex(0); // Reset dot ke awal
    // Reset scroll ke awal
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollLeft = 0;
    }
  };

  // Logic Scroll Mouse (Wheel)
  useEffect(() => {
    const container = projectContainerRef.current;
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      };
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, [activeCategory]);

  // LOGIC INFINITE SCROLL (TELEPORT) PRESISI TINGGI
  const handleScroll = () => {
    const container = projectContainerRef.current;
    if (container) {
      const scrollPosition = container.scrollLeft;
      
      const cards = container.children;
      if (cards.length < 2) return;

      const itemWidth = (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;

      const singleSetWidth = itemWidth * originalProjects.length;

      if (scrollPosition >= singleSetWidth - 5) {
        container.scrollLeft = scrollPosition - singleSetWidth;
      } 
      else if (scrollPosition <= 0) {
        container.scrollLeft = singleSetWidth + scrollPosition;
      }

      // LOGIC TRACKER
      const rawIndex = Math.round(Math.abs(scrollPosition) / itemWidth);
      
      setActiveIndex(rawIndex % originalProjects.length);
    }
  };

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
              { label: "Git Repos", value: "05+" },
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

      {/* ================= TIMELINE SECTION ================= */}
      <section
        id="timeline"
        className="min-h-screen w-full flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-12 md:pl-20"> 
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            My <span className="text-blue-500">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-800"></div>
          <div className="space-y-12">
            {[
              {
                year: "2025 - Present",
                title: "Full Stack & Projects",
                place: "Personal & Academic",
                desc: "Building portfolio projects using Next.js. Deepening knowledge in Cyber Security (Kali Linux) and Machine Learning.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                ),
              },
              {
                year: "2024 - 2026",
                title: "University & Growth",
                place: "BINUS Online & PPTI BCA",
                desc: "Progressing through and focused on Algorithm Programming, Cyber Security, and Machine Learning. Active in exploring new tech stacks like React, Tailwind, and Cyber Tools using Kali Linux.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                ),
              },
              {
                year: "2024",
                title: "The Beginning",
                place: "BCA Learning Institute, Sentul City, West Java",
                desc: "Awarded the PPTI BCA Scholarship, marking the start of my formal education in Computer Science. Joined BINUS Online to pursue my Bachelor's degree.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                ),
              },
              {
                year: "2023",
                title: "Marketing Intern at Vision Allianz",
                place: "Pluit, Jakarta and Semarang, Central Java",
                desc: "Gained valuable professional exposure by assisting in strategic marketing initiatives. Developed strong interpersonal and communication skills while learning how to bridge the gap between business requirements and client needs in a corporate environment.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                ),
              },
              {
                year: "2022-2023",
                title: "Academic Foundation",
                place: "BINUS Kemanggisan, Jakarta",
                desc: "Adopted a rapid-learning mindset to absorb fundamental Computer Science concepts. Focused on mastering the basics of C++, algorithm logic, and computational thinking to build a rock-solid foundation for future software engineering challenges.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                ),
              },
              {
                year: "2022",
                title: "Winner of National Science Olympiad (OSN-K)",
                place: "Semarang District, Central Java",
                desc: "Demonstrated exceptional problem-solving skills by securing a victory at the District Level. Competed against top talent in Competitive Programming and Logic, successfully qualifying for the Provincial Level (OSN-P) in the highly competitive Informatics sector.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="relative flex items-start">

                <div className="absolute left-8 transform -translate-x-1/2 mt-1 w-10 h-10 bg-blue-600 rounded-full border-4 border-[#0a0a0a] z-10 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    {item.icon}
                </div>

                <div className="ml-20 w-full">
                  <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-1 block">
                            {item.year}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                            </h3>
                        </div>
                        <span className="text-gray-500 text-xs font-semibold uppercase mt-2 md:mt-0 tracking-wider md:text-right">
                        {item.place}
                        </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
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
        className="min-h-screen w-full md:snap-start flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="flex justify-center gap-8 mb-8">
            {["Programming", "Photography"].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`relative pb-2 text-sm md:text-lg tracking-wider transition-all duration-300 ${
                  activeCategory === category 
                    ? "text-white font-bold" 
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {category}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 ${
                   activeCategory === category ? "scale-x-100" : "scale-x-0"
                }`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS CONTAINER */}
        <div 
          ref={projectContainerRef}
          onScroll={handleScroll}
          style={{ scrollBehavior: 'auto' }}
          className="flex overflow-x-auto pb-12 gap-6 no-scrollbar xl:gap-8 px-4 md:px-0 items-center"
        >
          {loopedProjects.map((project, index) => {
            const isPhotography = project.category === "Photography";
            const isClicked = clickedPhotoIndex === index;

            return (
              <div
                key={`${index}-${project.title}`}
                onClick={() => isPhotography && setClickedPhotoIndex(isClicked ? null : index)}
                className={`shrink-0 relative w-[90vw] sm:w-[500px] md:w-[600px] aspect-[4/3] md:aspect-video bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 group shadow-2xl ${
                  isPhotography ? "cursor-pointer" : ""
                }`}
              >
                {/* Image */}
                {project.backgroundImage ? (
                  <Image
                    src={project.backgroundImage}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                      !isPhotography || isClicked ? "opacity-30" : "opacity-100"
                    }`}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />
                )}

                {/* Content */}
                <div 
                  className={`absolute inset-0 flex flex-col justify-center items-center text-center p-5 md:p-8 z-10 transition-opacity duration-300 ${
                    isPhotography && !isClicked ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                    {project.type}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-2 md:mb-4 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm md:text-base max-w-md line-clamp-2 mb-4 md:mb-6 drop-shadow-md">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-2" onClick={(e) => e.stopPropagation()}>
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-white text-black font-bold rounded-full text-xs md:text-sm hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 flex items-center gap-2"
                      >
                        Code
                      </a>
                    )}
                    {project.notionLink && (
                      <a 
                        href={project.notionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-800/80 backdrop-blur-md text-white border border-gray-600 font-bold rounded-full text-xs md:text-sm hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-105 flex items-center gap-2"
                      >
                        Docs
                      </a>
                    )}
                  </div>
                  {isPhotography && !isClicked && (
                     <div className="absolute bottom-4 animate-bounce text-xs text-white/50 tracking-widest uppercase pointer-events-none">
                       Tap to view details
                     </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* DYNAMIC DOTS INDICATOR */}
        <div className="flex justify-center flex-wrap gap-2 mt-4 px-4 md:px-10">
            {originalProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                   if(projectContainerRef.current) {
                      const container = projectContainerRef.current;
                      const cards = container.children;
                      if(cards.length > 1) {
                        const itemWidth = (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;

                        container.scrollTo({ 
                          left: index * itemWidth, 
                          behavior: 'smooth' 
                        });
                      }
                   }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-white scale-125" : "bg-gray-700 hover:bg-gray-500"
                }`}
              />
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