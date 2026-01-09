import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">
      
      {/* ================= HOME SECTION ================= */}
      <section id="home" className="h-screen w-full snap-center flex flex-col md:flex-row items-center justify-center gap-10 px-6 max-w-7xl mx-auto">
        <div className="space-y-4 text-center md:text-left order-2 md:order-1">
          <h2 className="text-xl text-blue-500 tracking-widest">
            HELLO, MY NAME IS
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none">
            ADRIEL <br />
            <span className="text-gray-500 text-2xl md:text-4xl font-bold block mt-2">
              BERNHARD TANUHARIONO
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gray-700 my-6 blue-500-full mx-auto md:mx-0"></div>
          
          <p className="max-w-lg text-gray-400 text-lg">
            Computer Science Student at BINUS Online coloboration with Bank
            Central Asia as a PPTI Scholarship Awardee. Passionate about{" "}
            <span className="text-white font-bold">Backend</span> and{" "}
            <span className="text-white font-bold">Cyber Security</span>.
          </p>

          <div className="pt-6">
            <button className="border border-white px-8 py-3 blue-500-full hover:bg-white hover:text-black transition duration-300 font-bold">
              CONTACT ME
            </button>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-[400px] md:h-[500px] order-1 md:order-2 border-2 border-gray-800 blue-500-2xl overflow-hidden">
          <Image
            src="/main-image.png"
            alt="Profile Image Adriel"
            fill
            className="object-cover object-top origin-top scale-125"
          />
        </div> 
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="h-screen w-full snap-center flex flex-col justify-center py-10 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">About <span className="text-blue-500">Me</span></h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  Hi! I'm <span className="text-white font-semibold">Adriel Bernhard Tanuhariono</span>, 
                  a 4th-semester Computer Science student at BINUS Online Learning based in <span className="text-white">Sentul, West Java, Indonesia</span>.
                </p>
                <p>
                  I am currently part of the prestigious <span className="text-white">PPTI BCA Scholarship</span> program. 
                  My journey in tech is driven by curiosity, specifically in how systems work behind the scenes (<span className="text-white">Backend</span>) 
                  and how to secure them (<span className="text-white">Cyber Security</span>).
                </p>
                <p>
                  When I'm not coding or exploring Kali Linux, you can find me experimenting with <span className="text-white">Photography </span>
                  or learning about <span className="text-white">Machine Learning</span> models.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="bg-[#111] p-6 blue-500-xl border border-gray-800 hover:border-blue-500 transition duration-300 group">
                    <h3 className="text-white text-3xl font-bold mb-2 group-hover:scale-105 transition">04+</h3>
                    <p className="text-sm text-blue-500 uppercase tracking-widest">Semester</p>
                </div>

                <div className="bg-[#111] p-6 blue-500-xl border border-gray-800 hover:border-blue-500 transition duration-300 group">
                    <h3 className="text-white text-3xl font-bold mb-2 group-hover:scale-105 transition">05+</h3>
                    <p className="text-sm text-blue-500 uppercase tracking-widest">Projects Done</p>
                </div>

                <div className="bg-[#111] p-6 blue-500-xl border border-gray-800 hover:border-blue-500 transition duration-300 group">
                    <h3 className="text-white text-3xl font-bold mb-2 group-hover:scale-105 transition">20+</h3>
                    <p className="text-sm text-blue-500 uppercase tracking-widest">Git Repos</p>
                </div>

                <div className="bg-[#111] p-6 blue-500-xl border border-gray-800 hover:border-blue-500 transition duration-300 group">
                    <h3 className="text-white text-3xl font-bold mb-2 group-hover:scale-105 transition">24/7</h3>
                    <p className="text-sm text-blue-500 uppercase tracking-widest">Learning</p>
                </div>

            </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="min-h-screen w-full snap-start flex flex-col py-20 px-6 max-w-7xl mx-auto">

        <div className="mb-3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-2">My <span className="text-blue-500">Skills</span></h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                title: "Backend & Languages",
                skills: ["Python", "Java", "C", "C++", "SQL", "Go", "Node.js", "PHP"]
              },
              {
                title: "Cyber Security",
                skills: ["Linux (Kali)", "Network Analysis", "Wireshark", "Penetration Testing", "Burp Suite", "Cryptography", "Metasploit", "Nmap"]
              },
              {
                title: "Data & ML",
                skills: ["Pandas", "Scikit-Learn", "Data Visualization", "Jupyter", "NumPy", "Matplotlib", "BioPython", "Seaborn", "TensorFlow", "Pyplotlib", "Regression", "Random Forest"]
              },
              {
                title: "Web Dev",
                skills: ["Next.js", "Tailwind CSS", "HTML5/CSS3", "React", "TypeScript", "REST API"]
              },
              {
                title: "Tools & DevOps",
                skills: ["Git & GitHub", "Docker", "Linux (Ubuntu)", "VS Code", "Figma", "Postman", "Vim"]
              },
              {
                title: "Soft Skills",
                skills: ["Problem Solving", "Teamwork", "Adaptability", "Critical Thinking", "English", "Project Management", "Public Speaking", "Time Management", "Marketing", "Photography", "Sport", "Music"]
              }
            ].map((category, index) => (

              <div key={index} className="bg-[#111] p-8 blue-500-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group h-full">
                  
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-500 transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Container Tags: Kembali normal (wrap) tanpa scroll */}
                  <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-gray-900 border border-gray-700 blue-500-full text-sm text-gray-300 group-hover:border-blue-500/50 transition">
                          {skill}
                        </span>
                      ))}
                  </div>
              </div>

            ))}

        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="min-h-screen w-full snap-start flex flex-col py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-2">My <span className="text-blue-500">Projects</span></h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                backgroundImage: "/project-1.png",
                title: "EduTIA",
                desc: "EduTIA is an online learning platform dedicated to preparing Indonesian youth for the workforce with industry-relevant skills. We offer courses specifically designed to meet the demands of the local job market. Beyond training, we connect graduates directly with corporate partners to help them secure roles that match their specialties.",
                tech: ["Next.js", "PostgreSQL", "Prisma"],
                type: "Full Stack",
                githubLink: "https://github.com/leonardo-alexander/EduTIA",
                notionLink: "https://www.notion.so/29c76c253de88022b2b6ccb5ee1d453f?v=29c76c253de880308656000cccfa1dbd",
                demoLink: null
              },
              {
                title: "ATAIM",
                desc: "ATAIM is an attendance system that operates entirely through a camera-based interface. It utilizes real-time facial recognition technology to accurately identify and log individuals. Additionally, the system incorporates object detection to ensure a secure and efficient verification process.",
                tech: ["Jupyter", "Python", "Flask", "Dlib", "YOLOv5"],
                type: "Full Stack",
                githubLink: "https://github.com/AdrielBernhardT/Artificial-Intelligence/tree/main/ATAIM",
                notionLink: null,
                demoLink: null
              },
            ].map((project, index) => (
              <div key={index} className="bg-[#111] rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group flex flex-col overflow-hidden h-auto">
                  
                  {/* Bagian 1: Logic Gambar / Placeholder */}
                  <div className="h-48 w-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
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

                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300"></div>

                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-400 border border-blue-500/30 z-10">
                        {project.type}
                      </div>
                  </div>

                  {/* Bagian 2: Konten */}
                  <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs px-3 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800/50">
                        
                        {/* 1. GitHub Link */}
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                             <svg className="w-5 h-5 group-hover/link:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                             <span>Code</span>
                          </a>
                        )}

                        {/* 2. Notion Link (Docs) */}
                        {project.notionLink && (
                          <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                             <svg className="w-5 h-5 group-hover/link:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                             <span>Docs</span>
                          </a>
                        )}

                        {/* 3. Demo Link (Live) */}
                        {project.demoLink && (
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                             <svg className="w-5 h-5 group-hover/link:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                             <span>Live</span>
                          </a>
                        )}

                      </div>
                  </div>
              </div>
            ))}
        </div>
      </section>
      
      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="min-h-screen w-full snap-start flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto">
        
        {/* Judul Section */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-2">Contact <span className="text-blue-500">Me</span></h2>
          <div className="w-16 h-1 bg-gray-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Kolom Kiri: Info Kontak & Sosmed */}
            <div className="space-y-8">
                <h3 className="text-3xl font-bold text-white">Let's work <span className="text-gray-500">together!</span></h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I'm currently open for new opportunities, collaborations, or just a casual chat about technology. 
                  Feel free to reach out via email or connect with me on social media.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                    
                    {/* Email Card */}
                    <a href="mailto:adrielbth01@gmail.com" className="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Mail Me</p>
                            <p className="text-white font-medium group-hover:text-blue-500 transition-colors">adrielbth01@gmail.com</p>
                        </div>
                    </a>

                    {/* WhatsApp Card */}
                    <a href="https://wa.me/6285155353750" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">WhatsApp Me</p>
                            <p className="text-white font-medium group-hover:text-blue-500 transition-colors">+62 851-5535-3750</p>
                        </div>
                    </a>

                </div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <p className="text-gray-500 text-sm mb-4 tracking-widest uppercase">Follow Me</p>
                  <div className="flex gap-4">
                    
                    {/* GitHub */}
                    <a href="https://github.com/AdrielBernhardT" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/adriel-bernhard-tanuhariono-b81459279/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/driel_chen/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>

                  </div>
                </div>
            </div>

            {/* Kolom Kanan: Contact Form (Tampilan Saja) */}
            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <label className="text-sm text-gray-400">Subject</label>
                        <input type="text" placeholder="Project Collaboration" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Message</label>
                        <textarea rows={4} placeholder="Hi Adriel, I'd like to discuss..." className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/20">
                        Send Message
                    </button>
                </form>
            </div>

        </div>

        {/* Footer Kecil */}
        <div className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Adriel Bernhard Tanuhariono. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}