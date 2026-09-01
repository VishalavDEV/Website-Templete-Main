import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

const BUDGET_OPTIONS = [
  '$10k — $25k',
  '$25k — $50k',
  '$50k — $100k+',
  'Monthly Retainer',
  'Advisory Sprint',
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '$25k — $50k',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sfTime, setSfTime] = useState('');

  // Live San Francisco Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setSfTime(timeString);
      } catch {
        setSfTime('10:45 AM PST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#eab308', '#ffffff', '#10b981', '#3b82f6'],
      });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-neutral-950 text-white border-t border-neutral-900 overflow-hidden"
    >
      {/* 4K Workspace Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={PERSONAL_INFO.workspaceImage}
          alt="Studio Ambient Workspace"
          className="w-full h-full object-cover grayscale contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400 mb-3">
            <Mail size={14} />
            <span>13 / INITIATE CONVERSATION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white max-w-2xl">
            Let's Build Something <span className="text-amber-400">Unprecedented</span>.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-xl">
            Direct access to Principal-level engineering and design leadership. Expect a comprehensive technical response within 24 hours.
          </p>
        </div>

        {/* 2-Column Contact Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Credentials & Live Map Mockup */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Cards */}
            <div className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-md flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Direct Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-display font-bold text-base sm:text-lg text-white hover:text-amber-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Direct Phone / Signal</div>
                  <div className="font-display font-bold text-base sm:text-lg text-white">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">San Francisco Local Time</div>
                  <div className="font-mono font-bold text-base text-amber-400">
                    {sfTime || '10:45 AM PST'}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">Pacific Time (UTC-7)</div>
                </div>
              </div>

            </div>

            {/* Simulated Interactive Map Card */}
            <div className="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl relative group">
              <div className="aspect-[16/9] w-full bg-neutral-950 relative flex items-center justify-center overflow-hidden">
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Central Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-2xl animate-bounce">
                    <MapPin size={20} />
                  </div>
                  <span className="mt-2 text-xs font-mono font-bold bg-neutral-950/90 text-white px-3 py-1 rounded-full border border-neutral-800 shadow-xl">
                    San Francisco HQ
                  </span>
                </div>
              </div>
              <div className="p-4 bg-neutral-900/90 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Globe size={13} className="text-emerald-400" />
                  Remote Engagements Worldwide
                </span>
                <span>California, USA</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Craft Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/95 border border-neutral-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Inquiry Dispatched Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mb-6 font-sans">
                    Thank you for reaching out, {formData.name}. Sakthi will review your specifications and reply via {formData.email} within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', budget: '$25k — $50k', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        id="contact-form-name"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        id="contact-form-email"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Project Scope or Objective
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Flagship AI Canvas Web App / Design System Architecture"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      id="contact-form-subject"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Estimated Project Investment
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                            formData.budget === opt
                              ? 'bg-amber-400 text-neutral-950 font-bold'
                              : 'bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Detailed Project Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your product vision, timeline, target platforms, and engineering priorities..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      id="contact-form-message"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-neutral-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Blueprint...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Confidential Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-400">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>Non-disclosure agreement (NDA) honored upon request.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
