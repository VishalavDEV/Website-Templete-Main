import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', name: 'ABOUT', href: 'about' },
    { num: '02', name: 'SERVICES', href: 'services' },
    { num: '03', name: 'STRATEGY', href: 'strategy' },
    { num: '04', name: 'PERFORMANCE', href: 'performance' },
    { num: '05', name: 'CASE STUDIES', href: 'case-studies' },
    { num: '06', name: 'TEAM', href: 'team' },
    { num: '07', name: 'SCALE', href: 'pricing' },
    { num: '08', name: 'FAQ', href: 'faq' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900 text-white shadow-xl py-3 border-b border-slate-800'
          : 'bg-[#FAF9F6] text-slate-900 py-4 border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Category Brand */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none rounded p-1 group"
          >
            <div className={`w-8 h-8 flex items-center justify-center font-mono font-bold text-xs tracking-tighter border transition-colors ${
              isScrolled
                ? 'bg-slate-800 text-emerald-400 border-slate-700 group-hover:bg-emerald-500 group-hover:text-slate-950'
                : 'bg-slate-900 text-white border-slate-800 group-hover:bg-slate-800'
            }`}>
              VX
            </div>
            <div className="flex flex-col">
              <span className={`text-sm font-extrabold tracking-tight font-sans leading-none ${
                isScrolled ? 'text-white' : 'text-slate-900'
              }`}>
                VERTEX
              </span>
              <span className={`text-[10px] font-mono tracking-widest uppercase mt-0.5 ${
                isScrolled ? 'text-emerald-400' : 'text-slate-500'
              }`}>
                STRATEGY & ADVISORY
              </span>
            </div>
          </button>

          {/* Center Editorial Links */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-xs font-mono tracking-wider transition-colors flex items-center space-x-1 py-1 border-b-2 ${
                    isActive
                      ? isScrolled
                        ? 'border-emerald-400 text-emerald-400 font-bold'
                        : 'border-slate-900 text-slate-900 font-bold'
                      : isScrolled
                        ? 'border-transparent text-slate-400 hover:text-white'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="opacity-50 text-[10px]">{link.num}</span>
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Live Availability & Intake CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Availability Indicator */}
            <div className={`hidden lg:flex items-center space-x-2 text-[11px] font-mono px-3 py-1.5 rounded border ${
              isScrolled
                ? 'bg-slate-800/80 border-slate-700 text-emerald-400'
                : 'bg-white border-slate-200 text-slate-700 shadow-2xs'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="uppercase text-[10px] tracking-wider font-semibold">AVAILABLE FOR NEW PROJECTS</span>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 border shadow-sm ${
                isScrolled
                  ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 border-emerald-400'
                  : 'bg-slate-900 text-white hover:bg-slate-800 border-slate-900'
              }`}
            >
              <span>01 — START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-emerald-600 font-bold uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden sm:inline">ONLINE</span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 border font-mono text-xs transition-colors ${
                isScrolled
                  ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700'
                  : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-6 pt-4 border-t border-slate-200/60 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 gap-1 font-mono text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`flex items-center justify-between px-4 py-3 text-left transition-colors border-l-2 ${
                    activeSection === link.href
                      ? 'border-slate-900 bg-slate-100 font-bold text-slate-900'
                      : 'border-transparent text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-slate-400 font-normal">{link.num} /</span>
                  <span className="font-semibold">{link.name}</span>
                </button>
              ))}

              <div className="pt-4 px-2">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center justify-center px-5 py-3.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
                >
                  <span>01 — START A PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-emerald-400" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
