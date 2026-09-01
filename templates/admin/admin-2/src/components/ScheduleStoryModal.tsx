import React, { useState, useEffect } from 'react';
import { useEditorial } from '../services/editorialStore';
import { X, Calendar, Clock, Loader2, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const ScheduleStoryModal: React.FC = () => {
  const { 
    isScheduleModalOpen, 
    setIsScheduleModalOpen, 
    storyToSchedule, 
    setStoryToSchedule, 
    scheduleStory,
    stories 
  } = useEditorial();

  const [selectedStoryId, setSelectedStoryId] = useState(stories[0]?.id || '');
  const [scheduleDate, setScheduleDate] = useState('2026-08-21');
  const [scheduleTime, setScheduleTime] = useState('14:00');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (storyToSchedule) {
      setSelectedStoryId(storyToSchedule.id);
      if (storyToSchedule.scheduledFor) {
        const d = new Date(storyToSchedule.scheduledFor);
        setScheduleDate(d.toISOString().split('T')[0]);
        setScheduleTime(d.toTimeString().substring(0, 5));
      }
    }
  }, [storyToSchedule]);

  if (!isScheduleModalOpen) return null;

  const handleClose = () => {
    setIsScheduleModalOpen(false);
    setStoryToSchedule(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStoryId) return;

    setIsSubmitting(true);
    try {
      const iso = new Date(`${scheduleDate}T${scheduleTime}:00Z`).toISOString();
      await scheduleStory(selectedStoryId, iso);
      handleClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStory = stories.find((s) => s.id === selectedStoryId) || storyToSchedule;

  return (
    <div 
      id="schedule-story-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <motion.div
        id="schedule-story-modal"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col"
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-sky-600" />
            <h2 className="font-serif text-lg font-bold text-slate-900">
              Schedule Release Dispatch
            </h2>
          </div>
          <button
            id="close-schedule-modal-btn"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Target Story Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Select Manuscript to Schedule *
            </label>
            <select
              id="schedule-story-picker-select"
              value={selectedStoryId}
              onChange={(e) => setSelectedStoryId(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900 cursor-pointer"
            >
              {stories.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} ({s.status.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          {/* Story Snippet Card */}
          {currentStory && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <img
                src={currentStory.heroImage}
                alt={currentStory.title}
                className="w-12 h-10 object-cover rounded-lg shrink-0"
              />
              <div className="min-w-0 flex-1 text-left">
                <div className="text-xs font-bold text-slate-900 truncate">
                  {currentStory.title}
                </div>
                <div className="text-[10px] text-slate-500">
                  By {currentStory.author.name} • {currentStory.category}
                </div>
              </div>
            </div>
          )}

          {/* Date & Time Picker */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Release Date *
              </label>
              <input
                id="schedule-date-input"
                type="date"
                required
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Embargo Release Time *
              </label>
              <input
                id="schedule-time-input"
                type="time"
                required
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>
          </div>

          {/* Distribution Channel Checkboxes */}
          <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-100 space-y-2 text-xs text-sky-950">
            <div className="font-semibold font-serif">Automated Distribution Queues:</div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-sky-600 focus:ring-sky-400 cursor-pointer" />
              <span>Broadcast to 48,000+ Daily Science Edition Subscribers</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-sky-600 focus:ring-sky-400 cursor-pointer" />
              <span>Syndicate to Smithsonian &amp; CERN Open Science Feeds</span>
            </label>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              id="cancel-schedule-btn"
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              id="confirm-schedule-btn"
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs font-semibold shadow-sm disabled:opacity-50 transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Scheduling...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Release</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
