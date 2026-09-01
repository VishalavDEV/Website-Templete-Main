import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
} from 'lucide-react';
import { NAV_ITEMS, NavItem } from '../../routes/routesConfig';

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
}) => {
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>(() => {
    const activeSection = NAV_ITEMS.find(
      (item) =>
        location.pathname.startsWith(item.path) ||
        item.subItems?.some((sub) => location.pathname === sub.path)
    );
    return activeSection ? { [activeSection.name]: true } : { Dashboard: true };
  });

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Shell */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-white dark:bg-[#050505] text-slate-700 dark:text-slate-300 border-r border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 flex flex-col justify-between ${
          collapsed ? 'w-20' : 'w-64'
        } ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div>
          <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-3 overflow-hidden">
              {!collapsed && (
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-slate-900 dark:text-white tracking-wider leading-none">
                    NEXUS<span className="text-brand-600 dark:text-brand-400">PRO</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">
                    Enterprise Admin
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Collapse Toggle */}
            <button
              onClick={onToggleCollapse}
              className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="px-3 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
            {NAV_ITEMS.map((item: NavItem) => {
              const Icon = item.icon;
              const hasSub = item.subItems && item.subItems.length > 0;
              const isSubOpen = !!openSubmenus[item.name];
              const isSectionActive =
                location.pathname === item.path ||
                item.subItems?.some((sub) => location.pathname === sub.path);

              return (
                <div key={item.name} className="relative group">
                  {hasSub ? (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isSectionActive
                          ? 'bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-300 font-bold border border-brand-200 dark:border-brand-500/30'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className={`w-5 h-5 shrink-0 ${isSectionActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`} />
                        {!collapsed && <span className="truncate">{item.name}</span>}
                      </div>

                      {!collapsed && (
                        <div className="ml-2">
                          {isSubOpen ? (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                      )}
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={onCloseMobile}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
                        }`
                      }
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {!collapsed && <span className="truncate">{item.name}</span>}
                    </NavLink>
                  )}

                  {/* Submenu List */}
                  {hasSub && isSubOpen && !collapsed && (
                    <div className="mt-1 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800 space-y-1">
                      {item.subItems?.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          onClick={onCloseMobile}
                          end
                          className={({ isActive }) =>
                            `block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                              isActive
                                ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold border-l-2 border-brand-600 dark:border-brand-400 pl-2'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}

                  {/* Tooltip for Collapsed Sidebar */}
                  {collapsed && (
                    <div className="absolute left-full top-2 ml-3 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                      {item.name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
