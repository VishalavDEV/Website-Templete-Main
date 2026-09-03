import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { SERVICES_DATA } from '../data/services';
import { INDUSTRIES_DATA } from '../data/industries';
import { DynamicIcon } from './DynamicIcon';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Sparkles,
  Layers,
  ShieldCheck,
  Briefcase,
  Terminal,
  Grid
} from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  currentSlug?: string;
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  currentSlug,
  onNavigate,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'capabilities' | 'services' | 'solutions' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: PageRoute, slug?: string) => {
    onNavigate(route, slug);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'py-3.5 sm:py-5 bg-white/90 sm:bg-white/70 backdrop-blur-md border-b border-slate-200/40'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo & Agency Mark */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <button
              id="nav-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-xs group-hover:bg-blue-700 transition-colors">
                <div className="w-3 h-3 bg-white rotate-45"></div>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase font-display text-slate-900">
                  Axiom<span className="text-blue-600 font-normal">Lab</span>
                </span>
              </div>
            </button>

            {/* Micro descriptor badge on wider screens */}
            <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-slate-200 text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Autonomous Systems &amp; Cloud</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 2xl:space-x-10 text-[11px] font-bold uppercase tracking-[0.16em] xl:tracking-[0.2em]">
            <button
              id="nav-home"
              onClick={() => handleLinkClick('home')}
              className={`py-1 whitespace-nowrap transition-all duration-150 cursor-pointer border-b-2 shrink-0 leading-none ${
                currentRoute === 'home'
                  ? 'text-slate-900 border-blue-600 font-black'
                  : 'text-slate-400 hover:text-slate-900 border-transparent'
              }`}
            >
              Home
            </button>

            {/* Capabilities Dropdown (combines Disciplines & Industries) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('capabilities')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-capabilities-dropdown"
                onClick={() => handleLinkClick('services')}
                className={`py-1 whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1 border-b-2 shrink-0 leading-none ${
                  currentRoute === 'services' ||
                  currentRoute === 'service-detail' ||
                  currentRoute === 'solutions' ||
                  currentRoute === 'solution-detail'
                    ? 'text-slate-900 border-blue-600 font-black'
                    : 'text-slate-400 hover:text-slate-900 border-transparent'
                }`}
              >
                <span>Capabilities</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === 'capabilities' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'capabilities' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-[520px] rounded-2xl bg-white p-5 shadow-2xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Left: Specialized Disciplines */}
                      <div>
                        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Disciplines
                          </span>
                          <button
                            onClick={() => handleLinkClick('services')}
                            className="text-[10px] font-bold uppercase text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                          >
                            All Services <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        </div>
                        <div className="space-y-1">
                          {SERVICES_DATA.slice(0, 5).map((service) => (
                            <button
                              key={service.id}
                              id={`nav-service-${service.id}`}
                              onClick={() => handleLinkClick('service-detail', service.slug)}
                              className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                            >
                              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0">
                                <DynamicIcon name={service.iconName} className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                                  {service.title}
                                </p>
                                <p className="text-[10px] text-slate-400 truncate">
                                  {service.tagline}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Right: Target Industries */}
                      <div>
                        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Industries
                          </span>
                          <button
                            onClick={() => handleLinkClick('solutions')}
                            className="text-[10px] font-bold uppercase text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                          >
                            All Sectors <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        </div>
                        <div className="space-y-1">
                          {INDUSTRIES_DATA.slice(0, 5).map((ind) => (
                            <button
                              key={ind.id}
                              id={`nav-industry-${ind.id}`}
                              onClick={() => handleLinkClick('solution-detail', ind.slug)}
                              className="w-full p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer block"
                            >
                              <p className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                                {ind.name.split('&')[0]}
                              </p>
                              <p className="text-[10px] text-slate-400 truncate">
                                {ind.tagline}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-work"
              onClick={() => handleLinkClick('work')}
              className={`py-1 whitespace-nowrap transition-all duration-150 cursor-pointer border-b-2 shrink-0 leading-none ${
                currentRoute === 'work' || currentRoute === 'case-study-detail'
                  ? 'text-slate-900 border-blue-600 font-black'
                  : 'text-slate-400 hover:text-slate-900 border-transparent'
              }`}
            >
              Case Studies
            </button>

            <button
              id="nav-process"
              onClick={() => handleLinkClick('process')}
              className={`py-1 whitespace-nowrap transition-all duration-150 cursor-pointer border-b-2 shrink-0 leading-none ${
                currentRoute === 'process'
                  ? 'text-slate-900 border-blue-600 font-black'
                  : 'text-slate-400 hover:text-slate-900 border-transparent'
              }`}
            >
              Methodology
            </button>

            <button
              id="nav-about"
              onClick={() => handleLinkClick('about')}
              className={`py-1 whitespace-nowrap transition-all duration-150 cursor-pointer border-b-2 shrink-0 leading-none ${
                currentRoute === 'about'
                  ? 'text-slate-900 border-blue-600 font-black'
                  : 'text-slate-400 hover:text-slate-900 border-transparent'
              }`}
            >
              About
            </button>

            <button
              id="nav-insights"
              onClick={() => handleLinkClick('insights')}
              className={`py-1 whitespace-nowrap transition-all duration-150 cursor-pointer border-b-2 shrink-0 leading-none ${
                currentRoute === 'insights' || currentRoute === 'article-detail'
                  ? 'text-slate-900 border-blue-600 font-black'
                  : 'text-slate-400 hover:text-slate-900 border-transparent'
              }`}
            >
              Insights
            </button>

            <button
              id="nav-careers"
              onClick={() => handleLinkClick('careers')}
              className={`py-1 whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 border-b-2 shrink-0 leading-none ${
                currentRoute === 'careers'
                  ? 'text-slate-900 border-blue-600 font-black'
                  : 'text-slate-400 hover:text-slate-900 border-transparent'
              }`}
            >
              Careers
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </button>

            <button
              id="nav-faq"
              onClick={() => handleLinkClick('faq')}
              className={`py-1 whitespace-nowrap transition-all duration-150 cursor-pointer border-b-2 shrink-0 leading-none ${
                currentRoute === 'faq'
                  ? 'text-slate-900 border-blue-600 font-black'
                  : 'text-slate-400 hover:text-slate-900 border-transparent'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Quick Portals Preview Toggle */}
            <div className="hidden xl:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-100 shrink-0">
              <button
                id="nav-portal-client"
                onClick={() => handleLinkClick('client-portal')}
                title="Client Portal Architecture Preview"
                className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer flex items-center gap-1 ${
                  currentRoute === 'client-portal'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-3 h-3 text-slate-400" />
                <span>Client Hub</span>
              </button>
              <button
                id="nav-portal-admin"
                onClick={() => handleLinkClick('admin-portal')}
                title="Admin CMS Preview"
                className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer flex items-center gap-1 ${
                  currentRoute === 'admin-portal'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                <Terminal className="w-3 h-3 text-slate-400" />
                <span>Admin</span>
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              id="nav-start-project-btn"
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex border-2 border-slate-900 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs font-black tracking-widest hover:bg-slate-900 hover:text-white transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer"
            >
              Start a Project
            </button>

            {/* Mobile Compact CTA on narrow screens */}
            <button
              id="nav-start-project-mobile-btn"
              onClick={onOpenInquiry}
              className="sm:hidden border-2 border-slate-900 px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-wider hover:bg-slate-900 hover:text-white transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer"
            >
              Start
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="lg:hidden fixed inset-0 top-0 bg-slate-950/30 backdrop-blur-xs z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container (Absolute inside fixed header) */}
          <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 overflow-y-auto max-h-[calc(100dvh-4rem)] divide-y divide-slate-100 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="p-4 sm:p-6 space-y-5">
              {/* Primary Navigation Items */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-2">
                  Navigation
                </div>
                {[
                  { label: 'Home', route: 'home' as PageRoute },
                  { label: 'Capabilities & Disciplines', route: 'services' as PageRoute },
                  { label: 'Target Sectors', route: 'solutions' as PageRoute },
                  { label: 'Case Studies', route: 'work' as PageRoute },
                  { label: 'Methodology', route: 'process' as PageRoute },
                  { label: 'About AxiomLab', route: 'about' as PageRoute },
                  { label: 'Insights & Research', route: 'insights' as PageRoute },
                  { label: 'Careers (Hiring)', route: 'careers' as PageRoute },
                  { label: 'FAQ', route: 'faq' as PageRoute },
                  { label: 'Contact', route: 'contact' as PageRoute },
                ].map((item) => {
                  const isActive = currentRoute === item.route;
                  return (
                    <button
                      key={item.route}
                      onClick={() => handleLinkClick(item.route)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors text-left cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Architecture Previews (Portals) */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-2">
                  Live Portals
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleLinkClick('client-portal')}
                    className={`p-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 cursor-pointer ${
                      currentRoute === 'client-portal'
                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                        : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                    <span className="truncate">Client Hub</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('admin-portal')}
                    className={`p-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 cursor-pointer ${
                      currentRoute === 'admin-portal'
                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                        : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    <span className="truncate">Admin CMS</span>
                  </button>
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="pt-2">
                <button
                  id="mobile-menu-start-project"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[10px] font-mono text-slate-400 mt-2 uppercase tracking-wider">
                  Accepting 2026 Q3 Enterprise Engagements
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
