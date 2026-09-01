import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Building2,
  Clock,
  CircleDollarSign,
  FolderDown,
  BarChart3,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  Activity,
  Zap,
  TrendingUp,
  LineChart,
  PieChart,
  Radio,
  Sliders,
  Sparkles,
  FileText,
  Calendar,
  Layers,
  Award,
  DollarSign,
  Lock,
  MessageSquare,
  Globe,
  Settings,
  Database
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { clsx } from 'clsx';

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
  onOpenCreateProjectModal: () => void;
}

interface SubMenuItem {
  name: string;
  path: string;
  badge?: number;
}

interface TopMenu {
  id: string;
  name: string;
  basePath: string;
  icon: React.ReactNode;
  badge?: number;
  subMenus: SubMenuItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen,
  onOpenCreateProjectModal
}) => {
  const { projects, tasks, notifications } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const unreadNotifs = notifications.filter(n => !n.read).length;
  const activeProjectsCount = projects.filter(p => p.status === 'In Progress').length;
  const pendingTasksCount = tasks.filter(t => t.status !== 'Completed').length;

  const topMenus: TopMenu[] = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      basePath: '/dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      subMenus: [
        { name: 'Overview & KPIs', path: '/dashboard/overview' },
        { name: 'Performance Metrics', path: '/dashboard/performance' },
        { name: 'Real-Time Analytics', path: '/dashboard/realtime' },
        { name: 'Executive Summary', path: '/dashboard/executive' },
        { name: 'System Health & Ops', path: '/dashboard/health' }
      ]
    },
    {
      id: 'projects',
      name: 'Projects',
      basePath: '/projects',
      icon: <FolderKanban className="w-5 h-5" />,
      badge: activeProjectsCount,
      subMenus: [
        { name: 'Active Projects', path: '/projects/active', badge: activeProjectsCount },
        { name: 'Backlog & Pipeline', path: '/projects/backlog' },
        { name: 'Completed Portfolio', path: '/projects/completed' },
        { name: 'Risk & Overdue', path: '/projects/overdue' },
        { name: 'Archived Repositories', path: '/projects/archived' }
      ]
    },
    {
      id: 'tasks',
      name: 'Workflows & Tasks',
      basePath: '/tasks',
      icon: <CheckSquare className="w-5 h-5" />,
      badge: pendingTasksCount,
      subMenus: [
        { name: 'Task Directory', path: '/tasks/directory', badge: pendingTasksCount },
        { name: 'My Assigned Tasks', path: '/tasks/assigned' },
        { name: 'Kanban Board', path: '/tasks/kanban' },
        { name: 'Milestones & Roadmap', path: '/tasks/milestones' },
        { name: 'Velocity Trends', path: '/tasks/velocity' }
      ]
    },
    {
      id: 'team',
      name: 'Team & HR',
      basePath: '/team',
      icon: <Users className="w-5 h-5" />,
      subMenus: [
        { name: 'Member Directory', path: '/team/members' },
        { name: 'Squads & Teams', path: '/team/squads' },
        { name: 'Departments', path: '/team/departments' },
        { name: 'Roles & Permissions', path: '/team/roles' },
        { name: 'Capacity & Workload', path: '/team/workload' }
      ]
    },
    {
      id: 'clients',
      name: 'Clients CRM',
      basePath: '/clients',
      icon: <Building2 className="w-5 h-5" />,
      subMenus: [
        { name: 'Client Accounts', path: '/clients/accounts' },
        { name: 'Lead Pipeline', path: '/clients/pipeline' },
        { name: 'Contracts & SLA', path: '/clients/contracts' },
        { name: 'Client Portals', path: '/clients/portals' },
        { name: 'Account Health', path: '/clients/health' }
      ]
    },
    {
      id: 'time',
      name: 'Time & Operations',
      basePath: '/time',
      icon: <Clock className="w-5 h-5" />,
      subMenus: [
        { name: 'Live Time Tracker', path: '/time/tracker' },
        { name: 'Timesheets & Approvals', path: '/time/timesheets' },
        { name: 'Attendance & Shifts', path: '/time/attendance' },
        { name: 'Overtime & Billable', path: '/time/overtime' },
        { name: 'Operational Audit', path: '/time/audit' }
      ]
    },
    {
      id: 'financials',
      name: 'Financials & Billing',
      basePath: '/financials',
      icon: <CircleDollarSign className="w-5 h-5" />,
      subMenus: [
        { name: 'Budget Allocations', path: '/financials/budgets' },
        { name: 'Expense Tracking', path: '/financials/expenses' },
        { name: 'Invoices & Billing', path: '/financials/invoices' },
        { name: 'Payments & Ledger', path: '/financials/payments' },
        { name: 'Profitability Margins', path: '/financials/profitability' }
      ]
    },
    {
      id: 'collaboration',
      name: 'Collaboration & Files',
      basePath: '/collaboration',
      icon: <FolderDown className="w-5 h-5" />,
      badge: unreadNotifs > 0 ? unreadNotifs : undefined,
      subMenus: [
        { name: 'File Vault Storage', path: '/collaboration/files' },
        { name: 'Team Chat & Channels', path: '/collaboration/chat' },
        { name: 'Notifications Center', path: '/collaboration/notifications', badge: unreadNotifs },
        { name: 'Project Templates', path: '/collaboration/templates' },
        { name: 'Knowledge Base', path: '/collaboration/knowledge' }
      ]
    },
    {
      id: 'reports',
      name: 'Reports & Analytics',
      basePath: '/reports',
      icon: <BarChart3 className="w-5 h-5" />,
      subMenus: [
        { name: 'Executive Summary', path: '/reports/executive' },
        { name: 'Financial Reports', path: '/reports/financial' },
        { name: 'Resource Productivity', path: '/reports/productivity' },
        { name: 'Quality & Bug Radar', path: '/reports/quality' },
        { name: 'Custom Query Builder', path: '/reports/custom' }
      ]
    },
    {
      id: 'admin',
      name: 'Administration',
      basePath: '/admin',
      icon: <ShieldCheck className="w-5 h-5" />,
      subMenus: [
        { name: 'Activity Stream', path: '/admin/activity' },
        { name: 'System Audit Logs', path: '/admin/audit' },
        { name: 'Security & Auth Logs', path: '/admin/security' },
        { name: 'API & Webhooks', path: '/admin/api-webhooks' },
        { name: 'Global Settings', path: '/admin/settings' }
      ]
    }
  ];

  // Auto-expand menu that matches current pathname
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const activeMenu = topMenus.find(menu => location.pathname.startsWith(menu.basePath));
    if (activeMenu) {
      setExpandedMenus(prev => ({ ...prev, [activeMenu.id]: true }));
    }
  }, [location.pathname]);

  const toggleMenu = (menu: TopMenu) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setExpandedMenus(prev => ({ ...prev, [menu.id]: true }));
      return;
    }
    setExpandedMenus(prev => ({
      ...prev,
      [menu.id]: !prev[menu.id]
    }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Frame */}
      <aside
        className={clsx(
          'fixed top-0 left-0 z-40 h-screen bg-sidebar border-r border-sidebar transition-all duration-300 flex flex-col justify-between select-none',
          isCollapsed ? 'w-20' : 'w-64',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Brand Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-sidebar">
          <NavLink to="/dashboard/overview" className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shrink-0">
              C
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-app-primary leading-tight">CoreVista</span>
                <span className="text-[10px] font-semibold tracking-wider text-blue-500 uppercase">Enterprise PM</span>
              </div>
            )}
          </NavLink>
          <button
            onClick={() => setIsCollapsed(prev => !prev)}
            className="hidden lg:flex p-1.5 rounded-lg text-app-secondary hover:text-app-primary hover:bg-app-hover transition-colors"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Quick Action Button */}
        {!isCollapsed && (
          <div className="p-3">
            <button
              onClick={onOpenCreateProjectModal}
              className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Project</span>
            </button>
          </div>
        )}

        {/* Navigation Items (10 Menus x 5 Submenus) */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5 scrollbar-thin">
          {topMenus.map(menu => {
            const isMenuActive = location.pathname.startsWith(menu.basePath);
            const isExpanded = !!expandedMenus[menu.id];

            return (
              <div key={menu.id} className="rounded-xl overflow-hidden">
                {/* Main Menu Accordion Header */}
                <button
                  onClick={() => toggleMenu(menu)}
                  className={clsx(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group relative cursor-pointer select-none',
                    isMenuActive
                      ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                      : 'text-app-secondary hover:text-app-primary hover:bg-app-hover border border-transparent'
                  )}
                  title={isCollapsed ? menu.name : undefined}
                >
                  <span className={clsx('shrink-0', isMenuActive ? 'text-blue-400' : 'text-app-muted group-hover:text-app-primary')}>
                    {menu.icon}
                  </span>
                  {!isCollapsed && (
                    <>
                      <span className="truncate flex-1 text-left">{menu.name}</span>
                      {menu.badge !== undefined && menu.badge > 0 && (
                        <span className="px-1.5 py-0.5 text-[10px] rounded-full font-bold bg-blue-500/20 text-blue-400 mr-1">
                          {menu.badge}
                        </span>
                      )}
                      <ChevronDown
                        className={clsx(
                          'w-3.5 h-3.5 text-app-muted transition-transform duration-200',
                          isExpanded ? 'rotate-180 text-blue-400' : ''
                        )}
                      />
                    </>
                  )}
                </button>

                {/* 5 Sub-Menus List */}
                {!isCollapsed && isExpanded && (
                  <div className="mt-1 ml-4 pl-2.5 border-l-2 border-app space-y-1 py-1">
                    {menu.subMenus.map(sub => {
                      const isSubActive = location.pathname === sub.path || (sub.path !== menu.basePath && location.pathname.startsWith(sub.path));
                      return (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsMobileOpen(false)}
                          className={clsx(
                            'flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all group',
                            isSubActive
                              ? 'bg-blue-600 text-white font-bold shadow-xs'
                              : 'text-app-secondary hover:text-app-primary hover:bg-app-hover'
                          )}
                        >
                          <span className="truncate">{sub.name}</span>
                          {sub.badge !== undefined && sub.badge > 0 && (
                            <span
                              className={clsx(
                                'px-1.5 py-0.2 text-[9px] rounded-full font-bold ml-2',
                                isSubActive ? 'bg-white/20 text-white' : 'bg-app-hover text-app-muted'
                              )}
                            >
                              {sub.badge}
                            </span>
                          )}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info / Storage status */}
        {!isCollapsed && (
          <div className="p-3 border-t border-sidebar">
            <div className="p-3 rounded-xl bg-app-secondary/40 border border-app text-xs space-y-1">
              <div className="flex items-center justify-between text-app-primary font-medium">
                <span>CoreVista Engine</span>
                <span className="text-[10px] text-emerald-400 font-mono">50 SUB-PAGES</span>
              </div>
              <p className="text-[11px] text-app-muted">Analytics & Recharts Ready</p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

