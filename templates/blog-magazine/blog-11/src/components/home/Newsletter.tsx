import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please provide a properly formatted email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="py-20 bg-[#0B1710] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300 font-mono-tech text-xs uppercase tracking-widest font-bold mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>WEEKLY EDITORIAL DIGEST</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-editorial font-extrabold text-white leading-tight">
          Tomorrow Starts Here.
        </h2>

        <p className="text-sm sm:text-base text-neutral-200 font-sans max-w-xl mx-auto leading-relaxed">
          Get the most compelling stories where agriculture, robotics, synthetic biology, and artificial intelligence intersect—delivered directly to your inbox every Thursday.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative pt-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Mail className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-neutral-900 border border-emerald-800 focus:border-emerald-400 text-white text-sm outline-none transition-colors placeholder-neutral-400 font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono-tech text-xs uppercase tracking-widest font-bold transition-all shadow-lg shrink-0 disabled:opacity-50"
            >
              {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
          </div>

          {/* Validation Feedback Messages */}
          {status === 'error' && (
            <div className="mt-3 flex items-center justify-center gap-1.5 text-rose-400 text-xs font-mono-tech font-bold">
              <AlertCircle className="w-4 h-4" /> {errorMessage}
            </div>
          )}

          {status === 'success' && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-950/90 border border-emerald-600 text-emerald-300 text-xs font-mono-tech flex items-center justify-center gap-2 animate-fade-in font-bold">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Thank you! You are now subscribed to AGROTECH AI Weekly.
            </div>
          )}
        </form>

        <p className="text-[10px] font-mono-tech text-neutral-300 uppercase tracking-widest pt-4 font-bold">
          NO SPAM. UNSUBSCRIBE ANYTIME. READ BY 45,000+ AGRONOMISTS WORLDWIDE.
        </p>
      </div>
    </section>
  );
};
