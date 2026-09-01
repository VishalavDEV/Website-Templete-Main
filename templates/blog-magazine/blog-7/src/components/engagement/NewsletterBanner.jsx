import React, { useState } from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { Sparkles, Mail, Check, ArrowRight } from 'lucide-react';

export function NewsletterBanner() {
  const { showToast } = useMagazine();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    showToast('Subscribed to The Observer Weekly Dispatch');
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="my-16 bg-[#141413] text-[#FAF9F5] p-8 sm:p-12 relative overflow-hidden border border-[#141413]">
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#222220] border border-[#333] text-[#D43825] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Observer Dispatch</span>
        </div>

        <h3 className="font-serif-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          Essential essays on design, culture, and intellect. Direct to your inbox.
        </h3>

        <p className="text-xs sm:text-sm text-[#A1A19A] max-w-lg mx-auto font-serif-reading text-[1.0625rem]">
          Join 85,000+ architects, essayists, researchers, and cultural leaders who read our weekend long-form briefing.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address..."
            required
            className="flex-1 px-4 py-3 bg-[#222220] border border-[#444] text-xs text-white placeholder-[#777] focus:outline-none focus:border-[#D43825]"
          />
          <button
            type="submit"
            disabled={submitted}
            className="px-6 py-3 bg-[#D43825] hover:bg-[#B32717] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" />
                <span>Subscribed</span>
              </>
            ) : (
              <>
                <span>Join</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <span className="text-[0.65rem] text-[#73736C] block">
          No third-party trackers &bull; Unsubscribe at any time with one click.
        </span>
      </div>
    </section>
  );
}
