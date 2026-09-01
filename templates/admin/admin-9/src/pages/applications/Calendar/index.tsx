/* src/pages/applications/Calendar/index.tsx */
import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { Card } from '../../../components/ui/Card';
import { Modal } from '../../../components/ui/Modal';
import { useToast } from '../../../app/providers/ToastProvider';
import { Plus, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarEvent {
  dateStr: string; // YYYY-MM-DD format
  title: string;
  color: string;
}

export default function CalendarPage() {
  const { toast } = useToast();
  const [activeView, setActiveView] = useState<'3days' | 'week' | 'month'>('month');

  // Unified active Date state - Default to August 19, 2026
  const [activeDate, setActiveDate] = useState(new Date(2026, 7, 19));

  // Dynamic events state
  const [events, setEvents] = useState<CalendarEvent[]>([
    { dateStr: '2026-08-10', title: 'Operations Research', color: 'bg-[#a78bfa]/15 text-[#a78bfa]' },
    { dateStr: '2026-08-12', title: 'Lunch with Rob', color: 'bg-warning/15 text-warning-foreground' },
    { dateStr: '2026-08-15', title: 'Data Science Team', color: 'bg-[#a78bfa]/15 text-[#a78bfa]' },
    { dateStr: '2026-08-17', title: 'Q4 results share', color: 'bg-primary/15 text-primary' },
    { dateStr: '2026-08-18', title: 'Finish performance', color: 'bg-primary/15 text-primary' },
    { dateStr: '2026-08-18', title: 'Dept Heads Update', color: 'bg-warning/15 text-warning-foreground' },
    { dateStr: '2026-08-23', title: 'DS Quarterly review', color: 'bg-[#a78bfa]/15 text-[#a78bfa]' }
  ]);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDateStr, setEventDateStr] = useState('2026-08-19'); // YYYY-MM-DD format
  const [eventColor, setEventColor] = useState('bg-primary/15 text-primary');
  const [viewingDateStr, setViewingDateStr] = useState<string | null>(null);

  const calendars = [
    { name: 'Work', color: 'bg-primary' },
    { name: 'Data Science Team', color: 'bg-[#a78bfa]' },
    { name: 'Personal', color: 'bg-warning' },
    { name: 'Kids', color: 'bg-info' },
    { name: 'Holidays', color: 'bg-destructive' }
  ];

  const year = activeDate.getFullYear();
  const month = activeDate.getMonth();

  const prevMonth = () => {
    setActiveDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setActiveDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    setActiveDate(new Date(2026, 7, 19));
  };

  const handleOpenCreateModal = () => {
    const y = activeDate.getFullYear();
    const m = String(activeDate.getMonth() + 1).padStart(2, '0');
    const d = String(activeDate.getDate()).padStart(2, '0');
    setEventDateStr(`${y}-${m}-${d}`);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle.trim() || !eventDateStr) return;

    const newEvent: CalendarEvent = {
      dateStr: eventDateStr,
      title: eventTitle,
      color: eventColor
    };

    setEvents(prev => [...prev, newEvent]);
    setIsModalOpen(false);

    // Sync activeDate view to match the created event's month
    const parts = eventDateStr.split('-');
    if (parts.length === 3) {
      const targetYear = parseInt(parts[0], 10);
      const targetMonth = parseInt(parts[1], 10) - 1;
      const targetDay = parseInt(parts[2], 10);
      setActiveDate(new Date(targetYear, targetMonth, targetDay));
    }
    
    // Clear modal fields
    setEventTitle('');
    setEventColor('bg-primary/15 text-primary');
    
    toast.success('Calendar event saved!');
  };

  // Large Calendar Grid Calculation
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDaysInMonth = new Date(year, month, 0).getDate();

  const largeGridSlots: { day: number; isCurrentMonth: boolean; dateStr: string }[] = [];
  
  // Previous month trailing days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const d = prevDaysInMonth - i;
    const prevMonthDate = new Date(year, month - 1, d);
    const mStr = String(prevMonthDate.getMonth() + 1).padStart(2, '0');
    const dStr = String(d).padStart(2, '0');
    largeGridSlots.push({
      day: d,
      isCurrentMonth: false,
      dateStr: `${prevMonthDate.getFullYear()}-${mStr}-${dStr}`
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const mStr = String(month + 1).padStart(2, '0');
    const dStr = String(i).padStart(2, '0');
    largeGridSlots.push({
      day: i,
      isCurrentMonth: true,
      dateStr: `${year}-${mStr}-${dStr}`
    });
  }

  // Next month leading days (to fill 35 or 42 slots)
  const totalSlots = largeGridSlots.length > 35 ? 42 : 35;
  const nextMonthDays = totalSlots - largeGridSlots.length;
  for (let i = 1; i <= nextMonthDays; i++) {
    const nextMonthDate = new Date(year, month + 1, i);
    const mStr = String(nextMonthDate.getMonth() + 1).padStart(2, '0');
    const dStr = String(i).padStart(2, '0');
    largeGridSlots.push({
      day: i,
      isCurrentMonth: false,
      dateStr: `${nextMonthDate.getFullYear()}-${mStr}-${dStr}`
    });
  }

  // Sidebar Mini Calendar Calculation
  const miniDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const miniEmptySpaces = Array.from({ length: firstDayIndex }, (_, i) => null);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 select-none relative">
      {/* Sidebar Left */}
      <div className="w-full lg:w-64 space-y-5 shrink-0">
        <Button 
          variant="primary" 
          className="w-full" 
          leftIcon={<Plus className="h-4 w-4" />} 
          onClick={handleOpenCreateModal}
        >
          Create Event
        </Button>

        {/* State-Driven Mini Calendar */}
        <div className="border border-border bg-card rounded-xl p-4 max-w-sm select-none shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {monthNames[month]} {year}
            </h4>
            <div className="flex gap-1">
              <button onClick={prevMonth} className="p-1 rounded hover:bg-accent text-muted-foreground cursor-pointer"><ChevronLeft className="h-4 w-4" /></button>
              <button onClick={nextMonth} className="p-1 rounded hover:bg-accent text-muted-foreground cursor-pointer"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-muted-foreground mb-2">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {miniEmptySpaces.map((_, i) => <div key={`empty-${i}`} className="h-7"></div>)}
            {miniDays.map((day) => {
              const isToday = day === 19 && month === 7 && year === 2026;
              const isSelected = day === activeDate.getDate();
              return (
                <button
                  key={day}
                  onClick={() => setActiveDate(new Date(year, month, day))}
                  className={`h-7 w-7 rounded-full flex items-center justify-center font-medium hover:bg-accent cursor-pointer transition-colors ${
                    isToday ? 'bg-primary/20 text-primary font-bold border border-primary/40' : 
                    isSelected ? 'bg-primary text-primary-foreground font-bold' : 'text-foreground'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <Card title="Calendars" subtitle="Toggle filters.">
          <div className="space-y-3">
            {calendars.map((cal, i) => (
              <label key={i} className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-border text-primary focus:ring-primary" />
                <span className={`h-2.5 w-2.5 rounded-full ${cal.color}`}></span>
                <span>{cal.name}</span>
              </label>
            ))}
          </div>
        </Card>
        <Button variant="outline" className="w-full text-xs" size="sm">+ Add calendar account</Button>
      </div>

      {/* Main Calendar Month Canvas */}
      <div className="flex-1 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-card p-3 border border-border rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="h-7 w-7" onClick={prevMonth}><ChevronLeft className="h-4 w-4" /></Button>
            <h3 className="text-sm font-extrabold text-foreground">{monthNames[month]} {year}</h3>
            <Button variant="outline" size="icon" className="h-7 w-7" onClick={nextMonth}><ChevronRight className="h-4 w-4" /></Button>
          </div>
          <div className="flex gap-1 border border-border bg-muted/10 p-1 rounded-lg">
            {(['3days', 'week', 'month'] as const).map((v) => (
              <button 
                key={v} 
                onClick={() => setActiveView(v)}
                className={`px-2.5 py-1 text-[10px] font-bold rounded cursor-pointer capitalize ${
                  activeView === v ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent/40'
                }`}
              >
                {v === '3days' ? '3 days' : v}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="h-8" onClick={handleToday}>Today</Button>
        </div>

        <Card>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-muted-foreground uppercase border-b border-border/40 pb-2 mb-2">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>
          <div className="grid grid-cols-7 gap-1.5 border border-border/60 rounded-xl overflow-hidden bg-muted/5 p-1.5">
            {largeGridSlots.map((slot, i) => {
              const isToday = slot.day === 19 && month === 7 && year === 2026 && slot.isCurrentMonth;
              const isSelected = slot.day === activeDate.getDate() && slot.isCurrentMonth;
              
              const dayEvents = events.filter(e => e.dateStr === slot.dateStr);
              
              return (
                <div 
                  key={i} 
                  onClick={() => {
                    setViewingDateStr(slot.dateStr);
                    setActiveDate(new Date(slot.dateStr + 'T00:00:00'));
                  }}
                  className={`border border-border/30 p-2 bg-card rounded-lg flex flex-col justify-between min-h-[75px] transition-all cursor-pointer hover:border-primary/50 ${
                  !slot.isCurrentMonth ? 'opacity-40 bg-muted/5' : ''
                } ${
                  isToday ? 'ring-1 ring-primary border-primary' : ''
                } ${
                  isSelected ? 'bg-primary/5' : ''
                }`}>
                  <span className={`text-[10px] font-bold ${isToday ? 'text-primary' : 'text-muted-foreground'}`}>
                    {slot.day}
                  </span>
                  
                  <div className="space-y-1 mt-1 overflow-hidden">
                    {dayEvents.map((evt, idx) => (
                      <span key={idx} className={`text-[7.5px] font-bold p-0.5 px-1 rounded block truncate ${evt.color}`}>
                        {evt.title}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Local Modal Configurator Overlay */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Calendar Event">
        <form onSubmit={handleSaveEvent} className="space-y-4 pt-2">
          <div>
            <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Event Name</label>
            <input 
              type="text" 
              placeholder="e.g. Sync meeting" 
              value={eventTitle}
              onChange={e => setEventTitle(e.target.value)}
              className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none"
              required 
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Date</label>
              <input 
                type="date" 
                value={eventDateStr}
                onChange={e => setEventDateStr(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none" 
                required 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Category</label>
              <select 
                value={eventColor} 
                onChange={e => setEventColor(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none"
              >
                <option value="bg-primary/15 text-primary">Work (Periwinkle)</option>
                <option value="bg-[#a78bfa]/15 text-[#a78bfa]">Data Science (Lilac)</option>
                <option value="bg-warning/15 text-warning-foreground">Personal (Orange)</option>
                <option value="bg-info/15 text-info-foreground">Kids (Teal)</option>
                <option value="bg-destructive/15 text-destructive-foreground">Holidays (Red)</option>
              </select>
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground bg-muted/20 p-2 rounded border border-border/40">
            Day: <strong className="font-semibold text-foreground">
              {eventDateStr ? new Date(eventDateStr + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long' }) : ''}
            </strong>
          </div>
          <div className="flex gap-2 justify-end pt-3">
            <Button variant="outline" size="sm" type="button" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" size="sm" type="submit">Save Event</Button>
          </div>
        </form>
      </Modal>

      {/* Events List Viewer Modal */}
      <Modal 
        isOpen={!!viewingDateStr} 
        onClose={() => setViewingDateStr(null)} 
        title={`Events for ${viewingDateStr ? new Date(viewingDateStr + 'T00:00:00').toLocaleDateString('en-US', { dateStyle: 'long' }) : ''}`}
      >
        <div className="space-y-4 pt-2">
          {viewingDateStr && events.filter(e => e.dateStr === viewingDateStr).length === 0 ? (
            <div className="text-center py-6 text-xs text-muted-foreground">
              No events scheduled for this date.
            </div>
          ) : (
            <div className="space-y-2">
              {viewingDateStr && events.filter(e => e.dateStr === viewingDateStr).map((evt, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-border/80 bg-muted/5 rounded-xl text-xs">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${evt.color.split(' ')[0]}`}></span>
                    <span className="font-semibold text-foreground">{evt.title}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-semibold">August 2026</span>
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-2 justify-end pt-4 border-t border-border/40">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                setViewingDateStr(null);
                setIsModalOpen(true);
              }}
            >
              + Add Event
            </Button>
            <Button variant="primary" size="sm" onClick={() => setViewingDateStr(null)}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
