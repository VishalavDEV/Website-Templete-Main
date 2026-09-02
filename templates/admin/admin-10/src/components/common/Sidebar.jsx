import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  ShoppingBag,
  MessageSquare,
  Bell,
  FileText,
  Calendar as CalendarIcon,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Sparkles,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Users', path: '/users', icon: Users, badge: '8' },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Orders', path: '/orders', icon: ShoppingBag, badge: 'New' },
  { name: 'Messages', path: '/messages', icon: MessageSquare, badge: '2' },
  { name: 'Notifications', path: '/notifications', icon: Bell },
  { name: 'Reports', path: '/reports', icon: FileText },
  { name: 'Calendar', path: '/calendar', icon: CalendarIcon },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar({ isCollapsed, toggleSidebar, isMobileOpen, closeMobileSidebar }) {
  const { adminProfile, addToast } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    addToast('Logged out successfully', 'info');
    navigate('/settings');
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 text-slate-300 border-r border-slate-800 selection:bg-brand-500 selection:text-white">
      {/* Brand Logo & Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          {(!isCollapsed || isMobileOpen) && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex flex-col"
            >
              <span className="font-extrabold text-base tracking-tight text-white font-sans">
                Tech<span className="text-brand-400">-Admin</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-400">
                Enterprise SaaS
              </span>
            </motion.div>
          )}
        </div>

        {/* Mobile Close Button */}
        {isMobileOpen ? (
          <button
            onClick={closeMobileSidebar}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={isMobileOpen ? closeMobileSidebar : undefined}
              className={({ isActive }) =>
                `relative flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm transition-all group ${
                  isActive
                    ? 'bg-brand-600 text-white font-semibold shadow-md shadow-brand-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isActive ? 'text-white' : 'group-hover:scale-110'}`} />
                  
                  {(!isCollapsed || isMobileOpen) && (
                    <span className="truncate flex-1">{item.name}</span>
                  )}

                  {/* Badge */}
                  {item.badge && (!isCollapsed || isMobileOpen) && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-brand-500/20 text-brand-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}

                  {/* Tooltip for Collapsed Mode */}
                  {isCollapsed && !isMobileOpen && (
                    <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-950 text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-slate-800">
                      {item.name}
                    </div>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Admin Profile & Logout Section */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={adminProfile.avatar}
              alt={adminProfile.name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-brand-500/30 shrink-0"
            />
            {(!isCollapsed || isMobileOpen) && (
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">
                  {adminProfile.name}
                </p>
                <p className="text-[10px] text-slate-400 truncate">
                  {adminProfile.role}
                </p>
              </div>
            )}
          </div>

          {(!isCollapsed || isMobileOpen) && (
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Left Sidebar */}
      <aside
        className={`hidden lg:block fixed top-0 left-0 bottom-0 z-40 transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Animated Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileSidebar}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 left-0 bottom-0 w-72 z-10"
            >
              {sidebarContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
