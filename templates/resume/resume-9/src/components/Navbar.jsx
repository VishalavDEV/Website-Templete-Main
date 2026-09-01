import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Search, FileText } from 'lucide-react';
import { profileData } from '../data/researchData';

export default function Navbar({ onOpenCV, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['profile', 'research', 'projects', 'experience', 'expertise', 'publications', 'education', 'teaching', 'contact'];
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

  const navLinks = [
    { label: 'Profile', href: '#profile', id: 'profile' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Publications', href: '#publications', id: 'publications' },
    { label: 'Teaching', href: '#teaching', id: 'teaching' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E6E6E0] py-3.5'
            : 'bg-white border-b border-[#E6E6E0]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* LEFT BRAND / MONOGRAM */}
          <a href="#" className="group flex items-center space-x-3 text-[#1E1B4B]">
            <div className="w-8 h-8 rounded-full border border-[#1E1B4B] flex items-center justify-center font-serif text-sm font-semibold group-hover:bg-[#1E1B4B] group-hover:text-white transition-colors duration-200">
              ME
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold tracking-tight text-base sm:text-lg">
                MIRA ELLISON
              </span>
              <span className="font-mono-tag text-[10px] text-[#6B7280] tracking-widest uppercase">
                BEHAVIORAL RESEARCHER
              </span>
            </div>
          </a>

          {/* CENTER NAVIGATION - DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-all duration-200 relative py-1 ${
                  activeSection === link.id
                    ? 'text-[#1E1B4B] font-semibold'
                    : 'text-[#6B7280] hover:text-[#1E1B4B]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1E1B4B] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS - DESKTOP */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-[#6B7280] hover:text-[#1E1B4B] hover:bg-[#F4F4F3] transition-colors"
              title="Search Publications & Projects"
              aria-label="Search Publications & Projects"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenCV}
              className="inline-flex items-center space-x-2 border border-[#1E1B4B] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#1E1B4B] hover:bg-[#1E1B4B] hover:text-white transition-all duration-200 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#6B7280] hover:text-[#1E1B4B]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E1B4B]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU (TABLE OF CONTENTS STYLE) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAFAFA] flex flex-col justify-between p-8 pt-24 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#E6E6E0] pb-6">
            <div>
              <span className="font-mono-tag text-xs text-[#6B7280] block mb-1">
                TABLE OF CONTENTS
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1E1B4B]">
                Dr. Mira Ellison Portfolio
              </h2>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1E1B4B] rounded-full border border-[#E6E6E0]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-8 space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-3 border-b border-[#E6E6E0]/60 group"
              >
                <span className="font-mono-tag text-xs text-[#9CA3AF] group-hover:text-[#1E1B4B]">
                  0{idx + 1}
                </span>
                <span className="font-serif text-2xl font-medium text-[#1E1B4B] group-hover:translate-x-2 transition-transform duration-200">
                  {link.label}
                </span>
                <span className="text-xs text-[#9CA3AF] uppercase">Go &rarr;</span>
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E6E6E0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full py-3.5 bg-[#1E1B4B] text-white text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>View & Download Academic CV</span>
            </button>
            <p className="font-mono-tag text-[10px] text-center text-[#9CA3AF]">
              Fictional Professional Demonstration Profile
            </p>
          </div>
        </div>
      )}
    </>
  );
}
