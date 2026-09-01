import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Button } from '../../components/Common/Button';
import { Mail, Lock, User, Building, ArrowRight } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToast('Registration successful! Verification link sent to email.', 'success');
      navigate('/verify-email');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-app-main flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-app-surface border border-app rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-2xl mx-auto shadow-md">
            C
          </div>
          <h1 className="text-2xl font-bold text-app-primary">Create Workspace</h1>
          <p className="text-xs text-app-secondary">Deploy CoreVista Enterprise for your team</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-app-primary mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-app-muted absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-app-primary mb-1">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-app-muted absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="sarah@company.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-app-primary mb-1">Organization Name</label>
            <div className="relative">
              <Building className="w-4 h-4 text-app-muted absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Apex Cloud Systems"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-app-primary mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-app-muted absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" className="w-full py-2.5" isLoading={isLoading}>
            Create Workspace & Proceed
          </Button>
        </form>

        <div className="text-center text-xs text-app-secondary">
          Already registered?{' '}
          <Link to="/login" className="text-blue-400 font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useApp();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToast('Password reset link sent to your email.', 'info');
      navigate('/reset-password');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-app-main flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-app-surface border border-app rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-app-primary">Forgot Password?</h1>
          <p className="text-xs text-app-secondary">Enter your email to receive a password reset link</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-app-primary mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="alexandra@corevista.io"
              className="w-full px-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full py-2.5" isLoading={isLoading}>
            Send Reset Link
          </Button>
        </form>

        <div className="text-center text-xs text-app-secondary">
          Back to{' '}
          <Link to="/login" className="text-blue-400 font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useApp();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast('Password reset successfully! Please sign in.', 'success');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-app-main flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-app-surface border border-app rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-app-primary">Set New Password</h1>
          <p className="text-xs text-app-secondary">Choose a secure password for your workspace account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-app-primary mb-1">New Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-app-primary mb-1">Confirm New Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none focus:border-blue-500"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full py-2.5">
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export const VerifyEmailPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-app-main flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-app-surface border border-app rounded-2xl shadow-2xl p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-app-primary">Verify Your Email</h1>
          <p className="text-xs text-app-secondary leading-relaxed">
            We sent a verification link to your registered email address. Click the link to complete workspace activation.
          </p>
        </div>
        <Button variant="primary" className="w-full py-2.5" onClick={() => navigate('/dashboard')}>
          Continue to Dashboard
        </Button>
      </div>
    </div>
  );
};
