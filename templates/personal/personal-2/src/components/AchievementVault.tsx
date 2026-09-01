import { useState } from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Trophy, Award, Sparkles, CheckCircle2, Star, ShieldCheck, ExternalLink } from 'lucide-react';

export default function AchievementVault() {
  const [filter, setFilter] = useState<'ALL' | 'HACKATHON' | 'CERTIFICATION' | 'RECOGNITION' | 'CONTRIBUTION'>('ALL');

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (filter === 'ALL') return true;
    return item.category === filter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'HACKATHON': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'CERTIFICATION': return <Award className="w-5 h-5 text-cyan-400" />;
      case 'RECOGNITION': return <Star className="w-5 h-5 text-violet-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#060813] border-t border-slate-900">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full cyber-glass border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS &amp; CREDENTIALS</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            ACHIEVEMENT <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 bg-clip-text text-transparent">VAULT</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Competitive programming accolades, machine learning certifications, and industry recognitions.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'ALL', label: 'All Achievements' },
              { id: 'HACKATHON', label: 'Hackathons' },
              { id: 'CERTIFICATION', label: 'Certifications' },
              { id: 'RECOGNITION', label: 'Recognitions' },
              { id: 'CONTRIBUTION', label: 'Open Source' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 border ${
                  filter === f.id
                    ? 'bg-amber-500/20 text-amber-300 border-amber-400/60 font-bold shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="group relative rounded-3xl cyber-glass border border-slate-800/90 hover:border-amber-500/40 p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              
              <div className="space-y-4">
                {/* Header with Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 font-mono text-[10px] text-amber-300/90 uppercase tracking-widest font-bold">
                    {item.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400 font-semibold">{item.organization || item.issuer}</span>
                    <span>{item.year || item.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Badge Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span className="text-slate-500">ID: AM-{item.id.toUpperCase().slice(0, 6)}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
