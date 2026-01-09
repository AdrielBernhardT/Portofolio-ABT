"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    navLinks.forEach((item) => {
      const id = item.toLowerCase().replace(" ", "-");
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  // --- FUNGSI BARU UNTUK HANDLE CLICK ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    // 1. Mencegah perilaku default loncat langsung (jump)
    e.preventDefault();

    // 2. Cari elemen tujuan
    const element = document.getElementById(id);

    // 3. Scroll ke elemen tersebut dengan smooth
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="w-full flex justify-center items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="absolute left-6 text-4xl font-extrabold tracking-wider text-white">
          ADRIEL
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            const isActive = activeSection === id;

            return (
              <li key={item}>
                <Link 
                  href={`#${id}`}
                  scroll={false} // Next.js scroll dimatikan
                  onClick={(e) => handleScroll(e, id)} // Kita handle scroll sendiri di sini
                  className={`transition duration-300 pb-1 ${
                    isActive 
                      ? "text-white border-b-2 border-blue-500" 
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="md:hidden text-white absolute right-6">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;