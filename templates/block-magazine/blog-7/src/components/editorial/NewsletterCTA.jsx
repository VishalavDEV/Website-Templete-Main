import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { useMagazine } from '../../context/MagazineContext';

export function NewsletterCTA({ className = '' }) {
  const { showToast } = useMagazine();
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState('default'); // 'default' | 'error' | 'disabled' | 'success'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    return String(val)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please provide an email address.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid institutional or personal email address.');
      return;
    }

    // Enter disabled/submitting state
    setStatus('disabled');

    setTimeout(() => {
      setStatus('success');
      showToast('Welcome to The Saturday Dispatch.');
      setTimeout(() => {
        setEmail('');
        setStatus('default');
      }, 5000);
    }, 800);
  };

  return (
    <section className={`my-16 bg-[#141413] text-[#FAF9F5] p-8 sm:p-14 relative overflow-hidden border border-[#141413] ${className}`}>
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        {/* Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#222220] border border-[#333] text-[#D43825] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Saturday Dispatch</span>
        </div>

        {/* Title */}
        <h3 className="font-serif-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          Essays on architecture, culture, and intellect. Direct to your morning reading ritual.
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#A1A19A] max-w-lg mx-auto font-serif-reading text-[1.0625rem] leading-relaxed">
          Join 85,000+ architects, essayists, and cultural leaders who read our weekend long-form briefing. Zero algorithmic noise.
        </p>

        {/* Form with Explicit Visual States */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-2 space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              disabled={status === 'disabled' || status === 'success'}
              onFocus={() => {
                setIsFocused(true);
                if (status === 'error') setStatus('default');
              }}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className={`flex-1 px-4 py-3 bg-[#222220] text-xs text-white placeholder-[#777] focus:outline-none transition-all ${
                status === 'error'
                  ? 'border-2 border-[#D43825] bg-[#2E1815]'
                  : isFocused
                  ? 'border-2 border-white ring-1 ring-white/30'
                  : 'border border-[#444]'
              }`}
            />

            <button
              type="submit"
              disabled={status === 'disabled' || status === 'success'}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer ${
                status === 'success'
                  ? 'bg-green-600 text-white cursor-default'
                  : status === 'disabled'
                  ? 'bg-[#444] text-[#888] cursor-not-allowed'
                  : 'bg-[#D43825] hover:bg-[#B32717] text-white'
              }`}
            >
              {status === 'disabled' ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Submitting</span>
                </>
              ) : status === 'success' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {/* Error State Banner */}
          {status === 'error' && (
            <div className="flex items-center gap-1.5 text-left text-xs text-[#F28B7D] pt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success State Banner */}
          {status === 'success' && (
            <div className="flex items-center justify-center gap-1.5 text-xs text-green-400 pt-1 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>You are now subscribed to the weekly monographic dispatch.</span>
            </div>
          )}
        </form>

        <div className="flex items-center justify-center gap-2 text-[0.65rem] text-[#73736C]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A46]" />
          <span>Zero third-party trackers &bull; Unsubscribe at any time with one click.</span>
        </div>
      </div>
    </section>
  );
}
