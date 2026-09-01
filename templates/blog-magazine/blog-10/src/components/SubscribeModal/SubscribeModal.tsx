import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Mail, Loader2, ArrowRight } from 'lucide-react';
import { useAppContext } from '../../store/AppContext';
import { mockApi } from '../../services/mockApi';

export const SubscribeModal: React.FC = () => {
  const { isSubscribeModalOpen, setIsSubscribeModalOpen, showToast } = useAppContext();
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState<'digital' | 'patron'>('digital');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isSubscribeModalOpen) return null;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsLoading(true);

    try {
      await mockApi.subscribeNewsletter(email);
      setIsLoading(false);
      setIsSuccess(true);
      showToast('Welcome to TERRA Explorer Membership.', 'success');
      setTimeout(() => {
        setIsSubscribeModalOpen(false);
        setIsSuccess(false);
      }, 2500);
    } catch {
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-[#121214] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#F27D26]/15 blur-[80px] pointer-events-none" />

        <button
          onClick={() => setIsSubscribeModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#18181b] hover:bg-zinc-800 text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">
              YOU ARE A TERRA EXPLORER.
            </h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
              Your digital credentials and full access pass have been activated. Check your inbox for the current issue dispatch.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORER MEMBERSHIP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-[0.95]">
              SUBSCRIBE TO TERRA
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
              Support independent scientific journalism, wildlife expeditions, and long-form photojournalism.
            </p>

            {/* Plan selection */}
            <div className="grid grid-cols-2 gap-3 text-left">
              <div
                onClick={() => setTier('digital')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  tier === 'digital'
                    ? 'bg-[#F27D26]/10 border-[#F27D26] text-white'
                    : 'bg-[#0a0a0a] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#F27D26] font-bold">
                  ANNUAL DIGITAL
                </div>
                <div className="text-xl font-black text-white uppercase mt-1">$48 / year</div>
                <div className="text-[11px] mt-1 text-zinc-400 font-light">Full digital issues + field notes</div>
              </div>

              <div
                onClick={() => setTier('patron')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  tier === 'patron'
                    ? 'bg-[#F27D26]/10 border-[#F27D26] text-white'
                    : 'bg-[#0a0a0a] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#F27D26] font-bold">
                  PATRON EXPLORER
                </div>
                <div className="text-xl font-black text-white uppercase mt-1">$96 / year</div>
                <div className="text-[11px] mt-1 text-zinc-400 font-light">Includes physical annual book</div>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4 pt-2">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#0a0a0a] border border-zinc-800 focus:border-[#F27D26] text-white text-xs font-mono placeholder:text-zinc-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-full bg-[#F27D26] hover:bg-[#ff9345] text-black font-black font-mono text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#F27D26]/20 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>ACTIVATING PASS...</span>
                  </>
                ) : (
                  <>
                    <span>JOIN TERRA · START READING</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
