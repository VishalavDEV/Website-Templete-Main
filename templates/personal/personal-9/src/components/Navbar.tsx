import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-gray-800 shadow-sm py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs py-3'
          : darkMode
            ? 'bg-[#0B0F17] border-b border-gray-800/80 py-4'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#home"
          id="brand-logo-link"
          className="flex items-center gap-3 group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            AM
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`font-bold text-sm sm:text-base tracking-tight leading-none uppercase ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              ARJUN MEHTA
            </span>
            <span className="text-[11px] text-gray-400 font-medium tracking-normal mt-0.5">
              AI Engineer & Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium" aria-label="Main Navigation">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={e => scrollToSection(e, link.href)}
                className={`relative py-1 text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                    : darkMode
                      ? 'text-gray-400 hover:text-gray-200'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume CTA & Theme Toggle) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="resume-nav-btn"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold tracking-tight transition-all duration-200 cursor-pointer active:scale-95 shadow-sm shadow-indigo-600/20"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-gray-800 border-gray-700 text-amber-300 hover:bg-gray-700'
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-xs'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl border ${
              darkMode
                ? 'bg-gray-800 border-gray-700 text-amber-300'
                : 'bg-white border-gray-200 text-gray-600 shadow-xs'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              darkMode
                ? 'bg-gray-800 border-gray-700 text-gray-200'
                : 'bg-white border-gray-200 text-gray-700 shadow-xs'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden px-4 pt-3 pb-6 border-b transition-all ${
            darkMode
              ? 'bg-[#0B0F17] border-gray-800 text-white'
              : 'bg-white border-gray-200 text-gray-900 shadow-lg'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={e => scrollToSection(e, link.href)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold ${
                  activeSection === link.id
                    ? darkMode
                      ? 'bg-indigo-950/60 text-indigo-400 font-bold'
                      : 'bg-indigo-50 text-indigo-600 font-bold'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
