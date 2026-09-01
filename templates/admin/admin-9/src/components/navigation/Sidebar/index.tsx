/* src/components/navigation/Sidebar/index.tsx */
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  Mail,
  FolderOpen,
  CheckSquare,
  PhoneCall,
  ChevronDown,
  Layers,
  BarChart3,
  FileSpreadsheet,
  Lock,
  Compass,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bell,
  LogOut
} from 'lucide-react';
import { Logo } from '../../common';
import { useSidebar } from '../../../app/providers/SidebarProvider';
import { useSettings } from '../../../app/providers/SettingsProvider';
import { useAuth } from '../../../app/providers/AuthProvider';
import { Badge } from '../../ui/Badge';

interface SidebarGroup {
  title: string;
  items: {
    name: string;
    path?: string;
    icon: React.ElementType;
    badge?: string;
    badgeVariant?: 'default' | 'secondary' | 'success' | 'destructive' | 'warning';
    subItems?: { name: string; path: string }[];
  }[];
}

const menuGroups: SidebarGroup[] = [
  {
    title: 'Dashboards',
    items: [
      {
        name: 'Dashboard Panels',
        icon: LayoutDashboard,
        subItems: [
          { name: 'Main Overview', path: '/' },
          { name: 'Analytics', path: '/dashboards/analytics' },
          { name: 'Sales Hub', path: '/dashboards/sales' },
          { name: 'CRM Hub', path: '/dashboards/crm' },
          { name: 'Marketing', path: '/dashboards/marketing' },
          { name: 'Projects', path: '/dashboards/projects' },
          { name: 'Finance Control', path: '/dashboards/finance' },
        ]
      }
    ]
  },
  {
    title: 'Applications',
    items: [
      { name: 'Calendar', path: '/apps/calendar', icon: Calendar, badge: '2', badgeVariant: 'default' },
      { name: 'Chat Room', path: '/apps/chat', icon: MessageSquare, badge: 'NEW', badgeVariant: 'success' },
      { name: 'Contacts Manager', path: '/apps/contacts', icon: PhoneCall },
      { name: 'Email inbox', path: '/apps/email', icon: Mail, badge: '9+', badgeVariant: 'destructive' },
      { name: 'File Storage', path: '/apps/file-manager', icon: FolderOpen },
      { name: 'Invoices Manager', path: '/apps/invoices', icon: CreditCard },
      { name: 'Staging Board', path: '/apps/kanban', icon: Layers },
      { name: 'Todo Checklist', path: '/apps/todo', icon: CheckSquare },
      { name: 'Customer Support', path: '/apps/support', icon: HelpCircle },
    ]
  },
  {
    title: 'User Management',
    items: [
      {
        name: 'Portal Users',
        icon: Users,
        subItems: [
          { name: 'Users List', path: '/users' },
          { name: 'User Profile', path: '/profile' },
          { name: 'Portal Settings', path: '/settings' },
          { name: 'Notifications', path: '/notifications' },
          { name: 'Activity Log', path: '/activity' },
          { name: 'Roles & Permissions', path: '/roles-permissions' },
        ]
      }
    ]
  },
  {
    title: 'Billing & Pricing',
    items: [
      { name: 'Subscription Pricing', path: '/billing/pricing', icon: CreditCard }
    ]
  },
  {
    title: 'Demos & Elements',
    items: [
      { name: 'UI Components', path: '/elements/components', icon: Compass },
      { name: 'Interactive Charts', path: '/elements/charts', icon: BarChart3 },
      { name: 'Structured Forms', path: '/elements/forms', icon: Settings },
      { name: 'Data Tables', path: '/elements/tables', icon: FileSpreadsheet },
    ]
  },
  {
    title: 'General & Auth',
    items: [
      {
        name: 'Authentication',
        icon: Lock,
        subItems: [
          { name: 'Login Screen', path: '/auth/login' },
          { name: 'Register Screen', path: '/auth/register' },
          { name: 'Forgot Password', path: '/auth/forgot-password' },
          { name: 'Verify Email', path: '/auth/verify-email' },
          { name: 'Two Factor auth', path: '/auth/two-factor' },
          { name: 'Lock Screen', path: '/auth/lock-screen' },
        ]
      },
      {
        name: 'General Pages',
        icon: Layers,
        subItems: [
          { name: 'FAQ Page', path: '/pages/faq' },
          { name: 'Contact Us', path: '/pages/contact' },
          { name: 'Search results', path: '/pages/search' },
          { name: 'Timeline View', path: '/pages/timeline' },
          { name: 'Blank Template', path: '/pages/blank' },
          { name: 'Errors Screen', path: '/pages/error' },
        ]
      }
    ]
  }
];

