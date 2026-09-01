import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Compass, Terminal, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['profile', 'missions', 'experience', 'systems', 'research', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Profile", href: "#profile" },
    { label: "Missions", href: "#missions" },
    { label: "Experience", href: "#experience" },
    { label: "Systems", href: "#systems" },
    { label: "Research", href: "#research" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs'
            : 'bg-white/80 backdrop-blur-xs py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Branding Tag & Initials */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-slate-900 text-white rounded font-mono-tech flex items-center justify-center font-bold text-xs tracking-wider group-hover:bg-sky-700 transition-colors shadow-xs">
              AS
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-heading font-bold text-slate-900 tracking-tight text-sm uppercase">
                  {PERSONAL_INFO.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse hidden sm:inline-block" />
              </div>
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest leading-none mt-0.5">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono-tech text-xs">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded transition-all duration-200 uppercase tracking-wider relative ${
                    isActive
                      ? 'text-sky-700 font-semibold bg-sky-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-sky-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Download CV & Telemetry indicator */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-2 text-[10px] font-mono-tech text-slate-400 border-r border-slate-200 pr-4">
              <Compass className="w-3.5 h-3.5 text-sky-600" />
              <span>59.9139° N, 10.7522° E</span>
            </div>
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-2 bg-slate-900 hover:bg-sky-700 text-white text-xs font-mono-tech uppercase tracking-wider px-4 py-2 rounded transition-all duration-200 shadow-xs hover:shadow-md active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* MOBILE: Menu Trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION PANEL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 text-white flex flex-col pt-24 px-6 pb-8 lg:hidden animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-sky-400">
              <Terminal className="w-4 h-4" />
              <span>MISSION CONTROL NAV // AS-2046</span>
            </div>
            <span className="text-[10px] font-mono-tech text-slate-500">OSLO, NO</span>
          </div>

          <nav className="flex flex-col space-y-4 my-auto font-heading font-semibold text-xl">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-slate-300 hover:text-sky-400 py-2 border-b border-slate-900 transition-colors"
              >
                <span className="flex items-center space-x-3">
                  <span className="text-xs font-mono-tech text-sky-500">0{idx + 1}</span>
                  <span className="uppercase tracking-wide">{item.label}</span>
                </span>
                <ArrowUpRight className="w-5 h-5 text-slate-600" />
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-800 space-y-4 font-mono-tech text-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </button>
            <div className="text-center text-[10px] text-slate-500 uppercase tracking-widest">
              Dr. Arin Solberg • Aerospace Systems Engineer
            </div>
          </div>
        </div>
      )}
    </>
  );
}
