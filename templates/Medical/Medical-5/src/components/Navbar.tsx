import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Calendar,
  Bell,
  User,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Activity,
  HeartPulse,
} from 'lucide-react';
import { ActivePage } from '../types';

export const Navbar: React.FC = () => {
  const {
    activePage,
    setActivePage,
    openBooking,
    setIsSearchOpen,
    setIsNotificationOpen,
    unreadNotificationCount,
    appointments,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'doctors', label: 'Find a Doctor' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'services', label: 'Services' },
    { id: 'library', label: 'Health Library' },
    { id: 'locations', label: 'Locations' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  const activeAppointmentsCount = appointments.filter(
    (a) => a.status === 'confirmed' || a.status === 'rescheduled'
  ).length;

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/60 backdrop-blur-md shadow-[0_4px_25px_rgba(90,70,110,0.06)] border-b border-[rgba(62,52,69,0.08)]'
            : 'py-4 bg-white/30 backdrop-blur-md border-b border-[rgba(62,52,69,0.05)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with concentric rings */}
            <button
              id="navbar-brand-logo"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full border border-[#8B6FAE]/30 bg-white/80 backdrop-blur-xs flex items-center justify-center relative shadow-xs group-hover:scale-105 transition-transform">
                <div className="w-6 h-6 rounded-full border border-[#8B6FAE]/60 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B6FAE] shadow-[0_0_8px_rgba(139,111,174,0.6)]" />
                </div>
              </div>
              <div>
                <span className="serif text-2xl font-bold tracking-tight text-[#3E3445] group-hover:text-[#665080] transition-colors">
                  Aura
                </span>
                <span className="block text-[9px] tracking-[0.22em] font-bold text-[#8B6FAE] uppercase -mt-1">
                  Health & Care
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-[#E8DDF2] text-[#665080] shadow-xs'
                        : 'text-[#756B7C] hover:text-[#3E3445] hover:bg-white/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons & Primary CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Quick Global Search Button (Cmd+K) */}
              <button
                id="navbar-search-btn"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#756B7C] bg-white/80 hover:bg-white border border-[#3E3445]/10 rounded-full shadow-xs hover:border-[#8B6FAE]/30 hover:text-[#3E3445] transition-all"
                title="Search Doctors, Specialties, Articles (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#8B6FAE]" />
                <span className="hidden xl:inline">Search...</span>
                <kbd className="text-[10px] bg-[#E8DDF2]/60 text-[#665080] px-1.5 py-0.5 rounded font-mono font-medium">
                  ⌘K
                </kbd>
              </button>

              {/* Notification Center Trigger */}
              <button
                id="navbar-notifications-btn"
                onClick={() => setIsNotificationOpen(true)}
                className="relative p-2.5 text-[#756B7C] hover:text-[#665080] bg-white/80 hover:bg-[#E8DDF2]/40 rounded-full border border-[#3E3445]/8 transition-all shadow-xs"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadNotificationCount > 0 && (
                  <span
                    id="unread-notifications-badge"
                    className="absolute -top-1 -right-1 w-4 h-4 bg-[#D98B9C] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-xs"
                  >
                    {unreadNotificationCount}
                  </span>
                )}
              </button>

              {/* Patient Portal Trigger */}
              <button
                id="navbar-portal-btn"
                onClick={() => handleNavClick('portal')}
                className={`relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full border transition-all ${
                  activePage === 'portal'
                    ? 'bg-[#665080] text-white border-[#665080] shadow-sm'
                    : 'bg-white/80 text-[#3E3445] border-[#3E3445]/10 hover:border-[#8B6FAE]/40 hover:bg-white'
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#8B6FAE]" />
                <span>Portal</span>
                {activeAppointmentsCount > 0 && (
                  <span
                    id="portal-active-appointments-badge"
                    className="w-2 h-2 rounded-full bg-[#739B82]"
                    title={`${activeAppointmentsCount} active appointment`}
                  />
                )}
              </button>

              {/* Primary Book Appointment Button */}
              <button
                id="navbar-book-appointment-btn"
                onClick={() => openBooking()}
                className="btn-lilac flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger & Quick Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                id="mobile-search-btn"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#756B7C] bg-white rounded-full border border-[#3E3445]/10"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                id="mobile-notifications-btn"
                onClick={() => setIsNotificationOpen(true)}
                className="relative p-2 text-[#756B7C] bg-white rounded-full border border-[#3E3445]/10"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadNotificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D98B9C] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                    {unreadNotificationCount}
                  </span>
                )}
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 text-[#3E3445] bg-[#E8DDF2] rounded-2xl hover:bg-[#B9A1D0]/30 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 bg-[#3E3445]/40 backdrop-blur-xs flex justify-end md:hidden animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-5/6 max-w-sm h-full bg-[#FFFDFC] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#3E3445]/8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#8B6FAE] flex items-center justify-center text-white">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-xl font-bold text-[#3E3445]">Aura Health</span>
                </div>
                <button
                  id="mobile-close-drawer-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#756B7C] hover:bg-[#E8DDF2]/40 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Nav Links */}
              <div className="py-4 space-y-1">
                <button
                  id="mobile-nav-home"
                  onClick={() => handleNavClick('home')}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activePage === 'home'
                      ? 'bg-[#E8DDF2] text-[#665080] font-semibold'
                      : 'text-[#3E3445] hover:bg-[#F9F7FB]'
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-[#8B6FAE]" />
                </button>

                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#E8DDF2] text-[#665080] font-semibold'
                          : 'text-[#3E3445] hover:bg-[#F9F7FB]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#8B6FAE]" />
                    </button>
                  );
                })}

                <div className="pt-2 border-t border-[#3E3445]/5">
                  <button
                    id="mobile-nav-portal"
                    onClick={() => handleNavClick('portal')}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                      activePage === 'portal'
                        ? 'bg-[#665080] text-white font-semibold'
                        : 'bg-[#F9F7FB] text-[#3E3445]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-[#8B6FAE]" />
                      <span>Patient Portal</span>
                    </div>
                    {activeAppointmentsCount > 0 && (
                      <span className="text-xs bg-[#739B82] text-white px-2 py-0.5 rounded-full font-bold">
                        {activeAppointmentsCount}
                      </span>
                    )}
                  </button>

                  <button
                    id="mobile-nav-health-check"
                    onClick={() => handleNavClick('health-check')}
                    className="w-full flex items-center justify-between px-4 py-3 mt-2 rounded-xl text-sm font-medium bg-[#F2D9DF]/40 text-[#665080]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#D98B9C]" />
                      <span>Wellness Health Check</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#D98B9C]" />
                  </button>

                  <button
                    id="mobile-nav-emergency"
                    onClick={() => handleNavClick('emergency')}
                    className="w-full flex items-center justify-between px-4 py-3 mt-2 rounded-xl text-sm font-medium bg-red-50 text-[#C77C83]"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-[#C77C83]" />
                      <span>Emergency Support</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#C77C83]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom Action */}
            <div className="pt-4 border-t border-[#3E3445]/8 space-y-3">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-3.5 bg-[#8B6FAE] text-white text-sm font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-md hover:bg-[#665080] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
