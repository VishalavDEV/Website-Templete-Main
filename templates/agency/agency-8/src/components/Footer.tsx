import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import { CursorType } from '../types';

interface FooterProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType) => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProjectModal, setCursorType, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [clocks, setClocks] = useState({
    london: '',
    newYork: '',
    tokyo: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const formatTime = (tz: string) =>
        now.toLocaleTimeString('en-US', {
          timeZone: tz,
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        });

      setClocks({
        london: formatTime('Europe/London'),
        newYork: formatTime('America/New_York'),
        tokyo: formatTime('Asia/Tokyo'),
      });
    };

    updateClocks();
    const timer = setInterval(updateClocks, 10000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@studio.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Work', href: '/work', route: '/work' },
    { name: 'Services', href: '/services', route: '/services' },
    { name: 'About', href: '/about', route: '/about' },
    { name: 'Careers', href: '/careers', route: '/careers' },
    { name: 'Stories', href: '/testimonials', route: '/testimonials' },
    { name: 'Insights', href: '/insights', route: '/insights' },
    { name: 'Contact', href: '/contact', route: '/contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: { name: string; href: string; route: string }) => {
    e.preventDefault();
    if (onNavigate) {
      if (item.route === '/work') {
        onNavigate('/work');
      } else if (item.route === '/about') {
        onNavigate('/about');
      } else if (item.route === '/careers') {
        onNavigate('/careers');
      } else if (item.route === '/services') {
        onNavigate('/services');
      } else if (item.route === '/testimonials') {
        onNavigate('/testimonials');
      } else if (item.route === '/insights') {
        onNavigate('/insights');
      } else if (item.route === '/contact') {
        onNavigate('/contact');
      } else {
        onNavigate('/');
        setTimeout(() => {
          const hash = item.href.replace('/', '');
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Behance', href: 'https://behance.net' },
    { name: 'X / Twitter', href: 'https://twitter.com' },
  ];

  return (
    <footer className="pt-20 pb-12 bg-[#060608] border-t border-[#ffffff10] relative overflow-hidden text-[#888888]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#ffffff10]">
          {/* Column 1: Studio Info & Live Locations */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3 text-[#FAF9F6] font-display font-extrabold text-2xl tracking-[0.25em]">
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span>STUDIO</span>
            </div>

            <p className="text-[#888888] text-sm sm:text-base leading-relaxed max-w-sm">
              An independent creative studio engineering high-impact digital experiences, brands, and interactive technology.
            </p>

            {/* Live Studio Clocks */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block">
                Studio Locations & Local Time
              </span>
              <div className="grid grid-cols-3 gap-3 font-mono text-xs text-[#FAF9F6]">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-[#ffffff10]">
                  <span className="text-[10px] text-[#888888] block">LONDON</span>
                  <span className="font-semibold text-white">{clocks.london || '12:00'}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-[#ffffff10]">
                  <span className="text-[10px] text-[#888888] block">NEW YORK</span>
                  <span className="font-semibold text-white">{clocks.newYork || '07:00'}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-[#ffffff10]">
                  <span className="text-[10px] text-[#888888] block">TOKYO</span>
                  <span className="font-semibold text-white">{clocks.tokyo || '21:00'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FAF9F6] block">
              Navigation
            </span>
            <ul className="space-y-3 font-medium text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    onMouseEnter={() => setCursorType('pointer')}
                    onMouseLeave={() => setCursorType('default')}
                    className="text-[#888888] hover:text-[#FAF9F6] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Network */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FAF9F6] block">
              Social
            </span>
            <ul className="space-y-3 font-medium text-sm">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setCursorType('pointer')}
                    onMouseLeave={() => setCursorType('default')}
                    className="group inline-flex items-center gap-1.5 text-[#888888] hover:text-[#FAF9F6] transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Direct Inquiries */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FAF9F6] block">
              Inquiries
            </span>
            <div className="space-y-3">
              <a
                href="mailto:hello@studio.com"
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="block text-sm text-[#FAF9F6] hover:text-[#0066FF] transition-colors font-mono"
              >
                hello@studio.com
              </a>

              <button
                onClick={copyEmail}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#888888] hover:text-[#FAF9F6] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span className="text-[#0066FF]">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <div className="pt-2">
                <button
                  onClick={onOpenProjectModal}
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className="px-4 py-2 bg-[#0066FF]/20 hover:bg-[#0066FF]/30 border border-[#0066FF]/40 text-[#0066FF] text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Brief Form &nearr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Architectural Typography Brand Showcase */}
        <div className="py-12 sm:py-16 select-none overflow-hidden text-center">
          <span className="font-display text-[15vw] font-black tracking-[-0.04em] uppercase text-white/[0.04] leading-none block hover:text-white/[0.08] transition-colors duration-500">
            STUDIO
          </span>
        </div>

        {/* Bottom Bar: Copyright, Legal, Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#888888] font-mono border-t border-[#ffffff10] pt-8">
          <div>
            © 2026 Studio. All rights reserved. Craft over conformity.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#FAF9F6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF9F6] transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="flex items-center gap-2 hover:text-[#FAF9F6] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#0066FF]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
