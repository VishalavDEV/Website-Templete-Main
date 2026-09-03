import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Quote, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <Quote className="w-3.5 h-3.5" />
            <span>Executive Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Trusted by Enterprise Leaders.
          </h2>
          <p className="text-base text-slate-400">
            Hear directly from Chief Information Officers, Managing Directors, and Chief Risk Officers deploying NEXORA in production.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map(t => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#0C0C12] border border-white/5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Top Rating & Industry */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                    {t.industry}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Metric Badge */}
                {t.metric && (
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">Audited Impact:</span>
                    <span className="font-bold text-indigo-400 font-display">{t.metric}</span>
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-white truncate">{t.name}</h4>
                    {t.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" title="Verified Deployment" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">{t.role}</p>
                  <p className="text-[10px] font-mono text-indigo-400/80 truncate">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
