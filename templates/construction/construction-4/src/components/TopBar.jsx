import React from 'react';
import { Sun, Moon, Inbox, Activity } from 'lucide-react';

export default function TopBar({ theme, toggleTheme, onOpenInquiries, apiStatus }) {
  return (
    <div className="knack-top-bar w-full bg-[rgba(8,11,18,0.96)] border-b border-[var(--border-light)] py-2 text-xs font-mono text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 flex-wrap">
        
        {/* Left Links & Status */}
        <div className="flex items-center gap-3 flex-wrap">
          <a href="#portfolio" className="text-[var(--gold-honey)] hover:text-white transition-colors font-bold text-[11px] sm:text-xs">
            ‹ CATALOG
          </a>
          <span className="text-neutral-700 hidden sm:inline">|</span>
          <a href="#home" className="text-neutral-300 hover:text-white transition-colors hidden sm:inline text-[11px] sm:text-xs">
            PORTAL
          </a>
          <span className="text-neutral-700 hidden sm:inline">|</span>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SPRING BOOT: {apiStatus}</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button 
            className="inquiries-btn inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border-light)] text-[var(--text-body)] hover:border-[var(--gold-honey)] hover:text-[var(--gold-honey)] transition-all cursor-pointer text-[10px] sm:text-xs font-bold" 
            onClick={onOpenInquiries}
            title="View Inquiries stored in Spring Boot backend"
          >
            <Inbox size={12} />
            <span>INQUIRIES</span>
          </button>
          
          <button 
            className="knack-theme-toggle inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--gold-subtle)] border border-[var(--border-gold)] text-[var(--text-main)] hover:bg-[var(--gold-honey)] hover:text-black transition-all cursor-pointer text-[10px] sm:text-xs font-bold" 
            onClick={toggleTheme} 
            title="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
            <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
