/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Bell, 
  RefreshCw, 
  Download, 
  Calendar, 
  Menu, 
  ChevronDown,
  Check,
  User
} from 'lucide-react';
import { DateRange } from '../types';

interface HeaderProps {
  currentTab: string;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  onExport: () => void;
  setMobileOpen: (open: boolean) => void;
}

const PRESETS = [
  { label: 'This Month (Aug 2026)', start: '2026-08-01', end: '2026-08-31' },
  { label: 'Last 30 Days', start: '2026-07-25', end: '2026-08-24' },
  { label: 'July 2026', start: '2026-07-01', end: '2026-07-31' },
];

export default function Header({
  currentTab,
  dateRange,
  setDateRange,
  onRefresh,
  isRefreshing,
  onExport,
  setMobileOpen
}: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationActive, setNotificationActive] = useState(true);

  const getBreadcrumb = () => {
    switch(currentTab) {
      case 'products': return 'Product Analytics';
      case 'transactions': return 'Transaction Ledger';
      case 'calendar': return 'Schedules & Calendars';
      default: return 'Overview';
    }
  };

  const getActivePeriodName = () => {
    const matched = PRESETS.find(p => p.start === dateRange.startDate && p.end === dateRange.endDate);
    if (matched) return matched.label;
    return `${dateRange.startDate} – ${dateRange.endDate}`;
  };

  const handlePresetSelect = (start: string, end: string) => {
    setDateRange({ startDate: start, endDate: end });
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 w-full bg-white/40 backdrop-blur-md border-b border-[rgba(33,29,26,0.09)] px-3 sm:px-5 md:px-8 py-2.5 sm:py-3 md:py-4 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 max-w-full">
        {/* Row 1 on Mobile: Mobile Hamburger, Brand Breadcrumb, and Right Compact Actions */}
        <div className="flex items-center justify-between gap-2 min-w-0 w-full sm:w-auto">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 min-h-[38px] min-w-[38px] flex items-center justify-center rounded-xl bg-white/80 border border-[rgba(33,29,26,0.09)] text-[#706861] hover:text-[#211d1a] active:scale-95 transition-all cursor-pointer shrink-0 shadow-xs"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4.5 h-4.5" />
            </button>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#9b928a] tracking-tight">
                <span className="text-[#706861] font-bold">Spark Admin</span>
                <span>/</span>
                <span className="text-[#ff6a3d] truncate font-medium">{getBreadcrumb()}</span>
              </div>
              <h1 className="text-sm sm:text-base md:text-lg font-extrabold text-[#211d1a] tracking-tight truncate leading-tight">
                {getBreadcrumb()}
              </h1>
            </div>
          </div>

          {/* Quick utility icons visible on mobile top-right bar */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <button
              id="mobile-notification-bell-btn"
              onClick={() => setNotificationActive(false)}
              className="relative p-2 min-h-[36px] min-w-[36px] flex items-center justify-center bg-white/80 hover:bg-white border border-[rgba(33,29,26,0.09)] rounded-xl text-[#706861] transition-all cursor-pointer shadow-xs"
              aria-label="Notifications"
            >
              <Bell className="w-3.5 h-3.5" />
              {notificationActive && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff3d77] ring-2 ring-white" />
              )}
            </button>

            <div 
              id="mobile-header-user-avatar"
              className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#ffc94d] to-[#ff6a3d] text-white flex items-center justify-center font-extrabold text-[10px] shadow-xs shrink-0"
              title="ek6132389@gmail.com (Administrator)"
            >
              EK
            </div>
          </div>
        </div>

        {/* Row 2 on Mobile / Right Cluster on Tablet & Desktop: Date Range Selector & Action Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 md:gap-2.5 w-full sm:w-auto flex-wrap sm:flex-nowrap">
          {/* Date Selector Dropdown Button & Overlay */}
          <div className="relative flex-1 sm:flex-initial min-w-0">
            <button
              id="date-range-selector-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs md:text-sm font-medium text-[#706861] bg-white/90 hover:bg-white border border-[rgba(33,29,26,0.1)] rounded-xl shadow-xs transition-all min-h-[38px] sm:min-h-[40px] cursor-pointer"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              title={`Active Reporting Period: ${getActivePeriodName()}`}
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff6a3d] shrink-0" />
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[9px] text-[#9b928a] font-bold uppercase tracking-wider hidden xs:block sm:hidden leading-none mb-0.5">Date Range</span>
                  <span className="text-[11px] sm:text-xs md:text-sm font-bold text-[#211d1a] truncate leading-tight">
                    {getActivePeriodName()}
                  </span>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 ml-1 shrink-0" />
            </button>

            {dropdownOpen && (
              <>
                <div 
                  id="date-dropdown-backdrop"
                  className="fixed inset-0 z-30" 
                  onClick={() => setDropdownOpen(false)} 
                />
                <div 
                  id="date-dropdown-menu"
                  className="fixed sm:absolute left-3 right-3 sm:left-auto sm:right-0 top-20 sm:top-auto sm:mt-2 w-auto sm:w-80 max-w-sm bg-white border border-[rgba(33,29,26,0.09)] rounded-2xl shadow-2xl p-4 z-40 transition-all duration-200"
                >
                  <span className="block text-[11px] font-bold text-[#9b928a] uppercase tracking-wider mb-2 px-1">Select Reporting Period</span>
                  <div className="space-y-1">
                    {PRESETS.map((p, i) => {
                      const isSelected = dateRange.startDate === p.start && dateRange.endDate === p.end;
                      return (
                        <button
                          key={i}
                          id={`date-preset-${i}`}
                          onClick={() => handlePresetSelect(p.start, p.end)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 sm:py-2 text-xs rounded-xl transition-all min-h-[38px] cursor-pointer ${
                            isSelected 
                              ? 'bg-[#ff6a3d]/10 text-[#ff6a3d] font-semibold' 
                              : 'text-[#706861] hover:bg-black/[0.03] hover:text-[#211d1a]'
                          }`}
                        >
                          <span className="font-medium">{p.label}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#ff6a3d]" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="border-t border-black/[0.04] my-3 pt-3">
                    <span className="block text-[11px] font-bold text-[#9b928a] uppercase tracking-wider mb-2 px-1">Custom Boundaries</span>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="custom-start-date" className="block text-[9px] font-semibold text-[#9b928a] uppercase tracking-wider mb-1">Start Date</label>
                        <input
                          id="custom-start-date"
                          type="date"
                          value={dateRange.startDate}
                          onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
                          className="w-full text-xs p-1.5 border border-black/[0.08] rounded-lg bg-[#faf8f2]"
                        />
                      </div>
                      <div>
                        <label htmlFor="custom-end-date" className="block text-[9px] font-semibold text-[#9b928a] uppercase tracking-wider mb-1">End Date</label>
                        <input
                          id="custom-end-date"
                          type="date"
                          value={dateRange.endDate}
                          onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
                          className="w-full text-xs p-1.5 border border-black/[0.08] rounded-lg bg-[#faf8f2]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons Group */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Refresh Action */}
            <button
              id="refresh-dashboard-btn"
              onClick={onRefresh}
              className={`p-2 min-h-[38px] min-w-[38px] sm:min-h-[40px] sm:min-w-[40px] flex items-center justify-center bg-white/80 hover:bg-white border border-[rgba(33,29,26,0.09)] rounded-xl shadow-xs transition-all text-[#706861] hover:text-[#ff6a3d] active:scale-95 cursor-pointer ${isRefreshing ? 'animate-spin text-[#ff6a3d]' : ''}`}
              title="Refresh statistics & simulate live updates"
              aria-label="Refresh dashboard data"
            >
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Export Action */}
            <button
              id="export-report-btn"
              onClick={onExport}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[38px] sm:min-h-[40px] text-xs font-semibold text-white bg-gradient-to-r from-[#ff6a3d] to-[#ff3d77] hover:brightness-110 active:scale-[0.98] rounded-xl shadow-xs transition-all cursor-pointer"
              title="Export current view to CSV"
              aria-label="Export report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Export</span>
            </button>

            {/* Notification bell (hidden on mobile since it's on top row, visible on tablet/desktop) */}
            <button
              id="notification-bell-btn"
              onClick={() => setNotificationActive(false)}
              className="hidden sm:flex relative p-2 min-h-[40px] min-w-[40px] items-center justify-center bg-white/80 hover:bg-white border border-[rgba(33,29,26,0.09)] rounded-xl text-[#706861] transition-all cursor-pointer shadow-xs"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {notificationActive && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff3d77] ring-2 ring-white" />
              )}
            </button>

            {/* Separator on desktop */}
            <div className="w-[1px] h-6 bg-black/[0.06] hidden md:block" />

            {/* User profile avatar/name visible on tablet/desktop */}
            <div 
              id="header-user-profile"
              className="hidden sm:flex items-center gap-2 pl-1"
              title="ek6132389@gmail.com (Administrator)"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#ffc94d] to-[#ff6a3d] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                EK
              </div>
              <div className="hidden xl:flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#211d1a] truncate leading-tight">ek6132389@gmail.com</span>
                <span className="text-[9px] text-[#9b928a] font-medium leading-tight">Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
