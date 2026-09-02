import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, CheckCircle, Ticket, User, Mail, Sparkles } from 'lucide-react';

export default function EventModal({ event, onClose }) {
  const [registered, setRegistered] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', count: '1' });

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {registered ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Event Registration Confirmed!</h3>
              <p className="text-slate-600 text-sm mb-6">
                Your ticket for <span className="font-bold text-slate-900">{event.title}</span> has been issued. Virtual stream link & calendar invite sent to <span className="font-semibold text-primary-600">{form.email}</span>.
              </p>

              {/* Digital Pass Preview Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 text-left mb-6 relative overflow-hidden border border-slate-800">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary-600/30 rounded-full blur-xl"></div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">EduPrime VIP Event Ticket</span>
                    <h4 className="font-bold text-base text-white line-clamp-1">{event.title}</h4>
                  </div>
                  <Ticket className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <p>Attendee: <span className="font-bold text-white">{form.name}</span></p>
                  <p>Date: {event.date} • {event.time}</p>
                  <p>Location: {event.location}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Close Ticket Window
              </button>
            </div>
          ) : (
            <div>
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img src={event.thumbnail} alt={event.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white mb-2 inline-block">
                    {event.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug">{event.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar className="w-4 h-4 text-primary-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-primary-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 col-span-2">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Event Overview</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{event.shortDescription}</p>
                </div>

                {event.agenda && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Agenda Highlights</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {event.agenda.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="pt-3 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Reserve Your Seat (Free RSVP)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold shadow-md shadow-primary-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Confirm Free Event Registration
                  </button>
                </form>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
