import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
  onOpenResume: () => void;
  onOpenProjects?: () => void;
  onOpenBlogs?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenResume, onOpenProjects, onOpenBlogs }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Lab', href: '#ai-lab' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="footer-section"
      className={`border-t py-12 transition-colors ${
        darkMode
          ? 'bg-[#0B0F17] border-gray-800 text-gray-400'
          : 'bg-white border-gray-100 text-gray-500'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 text-left">
          
          {/* Left: Brand Monogram & Motto (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-xs">
                AM
              </div>
              <span className="font-bold text-sm tracking-tight text-gray-900 dark:text-white uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              Building intelligence. <br />
              Designing possibilities.
            </p>
          </div>

          {/* Center: Quick Links & Resources (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div>
              <h5 className="font-bold text-[11px] uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                Quick Links
              </h5>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[11px] uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                Resources
              </h5>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={onOpenResume}
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    Resume
                  </button>
                </li>
                {onOpenBlogs && (
                  <li>
                    <button
                      onClick={onOpenBlogs}
                      className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    >
                      Engineering Articles
                    </button>
                  </li>
                )}
                <li>
                  <a
                    href="#projects"
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Copyright & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full gap-4 text-xs">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 dark:bg-gray-800 text-white hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all cursor-pointer shadow-md self-start md:self-end"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-left md:text-right text-[11px] text-gray-400">
              <p>© 2026 Arjun Mehta.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
