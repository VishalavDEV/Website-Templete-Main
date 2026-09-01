import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0E14] text-slate-500 text-[10px] font-sans pt-24 pb-12 border-t border-white/5 text-center select-none uppercase tracking-[0.2em] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center group mx-auto cursor-pointer"
        >
          <span className="font-serif font-light text-2xl tracking-[0.25em] text-white uppercase relative">
            AETHER<span className="text-[10px] align-super tracking-normal font-sans font-medium relative top-[-6px] left-[2px]">&reg;</span>
          </span>
          <span className="text-[7px] font-sans font-medium tracking-[0.35em] text-slate-600 uppercase mt-0.5 group-hover:text-white transition-colors">
            BACK TO TOP
          </span>
        </button>

        {/* Directory details */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400 font-medium pt-4">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#" className="hover:text-white transition-colors">Private Charter</a>
          <a href="#" className="hover:text-white transition-colors">Press & Media</a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-[9px] text-slate-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} AETHER YACHTS. ALL RIGHTS RESERVED.</span>
          <span>DESIGN BY GOOGLE DEEPMIND TEAM.</span>
        </div>

      </div>
    </footer>
  );
}
