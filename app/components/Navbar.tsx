"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  // Menangani error "Cannot find name 'scrollToContact'"
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Menutup menu setelah scroll
    }
  };

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
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    // Penambahan bg-black dan z-index tinggi agar tidak menumpuk dengan konten
    <nav className="fixed top-0 w-full z-[100] bg-black border-b border-white/10">
      <div className="w-full flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
        {/* Logo */}
        <div className="text-xl font-black tracking-tighter text-white">ADRIEL</div>

        {/* Desktop Menu - Ukuran teks diperkecil (text-xs) */}
        <ul className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
          {navLinks.map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            const isActive = activeSection === id;
            return (
              <li key={item}>
                <Link
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                  className={`transition-all duration-300 hover:text-blue-500 ${
                    isActive ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Tombol Burger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-white z-[130] p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* --- MOBILE MENU OVERLAY --- */}
        {/* Menggunakan bg-black pekat dan padding yang lebih rapi */}
        <div className={`fixed inset-0 bg-black z-[120] flex flex-col transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              const isActive = activeSection === id;
              return (
                <Link
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                  // Ukuran teks mobile diperkecil menjadi text-xl
                  className={`text-xl font-bold uppercase tracking-[0.2em] transition-all ${
                    isActive ? "text-blue-500 scale-105" : "text-white/70"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
            
            <button 
              onClick={scrollToContact}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-bold uppercase text-xs tracking-wider transition-transform active:scale-95"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;