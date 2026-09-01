import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Engineer / Researcher');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setStatus('idle');
      setEmail('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#C85A32', '#1C1917', '#E8E2D5']
        });
      } catch (err) {
        console.error(err);
      }
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="subscribe-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#151311]/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-lg bg-[#F9F6F0] dark:bg-[#1E1B18] rounded-3xl border border-[#E8E2D5] dark:border-[#3A342E] shadow-2xl overflow-hidden p-6 sm:p-8 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-[#78716C] hover:text-[#1C1917] dark:text-[#A39C90] dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#C85A32]/15 text-[#C85A32] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl text-[#1C1917] dark:text-[#F7F4EE]">
              Welcome to the STORIVA Registry
            </h3>
            <p className="text-sm text-[#44403C] dark:text-[#D7D1C6] leading-relaxed max-w-sm mx-auto font-normal">
              A verification dispatch has been sent to <strong className="text-[#C85A32]">{email}</strong>. You will receive our next Thursday brief.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#C85A32] dark:bg-[#C85A32] text-white text-sm font-bold transition-colors cursor-pointer"
              >
                Return to Dispatches
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Membership</span>
            </div>

            <div>
              <h2 id="subscribe-modal-title" className="font-display font-black text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F7F4EE]">
                Join the Dispatches Desk
              </h2>
              <p className="text-xs sm:text-sm text-[#44403C] dark:text-[#D7D1C6] mt-1.5 leading-relaxed font-normal">
                Receive uncompromising analyses of foundational AI models, custom micro-architectures, and speculative computing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE] mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#78716C] dark:text-[#A39C90]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="alex@company.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#151311] text-sm text-[#1C1917] dark:text-[#F7F4EE] placeholder-[#78716C] dark:placeholder-[#A39C90] focus:outline-none focus:border-[#C85A32] transition-colors"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE] mb-1.5">
                  Primary Domain / Discipline
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#151311] text-sm text-[#1C1917] dark:text-[#F7F4EE] focus:outline-none focus:border-[#C85A32] cursor-pointer"
                >
                  <option value="Engineer / Researcher">Engineer / Machine Learning Researcher</option>
                  <option value="Hardware / Silicon Architect">Hardware & Silicon Architect</option>
                  <option value="Founder / Executive">Technology Founder & Executive</option>
                  <option value="Venture / Economist">Venture Capital & Frontier Economics</option>
                  <option value="Student / Independent">Independent Critic / Student</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#B34722] text-white text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <span>Registering Dispatch...</span>
                ) : (
                  <>
                    <span>Subscribe Free to Weekly Dispatches</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center space-x-2 pt-2 text-[11px] text-[#78716C] dark:text-[#A39C90]">
              <ShieldCheck className="w-4 h-4 text-[#C85A32] shrink-0" />
              <span>No marketing telemetries. Zero third-party data tracking.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
