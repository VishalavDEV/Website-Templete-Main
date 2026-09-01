import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { api } from '../../services/api';
import { useToast } from '../../context/ToastContext';
import { Button } from '../common/Button';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid work email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional()
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true
    }
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    setAuthError(null);
    try {
      const res = await api.login({
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe
      });

      showToast('success', 'Authentication Successful', `Welcome back, ${res.user.name}`);
      navigate('/');
    } catch (err: any) {
      setAuthError(err.message || 'Invalid credentials. Please verify your email and password.');
      showToast('error', 'Login Failed', err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoFill = () => {
    setValue('email', 'marcus.vance@pinnacle-reit.com');
    setValue('password', 'AuroxEnterprise2025!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold text-white">Client Portal Sign In</h2>
        <p className="text-sm text-slate-400 mt-1.5">
          Access your facility GIS assets, FLIR drone scans, and warranty documents.
        </p>
      </div>

      {authError && (
        <div className="p-3.5 rounded-sm bg-red-950/70 border border-red-500/50 flex items-start gap-2.5 text-xs text-red-200">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{authError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Corporate Email
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

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Password
            </label>
            <Link to="/forgot-password" className="text-xs font-mono text-indigo-400 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              {...register('password')}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-sm text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              {...register('rememberMe')}
              className="rounded-sm border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Remember this device</span>
          </label>

          <button
            type="button"
            onClick={handleDemoFill}
            className="text-xs text-slate-400 hover:text-indigo-400 underline font-mono"
          >
            ⚡ Auto-Fill Demo Credentials
          </button>
        </div>

        <div className="pt-3">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            withDiagonalArrow
            className="w-full"
          >
            Sign In to Portal
          </Button>
        </div>
      </form>

      <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400 font-mono">
        Need an enterprise client account?{' '}
        <Link to="/register" className="text-indigo-400 hover:underline font-bold">
          Register Organization
        </Link>
      </div>
    </div>
  );
};
