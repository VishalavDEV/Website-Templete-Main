import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#07090E] border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-400 font-mono">
        <div className="flex items-center gap-2 text-white font-bold font-display">
          <span>Busy Status Bar</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-white transition-colors">Home</a>
          <a href="#features" className="hover:text-white transition-colors">Shop</a>
          <a href="#productivity" className="hover:text-white transition-colors">Downloads</a>
          <a href="#productivity" className="hover:text-white transition-colors">Blog</a>
        </div>

        <div>
          © 2026 Busy Status Bar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
