import React, { useState } from 'react';

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="hero-top-header w-full relative z-50 pt-6 sm:pt-8 md:pt-10">
      <div className="w-full flex items-center justify-between gap-4">
        
        {/* Brand Title & Subtitle */}
        <a href="#hero" className="hero-brand flex flex-col text-left group no-underline z-50">
          <h1 className="brand-title font-serif text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight group-hover:text-[#c88a58] transition-colors">
            New House
          </h1>
          <span className="brand-sub text-[10px] sm:text-xs text-neutral-300 font-mono tracking-wide mt-0.5">
            строительство элитных домов
          </span>
        </a>

        {/* Desktop Minimalist Nav Links (Hidden on < 768px) */}
        <nav className="hero-nav hidden md:flex items-center gap-6 lg:gap-8 bg-[rgba(12,12,12,0.75)] backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full shadow-lg">
          <div className="nav-dropdown-item relative group">
            <a href="#about" className="h-nav-link text-xs lg:text-sm font-semibold text-white hover:text-[#c88a58] transition-colors flex items-center gap-1">
              About <span className="nav-arrow text-[10px] text-[#c88a58]">▾</span>
            </a>
            <div className="h-dropdown-menu absolute top-full left-0 mt-2 w-48 bg-[#0c0c0c]/95 backdrop-blur-xl border border-[#c88a58]/40 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl z-50">
              <a href="#about" className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-[#c88a58]/20 transition-colors">Philosophy & Vision</a>
              <a href="#materials" className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-[#c88a58]/20 transition-colors">Materials & Craft</a>
              <a href="#about" className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-[#c88a58]/20 transition-colors">Architectural Team</a>
            </div>
          </div>

          <div className="nav-dropdown-item relative group">
            <a href="#portfolio" className="h-nav-link text-xs lg:text-sm font-semibold text-white hover:text-[#c88a58] transition-colors flex items-center gap-1">
              Villas <span className="nav-arrow text-[10px] text-[#c88a58]">▾</span>
            </a>
            <div className="h-dropdown-menu absolute top-full left-0 mt-2 w-48 bg-[#0c0c0c]/95 backdrop-blur-xl border border-[#c88a58]/40 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl z-50">
              <a href="#portfolio" className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-[#c88a58]/20 transition-colors">Lakefront Pavilions</a>
              <a href="#portfolio" className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-[#c88a58]/20 transition-colors">Alpine Cantilevers</a>
              <a href="#portfolio" className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-[#c88a58]/20 transition-colors">Forest Estates</a>
            </div>
          </div>

          <a href="#materials" className="h-nav-link text-xs lg:text-sm font-semibold text-white hover:text-[#c88a58] transition-colors">
            Materials
          </a>
          <a href="#configurator" className="h-nav-link text-xs lg:text-sm font-semibold text-white hover:text-[#c88a58] transition-colors">
            Configurator
          </a>
          <a href="#contact" className="h-nav-link text-xs lg:text-sm font-semibold text-white hover:text-[#c88a58] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Actions: Desktop vs Mobile */}
        <div className="flex items-center gap-3">
          {/* Desktop Right Box */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              className="nh-theme-toggle bg-[rgba(200,138,88,0.15)] border border-[#c88a58] text-white font-mono text-xs font-bold px-3 py-1.5 rounded-full hover:bg-[#c88a58] hover:text-black transition-all cursor-pointer flex items-center gap-1.5" 
              onClick={toggleTheme} 
              title="Toggle Light / Dark Mode"
              id="nhThemeToggle"
            >
              <span>{isDarkMode ? '☀️' : '🌙'}</span>{' '}
              <span>{isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}</span>
            </button>
            <div className="hero-year-tag font-mono text-sm font-bold text-neutral-300 tracking-wider">
              2018
            </div>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger Icon */}
          <div className="flex md:hidden items-center gap-2 z-50">
            <button 
              className="p-2 rounded-lg bg-black/50 border border-white/10 text-sm text-white cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            <button
              className="p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white cursor-pointer flex flex-col justify-center items-center gap-1.5 w-10 h-10 hover:border-[#c88a58] transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Navigation Menu"
            >
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-0 pt-24 pb-8 px-6 bg-[#0c0c0c]/98 backdrop-blur-2xl border-b border-[#c88a58]/40 shadow-2xl z-40 transition-all">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-base font-serif font-bold text-white hover:text-[#c88a58] transition-colors py-2 border-b border-neutral-800 flex items-center justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About Atelier</span>
              <span className="text-[#c88a58] text-xs">→</span>
            </a>
            <a
              href="#portfolio"
              className="text-base font-serif font-bold text-white hover:text-[#c88a58] transition-colors py-2 border-b border-neutral-800 flex items-center justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Villa Portfolio</span>
              <span className="text-[#c88a58] text-xs">→</span>
            </a>
            <a
              href="#materials"
              className="text-base font-serif font-bold text-white hover:text-[#c88a58] transition-colors py-2 border-b border-neutral-800 flex items-center justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Tactile Materials Lab</span>
              <span className="text-[#c88a58] text-xs">→</span>
            </a>
            <a
              href="#configurator"
              className="text-base font-serif font-bold text-white hover:text-[#c88a58] transition-colors py-2 border-b border-neutral-800 flex items-center justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>BIM Configurator HUD</span>
              <span className="text-[#c88a58] text-xs">→</span>
            </a>
            <a
              href="#contact"
              className="text-base font-serif font-bold text-white hover:text-[#c88a58] transition-colors py-2 border-b border-neutral-800 flex items-center justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>VIP Consultation</span>
              <span className="text-[#c88a58] text-xs">→</span>
            </a>

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>EST. 2018 • SWISS ARCHITECTURE</span>
              <span className="text-[#c88a58]">ISO-14001</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
