import React, { useState } from 'react';
import { Menu, Sun, Moon, Bell, MessageSquare, Search, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useApp } from '../../context/AppContext';
import ProfileDropdown from './ProfileDropdown';
import NotificationPanel from './NotificationPanel';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ toggleSidebar, toggleMobileSidebar, isCollapsed }) {
  const { theme, toggleTheme } = useTheme();
  const { adminProfile, notifications, conversations } = useApp();
  const navigate = useNavigate();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const unreadNotifs = notifications.filter(n => !n.read).length;
  const unreadMessages = conversations.reduce((acc, c) => acc + (c.unread || 0), 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();
    if (q.includes('user') || q.includes('alex') || q.includes('marcus')) navigate('/users');
    else if (q.includes('prod') || q.includes('headphone') || q.includes('watch')) navigate('/products');
    else if (q.includes('ord') || q.includes('9482')) navigate('/orders');
    else if (q.includes('report')) navigate('/reports');
    else navigate('/analytics');
  };

  return (
    <header
      className={`fixed top-0 right-0 z-30 h-16 glass-nav border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300 left-0 ${
        isCollapsed ? 'lg:left-20' : 'lg:left-64'
      }`}
    >
      <div className="flex items-center justify-between h-full px-4 sm:px-6">
        {/* Left Toggle & Search */}
        <div className="flex items-center gap-3 flex-1 max-w-lg">
          <button
            onClick={toggleMobileSidebar}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Quick Search */}
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md hidden sm:block">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users, orders, analytics, settings... (Press Enter)"
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
            />
          </form>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-slate-700" />
            ) : (
              <Sun className="w-5 h-5 text-amber-400" />
            )}
          </button>

          {/* Messages Direct Link */}
          <button
            onClick={() => navigate('/messages')}
            className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Messages"
          >
            <MessageSquare className="w-5 h-5" />
            {unreadMessages > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-brand-500 rounded-full ring-2 ring-white dark:ring-slate-900 animate-pulse" />
            )}
          </button>

          {/* Notification Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => {
                setIsNotifOpen(prev => !prev);
                setIsProfileOpen(false);
              }}
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadNotifs > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900 animate-pulse" />
              )}
            </button>
            <NotificationPanel isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
          </div>

          <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 my-auto mx-1" />

          {/* Admin Profile Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => {
                setIsProfileOpen(prev => !prev);
                setIsNotifOpen(false);
              }}
              className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <img
                src={adminProfile.avatar}
                alt={adminProfile.name}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-brand-500/30"
              />
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {adminProfile.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  {adminProfile.role}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <ProfileDropdown isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
