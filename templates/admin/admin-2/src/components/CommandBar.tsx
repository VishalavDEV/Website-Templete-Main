import React, { useState, useRef, useEffect } from 'react';
import { useEditorial } from '../services/editorialStore';
import { 
  Search, Plus, Upload, UserPlus, Calendar, Download, Bell, 
  Menu, Compass, Sparkles, CheckCheck, FileText, ChevronDown 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CommandBarProps {
  onToggleMobileNav: () => void;
}

export const CommandBar: React.FC<CommandBarProps> = ({ onToggleMobileNav }) => {
  const { 
    notifications, 
    markNotificationRead, 
    markAllNotificationsRead, 
    setIsCommandPaletteOpen,
    setIsNewStoryModalOpen,
    setIsUploadMediaModalOpen,
    setIsAssignTaskModalOpen,
    setIsScheduleModalOpen,
    setIsExportModalOpen,
    setActiveView
  } = useEditorial();

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isQuickActionOpen, setIsQuickActionOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const quickRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (quickRef.current && !quickRef.current.contains(event.target as Node)) {
        setIsQuickActionOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      id="global-command-bar" 
      className="h-16 w-full bg-white border-b border-sky-100 flex items-center justify-between px-4 sm:px-8 z-30 sticky top-0 transition-all"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        
        {/* Left: Mobile Nav Button + Brand Identifier */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          <button
            id="mobile-nav-toggle-btn"
            onClick={onToggleMobileNav}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            id="brand-logo-btn"
            onClick={() => setActiveView('today_overview')}
            className="flex items-center space-x-2 group text-left focus:outline-none cursor-pointer"
          >
            <div className="text-xl font-bold tracking-tighter text-sky-900">
              ELEMENTAL<span className="text-sky-400">.</span>
            </div>
          </button>
        </div>

        {/* Center: Global Search Input (Ctrl + K) */}
        <div className="flex-1 max-w-md hidden sm:block">
          <div className="relative flex items-center group">
            <div className="absolute left-4 text-slate-400 pointer-events-none">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="global-search-input"
              type="text"
              readOnly
              onClick={() => setIsCommandPaletteOpen(true)}
              placeholder="Search anything... (Ctrl + K)"
              className="pl-10 pr-4 py-2 w-full max-w-sm bg-slate-50 border border-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 transition-all cursor-pointer placeholder:text-slate-400 text-slate-800"
            />
          </div>
        </div>

        {/* Right: + New Story / Quick Action + Notifications + Admin Badge */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          
          {/* Quick Action Button */}
          <div className="relative" ref={quickRef}>
            <button
              id="quick-action-menu-btn"
              onClick={() => setIsQuickActionOpen((prev) => !prev)}
              className="bg-sky-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-sky-600 transition-colors shadow-sm shadow-sky-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>New Story</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-80" />
            </button>

            <AnimatePresence>
              {isQuickActionOpen && (
                <motion.div
                  id="quick-action-dropdown-panel"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-sky-100 py-1.5 z-50 text-slate-800"
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Workspace Actions
                  </div>

                  <button
                    id="quick-new-story-btn"
                    onClick={() => {
                      setIsQuickActionOpen(false);
                      setIsNewStoryModalOpen(true);
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition-colors text-left cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-sky-500" />
                    <span>New Story Manuscript</span>
                  </button>

                  <button
                    id="quick-upload-media-btn"
                    onClick={() => {
                      setIsQuickActionOpen(false);
                      setIsUploadMediaModalOpen(true);
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition-colors text-left cursor-pointer"
                  >
                    <Upload className="w-4 h-4 text-sky-500" />
                    <span>Upload Archival Media</span>
                  </button>

                  <button
                    id="quick-assign-task-btn"
                    onClick={() => {
                      setIsQuickActionOpen(false);
                      setIsAssignTaskModalOpen(true);
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition-colors text-left cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4 text-sky-500" />
                    <span>Assign Review Task</span>
                  </button>

                  <button
                    id="quick-schedule-story-btn"
                    onClick={() => {
                      setIsQuickActionOpen(false);
                      setIsScheduleModalOpen(true);
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition-colors text-left cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-sky-500" />
                    <span>Schedule Edition Release</span>
                  </button>

                  <div className="border-t border-slate-100 my-1"></div>

                  <button
                    id="quick-export-report-btn"
                    onClick={() => {
                      setIsQuickActionOpen(false);
                      setIsExportModalOpen(true);
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition-colors text-left cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-slate-400" />
                    <span>Export Editorial Report</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Notifications Popover */}
          <div className="relative" ref={notifRef}>
            <button
              id="notifications-toggle-btn"
              onClick={() => setIsNotificationsOpen((prev) => !prev)}
              className="relative p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              aria-label="View notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-sky-500 ring-2 ring-white"></span>
              )}
            </button>

            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  id="notifications-popover-panel"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-sky-100 py-3 z-50 text-slate-800"
                >
                  <div className="px-4 pb-2.5 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">Notifications</span>
                      {unreadCount > 0 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        id="mark-all-notifications-read-btn"
                        onClick={markAllNotificationsRead}
                        className="text-xs text-sky-600 hover:text-sky-800 font-medium flex items-center gap-1 transition-colors"
                      >
                        <CheckCheck className="w-3.5 h-3.5" />
                        Mark all read
                      </button>
                    )}
                  </div>

                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 px-2 py-1">
                    {notifications.length === 0 ? (
                      <div className="py-6 text-center text-xs text-slate-500">
                        No notifications currently.
                      </div>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          id={`notification-item-${n.id}`}
                          onClick={() => {
                            markNotificationRead(n.id);
                            if (n.linkTarget) {
                              setActiveView(n.linkTarget as any);
                              setIsNotificationsOpen(false);
                            }
                          }}
                          className={`p-2.5 rounded-xl cursor-pointer transition-colors ${
                            n.read ? 'hover:bg-slate-50 text-slate-600' : 'bg-sky-50/50 hover:bg-sky-50 text-slate-900 font-medium'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <span className="font-semibold text-slate-800 truncate">{n.title}</span>
                            <span className="text-[10px] text-slate-400 shrink-0">{n.time}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">
                            {n.description}
                          </p>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="pt-2 px-4 border-t border-slate-100 text-center">
                    <button
                      id="view-all-reviews-from-notif-btn"
                      onClick={() => {
                        setActiveView('editorial_reviews');
                        setIsNotificationsOpen(false);
                      }}
                      className="text-xs text-sky-700 hover:text-sky-900 font-medium transition-colors"
                    >
                      Go to Editorial Queue →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Admin Profile Chip matching Artistic Flair style */}
          <div 
            id="admin-profile-pill"
            className="flex items-center space-x-3 border-l border-slate-100 pl-4 sm:pl-6"
          >
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Admin</div>
              <div className="text-sm font-semibold text-slate-900 leading-tight">Alex Sterling</div>
            </div>
            <div className="w-10 h-10 bg-sky-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-sky-700 font-bold shrink-0">
              AS
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
