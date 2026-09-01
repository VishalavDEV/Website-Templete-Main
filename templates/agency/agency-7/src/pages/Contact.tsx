import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CheckCircle2, Send, Zap, Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceQuery = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: serviceQuery || 'UI/UX Design',
    budget: '$50k – $100k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a project description (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration Burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#8B5CF6', '#10B981', '#38BDF8'],
        });
      } catch (e) {
        // Fallback if canvas confetti isn't available
      }
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'UI/UX Design',
      budget: '$50k – $100k',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 space-y-16">
      {/* Editorial Headline */}
      <section className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Zap className="h-3.5 w-3.5" />
          <span>INITIATE PROJECT DISPATCH</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          LET'S MAKE SOMETHING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 italic">
            WORTH REMEMBERING.
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
          Tell us about your project ambitions, timeline, and vision. We typically reply within 24 business hours.
        </p>
      </section>

      {/* Main Grid: Form + Location Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form Panel */}
        <div className="lg:col-span-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 md:p-12 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                INQUIRY RECEIVED
              </h2>

              <p className="max-w-md mx-auto text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                "Thanks — your project inquiry has been received. One of our lead design directors will review your parameters and respond shortly."
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase font-bold text-neutral-700 dark:text-neutral-300">
                    YOUR NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 px-4 py-3 font-mono text-xs text-neutral-900 dark:text-neutral-100 outline-none focus:border-blue-600"
                  />
                  {errors.name && <p className="text-[11px] text-red-500 font-mono">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase font-bold text-neutral-700 dark:text-neutral-300">
                    EMAIL ADDRESS <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@company.com"
                    className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 px-4 py-3 font-mono text-xs text-neutral-900 dark:text-neutral-100 outline-none focus:border-blue-600"
                  />
                  {errors.email && <p className="text-[11px] text-red-500 font-mono">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Company */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase font-bold text-neutral-700 dark:text-neutral-300">
                    COMPANY / ORGANISM
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Studio Vance"
                    className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 px-4 py-3 font-mono text-xs text-neutral-900 dark:text-neutral-100 outline-none focus:border-blue-600"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase font-bold text-neutral-700 dark:text-neutral-300">
                    PROJECT TYPE
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 px-4 py-3 font-mono text-xs text-neutral-900 dark:text-neutral-100 outline-none focus:border-blue-600"
                  >
                    <option value="UI/UX Design">UI/UX Interface Design</option>
                    <option value="Product Strategy">Product Strategy & IA</option>
                    <option value="Brand System">Brand Identity & Editorial</option>
                    <option value="3D WebGL Canvas">3D WebGL & Spatial Web</option>
                    <option value="Full Experience">Full Design & Development</option>
                  </select>
                </div>
              </div>

              {/* Budget Range Pills */}
              <div className="space-y-2">
                <label className="block font-mono text-xs uppercase font-bold text-neutral-700 dark:text-neutral-300">
                  ESTIMATED BUDGET RANGE
                </label>
                <div className="flex flex-wrap gap-3">
                  {['$20k – $50k', '$50k – $100k', '$100k+'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`rounded-xl px-5 py-2.5 font-mono text-xs uppercase font-bold transition-all ${
                        formData.budget === b
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block font-mono text-xs uppercase font-bold text-neutral-700 dark:text-neutral-300">
                  PROJECT DESCRIPTION <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the project goals, target audience, timeline, or key technical challenges..."
                  className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 px-4 py-3 font-mono text-xs text-neutral-900 dark:text-neutral-100 outline-none focus:border-blue-600"
                />
                {errors.message && <p className="text-[11px] text-red-500 font-mono">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 py-4 font-mono text-xs uppercase font-bold tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-all shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>SUBMITTING INQUIRY...</span>
                ) : (
                  <>
                    <span>SEND INQUIRY</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8 font-mono text-xs">
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md space-y-4">
            <div className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>DIRECT CONTACT</span>
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              inquiries@formshift.studio
            </div>
            <p className="text-neutral-500 text-[11px] font-light">
              For general press inquiries, speaking requests, or design audits.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md space-y-4">
            <div className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>HEADQUARTERS</span>
            </div>
            <div className="text-neutral-800 dark:text-neutral-200 space-y-1">
              <div className="font-bold text-neutral-900 dark:text-neutral-100">TOKYO STUDIO</div>
              <div>Shibuya Jingumae 5-7-22</div>
              <div>Tokyo 150-0001, Japan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
