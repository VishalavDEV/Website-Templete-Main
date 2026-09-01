import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, Search, Bell, MessageSquare, User, Settings, Shield, LogOut, ChevronDown } from 'lucide-react';
import { NotificationService, Notification } from '../../services/apiServices';

interface NavbarProps {
  onToggleSidebarMobile: () => void;
  onToggleSidebarDesktop: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebarMobile, onToggleSidebarDesktop, onLogout }) => {
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  // Retrieve user details from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await NotificationService.getAll();
      setNotifications(data.slice(0, 5)); // show top 5
      const countRes = await NotificationService.getUnreadCount();
      setUnreadCount(countRes.count);
    } catch (err) {
      console.error('Failed to load notifications in navbar', err);
    }
  };

  const handleMarkAllRead = async () => {
    try {
      await NotificationService.markAllAsRead();
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-6">
      <div className="flex items-center gap-4">
        {/* Toggle buttons */}
        <button
          onClick={onToggleSidebarMobile}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
        <button
          onClick={onToggleSidebarDesktop}
          className="hidden lg:block p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Global Search Bar */}
        <div className="relative hidden md:block w-64 lg:w-80">
          <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
          <input
            type="text"
            placeholder="Type '/' to search..."
            className="w-full pl-9 pr-4 py-2 border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-slate-50 hover:bg-slate-100/70"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Messages Shortcut */}
        <Link
          to="/messages"
          className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-xl relative transition-all active:scale-95"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-white animate-pulse" />
        </Link>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
            className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-xl relative transition-all active:scale-95"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>

          {notifDropdownOpen && (
            <div className="absolute right-0 mt-3 w-80 rounded-2xl border border-slate-150 bg-white p-2 shadow-2xl card-shadow animate-modal-pop">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 mb-2">
                <span className="font-bold text-slate-800 text-sm">Notifications</span>
                {unreadCount > 0 && (
                  <button
                    onClick={handleMarkAllRead}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    Mark all read
                  </button>
                )}
              </div>
              <div className="max-h-64 overflow-y-auto space-y-1">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-xs text-slate-400">No new notifications</div>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => {
                        navigate('/notifications');
                        setNotifDropdownOpen(false);
                      }}
                      className={`p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-all flex flex-col gap-1 ${
                        !n.isRead ? 'bg-indigo-50/20' : ''
                      }`}
                    >
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">{n.message}</p>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  ))
                )}
              </div>
              <Link
                to="/notifications"
                onClick={() => setNotifDropdownOpen(false)}
                className="block text-center text-xs text-indigo-600 hover:text-indigo-850 font-bold py-2 border-t border-slate-100 mt-2"
              >
                View all notifications
              </Link>
            </div>
          )}
        </div>

        {/* User Profile Menu */}
        <div className="relative flex items-center" ref={profileRef}>
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2.5 p-1.5 hover:bg-slate-50 rounded-xl transition-all active:scale-98"
          >
            <img
              src={user.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
              alt="Avatar"
              className="h-8.5 w-8.5 rounded-xl object-cover ring-2 ring-slate-100"
            />
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-slate-800">{user.username || 'Admin'}</p>
              <p className="text-[10px] text-slate-500 font-medium capitalize">{user.role?.toLowerCase()}</p>
            </div>
            <ChevronDown className="hidden sm:block h-4 w-4 text-slate-400" />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-150 bg-white p-2 shadow-2xl card-shadow animate-modal-pop top-full">
              <div className="px-4 py-2.5 border-b border-slate-100 mb-2">
                <p className="text-xs font-bold text-slate-800">{user.username}</p>
                <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
              </div>

              <Link
                to="/profile"
                onClick={() => setProfileDropdownOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all"
              >
                <User className="h-4 w-4" />
                My Profile
              </Link>
              <Link
                to="/settings"
                onClick={() => setProfileDropdownOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all"
              >
                <Settings className="h-4 w-4" />
                Account Settings
              </Link>
              <Link
                to="/settings?tab=security"
                onClick={() => setProfileDropdownOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all"
              >
                <Shield className="h-4 w-4" />
                Security
              </Link>

              <div className="border-t border-slate-100 my-1.5" />

              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-red-500 hover:bg-red-50 transition-all"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
