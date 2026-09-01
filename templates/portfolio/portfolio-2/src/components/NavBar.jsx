import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      
      const sections = portfolioData.navigation.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#05070f]/90 backdrop-blur-md border-b border-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#4da6ff]/10 border border-[#4da6ff]/20 flex items-center justify-center font-bold text-[#4da6ff] text-sm tracking-wide group-hover:bg-[#4da6ff]/20 transition-colors">
            {portfolioData.brand.logoText}
          </div>
          <span className="text-white font-semibold text-sm tracking-widest uppercase font-sans">
            {portfolioData.brand.siteName}
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {portfolioData.navigation.map((item, idx) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={idx}
                href={item.href}
                className={`text-[11px] font-sans tracking-widest uppercase font-bold transition-all relative py-1.5 ${
                  isActive ? 'text-[#4da6ff]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4da6ff] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Let's Talk CTA (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="glow-btn px-6 py-2 rounded-full bg-[#4da6ff] text-slate-950 text-xs font-sans tracking-widest uppercase font-bold flex items-center gap-1.5 hover:bg-[#3393f2] transition-colors"
          >
            Let's Talk <ArrowRight size={13} />
          </a>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none p-1.5"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#05070f]/95 border-b border-slate-900 px-6 py-6 flex flex-col gap-5 absolute top-full left-0 z-50">
          {portfolioData.navigation.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-sans tracking-widest uppercase font-bold text-slate-300 hover:text-white py-1 block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2.5 rounded-full bg-[#4da6ff] text-slate-950 text-xs font-sans tracking-widest uppercase font-bold flex items-center justify-center gap-1.5 mt-2"
          >
            Let's Talk <ArrowRight size={13} />
          </a>
        </div>
      )}
    </header>
  );
}
