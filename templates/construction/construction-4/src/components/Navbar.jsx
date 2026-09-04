import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenConsultModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'People', href: '#about' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'services', label: 'Kitchens & Bathrooms', href: '#services' },
    { id: 'estimator', label: 'Contact Us', href: '#estimator' },
  ];

  const handleLinkClick = (id, href) => {
    setActiveTab(id);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="knack-header sticky top-0 z-40 w-full bg-[rgba(10,13,20,0.92)] backdrop-blur-xl border-b border-[var(--border-light)] transition-all" id="knackHeader">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4 w-full">
        
        {/* Brand Logo on the Left */}
        <a 
          href="#home" 
          className="knack-logo flex items-center gap-2 no-underline text-white group cursor-pointer z-50"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home', '#home');
          }}
        >
          <span className="logo-bold font-sans text-xl sm:text-2xl font-black tracking-tight text-[var(--text-main)] group-hover:text-[var(--gold-honey)] transition-colors">
            knack
          </span>
          <span className="logo-pipe text-lg text-[var(--gold-honey)] font-light">|</span>
          <span className="logo-caps text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[var(--text-muted)] uppercase">
            DESIGN + BUILD
          </span>
        </a>

        {/* Desktop Navigation Links (Hidden on < md) */}
        <ul className="nav-menu hidden md:flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`nav-link text-xs lg:text-sm font-semibold text-[var(--text-body)] hover:text-[var(--gold-honey)] transition-colors py-1 cursor-pointer no-underline relative ${
                  activeTab === link.id ? 'text-[var(--gold-honey)] font-bold' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id, link.href);
                }}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--gold-honey)] rounded-full shadow-[0_0_8px_var(--gold-honey)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Header Actions */}
        <div className="nav-actions flex items-center gap-3">
          <button 
            className="btn-outline-pill hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-transparent border border-[var(--border-gold)] text-[var(--gold-honey)] hover:bg-[var(--gold-honey)] hover:text-black transition-all cursor-pointer shadow-sm"
            onClick={onOpenConsultModal}
          >
            Get In Touch
          </button>

          {/* Mobile Hamburger Toggle Button (md:hidden) */}
          <button 
            className="mobile-menu-btn md:hidden p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-light)] text-[var(--text-main)] hover:border-[var(--gold-honey)] transition-colors cursor-pointer flex items-center justify-center w-10 h-10 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over / Dropdown Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-panel md:hidden fixed inset-x-0 top-full bg-[var(--bg-card)] border-b border-[var(--border-gold)] shadow-2xl z-50 p-6 flex flex-col gap-4 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`text-left text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between border-b border-white/5 cursor-pointer ${
                  activeTab === link.id 
                    ? 'text-[var(--gold-honey)] bg-[var(--gold-subtle)] font-bold' 
                    : 'text-[var(--text-body)] hover:text-[var(--gold-honey)]'
                }`}
                onClick={() => handleLinkClick(link.id, link.href)}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[var(--gold-honey)]">→</span>
              </button>
            ))}
          </div>

          <button 
            className="btn-honey-gold w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4a359] to-[#b8863b] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            onClick={() => {
              setMobileOpen(false);
              onOpenConsultModal();
            }}
          >
            <span>Get In Touch</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
}
