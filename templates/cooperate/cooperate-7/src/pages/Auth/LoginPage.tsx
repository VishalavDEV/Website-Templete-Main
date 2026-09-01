import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid work email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional()
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setAuthError('');
      // Simulate enterprise SSO / auth endpoint
      await new Promise((r) => setTimeout(r, 900));
      setAuthSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (err: unknown) {
      setAuthError('Invalid credentials. Please check your enterprise credentials.');
    }
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Client Portal Login</h2>
        <p className="text-xs text-slate-600 mt-1">
          Access your enterprise project tracking, SLA dashboards, and telemetry
        </p>
      </div>

      {authSuccess ? (
        <div className="text-center py-6 space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Authenticated Successfully</h3>
          <p className="text-xs text-slate-600">Redirecting to your workspace...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {authError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Corporate Email</label>
            <div className="relative">
              <input
                type="email"
                {...register('email')}
                placeholder="developer@enterprise.com"
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
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-700">Password</label>
              <Link to="/forgot-password" className="text-xs text-slate-900 hover:text-zinc-700 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type="password"
                {...register('password')}
                placeholder="••••••••"
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

          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              {...register('rememberMe')}
              className="w-4 h-4 rounded bg-white border-slate-300 text-slate-900 focus:ring-slate-800"
            />
            <label htmlFor="remember-me" className="ml-2 text-xs text-slate-600">
              Remember my session (30 days)
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full mt-2"
            isLoading={isSubmitting}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Sign In to Portal
          </Button>

          <div className="text-center pt-4 border-t border-slate-200 text-xs text-slate-600">
            Don't have an enterprise account?{' '}
            <Link to="/register" className="text-slate-900 hover:underline font-semibold">
              Register Organization
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};
