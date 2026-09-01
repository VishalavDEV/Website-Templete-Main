import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { api } from '../../services/api';
import { useToast } from '../../context/ToastContext';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid work email address')
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  variant?: 'footer' | 'inline' | 'card';
  className?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ variant = 'footer', className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    try {
      await api.subscribeNewsletter({ email: data.email });
      setIsSubscribed(true);
      showToast('success', 'Subscribed Successfully', 'You are now enrolled in our technical roofing briefings.');
      reset();
    } catch (err: any) {
      showToast('error', 'Subscription Failed', err.message || 'Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className={`flex items-center gap-2 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-sm text-xs text-emerald-300 font-mono ${className}`}>
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Thank you for subscribing to Aurox Technical Insights!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`relative ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="email"
            {...register('email')}
            placeholder="Enter your corporate email..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 text-sm text-white placeholder:text-slate-500 rounded-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2.5 rounded-sm bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-50 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-xs cursor-pointer"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
      {errors.email && (
        <p className="text-xs text-red-400 mt-1.5 pl-1">{errors.email.message}</p>
      )}
    </form>
  );
};
