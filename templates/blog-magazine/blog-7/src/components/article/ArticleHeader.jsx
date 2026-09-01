import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../common/Badge';
import { Clock, Volume2, Share2, Bookmark, Calendar } from 'lucide-react';
import { useMagazine } from '../../context/MagazineContext';

export function ArticleHeader({ article }) {
  const { playAudio, isPlayingAudio, currentAudioArticle, isBookmarked, toggleBookmark, showToast } = useMagazine();

  if (!article) return null;

  const isSaved = isBookmarked(article.id);
  const isThisAudioPlaying = isPlayingAudio && currentAudioArticle?.id === article.id;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard');
    } else {
      showToast('Article link ready to share');
    }
  };

  return (
    <header className="pt-8 pb-8 max-w-4xl mx-auto text-center">
      {/* Category & Kicker */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <Badge variant="crimson">{article.kicker || article.category}</Badge>
      </div>

      {/* Main Title */}
      <h1 className="font-serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#141413] leading-[1.15] tracking-tight mb-6">
        {article.title}
      </h1>

      {/* Subtitle / Deck */}
      <p className="font-serif-reading text-xl md:text-2xl text-[#4A4A45] italic leading-relaxed max-w-3xl mx-auto mb-8">
        {article.subtitle}
      </p>

      {/* Meta Byline Row */}
      <div className="flex flex-wrap items-center justify-center gap-6 py-4 border-y border-[#E8E5DC] text-xs font-sans text-[#52524E]">
        <Link
          to={`/author/${article.author.id}`}
          className="flex items-center gap-2.5 group"
        >
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-8 h-8 rounded-full object-cover border border-[#D1CDC4]"
          />
          <span className="font-bold text-[#141413] group-hover:text-[#D43825] transition-colors uppercase tracking-wider">
            {article.author.name}
          </span>
        </Link>

        <span className="text-[#D1CDC4]">&bull;</span>

        <div className="flex items-center gap-1.5 font-mono text-[#73736C]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{article.publishedAt}</span>
        </div>

        <span className="text-[#D1CDC4]">&bull;</span>

        <div className="flex items-center gap-1.5 font-mono text-[#73736C]">
          <Clock className="w-3.5 h-3.5" />
          <span>{article.readTime}</span>
        </div>

        <span className="text-[#D1CDC4]">&bull;</span>

        {/* Quick Audio Listen Trigger */}
        <button
          onClick={() => playAudio(article)}
          className="flex items-center gap-1.5 font-semibold text-[#D43825] hover:text-[#B32717] transition-colors cursor-pointer"
        >
          <Volume2 className={`w-3.5 h-3.5 ${isThisAudioPlaying ? 'animate-spin' : ''}`} />
          <span>{isThisAudioPlaying ? 'Playing Audio' : `Listen (${article.audioDuration})`}</span>
        </button>
      </div>
    </header>
  );
}
