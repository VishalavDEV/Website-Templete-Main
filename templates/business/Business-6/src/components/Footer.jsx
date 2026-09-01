import React from 'react';
import { Briefcase, Cpu, Palette, BarChart3, Rocket } from 'lucide-react';

const logoIcons = {
  corporate: Briefcase,
  technology: Cpu,
  creative: Palette,
  consulting: BarChart3,
  startup: Rocket,
};

export default function Footer({ template }) {
  const LogoIcon = logoIcons[template.id] || Briefcase;

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-white border-t border-brand-border/60 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Summary */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-brand-accent/10 rounded-md text-brand-accent">
                <LogoIcon size={18} />
              </div>
              <span className="font-sans font-bold tracking-widest text-base text-brand-text">
                {template.logoText}
              </span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed max-w-xs">
              A premium business landing template engineered for modern firms, software agencies, and high-growth venture groups.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#linkedin"
                className="text-brand-muted hover:text-brand-accent transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href="#instagram"
                className="text-brand-muted hover:text-brand-accent transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="#facebook"
                className="text-brand-muted hover:text-brand-accent transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-text mb-6 uppercase">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, '#home')}
                  className="text-brand-muted hover:text-brand-text transition-colors duration-200"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, '#about')}
                  className="text-brand-muted hover:text-brand-text transition-colors duration-200"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScroll(e, '#services')}
                  className="text-brand-muted hover:text-brand-text transition-colors duration-200"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleScroll(e, '#work')}
                  className="text-brand-muted hover:text-brand-text transition-colors duration-200"
                >
                  PORTFOLIO
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-text mb-6 uppercase">
              OFFICE CHANNELS
            </h4>
            <ul className="space-y-3 text-xs text-brand-muted font-mono">
              <li>
                <span className="block text-[10px] font-bold text-brand-accent tracking-wider font-sans mb-0.5">
                  EMAIL
                </span>
                hello@businessstudio.com
              </li>
              <li>
                <span className="block text-[10px] font-bold text-brand-accent tracking-wider font-sans mb-0.5">
                  PHONE
                </span>
                +1 (555) 902-1132
              </li>
              <li>
                <span className="block text-[10px] font-bold text-brand-accent tracking-wider font-sans mb-0.5">
                  LOCATION
                </span>
                5th Avenue Suite 200, NY
              </li>
            </ul>
          </div>

          {/* Column 4: Design Accents */}
          <div className="flex flex-col items-start justify-between">
            <div>
              <h4 className="text-xs font-bold tracking-widest text-brand-text mb-4 uppercase">
                ESTABLISHED 2026
              </h4>
              <p className="text-[11px] text-brand-muted leading-relaxed">
                Created with a focus on editorial spacing, structural typography, and premium user interactions.
              </p>
            </div>
            <div className="h-[1px] w-full bg-brand-border/60 my-4 lg:my-0" />
            <span className="text-[10px] font-mono text-brand-accent font-bold uppercase tracking-widest">
              TEMPLATE ACTIVE: {template.name}
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-muted font-mono">
          <span>&copy; 2026 Business Studio. All rights reserved.</span>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 font-sans font-bold">
            <a href="#terms" className="hover:text-brand-text transition-colors duration-200 uppercase">TERMS OF USE</a>
            <a href="#privacy" className="hover:text-brand-text transition-colors duration-200 uppercase">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
