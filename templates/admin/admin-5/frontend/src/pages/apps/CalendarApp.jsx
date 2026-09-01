import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock, Tag } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CalendarApp = () => {
  const { addToast } = useApp();
  const [viewMode, setViewMode] = useState('Month');
  const [showAddForm, setShowAddForm] = useState(false);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '21 Aug 2026',
    time: '10:00 AM',
    category: 'Work',
    day: 'Fri'
  });

  const [events, setEvents] = useState([
    { id: 1, title: 'Sprint Planning & Backlog Grooming', date: '21 Aug 2026', time: '10:00 AM', day: 'Fri', category: 'Work', color: 'var(--brand-primary)' },
    { id: 2, title: 'Client Demo: SmartAdmin Enterprise', date: '22 Aug 2026', time: '02:30 PM', day: 'Sat', category: 'Client', color: 'var(--brand-success)' },
    { id: 3, title: 'Q3 Financial Budget Review', date: '25 Aug 2026', time: '11:00 AM', day: 'Tue', category: 'Finance', color: 'var(--brand-warning)' },
    { id: 4, title: 'SOC2 Type-II Security Compliance Audit', date: '26 Aug 2026', time: '09:00 AM', day: 'Wed', category: 'Security', color: 'var(--brand-danger)' },
    { id: 5, title: 'All-Hands Engineering Sync', date: '28 Aug 2026', time: '04:00 PM', day: 'Fri', category: 'Internal', color: 'var(--brand-info)' }
  ]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title.trim()) return;
    const created = {
      id: Date.now(),
      title: newEvent.title,
      date: newEvent.date,
      time: newEvent.time,
      day: newEvent.day,
      category: newEvent.category,
      color: newEvent.category === 'Work' ? 'var(--brand-primary)' : newEvent.category === 'Client' ? 'var(--brand-success)' : 'var(--brand-warning)'
    };
    setEvents(prev => [...prev, created]);
    setNewEvent({ title: '', date: '21 Aug 2026', time: '10:00 AM', category: 'Work', day: 'Fri' });
    setShowAddForm(false);
    addToast(`Added event "${created.title}" to calendar`, 'success');
  };

  const weekDays = [
    { day: 'Mon', date: '17 Aug' },
    { day: 'Tue', date: '18 Aug' },
    { day: 'Wed', date: '19 Aug' },
    { day: 'Thu', date: '20 Aug' },
    { day: 'Fri', date: '21 Aug' },
    { day: 'Sat', date: '22 Aug' },
    { day: 'Sun', date: '23 Aug' }
  ];

  return (
    <div className="app-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Event Calendar</h1>
          <p>Schedule team meetings, deadlines, and project milestones.</p>
        </div>
        <div className="page-header-actions">
          <div style={{ background: 'var(--bg-subtle)', padding: 4, borderRadius: 8, display: 'flex' }}>
            {['Month', 'Week', 'Day'].map(m => (
              <button
                key={m}
                className={`btn btn-sm ${viewMode === m ? 'btn-primary' : ''}`}
                onClick={() => {
                  setViewMode(m);
                  addToast(`Switched calendar view to ${m}`, 'info');
                }}
                style={{ border: 'none' }}
              >
                {m}
              </button>
            ))}
          </div>
          <button className="btn btn-primary btn-sm" onClick={() => setShowAddForm(!showAddForm)}>
            <Plus size={16} /> {showAddForm ? 'Close Form' : 'Add Event'}
          </button>
        </div>
      </div>

      {/* Inline Quick Event Creation Form */}
      {showAddForm && (
        <div className="glass-card" style={{ marginBottom: 24, padding: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Schedule New Calendar Event</h3>
          <form onSubmit={handleAddEvent} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <div style={{ flex: 2, minWidth: 200 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 }}>Event Title</label>
              <input
                type="text"
                placeholder="e.g. Executive Strategy Meeting"
                value={newEvent.title}
                onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                required
                style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-subtle)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 }}>Time</label>
              <input
                type="text"
                value={newEvent.time}
                onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
                style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-subtle)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 }}>Category</label>
              <select
                value={newEvent.category}
                onChange={e => setNewEvent({ ...newEvent, category: e.target.value })}
                style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-subtle)', color: 'var(--text-primary)', outline: 'none' }}
              >
                <option>Work</option>
                <option>Client</option>
                <option>Finance</option>
                <option>Security</option>
                <option>Internal</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary"><Plus size={16} /> Save Event</button>
          </form>
        </div>
      )}

      {/* Main Calendar View Container */}
      <div className="glass-card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800 }}>August 2026 ({viewMode} View)</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn-icon" onClick={() => addToast('Previous period', 'info')}><ChevronLeft size={18} /></button>
            <button className="btn-icon" onClick={() => addToast('Next period', 'info')}><ChevronRight size={18} /></button>
          </div>
        </div>

        {/* MONTH VIEW */}
        {viewMode === 'Month' && (
          <div className="grid-12">
            {events.map(ev => (
              <div key={ev.id} className="col-4 glass-card" style={{ borderLeft: `4px solid ${ev.color}` }}>
                <span className="badge badge-primary" style={{ marginBottom: 8 }}>{ev.category}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{ev.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{ev.date} at {ev.time}</p>
              </div>
            ))}
          </div>
        )}

        {/* WEEK VIEW */}
        {viewMode === 'Week' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12 }}>
            {weekDays.map(wd => {
              const dayEvents = events.filter(e => e.day === wd.day);
              return (
                <div key={wd.day} style={{ background: 'var(--bg-subtle)', borderRadius: 8, padding: 12, minHeight: 220 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, borderBottom: '1px solid var(--border-color)', paddingBottom: 6, marginBottom: 10 }}>
                    {wd.day} <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>({wd.date})</span>
                  </div>
                  {dayEvents.length === 0 ? (
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>No events scheduled</span>
                  ) : (
                    dayEvents.map(ev => (
                      <div key={ev.id} style={{ background: 'var(--bg-surface)', padding: 8, borderRadius: 6, marginBottom: 8, borderLeft: `3px solid ${ev.color}` }}>
                        <strong style={{ fontSize: 12, display: 'block' }}>{ev.title}</strong>
                        <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{ev.time}</span>
                      </div>
                    ))
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* DAY VIEW */}
        {viewMode === 'Day' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ padding: 12, background: 'var(--brand-primary-light)', color: 'var(--brand-primary)', borderRadius: 8, fontWeight: 700 }}>
              Agenda for Friday, 21 Aug 2026
            </div>
            {events.map(ev => (
              <div key={ev.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderLeft: `4px solid ${ev.color}` }}>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700 }}>{ev.title}</h4>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{ev.category} • Scheduled Slot</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: 'var(--brand-primary)' }}>
                  <Clock size={16} /> {ev.time}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

