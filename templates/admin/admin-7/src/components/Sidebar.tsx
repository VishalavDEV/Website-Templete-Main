import React from 'react';
import { useApp, ActiveTab } from '../context/AppContext';
import { 
  LayoutDashboard, Terminal, BarChart3, Briefcase, CheckSquare, Users2, 
  Users, DollarSign, UserCog, Mail, FileText, 
  Calendar, Sparkles, Settings, ShieldAlert, ChevronLeft, ChevronRight, X
} from 'lucide-react';

interface SidebarItem {
  id: ActiveTab;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
}

export const Sidebar: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const {
    currentRoute,
    setRoute,
    sidebarExpanded,
    setSidebarExpanded,
    mobileSidebarOpen,
    setMobileSidebarOpen,
    users,
    tasks,
    messages,
    leaveRequests
  } = useApp();

  const items: SidebarItem[] = [
    { id: 'dashboard', label: 'Operational Dashboard', icon: <LayoutDashboard className="h-4.5 w-4.5" /> },
    { id: 'command-center', label: 'Command Center', icon: <Terminal className="h-4.5 w-4.5" /> },
    { id: 'analytics', label: 'Analytics Engine', icon: <BarChart3 className="h-4.5 w-4.5" /> },
    { id: 'projects', label: 'Projects Registry', icon: <Briefcase className="h-4.5 w-4.5" /> },
    { id: 'tasks', label: 'Tasks Backlog', icon: <CheckSquare className="h-4.5 w-4.5" />, badge: tasks.filter(t => t.status !== 'Done').length },
    { id: 'crm', label: 'CRM Pipelines', icon: <Users2 className="h-4.5 w-4.5" /> },
    { id: 'users', label: 'User Directory', icon: <Users className="h-4.5 w-4.5" /> },
    { id: 'finance', label: 'Finance Ledger', icon: <DollarSign className="h-4.5 w-4.5" /> },
    { id: 'hr', label: 'Human Resource', icon: <UserCog className="h-4.5 w-4.5" />, badge: leaveRequests.filter(r => r.status === 'Pending').length },
    { id: 'messages', label: 'Inbox Feed', icon: <Mail className="h-4.5 w-4.5" />, badge: messages.filter(m => m.unread).length },
    { id: 'files', label: 'Cluster Storage', icon: <FileText className="h-4.5 w-4.5" /> },
    { id: 'calendar', label: 'Planner Cal', icon: <Calendar className="h-4.5 w-4.5" /> },
    { id: 'reports', label: 'Analytical Reports', icon: <Sparkles className="h-4.5 w-4.5" /> },
    { id: 'settings', label: 'System Settings', icon: <Settings className="h-4.5 w-4.5" /> },
    { id: 'system-test', label: 'Diagnostics Test', icon: <ShieldAlert className="h-4.5 w-4.5" />, badge: 'PASS' }
  ];

  const handleNavigate = (route: ActiveTab) => {
    setRoute(route);
    if (isMobile) {
      setMobileSidebarOpen(false);
    }
  };

  const showExpanded = sidebarExpanded || isMobile;

  return (
    <aside 
      className={`h-full border-r border-blue-100 bg-white/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 z-45 shrink-0 ${
        isMobile 
          ? 'w-64' 
          : sidebarExpanded 
          ? 'w-64' 
          : 'w-16'
      }`}
    >
      {/* Brand area */}
      <div className="flex h-14 items-center justify-between border-b border-blue-100 px-4 shrink-0 bg-white">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center text-white font-mono font-black shrink-0 shadow-sm shadow-blue-600/20 text-xs">
            S
          </div>
          {showExpanded && (
            <span className="text-xs font-bold font-mono tracking-[0.15em] text-slate-900 whitespace-nowrap">
              SPRINTADMIN // CORE
            </span>
          )}
        </div>
        
        {isMobile ? (
          <button 
            onClick={() => setMobileSidebarOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        ) : (
          <button 
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="hidden lg:block p-1 text-slate-400 hover:text-blue-600 rounded hover:bg-blue-50 cursor-pointer transition-colors"
          >
            {sidebarExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        )}
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto min-h-0 py-3 px-2 space-y-0.5 relative">
        {items.map((item) => {
          const isActive = currentRoute === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-[11px] font-mono uppercase tracking-wider nav-item-interactive transition-all group relative cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-blue-500 z-10 ${
                isActive 
                  ? 'bg-blue-50/90 text-blue-700 font-bold border-l-2 border-blue-600 shadow-2xs' 
                  : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/60'
              }`}
            >
              <div className={`shrink-0 transition-transform duration-150 ${isActive ? 'scale-105 text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`}>
                {item.icon}
              </div>
              {showExpanded && <span className="truncate">{item.label}</span>}
              
              {/* Badge */}
              {item.badge !== undefined && showExpanded && (
                <span className={`ml-auto text-[8px] font-mono font-extrabold px-1.5 py-0.5 rounded tracking-normal ${
                  isActive 
                    ? 'bg-blue-100 text-blue-700' 
                    : item.badge === 'PASS'
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {item.badge}
                </span>
              )}

              {/* Tooltip for collapsed mode */}
              {!showExpanded && (
                <div className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-[9px] font-mono uppercase tracking-wider rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap z-50 border border-slate-700">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Sidebar footer telemetry summary */}
      {showExpanded && (
        <div className="p-3 border-t border-blue-100 bg-blue-50/40 text-[9px] text-slate-500 font-mono space-y-1 select-none shrink-0 uppercase tracking-wider">
          <div className="flex justify-between">
            <span>MEM:</span>
            <span className="font-bold text-slate-700 tabular-nums">{(users.length * 4.2 + 62.4).toFixed(1)}MB</span>
          </div>
          <div className="flex justify-between">
            <span>UPTIME:</span>
            <span className="font-bold text-slate-700 tabular-nums">04:22:15</span>
          </div>
          <div className="text-[8px] font-black text-center pt-2 text-blue-600 tracking-widest border-t border-blue-100 mt-2">
            SPRINTADMIN OS // ONLINE
          </div>
        </div>
      )}
    </aside>
  );
};
