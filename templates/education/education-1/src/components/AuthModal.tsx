import React, { useState } from 'react';
import {
  X,
  Lock,
  Mail,
  User,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Copy,
  Check,
  KeyRound,
  IdCard,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_STUDENTS } from '../data/edupathData';
import { StudentProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'register';
  onClose: () => void;
  onSuccess: (student: StudentProfile | string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState(''); // can be Student ID or Email
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'Learner' | 'Mentor' | 'Enterprise Team'>('Learner');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successStudent, setSuccessStudent] = useState<StudentProfile | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);

  if (!isOpen) return null;

  const currentSample = SAMPLE_STUDENTS[selectedSampleIndex] || SAMPLE_STUDENTS[0];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  const handleAutoFillSample = (sample: typeof currentSample) => {
    setIdentifier(sample.studentId);
    setPassword(sample.passwordHint);
  };

  const handleInstantSampleLogin = (sample: typeof currentSample) => {
    setIdentifier(sample.studentId);
    setPassword(sample.passwordHint);
    triggerSuccess(sample);
  };

  const triggerSuccess = (matchedStudent?: StudentProfile) => {
    const student =
      matchedStudent ||
      SAMPLE_STUDENTS.find(
        (s) =>
          s.studentId.toLowerCase() === identifier.trim().toLowerCase() ||
          s.email.toLowerCase() === identifier.trim().toLowerCase()
      ) ||
      {
        studentId: `SKL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        name: name || identifier.split('@')[0] || 'Skillora Student',
        email: identifier.includes('@') ? identifier : `${identifier.toLowerCase()}@skillora.edu`,
        passwordHint: '••••••••',
        program: 'General Technology Studies',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        enrolledCoursesCount: 3,
        completedHours: 12,
        currentStreakDays: 5,
        badge: 'Active Scholar',
      };

    setSuccessStudent(student);
    setIsSuccess(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}

    setTimeout(() => {
      onSuccess(student);
      setIsSuccess(false);
      onClose();
    }, 1400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
        {/* Header */}
        <div className="bg-slate-50 p-6 pb-5 flex items-center justify-between border-b border-slate-200 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/10 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block font-mono">
                SKILLORA STUDENT PORTAL
              </span>
              <h3 className="text-xl font-extrabold font-display text-slate-900">
                {mode === 'login' ? 'Student Sign In' : 'Create Student Account'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-slate-300/60"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-100/60">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-3 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              mode === 'login'
                ? 'bg-white text-indigo-700 border-b-2 border-indigo-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <IdCard className="w-3.5 h-3.5" />
            <span>Student Sign In</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`flex-1 py-3 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              mode === 'register'
                ? 'bg-white text-indigo-700 border-b-2 border-indigo-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Started</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 text-left space-y-5">
          {isSuccess && successStudent ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-md">
                <img
                  src={successStudent.avatar}
                  alt={successStudent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  AUTHENTICATED
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-display mt-1">
                  Welcome, {successStudent.name}!
                </h4>
                <p className="text-xs font-mono text-indigo-600 font-bold">
                  Student ID: {successStudent.studentId}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Program: {successStudent.program}
                </p>
              </div>
              <p className="text-[11px] text-emerald-700 pt-1">
                Loading your personalized learning dashboard...
              </p>
            </div>
          ) : (
            <>
              {/* Sample Student ID Credentials Callout */}
              {mode === 'login' && (
                <div className="rounded-2xl bg-indigo-50/80 border border-indigo-200/90 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-indigo-900 font-bold text-xs font-mono">
                      <KeyRound className="w-4 h-4 text-indigo-600" />
                      <span>SAMPLE STUDENT CREDENTIALS</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono uppercase tracking-wider">
                      Demo Account
                    </span>
                  </div>

                  {/* Sample Student Selector Pills */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1">
                    {SAMPLE_STUDENTS.map((sample, idx) => (
                      <button
                        key={sample.studentId}
                        type="button"
                        onClick={() => {
                          setSelectedSampleIndex(idx);
                          handleAutoFillSample(sample);
                        }}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                          selectedSampleIndex === idx
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : 'bg-white text-slate-700 border-indigo-200 hover:bg-indigo-100/60'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                        <span>{sample.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Sample Details Card */}
                  <div className="bg-white rounded-xl p-3 border border-indigo-100 shadow-xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={currentSample.avatar}
                        alt={currentSample.name}
                        className="w-10 h-10 rounded-xl object-cover border border-indigo-100 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-900 truncate">
                            {currentSample.name}
                          </p>
                          <span className="text-[10px] px-1.5 py-0.2 bg-indigo-50 text-indigo-700 font-mono font-bold rounded">
                            {currentSample.badge}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-slate-600 mt-0.5">
                          <span className="font-mono font-bold text-indigo-600">
                            ID: {currentSample.studentId}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="font-mono text-slate-500">
                            Pass: {currentSample.passwordHint}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleAutoFillSample(currentSample)}
                        className="px-2.5 py-1 text-[10px] font-bold text-indigo-700 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 cursor-pointer transition-colors"
                        title="Auto-fill form with this sample ID"
                      >
                        Auto-Fill
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInstantSampleLogin(currentSample)}
                        className="px-2.5 py-1 text-[10px] font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-xs cursor-pointer transition-colors flex items-center justify-center gap-1"
                        title="Sign in immediately as this sample student"
                      >
                        <Zap className="w-3 h-3 fill-amber-300 text-amber-300" />
                        <span>1-Click</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'register' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Maya Lin"
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-indigo-500 focus:outline-hidden placeholder:text-slate-400"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 font-mono">
                      {mode === 'login' ? 'Student ID or Email Address *' : 'Email Address *'}
                    </label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={() => handleAutoFillSample(currentSample)}
                        className="text-[10px] font-mono text-indigo-600 hover:text-indigo-700 font-bold cursor-pointer"
                      >
                        Use ID: {currentSample.studentId}
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder={
                        mode === 'login'
                          ? 'e.g. SKL-2026-8891 or maya.lin@skillora.edu'
                          : 'maya@example.com'
                      }
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-indigo-500 focus:outline-hidden placeholder:text-slate-400 font-mono"
                    />
                    <IdCard className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 font-mono">
                      Password *
                    </label>
                    {mode === 'login' && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        Demo: student123
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-indigo-500 focus:outline-hidden placeholder:text-slate-400 font-mono"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                {mode === 'register' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                      Track Goal
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-indigo-500 focus:outline-hidden"
                    >
                      <option value="Learner">Individual Learner / Career Switcher</option>
                      <option value="Mentor">Industry Expert / Mentor</option>
                      <option value="Enterprise Team">Team / Enterprise Upskilling</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{mode === 'login' ? 'Sign In as Student' : 'Create Free Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-1 text-center">
                  <button
                    type="button"
                    onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                    className="text-xs text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    {mode === 'login'
                      ? "Don't have a student account? Register here"
                      : 'Already registered? Sign in with Student ID'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
