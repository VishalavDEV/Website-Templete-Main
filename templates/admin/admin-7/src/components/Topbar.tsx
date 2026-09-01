import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Bell, Sun, Moon, Laptop, Menu, LogOut, ShieldAlert, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { Avatar, Dropdown, DropdownItem } from './ui/GlobalComponents';

export const Topbar: React.FC = () => {
  const {
    currentRoute,
    setRoute,
    mobileSidebarOpen,
    setMobileSidebarOpen,
    setCommandPaletteOpen,
    settings,
    updateSettings,
    resetState,
    systemHealth,
    showToast
  } = useApp();

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Spatial Engine Calibrated', message: 'Aegis Core successfully finished clustering benchmarks.', time: '10m ago', unread: true },
    { id: 2, title: 'Anomaly Log Alert', message: 'Inbound latency spike on gateway node ws-east-2.', time: '2h ago', unread: true },
    { id: 3, title: 'Invoice Standard Filed', message: 'Starlight Ventures deal proposal signed off.', time: '1d ago', unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    showToast('info', 'Notifications Silenced', 'All alerts have been marked as read.');
  };

  const currentRouteName = currentRoute.split('-').map(p => p.toUpperCase()).join(' ');

  return (
    <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-blue-100 bg-white/80 backdrop-blur-md px-4 sm:px-6">
      {/* Breadcrumbs or Left brand tag */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="lg:hidden p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer transition-colors"
        >
          <Menu className="h-4.5 w-4.5" />
        </button>
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[9px] font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded tracking-widest border border-blue-200">
            NODE 01
          </span>
          <span className="text-blue-300 font-bold">/</span>
          <h2 className="text-[10px] font-bold font-mono tracking-wider text-slate-700 uppercase">
            {currentRouteName}
          </h2>
        </div>
      </div>

      {/* Center status message (anti-ai, highly useful metric context) */}
      <div className="hidden md:flex items-center gap-4 text-[10px] font-mono tracking-wider">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              systemHealth.status === 'Optimal' ? 'bg-emerald-400' : 'bg-blue-400'
            }`} />
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
              systemHealth.status === 'Optimal' ? 'bg-emerald-500' : 'bg-blue-500'
            }`} />
          </span>
          <span className="text-slate-400 font-bold">CPU LOAD:</span>
          <span className="font-bold text-slate-700 tabular-nums">{systemHealth.cpu}%</span>
        </div>
        <div className="h-3 w-px bg-blue-100" />
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 font-bold">NET RTT:</span>
          <span className="font-bold text-slate-700 tabular-nums">{systemHealth.latency}ms</span>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search button trigger */}
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-2 px-2.5 py-1.5 bg-white hover:bg-blue-50/60 rounded-lg border border-blue-200 text-slate-500 hover:text-blue-700 transition-all text-[10px] font-mono uppercase tracking-wider cursor-pointer select-none shadow-xs"
        >
          <Search className="h-3.5 w-3.5 shrink-0 text-blue-600" />
          <span className="hidden sm:inline font-bold">Search Command Console</span>
          <kbd className="hidden lg:inline-flex items-center gap-0.5 border border-blue-200 bg-blue-50 px-1.5 py-0.5 rounded text-[8px] text-blue-600 font-mono tracking-normal">
            ⌘K
          </kbd>
        </button>

        {/* Notifications Dropdown */}
        <Dropdown
          trigger={
            <button className="relative p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
              <Bell className="h-4.5 w-4.5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
              )}
            </button>
          }
        >
          <div className="w-80 p-2 text-xs">
            <div className="flex justify-between items-center px-2 py-1.5 border-b border-blue-100">
              <span className="font-semibold text-slate-700">SYSTEM TELEMETRY ALERTS</span>
              {unreadCount > 0 && (
                <button onClick={handleMarkAllRead} className="text-blue-600 hover:underline">
                  Silence All
                </button>
              )}
            </div>
            <div className="max-h-64 overflow-y-auto divide-y divide-blue-50 py-1">
              {notifications.map(n => (
                <div key={n.id} className={`p-2 transition-colors hover:bg-blue-50/50 rounded-md ${n.unread ? 'bg-blue-50/80' : ''}`}>
                  <div className="flex items-start justify-between gap-1.5">
                    <span className="font-semibold text-slate-800">{n.title}</span>
                    <span className="text-[9px] text-slate-400">{n.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">{n.message}</p>
                </div>
              ))}
            </div>
            <div className="pt-1 text-center border-t border-blue-100">
              <button onClick={() => setRoute('reports')} className="text-blue-600 hover:underline pt-1.5 inline-block font-semibold">
                View Reports Dashboard
              </button>
            </div>
          </div>
        </Dropdown>

        {/* User Account Menu */}
        <Dropdown
          trigger={
            <button className="flex items-center gap-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full">
              <Avatar name="Elena Rostova" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" size="sm" />
            </button>
          }
        >
          <div className="px-4 py-2 border-b border-blue-100 text-xs bg-blue-50/30">
            <span className="block font-bold text-slate-800">Elena Rostova</span>
            <span className="block text-slate-500">elena.r@sprintadmin.io</span>
            <span className="mt-1 inline-block text-[9px] bg-blue-100 text-blue-700 font-bold px-1.5 rounded uppercase border border-blue-200">
              Administrator
            </span>
          </div>
          <DropdownItem onClick={() => setRoute('settings')} icon={<Laptop className="h-4 w-4 text-blue-600" />}>
            Console Settings
          </DropdownItem>
          <DropdownItem onClick={() => setRoute('system-test')} icon={<ShieldAlert className="h-4 w-4 text-blue-600" />}>
            System Diagnostics
          </DropdownItem>
          <DropdownItem onClick={() => {
            if (confirm("Reset current virtual state? This clears database rows back to defaults.")) {
              resetState();
            }
          }} icon={<RefreshCw className="h-4 w-4 text-blue-600" />}>
            Purge State Database
          </DropdownItem>
        </Dropdown>
      </div>
    </header>
  );
};
