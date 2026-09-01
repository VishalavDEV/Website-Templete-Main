import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, MessageSquare, Sun, Moon, Maximize, Menu, ChevronDown, LogOut, User as UserIcon, Shield, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import NotificationDropdown from '../ui/NotificationDropdown';
import CommandPalette from '../ui/CommandPalette';

export default function Navbar({ toggleSidebar, title = "Command Center", breadcrumb = "Home / Dashboard" }) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full px-4 lg:px-8 py-3 bg-neura-bg/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between transition-all">
        {/* Left Side: Mobile Menu Button & Title */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan/50 text-slate-300 hover:text-white transition-all lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg lg:text-xl font-bold text-white tracking-tight flex items-center">
              {title}
            </h1>
            <p className="text-xs text-slate-400 font-medium">{breadcrumb}</p>
          </div>
        </div>

        {/* Center: Global Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <button
            onClick={() => setShowCommandPalette(true)}
            className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan/40 text-slate-400 hover:text-slate-200 transition-all text-sm group"
          >
            <div className="flex items-center space-x-2.5">
              <Search className="w-4 h-4 text-neura-cyan group-hover:scale-110 transition-transform" />
              <span>Search anything...</span>
            </div>
            <kbd className="px-2 py-0.5 text-[10px] font-mono bg-white/10 rounded text-slate-300 border border-white/10">
              Ctrl + K
            </kbd>
          </button>
        </div>

        {/* Right Side: Quick Action Buttons & Profile */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          {/* Mobile Search Icon */}
          <button
            onClick={() => setShowCommandPalette(true)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-neura-cyan md:hidden"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Prominent Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all ${
              theme === 'dark'
                ? 'bg-neura-cyan/15 border-neura-cyan/40 text-neura-cyan hover:bg-neura-cyan/25 shadow-glow-cyan/20'
                : 'bg-amber-500/15 border-amber-500/40 text-amber-500 hover:bg-amber-500/25'
            }`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-neura-cyan animate-pulse" />
                <span className="text-xs font-bold font-mono uppercase hidden sm:inline">LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold font-mono uppercase hidden sm:inline">DARK</span>
              </>
            )}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex p-2 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan/50 text-slate-300 hover:text-neura-cyan transition-all"
            title="Toggle Fullscreen"
          >
            <Maximize className="w-4 h-4" />
          </button>

          {/* Notification Button */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan/50 text-slate-300 hover:text-neura-cyan transition-all relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-neura-cyan animate-ping" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-neura-cyan" />
            </button>
            <NotificationDropdown isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
          </div>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2.5 p-1.5 pr-3 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan/50 transition-all"
            >
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                alt="Avatar"
                className="w-7 h-7 rounded-lg object-cover ring-2 ring-neura-cyan/30"
              />
              <span className="hidden sm:inline text-xs font-semibold text-white max-w-[100px] truncate">
                {user?.name || 'Admin'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-3 w-56 bg-neura-panel border border-white/10 rounded-2xl shadow-2xl p-2 z-50 text-xs">
                <div className="p-2.5 border-b border-white/10 mb-1">
                  <p className="font-semibold text-white truncate">{user?.name || 'Admin User'}</p>
                  <p className="text-slate-400 truncate">{user?.email || 'admin@neura.tech'}</p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 bg-neura-cyan/20 text-neura-cyan rounded text-[10px] font-mono font-bold">
                    {user?.role || 'ADMIN'}
                  </span>
                </div>
                <button onClick={() => { setShowUserMenu(false); navigate('/profile'); }} className="w-full flex items-center space-x-2 p-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  <UserIcon className="w-4 h-4 text-neura-cyan" />
                  <span>My Profile</span>
                </button>
                <button onClick={() => { setShowUserMenu(false); navigate('/settings'); }} className="w-full flex items-center space-x-2 p-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  <Settings className="w-4 h-4 text-neura-purple" />
                  <span>Account Settings</span>
                </button>
                <button onClick={() => { setShowUserMenu(false); navigate('/security'); }} className="w-full flex items-center space-x-2 p-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Security</span>
                </button>
                <div className="my-1 border-t border-white/10" />
                <button
                  onClick={logout}
                  className="w-full flex items-center space-x-2 p-2 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-colors font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Global Command Palette Modal */}
      <CommandPalette isOpen={showCommandPalette} onClose={setShowCommandPalette} />
    </>
  );
}
