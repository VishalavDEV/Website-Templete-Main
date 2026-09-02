import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment, onOpenEmergency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Diabetes Care', href: '#care', id: 'care' },
    { label: 'Specialists', href: '#specialists', id: 'specialists' },
    { label: 'Programs', href: '#programs', id: 'programs' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Resources', href: '#resources', id: 'resources' },
    { label: 'About', href: '#why-choose-us', id: 'why-choose-us' },
  ];

  // Handle scroll active state & navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Escape listener for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DDD8] shadow-sm'
          : 'bg-[#FAF8F5] border-b border-[#E5DDD8]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97873] rounded-lg p-1"
        >
          {/* Medical Symbol */}
          <div className="relative w-10 h-10 rounded-xl bg-[#542F3B] flex items-center justify-center p-0.5 shadow-sm group-hover:bg-[#3F222B] transition-colors duration-300">
            <div className="w-full h-full bg-[#FAF8F5] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#C97873]" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.5C12 2.5 5.5 9 5.5 14.5C5.5 18.09 8.41 21 12 21C15.59 21 18.5 18.09 18.5 14.5C18.5 9 12 2.5 12 2.5Z" fill="#FAF0EE" />
                <circle cx="12" cy="14" r="3.5" className="stroke-[#542F3B]" strokeWidth="1.8" />
                <path d="M9.5 14H14.5" stroke="#C97873" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-wide font-bold text-[#542F3B] group-hover:text-[#C97873] transition-colors">
              GLUVIA
            </span>
            <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#C97873] uppercase mt-0.5">
              DIABETES INSTITUTE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`px-3.5 py-2 rounded-lg text-sm transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#542F3B] font-bold bg-[#F2ECE9]'
                    : 'text-[#252326] font-medium hover:text-[#542F3B] hover:bg-[#F2ECE9]/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#C97873] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenEmergency}
            className="btn-secondary text-xs uppercase tracking-wider min-h-[44px] px-4"
            aria-label="Open emergency assistance options"
          >
            <PhoneCall className="w-4 h-4 text-[#C97873]" />
            <span>Emergency</span>
          </button>

          <button
            onClick={onOpenAppointment}
            className="btn-primary text-xs uppercase tracking-wider min-h-[44px] px-5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-[#542F3B] hover:bg-[#F2ECE9] focus:outline-none focus:ring-2 focus:ring-[#C97873]"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-[#FAF8F5] animate-in fade-in duration-200">
          {/* Drawer Header */}
          <div className="h-20 px-6 flex items-center justify-between border-b border-[#E5DDD8]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#542F3B] text-white flex items-center justify-center font-serif font-bold text-lg">
                G
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-[#542F3B] block">GLUVIA</span>
                <span className="text-[9px] tracking-widest text-[#C97873] font-bold uppercase">DIABETES INSTITUTE</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-[#F2ECE9] text-[#542F3B] hover:bg-[#E5DDD8] focus-visible:ring-2 focus-visible:ring-[#C97873]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`px-4 py-3.5 rounded-xl text-base font-medium flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#F2ECE9] text-[#542F3B] font-bold'
                    : 'text-[#252326] hover:bg-[#F2ECE9]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#C97873]">→</span>
              </a>
            ))}
          </nav>

          {/* Drawer Footer Buttons */}
          <div className="p-6 border-t border-[#E5DDD8] bg-[#F2ECE9]/50 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
              className="btn-primary w-full py-3.5 text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEmergency(); }}
              className="btn-secondary w-full py-3.5 text-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#C97873]" />
              <span>Emergency Services Hotline</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
