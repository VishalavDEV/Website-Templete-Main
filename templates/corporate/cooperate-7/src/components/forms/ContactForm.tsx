import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle, Send, Sparkles } from 'lucide-react';
import { submitContactForm, ContactPayload } from '../../services/api';
import { Button } from '../common/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid corporate email address'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Company name is required'),
  service: z.string().min(1, 'Please select a primary service of interest'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Please provide brief details about your project (at least 10 characters)')
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'AI & Machine Learning',
      budget: '$50k - $150k',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmissionStatus('idle');
      const response = await submitContactForm(data as ContactPayload);
      setSubmissionStatus('success');
      setSuccessMessage(response.message);
      reset();
    } catch (err: unknown) {
      setSubmissionStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred while sending your request. Please try again.');
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden text-slate-900">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span>Let's Discuss Your Project</span>
          <Sparkles className="w-5 h-5 text-slate-700" />
        </h3>
        <p className="text-sm text-slate-600">
          Fill out the form below. A senior solution architect will reach out within 24 hours with an NDA and technical assessment.
        </p>
      </div>

      {submissionStatus === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-emerald-900">Message Received!</p>
            <p className="mt-1 text-emerald-800">{successMessage}</p>
          </div>
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-red-900">Submission Failed</p>
            <p className="mt-1 text-red-800">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Your Name *
            </label>
            <input
              type="text"
              {...register('name')}
              placeholder="e.g. Sarah Jenkins"
              className={`w-full bg-slate-50 border ${
                errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-zinc-900'
              } rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
              </p>
            )}
          </div>

          {/* Corporate Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Work Email *
            </label>
            <input
              type="email"
              {...register('email')}
              placeholder="sarah@enterprise.com"
              className={`w-full bg-slate-50 border ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-zinc-900'
              } rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Company */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Company / Organization *
            </label>
            <input
              type="text"
              {...register('company')}
              placeholder="Acme Corp"
              className={`w-full bg-slate-50 border ${
                errors.company ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-zinc-900'
              } rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition`}
            />
            {errors.company && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.company.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              {...register('phone')}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-slate-50 border border-slate-200 focus:border-zinc-900 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Service */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Service of Interest *
            </label>
            <select
              {...register('service')}
              className="w-full bg-slate-50 border border-slate-200 focus:border-zinc-900 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition"
            >
              <option value="AI & Machine Learning">AI & Machine Learning</option>
              <option value="Cloud Solutions">Cloud Solutions & Migration</option>
              <option value="Software Development">Custom Software Development</option>
              <option value="Data Analytics">Data Analytics & Lakehouses</option>
              <option value="Cybersecurity">Cybersecurity & Zero-Trust</option>
              <option value="UI/UX Design">UI/UX Product Design</option>
              <option value="IT Consulting">Strategic IT Consulting</option>
              <option value="Digital Transformation">Digital Transformation</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Expected Project Budget
            </label>
            <select
              {...register('budget')}
              className="w-full bg-slate-50 border border-slate-200 focus:border-zinc-900 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition"
            >
              <option value="< $50k">&lt; $50,000</option>
              <option value="$50k - $150k">$50,000 – $150,000</option>
              <option value="$150k - $500k">$150,000 – $500,000</option>
              <option value="$500k+">$500,000+ (Enterprise Multi-Year)</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Project Scope &amp; Key Goals *
          </label>
          <textarea
            rows={4}
            {...register('message')}
            placeholder="Tell us about your architecture, current roadblocks, timeline, and key technical goals..."
            className={`w-full bg-slate-50 border ${
              errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-zinc-900'
            } rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition resize-none`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
          icon={<Send className="w-4 h-4" />}
        >
          Send Project Inquiry
        </Button>

        <p className="text-center text-xs text-slate-500 mt-3">
          We protect your privacy. Strict NDA guaranteed prior to sharing proprietary data.
        </p>
      </form>
    </div>
  );
};
