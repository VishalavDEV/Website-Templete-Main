import React, { useState } from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { X, Sparkles, Check, Mail, BookOpen, ShieldCheck } from 'lucide-react';

export function NewsletterModal() {
  const { isNewsletterOpen, setIsNewsletterOpen, showToast } = useMagazine();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isNewsletterOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    showToast('Welcome to The Observer Dispatch.');
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
      setIsNewsletterOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsNewsletterOpen(false)}
      />

      {/* Modal Card */}
      <div className="relative bg-[#FAF9F5] border-2 border-[#141413] shadow-2xl max-w-lg w-full p-8 z-10 animate-scale-in text-center">
        <button
          onClick={() => setIsNewsletterOpen(false)}
          className="absolute top-4 right-4 p-1 text-[#73736C] hover:text-[#141413] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4F1EA] border border-[#D1CDC4] text-[#D43825] text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Saturday Dispatch</span>
        </div>

        <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#141413] leading-tight mb-3">
          Elevate your weekend reading ritual.
        </h3>

        <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed mb-6 font-serif-reading text-[1.0625rem]">
          Delivered every Saturday at 7:00 AM UTC. An unhurried digest of monographic essays, architectural criticism, and investigative journalism.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your personal or institutional email..."
            required
            className="w-full px-4 py-3 bg-white border border-[#D1CDC4] text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
          />

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-3 bg-[#141413] text-[#FAF9F5] hover:bg-[#D43825] transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span>Subscription Confirmed</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Join The Dispatch</span>
              </>
            )}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-[0.65rem] text-[#73736C] mt-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A46]" />
          <span>Zero spam &bull; Strict privacy &bull; One-click unsubscribe</span>
        </div>
      </div>
    </div>
  );
}
