import { ExternalLink, Sparkles } from 'lucide-react';

interface AdSlotProps {
  variant?: 'in-content' | 'sidebar' | 'sticky-footer';
  title?: string;
  sponsorName?: string;
}

export default function AdSlot({ variant = 'in-content', title = 'Curated Partner Showcase', sponsorName = 'Aura Craft Studios' }: AdSlotProps) {
  if (variant === 'sticky-footer') {
    return (
      <aside aria-label="Sponsored Footer Announcement" className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-900/95 backdrop-blur-md text-white border-t border-neutral-800 px-4 py-3 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-amber-500/20 text-amber-400 font-semibold px-2 py-0.5 rounded uppercase tracking-wider text-[10px]">Sponsored</span>
            <span className="text-neutral-300 truncate"><strong className="text-white font-medium">{sponsorName}</strong>: {title}</span>
          </div>
          <a
            href="#sponsor"
            onClick={(e) => { e.preventDefault(); alert('Redirecting to partner site (Spring Boot analytics ready)'); }}
            className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-white font-medium px-3.5 py-1.5 rounded-full transition-colors flex-shrink-0"
          >
            <span>Explore Collection</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-2xl p-6 border border-neutral-800 shadow-xl relative overflow-hidden group">
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors" />
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Partner Ad
          </span>
          <span className="text-xs text-neutral-400">{sponsorName}</span>
        </div>
        <h4 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
          {title}
        </h4>
        <p className="text-xs text-neutral-300 mb-4 leading-relaxed font-sans">
          Discover hand-crafted tactile objects designed for meditative workflows and timeless interiors.
        </p>
        <button
          onClick={() => alert('Partner link clicked. Spring Boot click tracking ready.')}
          className="w-full bg-white hover:bg-amber-50 text-neutral-900 font-semibold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <span>Learn More</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  // default in-content
  return (
    <div className="my-10 p-6 bg-neutral-50 border border-neutral-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
      <div className="absolute top-2 right-3 text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">
        Sponsored Ad
      </div>
      <div className="space-y-1 text-center sm:text-left">
        <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase">{sponsorName}</span>
        <h4 className="font-serif text-lg font-bold text-neutral-900">
          {title}
        </h4>
        <p className="text-xs text-neutral-600 max-w-md font-sans">
          Elevate your daily reading sanctuary with sustainable architectural timber and acoustic design.
        </p>
      </div>
      <button
        onClick={() => alert('In-content sponsor clicked.')}
        className="bg-neutral-900 hover:bg-amber-700 text-white font-medium px-5 py-2.5 rounded-xl text-xs transition-colors whitespace-nowrap flex-shrink-0 shadow-sm"
      >
        Discover Partner
      </button>
    </div>
  );
}
