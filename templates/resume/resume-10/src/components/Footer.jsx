import React from 'react';
import { directorProfile, disclaimerText } from '../data/directorData';

const Footer = () => {
  const footerLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Films', href: '#films' },
    { name: 'Process', href: '#process' },
    { name: 'Career', href: '#career' },
    { name: 'Craft', href: '#craft' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-neutral-200 pb-12">
          
          {/* LEFT: Branding */}
          <div className="md:col-span-4 flex items-center gap-3">
            <div className="w-10 h-10 border border-neutral-900 flex items-center justify-center font-serif-title font-bold text-sm tracking-widest text-neutral-900">
              ER
            </div>
            <div>
              <span className="font-serif-title text-base font-semibold tracking-wider uppercase block">
                {directorProfile.name}
              </span>
              <span className="font-mono-meta text-[10px] tracking-widest text-neutral-500 uppercase block">
                {directorProfile.title}
              </span>
            </div>
          </div>

          {/* CENTER: Quick Nav */}
          <nav className="md:col-span-5 flex flex-wrap items-center justify-start md:justify-center gap-6 font-mono-meta text-xs tracking-widest uppercase">
            {footerLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-neutral-600 hover:text-neutral-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: Copyright */}
          <div className="md:col-span-3 text-left md:text-right font-mono-meta text-xs text-neutral-500 uppercase tracking-widest">
            © 2026 {directorProfile.name}
          </div>

        </div>

        {/* Mandatory Fictional Disclaimer */}
        <div className="pt-8 text-center max-w-3xl mx-auto">
          <p className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-wider leading-relaxed">
            {disclaimerText}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
