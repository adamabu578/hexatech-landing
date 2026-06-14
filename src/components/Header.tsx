"use client";
import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolios", "blog"];
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50 relative bg-white">
      {/* Main Header */}
      <div className="bg-white px-6 lg:px-12 py-4 flex items-center justify-between border-b border-slate-100 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/hexatech-logo.png" alt="Hexatech Logo" className="h-10 w-auto" />
        </div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold">
          {["home", "about", "services", "portfolios", "blog"].map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              className={`relative group transition-colors ${activeSection === section ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
            >
              {section.toUpperCase()}
              {section !== 'home' && (
                <span 
                  className={`absolute -bottom-[26px] left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 origin-left ${activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                ></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded text-[11px] font-bold tracking-wider flex items-center gap-2 uppercase">
            Get a Quote <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Toggle */}
        <button 
          className="lg:hidden text-slate-900 ml-6"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Dropdown Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 z-50 p-6 flex flex-col gap-4">
          <a href="#home" className="text-blue-600 text-sm font-bold uppercase" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-blue-600 text-slate-800 text-sm font-bold uppercase" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" className="hover:text-blue-600 text-slate-800 text-sm font-bold uppercase" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#portfolios" className="hover:text-blue-600 text-slate-800 text-sm font-bold uppercase" onClick={() => setIsMobileMenuOpen(false)}>Portfolios</a>
          <a href="#blog" className="hover:text-blue-600 text-slate-800 text-sm font-bold uppercase" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
        </div>
      )}
    </header>
  );
}
