import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservation = () => {
    alert('Quick Reservation: Booking form opened.');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 py-6 px-6 md:px-12 flex justify-between items-center ${
        scrolled 
          ? 'bg-[#0A0E14]/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent'
      }`}>
        {/* Left Action */}
        <button
          onClick={handleReservation}
          className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white hover:text-white/60 transition-colors cursor-pointer"
        >
          Quick Reservation
        </button>

        {/* Center Logo */}
        <a href="#home" className="flex flex-col items-center select-none group">
          <span className="font-serif font-light text-2xl tracking-[0.25em] text-white uppercase relative">
            AETHER<span className="text-[10px] align-super tracking-normal font-sans font-medium relative top-[-6px] left-[2px]">&reg;</span>
          </span>
          <span className="text-[7px] font-sans font-medium tracking-[0.35em] text-slate-400 uppercase mt-0.5 group-hover:text-white transition-colors">
            OCEAN EXPERIENCE
          </span>
        </a>

        {/* Right Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white hover:text-white/60 transition-colors cursor-pointer"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Fullscreen Minimal Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#0A0E14] z-40 flex items-center justify-center p-8"
          >
            <div className="text-center space-y-8 max-w-lg select-none">
              <span className="text-[10px] font-sans font-medium uppercase tracking-[0.3em] text-slate-500 block">
                - Navigation -
              </span>
              
              <ul className="space-y-6 font-serif text-3xl md:text-5xl font-light text-slate-400">
                {['Home', 'Experience', 'Gallery', 'Quick Reservation'].map((item) => (
                  <li key={item}>
                    <a
                      href={item === 'Quick Reservation' ? '#' : `#${item.toLowerCase()}`}
                      onClick={(e) => {
                        setMenuOpen(false);
                        if (item === 'Quick Reservation') {
                          e.preventDefault();
                          handleReservation();
                        } else {
                          const targetId = item.toLowerCase();
                          const el = document.getElementById(targetId);
                          if (el) {
                            e.preventDefault();
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="hover:text-white transition-colors duration-300 block py-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-12 text-[9px] font-sans text-slate-600 uppercase tracking-widest leading-relaxed">
                <span>Direct Line: +1 (800) 555-0900</span>
                <span className="block mt-1">Geneva &mdash; Monaco &mdash; Miami</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
