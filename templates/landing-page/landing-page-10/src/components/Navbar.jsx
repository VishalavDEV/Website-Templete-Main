import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenPathModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Method', href: '#method' },
    { name: 'Programs', href: '#programs' },
    { name: 'Progress', href: '#progress' },
    { name: 'Journal', href: '#journal' },
    { name: 'Coaches', href: '#coaches' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F3F0E8]/90 backdrop-blur-md py-4 border-b border-[#D8D4C8]/50 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter text-[#171816] font-heading flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#B56F4D] transition-transform duration-300 group-hover:scale-125" />
            <span>AURELIS</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#171816]/70 hover:text-[#171816] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B56F4D] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenPathModal}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#F3F0E8] bg-[#171816] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#3E5142] hover:shadow-md active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Find your path
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[#D8D4C8]/40 transition-colors text-[#171816]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#171816] text-[#F3F0E8] transition-all duration-500 flex flex-col justify-between p-8 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="pt-20">
          <p className="text-xs uppercase tracking-widest text-[#B56F4D] mb-6 font-semibold">
            Personalized Coaching Platform
          </p>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-heading font-light tracking-tight hover:text-[#B56F4D] transition-colors flex items-center justify-between border-b border-white/10 pb-4"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pb-6 border-t border-white/10 pt-6">
          <p className="text-xs text-[#D8D4C8]/60">
            Build a stronger, sustainable way of living.
          </p>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPathModal();
            }}
            className="w-full py-4 bg-[#B56F4D] text-[#F3F0E8] font-medium tracking-wide uppercase text-xs rounded-full flex items-center justify-center gap-2"
          >
            Find your path
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
