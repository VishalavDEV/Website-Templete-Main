import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Building,
  MapPin,
  Send,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Globe,
  Lock,
  ArrowRight
} from 'lucide-react';

const GLOBAL_OFFICES = [
  {
    city: 'Zurich (HQ)',
    address: 'Gotthardstrasse 26, 8002 Zürich, Switzerland',
    email: 'zurich@nexora.intelligence',
    type: 'Global Headquarters & Causal Labs'
  },
  {
    city: 'San Francisco',
    address: '500 Howard Street, San Francisco, CA 94105',
    email: 'sf@nexora.intelligence',
    type: 'Autonomous Systems & Mesh Engineering'
  },
  {
    city: 'London',
    address: '100 Bishopsgate, London EC2N 4AG, United Kingdom',
    email: 'london@nexora.intelligence',
    type: 'EMEA Enterprise Advisory'
  },
  {
    city: 'Singapore',
    address: 'Marina Bay Financial Centre Tower 1, Singapore',
    email: 'apac@nexora.intelligence',
    type: 'APAC Sovereign Security Hub'
  }
];

export const ContactSection: React.FC = () => {
  const { submitContactMessage, addToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Enterprise Architecture Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) errs.message = 'Please provide message details';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await submitContactMessage(formData);
      setIsSubmitted(true);
      addToast({
        type: 'success',
        title: 'Inquiry Dispatched',
        message: 'Your message was securely routed to our senior technical partner.'
      });
    } catch {
      setErrors({ form: 'Unable to dispatch. Please retry.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Enterprise Architecture Inquiry',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Global Enterprise Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Initiate Architecture Advisory.
          </h2>
          <p className="text-base text-slate-400">
            Connect directly with NEXORA Managing Partners across Zurich, San Francisco, London, and Singapore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0C12] border border-white/5 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Your inquiry has been received.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                    A Partner from the relevant practice will review your message and reply via encrypted corporate channel within four hours.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="mt-4 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-lg border border-white/10 transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Marcus Vance"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0A0A0E] text-white border rounded-xl focus:outline-none transition-all ${
                          errors.name ? 'border-rose-500' : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. marcus@globalbank.ch"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0A0A0E] text-white border rounded-xl focus:outline-none transition-all ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject / Practice Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0A0A0E] border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-white"
                    >
                      <option value="Enterprise Architecture Inquiry">Enterprise Architecture Inquiry</option>
                      <option value="Multi-Agent Swarm Pilot">Multi-Agent Swarm Pilot</option>
                      <option value="Causal AI Risk Assessment">Causal AI Risk Assessment</option>
                      <option value="Sovereign Cloud Deployment">Sovereign Cloud Deployment</option>
                      <option value="Partnership & Integration">Partnership & Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline current infrastructure scale, technical constraints, or specific goals..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0A0A0E] text-white border rounded-xl focus:outline-none transition-all ${
                        errors.message ? 'border-rose-500' : 'border-white/10 focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zero-retention encryption active</span>
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold text-xs rounded-xl shadow-md hover:bg-slate-200 active:scale-95 disabled:opacity-50 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Global Office Hubs */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-500">
              Sovereign Operating Hubs
            </h3>

            <div className="space-y-3">
              {GLOBAL_OFFICES.map(hub => (
                <div key={hub.city} className="p-4 rounded-2xl bg-[#0C0C12] border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{hub.city}</span>
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{hub.address}</p>
                  <p className="text-[11px] text-slate-400">{hub.type}</p>
                  <div className="pt-1 text-[11px] font-mono text-indigo-400">{hub.email}</div>
                </div>
              ))}
            </div>

            {/* Direct PGP Fingerprint Card */}
            <div className="p-4 rounded-2xl bg-[#0C0C12] border border-white/5 text-xs space-y-1">
              <span className="text-slate-500 font-mono text-[10px] uppercase">Cryptographic Security Verification:</span>
              <p className="font-mono text-slate-300 text-[11px] truncate">
                PGP: 4A8F 992B C103 88FA E201 9B44 518C 3349 7E0F 9122
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
