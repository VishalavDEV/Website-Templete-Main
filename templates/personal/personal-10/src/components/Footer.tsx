import React from 'react';
import { ArrowRight, ArrowUp, Send } from 'lucide-react';
import { Logo } from './Logo';
import { NavItem } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavItem) => void;
  onOpenContact: () => void;
  onOpenExperience?: () => void;
  onOpenBlog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenContact,
  onOpenExperience,
  onOpenBlog,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab('home');
  };

  const handleNavClick = (sectionId: string, tab: NavItem, action?: () => void) => {
    setActiveTab(tab);
    if (action) {
      action();
      return;
    }
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const services = [
    'Web Development',
    'UI/UX Design',
    'Frontend Development',
    'Backend Development',
    'Consulting'
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-16 pb-12 border-t border-gray-200 dark:border-gray-800 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-100 dark:border-gray-800">
          
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo isLight={false} />
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 leading-relaxed max-w-sm">
                I build digital experiences that are fast, accessible and visually appealing with clean code and minimal design.
              </p>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              Crafted with clean code & modern UI principles.
            </div>
          </div>

          {/* Column 2: Quick Links (2-3 cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('about-section', 'about')}
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('experience', 'experience', onOpenExperience)}
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('projects-section', 'projects')}
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('blog', 'blog', onOpenBlog)}
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              {services.map((service) => (
                <li key={service} className="hover:text-black dark:hover:text-white transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Let's Connect (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between relative">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2">Let's Connect</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Have a project in mind? Let's build something clean and performant together.
              </p>
              
              {/* Clean Minimal Let's Talk Button */}
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white font-medium text-sm px-6 py-2.5 rounded-full shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center sm:text-left">
            © 2025 Arjun Dev. All rights reserved.
          </div>

          {/* Clean Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-9 h-9 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow-xs flex items-center justify-center transition-all active:scale-90 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 font-bold" />
          </button>
        </div>

      </div>
    </footer>
  );
};
