import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, CheckCircle2, Mail, ShieldAlert, Sparkles, Flame } from 'lucide-react';

export default function NotifyForm({ onNotifySuccess, playClick, playSuccess }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [vipTierNumber, setVipTierNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick?.();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    setTimeout(() => {
      setStatus('success');
      const randomTicket = Math.floor(1000 + Math.random() * 9000);
      setVipTierNumber(randomTicket);
      playSuccess?.();

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF003C', '#EF4444', '#F97316', '#FFFFFF']
      });

      onNotifySuccess?.(email, randomTicket);
    }, 800);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      {status === 'success' ? (
        <div className="glass-panel-glow rounded-2xl p-6 text-center animate-fade-in border border-cyber-red/50 shadow-neon-red">
          <div className="w-12 h-12 rounded-full bg-cyber-red/20 border border-cyber-red mx-auto flex items-center justify-center mb-3 shadow-neon-red">
            <CheckCircle2 className="w-6 h-6 text-cyber-crimson" />
          </div>
          <h3 className="font-display font-bold text-xl text-white">VIP Priority Access Reserved</h3>
          <p className="text-slate-300 text-sm mt-1">
            You're locked in for the TENFIVE GAMING drop with <span className="text-cyber-crimson font-mono font-medium">{email}</span>.
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-cyber-red/30 text-xs font-mono text-slate-300">
            <Flame className="w-4 h-4 text-cyber-red" />
            <span>VIP Priority Access Key:</span>
            <span className="text-white font-bold tracking-wider">#TF-GAMING-{vipTierNumber}</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl glass-panel-glow border border-cyber-red/30 focus-within:border-cyber-red transition-all duration-300 shadow-2xl">
            
            <div className="relative w-full flex items-center">
              <Mail className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter email for TENFIVE priority drop & pricing..."
                className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none font-sans"
                disabled={status === 'loading'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto shrink-0 flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-red via-cyber-crimson to-cyber-amber hover:opacity-95 text-white font-display font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-neon-red active:scale-95 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Notify Me</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {status === 'error' && (
            <div className="mt-2 flex items-center space-x-2 text-rose-400 text-xs font-mono">
              <ShieldAlert className="w-4 h-4" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
            <span>🔒 Zero spam • Instant unsubscribe</span>
            <span className="text-cyber-crimson font-medium">Limited First 5,000 Gaming Units</span>
          </div>
        </form>
      )}
    </div>
  );
}
