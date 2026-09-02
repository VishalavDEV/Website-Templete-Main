import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';

const forgotSchema = z.object({
  email: z.string().email('Please enter a valid work email address')
});

type ForgotFormData = z.infer<typeof forgotSchema>;

export const ForgotPasswordPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema)
  });

  const onSubmit = async (data: ForgotFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitted(true);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Reset Password</h2>
        <p className="text-xs text-slate-600 mt-1">
          Enter your registered work email and we'll send a password recovery token
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mx-auto border border-slate-200">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Recovery Link Dispatched</h3>
          <p className="text-xs text-slate-600">
            If an account exists for that email, password reset instructions have been sent. Please check your inbox and spam folder.
          </p>
          <div className="pt-2">
            <Button to="/login" variant="secondary" size="sm">
              Return to Login
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Work Email</label>
            <div className="relative">
              <input
                type="email"
                {...register('email')}
                placeholder="name@enterprise.com"
                className={`w-full bg-white border ${
                  errors.email ? 'border-red-500' : 'border-slate-300'
                } rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800`}
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full mt-2"
            isLoading={isSubmitting}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Send Recovery Link
          </Button>

          <div className="text-center pt-4 border-t border-slate-200">
            <Link to="/login" className="text-xs text-slate-600 hover:text-slate-900 inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};
