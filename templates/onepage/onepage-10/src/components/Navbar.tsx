import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Laptop,
  Menu,
  X,
  Sparkles,
  Terminal,
  Settings,
  ArrowRight
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Overview', href: '#overview' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Platform', href: '#platform' },
  { name: 'Insights', href: '#insights' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' }
];

export const Navbar: React.FC = () => {
  const {
    theme,
    setTheme,
    unreadNotificationCount,
    setIsNotificationPanelOpen,
    isNotificationPanelOpen,
    setIsSearchOpen,
    setIsConsultationModalOpen,
    setIsOperationsConsoleOpen,
    setIsSettingsOpen
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'py-3 bg-[#08080A] backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-indigo-950/30'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#overview"
              onClick={e => handleNavClick(e, '#overview')}
              className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
            >
              <Logo size="md" showTagline={false} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0A0A0E] px-2 py-1.5 rounded-xl border border-white/5 backdrop-blur-md shadow-inner shadow-black/40">
              {NAV_ITEMS.map(item => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => handleNavClick(e, item.href)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Icons & CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Global Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 rounded-full transition-all"
                title="Command Search (Ctrl+K / ⌘K)"
                aria-label="Command search"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden xl:inline text-[11px]">Command Search</span>
                <kbd className="px-1.5 py-0.2 text-[10px] font-mono bg-white/10 border border-white/10 text-slate-300 rounded-full">
                  ⌘K
                </kbd>
              </button>

              {/* Operations Console Quick Launch */}
              <button
                onClick={() => setIsOperationsConsoleOpen(true)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all"
                title="Operations Console"
                aria-label="Operations console"
              >
                <Terminal className="w-4 h-4" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={cycleTheme}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all"
                title={`Theme: ${theme} (Click to toggle)`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
                {theme === 'light' && <Sun className="w-4 h-4 text-amber-400" />}
                {theme === 'system' && <Laptop className="w-4 h-4 text-cyan-400" />}
              </button>

              {/* Notifications Button */}
              <button
                onClick={() => setIsNotificationPanelOpen(!isNotificationPanelOpen)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all relative"
                title="Notifications"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadNotificationCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 border-2 border-[#08080A] rounded-full"></span>
                )}
              </button>

              {/* Settings / Preferences */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all"
                title="Workspace Preferences"
                aria-label="Preferences"
              >
                <Settings className="w-4 h-4" />
              </button>

              {/* Book Strategy Call CTA Button */}
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-5 py-2 rounded-full transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98] ml-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Book Strategy Call</span>
              </button>
            </div>

            {/* Mobile / Tablet Hamburger Toggle & Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={cycleTheme}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-[#0A0A0E] border border-white/5"
                title={`Theme: ${theme}`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
                {theme === 'light' && <Sun className="w-4 h-4 text-amber-400" />}
                {theme === 'system' && <Laptop className="w-4 h-4 text-cyan-400" />}
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-400 hover:text-white"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsNotificationPanelOpen(!isNotificationPanelOpen)}
                className="p-2 text-slate-400 hover:text-white relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadNotificationCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 border-2 border-[#08080A] rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-[#0A0A0E] border border-white/5"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-[#08080A] border-b border-white/10 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                    activeSection === item.href.substring(1)
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5">
                <button
                  onClick={cycleTheme}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
                >
                  <div className="flex items-center gap-2">
                    {theme === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
                    {theme === 'light' && <Sun className="w-4 h-4 text-amber-400" />}
                    {theme === 'system' && <Laptop className="w-4 h-4 text-cyan-400" />}
                    <span>Theme ({theme})</span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">Tap to Cycle</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsOperationsConsoleOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
                >
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span>Operations Console</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsConsultationModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-600/20"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Book Strategy Call</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
