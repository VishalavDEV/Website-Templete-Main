import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  Plus,
  Clock,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Tag
} from 'lucide-react';

import Breadcrumb from '../components/common/Breadcrumb';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import { useApp } from '../context/AppContext';

export default function CalendarPage() {
  const { events, addEvent, deleteEvent } = useApp();
  const [viewMode, setViewMode] = useState('month'); // 'month' | 'week' | 'day'
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    date: '2026-09-05',
    time: '10:00 AM - 11:30 AM',
    category: 'Meeting',
    color: 'bg-blue-500',
    description: ''
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    addEvent(formData);
    setIsAddModalOpen(false);
  };

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="space-y-8">
      <Breadcrumb />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule & Maintenance Calendar
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track upcoming product launches, team syncs, and system maintenance windows
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* View Mode Toggle */}
          <div className="flex items-center p-1 bg-slate-200/70 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300">
            {['month', 'week', 'day'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                  viewMode === mode
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm font-black'
                    : 'hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {mode} View
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setFormData({ title: '', date: '2026-09-05', time: '10:00 AM - 11:30 AM', category: 'Meeting', color: 'bg-blue-500', description: '' });
              setIsAddModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-brand-500/20 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Event</span>
          </button>
        </div>
      </div>

      {/* CALENDAR BODY & UPCOMING EVENTS LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CALENDAR GRID (8 Cols) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
              September 2026
            </h3>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 text-center text-xs font-bold text-slate-400 uppercase py-2">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {daysInMonth.map((day) => {
              const dayStr = day < 10 ? `2026-09-00${day}` : `2026-09-${day}`;
              const dayEvents = events.filter(e => e.date.endsWith(`-${day < 10 ? '0' + day : day}`));

              return (
                <div
                  key={day}
                  className={`min-h-[70px] sm:min-h-[85px] p-1.5 sm:p-2 rounded-xl border transition-all ${
                    day === 2
                      ? 'bg-brand-50/50 dark:bg-brand-950/20 border-brand-500/50'
                      : 'bg-slate-50/40 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-bold ${day === 2 ? 'text-brand-600 dark:text-brand-400' : 'text-slate-700 dark:text-slate-300'}`}>
                      {day}
                    </span>
                    {day === 2 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    )}
                  </div>

                  <div className="mt-1 space-y-1 overflow-hidden">
                    {dayEvents.map(evt => (
                      <div
                        key={evt.id}
                        onClick={() => {
                          setSelectedEvent(evt);
                          setIsDeleteModalOpen(true);
                        }}
                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold text-white truncate cursor-pointer hover:opacity-90 ${evt.color || 'bg-blue-500'}`}
                      >
                        {evt.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* UPCOMING EVENTS LIST (4 Cols) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-4">
              Scheduled Events List
            </h3>

            <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
              {events.map((evt) => (
                <div
                  key={evt.id}
                  className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded text-white ${evt.color || 'bg-blue-500'}`}>
                      {evt.category}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedEvent(evt);
                        setIsDeleteModalOpen(true);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-500 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                    {evt.title}
                  </h4>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.date} • {evt.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ADD EVENT MODAL */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Schedule New Event"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Event Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Q3 Strategic Review"
              className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
              >
                <option value="Meeting">Meeting</option>
                <option value="Product Launch">Product Launch</option>
                <option value="System Maintenance">System Maintenance</option>
                <option value="Webinar">Webinar</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-brand-600 text-white shadow-md shadow-brand-500/20"
            >
              Save Schedule
            </button>
          </div>
        </form>
      </Modal>

      {/* DELETE EVENT CONFIRM */}
      <ConfirmDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          if (selectedEvent) deleteEvent(selectedEvent.id);
        }}
        title="Cancel Event"
        message={`Are you sure you want to remove "${selectedEvent?.title}" from calendar schedule?`}
        confirmText="Remove Event"
      />
    </div>
  );
}
