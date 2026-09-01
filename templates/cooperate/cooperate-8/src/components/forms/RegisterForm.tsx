import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Lock, Mail, User, Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { api, AuthRegisterPayload } from '../../services/api';
import { useToast } from '../../context/ToastContext';
import { Button } from '../common/Button';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid work email address'),
  companyName: z.string().min(2, 'Company name is required'),
  accountType: z.enum(['property_manager', 'reit_executive', 'contractor', 'facility_director']),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  agreeTerms: z.boolean().refine((val) => val === true, 'You must agree to the Terms of Service')
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export const RegisterForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      companyName: '',
      accountType: 'facility_director',
      password: '',
      agreeTerms: false
    }
  });

  const onSubmit = async (values: RegisterFormValues) => {
    setIsSubmitting(true);
    try {
      await api.register(values as AuthRegisterPayload);
      setIsRegistered(true);
      showToast('success', 'Registration Complete', 'Verification email sent. You may now access the demo portal.');
    } catch (err: any) {
      showToast('error', 'Registration Error', err.message || 'Unable to register account.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isRegistered) {
    return (
      <div className="text-center space-y-5">
        <div className="w-16 h-16 rounded-sm bg-emerald-950 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white">
          Client Account Provisioned
        </h3>
        <p className="text-slate-400 text-sm">
          Your organization profile has been generated. Our enterprise integration desk will verify your facility asset authorization.
        </p>
        <div className="pt-2">
          <Button variant="primary" to="/login" withArrow className="w-full">
            Proceed to Portal Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold text-white">Create Enterprise Account</h2>
        <p className="text-sm text-slate-400 mt-1.5">
          Join 400+ REITs and asset managers managing roofs through Aurox.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Full Legal Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              {...register('fullName')}
              placeholder="Marcus Vance"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-sm text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Corporate Email *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              {...register('email')}
              placeholder="m.vance@pinnacle-reit.com"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-sm text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Company Name *
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                {...register('companyName')}
                placeholder="Pinnacle Logistics"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-sm text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            {errors.companyName && <p className="text-xs text-red-400 mt-1">{errors.companyName.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Role Type
            </label>
            <select
              {...register('accountType')}
              className="w-full p-2.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-sm text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
            >
              <option value="facility_director">Facility Director</option>
              <option value="reit_executive">REIT / Portfolio Exec</option>
              <option value="property_manager">Commercial Property Mgr</option>
              <option value="contractor">General Contractor</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Create Master Password *
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              {...register('password')}
              placeholder="Minimum 8 characters"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-sm text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
        </div>

        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-400">
            <input
              type="checkbox"
              {...register('agreeTerms')}
              className="mt-0.5 rounded-sm border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
            />
            <span>
              I agree to the <Link to="/terms" className="text-indigo-400 hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-indigo-400 hover:underline">Privacy Policy</Link>.
            </span>
          </label>
          {errors.agreeTerms && <p className="text-xs text-red-400 mt-1">{errors.agreeTerms.message}</p>}
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
            Register Organization Account
          </Button>
        </div>
      </form>

      <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400 font-mono">
        Already registered?{' '}
        <Link to="/login" className="text-indigo-400 hover:underline font-bold">
          Sign In
        </Link>
      </div>
    </div>
  );
};
