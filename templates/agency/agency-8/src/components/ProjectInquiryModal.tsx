import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { SERVICES } from '../data/agencyData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Digital Design']);
  const [budget, setBudget] = useState<string>('$50k – $100k');
  const [timeline, setTimeline] = useState<string>('2–3 Months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const budgets = ['< $25k', '$25k – $50k', '$50k – $100k', '$100k+'];
  const timelines = ['< 1 Month', '1–2 Months', '2–3 Months', 'Flexible'];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      // Allow user to see confirmation before reset
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl"
      />

      {/* Main Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#0A0A0A] border border-[#ffffff20] rounded-2xl p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] border border-[#ffffff15] text-[#888888] hover:text-[#FAF9F6] hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#0066FF] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-3xl font-bold text-[#FAF9F6] uppercase">
                Brief Received
              </h3>
              <p className="text-sm text-[#888888] max-w-md mx-auto leading-relaxed">
                Thank you for considering Studio. Our partners review all inquiries within 24 hours to schedule an initial discovery alignment.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3.5 bg-[#0066FF] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Return to Website &nearr;
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#0066FF] text-xs font-mono uppercase tracking-[0.25em] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span>Project Initialization</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF9F6] tracking-tight uppercase">
                Let's build something exceptional.
              </h3>
              <p className="text-[#888888] text-xs sm:text-sm">
                Share a few details and our leadership team will connect directly.
              </p>
            </div>

            {/* Services Multi-Select */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono tracking-widest text-[#888888] block">
                1. Required Capabilities
              </label>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => {
                  const isSelected = selectedServices.includes(s.name);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggleService(s.name)}
                      className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0066FF] text-white font-bold border border-[#0066FF]'
                          : 'bg-white/[0.03] text-[#888888] hover:text-[#FAF9F6] border border-[#ffffff15] hover:bg-white/[0.08]'
                      }`}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono tracking-widest text-[#888888] block">
                2. Anticipated Investment (USD)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`py-2.5 px-3 text-xs font-mono text-center transition-all cursor-pointer ${
                      budget === b
                        ? 'bg-white text-black font-bold'
                        : 'bg-white/[0.03] text-[#888888] hover:text-[#FAF9F6] border border-[#ffffff15]'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono tracking-widest text-[#888888] block">
                3. Target Timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timelines.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTimeline(t)}
                    className={`py-2.5 px-3 text-xs font-mono text-center transition-all cursor-pointer ${
                      timeline === t
                        ? 'bg-white text-black font-bold'
                        : 'bg-white/[0.03] text-[#888888] hover:text-[#FAF9F6] border border-[#ffffff15]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-widest text-[#888888]">
                  Your Name / Role
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan, CEO"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-[#ffffff15] text-[#FAF9F6] placeholder-[#555555] text-sm focus:outline-hidden focus:border-[#0066FF] transition-colors font-mono"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-widest text-[#888888]">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-[#ffffff15] text-[#FAF9F6] placeholder-[#555555] text-sm focus:outline-hidden focus:border-[#0066FF] transition-colors font-mono"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-widest text-[#888888]">
                Brief Description of the Opportunity
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about the product, vision, and core challenges..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.03] border border-[#ffffff15] text-[#FAF9F6] placeholder-[#555555] text-sm focus:outline-hidden focus:border-[#0066FF] transition-colors resize-none font-mono"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#0066FF] hover:brightness-110 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <span>Transmit Project Brief &nearr;</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
