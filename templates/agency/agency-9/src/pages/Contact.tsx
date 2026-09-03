import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

const PROJECT_TYPES = [
  'Brand Strategy',
  'Identity',
  'Website',
  'Digital Product',
  'Campaign',
  'Creative Technology',
  'Other'
];

const BUDGET_RANGES = ['<$10K', '$10K–$25K', '$25K–$50K', '$50K+', 'Not Sure'];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectTypes: [] as string[],
    budget: '$25K–$50K',
    timeline: '1-2 Months',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleProjectType = (type: string) => {
    setFormData((prev) => {
      const exists = prev.projectTypes.includes(type);
      return {
        ...prev,
        projectTypes: exists
          ? prev.projectTypes.filter((t) => t !== type)
          : [...prev.projectTypes, type]
      };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project goals';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate mock server submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D65F3F', '#B94732', '#332832', '#FAF7F1']
      });
    }, 1200);
  };

  return (
    <>
      <SEO
        title="Start a Project — OFFGRID® Contact"
        description="Got a problem worth solving? Good. We like difficult. Initiate a project inquiry with OFFGRID."
      />
      <main className="pt-32 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
        {/* Contact Hero Header */}
        <section className="mb-20 pb-12 border-b border-[#CFC7BE]">
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-4">
            // INITIATE INQUIRY // 2026 DEPLOYMENT
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tighter uppercase text-[#2B2727] leading-[0.88] max-w-5xl">
            GOT A PROBLEM <br />
            WORTH SOLVING? <br />
            <span className="text-[#D65F3F]">GOOD. WE LIKE DIFFICULT.</span>
          </h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Info & Hubs */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-[#77716D] uppercase tracking-widest">
                // DIRECT INQUIRIES
              </h3>
              <a
                href="mailto:hello@offgrid.studio"
                className="font-display font-bold text-3xl sm:text-4xl text-[#2B2727] hover:text-[#D65F3F] transition-colors block"
              >
                HELLO@OFFGRID.STUDIO
              </a>
              <p className="text-sm text-[#77716D] leading-relaxed font-sans">
                We respond to all qualified project briefs within 24 hours.
              </p>
            </div>

            {/* Office Hubs Grid */}
            <div className="space-y-6 pt-6 border-t border-[#CFC7BE]">
              <h3 className="font-mono text-xs text-[#77716D] uppercase tracking-widest">
                // STUDIO LOCATIONS
              </h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="p-4 border border-[#CFC7BE] bg-[#FAF7F1]">
                  <h4 className="font-display font-bold uppercase">NEW YORK</h4>
                  <p className="font-mono text-xs text-[#77716D]">40.7128° N, 74.0060° W</p>
                </div>
                <div className="p-4 border border-[#CFC7BE] bg-[#FAF7F1]">
                  <h4 className="font-display font-bold uppercase">LONDON</h4>
                  <p className="font-mono text-xs text-[#77716D]">51.5074° N, 0.1278° W</p>
                </div>
                <div className="p-4 border border-[#CFC7BE] bg-[#FAF7F1]">
                  <h4 className="font-display font-bold uppercase">CHENNAI</h4>
                  <p className="font-mono text-xs text-[#77716D]">13.0827° N, 80.2707° E</p>
                </div>
                <div className="p-4 border border-[#CFC7BE] bg-[#FAF7F1]">
                  <h4 className="font-display font-bold uppercase">BERLIN</h4>
                  <p className="font-mono text-xs text-[#77716D]">52.5200° N, 13.4050° E</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-12 border-2 border-[#D65F3F] bg-[#FAF7F1] text-center space-y-6">
                <div className="w-16 h-16 bg-[#D65F3F] text-[#FAF7F1] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-4xl uppercase tracking-tight">
                  BRIEF TRANSMITTED SUCCESSFULLY.
                </h3>
                <p className="text-base text-[#2B2727] max-w-md mx-auto font-sans">
                  Thank you for initiating contact with OFFGRID®. Our partners will review your project brief and reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      projectTypes: [],
                      budget: '$25K–$50K',
                      timeline: '1-2 Months',
                      message: ''
                    });
                  }}
                  className="px-8 py-4 bg-[#2B2727] text-[#FAF7F1] font-display font-bold text-xs tracking-widest uppercase"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-[#FAF7F1] p-8 md:p-12 border border-[#CFC7BE]">
                <h3 className="font-display font-bold text-2xl uppercase border-b border-[#CFC7BE] pb-4">
                  PROJECT INQUIRY FORM
                </h3>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-mono text-xs text-[#2B2727] uppercase font-bold block">
                      YOUR NAME <span className="text-[#D65F3F]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full p-4 bg-[#F3EEE6] border font-sans text-sm text-[#2B2727] focus:outline-none ${
                        errors.name ? 'border-[#B94732]' : 'border-[#CFC7BE] focus:border-[#D65F3F]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#B94732] font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-xs text-[#2B2727] uppercase font-bold block">
                      WORK EMAIL <span className="text-[#D65F3F]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full p-4 bg-[#F3EEE6] border font-sans text-sm text-[#2B2727] focus:outline-none ${
                        errors.email ? 'border-[#B94732]' : 'border-[#CFC7BE] focus:border-[#D65F3F]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#B94732] font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="font-mono text-xs text-[#2B2727] uppercase font-bold block">
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="e.g. Aether Labs Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-4 bg-[#F3EEE6] border border-[#CFC7BE] focus:border-[#D65F3F] font-sans text-sm text-[#2B2727] focus:outline-none"
                  />
                </div>

                {/* Project Types Selection */}
                <div className="space-y-3">
                  <label className="font-mono text-xs text-[#2B2727] uppercase font-bold block">
                    PROJECT TYPES (SELECT ALL THAT APPLY)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = formData.projectTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleProjectType(type)}
                          className={`px-4 py-2 font-display text-xs tracking-wider uppercase transition-colors border ${
                            isSelected
                              ? 'bg-[#D65F3F] text-[#FAF7F1] border-[#D65F3F]'
                              : 'bg-[#F3EEE6] text-[#2B2727] border-[#CFC7BE] hover:border-[#D65F3F]'
                          }`}
                          data-cursor="link"
                        >
                          {type} {isSelected && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Selection */}
                <div className="space-y-3">
                  <label className="font-mono text-xs text-[#2B2727] uppercase font-bold block">
                    ESTIMATED BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {BUDGET_RANGES.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-3 px-2 font-mono text-xs text-center uppercase border transition-colors ${
                          formData.budget === b
                            ? 'bg-[#2B2727] text-[#FAF7F1] border-[#2B2727]'
                            : 'bg-[#F3EEE6] text-[#2B2727] border-[#CFC7BE] hover:border-[#D65F3F]'
                        }`}
                        data-cursor="link"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-xs text-[#2B2727] uppercase font-bold block">
                    TELL US ABOUT THE PROJECT & GOALS <span className="text-[#D65F3F]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your brand challenge, target audience, key deliverables, and vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full p-4 bg-[#F3EEE6] border font-sans text-sm text-[#2B2727] focus:outline-none ${
                      errors.message ? 'border-[#B94732]' : 'border-[#CFC7BE] focus:border-[#D65F3F]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-[#B94732] font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#2B2727] hover:bg-[#D65F3F] text-[#FAF7F1] py-5 font-display font-bold text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                  data-cursor="link"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>TRANSMITTING BRIEF...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND PROJECT BRIEF</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
