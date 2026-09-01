import React, { useState } from 'react';
import { PageId, StudentProfile } from '../types';
import {
  Menu,
  X,
  Search,
  Sparkles,
  GraduationCap,
  ChevronRight,
  BookOpen,
  LogOut,
  User,
  Award,
  BarChart3,
  Calendar,
  ChevronDown,
} from 'lucide-react';

interface EduNavbarProps {
  currentPage: PageId;
  currentStudent?: StudentProfile | null;
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onLogout?: () => void;
  onOpenSearch: () => void;
}

export const EduNavbar: React.FC<EduNavbarProps> = ({
  currentPage,
  currentStudent,
  onNavigate,
  onOpenAuth,
  onLogout,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const baseNavLinks: { id: PageId; label: string; action?: () => void }[] = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'paths', label: 'Programs' },
    {
      id: 'home',
      label: 'Universities',
      action: () => {
        onNavigate('home');
        setTimeout(() => {
          document.getElementById('universities-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
    },
    { id: 'mentorship', label: 'Instructors' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About' },
  ];

  const navLinks = currentStudent
    ? [
        ...baseNavLinks.slice(0, 4),
        { id: 'track-progress' as PageId, label: 'Student Dashboard' },
        ...baseNavLinks.slice(4),
      ]
    : baseNavLinks;

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    if (link.action) {
      link.action();
    } else {
      onNavigate(link.id);
    }
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            {/* Stylized Skillora Glowing Vector Logo */}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/35 transition-all">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display flex items-center gap-1.5">
                SKILLORA
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
              </span>
              <span className="text-[10px] text-indigo-600 font-mono font-bold tracking-widest uppercase -mt-0.5">
                Learn • Build
              </span>
            </div>
          </button>
        </div>

        {/* Center: Modern Floating Pill Navigation Bar */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id && !link.action;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/25'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Search + Login / Student Profile */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-slate-600 hover:text-slate-900 rounded-full bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 transition-colors cursor-pointer"
            title="Search courses, skills, and programs"
          >
            <Search className="w-4 h-4" />
          </button>

          {currentStudent ? (
            /* Logged-In Student Profile Chip & Dropdown */
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-3 bg-indigo-50/90 hover:bg-indigo-100/80 border border-indigo-200 rounded-full transition-all cursor-pointer group shadow-xs"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-indigo-400 shrink-0">
                  <img
                    src={currentStudent.avatar}
                    alt={currentStudent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900 leading-none">
                      {currentStudent.name}
                    </span>
                    <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-indigo-200/70 text-indigo-800 font-bold">
                      {currentStudent.studentId}
                    </span>
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-800 transition-transform" />
              </button>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in-50 zoom-in-95">
                  <div className="p-3 border-b border-slate-100 text-left">
                    <p className="text-xs font-bold text-slate-900">{currentStudent.name}</p>
                    <p className="text-[11px] font-mono text-indigo-600 font-semibold">
                      ID: {currentStudent.studentId}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5">
                      {currentStudent.program}
                    </p>
                  </div>

                  <div className="py-1 text-left space-y-0.5">
                    <button
                      onClick={() => {
                        onNavigate('track-progress');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-xs text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl flex items-center gap-2 transition-colors cursor-pointer font-medium"
                    >
                      <BarChart3 className="w-4 h-4 text-indigo-600" />
                      <span>Student Dashboard</span>
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('create-plan');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-xs text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl flex items-center gap-2 transition-colors cursor-pointer font-medium"
                    >
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>My AI Learning Plan</span>
                    </button>
                  </div>

                  <div className="pt-1 border-t border-slate-100">
                    <button
                      onClick={() => {
                        if (onLogout) onLogout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-xl flex items-center gap-2 transition-colors cursor-pointer font-medium text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Logged-out State */
            <>
              <button
                onClick={() => onOpenAuth('login')}
                className="px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer rounded-full hover:bg-slate-100 flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Student Login</span>
              </button>

              <button
                onClick={() => onOpenAuth('register')}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs rounded-full shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get Started</span>
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          {currentStudent && (
            <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={currentStudent.avatar}
                  alt={currentStudent.name}
                  className="w-9 h-9 rounded-xl object-cover border border-indigo-200"
                />
                <div>
                  <p className="text-xs font-bold text-slate-900">{currentStudent.name}</p>
                  <p className="text-[10px] font-mono text-indigo-600 font-bold">
                    ID: {currentStudent.studentId}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (onLogout) onLogout();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-red-600 font-semibold px-2 py-1 bg-white rounded-lg border border-red-200"
              >
                Sign Out
              </button>
            </div>
          )}

          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id && !link.action;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`w-full min-h-[44px] flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          {!currentStudent && (
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onOpenAuth('login');
                  setMobileMenuOpen(false);
                }}
                className="w-full min-h-[44px] py-2.5 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-slate-500" />
                <span>Student Login (Sample: SKL-2026-8891)</span>
              </button>

              <button
                onClick={() => {
                  onOpenAuth('register');
                  setMobileMenuOpen(false);
                }}
                className="w-full min-h-[44px] py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-xl shadow-md shadow-indigo-600/25 cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Started Free</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
