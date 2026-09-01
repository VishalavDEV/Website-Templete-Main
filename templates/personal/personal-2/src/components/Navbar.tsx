import { useState, useEffect } from 'react';
import { Bot, FileText, Menu, X, Sun, Moon, Command } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenAskAi: () => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  accentTheme: 'cyan' | 'violet' | 'emerald';
  setAccentTheme: (theme: 'cyan' | 'violet' | 'emerald') => void;
}

export default function Navbar({
  theme,
  toggleTheme,
  onOpenAskAi,
  onOpenResume,
  onOpenCommandPalette,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Lab', href: '#ailab' },
    { name: 'Journey', href: '#journey' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'ailab', 'journey', 'blog', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 py-3">
      <div
        className={`max-w-7xl mx-auto rounded-full sm:rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-2.5 px-4 sm:px-6 border border-slate-200/80 dark:border-slate-800'
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-3 px-4 sm:px-6 border border-slate-200/60 dark:border-slate-800/80 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Avatar */}
          <a
            href="#home"
            id="nav-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:scale-105 transition-transform bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Arjun Mehta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to stylized monogram if image is blocked
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<span class="font-bold text-xs text-blue-600 dark:text-blue-400 font-heading">AM</span>';
                  }
                }}
              />
            </div>
            <span className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">
              Arjun Mehta
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              id="nav-cmd-palette-btn"
              title="Open Command Palette (Cmd + K)"
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <Command className="w-3.5 h-3.5" />
            </button>

            {/* Theme Toggle (Sun/Moon Icon) */}
            <button
              onClick={toggleTheme}
              id="nav-theme-toggle-btn"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-200" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-slate-700 animate-in spin-in-180 duration-200" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all cursor-pointer"
            >
              Resume
            </button>

            {/* ASK AI Action Pill */}
            <button
              onClick={onOpenAskAi}
              id="nav-ask-ai-btn"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Ask AI</span>
              <Bot className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-menu-btn"
              aria-label="Toggle menu"
              className="lg:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-2 max-w-7xl mx-auto animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => { toggleTheme(); }}
              className="flex-1 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button
              onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
              className="flex-1 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" /> Resume
            </button>
            <button
              onClick={() => { onOpenAskAi(); setMobileMenuOpen(false); }}
              className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4" /> Ask AI
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

