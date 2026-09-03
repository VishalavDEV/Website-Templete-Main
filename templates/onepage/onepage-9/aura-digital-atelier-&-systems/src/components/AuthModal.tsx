import React, { useState } from 'react';
import { UserSession } from '../types';
import { X, Lock, Mail, User, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (session: UserSession) => void;
  onShowToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onShowToast
}) => {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleDemoLogin = (profile: {
    name: string;
    email: string;
    company: string;
    role: string;
    avatar: string;
  }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const session: UserSession = {
        isAuthenticated: true,
        user: {
          id: 'usr_' + Math.random().toString(36).substr(2, 9),
          ...profile
        }
      };
      onLoginSuccess(session);
      onClose();
      onShowToast(
        `Welcome Back, ${profile.name}`,
        `Connected to ${profile.company} dedicated architecture cockpit.`,
        'success'
      );
    }, 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      onShowToast('Missing Fields', 'Please complete all required credentials.', 'info');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const session: UserSession = {
        isAuthenticated: true,
        user: {
          id: 'usr_' + Math.random().toString(36).substr(2, 9),
          name: name || email.split('@')[0],
          email: email,
          company: company || 'Enterprise Partner',
          role: 'Executive Sponsor',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        }
      };
      onLoginSuccess(session);
      onClose();
      onShowToast(
        tab === 'signin' ? 'Authenticated Successfully' : 'Account Provisioned',
        'Redirected to your active client dashboard.',
        'success'
      );
    }, 900);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Logo & Title */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 mb-3 shadow-inner">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              {tab === 'signin' ? 'Client Cockpit Sign In' : 'Provision Client Account'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Access active sprints, deliverables, milestones, and architecture specs.
            </p>
          </div>

          {/* Fast 1-Click Demo Profiles */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 mb-6">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>Instant 1-Click Demo Access</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() =>
                  handleDemoLogin({
                    name: 'Dr. Elena Vance',
                    email: 'elena@nexusquantum.ai',
                    company: 'Nexus Quantum AI',
                    role: 'Chief Technology Officer',
                    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
                  })
                }
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-colors"
              >
                <div className="text-xs font-semibold text-slate-200">Elena Vance</div>
                <div className="text-[10px] text-indigo-300">CTO @ Nexus AI</div>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleDemoLogin({
                    name: 'Henri de Montmirail',
                    email: 'henri@aethelgard.ch',
                    company: 'Maison Aethelgard',
                    role: 'Managing Director',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
                  })
                }
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-colors"
              >
                <div className="text-xs font-semibold text-slate-200">Henri de Montmirail</div>
                <div className="text-[10px] text-indigo-300">Director @ Aethelgard</div>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-800 mb-6">
            <button
              onClick={() => setTab('signin')}
              className={`flex-1 pb-2 text-xs font-semibold border-b-2 transition-all ${
                tab === 'signin'
                  ? 'border-indigo-500 text-indigo-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab('signup')}
              className={`flex-1 pb-2 text-xs font-semibold border-b-2 transition-all ${
                tab === 'signup'
                  ? 'border-indigo-500 text-indigo-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              New Client Registration
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'signup' && (
              <>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-400/60"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Autonomous Systems"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-400/60"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                Corporate Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  placeholder="elena@nexusquantum.ai"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-400/60"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-400/60"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:scale-[1.01] transition-all disabled:opacity-50"
            >
              <span>{isLoading ? 'Verifying Authorization...' : tab === 'signin' ? 'Sign In to Portal' : 'Register & Enter'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
