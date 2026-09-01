import React, { useState } from 'react';
import {
  TrendingUp,
  User,
  PhoneCall,
  Bell,
  Menu,
  X,
  ChevronDown,
  Shield,
  Briefcase,
  DollarSign,
  PieChart,
  BookOpen,
  Calculator,
  Compass,
  FileText,
  Lock,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ActiveTab, Currency, AppNotification } from '../types';
import { CURRENCY_CONFIGS } from '../data/mockData';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (logged: boolean) => void;
  notifications: AppNotification[];
  setNotifications: React.Dispatch<React.SetStateAction<AppNotification[]>>;
  openBookingModal: () => void;
  openLoginModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  isLoggedIn,
  setIsLoggedIn,
  notifications,
  setNotifications,
  openBookingModal,
  openLoginModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'solutions', label: 'Our Services' },
    { id: 'portfolio', label: 'Investment Solutions' },
    { id: 'insights', label: 'Insights' },
    { id: 'performance', label: 'Performance' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const secondaryLinks: { id: ActiveTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'calculators', label: 'Investment Calculators', icon: Compass },
    { id: 'discovery', label: 'Fund Discovery', icon: Compass },
    { id: 'comparison', label: 'Compare Funds', icon: Layers },
    { id: 'education', label: 'Investor Education', icon: BookOpen },
    { id: 'reports', label: 'Reports & Filings', icon: FileText },
    { id: 'admin', label: 'Enterprise Admin', icon: Lock },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand: Investment Management with upward bar chart and gold arrow */}
          <div
            id="brand-logo"
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Custom SVG Logo matching screenshot: 3 navy bars with sweeping gold arrow */}
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                {/* 3 Ascending navy bars */}
                <rect x="6" y="24" width="5.5" height="15" rx="1.5" fill="#0A1C36" />
                <rect x="15" y="16" width="5.5" height="23" rx="1.5" fill="#0A1C36" />
                <rect x="24" y="8" width="5.5" height="31" rx="1.5" fill="#0A1C36" />
                {/* Sweeping gold upward trend curve and arrow */}
                <path
                  d="M5 33C14 31 22 23 35 12"
                  stroke="#D59F4A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M28 10.5L36.5 10.5L36.5 19"
                  stroke="#D59F4A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0A1C36]">
                Investment
              </div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0A1C36]">
                Management
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-[#0A1C36] font-bold'
                      : 'text-slate-700 hover:text-[#0A1C36]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#D59F4A] rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Extra tools / Hubs dropdown */}
            <div className="relative">
              <button
                id="nav-more-dropdown-btn"
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-slate-600 hover:text-[#0A1C36] transition-colors cursor-pointer"
                title="Calculators & Hubs"
              >
                <span>Tools</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {moreMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setMoreMenuOpen(false)}
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Additional Tools & Portals
                  </div>
                  {secondaryLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.id}
                        onClick={() => {
                          setActiveTab(link.id);
                          setMoreMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-left transition-colors ${
                          activeTab === link.id
                            ? 'bg-slate-50 text-[#0A1C36] font-bold border-l-2 border-[#D59F4A]'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#0A1C36]'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-slate-500" />
                        <span>{link.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Currency Switcher */}
            <div className="relative">
              <button
                id="currency-selector-btn"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
              >
                <span className="text-[#D59F4A] font-bold">{CURRENCY_CONFIGS[currency].symbol}</span>
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {currencyDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  {(Object.keys(CURRENCY_CONFIGS) as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-xs ${
                        currency === c
                          ? 'bg-slate-50 text-[#0A1C36] font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="font-bold text-[#0A1C36]">{CURRENCY_CONFIGS[c].symbol}</span>
                        <span>{c}</span>
                      </span>
                      {currency === c && <CheckCircle2 className="w-3.5 h-3.5 text-[#D59F4A]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                id="notifications-bell-btn"
                onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                className="relative p-2 text-slate-600 hover:text-[#0A1C36] hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D59F4A] text-[9px] font-bold text-slate-900 ring-2 ring-white shadow-xs">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 animate-in fade-in duration-150"
                  onMouseLeave={() => setNotifDropdownOpen(false)}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2.5">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-[#D59F4A]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1C36]">
                        Notifications ({notifications.length})
                      </h4>
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-[11px] font-bold text-[#D59F4A] hover:underline"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>

                  <div className="max-h-72 overflow-y-auto space-y-2">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        onClick={() => {
                          if (notif.linkTab) setActiveTab(notif.linkTab);
                          setNotifications((prev) =>
                            prev.map((n) => (n.id === notif.id ? { ...n, read: true } : n))
                          );
                          setNotifDropdownOpen(false);
                        }}
                        className={`p-3 rounded-xl cursor-pointer transition-colors border ${
                          notif.read
                            ? 'bg-slate-50/70 border-slate-100 text-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 font-medium'
                        } hover:bg-slate-100`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-bold text-[#0A1C36]">{notif.title}</p>
                          <span className="text-[10px] text-slate-400 whitespace-nowrap">
                            {notif.timestamp}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                          {notif.message}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Client Login Button (Exact matching rectangle with subtle border) */}
            {isLoggedIn ? (
              <button
                id="client-portal-active-btn"
                onClick={() => setActiveTab('portal')}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <User className="w-4 h-4 text-slate-700" />
                <span>My Portal</span>
              </button>
            ) : (
              <button
                id="client-login-btn"
                onClick={openLoginModal}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all"
              >
                <User className="w-4 h-4 text-slate-600" />
                <span>Client Login</span>
              </button>
            )}

            {/* Talk to an Advisor Button (Dark navy solid with right arrow) */}
            <button
              id="talk-to-advisor-btn"
              onClick={openBookingModal}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0A1C36] hover:bg-[#122A4E] active:bg-[#071426] rounded-lg transition-all shadow-sm group"
            >
              <span>Talk to an Advisor</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${
                  activeTab === item.id
                    ? 'bg-amber-50 text-amber-800 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
              Advanced Modules
            </div>
            <div className="grid grid-cols-2 gap-2">
              {secondaryLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-600">Currency:</span>
              <div className="flex gap-1">
                {(Object.keys(CURRENCY_CONFIGS) as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2 py-1 text-[11px] font-bold rounded ${
                      currency === c
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                openLoginModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 rounded-xl text-center"
            >
              {isLoggedIn ? 'Client Portal' : 'Client Login'}
            </button>
            <button
              onClick={() => {
                openBookingModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-xl text-center"
            >
              Book Advisor
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
