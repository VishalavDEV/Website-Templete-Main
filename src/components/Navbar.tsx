import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import { NavTab } from '../types/wellness';
import {
  Bell,
  Search,
  Plus,
  Compass,
  LayoutDashboard,
  Dumbbell,
  Apple,
  Moon,
  Smile,
  CheckSquare,
  Trophy,
  Sparkles,
  MapPin,
  FileBadge,
  Menu,
  X,
  RotateCcw,
  UserCheck,
  LogIn,
  Home as HomeIcon,
  ChevronRight,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    setIsLogActivityOpen,
    setIsSearchOpen,
    setIsLoginModalOpen,
    userName,
    resetAllToDefault,
  } = useWellness();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNavItems: { tab: NavTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'home', label: 'Home', icon: <Compass className="w-4 h-4" /> },
    { tab: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { tab: 'fitness', label: 'Fitness', icon: <Dumbbell className="w-4 h-4" /> },
    { tab: 'nutrition', label: 'Nutrition', icon: <Apple className="w-4 h-4" /> },
    { tab: 'sleep', label: 'Sleep', icon: <Moon className="w-4 h-4" /> },
    { tab: 'mindfulness', label: 'Mindfulness', icon: <Smile className="w-4 h-4" /> },
    { tab: 'habits', label: 'Habits', icon: <CheckSquare className="w-4 h-4" /> },
    { tab: 'challenges', label: 'Challenges', icon: <Trophy className="w-4 h-4" /> },
    { tab: 'insights', label: 'Insights', icon: <Sparkles className="w-4 h-4" /> },
    { tab: 'nearby', label: 'Nearby', icon: <MapPin className="w-4 h-4" /> },
    { tab: 'passport', label: 'Passport', icon: <FileBadge className="w-4 h-4" /> },
  ];

  const notificationList = [
    {
      id: 1,
      title: 'Hydration Target Reminder',
      text: 'You are 1.2L away from your 3.0L goal. Drink a fresh glass now!',
      time: '12m ago',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Active Challenge Update',
      text: 'Day 5 task for 7-Day Hydration is unlocked & ready to log.',
      time: '1h ago',
      color: 'bg-emerald-500',
    },
    {
      id: 3,
      title: 'Peak Movement Window',
      text: 'Your optimal activity window starts at 5:30 PM today.',
      time: '3h ago',
      color: 'bg-amber-500',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shrink-0">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-105 transition-transform">
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-xs rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
                VITALIA
              </span>
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-md border border-emerald-100">
                LIFE
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wider uppercase hidden xs:inline">
              Wellness Companion
            </span>
          </div>
        </button>

        {/* Desktop / Laptop Navigation Links (xl+) */}
        <nav
          id="desktop-nav"
          className="hidden xl:flex items-center gap-1 text-[13px] font-semibold tracking-normal text-slate-500"
        >
          {primaryNavItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                id={`nav-link-${item.tab}`}
                onClick={() => setActiveTab(item.tab)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-emerald-700 bg-emerald-50/80 font-bold border border-emerald-200/50'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className={isActive ? 'text-emerald-600' : 'text-slate-400'}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls (Responsive on mobile, tablet, desktop) */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          {/* Quick Search trigger */}
          <button
            id="nav-search-btn"
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
            title="Search wellness hubs"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              id="nav-notification-btn"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl relative transition-colors cursor-pointer"
              title="Notifications"
            >
              <div className="w-2 h-2 bg-rose-500 rounded-full absolute top-2 right-2 border-2 border-white ring-1 ring-rose-200"></div>
              <Bell className="w-5 h-5" />
            </button>

            {showNotifications && (
              <div className="fixed sm:absolute inset-x-3 sm:inset-x-auto top-18 sm:top-auto sm:right-0 sm:mt-3 w-auto sm:w-96 bg-white rounded-3xl sm:rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-150 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">Wellness Reminders</span>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full">
                      3 active
                    </span>
                  </div>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-xs text-slate-400 hover:text-slate-600 font-medium cursor-pointer"
                  >
                    Close
                  </button>
                </div>
                <div className="divide-y divide-slate-50 max-h-72 overflow-y-auto">
                  {notificationList.map((notif) => (
                    <div key={notif.id} className="py-3 flex gap-3 hover:bg-slate-50/50 rounded-xl px-2 transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${notif.color}`}></div>
                      <div className="space-y-0.5 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-800">{notif.title}</h4>
                          <span className="text-[10px] text-slate-400">{notif.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{notif.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => {
                      setActiveTab('dashboard');
                      setShowNotifications(false);
                    }}
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer"
                  >
                    View daily schedule →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Log Activity Button (Visible on tablet & desktop, hidden on tiny phones) */}
          <button
            id="nav-log-activity-btn"
            onClick={() => setIsLogActivityOpen(true)}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold shadow-md shadow-emerald-200/60 transition-all text-xs cursor-pointer active:scale-95 shrink-0"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Log Activity</span>
          </button>

          {/* Member Login Button (Hidden on small mobile, visible from sm+) */}
          <button
            id="nav-login-modal-btn"
            onClick={() => setIsLoginModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-xl font-bold text-xs transition-colors cursor-pointer shrink-0"
            title="Member Log In / Settings"
          >
            <LogIn className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden lg:inline">Log In</span>
          </button>

          {/* Profile Pill & Dropdown */}
          <div className="relative">
            <button
              id="nav-profile-btn"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-1.5 sm:gap-2 p-1 sm:pr-2.5 rounded-full hover:bg-slate-50 border border-slate-200/80 transition-all cursor-pointer"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-xs shadow-xs">
                {userName.slice(0, 2).toUpperCase()}
              </div>
              <span className="hidden lg:inline text-xs font-bold text-slate-700">{userName}</span>
            </button>

            {showProfileMenu && (
              <div className="fixed sm:absolute inset-x-3 sm:inset-x-auto top-18 sm:top-auto sm:right-0 sm:mt-3 w-auto sm:w-64 bg-white rounded-3xl sm:rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="p-3 bg-slate-50 rounded-2xl mb-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{userName} Morgan</span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded-md">
                      Home Default
                    </span>
                  </div>
                  <div className="text-[11px] font-medium text-emerald-600 mt-0.5">Gold Lifestyle Tier · 84 pts</div>
                </div>

                <div className="space-y-1">
                  <button
                    id="profile-menu-home-btn"
                    onClick={() => {
                      setActiveTab('home');
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <HomeIcon className="w-4 h-4 text-emerald-600" />
                      <span>Platform Home</span>
                    </div>
                    <span className="text-[9px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded-sm border border-emerald-200">
                      Default
                    </span>
                  </button>

                  <button
                    id="profile-menu-login-btn"
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl flex items-center gap-2 cursor-pointer"
                  >
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    <span>Member Sign In / Profile</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('passport');
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl flex items-center gap-2 cursor-pointer"
                  >
                    <FileBadge className="w-4 h-4 text-emerald-600" />
                    <span>Health Passport</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('dashboard');
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl flex items-center gap-2 cursor-pointer"
                  >
                    <LayoutDashboard className="w-4 h-4 text-blue-500" />
                    <span>Wellness Dashboard</span>
                  </button>
                </div>

                <div className="my-2 border-t border-slate-100"></div>

                <button
                  onClick={() => {
                    resetAllToDefault();
                    setShowProfileMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Demo Data</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile & Tablet hamburger toggle button (Visible on screens below xl) */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-8 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-3 duration-200">
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setIsLogActivityOpen(true);
                setMobileMenuOpen(false);
              }}
              className="py-3 bg-emerald-500 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-200 active:scale-95 transition-transform cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              Quick Log
            </button>
            <button
              onClick={() => {
                setIsLoginModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="py-3 bg-slate-100 text-slate-700 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200 active:scale-95 transition-transform cursor-pointer"
            >
              <LogIn className="w-4 h-4 text-emerald-600" />
              Member Log In
            </button>
          </div>

          {/* Categorized Navigation Grid */}
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 px-1">
              All Wellness Hubs
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              {primaryNavItems.map((item) => {
                const isActive = activeTab === item.tab;
                return (
                  <button
                    key={item.tab}
                    onClick={() => {
                      setActiveTab(item.tab);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-3 rounded-2xl text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'text-slate-700 hover:bg-slate-50 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={isActive ? 'text-emerald-600' : 'text-slate-500'}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {isActive ? (
                      <span className="text-[9px] font-black uppercase bg-emerald-200/70 text-emerald-900 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
