import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { mockApi } from '../../services/mockApi';
import { useAppContext } from '../../store/AppContext';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(() => {
    try {
      return localStorage.getItem('terra_subscribed_flag') === 'true';
    } catch {
      return false;
    }
  });
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useAppContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      const res = await mockApi.subscribeNewsletter(email);
      setIsLoading(false);
      if (res.success) {
        setIsSubscribed(true);
        localStorage.setItem('terra_subscribed_flag', 'true');
        showToast("You're on the list. Welcome to TERRA.", 'success');
      }
    } catch {
      setIsLoading(false);
      setIsSubscribed(true);
      showToast("You're on the list. Welcome to TERRA.", 'success');
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl bg-[#121214] border border-zinc-800 p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl">
      {/* Subtle orange atmospheric back-glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#F27D26]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">
          <Sparkles className="w-3 h-3" />
          <span>WEEKLY EDITORIAL DISPATCH</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[0.95]">
          THE WORLD, IN YOUR INBOX.
        </h2>

        {/* Supporting copy */}
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          One thoughtful selection of stories, discoveries, and photography every week. No algorithms, no noise—just pure unmanipulated wonder.
        </p>

        {/* Subscription Form */}
        {isSubscribed ? (
          <div className="p-6 rounded-2xl bg-[#18181b] border border-[#F27D26]/40 text-center animate-in fade-in zoom-in-95 duration-500 space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F27D26]/20 text-[#F27D26] mb-1">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="tracking-[0.2em] text-lg font-black text-white uppercase">
              YOU'RE ON THE LIST.
            </h3>
            <p className="text-xs text-zinc-400 font-light">
              Check your inbox each Sunday morning for our latest expeditions and field photography portfolios.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#0a0a0a] border border-zinc-800 focus:border-[#F27D26] focus:outline-none text-white text-xs font-mono placeholder:text-zinc-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="px-7 py-3.5 rounded-full bg-[#F27D26] hover:bg-[#ff9345] text-black font-black text-xs font-mono tracking-widest uppercase transition-all transform active:scale-95 flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 shadow-xl shadow-[#F27D26]/20 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SAVING...</span>
                  </>
                ) : (
                  <>
                    <span>SUBSCRIBE</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>

            {error && (
              <p className="text-xs font-mono text-rose-500">{error}</p>
            )}

            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              Unsubscribe anytime with a single click. We respect your attention.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
