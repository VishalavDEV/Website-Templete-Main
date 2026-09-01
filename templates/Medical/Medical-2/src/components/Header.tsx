import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, MapPin, Clock, Calendar, HeartPulse, Menu, 
  X, ShieldAlert, User, ChevronRight 
} from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenEmergency: () => void;
  onOpenMyAppointments: () => void;
  appointmentCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenEmergency,
  onOpenMyAppointments,
  appointmentCount,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'departments', label: 'Departments' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'appointment', label: 'Appointment' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility / Emergency Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Emergency & Location Quick Badges */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              id="topbar-emergency-btn"
              onClick={onOpenEmergency}
              className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-bold bg-rose-950/60 hover:bg-rose-900/60 px-2.5 py-0.5 rounded-full border border-rose-800/60 transition group cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>24/7 Emergency Hotline: (800) 555-0199</span>
            </button>

            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>450 Medical Arts Pavilion, Boston, MA</span>
            </div>

            <div className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Outpatient Clinics: Mon-Sat 7:00 AM - 7:00 PM</span>
            </div>
          </div>

          {/* Patient Portal Link */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              id="topbar-my-appointments-btn"
              onClick={onOpenMyAppointments}
              className="flex items-center gap-1.5 text-teal-300 hover:text-white font-semibold bg-teal-950/80 hover:bg-teal-900 px-3 py-1 rounded-full border border-teal-800 transition cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-teal-400" />
              <span>My Appointments</span>
              {appointmentCount > 0 && (
                <span className="bg-teal-500 text-white font-extrabold text-[10px] px-1.5 py-0.2 rounded-full">
                  {appointmentCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:bg-teal-700 transition-colors">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">
                Medicio<span className="text-teal-600">Health</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-black text-slate-400 block mt-0.5">
                Advanced Medical Center
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs font-semibold transition-all cursor-pointer py-1 ${
                    isActive
                      ? 'text-teal-600 border-b-2 border-teal-600 font-bold'
                      : 'text-slate-500 hover:text-teal-600'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              id="header-book-appointment-btn"
              onClick={() => handleLinkClick('appointment')}
              className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-slate-200 hover:bg-slate-800 active:scale-95 transition-all cursor-pointer group"
            >
              <Calendar className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200 transition cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fade-in space-y-3"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 border border-teal-200'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => handleLinkClick('appointment')}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-sm text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Clinical Appointment
              </button>
              <button
                id="mobile-drawer-emergency-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl border border-rose-200 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                24/7 Emergency Triage Guide
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
