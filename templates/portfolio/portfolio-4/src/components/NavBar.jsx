import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-[#fafafc]/80 backdrop-blur-md border-b border-zinc-150 py-5 px-6 md:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-[#262626] font-bold text-xs tracking-[0.25em] uppercase font-sans">
              {portfolioData.brand.siteName}
            </span>
          </a>

          {/* Right Hamburger icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-1.5 hover:text-zinc-600 transition-colors focus:outline-none"
          >
            <Menu size={20} className="stroke-[1.5]" />
          </button>
        </div>
      </header>

      {/* Full Nav Overlay Drawer with slide-in/fade animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#fafafc] flex flex-col justify-between p-8 md:p-16"
          >
            {/* Header in Overlay */}
            <div className="flex justify-between items-center w-full">
              <span className="text-[#262626] font-bold text-xs tracking-[0.25em] uppercase font-sans">
                {portfolioData.brand.siteName}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:text-zinc-600 transition-colors focus:outline-none"
              >
                <X size={20} className="stroke-[1.5]" />
              </button>
            </div>

            {/* Middle Nav Links */}
            <nav className="flex flex-col gap-6 md:gap-8 my-auto pl-4 md:pl-10">
              {portfolioData.navigation.map((item, idx) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="text-4xl md:text-6xl font-serif tracking-tight text-left block text-[#262626] hover:opacity-60 transition-opacity"
                  >
                    {item.label}
                    {isActive && <span className="inline-block w-2.5 h-2.5 bg-[#262626] rounded-full ml-4" />}
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom Footer Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-zinc-150 pt-8 text-[9px] font-sans tracking-widest uppercase font-bold text-zinc-400">
              <span>© {new Date().getFullYear()} CLARA OSWALD. ALL RIGHTS RESERVED.</span>
              <span>GET IN TOUCH // <a href={`mailto:${portfolioData.brand.email}`} className="text-[#262626] underline hover:no-underline">{portfolioData.brand.email}</a></span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
