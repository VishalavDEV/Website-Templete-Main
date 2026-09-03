import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  CalendarDays,
  Activity,
  BookOpen,
  MapPin,
  Lock,
  Search,
  Bell,
  Menu,
  X,
  AlertTriangle,
  ChevronDown,
  Sparkles,
  QrCode,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: UserProfile;
  onOpenEmergency: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  user,
  onOpenEmergency,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'passport', label: 'Health Passport', icon: ShieldCheck },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'prevention', label: 'Prevention', icon: CalendarDays },
    { id: 'risk', label: 'Risk & Insights', icon: Activity },
    { id: 'journal', label: 'Journal', icon: BookOpen },
    { id: 'map', label: 'Nearby Care', icon: MapPin },
    { id: 'privacy', label: 'Privacy', icon: Lock },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Upcoming Dental Checkup',
      desc: 'Scheduled for June 04 at Verdant Dental.',
      time: '2 hours ago',
      type: 'calendar',
    },
    {
      id: 2,
      title: 'Blood Report Verified',
      desc: 'Apex Diagnostics report synced to Vault.',
      time: 'May 24',
      type: 'doc',
    },
    {
      id: 3,
      title: 'Data Access Expired',
      desc: 'Apollo PT temporary share token expired.',
      time: 'Apr 10',
      type: 'privacy',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#E5E2DD] transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16 sm:h-[68px] gap-2 sm:gap-4">
          
          {/* Logo and Brand */}
          <div 
            onClick={() => setActiveTab('overview')}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#2D3A2D] to-[#1A251A] text-white flex items-center justify-center shadow-xs border border-[#3E4E3E] group-hover:scale-105 transition-transform duration-200">
              {/* Botanical stylized leaf / passport insignia */}
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#A8904F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                <path d="M12 8c2.5 1 3.5 3 3.5 5 0 2-1.5 3.5-3.5 4-2-.5-3.5-2-3.5-4 0-2 1-4 3.5-5z" fill="currentColor" fillOpacity="0.25" />
                <path d="M12 8v9" />
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D3A2D]">
                  Nuvita
                </span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#A8904F] bg-[#F5F2ED] px-1.5 py-0.5 rounded-md border border-[#E5E2DD]">
                  Health OS
                </span>
              </div>
              <p className="hidden sm:block text-[9px] uppercase tracking-[0.18em] text-[#A8904F] font-semibold leading-tight">
                Your health. Your sovereignty.
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Responsive from lg screens */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#E5E2DD]/40 p-1 rounded-full border border-[#E5E2DD]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-2.5 xl:px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-[#2D3A2D] text-white shadow-xs'
                      : 'text-[#5A5A40] hover:text-[#2D3A2D] hover:bg-white/70'
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#A8904F]' : 'text-[#8A9A5B]'}`} />
                  <span className="hidden xl:inline">{item.label}</span>
                  <span className="xl:hidden">
                    {item.id === 'passport' ? 'Passport' : item.id === 'prevention' ? 'Prevention' : item.id === 'risk' ? 'Insights' : item.id === 'map' ? 'Care Map' : item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Side Actions & Search */}
          <div className="flex items-center space-x-2 sm:space-x-2.5 shrink-0">
            
            {/* Quick Interactive Search Bar in Header */}
            <button
              id="search-button"
              onClick={onOpenSearch}
              className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-[#F5F2ED] hover:bg-white text-[#5A5A40] hover:text-[#2D3A2D] rounded-xl border border-[#E5E2DD] transition-all text-xs w-36 lg:w-44 xl:w-56 text-left group"
              title="Search records, documents, facilities (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-[#A8904F] group-hover:text-[#2D3A2D] shrink-0" />
              <span className="truncate text-[11px] text-[#5A5A40]">Search records...</span>
              <kbd className="ml-auto text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-[#E5E2DD] text-[#5A5A40]">⌘K</kbd>
            </button>

            {/* Mobile / Tablet Search Icon */}
            <button
              id="search-button-mobile"
              onClick={onOpenSearch}
              aria-label="Search records and prevention"
              className="md:hidden p-2 text-[#5A5A40] hover:text-[#2D3A2D] hover:bg-[#F5F2ED] rounded-xl transition-colors border border-transparent hover:border-[#E5E2DD]"
              title="Search records"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Privacy Secure Status Badge (on wide screens) */}
            <div className="hidden 2xl:flex items-center gap-2 bg-[#E5E2DD]/40 px-3 py-1.5 rounded-full border border-[#E5E2DD]">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2D3A2D]">E2E Encrypted</span>
            </div>

            {/* Emergency Fast Access Button */}
            <button
              id="emergency-top-button"
              onClick={onOpenEmergency}
              className="relative px-3 sm:px-3.5 py-1.5 bg-[#2D3A2D] text-white hover:bg-[#1A251A] text-xs font-semibold rounded-xl border border-white/10 flex items-center space-x-1.5 shadow-xs transition-all hover:shadow-sm"
              title="Open First Responder Emergency Health Card"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="tracking-wide hidden sm:inline">Emergency Card</span>
              <span className="tracking-wide sm:hidden">SOS</span>
            </button>

            {/* Notifications Popover */}
            <div className="relative">
              <button
                id="notifications-button"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 text-[#5A5A40] hover:text-[#2D3A2D] hover:bg-white rounded-xl transition-colors border border-transparent hover:border-[#E5E2DD]"
                aria-label="View notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#A8904F] rounded-full ring-2 ring-white"></span>
              </button>

              {notificationsOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setNotificationsOpen(false)} 
                  />
                  <div className="absolute right-0 mt-2 w-80 sm:w-88 bg-white border border-[#E5E2DD] rounded-2xl shadow-xl p-4 z-50 animate-in fade-in zoom-in-95">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
                      <span className="text-sm font-bold text-[#2D3A2D] font-serif">Health Alerts</span>
                      <span className="text-[11px] text-[#A8904F] font-semibold bg-[#F5F2ED] px-2 py-0.5 rounded-full border border-[#E5E2DD]">
                        3 Unread
                      </span>
                    </div>
                    <div className="divide-y divide-[#F5F2ED] mt-2 max-h-72 overflow-y-auto">
                      {notifications.map((n) => (
                        <div key={n.id} className="py-2.5 hover:bg-[#F5F2ED] px-2 rounded-xl transition-colors cursor-pointer">
                          <div className="flex items-start justify-between">
                            <p className="text-xs font-semibold text-[#2D3A2D]">{n.title}</p>
                            <span className="text-[10px] text-gray-400">{n.time}</span>
                          </div>
                          <p className="text-[11px] text-[#5A5A40] mt-0.5">{n.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2.5 mt-1 border-t border-[#E5E2DD] text-center">
                      <button 
                        onClick={() => { setActiveTab('prevention'); setNotificationsOpen(false); }}
                        className="text-xs text-[#2D3A2D] font-semibold hover:text-[#A8904F] transition-colors"
                      >
                        View All Preventive Milestones →
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Profile Avatar Pill */}
            <button
              id="profile-nav-pill"
              onClick={() => setActiveTab('passport')}
              className="flex items-center space-x-2 pl-1.5 pr-2.5 py-1 bg-white hover:bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl transition-colors shadow-xs"
              title="View your Health Passport Profile"
            >
              <div className="w-6 h-6 rounded-lg bg-[#2D3A2D] text-white text-[10px] font-bold flex items-center justify-center border border-white/40 shadow-xs">
                {user.fullName.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-xs font-medium text-[#2D3A2D] hidden md:inline">
                {user.fullName.split(' ')[0]}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 bg-[#F5F2ED] text-[#2D3A2D] rounded-md font-mono font-semibold border border-[#E5E2DD] hidden sm:inline">
                {user.bloodGroup}
              </span>
            </button>

            {/* Mobile Hamburger Toggle (under lg) */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#5A5A40] hover:text-[#2D3A2D] hover:bg-white rounded-xl border border-transparent hover:border-[#E5E2DD]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E2DD] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-3">
          {/* Quick Search in Mobile Menu */}
          <div className="pb-1">
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-2 px-3.5 py-2.5 bg-[#F5F2ED] text-[#5A5A40] rounded-xl border border-[#E5E2DD] text-xs"
            >
              <Search className="w-4 h-4 text-[#A8904F]" />
              <span>Search medical records, facilities...</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E5E2DD]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-xl text-left flex items-center space-x-2.5 text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#2D3A2D] text-white'
                      : 'bg-[#F5F2ED] text-[#2D3A2D] hover:bg-[#E5E2DD]'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-[#A8904F]' : 'text-[#8A9A5B]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="text-xs text-[#5A5A40]">
              Signed in as <span className="font-semibold text-[#2D3A2D]">{user.fullName}</span>
            </div>
            <button
              onClick={() => {
                onOpenEmergency();
                setMobileMenuOpen(false);
              }}
              className="px-3.5 py-2 bg-[#2D3A2D] text-white text-xs font-semibold rounded-xl shadow-xs"
            >
              Open Emergency Card
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
