"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk burger menu

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
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Tutup menu setelah klik di mobile
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="w-full flex justify-between items-center px-6 py-5 max-w-7xl mx-auto relative">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-black tracking-tighter text-white">
          ADRIEL
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          {navLinks.map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            const isActive = activeSection === id;

            return (
              <li key={item}>
                <Link
                  href={`#${id}`}
                  scroll={false}
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

        {/* Burger Button (Mobile Only) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none z-[110]"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}>
          {navLinks.map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            const isActive = activeSection === id;

            return (
              <Link
                key={item}
                href={`#${id}`}
                onClick={(e) => handleScroll(e, id)}
                className={`text-3xl font-black uppercase tracking-tighter transition-all ${
                  isActive ? "text-blue-500 scale-110" : "text-white/50"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;