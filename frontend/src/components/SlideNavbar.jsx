import React from 'react';
import { Camera, ShoppingBag } from 'lucide-react';

export default function SlideNavbar({ currentSlide, setSlide, onOpenBooking }) {
  const navLinks = [
    { id: 0, label: '01 Intro' },
    { id: 1, label: '02 Portfolio' },
    { id: 2, label: '03 Story' },
    { id: 3, label: '04 Packages' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#111111]/90 backdrop-blur-md border-b border-white/10 py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => setSlide(0)}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <span className="w-8 h-8 rounded-full bg-[#e74c3c] flex items-center justify-center text-white shadow-md shadow-[#e74c3c]/30 group-hover:scale-105 transition-transform duration-200">
            <Camera className="w-4 h-4 text-white stroke-[2.5]" />
          </span>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-gray-200 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
            Photo<span className="text-[#e74c3c]">M4</span>
          </span>
        </button>

        {/* 4 Slide Jump Links */}
        <div className="hidden sm:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setSlide(link.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                currentSlide === link.id
                  ? 'bg-[#e74c3c] text-white shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#e74c3c] hover:bg-[#d63031] transition-all shadow-lg shadow-[#e74c3c]/25 hover:scale-105 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>

      </div>
    </nav>
  );
}
