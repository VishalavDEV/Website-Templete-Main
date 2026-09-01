import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Mail, Users } from 'lucide-react';
import { CAMPUS_LOCATIONS } from '../data/universityData';

interface CampusVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusVisitModal: React.FC<CampusVisitModalProps> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState('2026-10-15');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM (Morning Quad Tour)');
  const [visitorsCount, setVisitorsCount] = useState('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleDone = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={handleDone}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-['Playfair_Display',serif]">
                Book An In-Person Campus Tour
              </h2>
              <p className="text-xs text-slate-400">
                Experience student life, historic cloisters & labs
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {isBooked ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-slate-900 mb-1">
                Campus Tour Reserved!
              </h3>
              <p className="text-xs text-slate-600 mb-5">
                A confirmation with parking pass, tour check-in location (Welcome Center at Founder Quad), and campus map has been sent to <strong>{email || 'your email'}</strong>.
              </p>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1.5 mb-6">
                <div><strong>Date:</strong> {date}</div>
                <div><strong>Slot:</strong> {timeSlot}</div>
                <div><strong>Party Size:</strong> {visitorsCount} Visitors</div>
              </div>

              <button
                onClick={handleDone}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jane Doe"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Visitors Count
                  </label>
                  <select
                    value={visitorsCount}
                    onChange={(e) => setVisitorsCount(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Student + Parent)</option>
                    <option value="3">3 People</option>
                    <option value="4+">Family Group (4+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tour Time & Guide Route
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="10:00 AM - 12:00 PM (Morning Quad Tour)">10:00 AM - 12:00 PM (Historic Quad & Library)</option>
                  <option value="01:30 PM - 03:30 PM (STEM & Research Lab Tour)">01:30 PM - 03:30 PM (STEM & Research Labs)</option>
                  <option value="04:00 PM - 05:30 PM (Evening Residence & Commons)">04:00 PM - 05:30 PM (Residence & Commons)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Confirm Campus Tour Booking
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
