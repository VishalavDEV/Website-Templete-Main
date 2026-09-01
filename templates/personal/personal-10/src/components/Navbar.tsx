import React, { useState } from 'react';
import { ArrowRight, Moon, Sun, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NavItem } from '../types';

interface NavbarProps {
  activeTab: NavItem;
  setActiveTab: (tab: NavItem) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  onOpenContact: () => void;
  onOpenExperience?: () => void;
  onOpenEducation?: () => void;
  onOpenBlog?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
  onOpenContact,
  onOpenExperience,
  onOpenEducation,
  onOpenBlog,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavItem; label: string; action?: () => void }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience', action: onOpenExperience },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education', action: onOpenEducation },
    { id: 'blog', label: 'Blog', action: onOpenBlog },
    { id: 'contact', label: 'Contact', action: onOpenContact },
  ];

  const handleNavClick = (link: { id: NavItem; label: string; action?: () => void }) => {
    setActiveTab(link.id);
    setMobileMenuOpen(false);

    if (link.id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.id === 'about') {
      const el = document.getElementById('about-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (link.id === 'skills') {
      const el = document.getElementById('skills-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (link.id === 'projects') {
      const el = document.getElementById('projects-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (link.id === 'contact') {
      onOpenContact();
    } else if (link.action) {
      link.action();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <div onClick={() => handleNavClick(navLinks[0])}>
          <Logo />
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`relative py-1 text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-black dark:text-white font-semibold'
                    : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black dark:bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Theme Toggle Pill */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="flex items-center p-1 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-1">
              <span className={`p-1 rounded-full ${!isDark ? 'bg-white text-amber-500 shadow-xs' : 'text-gray-400'}`}>
                <Sun className="w-3.5 h-3.5" />
              </span>
              <span className={`p-1 rounded-full ${isDark ? 'bg-gray-700 text-blue-300 shadow-xs' : 'text-gray-400'}`}>
                <Moon className="w-3.5 h-3.5" />
              </span>
            </div>
          </button>

          {/* Let's Talk CTA Button */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 text-sm font-medium px-5 py-2.5 rounded-full shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                activeTab === link.id
                  ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60'
              }`}
            >
              <span>{link.label}</span>
              {activeTab === link.id && <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black font-medium py-2.5 rounded-full shadow-xs text-sm"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
