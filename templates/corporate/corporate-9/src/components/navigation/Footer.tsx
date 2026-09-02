import React from 'react';
import { Logo } from '../common/Logo';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-white text-[#191919] border-t border-gray-150 pt-12 pb-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
        {/* LOGO & ITALIC TAGLINE */}
        <div className="flex items-center">
          <Logo showTagline={true} />
        </div>

        {/* MIDDLE NAVIGATION LINKS */}
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-[#191919]/80">
          <a
            href="#platform"
            onClick={(e) => { e.preventDefault(); handleScroll('#platform'); }}
            className="hover:text-black transition-colors"
          >
            Platform
          </a>
          <a
            href="#solutions"
            onClick={(e) => { e.preventDefault(); handleScroll('#solutions'); }}
            className="hover:text-black transition-colors"
          >
            Solutions
          </a>
          <a
            href="#resources"
            onClick={(e) => { e.preventDefault(); handleScroll('#how-it-works'); }}
            className="hover:text-black transition-colors"
          >
            Resources
          </a>
          <a
            href="#company"
            onClick={(e) => { e.preventDefault(); handleScroll('#company'); }}
            className="hover:text-black transition-colors"
          >
            Company
          </a>
          <a
            href="#company"
            onClick={(e) => { e.preventDefault(); handleScroll('#company'); }}
            className="hover:text-black transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex items-center gap-4 text-[#191919]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 hover:text-black/60 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 hover:text-black/60 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 hover:text-black/60 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* BOTTOM ROW (THIN DIVIDER) */}
      <div className="pt-6 border-t border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#191919]/60">
        <div>
          © 2026 Finora. All rights reserved.
        </div>

        <div className="flex items-center gap-3">
          <a href="#privacy" className="hover:text-black transition-colors">Privacy</a>
          <span>·</span>
          <a href="#terms" className="hover:text-black transition-colors">Terms</a>
          <span>·</span>
          <a href="#security" className="hover:text-black transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};
