import React, { useState } from 'react';
import { Search, Sun, Moon, Bell, Menu } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  unreadNotifications: number;
  onNotificationsClick: () => void;
  onProfileClick: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onMobileMenuToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  unreadNotifications,
  onNotificationsClick,
  onProfileClick,
  searchQuery,
  onSearchChange,
  isDarkMode,
  onToggleDarkMode,
  onMobileMenuToggle,
}) => {
  return (
    <header
      id="top-header"
      className="h-16 px-8 flex items-center justify-between border-b border-[#EAEFE9] bg-white sticky top-0 z-20"
    >
      {/* Left: Mobile Menu & Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        {onMobileMenuToggle && (
          <button
            id="mobile-menu-btn"
            type="button"
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <div className="relative w-full max-w-sm">
          <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="global-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2 text-[13px] bg-[#F9FBFA] border border-[#E5EAE5] rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 focus:border-[#10B981] transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          id="theme-toggle-btn"
          type="button"
          onClick={onToggleDarkMode}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
        </button>

        {/* Notifications */}
        <button
          id="notifications-btn"
          type="button"
          onClick={onNotificationsClick}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] relative transition-colors"
          title="Notifications"
        >
          <Bell className="w-[18px] h-[18px]" />
          {unreadNotifications > 0 && (
            <span
              id="notification-badge"
              className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#10B981] text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white"
            >
              {unreadNotifications}
            </span>
          )}
        </button>

        {/* User Avatar */}
        <div
          id="header-user-avatar"
          onClick={onProfileClick}
          className="flex items-center gap-2 pl-2 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-100"
          />
        </div>
      </div>
    </header>
  );
};