export function SidebarContent({ onClickItem, forceCollapsed }: { onClickItem?: () => void; forceCollapsed?: boolean }) {
  const { isCollapsed: sidebarCollapsed } = useSidebar();
  const { settings, setActiveWorkspace } = useSettings();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isCollapsed = forceCollapsed !== undefined ? forceCollapsed : sidebarCollapsed;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    'Dashboard Panels': !isCollapsed,
  });
  const [showWorkspaceMenu, setShowWorkspaceMenu] = useState(false);

  const toggleGroup = (name: string) => {
    if (isCollapsed) return;
    setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const workspaces = ['Production HQ', 'Sandbox Staging', 'Development Lab'];

  return (
    <div className="flex flex-col h-full overflow-hidden justify-between">
      <div className="space-y-4 shrink-0">
        {/* Logo */}
        <div className="h-16 flex items-center px-2">
          <Link to="/" onClick={onClickItem} className="overflow-hidden">
            {isCollapsed ? (
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
            ) : (
              <Logo />
            )}
          </Link>
        </div>

        {/* Workspace Switcher */}
        {settings.sidebarStyle === 'workspace-switcher' && !isCollapsed && (
          <div className="relative px-2">
            <button 
              onClick={() => setShowWorkspaceMenu(!showWorkspaceMenu)}
              className="w-full flex items-center justify-between p-2 rounded-lg border border-border bg-muted/30 text-xs font-semibold hover:bg-muted/70 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary shrink-0" />
                <span className="truncate">{settings.activeWorkspace}</span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            </button>
            {showWorkspaceMenu && (
              <div className="absolute left-2 right-2 mt-1.5 bg-card border border-border rounded-lg shadow-xl p-1 z-50 animate-in fade-in duration-200">
                {workspaces.map((ws) => (
                  <button
                    key={ws}
                    onClick={() => {
                      setActiveWorkspace(ws);
                      setShowWorkspaceMenu(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs rounded hover:bg-accent ${
                      settings.activeWorkspace === ws ? 'text-primary font-bold bg-primary/5' : 'text-foreground'
                    }`}
                  >
                    {ws}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav Menu */}
      <nav className="flex-1 space-y-6 overflow-y-auto pr-1 my-4 select-none">
        {menuGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            {!isCollapsed && (
              <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase px-3 block">
                {group.title}
              </span>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const hasSub = !!item.subItems;

                if (!hasSub) {
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path!}
                      onClick={onClickItem}
                      title={isCollapsed ? item.name : undefined}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4.5 w-4.5 shrink-0" />
                        {!isCollapsed && <span>{item.name}</span>}
                      </div>
                      {!isCollapsed && item.badge && settings.sidebarStyle === 'badges-actions' && (
                        <Badge variant={item.badgeVariant || 'default'}>{item.badge}</Badge>
                      )}
                    </NavLink>
                  );
                }

                const isExpanded = expanded[item.name] && !isCollapsed;

                return (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => toggleGroup(item.name)}
                      title={isCollapsed ? item.name : undefined}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4.5 w-4.5 shrink-0" />
                        {!isCollapsed && <span>{item.name}</span>}
                      </div>
                      {!isCollapsed && (
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    
                    {isExpanded && !isCollapsed && (
                      <div className="pl-8 space-y-1 border-l border-border/80 ml-5 animate-in fade-in duration-200">
                        {item.subItems!.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            onClick={onClickItem}
                            className={({ isActive }) =>
                              `flex items-center py-2 text-[11px] font-medium transition-colors block ${
                                isActive
                                  ? 'text-primary'
                                  : 'text-muted-foreground hover:text-foreground'
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Sidebar Footer with Profile & Actions */}
      {settings.sidebarStyle === 'badges-actions' && (
        <div className="border-t border-border pt-4 mt-auto space-y-4 shrink-0">
          {/* User Profile Info Card */}
          {!isCollapsed && (
            <div className="flex items-center gap-3 p-2 bg-muted/20 border border-border/50 rounded-xl">
              <img src={user?.avatar} alt={user?.name} className="h-9 w-9 rounded-full object-cover border border-border" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-foreground truncate">{user?.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">{user?.role}</p>
              </div>
            </div>
          )}

          {/* Quick Actions Shortcuts */}
          <div className={`flex items-center justify-between ${isCollapsed ? 'flex-col gap-3' : 'flex-row'}`}>
            <button 
              onClick={() => navigate('/settings')}
              title="Settings"
              className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <Settings className="h-4.5 w-4.5" />
            </button>
            <button 
              onClick={() => navigate('/notifications')}
              title="Notifications"
              className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <Bell className="h-4.5 w-4.5" />
            </button>
            <button 
              onClick={logout}
              title="Log Out"
              className="p-2 rounded-lg hover:bg-accent text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
            >
              <LogOut className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const { isCollapsed: sidebarCollapsed, toggleCollapse } = useSidebar();
  const { settings } = useSettings();

  const isMini = settings.adminLayoutType === 'mini-sidebar';
  const isFull = settings.adminLayoutType === 'full-sidebar';
  
  const isCollapsed = isMini ? true : (isFull ? false : sidebarCollapsed);
  const showToggleButton = !isMini && !isFull;

  return (
    <aside className={`hidden lg:flex flex-col border-r border-border bg-card p-4 h-screen sticky top-0 transition-all duration-300 relative ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <SidebarContent forceCollapsed={isCollapsed} />
      
      {showToggleButton && (
        <button 
          onClick={toggleCollapse} 
          className="absolute bottom-6 -right-3.5 h-7 w-7 rounded-full border border-border bg-card flex items-center justify-center text-foreground shadow hover:bg-accent hover:text-accent-foreground z-50 cursor-pointer"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      )}
    </aside>
  );
}
