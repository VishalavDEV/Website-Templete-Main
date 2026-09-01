import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Sparkles, Lock, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { FormInput } from '../../components/forms/FormInput';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState('alexander.pierce@enterprise.com');
  const [password, setPassword] = useState('••••••••••••');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, 'Super Admin');
    showToast('Welcome Back', 'Successfully authenticated into Enterprise Admin.');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white mx-auto shadow-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Enterprise Sign In</h1>
          <p className="text-xs text-slate-500">Access your administrative workspace</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <FormInput label="Work Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <input type="checkbox" defaultChecked className="accent-brand-600 rounded" />
              Remember device
            </label>
            <Link to="/forgot-password" className="font-semibold text-brand-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
          >
            Sign In to Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export const ForgotPasswordPage: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Reset Instructions Sent', `Verification link dispatched to ${email}`);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Back to Login
        </Link>
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">Reset Password</h1>
          <p className="text-xs text-slate-500 mt-1">Enter registered email for reset instructions.</p>
        </div>
        <form onSubmit={handleReset} className="space-y-4">
          <FormInput label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit" className="w-full py-3 bg-brand-600 text-white font-bold text-xs rounded-xl">
            Send Reset Instructions
          </button>
        </form>
      </div>
    </div>
  );
};
