import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Modal, EmptyState } from '../ui/GlobalComponents';
import { Calendar as CalendarIcon, Plus, Trash2, Clock, Users } from 'lucide-react';

export const Calendar: React.FC = () => {
  const { events, createEvent, deleteEvent } = useApp();

  const [viewMode, setViewMode] = useState<'month' | 'agenda'>('month');
  
  // Create Event state
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [evTitle, setEvTitle] = useState('');
  const [evDesc, setEvDesc] = useState('');
  const [evDate, setEvDate] = useState('2026-08-24');
  const [evColor, setEvColor] = useState('#2563EB');

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!evTitle.trim()) return;

    createEvent({
      title: evTitle,
      description: evDesc,
      start: `${evDate}T10:00:00`,
      end: `${evDate}T11:00:00`,
      color: evColor,
      attendees: ['Elena Rostova', 'Marcus Chen']
    });

    setEvTitle('');
    setEvDesc('');
    setIsEventOpen(false);
  };

  const handleDelete = (id: string) => {
    deleteEvent(id);
  };

  // Static grid generation for August 2026 month view
  const daysInMonth = 31;
  const startDayOffset = 6; // Saturday offset is 6 (0 index Sunday)
  
  const calendarCells = Array.from({ length: startDayOffset + daysInMonth }).map((_, i) => {
    if (i < startDayOffset) return null; // Empty placeholder cells for previous month
    return i - startDayOffset + 1; // Real day index 1 to 31
  });

  const getDayEvents = (day: number) => {
    const dateStr = `2026-08-${day.toString().padStart(2, '0')}`;
    return events.filter(e => e.start.startsWith(dateStr));
  };

  return (
    <div className="space-y-6">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
            Operations Planner & Standup Calendars
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Lock design reviews, security checkpoints, and presentation sprints.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-blue-100 text-xs font-semibold font-mono">
            <button
              onClick={() => setViewMode('month')}
              className={`px-3 py-1.5 rounded cursor-pointer transition ${
                viewMode === 'month' ? 'bg-white text-blue-600 shadow-xs font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Month Grid
            </button>
            <button
              onClick={() => setViewMode('agenda')}
              className={`px-3 py-1.5 rounded cursor-pointer transition ${
                viewMode === 'agenda' ? 'bg-white text-blue-600 shadow-xs font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Agenda
            </button>
          </div>
          <button
            onClick={() => setIsEventOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition shadow-xs cursor-pointer font-mono"
          >
            <Plus className="h-4 w-4" />
            Schedule Event
          </button>
        </div>
      </div>

      {viewMode === 'month' ? (
        // MONTH GRID (August 2026 representation)
        <div className="border border-blue-100 rounded-xl bg-white overflow-hidden shadow-xs">
          <div className="bg-blue-50/50 border-b border-blue-100 p-4 flex justify-between items-center">
            <span className="font-extrabold text-xs tracking-wider text-slate-800 uppercase font-mono">AUGUST 2026</span>
            <span className="text-[10px] font-mono text-slate-500 font-medium">COORDINATED UNIVERSAL TIME</span>
          </div>

          <div className="grid grid-cols-7 border-b border-blue-100 font-bold text-center text-[10px] text-slate-500 uppercase tracking-widest bg-slate-50 font-mono">
            <div className="p-2.5">Sun</div>
            <div className="p-2.5">Mon</div>
            <div className="p-2.5">Tue</div>
            <div className="p-2.5">Wed</div>
            <div className="p-2.5">Thu</div>
            <div className="p-2.5">Fri</div>
            <div className="p-2.5">Sat</div>
          </div>

          <div className="grid grid-cols-7 divide-x divide-y divide-blue-50 bg-white">
            {calendarCells.map((day, cellIdx) => {
              if (day === null) {
                return <div key={`empty-${cellIdx}`} className="min-h-24 p-2 bg-slate-50/50" />;
              }

              const dayEvents = getDayEvents(day);

              return (
                <div key={`day-${day}`} className="min-h-24 p-2.5 flex flex-col justify-between hover:bg-blue-50/40 transition">
                  <span className="text-[11px] font-mono font-bold text-slate-600 block mb-1">{day}</span>
                  
                  {/* Event lists inside cells */}
                  <div className="space-y-1 overflow-hidden flex-1 max-h-16">
                    {dayEvents.map((ev) => (
                      <div 
                        key={ev.id} 
                        className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white leading-normal truncate shadow-2xs font-mono"
                        style={{ backgroundColor: ev.color === '#8B5CF6' ? '#2563EB' : ev.color }}
                        title={ev.title}
                      >
                        {ev.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // AGENDA VIEW
        <div className="border border-blue-100 rounded-xl bg-white divide-y divide-blue-50 overflow-hidden shadow-xs">
          {events.length > 0 ? (
            events.map((ev) => {
              const dateStr = new Date(ev.start).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
              const timeStr = new Date(ev.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

              return (
                <div key={ev.id} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-blue-50/40 transition">
                  <div className="flex items-start gap-3">
                    <div className="h-2.5 w-2.5 rounded-full mt-1.5 shrink-0 bg-blue-600" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{ev.title}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{ev.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mt-2 font-mono">
                        <span className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
                          <Clock className="h-3 w-3 text-slate-400" />
                          {timeStr}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
                          <Users className="h-3 w-3 text-slate-400" />
                          {ev.attendees.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase">
                      {dateStr}
                    </span>
                    <button 
                      onClick={() => handleDelete(ev.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition cursor-pointer"
                      title="Delete Agenda Ticket"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <EmptyState 
              title="Operational Planner Nominal" 
              description="No synchronized standups, presenters or checkpoint locks registered."
              actionLabel="Schedule Event"
              onAction={() => setIsEventOpen(true)}
              icon={<CalendarIcon className="h-10 w-10 text-blue-200" />}
            />
          )}
        </div>
      )}

      {/* CREATE STANDUP EVENT MODAL */}
      <Modal isOpen={isEventOpen} onClose={() => setIsEventOpen(false)} title="Schedule Standup / Event">
        <form onSubmit={handleCreateSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Topic / Title</label>
            <input 
              type="text" 
              required
              value={evTitle}
              onChange={(e) => setEvTitle(e.target.value)}
              placeholder="e.g. Sprint planning and architecture sync" 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Outline / Notes</label>
            <textarea 
              rows={3}
              value={evDesc}
              onChange={(e) => setEvDesc(e.target.value)}
              placeholder="Outline meeting agendas or target deliverables..." 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Date</label>
              <input 
                type="date" 
                required
                value={evDate}
                onChange={(e) => setEvDate(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Color Code</label>
              <select 
                value={evColor}
                onChange={(e) => setEvColor(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="#2563EB">Blue (Sprint/Core)</option>
                <option value="#0284C7">Sky (Client Sync)</option>
                <option value="#059669">Emerald (Release)</option>
                <option value="#DC2626">Rose (Security Audit)</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
          >
            Commit Event
          </button>
        </form>
      </Modal>
    </div>
  );
};
