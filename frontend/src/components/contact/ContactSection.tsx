import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Phone, Clock, Calendar } from 'lucide-react';
import { InstagramIcon, TwitterXIcon } from '../ui/SocialIcons';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialService || 'Editorial & Campaign',
    timeline: '',
    budget: '$3,000 - $6,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update projectType if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, projectType: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Editorial & Campaign',
      timeline: '',
      budget: '$3,000 - $6,000',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#66fcf1]" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#66fcf1]">
                Booking & Commissions
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white tracking-tight">
              COMMISSION AN ASSIGNMENT
            </h2>
          </div>

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12161f] border border-[#66fcf1]/30 text-xs font-mono text-[#c5c6c7]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white">Studio Availability:</span>
            <span className="text-[#66fcf1]">Accepting Q3 / Q4 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Inquiries & Studio Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-['Syne'] text-white mb-4">
                Let's construct light together.
              </h3>
              <p className="text-xs sm:text-sm text-[#c5c6c7]/80 font-light leading-relaxed mb-8">
                We accept a strictly limited number of private and commercial projects each season to guarantee meticulous preparation, dedicated lighting architecture, and artisanal post-production.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 bg-[#12161f] border border-white/5 rounded-sm flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#66fcf1] mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Studio Locations</span>
                    <span className="text-[#c5c6c7]/60 block">Hauptstraße 42, 10827 Berlin, Germany</span>
                    <span className="text-[#c5c6c7]/60 block">Roppongi 3-chome, Minato-ku, Tokyo, Japan</span>
                  </div>
                </div>

                <div className="p-4 bg-[#12161f] border border-white/5 rounded-sm flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#66fcf1] mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Electronic Correspondence</span>
                    <a href="mailto:studio@luminaframe.com" className="text-[#66fcf1] hover:underline block">
                      studio@luminaframe.com
                    </a>
                    <span className="text-[#c5c6c7]/60 text-[10px]">PGP Encrypted Inquiries Accepted</span>
                  </div>
                </div>

                <div className="p-4 bg-[#12161f] border border-white/5 rounded-sm flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#66fcf1] mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Direct Dispatch</span>
                    <span className="text-[#c5c6c7]/80 block">+49 (0) 30 8920 114</span>
                    <span className="text-[#c5c6c7]/50 text-[10px]">Mon – Fri, 09:00 – 18:00 CET</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5c6c7]/50 block mb-3">
                Live Dispatches & Archives
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#c5c6c7] hover:text-[#66fcf1] flex items-center gap-1.5 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@luminaframe</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#c5c6c7] hover:text-[#66fcf1] flex items-center gap-1.5 transition-colors"
                >
                  <TwitterXIcon className="w-3.5 h-3.5" />
                  <span>@lumina_frame</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#12161f] border border-white/10 rounded-sm p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 px-4 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#66fcf1]/10 border border-[#66fcf1] text-[#66fcf1] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(102,252,241,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-white mb-2">
                    Commission Request Received
                  </h3>
                  <p className="text-sm text-[#c5c6c7]/80 font-light max-w-md mb-8 leading-relaxed">
                    Thank you, <span className="text-[#66fcf1] font-medium">{formData.name || 'Valued Client'}</span>. Your inquiry has been routed to Julian Vane. Our studio will review date availability and transmit a formal treatment within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-[#0b0c10] bg-[#66fcf1] hover:bg-[#86fdf4] font-semibold rounded-sm transition-colors cursor-pointer"
                  >
                    Transmit Another Brief
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <h4 className="font-['Syne'] font-bold text-lg text-white">
                      Assignment Brief & Logistics
                    </h4>
                    <span className="text-[11px] font-mono text-[#66fcf1]">
                      * All fields confidential
                    </span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#c5c6c7]/70">
                        Full Name / Agency *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Helena Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0b0c10] border border-white/10 focus:border-[#66fcf1] focus:ring-1 focus:ring-[#66fcf1] rounded-sm px-3.5 py-2.5 text-xs font-mono text-white placeholder-[#c5c6c7]/30 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#c5c6c7]/70">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. h.vance@atelier.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0b0c10] border border-white/10 focus:border-[#66fcf1] focus:ring-1 focus:ring-[#66fcf1] rounded-sm px-3.5 py-2.5 text-xs font-mono text-white placeholder-[#c5c6c7]/30 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Category & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#c5c6c7]/70">
                        Commission Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#0b0c10] border border-white/10 focus:border-[#66fcf1] focus:ring-1 focus:ring-[#66fcf1] rounded-sm px-3.5 py-2.5 text-xs font-mono text-white transition-all outline-none"
                      >
                        <option value="Editorial & Campaign">Editorial & Campaign</option>
                        <option value="Architectural & Spatial">Architectural & Spatial</option>
                        <option value="Private Portraiture & Press">Private Portraiture & Press</option>
                        <option value="Museum & Brand Commission">Museum & Brand Commission</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#c5c6c7]/70">
                        Target Shoot Date / Window
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="e.g. November 2026 or Q4"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full bg-[#0b0c10] border border-white/10 focus:border-[#66fcf1] focus:ring-1 focus:ring-[#66fcf1] rounded-sm px-3.5 py-2.5 text-xs font-mono text-white placeholder-[#c5c6c7]/30 transition-all outline-none pl-9"
                        />
                        <Calendar className="w-3.5 h-3.5 text-[#45a29e] absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#c5c6c7]/70">
                      Estimated Production Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                      {['$2,000 - $4,000', '$4,000 - $7,000', '$7,000 - $15,000', '$15,000+'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-2 text-center rounded border transition-colors ${
                            formData.budget === tier
                              ? 'bg-[#66fcf1]/10 border-[#66fcf1] text-[#66fcf1]'
                              : 'bg-[#0b0c10] border-white/10 text-[#c5c6c7]/70 hover:border-white/20'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Treatment Brief */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#c5c6c7]/70">
                      Creative Brief & Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline your location requirements, aesthetic direction, intended publications, or deliverables..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0b0c10] border border-white/10 focus:border-[#66fcf1] focus:ring-1 focus:ring-[#66fcf1] rounded-sm p-3.5 text-xs font-sans text-white placeholder-[#c5c6c7]/30 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-sm text-xs font-mono uppercase tracking-widest font-bold text-[#0b0c10] bg-[#66fcf1] hover:bg-[#86fdf4] transition-all shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_28px_rgba(102,252,241,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Commission Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
