import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full bg-[#f5f5fb]/95 backdrop-blur-sm border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#e74c3c] text-white flex items-center justify-center font-black text-sm tracking-tight">
            S
          </div>
          <span className="text-[#2b2b2b] font-black text-sm tracking-widest uppercase font-sans">
            {portfolioData.brand.siteName}
          </span>
        </a>

        {/* Navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {portfolioData.navigation.map((item, idx) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={idx}
                href={item.href}
                className={`text-[10px] font-sans tracking-widest uppercase font-black transition-colors ${
                  isActive ? 'text-[#e74c3c]' : 'text-[#2b2b2b]/60 hover:text-[#2b2b2b]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#2b2b2b] p-1.5 focus:outline-none"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden w-full bg-[#f5f5fb] border-b border-zinc-200 px-6 py-6 flex flex-col gap-4 absolute top-full left-0 z-50">
          {portfolioData.navigation.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-sans tracking-widest uppercase font-black text-[#2b2b2b]/70 hover:text-[#e74c3c] py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
