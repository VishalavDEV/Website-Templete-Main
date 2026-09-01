import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Moon,
  Sun,
  Bell,
  Plus,
  Play,
  Square,
  Shield,
  LogOut,
  User as UserIcon,
  CheckCheck,
  CheckSquare,
  Clock,
  Menu,
  ChevronDown
} from 'lucide-react';
import { Avatar } from '../Common/Avatar';
import { Badge } from '../Common/Badge';
import { UserRole } from '../../types';

export interface HeaderProps {
  onOpenMobileSidebar: () => void;
  onOpenCreateProjectModal: () => void;
  onOpenCreateTaskModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileSidebar,
  onOpenCreateProjectModal,
  onOpenCreateTaskModal
}) => {
  const {
    theme,
    toggleTheme,
    currentUser,
    switchRole,
    setIsSearchOpen,
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
    activeTimer,
    stopTimer,
    addToast
  } = useApp();

  const navigate = useNavigate();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const roles: UserRole[] = ['Super Admin'];


  const formatTimerTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLogout = () => {
    addToast('Logged out of session safely.', 'info');
    navigate('/login');
  };

  return (
    <header className="h-16 bg-app-surface border-b border-app sticky top-0 z-30 px-4 lg:px-6 flex items-center justify-between">
      {/* Left: Mobile Toggle & Search */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="p-2 rounded-lg text-app-secondary hover:text-app-primary hover:bg-app-hover lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile Search Icon */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="p-2 rounded-xl text-app-secondary hover:text-app-primary hover:bg-app-hover border border-app sm:hidden cursor-pointer"
          title="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Global Search Trigger */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-app-secondary/60 border border-app hover:border-blue-500/40 text-app-muted text-xs transition-colors w-64 lg:w-80 cursor-pointer"
        >
          <Search className="w-4 h-4 text-app-muted shrink-0" />
          <span className="truncate">Search projects, tasks, team...</span>
          <kbd className="ml-auto px-1.5 py-0.5 rounded bg-app border border-app text-[10px] font-mono text-app-secondary">
            ⌘K
          </kbd>
        </button>
      </div>


      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Active Timer Pill */}
        {activeTimer.isRunning && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono animate-pulse">
            <Clock className="w-4 h-4 animate-spin text-emerald-400" />
            <span className="font-bold">{formatTimerTime(activeTimer.elapsedSeconds)}</span>
            <button
              onClick={stopTimer}
              className="p-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 transition-colors ml-1 cursor-pointer"
              title="Stop and save time log"
            >
              <Square className="w-3 h-3 fill-current" />
            </button>
          </div>
        )}

        {/* Quick Add Button */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenCreateTaskModal}
            className="p-2 rounded-xl bg-app-secondary hover:bg-app-hover border border-app text-app-primary text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Create Task"
          >
            <CheckSquare className="w-4 h-4 text-blue-400" />
            <span className="hidden md:inline font-medium">New Task</span>
          </button>
        </div>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-app-secondary hover:text-app-primary hover:bg-app-hover border border-app transition-colors cursor-pointer"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-600" />}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsNotifOpen(prev => !prev);
              setIsRoleOpen(false);
              setIsProfileOpen(false);
            }}
            className="p-2 rounded-xl text-app-secondary hover:text-app-primary hover:bg-app-hover border border-app transition-colors relative cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-app-surface border border-app shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="p-4 border-b border-app flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-app-primary">Notifications</span>
                  <Badge variant="neutral">{unreadCount} unread</Badge>
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsRead}
                    className="text-xs text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <CheckCheck className="w-3.5 h-3.5" /> Mark all read
                  </button>
                )}
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-app">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-xs text-app-muted">No notifications</div>
                ) : (
                  notifications.map(n => (
                    <div
                      key={n.id}
                      onClick={() => {
                        markNotificationRead(n.id);
                        setIsNotifOpen(false);
                        navigate(n.targetRoute);
                      }}
                      className={`p-3.5 text-xs hover:bg-app-hover cursor-pointer transition-colors ${
                        !n.read ? 'bg-blue-500/5' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between font-medium text-app-primary">
                        <span>{n.title}</span>
                        <span className="text-[10px] text-app-muted">{n.timestamp}</span>
                      </div>
                      <p className="text-app-secondary mt-1 text-[11px] leading-relaxed">{n.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Role Switcher */}
        <div className="relative hidden md:block">
          <button
            onClick={() => {
              setIsRoleOpen(prev => !prev);
              setIsNotifOpen(false);
              setIsProfileOpen(false);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-app-secondary/60 border border-app text-xs text-app-primary hover:bg-app-hover transition-colors cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-medium">{currentUser.role}</span>
            <ChevronDown className="w-3 h-3 text-app-muted" />
          </button>

          {isRoleOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-app-surface border border-app shadow-xl z-50 py-1">
              <div className="px-3 py-1.5 text-[10px] font-bold text-app-muted uppercase tracking-wider">
                Switch Role Profile
              </div>
              {roles.map(r => (
                <button
                  key={r}
                  onClick={() => {
                    switchRole(r);
                    setIsRoleOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-app-hover ${
                    currentUser.role === r ? 'text-blue-400 font-semibold bg-blue-500/10' : 'text-app-primary'
                  }`}
                >
                  <span>{r}</span>
                  {currentUser.role === r && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => {
              setIsProfileOpen(prev => !prev);
              setIsNotifOpen(false);
              setIsRoleOpen(false);
            }}
            className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-app-hover transition-colors cursor-pointer"
          >
            <Avatar src={currentUser.avatar} name={currentUser.name} size="sm" status={currentUser.status} />
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-xs font-semibold text-app-primary leading-tight">{currentUser.name}</span>
              <span className="text-[10px] text-app-muted">{currentUser.role}</span>
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-app-surface border border-app shadow-2xl z-50 py-2 divide-y divide-app">
              <div className="px-4 py-2.5">
                <p className="text-sm font-semibold text-app-primary">{currentUser.name}</p>
                <p className="text-xs text-app-secondary truncate">{currentUser.email}</p>
                <Badge variant="purple" size="sm" className="mt-2">
                  {currentUser.role}
                </Badge>
              </div>

              <div className="py-1">
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    navigate(`/team/${currentUser.id}`);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-app-primary hover:bg-app-hover flex items-center gap-2"
                >
                  <UserIcon className="w-4 h-4 text-app-muted" /> My Profile
                </button>
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    navigate('/settings');
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-app-primary hover:bg-app-hover flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-app-muted" /> Settings & Security
                </button>
              </div>

              <div className="py-1">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-xs text-rose-400 hover:bg-rose-500/10 flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
