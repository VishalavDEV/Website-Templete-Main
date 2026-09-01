import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, ArrowRight, CheckCircle2, Video, Sparkles, Building, Mail, User } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import confetti from 'canvas-confetti';

const DATES = [
  { day: 'Tomorrow', date: 'Oct 28', slots: ['10:00 AM', '02:00 PM', '04:30 PM'] },
  { day: 'Thursday', date: 'Oct 29', slots: ['11:30 AM', '01:00 PM', '03:30 PM'] },
  { day: 'Friday', date: 'Oct 30', slots: ['09:30 AM', '03:00 PM', '05:00 PM'] }
];

export default function DemoModal() {
  const { demoModalOpen, closeDemoModal, showToast } = useModal();
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(DATES[0].slots[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!demoModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) {
      showToast('Please enter your name and work email.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F5A900', '#FFC247', '#FFFFFF']
        });
      } catch (err) {}
      showToast(`📅 Demo booked for ${DATES[selectedDateIndex].day} at ${selectedSlot}!`);
    }, 800);
  };

  const handleClose = () => {
    closeDemoModal();
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-lg rounded-3xl bg-[#0c0c10]/95 border border-white/15 shadow-2xl shadow-black/95 backdrop-blur-2xl p-6 md:p-8 z-10 overflow-hidden text-left"
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
              <CheckCircle2 size={30} />
            </div>

            <h3 className="text-2xl font-bold text-white">Live Demo Scheduled!</h3>
            
            <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              We've dispatched a calendar invitation and private Zoom link to <span className="text-amber-400 font-semibold">{email}</span>.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300 text-left space-y-2">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-amber-400" />
                <span>Date: {DATES[selectedDateIndex].day} ({DATES[selectedDateIndex].date})</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-amber-400" />
                <span>Time: {selectedSlot} EST (30 mins)</span>
              </div>
              <div className="flex items-center gap-2">
                <Video size={14} className="text-amber-400" />
                <span>Host: Senior Solutions Architect</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Calendar size={16} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Schedule a 1-on-1 Product Demo</h3>
                <p className="text-xs text-zinc-400">Tailored 30-min technical architecture walkthrough</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select Date */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Select Date
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {DATES.map((item, idx) => (
                    <button
                      type="button"
                      key={item.date}
                      onClick={() => {
                        setSelectedDateIndex(idx);
                        setSelectedSlot(item.slots[0]);
                      }}
                      className={`p-2.5 rounded-xl text-center border transition-all ${
                        selectedDateIndex === idx
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                          : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs">{item.day}</div>
                      <div className="text-[10px] font-mono opacity-70">{item.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time Slot */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Select Time (EST)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {DATES[selectedDateIndex].slots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 rounded-xl text-xs font-mono border transition-all ${
                        selectedSlot === slot
                          ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-md shadow-amber-500/20'
                          : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 focus-within:border-amber-500/50">
                    <User size={14} className="text-zinc-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full bg-transparent text-xs text-white placeholder-zinc-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Company
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 focus-within:border-amber-500/50">
                    <Building size={14} className="text-zinc-400" />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full bg-transparent text-xs text-white placeholder-zinc-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Work Email
                </label>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 focus-within:border-amber-500/50">
                  <Mail size={14} className="text-zinc-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@acmecorp.com"
                    className="w-full bg-transparent text-xs text-white placeholder-zinc-500 outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Confirming Slot...</span>
                  ) : (
                    <>
                      <span>Confirm Demo Booking</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </motion.div>
    </div>
  );
}
