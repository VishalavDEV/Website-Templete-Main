import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Calendar as CalendarIcon, Clock, Plus, Video, X } from 'lucide-react';

export default function CalendarApp() {
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('02:00 PM - 03:00 PM');
  const [eventType, setEventType] = useState('Engineering');
  const [eventHost, setEventHost] = useState('Admin User');

  const [events, setEvents] = useState([
    { title: 'Q3 Executive Revenue Review', time: '11:00 AM - 12:00 PM', type: 'Executive', host: 'Sarah Connor' },
    { title: 'AI Model Benchmark & GPU Allocation', time: '02:30 PM - 03:30 PM', type: 'Engineering', host: 'Mike Chen' },
    { title: 'SOC2 Security Audit Final Review', time: '04:00 PM - 05:00 PM', type: 'Security', host: 'Emily Park' },
  ]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!eventTitle.trim()) return;

    const newEv = {
      title: eventTitle.trim(),
      time: eventTime,
      type: eventType,
      host: eventHost
    };

    setEvents([...events, newEv]);
    setEventTitle('');
    setShowModal(false);
  };

  return (
    <Layout title="Event & Meeting Calendar" breadcrumb="Home / Applications / Calendar">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <CalendarIcon className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Sprint & Executive Calendar</span>
            </h2>
            <p className="text-xs text-slate-400">Schedule meetings, benchmark reviews, and security syncs.</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Schedule Event</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 p-6 rounded-3xl glass-card border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white">August 2026 Grid</h3>
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-mono">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="p-2 text-slate-400 font-bold uppercase">{d}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <div
                  key={day}
                  className={`p-3 rounded-xl border transition-all ${
                    day === 19 ? 'bg-neura-cyan/20 border-neura-cyan text-white font-bold' : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl glass-card border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white">Today's Schedule ({events.length})</h3>
            <div className="space-y-3">
              {events.map(e => (
                <div key={e.title} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1 text-xs hover:border-neura-cyan/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neura-cyan font-bold">{e.type}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{e.host}</span>
                  </div>
                  <h4 className="font-bold text-white">{e.title}</h4>
                  <span className="text-slate-400 block">{e.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Event Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Plus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Schedule New Event</span>
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddEvent} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Event Title</label>
                <input
                  type="text"
                  required
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="e.g. Sprint Retrospective Sync"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Category</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Executive">Executive</option>
                  <option value="Security">Security</option>
                  <option value="Product">Product</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Time Slot</label>
                <input
                  type="text"
                  required
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  placeholder="e.g. 02:00 PM - 03:00 PM"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
