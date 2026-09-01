import React, { useState } from 'react';
import { Search, Bell, History, Plus, Menu, X, Compass, Shield, Sparkles } from 'lucide-react';
import { NotificationItem } from '../types';

interface CommandDeckProps {
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenHistory: () => void;
  onOpenQuickCreate: (type?: string) => void;
  unreadCount: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

export const CommandDeck: React.FC<CommandDeckProps> = ({
  onOpenSearch,
  onOpenNotifications,
  onOpenHistory,
  onOpenQuickCreate,
  unreadCount,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeView,
  setActiveView
}) => {
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#DCE7EC] px-4 lg:px-8 py-3 transition-all">
      <div className="flex items-center justify-between gap-4">
        
        {/* Left Brand / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#203040] hover:bg-[#F5F9FB] rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveView('today')}>
            <div className="w-9 h-9 rounded-xl bg-[#183B56] flex items-center justify-center text-[#B9E4F4] shadow-sm">
              <Compass size={20} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-[#183B56] text-lg tracking-tight">ARCTIC FROST</span>
                <span className="text-[10px] font-semibold bg-[#B9E4F4]/50 text-[#183B56] px-1.5 py-0.5 rounded uppercase tracking-wider">Obs</span>
              </div>
              <p className="text-[11px] text-[#718096] hidden sm:block tracking-wide">Editorial Command Center</p>
            </div>
          </div>
        </div>

        {/* Center Global Search Trigger */}
        <div className="flex-1 max-w-xl mx-2 hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 bg-[#F5F9FB] hover:bg-[#CDEFF4]/30 border border-[#DCE7EC] hover:border-[#6FAFD4] rounded-xl text-sm text-[#718096] transition-all group shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Search size={16} className="text-[#64748B] group-hover:text-[#183B56] transition-colors" />
              <span className="text-xs sm:text-sm">Search stories, people, media, readers...</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-[#DCE7EC] text-[#64748B] rounded shadow-2xs">⌘</kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-[#DCE7EC] text-[#64748B] rounded shadow-2xs">K</kbd>
            </div>
          </button>
        </div>

        {/* Right Actions & Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Mobile search trigger */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2.5 text-[#203040] hover:bg-[#F5F9FB] rounded-xl border border-[#DCE7EC]"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          {/* Quick Actions Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setQuickMenuOpen(!quickMenuOpen)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#183B56] hover:bg-[#203040] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
            >
              <Plus size={15} />
              <span>Command Actions</span>
            </button>

            {quickMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setQuickMenuOpen(false)} />
                <div className="absolute right-0 mt-2 w-56 bg-white border border-[#DCE7EC] rounded-xl shadow-lg py-2 z-50 text-xs">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-[#718096] uppercase tracking-wider">Newsroom Actions</div>
                  <button
                    onClick={() => { setQuickMenuOpen(false); onOpenQuickCreate('story'); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F9FB] text-[#203040] flex items-center gap-2 font-medium"
                  >
                    <Sparkles size={14} className="text-[#6FAFD4]" /> Compose Story
                  </button>
                  <button
                    onClick={() => { setQuickMenuOpen(false); onOpenQuickCreate('media'); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F9FB] text-[#203040] flex items-center gap-2 font-medium"
                  >
                    <Shield size={14} className="text-[#5FAF8A]" /> Import Media
                  </button>
                  <button
                    onClick={() => { setQuickMenuOpen(false); setActiveView('calendar'); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F9FB] text-[#203040] flex items-center gap-2 font-medium"
                  >
                    <Compass size={14} className="text-[#D6A85D]" /> Schedule Publication
                  </button>
                  <button
                    onClick={() => { setQuickMenuOpen(false); setActiveView('explorer'); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F9FB] text-[#203040] flex items-center gap-2 font-medium"
                  >
                    <Search size={14} className="text-[#183B56]" /> Review Queue
                  </button>
                  <button
                    onClick={() => { setQuickMenuOpen(false); onOpenQuickCreate('collection'); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F9FB] text-[#203040] flex items-center gap-2 font-medium"
                  >
                    <Plus size={14} className="text-[#6FAFD4]" /> Create Collection
                  </button>
                </div>
              </>
            )}
          </div>

          {/* History Drawer Trigger */}
          <button
            onClick={onOpenHistory}
            className="p-2.5 text-[#64748B] hover:text-[#183B56] hover:bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl transition-colors relative"
            title="Command History"
            aria-label="Command History"
          >
            <History size={18} />
          </button>

          {/* Notification Bell */}
          <button
            onClick={onOpenNotifications}
            className="p-2.5 text-[#64748B] hover:text-[#183B56] hover:bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl transition-colors relative"
            title="Notifications"
            aria-label="Notifications"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D77878] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-2xs">
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-[#DCE7EC]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
              alt="Alex Vance"
              className="w-9 h-9 rounded-xl object-cover border border-[#DCE7EC]"
            />
            <div className="hidden xl:block text-left">
              <p className="text-xs font-semibold text-[#203040] leading-tight">Alex Vance</p>
              <p className="text-[10px] text-[#718096]">Super Admin</p>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
