import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, Clock, Check, ArrowRight, ArrowLeft, Mail, User, Building, ShieldCheck, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedScope?: string;
  onShowToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedScope = '',
  onShowToast
}) => {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>('Autonomous AI & Agentic Systems');
  const [budgetRange, setBudgetRange] = useState<string>('$25,000 – $50,000');
  const [timeline, setTimeline] = useState<string>('4 – 8 Weeks');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('Tomorrow at 10:00 AM PST');
  const [isSubmitting, setIsSubmitting] = useState<string | boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedScope) {
      setMessage((prev) => (prev ? prev : preselectedScope));
    }
  }, [preselectedScope]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 3 && (!fullName || !email || !email.includes('@'))) {
      onShowToast('Validation Alert', 'Please provide a valid name and corporate email.', 'info');
      return;
    }
    setStep((prev) => Math.min(4, prev + 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      onShowToast(
        'Discovery Consultation Scheduled',
        `Confirmed for ${selectedSlot}. Calendar invite dispatched to ${email}.`,
        'success'
      );
    }, 1200);
  };

  const handleDownloadCalendarInvite = () => {
    onShowToast('Calendar Invite Downloaded', 'Added to your calendar (.ics)', 'info');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-4"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header with Progress */}
          <div className="p-6 sm:p-8 border-b border-slate-800 bg-slate-950">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Discovery Process</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {isCompleted ? 'Discovery Session Confirmed' : 'Initiate Discovery Consultation'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Direct technical deep-dive with a Principal Systems Architect. Strict NDA guaranteed.
            </p>

            {/* Step Progress Bar */}
            {!isCompleted && (
              <div className="mt-6 flex items-center justify-between gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex-1 flex flex-col gap-1.5">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        s <= step ? 'bg-indigo-500' : 'bg-slate-800'
                      }`}
                    />
                    <span className="text-[10px] font-mono text-slate-500">
                      Step 0{s}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8">
            {isCompleted ? (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    You’re Scheduled with Alexander Sterling
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
                    Principal Systems Lead at AURA. We have prepared an initial technical briefing dossier for {company || 'your team'}.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Session:</span>
                    <span className="text-slate-200 font-semibold">{selectedSlot}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Meeting Room:</span>
                    <span className="text-indigo-400">Google Meet (Encrypted)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Attendee:</span>
                    <span className="text-slate-200">{email}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleDownloadCalendarInvite}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-indigo-400" />
                    <span>Download Calendar .ICS</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-500/20"
                  >
                    Return to Atelier
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1: Core Focus Area */}
                {step === 1 && (
                  <div className="space-y-4">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Select Primary Architectural Focus
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Autonomous AI & Agentic Systems',
                        'Bespoke Digital Design & UI System',
                        'Full-Stack Cloud & Edge Architecture',
                        'Legacy Modernization & Fractional Advisory'
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setProjectType(item)}
                          className={`p-4 rounded-xl text-left border text-xs font-semibold transition-all ${
                            projectType === item
                              ? 'bg-indigo-500/10 border-indigo-500 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item}</span>
                            {projectType === item && <Check className="w-4 h-4 text-indigo-400" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: Budget & Delivery Velocity */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Target Capital Allocation
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          '$15,000 – $25,000',
                          '$25,000 – $50,000',
                          '$50,000 – $100,000',
                          '$100,000+ (Enterprise Pod)'
                        ].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudgetRange(b)}
                            className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                              budgetRange === b
                                ? 'bg-indigo-500/10 border-indigo-500 text-white'
                                : 'bg-slate-950 border-slate-800 text-slate-400'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Target Delivery Horizon
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {['4 Weeks (Sprint)', '6 – 8 Weeks', 'Ongoing Dedicated Pod'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTimeline(t)}
                            className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                              timeline === t
                                ? 'bg-indigo-500/10 border-indigo-500 text-white'
                                : 'bg-slate-950 border-slate-800 text-slate-400'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact & Company Credentials */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            placeholder="e.g. Dr. Elena Vance"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                          Corporate Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="email"
                            placeholder="elena@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                        Organization / Venture
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          placeholder="e.g. Nexus Quantum AI"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                        Technical Scope Brief &amp; Key Milestones
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe what you're building, key constraints, or link to your spec..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: Live Slot Booking */}
                {step === 4 && (
                  <div className="space-y-4">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Select Confidential Discovery Slot
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Tomorrow at 10:00 AM PST',
                        'Tomorrow at 2:00 PM PST',
                        'Thursday at 11:30 AM PST',
                        'Friday at 1:00 PM PST'
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-4 rounded-xl text-left border text-xs font-semibold flex items-center justify-between transition-all ${
                            selectedSlot === slot
                              ? 'bg-indigo-500/10 border-indigo-500 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-400" />
                            <span>{slot}</span>
                          </div>
                          {selectedSlot === slot && <Check className="w-4 h-4 text-indigo-400" />}
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Mutual Confidentiality NDA automatically generated and dispatched with invite.</span>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white flex items-center gap-1.5 transition-all"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={Boolean(isSubmitting)}
                      className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-[1.01] transition-all disabled:opacity-50"
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>{isSubmitting ? 'Confirming with Architect...' : 'Confirm Discovery Consultation'}</span>
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
