import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Modal } from '../components/common/Modal';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { ArrowUpRight, CheckCircle2, ChevronDown, Mail, MapPin, Phone, Loader2, RotateCcw } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Technology',
    projectType: '3D Web & Platform Engineering',
    budget: '$100k - $250k',
    timeline: '3 - 6 Months',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const industryOptions = [
    'Technology & AI',
    'FinTech & Capital Markets',
    'Luxury & High-End Retail',
    'Mobility & Automotive',
    'Healthcare & Biotech',
    'Industrial & Manufacturing',
    'Other'
  ];

  const projectTypeOptions = [
    '3D Web & Platform Engineering',
    'AI & Multi-Agent Integration',
    'Brand Strategy & Visual Identity',
    'Mobile Product Engineering',
    'Full Enterprise Transformation'
  ];

  const budgetOptions = [
    '$50k - $100k',
    '$100k - $250k',
    '$250k - $500k',
    '$500k+'
  ];

  const timelineOptions = [
    'Immediate (1-2 Months)',
    '3 - 6 Months',
    '6 - 12 Months',
    'Flexible / Planning'
  ];

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Full name is required.';
    if (!formData.company.trim()) errors.company = 'Company name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'A valid business email address is required.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a project description (at least 10 characters).';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      industry: 'Technology',
      projectType: '3D Web & Platform Engineering',
      budget: '$100k - $250k',
      timeline: '3 - 6 Months',
      message: ''
    });
    setFormErrors({});
  };

  return (
    <div className="pt-32 pb-20 bg-[#090909] text-[#f8f7f4] min-h-screen select-none">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b-2 border-[#D1FF00]">
        <ScrollReveal animation="fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-black text-[#D1FF00] block mb-4">
            START A PROJECT // DISCOVERY INITIATION
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black uppercase text-white tracking-tighter leading-[0.85]">
            LET'S INITIATE <br />
            <span className="text-[#090909] bg-[#D1FF00] px-3 py-0.5 rounded-none border-2 border-[#090909] inline-block mt-2">
              DISCOVERY
            </span>.
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl font-mono text-gray-300 leading-relaxed pt-8">
            Submit your parameters below. Our executive board will review your scope, technical requirements, and timeline within 24 hours.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT: Project Form */}
        <div className="lg:col-span-7 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#111111] border-2 border-white/10 rounded-none p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase text-[#D1FF00] font-black tracking-widest">
                PROJECT PARAMETERS
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 font-mono text-[10px] text-gray-400 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>RESET FORM</span>
              </button>
            </div>

            {/* Row 1: Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alexander Vane"
                  className={`w-full px-4 py-3.5 bg-[#090909] border-2 rounded-none text-xs text-white font-mono placeholder-gray-500 focus:outline-none focus:border-[#D1FF00] ${
                    formErrors.name ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {formErrors.name && <p className="text-[10px] text-red-400 font-mono mt-1 font-bold">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                  COMPANY / ORGANIZATION *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Orbit Financial Corp"
                  className={`w-full px-4 py-3.5 bg-[#090909] border-2 rounded-none text-xs text-white font-mono placeholder-gray-500 focus:outline-none focus:border-[#D1FF00] ${
                    formErrors.company ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {formErrors.company && <p className="text-[10px] text-red-400 font-mono mt-1 font-bold">{formErrors.company}</p>}
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                  BUSINESS EMAIL *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alexander@orbit.com"
                  className={`w-full px-4 py-3.5 bg-[#090909] border-2 rounded-none text-xs text-white font-mono placeholder-gray-500 focus:outline-none focus:border-[#D1FF00] ${
                    formErrors.email ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {formErrors.email && <p className="text-[10px] text-red-400 font-mono mt-1 font-bold">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                  PHONE NUMBER (OPTIONAL)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (212) 555-0199"
                  className="w-full px-4 py-3.5 bg-[#090909] border-2 border-white/20 rounded-none text-xs text-white font-mono placeholder-gray-500 focus:outline-none focus:border-[#D1FF00]"
                />
              </div>
            </div>

            {/* Row 3: Custom Styled Selects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                  INDUSTRY SECTOR
                </label>
                <div className="relative">
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#090909] border-2 border-white/20 rounded-none text-xs text-white font-mono appearance-none focus:outline-none focus:border-[#D1FF00] cursor-pointer"
                  >
                    {industryOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#D1FF00] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none stroke-[3]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                  PRIMARY SERVICE TYPE
                </label>
                <div className="relative">
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#090909] border-2 border-white/20 rounded-none text-xs text-white font-mono appearance-none focus:outline-none focus:border-[#D1FF00] cursor-pointer"
                  >
                    {projectTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#D1FF00] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Row 4: Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                  ESTIMATED BUDGET
                </label>
                <div className="relative">
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#090909] border-2 border-white/20 rounded-none text-xs text-white font-mono appearance-none focus:outline-none focus:border-[#D1FF00] cursor-pointer"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#D1FF00] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none stroke-[3]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                  TARGET TIMELINE
                </label>
                <div className="relative">
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#090909] border-2 border-white/20 rounded-none text-xs text-white font-mono appearance-none focus:outline-none focus:border-[#D1FF00] cursor-pointer"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#D1FF00] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono font-black uppercase text-gray-300 mb-2">
                PROJECT OVERVIEW & GOALS *
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your primary technical goals, key deliverables, and target launch window..."
                className={`w-full p-4 bg-[#090909] border-2 rounded-none text-xs text-white font-mono placeholder-gray-500 focus:outline-none focus:border-[#D1FF00] ${
                  formErrors.message ? 'border-red-500' : 'border-white/20'
                }`}
              />
              {formErrors.message && <p className="text-[10px] text-red-400 font-mono mt-1 font-bold">{formErrors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4.5 bg-[#D1FF00] text-[#090909] font-mono text-xs font-black uppercase tracking-widest rounded-none border-2 border-[#090909] hover:bg-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-2xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>TRANSMITTING PARAMETERS...</span>
                </>
              ) : (
                <>
                  <span>SEND INQUIRY TO EXECUTIVE BOARD</span>
                  <ArrowUpRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* RIGHT: Global Offices & Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#111111] border-2 border-white/10 rounded-none p-8 space-y-6">
            <h2 className="text-2xl font-serif font-black text-white uppercase tracking-tighter border-b border-white/10 pb-4">
              DIRECT INQUIRIES
            </h2>

            <div className="space-y-4 text-xs font-mono text-gray-300 font-bold">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D1FF00]" />
                <a href="mailto:inquire@vantaform.com" className="hover:text-[#D1FF00] transition-colors">
                  inquire@vantaform.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D1FF00]" />
                <span>+1 (212) 555-0199</span>
              </div>
            </div>
          </div>

          {/* Offices List */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D1FF00] font-black block">
              GLOBAL STUDIOS // LOCATIONS
            </span>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-5 bg-[#111111] border-2 border-white/10 rounded-none space-y-1">
                <div className="text-white font-black uppercase">NEW YORK // HEADQUARTERS</div>
                <div className="text-gray-400 text-[11px]">500 Hudson Yards, Suite 4200</div>
                <div className="text-[#D1FF00] text-[10px] font-bold">LAT: 40.7128° N</div>
              </div>

              <div className="p-5 bg-[#111111] border-2 border-white/10 rounded-none space-y-1">
                <div className="text-white font-black uppercase">LONDON // STUDIO</div>
                <div className="text-gray-400 text-[11px]">100 Bishopsgate, Level 28</div>
                <div className="text-[#D1FF00] text-[10px] font-bold">LAT: 51.5074° N</div>
              </div>

              <div className="p-5 bg-[#111111] border-2 border-white/10 rounded-none space-y-1">
                <div className="text-white font-black uppercase">ZURICH // TECH LAB</div>
                <div className="text-gray-400 text-[11px]">Gotthardstrasse 26, 8002</div>
                <div className="text-[#D1FF00] text-[10px] font-bold">LAT: 47.3769° N</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Submission Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          handleReset();
        }}
        title="INQUIRY CONFIRMED"
      >
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-[#D1FF00] text-[#090909] rounded-none border-2 border-[#090909] flex items-center justify-center mx-auto text-2xl font-black">
            ✓
          </div>
          <h2 className="text-3xl font-serif font-black uppercase text-white tracking-tighter">
            THANK YOU. YOUR PROJECT IS NOW IN MOTION.
          </h2>
          <p className="text-sm font-mono text-gray-300 max-w-md mx-auto leading-relaxed">
            We have received your parameters for <span className="text-[#D1FF00] font-bold">{formData.company}</span>. Our executive board will review your scope and contact you at <span className="text-white font-bold">{formData.email}</span> within 24 hours.
          </p>

          <div className="pt-6">
            <button
              onClick={() => {
                setShowSuccessModal(false);
                handleReset();
              }}
              className="px-8 py-3 bg-[#D1FF00] text-[#090909] font-mono text-xs font-black uppercase tracking-widest rounded-none border-2 border-[#090909] hover:bg-white transition-colors cursor-pointer"
            >
              RETURN TO SITE
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
