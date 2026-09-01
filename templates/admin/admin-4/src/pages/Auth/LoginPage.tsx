import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Button } from '../../components/Common/Button';
import { Shield, Lock, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useApp();
  const [email, setEmail] = useState('alexandra.vance@corevista.io');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToast('Welcome back, Alexandra Vance!', 'success');
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-app-main flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-app-surface border border-app rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-2xl mx-auto shadow-md">
            C
          </div>
          <h1 className="text-2xl font-bold text-app-primary">Sign in to CoreVista</h1>
          <p className="text-xs text-app-secondary">Enterprise Project Management Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-app-primary mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-app-muted absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-app-primary">Password</label>
              <Link to="/forgot-password" className="text-xs text-blue-400 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-app-muted absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary placeholder-app-muted focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" className="w-full py-2.5" isLoading={isLoading}>
            Sign In to Dashboard
          </Button>
        </form>

        <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-blue-400">
            <CheckCircle2 className="w-4 h-4" /> Demo Mode Enabled
          </div>
          <p>Click Sign In to access Super Admin workspace with pre-populated dataset.</p>
        </div>

        <div className="text-center text-xs text-app-secondary">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-400 font-semibold hover:underline">
            Register Workspace
          </Link>
        </div>
      </div>
    </div>
  );
};
