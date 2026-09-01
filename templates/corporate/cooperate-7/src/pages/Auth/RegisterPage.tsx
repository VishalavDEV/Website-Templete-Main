import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, Building, User, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Please enter a valid work email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms & conditions'
  })
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterPage: React.FC = () => {
  const [authSuccess, setAuthSuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      password: '',
      acceptTerms: true
    }
  });

  const onSubmit = async (data: RegisterFormData) => {
    await new Promise((r) => setTimeout(r, 900));
    setAuthSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Create Enterprise Account</h2>
        <p className="text-xs text-slate-600 mt-1">
          Register your organization for portal access &amp; technical workspaces
        </p>
      </div>

      {authSuccess ? (
        <div className="text-center py-6 space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Account Created Successfully</h3>
          <p className="text-xs text-slate-600">Redirecting to login...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
            <div className="relative">
              <input
                type="text"
                {...register('fullName')}
                placeholder="Sarah Connor"
                className={`w-full bg-white border ${
                  errors.fullName ? 'border-red-500' : 'border-slate-300'
                } rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800`}
              />
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            {errors.fullName && (
              <p className="text-[11px] text-red-600 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Company / Organization</label>
            <div className="relative">
              <input
                type="text"
                {...register('companyName')}
                placeholder="Cyberdyne Systems"
                className={`w-full bg-white border ${
                  errors.companyName ? 'border-red-500' : 'border-slate-300'
                } rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800`}
              />
              <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            {errors.companyName && (
              <p className="text-[11px] text-red-600 mt-1">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Work Email</label>
            <div className="relative">
              <input
                type="email"
                {...register('email')}
                placeholder="sarah@cyberdyne.com"
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

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Password (min 8 chars)</label>
            <div className="relative">
              <input
                type="password"
                {...register('password')}
                placeholder="••••••••••••"
                className={`w-full bg-white border ${
                  errors.password ? 'border-red-500' : 'border-slate-300'
                } rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800`}
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            {errors.password && (
              <p className="text-[11px] text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              id="accept-terms"
              type="checkbox"
              {...register('acceptTerms')}
              className="w-4 h-4 mt-0.5 rounded bg-white border-slate-300 text-slate-900 focus:ring-slate-800"
            />
            <label htmlFor="accept-terms" className="ml-2 text-xs text-slate-600 leading-tight">
              I agree to the{' '}
              <Link to="/terms" className="text-slate-900 underline">Terms of Service</Link> and{' '}
              <Link to="/privacy-policy" className="text-slate-900 underline">Privacy Policy</Link>.
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="text-[11px] text-red-600">{errors.acceptTerms.message}</p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full mt-2"
            isLoading={isSubmitting}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Create Organization Account
          </Button>

          <div className="text-center pt-4 border-t border-slate-200 text-xs text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="text-slate-900 hover:underline font-semibold">
              Sign In
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};
