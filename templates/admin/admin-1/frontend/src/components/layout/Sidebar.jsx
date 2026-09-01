import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Users,
  User,
  FolderGit2,
  Cpu,
  CreditCard,
  Grid,
  Layers,
  Shield,
  Settings,
  Zap,
  ChevronDown,
  ChevronRight,
  LogOut,
  ChevronLeft,
  MessageSquare,
  Mail,
  Calendar,
  Kanban,
  Folder,
  CheckSquare,
  LifeBuoy,
  Tag,
  DollarSign,
  Activity,
  UserCheck,
  FileText,
  Lock,
  Globe
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar({ collapsed, toggleCollapse, mobileOpen, closeMobile }) {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [openSection, setOpenSection] = useState('Overview');

  const navigationStructure = [
    {
      title: 'OVERVIEW',
      items: [
        { name: 'Main Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Sales Dashboard', path: '/dashboard/sales', icon: ShoppingCart },
        { name: 'Analytics Dashboard', path: '/dashboard/analytics', icon: BarChart3 },
        { name: 'CRM Dashboard', path: '/dashboard/crm', icon: Users },
        { name: 'Marketing Dashboard', path: '/dashboard/marketing', icon: Zap },
        { name: 'Projects Dashboard', path: '/dashboard/projects', icon: FolderGit2 },
        { name: 'Finance Dashboard', path: '/dashboard/finance', icon: CreditCard },
      ],
    },
    {
      title: 'ANALYTICS',
      items: [
        { name: 'Overview', path: '/analytics', icon: BarChart3 },
        { name: 'Traffic Analytics', path: '/analytics/traffic', icon: Globe },
        { name: 'Visitor Analytics', path: '/analytics/visitors', icon: Users },
        { name: 'User Behavior', path: '/analytics/behavior', icon: Activity },
        { name: 'Conversion Funnel', path: '/analytics/conversions', icon: Zap },
        { name: 'Geographic Map', path: '/analytics/geographic', icon: Globe },
        { name: 'Device Analytics', path: '/analytics/devices', icon: Layers },
        { name: 'Real-Time Stream', path: '/analytics/realtime', icon: Activity },
      ],
    },
    {
      title: 'SALES & CRM',
      items: [
        { name: 'Orders Management', path: '/orders', icon: ShoppingCart },
        { name: 'Customers Directory', path: '/customers', icon: Users },
        { name: 'Products Catalog', path: '/products', icon: Tag },
        { name: 'Leads Pipeline', path: '/crm/leads', icon: Users },
        { name: 'Deals & Opportunities', path: '/crm/deals', icon: DollarSign },
      ],
    },
    {
      title: 'AI INTELLIGENCE',
      items: [
        { name: 'AI Models Hub', path: '/ai-models', icon: Cpu },
        { name: 'Deployments', path: '/ai-models/deployments', icon: Zap },
        { name: 'GPU Cluster Monitor', path: '/ai-models/gpu', icon: Cpu },
      ],
    },
    {
      title: 'FINANCE & PROJECTS',
      items: [
        { name: 'Financial Ledger', path: '/transactions', icon: CreditCard },
        { name: 'Invoices & Billing', path: '/finance/invoices', icon: FileText },
        { name: 'Active Projects', path: '/projects', icon: FolderGit2 },
        { name: 'Task Board', path: '/tasks', icon: CheckSquare },
      ],
    },
    {
      title: 'APPLICATIONS',
      items: [
        { name: 'Team Chat', path: '/apps/chat', icon: MessageSquare },
        { name: 'Mailbox Inbox', path: '/apps/email', icon: Mail },
        { name: 'Event Calendar', path: '/apps/calendar', icon: Calendar },
        { name: 'Kanban Board', path: '/apps/kanban', icon: Kanban },
        { name: 'File Storage', path: '/apps/files', icon: Folder },
        { name: 'Support Tickets', path: '/apps/tickets', icon: LifeBuoy },
      ],
    },
    {
      title: 'USERS & ACCESS',
      items: [
        { name: 'My Admin Profile', path: '/profile', icon: User },
        { name: 'User Roster', path: '/users', icon: Users },
        { name: 'Roles & Permissions', path: '/users/roles', icon: Lock },
      ],
    },
    {
      title: 'SYSTEM & UTILITY',
      items: [
        { name: 'Audit Activity Log', path: '/activity', icon: Activity },
        { name: 'System Reports', path: '/reports', icon: FileText },
        { name: 'Cyber Security', path: '/security', icon: Shield },
        { name: 'Cloud Integrations', path: '/integrations', icon: Layers },
        { name: 'System Settings', path: '/settings', icon: Settings },
        { name: 'Pricing Plans', path: '/utility/pricing', icon: Tag },
        { name: 'FAQ & Help', path: '/utility/faq', icon: LifeBuoy },
      ],
    },
  ];

  // Auto-expand active section on route change
  useEffect(() => {
    navigationStructure.forEach((sec) => {
      if (sec.items.some((item) => item.path === location.pathname)) {
        setOpenSection(sec.title);
      }
    });
  }, [location.pathname]);

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  const sidebarClasses = `
    fixed top-0 left-0 z-50 h-screen bg-neura-panel/95 backdrop-blur-2xl border-r border-white/10
    transition-all duration-300 flex flex-col justify-between
    ${collapsed ? 'w-20' : 'w-64'}
    ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  `;

  return (
    <>
      {mobileOpen && (
        <div onClick={closeMobile} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" />
      )}

      <aside className={sidebarClasses}>
        <div>
          {/* Header Branding */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 h-16">
            <div className="flex items-center space-x-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neura-cyan to-neura-purple flex items-center justify-center shrink-0 shadow-glow-cyan">
                <Zap className="w-5 h-5 text-black font-bold" />
              </div>
              {!collapsed && (
                <div className="flex flex-col">
                  <span className="text-base font-black tracking-wider text-white font-mono">TS ADMIN</span>
                  <span className="text-[9px] font-bold text-neura-cyan uppercase tracking-widest -mt-1">
                    COMMAND CENTER
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Accordion Sections */}
          <div className="p-3 space-y-4 max-h-[calc(100vh-150px)] overflow-y-auto">
            {navigationStructure.map((sec) => {
              const isSectionOpen = openSection === sec.title;
              const hasActiveChild = sec.items.some((item) => item.path === location.pathname);

              return (
                <div key={sec.title} className="space-y-1">
                  {!collapsed ? (
                    <button
                      onClick={() => toggleSection(sec.title)}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                        hasActiveChild ? 'text-neura-cyan' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <span>{sec.title}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${isSectionOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : (
                    <div className="my-2 border-t border-white/10" />
                  )}

                  <AnimatePresence initial={false}>
                    {(isSectionOpen || collapsed) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {sec.items.map((item) => {
                          const Icon = item.icon;
                          const isActive = location.pathname === item.path;

                          return (
                            <NavLink
                              key={item.name}
                              to={item.path}
                              onClick={closeMobile}
                              className={`
                                relative flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all group
                                ${
                                  isActive
                                    ? 'bg-gradient-to-r from-neura-cyan/20 to-neura-purple/10 text-white border border-neura-cyan/30 shadow-glow-cyan/20'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }
                              `}
                            >
                              <Icon
                                className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                                  isActive ? 'text-neura-cyan' : 'text-slate-400'
                                }`}
                              />
                              {!collapsed && <span className="ml-3 truncate">{item.name}</span>}

                              {isActive && (
                                <motion.div
                                  layoutId="activeGlow"
                                  className="absolute left-0 w-1 h-5 bg-neura-cyan rounded-r-full shadow-glow-cyan"
                                />
                              )}

                              {collapsed && (
                                <div className="absolute left-full ml-3 hidden group-hover:block px-2.5 py-1 bg-neura-panel text-white text-xs rounded-lg shadow-xl border border-white/10 z-50 whitespace-nowrap">
                                  {item.name}
                                </div>
                              )}
                            </NavLink>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* User Footer */}
        <div className="p-3 border-t border-white/10 bg-white/[0.01]">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center space-x-2.5 overflow-hidden">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                alt="User"
                className="w-8 h-8 rounded-lg object-cover ring-1 ring-neura-cyan/40"
              />
              {!collapsed && (
                <div className="flex flex-col truncate">
                  <span className="text-xs font-bold text-white truncate">{user?.name || 'Admin'}</span>
                  <span className="text-[10px] text-emerald-400 font-medium">Online</span>
                </div>
              )}
            </div>
            {!collapsed && (
              <button onClick={logout} className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400">
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
