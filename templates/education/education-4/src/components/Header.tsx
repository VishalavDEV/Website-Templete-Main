import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  ShoppingCart, 
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  Calendar,
  Users,
  Compass,
  FileText,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/universityData';

interface HeaderProps {
  onOpenAdmissions: () => void;
  onOpenSearch: () => void;
  onOpenCart?: () => void;
  onOpenLogin?: () => void;
  onOpenFaq?: () => void;
  onNavigateSection: (sectionId: string) => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAdmissions,
  onOpenSearch,
  onOpenCart,
  onOpenLogin,
  onOpenFaq,
  onNavigateSection,
  cartCount = 0
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navMenuItems = [
    {
      name: 'HOME',
      id: 'hero',
      dropdown: [
        { label: 'University Home Main', action: () => onNavigateSection('hero'), desc: 'Primary hero banner & feature blocks' },
        { label: 'Campus Welcome Overview', action: () => onNavigateSection('about-us'), desc: '2-column campus introduction' },
        { label: 'Popular Courses Grid', action: () => onNavigateSection('courses'), desc: 'Accredited certificate modules' },
        { label: 'Campus Life & Gallery', action: () => onNavigateSection('portfolio'), desc: 'Campus facilities & community' }
      ]
    },
    {
      name: 'PAGES',
      id: 'about-us',
      dropdown: [
        { label: 'About Our Institution', action: () => onNavigateSection('about-us'), desc: 'Heritage, vision & mission' },
        { label: 'Virtual Campus Facilities', action: () => onNavigateSection('campus-tour'), desc: 'Interactive architectural tour' },
        { label: 'Student Testimonials & Reviews', action: () => onNavigateSection('testimonials'), desc: 'Alumni career stories' },
        { label: 'Admissions & Scholarships', action: () => onOpenAdmissions(), desc: 'Submit application for 2026' }
      ]
    },
    {
      name: 'ELEMENTS',
      id: 'stats',
      dropdown: [
        { label: 'Key Campus Statistics', action: () => onNavigateSection('stats'), desc: 'Enrollment & success metrics' },
        { label: 'Interactive Degree Finder', action: () => onNavigateSection('degree-finder'), desc: 'Filter courses by career path' },
        { label: 'Tuition & Aid Calculator', action: () => onOpenFaq?.(), desc: 'Estimate semester financial cost' }
      ]
    },
    {
      name: 'COURSES',
      id: 'courses',
      dropdown: [
        { label: 'All Popular Courses', action: () => onNavigateSection('courses'), desc: 'Browse full course catalog' },
        { label: 'Computer Science & AI', action: () => onNavigateSection('courses'), desc: 'Software engineering & neural networks' },
        { label: 'Genomics & Biomedical', action: () => onNavigateSection('courses'), desc: 'CRISPR & clinical therapeutics' },
        { label: 'Global Business & Law', action: () => onNavigateSection('courses'), desc: 'Fintech, venture capital & governance' }
      ]
    },
    {
      name: 'REASEARCH',
      id: 'news',
      dropdown: [
        { label: 'STEM & Robotics Laboratories', action: () => onNavigateSection('portfolio'), desc: 'Explore breakthrough innovations' },
        { label: 'Peer-Reviewed Journals', action: () => onNavigateSection('news'), desc: 'Faculty publications & discoveries' },
        { label: 'Global Innovation Grants', action: () => onNavigateSection('about-us'), desc: 'Funded research fellowships' }
      ]
    },
    {
      name: 'NEWS',
      id: 'news',
      dropdown: [
        { label: 'Latest Campus News', action: () => onNavigateSection('news'), desc: 'University announcements & events' },
        { label: 'Upcoming Events Calendar', action: () => onNavigateSection('events'), desc: 'Seminars, expos & guest lectures' }
      ]
    },
    {
      name: 'CONTACT',
      id: 'footer',
      dropdown: [
        { label: 'Admissions & Inquiries', action: () => onOpenAdmissions(), desc: 'Schedule an advisor consultation' },
        { label: 'Campus Map & Directions', action: () => onNavigateSection('campus-tour'), desc: 'Visit our Melbourne campus' },
        { label: 'General Help & Support', action: () => onOpenFaq?.(), desc: 'Frequently asked student questions' }
      ]
    }
  ];

