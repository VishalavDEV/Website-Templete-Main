/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  CreditCard, 
  Calendar, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Flame 
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function Sidebar({
  currentTab,
  setCurrentTab,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen
}: SidebarProps) {

  // Prevent background scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'products', label: 'Product Analytics', icon: ShoppingBag },
    { id: 'transactions', label: 'Transaction Ledger', icon: CreditCard },
    { id: 'calendar', label: 'Schedules & Dates', icon: Calendar },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileOpen(false);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0b0f19] md:bg-[#1e293b]/30 backdrop-blur-xl md:backdrop-blur-md border-r border-[rgba(255, 255, 255, 0.1)] shadow-2xl md:shadow-none">
      {/* Brand Header */}
      <div className={`flex items-center justify-between p-4 sm:p-6 border-b border-white/10 ${collapsed ? 'justify-center' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff6a3d] to-[#ff3d77] flex items-center justify-center shadow-md shadow-[#ff6a3d]/10 transition-transform duration-300 hover:scale-105">
            <span className="text-white font-extrabold text-sm">S</span>
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] tracking-tight text-[#f8fafc]">Spark Admin</span>
              <span className="text-[9px] uppercase tracking-wider text-[#ff6a3d] font-bold">Ember Glow</span>
            </div>
          )}
        </div>
        {mobileOpen && (
          <button 
            id="close-sidebar-btn"
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg hover:bg-white/5 text-[#cbd5e1] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 sm:py-6 space-y-2 overflow-y-auto" aria-label="Main Navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-3 md:py-2.5 rounded-[10px] transition-all duration-200 group text-left min-h-[44px] cursor-pointer ${
                isActive
                  ? 'bg-[#1e293b] text-[#f8fafc] shadow-[0_4px_12px_rgba(0,0,0,0.05)] font-bold'
                  : 'text-[#cbd5e1] hover:bg-white/5 hover:text-[#f8fafc]'
              }`}
              style={{ contentVisibility: 'auto' }}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={`w-4 h-4 transition-transform duration-200 group-hover:scale-105 ${isActive ? 'text-[#ff6a3d]' : 'text-[#94a3b8] group-hover:text-[#cbd5e1]'}`} />
              {!collapsed && (
                <span className="text-sm md:text-[13px] tracking-tight font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Pro Plan promotion panel from Clean Minimalism */}
      {!collapsed && (
        <div className="px-4 py-4 mb-4 mx-3 rounded-[10px] bg-[#ff6a3d]/8 border border-[#ff6a3d]/12 flex flex-col gap-2">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#ff6a3d]">Pro Plan</div>
          <p className="text-[11px] text-[#cbd5e1] leading-relaxed">
            Unlock advanced analytics and CSV exports.
          </p>
          <button className="w-full py-1.5 bg-[#1e293b] text-[11px] font-bold text-[#f8fafc] rounded-lg border border-white/10 shadow-xs hover:bg-[#0b0f19] transition-colors cursor-pointer">
            Upgrade Now
          </button>
        </div>
      )}

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-white/10">
        <div className={`flex items-center gap-3 p-2 rounded-xl bg-black/[0.02] ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-full bg-[#ffc94d]/20 flex items-center justify-center text-[#ff6a3d] font-bold text-xs shadow-inner">
            EK
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-[#f8fafc] truncate">ek6132389@gmail.com</span>
              <span className="text-[9px] text-[#94a3b8] tracking-wide font-medium">Administrator</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Persistent) */}
      <aside 
        id="desktop-sidebar"
        className={`hidden md:block h-screen sticky top-0 transition-all duration-300 z-20 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        <SidebarContent />
        
        {/* Collapse Toggle Button */}
        <button
          id="collapse-sidebar-btn"
          onClick={() => setCollapsed(!collapsed)}
          className="absolute bottom-6 -right-3.5 w-7 h-7 bg-[#1e293b] border border-white/10 hover:border-black/[0.12] rounded-full flex items-center justify-center shadow-sm text-[#cbd5e1] hover:text-[#f8fafc] hover:scale-105 transition-all cursor-pointer z-30"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div 
          id="mobile-sidebar-backdrop"
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar (Slide-out Drawer) */}
      <aside
        id="mobile-sidebar"
        className={`md:hidden fixed top-0 bottom-0 left-0 w-72 z-50 transition-transform duration-300 ease-in-out transform ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
