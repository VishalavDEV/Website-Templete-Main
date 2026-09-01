import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Clock, ArrowRight, Headphones } from 'lucide-react';
import { useMotionTokens } from '../../context/MotionContext';

export interface EditorialCardProps {
  category?: string;
  issueNumber?: string;
  title?: string;
  excerpt?: string;
  readTime?: string;
  readersCount?: string;
  author?: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  audioDuration?: string;
  onReadClick?: () => void;
}

export const EditorialCard: React.FC<EditorialCardProps> = memo(({
  category = 'Cover Feature',
  issueNumber = 'N°42.08',
  title = 'The Architecture of Weightlessness: Spatial Interfaces & Post-Digital Realism',
  excerpt = 'How modern computational kinetics, quantum glass aesthetics, and depth typography are reshaping human interaction in physical and spatial computing environments.',
  readTime = '6 min read',
  readersCount = '3.4k reading now',
  author = {
    name: 'Elena Vance-Moreau',
    role: 'Principal Spatial Theorist & Director',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
  },
  audioDuration = '4:20 min audio',
  onReadClick,
}) => {
  const { floatingCardVariant } = useMotionTokens();
  const [bookmarked, setBookmarked] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <motion.article
      variants={floatingCardVariant}
      initial="hidden"
      animate="visible"
      className="glass-card-airy relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 max-w-full sm:max-w-xl w-full border border-white/90 shadow-2xl backdrop-blur-2xl bg-white/85 overflow-hidden gpu-layer"
    >
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-400 opacity-85" />

      {/* Header Metadata Chips */}
      <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-200/60 shadow-xs">
            {category}
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-400 font-semibold">
            {issueNumber}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-50 text-emerald-700 text-[9px] sm:text-[10px] font-mono font-medium border border-emerald-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>{readersCount}</span>
          </div>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            aria-label="Bookmark Story"
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors border cursor-pointer ${
              bookmarked
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-slate-50 text-slate-500 hover:text-slate-900 border-slate-200/70 hover:bg-slate-100'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" fill={bookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Story Headline */}
      <h3
        onClick={onReadClick}
        className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-snug mb-2 sm:mb-3 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2"
      >
        {title}
      </h3>

      {/* Excerpt */}
      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
        {excerpt}
      </p>

      {/* Audio Dispatch Micro Bar */}
      <div className="mb-4 sm:mb-6 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/90 border border-slate-200/60 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-sm transition-transform active:scale-95 flex-shrink-0 cursor-pointer"
            aria-label="Listen to Audio Story"
          >
            <Headphones className="w-3.5 h-3.5" />
          </button>
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-800">
              {isPlayingAudio ? 'Streaming Dispatch...' : 'Listen to Audio Edition'}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">
              AI Voice • {audioDuration}
            </span>
          </div>
        </div>

        {/* Audio Waveform visualization */}
        <div className="flex items-center gap-0.5 h-4 sm:h-5 px-1 sm:px-2">
          {[40, 75, 100, 60, 85, 30, 90, 45].map((height, idx) => (
            <span
              key={idx}
              className={`w-0.5 rounded-full transition-all duration-300 ${
                isPlayingAudio ? 'bg-blue-600 animate-pulse' : 'bg-slate-300'
              }`}
              style={{
                height: isPlayingAudio ? `${height}%` : '35%',
                animationDelay: `${idx * 80}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer: Author & Read CTA */}
      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-200/60">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <img
            src={author.avatarUrl}
            alt={author.name}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-blue-500/20 shadow-xs"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">
              {author.name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 truncate max-w-[140px] sm:max-w-none">
              {author.role}
            </span>
          </div>
        </div>

        <button
          onClick={onReadClick}
          className="group inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-[11px] sm:text-xs font-semibold tracking-tight transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-blue-500/20 flex-shrink-0 cursor-pointer"
        >
          <span>Read Feature</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
});

EditorialCard.displayName = 'EditorialCard';
