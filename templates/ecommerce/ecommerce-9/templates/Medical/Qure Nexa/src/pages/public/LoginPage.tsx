import React, { useState } from 'react';
import {
  HeartPulse,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Stethoscope,
  Shield,
  User,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { UserRole } from '../../types';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';

interface LoginPageProps {
  onNavigate: (view: string) => void;
  onLoginSuccess: (role: UserRole) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onLoginSuccess }) => {
  const { login, demoLogin } = useAuth();
  const { success, error: toastError } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.PATIENT);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toastError('Missing Information', 'Please provide both email and password.');
      return;
    }

    try {
      setIsLoading(true);
      const user = await login(email, password, role);
      success('Authentication Successful', `Welcome back, ${user.name}!`);
      onLoginSuccess(user.role);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid credentials';
      toastError('Authentication Failed', msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (demoRole: UserRole) => {
    try {
      const user = demoLogin(demoRole);
      success(`Logged in as ${demoRole.toUpperCase()}`, `Welcome, ${user.name}`);
      onLoginSuccess(user.role);
    } catch (err: unknown) {
      toastError('Demo Login Failed', 'Could not authenticate demo user');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <ScrollReveal direction="3d">
          {/* Brand & Title */}
          <div className="text-center space-y-2">
            <div
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 cursor-pointer group mb-2"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                Medi<span className="text-teal-600">Pulse</span>
              </span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Sign In to Medical Portal
            </h2>
            <p className="text-xs text-slate-500">
              Access your secure health dashboard, medical records, and appointments.
            </p>
          </div>
        </ScrollReveal>

        {/* One-Click Demo Logins Box */}
        <ScrollReveal direction="up" delay={100}>
          <div className="bg-teal-50/70 border border-teal-200/80 rounded-2xl p-4 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Instant Demo Accounts (One-Click)</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin(UserRole.PATIENT)}
                className="flex flex-col items-center justify-center p-2.5 bg-white hover:bg-teal-600 hover:text-white text-slate-800 rounded-xl border border-teal-200 text-xs font-bold transition-all shadow-2xs group cursor-pointer"
              >
                <User className="w-4 h-4 text-teal-600 group-hover:text-white mb-1" />
                <span>Patient</span>
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin(UserRole.DOCTOR)}
                className="flex flex-col items-center justify-center p-2.5 bg-white hover:bg-teal-600 hover:text-white text-slate-800 rounded-xl border border-teal-200 text-xs font-bold transition-all shadow-2xs group cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-teal-600 group-hover:text-white mb-1" />
                <span>Doctor</span>
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin(UserRole.ADMIN)}
                className="flex flex-col items-center justify-center p-2.5 bg-white hover:bg-teal-600 hover:text-white text-slate-800 rounded-xl border border-teal-200 text-xs font-bold transition-all shadow-2xs group cursor-pointer"
              >
                <Shield className="w-4 h-4 text-teal-600 group-hover:text-white mb-1" />
                <span>Admin</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Credentials Form */}
        <ScrollReveal direction="3d" delay={150}>
          <ThreeDCard intensity={8}>
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-6">
              {/* Role selector tabs */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Select Portal Role
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
                  {[
                    { id: UserRole.PATIENT, label: 'Patient' },
                    { id: UserRole.DOCTOR, label: 'Doctor' },
                    { id: UserRole.ADMIN, label: 'Admin' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setRole(tab.id)}
                      className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        role === tab.id
                          ? 'bg-white text-slate-900 shadow-2xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Email Address"
                  type="email"
                  required
                  placeholder="e.g. user@qurenexa.org"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
                />

                <Input
                  label="Password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                />

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded text-teal-600" defaultChecked />
                    <span>Remember this device</span>
                  </label>
                  <span className="text-teal-700 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Sign In to {role.toUpperCase()}
                </Button>
              </form>

              <div className="text-center pt-2 border-t border-slate-100 text-xs text-slate-500">
                <span>Don't have a patient account yet? </span>
                <button
                  type="button"
                  onClick={() => onNavigate('register')}
                  className="text-teal-700 font-bold hover:underline cursor-pointer"
                >
                  Register as New Patient
                </button>
              </div>
            </div>
          </ThreeDCard>
        </ScrollReveal>
      </div>
    </div>
  );
};
