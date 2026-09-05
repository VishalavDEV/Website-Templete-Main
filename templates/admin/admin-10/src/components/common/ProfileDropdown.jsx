import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User, Settings, Bell, HelpCircle, LogOut, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ProfileDropdown({ isOpen, onClose }) {
  const { adminProfile, addToast } = useApp();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleLogout = () => {
    onClose();
    addToast('You have been logged out safely.', 'info');
    navigate('/settings');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-12 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 overflow-hidden py-2"
        >
          {/* User Profile Header */}
          <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
            <img
              src={adminProfile.avatar}
              alt={adminProfile.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/20 shrink-0"
            />
            <div className="overflow-hidden">
              <div className="flex items-center gap-1">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                  {adminProfile.name}
                </p>
                <ShieldCheck className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                {adminProfile.email}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="py-1">
            <Link
              to="/settings"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <User className="w-4 h-4 text-slate-400" />
              <span>Admin Profile</span>
            </Link>

            <Link
              to="/settings"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Settings className="w-4 h-4 text-slate-400" />
              <span>Account Settings</span>
            </Link>

            <Link
              to="/notifications"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Bell className="w-4 h-4 text-slate-400" />
              <span>Notifications</span>
            </Link>

            <Link
              to="/reports"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              <span>Help Center & Support</span>
            </Link>
          </div>

          {/* Logout */}
          <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
