import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Calendar, 
  PhoneCall, 
  Menu, 
  X, 
  Stethoscope, 
  Building2, 
  Cpu, 
  Info, 
  ShieldAlert, 
  User, 
  Bell, 
  CheckCheck,
  ChevronDown,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ActiveTab } from '../types';

export const Navbar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    openBooking, 
    setIsCommandPaletteOpen,
    notifications,
    markAllNotificationsAsRead,
    markNotificationAsRead,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isPortalMenuOpen, setIsPortalMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const navLinks: { id: ActiveTab; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'home', label: 'Home', icon: <Activity className="w-4 h-4 text-[#1A535C]" />, desc: 'Aurevia health ecosystem' },
    { id: 'doctors', label: 'Specialists', icon: <Stethoscope className="w-4 h-4 text-[#1A535C]" />, desc: 'Board-certified medical specialists' },
    { id: 'departments', label: 'Departments', icon: <Building2 className="w-4 h-4 text-[#1A535C]" />, desc: 'Clinical institutes & centers' },
    { id: 'services', label: 'Services', icon: <Cpu className="w-4 h-4 text-[#1A535C]" />, desc: 'Robotics, 3T MRI & Genomics' },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4 text-[#1A535C]" />, desc: 'Clinical innovation & standards' },
    { id: 'emergency', label: 'Emergency', icon: <ShieldAlert className="w-4 h-4 text-rose-600" />, desc: '24/7 Level 1 Trauma Care & ER wait times' }
  ];

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl shadow-xs border-b border-gray-200/70'
          : 'py-4.5 bg-[#FAF9F6]/80 backdrop-blur-xl border-b border-gray-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Bento Grid Brand Logo */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
          id="brand-logo-btn"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-[#0A1128] to-[#1A535C] rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <div className="w-3.5 h-3.5 bg-[#4ECDC4] rounded-full shadow-[0_0_10px_rgba(78,205,196,0.9)] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#0A1128] font-['Manrope']">
                Aure<span className="text-[#1A535C]">via</span>
              </span>
              <span className="text-[9px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-[#1A535C]/10 text-[#1A535C]">
                Health
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold tracking-wider text-[#4A5568]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            const isEmergency = link.id === 'emergency';
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => {
                  setActiveTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative py-1 transition-all duration-200 uppercase tracking-widest flex items-center gap-1.5 ${
                  isActive
                    ? isEmergency
                      ? 'text-rose-600 font-bold border-b-2 border-rose-500 pb-0.5'
                      : 'text-[#0A1128] font-bold border-b-2 border-[#4ECDC4] pb-0.5'
                    : isEmergency
                    ? 'text-rose-600 hover:text-rose-700'
                    : 'text-[#4A5568] hover:text-[#0A1128]'
                }`}
              >
                {isEmergency && <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & Bento-Styled CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            id="nav-search-btn"
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200 text-xs text-[#4A5568] transition-colors shadow-2xs"
            title="Search (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden md:inline font-medium">Search</span>
            <kbd className="hidden md:inline-flex px-1.5 py-0.5 text-[9px] font-bold bg-gray-100 rounded border border-gray-300 text-slate-500">
              ⌘K
            </kbd>
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsNotifOpen((prev) => !prev)}
              id="nav-notification-btn"
              className="relative p-2 rounded-full text-[#4A5568] hover:text-[#0A1128] hover:bg-white transition-colors"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#1A535C] text-[#4ECDC4] text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {unreadCount}
                </span>
              )}
            </button>

            <AnimatePresence>
              {isNotifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-[28px] shadow-2xl border border-gray-100 p-4 z-50 text-slate-800"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[11px] font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                        Notifications
                      </h4>
                      {unreadCount > 0 && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-[#1A535C]/10 text-[#1A535C] rounded-full">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllNotificationsAsRead}
                        className="text-[11px] font-medium text-[#1A535C] hover:underline flex items-center gap-1"
                      >
                        <CheckCheck className="w-3 h-3" /> Mark all read
                      </button>
                    )}
                  </div>

                  <div className="max-h-64 overflow-y-auto space-y-2 divide-y divide-gray-50">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => markNotificationAsRead(n.id)}
                        className={`p-3 rounded-2xl cursor-pointer transition-colors ${
                          n.read ? 'bg-transparent text-slate-500' : 'bg-[#FAF9F6] border border-gray-100 text-[#0A1128]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-bold">{n.title}</p>
                          <span className="text-[10px] text-slate-400 whitespace-nowrap">{n.timestamp}</span>
                        </div>
                        <p className="text-[11px] text-[#4A5568] mt-0.5 leading-relaxed">{n.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 mt-2 border-t border-gray-100 text-center">
                    <button
                      onClick={() => {
                        setIsNotifOpen(false);
                        setActiveTab('patient_dashboard');
                      }}
                      className="text-xs text-[#1A535C] font-bold hover:underline"
                    >
                      View All Health Records in Portal →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portals / Perspective Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsPortalMenuOpen((prev) => !prev)}
              id="nav-portals-btn"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-gray-100 text-xs font-bold text-[#0A1128] transition-colors border border-gray-200 shadow-2xs"
            >
              <User className="w-3.5 h-3.5 text-[#1A535C]" />
              <span className="hidden sm:inline">
                {activeTab === 'patient_dashboard'
                  ? 'Patient Portal'
                  : activeTab === 'doctor_dashboard'
                  ? 'Doctor Console'
                  : activeTab === 'admin_dashboard'
                  ? 'Admin Ops'
                  : 'Portals'}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            <AnimatePresence>
              {isPortalMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-[28px] shadow-2xl border border-gray-100 p-2.5 z-50"
                >
                  <p className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#4A5568] tracking-[0.2em]">
                    Switch Perspective
                  </p>
                  <button
                    onClick={() => {
                      setIsPortalMenuOpen(false);
                      setActiveTab('patient_dashboard');
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-left text-xs transition-colors ${
                      activeTab === 'patient_dashboard'
                        ? 'bg-[#1A535C]/10 text-[#1A535C] font-bold'
                        : 'text-slate-700 hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <User className="w-4 h-4 text-[#1A535C]" />
                    <div>
                      <p className="font-bold text-[#0A1128]">Patient Portal</p>
                      <p className="text-[10px] text-[#4A5568]">Appointments, Vitals, Rx</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setIsPortalMenuOpen(false);
                      setActiveTab('doctor_dashboard');
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-left text-xs transition-colors ${
                      activeTab === 'doctor_dashboard'
                        ? 'bg-[#1A535C]/10 text-[#1A535C] font-bold'
                        : 'text-slate-700 hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4 text-[#1A535C]" />
                    <div>
                      <p className="font-bold text-[#0A1128]">Doctor Clinical Console</p>
                      <p className="text-[10px] text-[#4A5568]">Queue, Rounds, Notes</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setIsPortalMenuOpen(false);
                      setActiveTab('admin_dashboard');
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-left text-xs transition-colors ${
                      activeTab === 'admin_dashboard'
                        ? 'bg-[#1A535C]/10 text-[#1A535C] font-bold'
                        : 'text-slate-700 hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <Layers className="w-4 h-4 text-[#1A535C]" />
                    <div>
                      <p className="font-bold text-[#0A1128]">Admin & Hospital Ops</p>
                      <p className="text-[10px] text-[#4A5568]">Beds, ER, Master Ledger</p>
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Primary CTA: Book Appointment in Bento Pill Style */}
          <button
            onClick={() => openBooking()}
            id="nav-book-appointment-btn"
            className="hidden sm:flex items-center gap-2 bg-[#0A1128] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#1A535C] transition-all active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#4ECDC4]" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 rounded-full text-[#0A1128] hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 py-6 shadow-xl"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-colors ${
                    activeTab === link.id
                      ? 'bg-[#1A535C]/10 text-[#1A535C] font-bold border border-[#1A535C]/20'
                      : 'hover:bg-slate-50 text-[#4A5568]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-xl">{link.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-[#0A1128]">{link.label}</p>
                      <p className="text-xs text-[#4A5568]">{link.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-3 rounded-full bg-[#0A1128] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#4ECDC4]" />
                Book Clinical Appointment
              </button>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveTab('patient_dashboard');
                  }}
                  className="p-2 text-center rounded-xl bg-gray-100 text-[11px] font-bold text-slate-700"
                >
                  Patient
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveTab('doctor_dashboard');
                  }}
                  className="p-2 text-center rounded-xl bg-gray-100 text-[11px] font-bold text-slate-700"
                >
                  Doctor
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveTab('admin_dashboard');
                  }}
                  className="p-2 text-center rounded-xl bg-gray-100 text-[11px] font-bold text-slate-700"
                >
                  Admin Ops
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
