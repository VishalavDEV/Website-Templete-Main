import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { subscribeNewsletter } from '../../services/api';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address')
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  variant?: 'inline' | 'card';
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ variant = 'inline' }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      setApiError('');
      await subscribeNewsletter(data.email);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: unknown) {
      setApiError(err instanceof Error ? err.message : 'Subscription failed. Please try again.');
    }
  };

  if (variant === 'card') {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden text-slate-900">
        <h4 className="text-xl font-bold text-slate-900 mb-2">Subscribe to Tech Insights</h4>
        <p className="text-xs sm:text-sm text-slate-600 mb-5">
          Get weekly executive engineering breakdowns, AI architecture whitepapers, and cloud benchmarks.
        </p>

        {isSuccess ? (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Subscribed successfully! Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                {...register('email')}
                placeholder="Enter your corporate email"
                className={`flex-1 bg-white border ${
                  errors.email ? 'border-red-500' : 'border-slate-200'
                } rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-zinc-900`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email.message}
              </p>
            )}
            {apiError && (
              <p className="text-[11px] text-red-600">{apiError}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      {isSuccess ? (
        <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Subscribed! Check your inbox soon.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1.5">
          <div className="relative flex items-center">
            <input
              type="email"
              {...register('email')}
              placeholder="Enter your email address..."
              className={`w-full bg-white border ${
                errors.email ? 'border-red-500' : 'border-slate-200'
              } rounded-xl pl-4 pr-12 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-zinc-900 transition shadow-2xs`}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-1.5 p-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition disabled:opacity-50 cursor-pointer"
              title="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {errors.email && (
            <p className="text-[11px] text-red-600 pl-1">{errors.email.message}</p>
          )}
        </form>
      )}
    </div>
  );
};
