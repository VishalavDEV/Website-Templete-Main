import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#C85A32', '#1C1917', '#E8E2D5']
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <section className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#1C1917] text-[#F7F4EE] p-8 sm:p-12 lg:p-16 border border-[#3A342E] shadow-2xl">
        {/* Background Ambient Glow with Terracotta */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#C85A32]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#C85A32]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C85A32]/25 text-[#E27453] border border-[#C85A32]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Weekly Analytical Dispatch</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Signal Over Noise in Frontier Tech
          </h2>

          <p className="text-sm sm:text-base text-[#D7D1C6] leading-relaxed font-normal">
            Join 125,000+ researchers, engineers, and founders. We send a single comprehensive deep-dive every Thursday morning. Zero sponsored clutter.
          </p>

          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-2 animate-in fade-in">
              <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                You're on the Dispatch Registry
              </h4>
              <p className="text-xs text-[#D7D1C6]">
                Look out for our signature dispatch this Thursday at 8:00 AM EST.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#A39C90]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your work or personal email..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-[#A39C90] focus:outline-none focus:border-[#C85A32] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#B34722] text-white text-sm font-bold tracking-wide transition-all shadow-md disabled:opacity-50 cursor-pointer shrink-0"
                >
                  {status === 'loading' ? 'Joining...' : 'Subscribe'}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-300 text-left">{errorMessage}</p>
              )}

              <p className="text-[11px] text-[#A39C90]">
                By subscribing you agree to our strict no-spam editorial policy. Unsubscribe anytime in one click.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
