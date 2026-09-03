import React from 'react';
import { siteConfig } from '../data/config';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0a0a0a] text-neutral-500 text-xs border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Category Label & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
          <span className="uppercase tracking-[0.2em] text-[#f5f4f1]/80">
            {siteConfig.footer.category}
          </span>
          <span className="hidden md:inline text-neutral-800">|</span>
          <span className="tracking-wide">
            &copy; {currentYear} {siteConfig.studioName}. All rights reserved.
          </span>
        </div>

        {/* Right Side: Legal / Utility Links */}
        <div className="flex items-center space-x-8">
          {siteConfig.footer.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-[#f5f4f1] transition-colors duration-300 tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
