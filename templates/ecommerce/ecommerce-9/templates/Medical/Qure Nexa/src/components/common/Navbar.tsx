import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  Calendar,
  User as UserIcon,
  Menu,
  X,
  HeartPulse,
  LogOut,
  LayoutDashboard,
  Bell,
  CheckCircle2,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from './Button';
import { Badge } from './Badge';
import { ApiService } from '../../services/api';
import { Notification } from '../../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, params?: Record<string, string>) => void;
  onOpenBooking: (prefill?: { doctorId?: string; departmentId?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenBooking
}) => {
  const { user, logout, switchDemoRole } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDemoRoleMenu, setShowDemoRoleMenu] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (user) {
      ApiService.getNotifications(user.user_id).then(setNotifications);
    }
  }, [user]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'departments', label: 'Departments' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const unreadCount = notifications.filter(n => !n.is_read).length;

  const getDashboardView = () => {
    if (!user) return 'login';
    if (user.role === 'admin') return 'admin-dashboard';
    if (user.role === 'doctor') return 'doctor-dashboard';
    return 'patient-dashboard';
  };

  const handleNotificationClick = async (notif: Notification) => {
    await ApiService.markNotificationRead(notif.id);
    setNotifications(prev => prev.map(n => (n.id === notif.id ? { ...n, is_read: true } : n)));
    if (notif.action_url) {
      if (notif.action_url.includes('patient')) onNavigate('patient-dashboard');
      else if (notif.action_url.includes('doctor')) onNavigate('doctor-dashboard');
      else if (notif.action_url.includes('admin')) onNavigate('admin-dashboard');
    }
    setShowNotifications(false);
  };

  return (
    <header className="sticky top-3 z-50 w-full px-3 sm:px-6 transition-all duration-300">
      {/* Top Floating Notification Pill & Demo Switcher */}
      <div className={`relative max-w-7xl mx-auto mb-2 flex items-center justify-between gap-2 px-4 py-1.5 bg-slate-900/90 backdrop-blur-md rounded-2xl text-slate-200 text-xs shadow-lg border border-slate-800/80 ${showDemoRoleMenu ? 'z-40' : 'z-20'}`}>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 text-rose-400 font-semibold text-[11px] sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span>Emergency 24/7: <a href="tel:+911800555091" className="hover:underline font-bold text-white">+91 1800 555 091</a></span>
          </div>
          <span className="hidden md:inline text-slate-700">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-teal-300/90 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Accredited Academic Medical Center</span>
          </div>
        </div>

        {/* Quick Demo Switcher Strip */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowDemoRoleMenu(!showDemoRoleMenu);
                setShowNotifications(false);
                setShowUserDropdown(false);
              }}
              className="flex items-center gap-1.5 bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 px-2.5 py-1 rounded-xl border border-teal-400/30 transition-all text-[11px] font-medium cursor-pointer"
            >
              <span>⚡ Demo Role:</span>
              <span className="font-bold text-white capitalize">{user?.role || 'Switch'}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {showDemoRoleMenu && (
              <div className="absolute right-0 mt-1.5 w-56 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/80 py-2 z-50 text-slate-100 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3.5 py-1 text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                  Select Portal Role
                </div>
                <button
                  type="button"
                  onClick={() => {
                    switchDemoRole('patient');
                    setShowDemoRoleMenu(false);
                    onNavigate('patient-dashboard');
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs hover:bg-teal-500/20 flex items-center justify-between text-slate-200 hover:text-white cursor-pointer"
                >
                  <span>👤 Patient (Sarah Mitchell)</span>
                  {user?.role === 'patient' && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    switchDemoRole('doctor');
                    setShowDemoRoleMenu(false);
                    onNavigate('doctor-dashboard');
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs hover:bg-teal-500/20 flex items-center justify-between text-slate-200 hover:text-white cursor-pointer"
                >
                  <span>🩺 Doctor (Dr. David Chen)</span>
                  {user?.role === 'doctor' && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    switchDemoRole('admin');
                    setShowDemoRoleMenu(false);
                    onNavigate('admin-dashboard');
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs hover:bg-teal-500/20 flex items-center justify-between text-slate-200 hover:text-white cursor-pointer"
                >
                  <span>🛡️ Admin (Eleanor Sterling)</span>
                  {user?.role === 'admin' && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop overlay for closing dropdowns when clicking outside */}
      {(showDemoRoleMenu || showNotifications || showUserDropdown) && (
        <div
          className="fixed inset-0 z-15 bg-transparent"
          onClick={() => {
            setShowDemoRoleMenu(false);
            setShowNotifications(false);
            setShowUserDropdown(false);
          }}
        />
      )}

      {/* Floating Main Navbar Container */}
      <div
        className={`relative max-w-7xl mx-auto glass-nav rounded-3xl transition-all duration-300 ${
          showUserDropdown || showNotifications ? 'z-30' : 'z-10'
        } ${
          isScrolled
            ? 'py-2 px-4 shadow-2xl border-teal-500/20'
            : 'py-3 px-5 shadow-xl border-white/80'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Hospital Brand Logo */}
          <div
            id="brand-logo"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <HeartPulse className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-slate-900 tracking-tight">Qure</span>
                <span className="text-xl font-black text-teal-600 tracking-tight">Nexa</span>
                <span className="text-[10px] bg-teal-100/90 text-teal-800 font-extrabold px-2 py-0.5 rounded-full tracking-widest uppercase border border-teal-200/60 shadow-2xs">
                  Health
                </span>
              </div>
              <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase -mt-0.5 hidden sm:block">
                Precision & Care
              </p>
            </div>
          </div>

          {/* Desktop Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1.5 rounded-2xl border border-slate-200/60 backdrop-blur-md">
            {navLinks.map(link => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-${link.id}`}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-teal-600 to-teal-500 shadow-md shadow-teal-500/25 font-bold scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Notification Bell */}
            {user && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowDemoRoleMenu(false);
                    setShowUserDropdown(false);
                  }}
                  className="p-2.5 rounded-2xl text-slate-600 hover:text-teal-600 hover:bg-teal-50/80 border border-transparent hover:border-teal-200 relative transition-all cursor-pointer"
                  aria-label="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white shadow-sm">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/80 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h4 className="text-sm font-bold text-slate-900">Notifications</h4>
                      <Badge variant="teal" size="sm">
                        {unreadCount} unread
                      </Badge>
                    </div>
                    <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto mt-2">
                      {notifications.length === 0 ? (
                        <p className="text-xs text-slate-400 py-6 text-center">No notifications yet.</p>
                      ) : (
                        notifications.map(notif => (
                          <div
                            key={notif.id}
                            onClick={() => handleNotificationClick(notif)}
                            className={`py-3 px-3 rounded-2xl transition-all cursor-pointer ${
                              !notif.is_read ? 'bg-teal-50/60 hover:bg-teal-50 border border-teal-100' : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-xs font-bold text-slate-900 leading-tight">{notif.title}</p>
                              {!notif.is_read && <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0 mt-1" />}
                            </div>
                            <p className="text-xs text-slate-600 mt-1 line-clamp-2">{notif.message}</p>
                            <span className="text-[10px] text-slate-400 mt-1.5 block">
                              {new Date(notif.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* User Profile Avatar / Menu */}
            {user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setShowUserDropdown(!showUserDropdown);
                    setShowNotifications(false);
                    setShowDemoRoleMenu(false);
                  }}
                  className="flex items-center gap-2 p-1 pr-3 rounded-2xl border border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 backdrop-blur-md transition-all cursor-pointer shadow-2xs"
                >
                  <img
                    src={user.avatar_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120'}
                    alt={user.name}
                    className="w-8 h-8 rounded-xl object-cover ring-2 ring-teal-500/30"
                  />
                  <div className="text-left hidden md:block">
                    <p className="text-xs font-bold text-slate-800 leading-none truncate max-w-[110px]">
                      {user.name.split(' ')[0]}
                    </p>
                    <span className="text-[10px] font-semibold text-teal-700 capitalize">
                      {user.role}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden md:block" />
                </button>

                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/80 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <button
                        type="button"
                        onClick={() => {
                          onNavigate(getDashboardView());
                          setShowUserDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800 flex items-center gap-2 cursor-pointer"
                      >
                        <LayoutDashboard className="w-4 h-4 text-teal-600" />
                        <span>Go to {user.role.toUpperCase()} Dashboard</span>
                      </button>
                    </div>
                    <div className="border-t border-slate-100 pt-1">
                      <button
                        type="button"
                        onClick={async () => {
                          await logout();
                          setShowUserDropdown(false);
                          onNavigate('home');
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                      >
                        <LogOut className="w-4 h-4 text-rose-500" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                id="btn-nav-login"
                variant="outline"
                size="sm"
                leftIcon={<UserIcon className="w-4 h-4 text-teal-600" />}
                onClick={() => onNavigate('login')}
                className="hidden sm:inline-flex rounded-2xl border-slate-300 hover:border-teal-500"
              >
                Sign In
              </Button>
            )}

            {/* Persistent Book Appointment CTA */}
            <Button
              id="btn-nav-book-appointment"
              variant="primary"
              size="sm"
              leftIcon={<Calendar className="w-4 h-4" />}
              onClick={() => onOpenBooking()}
              className="rounded-2xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-2xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl rounded-3xl mt-3 border border-slate-200/80 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-100">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-xl text-xs font-semibold ${
                    currentView === link.id
                      ? 'bg-teal-600 text-white font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {user && (
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start rounded-xl"
                  leftIcon={<LayoutDashboard className="w-4 h-4" />}
                  onClick={() => {
                    onNavigate(getDashboardView());
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Open {user.role.toUpperCase()} Dashboard
                </Button>
              </div>
            )}

            <div className="pt-3 flex flex-col gap-2">
              <a
                href="tel:+911800555091"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold"
              >
                <PhoneCall className="w-4 h-4 text-rose-600" />
                Emergency Hotline: +91 1800 555 091
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
