import React, { useState } from 'react';
import { Mentor } from '../types';
import { X, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MentorBookingModalProps {
  mentor: Mentor | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MentorBookingModal: React.FC<MentorBookingModalProps> = ({
  mentor,
  isOpen,
  onClose,
}) => {
  const [selectedDate, setSelectedDate] = useState('2026-08-20');
  const [selectedTime, setSelectedTime] = useState('03:00 PM EST');
  const [sessionTopic, setSessionTopic] = useState('Portfolio & Code Review');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !mentor) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col my-auto text-slate-900">
        {/* Header */}
        <div className="bg-slate-50 p-5 sm:p-6 flex items-center justify-between border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3.5">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-indigo-200 shadow-xs"
            />
            <div className="text-left">
              <h3 className="text-base font-bold text-slate-900 font-display">{mentor.name}</h3>
              <p className="text-xs text-indigo-700 font-mono font-semibold">
                {mentor.role} • {mentor.company}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-slate-300/60"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-left">
          {isBooked ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-slate-900 font-display">Session Confirmed!</h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                Your 1:1 video mentorship link has been emailed to you for{' '}
                <strong className="text-emerald-700">
                  {selectedDate} at {selectedTime}
                </strong>
                . {mentor.name} will review your notes beforehand.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs rounded-xl cursor-pointer shadow-md shadow-indigo-600/20"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                  Select Session Focus *
                </label>
                <select
                  value={sessionTopic}
                  onChange={(e) => setSessionTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-indigo-500 focus:outline-hidden"
                >
                  <option value="Portfolio & Code Review">Portfolio & Code Architecture Review</option>
                  <option value="System Design & Technical Prep">System Design & Technical Interview Prep</option>
                  <option value="Career Strategy & Promotion">Career Strategy & Promotion Guidance</option>
                  <option value="Resume & Whiteboard Critique">Resume Polish & Whiteboard Challenge</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                    Time Slot (45 min) *
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-indigo-500 focus:outline-hidden"
                  >
                    <option value="11:00 AM EST">11:00 AM EST</option>
                    <option value="01:30 PM EST">01:30 PM EST</option>
                    <option value="03:00 PM EST">03:00 PM EST</option>
                    <option value="05:30 PM EST">05:30 PM EST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                  Session Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share your current project link or specific questions..."
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-indigo-500 focus:outline-hidden placeholder:text-slate-400"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100">
                <div>
                  <span className="text-[10px] text-slate-500 block font-mono">Honorarium</span>
                  <span className="text-base font-bold text-slate-900 font-mono">
                    ${mentor.hourlyRate} / 45-min Session
                  </span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/20 cursor-pointer transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Confirm & Book Session</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
