import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { editorialData } from '../data/editorialData';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbfbfb]/90 backdrop-blur-md border-b border-zinc-200/50 py-5 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo (Elegant Script Font Style) */}
        <button 
          onClick={() => handleScrollTo('home')}
          className="font-serif-italic text-2xl text-black hover:text-zinc-600 transition-colors bg-transparent border-none cursor-pointer focus:outline-none"
        >
          {editorialData.brand.logoText}
        </button>

        {/* Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {editorialData.navigation.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScrollTo(item.target)}
              className="text-xs font-sans tracking-widest uppercase font-bold text-zinc-500 hover:text-black transition-colors cursor-pointer bg-transparent border-none focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black p-1.5 focus:outline-none bg-transparent border-none cursor-pointer"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#fbfbfb] border-b border-zinc-200 px-6 py-6 flex flex-col gap-4 absolute top-full left-0 z-50">
          {editorialData.navigation.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScrollTo(item.target)}
              className="text-left text-sm font-sans tracking-wide font-bold py-2 block text-zinc-600 hover:text-black cursor-pointer bg-transparent border-none focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
