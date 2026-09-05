import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, Mail, User, Building, MessageSquare } from 'lucide-react';
import { useToast } from './Toast';

export default function ContactModal({ isOpen, onClose }) {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tier: 'enterprise',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      addToast('Please fill in required fields', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      addToast('Demo scheduled successfully! Our AI architects will contact you in < 15 mins.', 'success');
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', company: '', tier: 'enterprise', message: '' });
      }, 2500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay-wrapper">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="modal-dialog-card max-w-lg"
          >
            <div className="modal-dialog-body">
              {/* Header row with badge and close button */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-[11px] font-mono font-semibold tracking-wide uppercase">
                    VIP Access & Pilot
                  </span>
                </div>

                <button
                  onClick={onClose}
                  className="modal-close-button"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Demo Request Confirmed!</h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-sm">
                    We have reserved your dedicated sandbox enclave. Check <span className="text-cyan-400 font-mono font-medium">{formData.email}</span> for your invitation.
                  </p>
                </motion.div>
              ) : (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                    Deploy AETHERIA on Your Cluster
                  </h2>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    Experience sub-10ms autonomous agent orchestration tailored to your private data fabric.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-purple-400" /> Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Rostova"
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-cyan-400" /> Corporate Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@enterprise.ai"
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-emerald-400" /> Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Apex HyperScale"
                          className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Cluster Scope
                        </label>
                        <select
                          value={formData.tier}
                          onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-[#0d121f] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          <option value="enterprise">Enterprise Multi-Region</option>
                          <option value="air-gapped">Air-Gapped Sovereign</option>
                          <option value="startup">Growth Pilot (Scale)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" /> Use Case / Workflows
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="We want to orchestrate parallel autonomous agents..."
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 sm:py-3 rounded-xl btn-primary flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm transition-all mt-2"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Schedule VIP Enclave Walkthrough
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
