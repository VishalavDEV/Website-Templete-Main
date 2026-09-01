import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { agencyData } from '../data/agencyData';

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-900/80 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-[#3ecf6e]/10 border border-[#3ecf6e]/30 flex items-center justify-center font-black text-[#3ecf6e] text-xs tracking-wider">
            {agencyData.brand.logoText}
          </div>
          <span className="text-white font-black text-sm tracking-wider uppercase">
            {agencyData.brand.siteName}
          </span>
        </Link>

        {/* Navigation links (Desktop - Pill shape active style) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-2 py-1.5 rounded-full">
          {agencyData.navigation.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide font-medium transition-all ${
                isActiveRoute(item.path)
                  ? 'bg-zinc-800 text-[#3ecf6e]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA (Get in Touch) */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-[#3ecf6e] hover:bg-[#34b65f] text-black font-extrabold text-xs tracking-wide uppercase transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-400 hover:text-white p-1.5 focus:outline-none"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden w-full bg-[#0a0a0a]/95 border-b border-zinc-900 px-6 py-6 flex flex-col gap-4 absolute top-full left-0 z-50">
          {agencyData.navigation.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-sans tracking-wide font-bold py-2 block ${
                isActiveRoute(item.path) ? 'text-[#3ecf6e]' : 'text-zinc-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 bg-[#3ecf6e] text-black font-extrabold text-xs tracking-wide uppercase mt-4 rounded-none"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
