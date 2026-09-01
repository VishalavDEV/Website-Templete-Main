import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Play } from 'lucide-react';

export default function Navbar({ onOpenBooking, onReplayIntro }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Support', href: '#support' },
    { label: 'Security', href: '#security' },
  ];

  return (
    <header className="w-full bg-[#070709] py-3.5 px-6 lg:px-16 border-b border-transparent z-40 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo: ExquDrive. */}
        <a href="#" className="flex items-center group">
          <span className="font-display font-medium text-xl sm:text-[22px] tracking-normal text-white">
            ExquDrive<span className="text-[#F2994A]">.</span>
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs lg:text-[13px] font-normal text-[#C4C4C8] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Buttons: Replay Intro & Try it now pill */}
        <div className="hidden md:flex items-center gap-3">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay Cinematic Car Intro"
              className="px-3.5 py-1.5 rounded-full border border-white/20 hover:border-[#F2994A] text-[10px] uppercase font-mono tracking-wider text-white/70 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] transition-all flex items-center gap-1.5"
            >
              <Play className="w-2.5 h-2.5 text-[#F2994A] fill-[#F2994A]" />
              <span>Intro</span>
            </button>
          )}

          <button
            onClick={onOpenBooking}
            className="px-6 py-2 rounded-full border border-white/40 hover:border-white text-[11px] font-medium tracking-wider uppercase text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95"
          >
            Try it now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0c0c10] border-b border-white/10 px-6 py-4 flex flex-col gap-3 shadow-2xl z-50"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white/80 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex gap-2 mt-2">
            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-1/2 py-2.5 rounded-full border border-white/20 text-white text-xs uppercase"
              >
                Replay Intro
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex-1 py-2.5 rounded-full bg-[#F2994A] text-black font-bold text-xs uppercase tracking-wider"
            >
              Try it now
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
