import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { gradientData } from '../../data/portfolio/gradientData';

export default function NavBarGradient() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-40 bg-transparent py-5 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => handleScrollTo('home')}
          className="flex items-center gap-2 text-white font-extrabold text-lg tracking-wider uppercase bg-transparent border-none cursor-pointer focus:outline-none"
        >
          {gradientData.brand.logoText}
        </button>

        {/* Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {gradientData.navigation.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScrollTo(item.target)}
              className="text-xs font-sans tracking-widest uppercase font-bold text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA (Get in Touch) */}
        <div className="hidden md:block">
          <button
            onClick={() => handleScrollTo('contact')}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-black font-extrabold text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer focus:outline-none border-none"
          >
            Get in Touch
            <div className="w-5 h-5 rounded-full bg-[#ff5722] flex items-center justify-center text-white">
              <ArrowUpRight size={12} />
            </div>
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1.5 focus:outline-none bg-transparent border-none cursor-pointer"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#141414]/98 border-b border-zinc-900 px-6 py-6 flex flex-col gap-4 absolute top-full left-0 z-50">
          {gradientData.navigation.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScrollTo(item.target)}
              className="text-left text-sm font-sans tracking-wide font-bold py-2 block text-zinc-300 hover:text-white cursor-pointer bg-transparent border-none focus:outline-none"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full text-center py-3 bg-[#ff5722] text-white font-extrabold text-xs tracking-wide uppercase mt-4 rounded-none cursor-pointer focus:outline-none border-none"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
