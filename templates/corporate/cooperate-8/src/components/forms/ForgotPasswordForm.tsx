import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
import { api } from '../../services/api';
import { useToast } from '../../context/ToastContext';
import { Button } from '../common/Button';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid work email address')
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setIsSubmitting(true);
    try {
      await api.forgotPassword(values.email);
      setIsSent(true);
      showToast('success', 'Reset Link Dispatched', `Instructions sent to ${values.email}`);
    } catch (err: any) {
      showToast('error', 'Request Failed', err.message || 'Unable to process request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <div className="text-center space-y-5">
        <div className="w-16 h-16 rounded-sm bg-emerald-950 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white">Check Your Inbox</h3>
        <p className="text-slate-400 text-sm">
          If an account exists with that email, we have sent a secure password reset link with a 30-minute validity token.
        </p>
        <div className="pt-2">
          <Button variant="outline" to="/login" className="w-full">
            Return to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold text-white">Reset Account Password</h2>
        <p className="text-sm text-slate-400 mt-1.5">
          Enter your registered work email to receive password reset instructions.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Registered Email
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              {...register('email')}
              placeholder="name@company.com"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-sm text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            withArrow
            className="w-full"
          >
            Send Reset Link
          </Button>
        </div>
      </form>

      <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400 font-mono">
        Remembered password?{' '}
        <Link to="/login" className="text-indigo-400 hover:underline font-bold">
          Back to Login
        </Link>
      </div>
    </div>
  );
};