  return (
    <header className="w-full z-50 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. TOP NAVY CONTACT & APPLY BAR */}
      <div className="bg-[#132238] text-white text-xs py-2 sm:py-2.5 px-4 sm:px-8 border-b border-[#1c304d]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Contact: Phone & Email with gold icons */}
          <div className="flex items-center gap-4 sm:gap-6 text-slate-200">
            <a 
              href={`tel:${UNIVERSITY_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#ffb606] transition-colors text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffb606]" />
              <span className="font-semibold">{UNIVERSITY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${UNIVERSITY_INFO.generalEmail}`} 
              className="flex items-center gap-1.5 hover:text-[#ffb606] transition-colors text-[11px] sm:text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#ffb606]" />
              <span className="font-semibold">{UNIVERSITY_INFO.generalEmail}</span>
            </a>
          </div>

          {/* Right: Golden APPLY NOW button matching reference screenshot */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenLogin}
              className="hidden sm:inline-flex text-[11px] font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Portal Login
            </button>
            <button
              id="topbar-apply-now-btn"
              onClick={onOpenAdmissions}
              className="bg-[#ffb606] hover:bg-[#e5a405] text-slate-950 font-black text-[11px] uppercase tracking-widest px-5 sm:px-7 py-2 rounded-none transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE BRANDING & NAVIGATION BAR */}
      <nav
        id="main-navbar"
        className={`w-full bg-white transition-all duration-200 border-b border-slate-200 ${
          isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md animate-in fade-in duration-200' : 'relative'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          {/* EIKRA Brand Logo with Blue Roundel & Yellow Cap */}
          <div
            onClick={() => onNavigateSection('hero')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            {/* Logo Icon Roundel */}
            <div className="w-10 h-10 rounded-full bg-[#132238] flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-[#ffb606]" />
            </div>
            {/* Brand Title */}
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#132238] font-sans">
              EIKRA
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navMenuItems.map((item, idx) => (
              <div
                key={item.name}
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => onNavigateSection(item.id)}
                  className={`text-xs font-bold tracking-wider transition-colors flex items-center gap-1 uppercase ${
                    idx === 0
                      ? 'text-[#ffb606] font-black'
                      : 'text-slate-800 hover:text-[#ffb606]'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-lg shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {item.dropdown.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => {
                          sub.action();
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left p-2.5 rounded-md hover:bg-slate-50 transition-colors group block"
                      >
                        <p className="text-xs font-bold text-slate-800 group-hover:text-[#ffb606] transition-colors">
                          {sub.label}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                          {sub.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Icons: Search, Cart, Hamburger Menu */}
          <div className="flex items-center gap-4 text-slate-800">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              id="header-search-icon"
              className="p-1.5 text-slate-700 hover:text-[#ffb606] transition-colors cursor-pointer"
              title="Search Courses & Content"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Cart Icon with Yellow Pill Badge */}
            <button
              onClick={onOpenCart}
              id="header-cart-btn"
              className="relative p-1.5 text-slate-700 hover:text-[#ffb606] transition-colors cursor-pointer"
              title="View Cart"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 bg-[#ffb606] text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            </button>

            {/* Hamburger Menu / Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-800 hover:text-[#ffb606] transition-colors cursor-pointer"
              title="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="space-y-2">
              {navMenuItems.map((item) => (
                <div key={item.name} className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => {
                      onNavigateSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left text-xs font-bold text-slate-800 hover:text-[#ffb606] py-1.5 flex items-center justify-between uppercase"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <div className="pl-3 mt-1 space-y-1 border-l-2 border-[#ffb606]/40">
                    {item.dropdown.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => {
                          sub.action();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left text-xs text-slate-600 hover:text-[#ffb606] py-1 block"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  onOpenAdmissions();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#ffb606] hover:bg-[#e5a405] text-slate-950 font-black py-3 text-xs uppercase tracking-wider text-center"
              >
                APPLY NOW
              </button>
              <button
                onClick={() => {
                  onOpenSearch();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 text-xs font-bold flex items-center justify-center gap-2"
              >
                <Search className="w-3.5 h-3.5" />
                Search Catalog & Courses
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
