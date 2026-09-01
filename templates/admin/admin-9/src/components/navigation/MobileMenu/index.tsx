/* src/components/navigation/MobileMenu/index.tsx */
import React from 'react';
import { X, LayoutDashboard, MessageSquare, CreditCard, User, Settings, Calendar } from 'lucide-react';
import { SidebarContent } from '../Sidebar';
import { useSettings } from '../../../app/providers/SettingsProvider';
import { useSidebar } from '../../../app/providers/SidebarProvider';
import { NavLink, Link } from 'react-router-dom';

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { settings } = useSettings();
  const type = settings.mobileMenuStyle;

  if (!isOpen && type !== 'bottom-nav') return null;

  if (type === 'fullscreen') {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-background text-foreground animate-in fade-in duration-200">
        <div className="h-16 px-6 flex items-center justify-between border-b border-border">
          <span className="font-bold text-lg text-primary">Catalog Menu</span>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-accent text-foreground cursor-pointer">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 p-8 overflow-y-auto">
          <SidebarContent onClickItem={onClose} />
        </div>
      </div>
    );
  }

  // Slide-in Drawer Menu (Default)
  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative flex w-full max-w-xs flex-col border-r border-border bg-card p-6 shadow-xl animate-in slide-in-from-left duration-250">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-md p-2 hover:bg-accent text-foreground cursor-pointer">
          <X className="h-5 w-5" />
        </button>
        <div className="mt-8 flex-1 overflow-y-auto">
          <SidebarContent onClickItem={onClose} />
        </div>
      </div>
    </div>
  );
}

// Bottom Navigation Component rendered inside AdminLayout at mobile viewport sizes
export function MobileBottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 border-t border-border bg-card/95 backdrop-blur-md flex items-center justify-around px-4 lg:hidden z-40 select-none shadow-lg">
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex flex-col items-center gap-1 text-[10px] font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <LayoutDashboard className="h-5 w-5" />
        <span>Overview</span>
      </NavLink>
      <NavLink 
        to="/apps/chat" 
        className={({ isActive }) => `flex flex-col items-center gap-1 text-[10px] font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <MessageSquare className="h-5 w-5" />
        <span>Chat</span>
      </NavLink>
      <NavLink 
        to="/billing/invoices" 
        className={({ isActive }) => `flex flex-col items-center gap-1 text-[10px] font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <CreditCard className="h-5 w-5" />
        <span>Invoices</span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => `flex flex-col items-center gap-1 text-[10px] font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <User className="h-5 w-5" />
        <span>Profile</span>
      </NavLink>
      <NavLink 
        to="/settings" 
        className={({ isActive }) => `flex flex-col items-center gap-1 text-[10px] font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <Settings className="h-5 w-5" />
        <span>Settings</span>
      </NavLink>
    </div>
  );
}
