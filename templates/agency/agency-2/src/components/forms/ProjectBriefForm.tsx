import React, { useState } from 'react';
import { Sparkles, Check, Copy, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { mockApi } from '../../services/mockApi';
import { MagneticButton } from '../common/MagneticButton';
import { showToast } from '../common/Toast';

const PROJECT_TYPES = [
  'Branding',
  'Website',
  'Digital Product',
  'Campaign',
  'Strategy',
  'Motion & 3D',
  'Other',
];

const BUDGET_OPTIONS = ['$10K–25K', '$25K–50K', '$50K–100K', '$100K+'];

const TIMELINE_OPTIONS = ['ASAP', '1–2 MONTHS', '3–6 MONTHS', '6+ MONTHS'];

export const ProjectBriefForm: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Website');
  const [budget, setBudget] = useState('$25K–50K');
  const [timeline, setTimeline] = useState('1–2 MONTHS');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Your name is required';
    if (!company.trim()) errs.company = 'Company / Organization name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!message.trim()) {
      errs.message = 'Please provide brief details about your vision';
    } else if (message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await mockApi.submitProjectBrief({
        name,
        company,
        email,
        projectType,
        budget,
        timeline,
        message,
      });

      if (res.success) {
        setSubmittedInquiryId(res.inquiryId);
        showToast('Brief Received', `Inquiry ID: ${res.inquiryId}`);

        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E86F51', '#C8B6FF', '#181818', '#F1D8CF'],
        });
      }
    } catch {
      showToast('Submission Error', 'Something went wrong. Please try again.', 'info');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyId = () => {
    if (!submittedInquiryId) return;
    navigator.clipboard.writeText(submittedInquiryId);
    setCopied(true);
    showToast('Inquiry ID Copied', submittedInquiryId);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setName('');
    setCompany('');
    setEmail('');
    setMessage('');
    setSubmittedInquiryId(null);
    setErrors({});
  };

  if (submittedInquiryId) {
    return (
      <div className="glass-panel-strong p-8 sm:p-14 rounded-3xl border border-ink-border text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-accent-coral/10 border-2 border-accent-coral text-accent-coral flex items-center justify-center mx-auto">
          <Check className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            SUCCESSFULLY TRANSMITTED
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ink-primary">
            PROJECT BRIEF RECEIVED.
          </h3>
          <p className="text-sm text-ink-secondary max-w-md mx-auto">
            Thank you, {name}. Our directors have received your parameters and will respond to <span className="font-semibold text-ink-primary">{email}</span> within 24 hours.
          </p>
        </div>

        {/* Inquiry ID Card */}
        <div className="p-4 rounded-xl bg-paper border border-ink-border max-w-sm mx-auto flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] font-mono text-ink-muted uppercase block">REFERENCE ID</span>
            <span className="font-mono text-sm font-bold text-accent-coral">{submittedInquiryId}</span>
          </div>
          <button
            onClick={handleCopyId}
            className="flex items-center gap-1 text-xs font-mono uppercase px-3 py-1.5 rounded-lg bg-warm-white border border-ink-border hover:border-ink-primary text-ink-primary transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-accent-coral" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'COPIED' : 'COPY ID'}</span>
          </button>
        </div>

        <div className="pt-4 flex justify-center">
          <MagneticButton variant="outline" size="md" onClick={handleReset}>
            <RefreshCw className="w-3.5 h-3.5 mr-2" />
            START ANOTHER PROJECT BRIEF
          </MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel p-6 sm:p-12 rounded-3xl border border-ink-border space-y-8"
      noValidate
    >
      <div className="flex items-center justify-between pb-6 border-b border-ink-border">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJECT SCOPING MATRIX</span>
        </div>
        <span className="text-xs font-mono text-ink-muted">ESTIMATED TIME: 2 MIN</span>
      </div>

      {/* 1. Contact Particulars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-ink-primary block font-semibold">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Maya Lin"
            className={`w-full px-4 py-3 rounded-xl bg-warm-white border text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none transition-colors ${
              errors.name ? 'border-red-500' : 'border-ink-border focus:border-accent-coral'
            }`}
          />
          {errors.name && <p className="text-[11px] font-mono text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-mono uppercase tracking-wider text-ink-primary block font-semibold">
            Company / Entity *
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. North Mobility"
            className={`w-full px-4 py-3 rounded-xl bg-warm-white border text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none transition-colors ${
              errors.company ? 'border-red-500' : 'border-ink-border focus:border-accent-coral'
            }`}
          />
          {errors.company && <p className="text-[11px] font-mono text-red-500">{errors.company}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-ink-primary block font-semibold">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. maya@north.com"
            className={`w-full px-4 py-3 rounded-xl bg-warm-white border text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-ink-border focus:border-accent-coral'
            }`}
          />
          {errors.email && <p className="text-[11px] font-mono text-red-500">{errors.email}</p>}
        </div>
      </div>

      {/* 2. Project Type Selector */}
      <div className="space-y-3 pt-2">
        <label className="text-xs font-mono uppercase tracking-wider text-ink-primary block font-semibold">
          Primary Discipline
        </label>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              className={`text-xs font-mono uppercase px-4 py-2 rounded-full border transition-all ${
                projectType === type
                  ? 'bg-ink-primary text-warm-white border-ink-primary font-semibold shadow-sm'
                  : 'bg-warm-white border-ink-border text-ink-secondary hover:text-ink-primary'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Budget & Timeline Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-ink-primary block font-semibold">
            Anticipated Investment Budget
          </label>
          <div className="grid grid-cols-2 gap-2">
            {BUDGET_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setBudget(opt)}
                className={`text-xs font-mono uppercase py-2.5 px-3 rounded-xl border text-center transition-all ${
                  budget === opt
                    ? 'bg-accent-coral text-warm-white border-accent-coral font-bold shadow-sm'
                    : 'bg-warm-white border-ink-border text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-ink-primary block font-semibold">
            Target Deployment Timeline
          </label>
          <div className="grid grid-cols-2 gap-2">
            {TIMELINE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setTimeline(opt)}
                className={`text-xs font-mono uppercase py-2.5 px-3 rounded-xl border text-center transition-all ${
                  timeline === opt
                    ? 'bg-accent-lavender text-ink-primary border-accent-lavender font-bold shadow-sm'
                    : 'bg-warm-white border-ink-border text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Message / Project Objectives */}
      <div className="space-y-2 pt-2">
        <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-ink-primary block font-semibold">
          Project Narrative & Ambition *
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about the problem you are solving, your brand vision, key milestones, or specific deliverables required..."
          className={`w-full px-4 py-3 rounded-xl bg-warm-white border text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none transition-colors ${
            errors.message ? 'border-red-500' : 'border-ink-border focus:border-accent-coral'
          }`}
        />
        {errors.message && <p className="text-[11px] font-mono text-red-500">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-xs font-mono text-ink-muted">
          All submissions protected under mutual NDA confidentiality.
        </span>

        <MagneticButton
          variant="secondary"
          size="lg"
          type="submit"
          disabled={isSubmitting}
          className="justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              TRANSMITTING BRIEF...
            </>
          ) : (
            <>
              TRANSMIT PROJECT BRIEF
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </MagneticButton>
      </div>
    </form>
  );
};
