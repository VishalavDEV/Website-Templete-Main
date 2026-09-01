import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 19)); // August 2026

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptySpaces = Array.from({ length: firstDayIndex }, (_, i) => null);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="border border-border bg-card rounded-xl p-4 max-w-sm select-none shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h4>
        <div className="flex gap-1">
          <button onClick={prevMonth} className="p-1 rounded hover:bg-accent text-muted-foreground"><ChevronLeft className="h-4 w-4" /></button>
          <button onClick={nextMonth} className="p-1 rounded hover:bg-accent text-muted-foreground"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-muted-foreground mb-2">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {emptySpaces.map((_, i) => <div key={`empty-${i}`} className="h-7"></div>)}
        {days.map((day) => {
          const isToday = day === 19 && currentDate.getMonth() === 7 && currentDate.getFullYear() === 2026;
          return (
            <button
              key={day}
              className={`h-7 w-7 rounded-full flex items-center justify-center font-medium hover:bg-accent cursor-pointer transition-colors ${
                isToday ? 'bg-primary text-primary-foreground font-bold' : 'text-foreground'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
