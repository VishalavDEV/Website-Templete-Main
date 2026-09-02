/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Sparkles, FilterX } from 'lucide-react';
import { Transaction } from '../types';

interface MiniCalendarProps {
  transactions: Transaction[];
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
}

export default function MiniCalendar({ 
  transactions, 
  selectedDate, 
  setSelectedDate 
}: MiniCalendarProps) {
  // Center on August 2026 by default
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(7); // 0-indexed, so 7 is August

  const monthsList = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calculate the calendar days
  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const days: { dateStr: string; dayNum: number; isCurrentMonth: boolean }[] = [];

    // Fill in previous month's trailing days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const prevDay = daysInPrevMonth - i;
      const prevMonthIdx = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const dateStr = `${prevYear}-${String(prevMonthIdx + 1).padStart(2, '0')}-${String(prevDay).padStart(2, '0')}`;
      days.push({ dateStr, dayNum: prevDay, isCurrentMonth: false });
    }

    // Fill in current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push({ dateStr, dayNum: i, isCurrentMonth: true });
    }

    // Fill in next month's leading days to make a complete grid (6 rows of 7 days = 42 days)
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonthIdx = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      const dateStr = `${nextYear}-${String(nextMonthIdx + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push({ dateStr, dayNum: i, isCurrentMonth: false });
    }

    return days;
  }, [currentYear, currentMonth]);

  // Check if a date has transactions
  const getTransactionsForDate = (dateStr: string) => {
    return transactions.filter(t => t.date === dateStr);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleDaySelect = (dateStr: string) => {
    if (selectedDate === dateStr) {
      setSelectedDate(null); // Deselect if clicked again
    } else {
      setSelectedDate(dateStr);
    }
  };

  return (
    <div 
      id="mini-calendar-panel"
      className="bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-2xl p-6 shadow-[0_12px_40px_rgba(63,42,27,0.08)] flex flex-col h-full"
    >
      {/* Calendar Header with Navigation */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#706861] uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#ff6a3d]" />
            <span>Operational Planner</span>
          </div>
          <h3 className="text-lg font-extrabold text-[#211d1a] tracking-tight mt-0.5">
            {monthsList[currentMonth]} {currentYear}
          </h3>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-1.5">
          {selectedDate && (
            <button
              id="clear-calendar-filter-btn"
              onClick={() => setSelectedDate(null)}
              className="p-1.5 rounded-lg border border-black/[0.05] bg-white hover:bg-black/[0.02] text-[#ff3d77] hover:text-[#ff3d77]/80 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider transition-all"
              title="Clear active date filter"
            >
              <FilterX className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}
          <button
            id="calendar-prev-month-btn"
            onClick={handlePrevMonth}
            className="p-1.5 rounded-lg border border-black/[0.05] bg-white hover:bg-black/[0.02] text-[#706861] hover:text-[#211d1a]"
            aria-label="Previous Month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            id="calendar-next-month-btn"
            onClick={handleNextMonth}
            className="p-1.5 rounded-lg border border-black/[0.05] bg-white hover:bg-black/[0.02] text-[#706861] hover:text-[#211d1a]"
            aria-label="Next Month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekday Label Row */}
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider mb-2">
        {weekdays.map(wd => (
          <div key={wd} className="py-1">{wd}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1.5 flex-1">
        {calendarDays.map((day, idx) => {
          const dayTx = getTransactionsForDate(day.dateStr);
          const isSelected = selectedDate === day.dateStr;
          // System date today is August 24, 2026
          const isToday = day.dateStr === '2026-08-24';
          
          return (
            <button
              key={idx}
              id={`calendar-day-${day.dateStr}`}
              onClick={() => handleDaySelect(day.dateStr)}
              className={`relative flex flex-col items-center justify-center py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                !day.isCurrentMonth 
                  ? 'text-black/[0.22] hover:bg-black/[0.01]' 
                  : isSelected
                  ? 'bg-gradient-to-br from-[#ff6a3d] to-[#ff3d77] text-white shadow-sm'
                  : isToday
                  ? 'bg-[#ff6a3d]/10 text-[#ff6a3d] ring-1 ring-[#ff6a3d]/30'
                  : 'text-[#211d1a] hover:bg-black/[0.03]'
              }`}
              style={{ contentVisibility: 'auto' }}
              title={`${day.dateStr}: ${dayTx.length} transactions`}
            >
              <span>{day.dayNum}</span>
              
              {/* Activity indicator dots */}
              {dayTx.length > 0 && (
                <span className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-[#ff6a3d]'}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom context list */}
      <div className="mt-4 pt-4 border-t border-black/[0.04]">
        <div className="flex items-center justify-between text-[11px] font-semibold text-[#706861]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff6a3d]" />
            <span>Has Transactions</span>
          </div>
          {selectedDate ? (
            <span className="text-[#ff3d77] font-bold">Filtered to: {selectedDate}</span>
          ) : (
            <span className="text-[#9b928a]">Click day to filter ledger</span>
          )}
        </div>
      </div>
    </div>
  );
}
