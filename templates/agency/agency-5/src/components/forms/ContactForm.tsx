import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

const projectTypes = [
  'Web Application',
  'Brand Identity',
  '3D WebGL Experience',
  'Product Design & UX',
  'AI Interface',
  'Retainer Partnership'
];

const budgetRanges = [
  '$25k - $50k',
  '$50k - $100k',
  '$100k - $250k',
  '$250k+'
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Web Application',
    budget: '$50k - $100k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid work email is required.';
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide at least 15 characters describing your project goals.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-[var(--card-bg)] border-2 border-[var(--accent-color)] text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[var(--accent-color)]/20 text-[var(--accent-color)] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--text-color)] font-display">
          INQUIRY RECEIVED.
        </h3>
        <p className="text-base text-[var(--secondary-color)] max-w-md mx-auto font-light leading-relaxed">
          Thank you, <span className="text-[var(--text-color)] font-semibold">{formData.name}</span>. Our partners have received your project details for <span className="text-[var(--text-color)] font-semibold">{formData.company || 'your project'}</span> and will respond within 24 hours.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              email: '',
              company: '',
              projectType: 'Web Application',
              budget: '$50k - $100k',
              message: '',
            });
          }}
          className="px-6 py-3 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-xs font-bold uppercase tracking-wider text-[var(--text-color)] hover:border-[var(--accent-color)] cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6 md:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
      <div className="space-y-2">
        <h3 className="text-2xl font-extrabold uppercase text-[var(--text-color)] font-display">
          START A PROJECT SPRINT
        </h3>
        <p className="text-xs text-[var(--secondary-color)] font-mono">
          // Fill out the scope parameters below for a fast 24-hour proposal response.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-color)] block">
            Your Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Alex Vance"
            className={`w-full bg-[var(--input-bg)] border rounded-2xl px-5 py-3.5 text-sm text-[var(--text-color)] focus:outline-none transition-colors ${
              errors.name ? 'border-rose-500' : 'border-[var(--border-color)] focus:border-[var(--accent-color)]'
            }`}
          />
          {errors.name && <p className="text-xs text-rose-500 font-mono">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-color)] block">
            Work Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="alex@company.com"
            className={`w-full bg-[var(--input-bg)] border rounded-2xl px-5 py-3.5 text-sm text-[var(--text-color)] focus:outline-none transition-colors ${
              errors.email ? 'border-rose-500' : 'border-[var(--border-color)] focus:border-[var(--accent-color)]'
            }`}
          />
          {errors.email && <p className="text-xs text-rose-500 font-mono">{errors.email}</p>}
        </div>
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-color)] block">
          Company or Organization
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={e => setFormData({ ...formData, company: e.target.value })}
          placeholder="e.g. Nexus Energy Corp"
          className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] focus:border-[var(--accent-color)] rounded-2xl px-5 py-3.5 text-sm text-[var(--text-color)] focus:outline-none transition-colors"
        />
      </div>

      {/* Project Type Pills */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-color)] block">
          Project Type
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map(type => (
            <button
              type="button"
              key={type}
              onClick={() => setFormData({ ...formData, projectType: type })}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                formData.projectType === type
                  ? 'bg-[var(--accent-color)] text-[#0A0A0A] font-bold'
                  : 'bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--text-color)]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Range Pills */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-color)] block">
          Estimated Budget Range
        </label>
        <div className="flex flex-wrap gap-2">
          {budgetRanges.map(range => (
            <button
              type="button"
              key={range}
              onClick={() => setFormData({ ...formData, budget: range })}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                formData.budget === range
                  ? 'bg-[var(--accent-color)] text-[#0A0A0A] font-bold'
                  : 'bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--text-color)]'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Message Area */}
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-color)] block">
          Project Brief & Goals *
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your product goals, timeline, and key performance metrics..."
          className={`w-full bg-[var(--input-bg)] border rounded-2xl p-5 text-sm text-[var(--text-color)] focus:outline-none transition-colors ${
            errors.message ? 'border-rose-500' : 'border-[var(--border-color)] focus:border-[var(--accent-color)]'
          }`}
        />
        {errors.message && <p className="text-xs text-rose-500 font-mono">{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={status === 'loading'}>
        Submit Inquiry Proposal →
      </Button>
    </form>
  );
};
