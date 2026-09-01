import React from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { Bookmark, Share2, Volume2, Type, Heart, MessageSquare } from 'lucide-react';

export function ReadingToolbar({ article, onScrollToComments }) {
  const {
    isBookmarked,
    toggleBookmark,
    fontSize,
    setFontSize,
    playAudio,
    isPlayingAudio,
    currentAudioArticle,
    showToast,
  } = useMagazine();

  if (!article) return null;

  const isSaved = isBookmarked(article.id);
  const isAudioPlaying = isPlayingAudio && currentAudioArticle?.id === article.id;

  const cycleFontSize = () => {
    if (fontSize === 'sm') setFontSize('md');
    else if (fontSize === 'md') setFontSize('lg');
    else setFontSize('sm');
    showToast(`Reading font size: ${fontSize === 'sm' ? 'Standard' : fontSize === 'md' ? 'Large' : 'Compact'}`);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article URL copied to clipboard');
    }
  };

  return (
    <aside className="sticky top-20 z-30 flex md:flex-col items-center justify-center gap-2 bg-white p-2 border border-[#E8E5DC] shadow-md rounded-none w-fit mx-auto md:mx-0">
      {/* Font Size Adjuster */}
      <button
        onClick={cycleFontSize}
        className="p-2 text-[#52524E] hover:text-[#141413] hover:bg-[#FAF9F5] transition-colors relative group"
        title="Adjust text size (A- / A+)"
      >
        <span className="font-serif-headline text-xs font-bold uppercase tracking-wider">
          {fontSize === 'sm' ? 'A' : fontSize === 'md' ? 'A+' : 'A++'}
        </span>
        <span className="hidden group-hover:block absolute left-full ml-2 px-2 py-1 bg-[#141413] text-white text-[0.65rem] whitespace-nowrap z-50">
          Size: {fontSize.toUpperCase()}
        </span>
      </button>

      <div className="hidden md:block w-4 border-t border-[#E8E5DC] my-1" />

      {/* Bookmark Action */}
      <button
        onClick={() => toggleBookmark(article.id)}
        className={`p-2 transition-colors relative group ${
          isSaved ? 'text-[#D43825]' : 'text-[#73736C] hover:text-[#141413]'
        }`}
        title={isSaved ? 'Remove Bookmark' : 'Save to Reading List'}
      >
        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        <span className="hidden group-hover:block absolute left-full ml-2 px-2 py-1 bg-[#141413] text-white text-[0.65rem] whitespace-nowrap z-50">
          {isSaved ? 'Saved' : 'Save'}
        </span>
      </button>

      {/* Audio Playback */}
      <button
        onClick={() => playAudio(article)}
        className={`p-2 transition-colors relative group ${
          isAudioPlaying ? 'text-[#D43825] animate-pulse' : 'text-[#73736C] hover:text-[#141413]'
        }`}
        title="Listen to Narration"
      >
        <Volume2 className="w-4 h-4" />
        <span className="hidden group-hover:block absolute left-full ml-2 px-2 py-1 bg-[#141413] text-white text-[0.65rem] whitespace-nowrap z-50">
          Audio Edition
        </span>
      </button>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="p-2 text-[#73736C] hover:text-[#141413] hover:bg-[#FAF9F5] transition-colors relative group"
        title="Share article"
      >
        <Share2 className="w-4 h-4" />
        <span className="hidden group-hover:block absolute left-full ml-2 px-2 py-1 bg-[#141413] text-white text-[0.65rem] whitespace-nowrap z-50">
          Share
        </span>
      </button>

      {/* Scroll to Comments */}
      {onScrollToComments && (
        <button
          onClick={onScrollToComments}
          className="p-2 text-[#73736C] hover:text-[#141413] hover:bg-[#FAF9F5] transition-colors relative group"
          title="Jump to Discussion"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden group-hover:block absolute left-full ml-2 px-2 py-1 bg-[#141413] text-white text-[0.65rem] whitespace-nowrap z-50">
            Comments ({article.commentsCount || 0})
          </span>
        </button>
      )}
    </aside>
  );
}
