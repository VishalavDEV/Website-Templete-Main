import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Building,
  Mail,
  User,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

const INDUSTRIES = [
  'Finance & FinTech',
  'Healthcare & Life Sciences',
  'Technology & SaaS',
  'Industrial & Manufacturing',
  'Retail & E-Commerce',
  'Energy & Utilities',
  'Defense & Sovereign Cloud',
  'Other Enterprise Sector'
];

const COMPANY_SIZES = [
  '100 - 500 employees',
  '500 - 1,000 employees',
  '1,000 - 5,000 employees',
  '5,000+ Enterprise'
];

const AREAS_OF_INTEREST = [
  'Strategic Intelligence & Causal Risk Arbitrage',
  'Enterprise Architecture & Cloud Modernization',
  'Intelligent Process Automation & Multi-Agent Swarms',
  'Unified Data Fabric & Predictive Analytics',
  'Custom AI Transformation & Fine-Tuned Models',
  'AI-Enhanced Cyber Defense & Sovereign Security'
];

export const ConsultationModal: React.FC = () => {
  const { isConsultationModalOpen, setIsConsultationModalOpen, bookConsultation } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    industry: 'Finance & FinTech',
    companySize: '1,000 - 5,000 employees',
    areaOfInterest: 'Custom AI Transformation & Fine-Tuned Models',
    preferredDate: '',
    preferredTime: '14:00 - 15:00 UTC',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; name: string } | null>(null);

  if (!isConsultationModalOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate email';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date';
    if (!formData.message.trim()) errs.message = 'Please provide a brief outline of your initiative';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const created = await bookConsultation({
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        companySize: formData.companySize,
        areaOfInterest: formData.areaOfInterest,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message
      });

      setSuccessData({ id: created.id, name: created.fullName });
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    } catch {
      setErrors({ form: 'Transmission error. Please retry.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsConsultationModalOpen(false);
    // Reset state after close animation
    setTimeout(() => {
      setSuccessData(null);
      setErrors({});
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-gradient-to-r from-[#08080A] via-[#0C0C12] to-[#141422] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                Book an Enterprise Strategy Session
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Direct advisory with senior AI architects & systems engineers
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {successData ? (
            <div className="py-8 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">
                  Your strategy request has been received.
                </h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-slate-200 font-semibold">{successData.name}</span>. A Senior Managing Partner and Technical Solutions Architect have been assigned to review your parameters.
                </p>
              </div>

              <div className="p-4 bg-[#08080A] rounded-xl border border-white/5 max-w-md mx-auto text-left space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Request Identifier</span>
                  <span className="font-mono font-bold text-indigo-400 text-sm">#{successData.id}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Status</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">
                    DISPATCHED TO ARCHITECT
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Expected Response Time</span>
                  <span className="text-slate-300 font-medium">&lt; 4 Hours</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-white text-black hover:bg-slate-200 text-sm font-semibold rounded-full transition-all"
                >
                  Return to Platform
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.form && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs rounded-xl">
                  {errors.form}
                </div>
              )}

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Elena Rostova"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-[#08080A] text-white placeholder-slate-500 border rounded-xl focus:outline-none transition-all ${
                      errors.fullName ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Corporate Email *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. elena@meridiancapital.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-[#08080A] text-white placeholder-slate-500 border rounded-xl focus:outline-none transition-all ${
                      errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Company & Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Company Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Meridian Capital Global"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-[#08080A] text-white placeholder-slate-500 border rounded-xl focus:outline-none transition-all ${
                      errors.company ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'
                    }`}
                  />
                  {errors.company && <p className="text-[11px] text-rose-400 mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Company Size</span>
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={e => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#08080A] border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-200"
                  >
                    {COMPANY_SIZES.map(sz => (
                      <option key={sz} value={sz} className="bg-[#0C0C12] text-slate-100">
                        {sz}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Industry & Area of Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Primary Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={e => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#08080A] border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-200"
                  >
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind} className="bg-[#0C0C12] text-slate-100">
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Area of Strategic Focus
                  </label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={e => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#08080A] border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-200"
                  >
                    {AREAS_OF_INTEREST.map(area => (
                      <option key={area} value={area} className="bg-[#0C0C12] text-slate-100">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-[#08080A] text-white border rounded-xl focus:outline-none transition-all ${
                      errors.preferredDate ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Preferred Time Window</span>
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#08080A] border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-200"
                  >
                    <option value="09:00 - 10:00 UTC">09:00 - 10:00 UTC (European Morning)</option>
                    <option value="14:00 - 15:00 UTC">14:00 - 15:00 UTC (US East / EU Midday)</option>
                    <option value="17:00 - 18:00 UTC">17:00 - 18:00 UTC (US Morning / West Coast)</option>
                    <option value="02:00 - 03:00 UTC">02:00 - 03:00 UTC (APAC / Tokyo)</option>
                  </select>
                </div>
              </div>

              {/* Message outline */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Strategic Scope & Technical Objectives *
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key objectives, current bottlenecks, data volumes, or timeline..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-sm bg-[#08080A] text-white placeholder-slate-500 border rounded-xl focus:outline-none transition-all ${
                    errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
              </div>

              {/* Security & Confidentiality Banner */}
              <div className="p-3 bg-[#08080A] rounded-xl border border-white/5 flex items-center gap-2.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All strategy consultations operate under mutual enterprise NDA with sovereign zero-data-leakage protocols.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-black bg-white hover:bg-slate-200 rounded-full shadow-lg shadow-white/5 hover:brightness-105 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
