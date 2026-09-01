import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, ArrowRight, ArrowLeft, Send } from 'lucide-react';

interface ContactProps {
  onSuccessToast: (title: string, message: string) => void;
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ onSuccessToast, preselectedService }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    challenge: 'Legacy Monolith Modernization',
    budgetScale: '$25,000 - $50,000 / mo',
    capabilities: ['Digital Transformation', 'Cloud Architecture'],
    fullName: '',
    workEmail: '',
    company: '',
    phone: '',
    projectNotes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const challengesOptions = [
    { id: 'legacy', label: 'Legacy Monolith Modernization', desc: 'Slow releases, high technical debt & system latency.' },
    { id: 'cloud', label: 'Cloud Infrastructure Scale', desc: 'Multi-region Kubernetes mesh & 99.999% SLA uptime.' },
    { id: 'ai', label: 'Generative AI & Process Automation', desc: 'Enterprise LLM agent integration & automated extraction.' },
    { id: 'finops', label: 'FinOps Expenditure Optimization', desc: 'Overpriced cloud bills, unoptimized servers & database right-sizing.' },
    { id: 'mna', label: 'Tech M&A Technical Due Diligence', desc: 'Code audit & infrastructure evaluation for acquisition targets.' }
  ];

  const budgetOptions = [
    { label: '$5,000 - $15,000 / mo', desc: 'Strategic Foundation & Architecture Audit' },
    { label: '$15,000 - $35,000 / mo', desc: 'Dedicated Engineering Pod (Tech Lead + Engineers)' },
    { label: '$35,000 - $75,000 / mo', desc: 'Multi-Pod Enterprise Transformation' },
    { label: 'Bespoke Custom Scale', desc: 'Uncapped Advisory & Custom SLA' }
  ];

  const capabilityOptions = [
    'Digital Transformation',
    'AI & Intelligent Automation',
    'Multi-Cloud Architecture',
    'Data Intelligence & BI',
    'Executive Business Strategy',
    'Full-Stack Software Pod'
  ];

  const toggleCapability = (cap: string) => {
    if (formData.capabilities.includes(cap)) {
      setFormData({ ...formData, capabilities: formData.capabilities.filter(c => c !== cap) });
    } else {
      setFormData({ ...formData, capabilities: [...formData.capabilities, cap] });
    }
  };

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid work email address.';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFinishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep4()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      onSuccessToast(
        'Executive Intake Received!',
        `Thank you ${formData.fullName}. A Senior Solutions Director from Vertex will review your intake and send an invitation within 2 hours.`
      );
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-slate-900">10 /</span>
              <span>GUIDED BUSINESS INTAKE SYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              INITIATE ADVISORY DISCOVERY
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 max-w-md">
            Complete the 4-step executive intake to receive a tailored architecture matrix and ROI forecast.
          </p>
        </div>

        {/* ================= 4-STEP GUIDED INTAKE CONTAINER ================= */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Sidebar */}
          <div className="lg:col-span-4 bg-slate-950 text-white p-6 sm:p-8 space-y-6 border border-slate-800 shadow-xl font-mono text-xs">
            <div>
              <span className="text-emerald-400 font-bold uppercase tracking-widest block text-[10px]">DIRECT CORPORATE HOTLINE</span>
              <h3 className="text-xl font-bold text-white mt-1 font-sans uppercase">EXECUTIVE BRIEFING DESK</h3>
              <p className="text-slate-400 font-sans text-xs mt-2">
                All submitted data is processed strictly under our non-disclosure policy.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            {/* Intake Progress Tracker */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-slate-500 font-bold uppercase text-[10px] block">INTAKE PROGRESS: STEP 0{currentStep} OF 04</span>
              <div className="w-full h-1.5 bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-emerald-400 transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Guided Multi-Step Form */}
          <div className="lg:col-span-8 bg-[#FAF9F6] border border-slate-300 p-6 sm:p-10 shadow-lg">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-sans text-slate-950 uppercase">INTAKE SUBMITTED SUCCESSFULLY</h3>
                  <p className="text-xs font-mono text-slate-600 mt-2 max-w-md mx-auto">
                    A Senior Solutions Director from Vertex Strategy will review your specifications and reach out within 2 business hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="px-6 py-3 bg-slate-900 text-white font-mono text-xs font-bold uppercase"
                >
                  START NEW INTAKE
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Step Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 font-mono text-xs">
                  <span className="font-bold text-slate-950 uppercase">
                    STEP 0{currentStep} / 04 — {
                      currentStep === 1 ? 'IDENTIFY PRIMARY CHALLENGE' :
                      currentStep === 2 ? 'SELECT CAPACITY SCALE' :
                      currentStep === 3 ? 'SELECT CAPABILITIES MATRIX' : 'EXECUTIVE CONTACT DETAILS'
                    }
                  </span>
                  <span className="text-emerald-700 font-bold">● CONFIDENTIAL</span>
                </div>

                {/* STEP 1: CHALLENGE */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <span className="text-xs font-mono text-slate-500 font-bold uppercase block">SELECT PRIMARY OPERATIONAL FRICTION:</span>
                    <div className="space-y-3 font-mono text-xs">
                      {challengesOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setFormData({ ...formData, challenge: opt.label })}
                          className={`w-full text-left p-4 border transition-all ${
                            formData.challenge === opt.label
                              ? 'bg-slate-950 text-white border-slate-950 font-bold shadow-md'
                              : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-sans font-bold uppercase">{opt.label}</span>
                            <span className={`text-[10px] ${formData.challenge === opt.label ? 'text-emerald-400' : 'text-slate-400'}`}>
                              {formData.challenge === opt.label ? '● SELECTED' : 'SELECT'}
                            </span>
                          </div>
                          <p className="text-xs font-sans text-slate-400 mt-1 font-normal">{opt.desc}</p>
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="px-6 py-3 bg-slate-950 text-white font-mono text-xs font-bold uppercase flex items-center space-x-2"
                      >
                        <span>NEXT: CAPACITY SCALE</span>
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: BUDGET / SCALE */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <span className="text-xs font-mono text-slate-500 font-bold uppercase block">SELECT TARGET ENGAGEMENT SCALE:</span>
                    <div className="space-y-3 font-mono text-xs">
                      {budgetOptions.map((b, i) => (
                        <button
                          key={i}
                          onClick={() => setFormData({ ...formData, budgetScale: b.label })}
                          className={`w-full text-left p-4 border transition-all ${
                            formData.budgetScale === b.label
                              ? 'bg-slate-950 text-white border-slate-950 font-bold shadow-md'
                              : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-base font-bold text-emerald-600">{b.label}</span>
                            <span className={`text-[10px] ${formData.budgetScale === b.label ? 'text-emerald-400' : 'text-slate-400'}`}>
                              {formData.budgetScale === b.label ? '● SELECTED' : 'SELECT'}
                            </span>
                          </div>
                          <p className="text-xs font-sans text-slate-400 mt-1">{b.desc}</p>
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="px-5 py-3 bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase flex items-center space-x-1"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>BACK</span>
                      </button>
                      <button
                        onClick={() => setCurrentStep(3)}
                        className="px-6 py-3 bg-slate-950 text-white font-mono text-xs font-bold uppercase flex items-center space-x-2"
                      >
                        <span>NEXT: CAPABILITIES</span>
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: CAPABILITY MATRIX */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <span className="text-xs font-mono text-slate-500 font-bold uppercase block">SELECT REQUIRED CAPABILITY MODULES (MULTIPLE ALLOWED):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                      {capabilityOptions.map((cap, i) => {
                        const isChecked = formData.capabilities.includes(cap);
                        return (
                          <button
                            key={i}
                            onClick={() => toggleCapability(cap)}
                            className={`p-4 border text-left transition-all ${
                              isChecked
                                ? 'bg-slate-950 text-white border-slate-950 font-bold'
                                : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-sans font-bold uppercase">{cap}</span>
                              <span className={`text-[10px] ${isChecked ? 'text-emerald-400' : 'text-slate-400'}`}>
                                {isChecked ? '✔' : '+ ADD'}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="px-5 py-3 bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase flex items-center space-x-1"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>BACK</span>
                      </button>
                      <button
                        onClick={() => setCurrentStep(4)}
                        className="px-6 py-3 bg-slate-950 text-white font-mono text-xs font-bold uppercase flex items-center space-x-2"
                      >
                        <span>NEXT: CONTACT DETAILS</span>
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT & FINAL SUBMIT */}
                {currentStep === 4 && (
                  <form onSubmit={handleFinishSubmit} className="space-y-4 font-mono text-xs" noValidate>
                    <span className="text-xs text-slate-500 font-bold uppercase block">ENTER EXECUTIVE CONTACT INFORMATION:</span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Marcus Vance"
                          className="w-full p-3 border border-slate-300 font-sans text-sm focus:outline-none focus:border-slate-950 bg-white"
                        />
                        {errors.fullName && <p className="text-xs text-rose-600 mt-1 font-sans">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                        <input
                          type="email"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full p-3 border border-slate-300 font-sans text-sm focus:outline-none focus:border-slate-950 bg-white"
                        />
                        {errors.workEmail && <p className="text-xs text-rose-600 mt-1 font-sans">{errors.workEmail}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Company Name *</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Capital"
                          className="w-full p-3 border border-slate-300 font-sans text-sm focus:outline-none focus:border-slate-950 bg-white"
                        />
                        {errors.company && <p className="text-xs text-rose-600 mt-1 font-sans">{errors.company}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Direct Phone (Optional)</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (800) 555-0199"
                          className="w-full p-3 border border-slate-300 font-sans text-sm focus:outline-none focus:border-slate-950 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Project Scope &amp; Target Milestones (Optional)</label>
                      <textarea
                        rows={3}
                        value={formData.projectNotes}
                        onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                        placeholder="Detail target timelines, cloud provider constraints, or technical debt background..."
                        className="w-full p-3 border border-slate-300 font-sans text-sm focus:outline-none focus:border-slate-950 bg-white"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="px-5 py-3 bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase flex items-center space-x-1"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>BACK</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-8 py-3.5 bg-slate-950 text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-2 hover:bg-slate-800 transition-colors"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                            <span>PROCESSING INTAKE...</span>
                          </>
                        ) : (
                          <>
                            <span>01 — TRANSMIT EXECUTIVE INTAKE</span>
                            <Send className="w-4 h-4 text-emerald-400" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
