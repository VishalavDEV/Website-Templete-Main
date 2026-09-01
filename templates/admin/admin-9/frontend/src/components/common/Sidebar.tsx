import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  FileText,
  UserCheck,
  BarChart3,
  ClipboardList,
  Bell,
  MessageSquare,
  Settings,
  User,
  LogOut,
  X,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean; // mobile drawer state
  onClose: () => void; // mobile drawer close
  isCollapsed: boolean; // desktop collapsed state
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isCollapsed, onLogout }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Users', path: '/users', icon: Users },
    { name: 'Products', path: '/products', icon: ShoppingBag },
    { name: 'Orders', path: '/orders', icon: FileText },
    { name: 'Customers', path: '/customers', icon: UserCheck },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'Reports', path: '/reports', icon: ClipboardList },
    { name: 'Notifications', path: '/notifications', icon: Bell },
    { name: 'Messages', path: '/messages', icon: MessageSquare },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Admin Profile', path: '/profile', icon: User },
  ];

  const getSidebarWidth = () => {
    if (isCollapsed) return 'w-20';
    return 'w-64';
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200">
      {/* Brand Header */}
      <div className="p-5 flex items-center justify-between border-b border-slate-100 h-16">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-200">
            <Sparkles className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <span className="font-extrabold text-slate-800 text-lg tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ApexAdmin
            </span>
          )}
        </div>
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Nav Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={onClose} // Auto-close drawer on mobile
            className={({ isActive }) =>
              `flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group relative ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50/50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-600'
                }`} />
                {!isCollapsed && <span className="truncate">{item.name}</span>}

                {/* Collapsed Tooltip */}
                {isCollapsed && (
                  <div className="absolute left-full ml-3 px-2 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap shadow-xl">
                    {item.name}
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-slate-100">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all duration-200 group relative"
        >
          <LogOut className="h-5 w-5 flex-shrink-0 text-red-400 group-hover:text-red-500 transition-colors" />
          {!isCollapsed && <span>Logout</span>}

          {/* Collapsed Tooltip */}
          {isCollapsed && (
            <div className="absolute left-full ml-3 px-2 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap shadow-xl">
              Logout
            </div>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside className={`hidden lg:block h-screen fixed top-0 left-0 z-30 transition-all duration-300 ${getSidebarWidth()}`}>
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Sidebar */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        {/* Drawer container */}
        <aside className={`absolute top-0 left-0 h-full w-64 shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {sidebarContent}
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
