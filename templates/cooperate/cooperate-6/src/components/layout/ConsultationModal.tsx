import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Globe, Shield, Phone, Mail, Building, Users, Calendar, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultService = 'Corporate Travel Management' }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    phone: '',
    service: defaultService,
    estimatedTravelers: '50 – 250 travelers',
    timeframe: 'Immediate (Next 30 days)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#082920]/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[#FBF9F6]/95 backdrop-blur-xl shadow-2xl border border-black/10 z-10 my-8"
          >
            {/* Header pattern bar */}
            <div className="h-1.5 w-full bg-[#0D4433]" />

            {/* Close button */}
            <button
              id="close-consultation-modal"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#65726D] hover:text-[#1A1A1A] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-10">
              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/10 text-[#0D4433] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                      <Globe className="w-3.5 h-3.5" />
                      Consultation Desk
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal leading-tight">
                      Talk with a Global Travel Partner
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#424D48]">
                      Connect directly with an Aurelia Enterprise Advisor to design, audit, or optimize your corporate travel program.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="consult-fullname"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Katherine Sterling"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#1A1A1A]/10 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0D4433] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                          Work Email *
                        </label>
                        <input
                          id="consult-email"
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="e.g. katherine@enterprise.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#1A1A1A]/10 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0D4433] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                          Company / Organization *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-3 w-4 h-4 text-[#919E99]" />
                          <input
                            id="consult-company"
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Global Tech Partners Ltd"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/80 border border-[#1A1A1A]/10 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0D4433] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                          Direct Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3 w-4 h-4 text-[#919E99]" />
                          <input
                            id="consult-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 234-5678"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/80 border border-[#1A1A1A]/10 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0D4433] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                          Primary Area of Interest
                        </label>
                        <select
                          id="consult-service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#1A1A1A]/10 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0D4433] focus:border-transparent transition-all"
                        >
                          <option value="Corporate Travel Management">Corporate Travel Management</option>
                          <option value="Executive & C-Suite Mobility">Executive & C-Suite Mobility</option>
                          <option value="MICE & Global Conferences">MICE & Global Conferences</option>
                          <option value="Group & Incentive Journeys">Group & Incentive Journeys</option>
                          <option value="Travel Risk & Duty of Care">Travel Risk & Duty of Care</option>
                          <option value="Travel Policy & Cost Audit">Travel Policy & Cost Audit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                          Annual Traveling Team Size
                        </label>
                        <select
                          id="consult-travelers"
                          value={formData.estimatedTravelers}
                          onChange={(e) => setFormData({ ...formData, estimatedTravelers: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#1A1A1A]/10 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0D4433] focus:border-transparent transition-all"
                        >
                          <option value="10 – 50 travelers">10 – 50 travelers</option>
                          <option value="50 – 250 travelers">50 – 250 travelers</option>
                          <option value="250 – 1,000 travelers">250 – 1,000 travelers</option>
                          <option value="1,000+ enterprise travelers">1,000+ enterprise travelers</option>
                          <option value="Board / VIP delegation only">Board / VIP delegation only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                        Key Priorities or Specific Requirements
                      </label>
                      <textarea
                        id="consult-notes"
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about your current travel setup, upcoming destinations, or specific objectives (e.g. cost reduction, private jet access, conference in Dubai)..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#1A1A1A]/10 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0D4433] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1 text-xs text-[#65726D]">
                      <Shield className="w-4 h-4 text-[#0D4433] flex-shrink-0" />
                      <span>Enterprise-grade confidentiality. Signed NDA provided upon request.</span>
                    </div>

                    <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#1A1A1A]/10">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#65726D] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        id="consult-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0D4433] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#083024] active:scale-[0.98] transition-all shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Request Consultation</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0D4433]/10 text-[#0D4433] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-9 h-9 text-[#0D4433]" />
                  </div>
                  <h4 className="font-serif text-3xl text-[#1A1A1A] font-normal">
                    Consultation Requested
                  </h4>
                  <p className="mt-3 text-base text-[#424D48] max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#1A1A1A]">{formData.fullName}</span>. An Aurelia Enterprise Managing Director will review your specifications and contact you within <span className="font-semibold text-[#0D4433]">2 business hours</span>.
                  </p>
                  
                  <div className="mt-6 p-4 rounded-2xl bg-white/80 border border-black/5 text-left max-w-md mx-auto text-xs text-[#65726D] space-y-1.5 shadow-xs">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#1A1A1A]">Reference ID:</span>
                      <span className="font-mono text-[#0D4433]">AUR-{(Math.random() * 90000 + 10000).toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#1A1A1A]">Assigned Desk:</span>
                      <span>Global Corporate Mobility</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#1A1A1A]">Confirmation Sent:</span>
                      <span>{formData.workEmail}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-[#0D4433] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#083024] transition-colors cursor-pointer"
                    >
                      Return to Website
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
