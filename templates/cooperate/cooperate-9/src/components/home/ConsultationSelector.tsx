import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/services';

export const ConsultationSelector: React.FC = () => {
  const [selectedPractice, setSelectedPractice] = useState<string>(SERVICES[0].name);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    aumBracket: '$25M – $100M',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              11 / ENGAGEMENT
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              CONFIDENTIAL DIALOGUE
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-tight tracking-tight">
              Start with a conversation.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              We begin every institutional relationship with an exploratory, confidential discussion to understand your balance sheet structure, strategic goals, and risk constraints.
            </p>
          </div>
        </div>

        {/* INTERACTIVE SELECTOR + FORM */}
        <div className="pt-12">
          {submitted ? (
            <div className="p-10 sm:p-14 bg-[#F4F3F3] border border-[#E5E5E5] rounded-2xl text-center space-y-4 max-w-2xl mx-auto">
              <div className="w-10 h-10 bg-[#191919] text-white rounded-full flex items-center justify-center mx-auto text-sm font-mono">
                ✓
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
                Dialogue Requested
              </h3>
              <p className="text-xs sm:text-sm text-[#191919]/70 leading-relaxed max-w-md mx-auto">
                Thank you, {formData.name}. A Managing Partner from our {selectedPractice} practice will reach out directly to schedule a confidential discussion.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', company: '', location: '', aumBracket: '$25M – $100M', message: '' });
                }}
                className="mt-4 px-5 py-2 bg-[#191919] text-white text-xs font-medium rounded-lg hover:bg-[#191919]/90 transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* PRACTICE AREA SELECTOR */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                  PRIMARY AREA OF INTEREST
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {SERVICES.map((s) => {
                    const isSelected = selectedPractice === s.name;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setSelectedPractice(s.name)}
                        className={`p-3 text-left rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? 'bg-[#191919] text-white border-[#191919] shadow-xs'
                            : 'bg-[#F4F3F3] hover:bg-[#EAEAEA] text-[#191919] border-transparent'
                        }`}
                      >
                        {s.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FORM FIELDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-[#191919]/60 font-mono block">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jonathan Vance"
                    className="w-full px-4 py-3 bg-[#F4F3F3] border border-[#E5E5E5] rounded-lg text-xs sm:text-sm text-[#191919] focus:outline-none focus:border-[#191919]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-[#191919]/60 font-mono block">
                    INSTITUTIONAL EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. vance@institution.com"
                    className="w-full px-4 py-3 bg-[#F4F3F3] border border-[#E5E5E5] rounded-lg text-xs sm:text-sm text-[#191919] focus:outline-none focus:border-[#191919]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-[#191919]/60 font-mono block">
                    ORGANIZATION / FAMILY OFFICE
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Vance Global Enterprises"
                    className="w-full px-4 py-3 bg-[#F4F3F3] border border-[#E5E5E5] rounded-lg text-xs sm:text-sm text-[#191919] focus:outline-none focus:border-[#191919]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-[#191919]/60 font-mono block">
                    PRIMARY LOCATION / CITY
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. New York / London / Singapore"
                    className="w-full px-4 py-3 bg-[#F4F3F3] border border-[#E5E5E5] rounded-lg text-xs sm:text-sm text-[#191919] focus:outline-none focus:border-[#191919]"
                  />
                </div>
              </div>

              {/* MESSAGE & CONTEXT */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#191919]/60 font-mono block">
                  MANDATE SCOPE OR SPECIFIC CHALLENGE
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide a brief context regarding your current capital allocation, restructuring, or advisory requirements..."
                  className="w-full px-4 py-3 bg-[#F4F3F3] border border-[#E5E5E5] rounded-lg text-xs sm:text-sm text-[#191919] focus:outline-none focus:border-[#191919] resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E5E5]">
                <span className="text-[11px] font-mono text-[#191919]/50">
                  Strict Fiduciary Confidentiality • Non-Disclosure Protocols Apply
                </span>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#191919] text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-[#191919]/90 transition-colors flex items-center gap-2 cursor-pointer shadow-none"
                >
                  <span>Request a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
