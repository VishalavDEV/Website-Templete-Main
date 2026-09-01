import React from 'react';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { Search, Bookmark, Menu, BookOpen, Volume2 } from 'lucide-react';

export function Masthead({ onOpenMobileMenu }) {
  const { bookmarks, setIsBookmarkDrawerOpen, setIsSearchOpen, currentAudioArticle, isPlayingAudio, playAudio } = useMagazine();

  return (
    <header className="border-b border-[#141413] bg-[#FAF9F5] pt-5 pb-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Left Action: Search & Quick Read List */}
          <div className="flex items-center gap-3 w-1/4">
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 text-[#141413] hover:bg-[#EBE8DF] rounded transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-[#E8E5DC] bg-white hover:border-[#141413] text-[#73736C] hover:text-[#141413] text-xs transition-all shadow-sm group"
            >
              <Search className="w-3.5 h-3.5 group-hover:text-[#D43825] transition-colors" />
              <span className="font-medium">Search essays & issues...</span>
              <kbd className="ml-2 font-mono text-[0.65rem] bg-[#F4F1EA] px-1.5 py-0.5 border border-[#D1CDC4] text-[#52524E]">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Center: Grand Editorial Logo */}
          <div className="text-center flex-1">
            <Link to="/" className="inline-block group">
              <h1 className="font-serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#141413] uppercase leading-none transition-opacity group-hover:opacity-90">
                THE BLOG OBSERVER
              </h1>
              <div className="flex items-center justify-center gap-2 mt-1.5 text-[0.6875rem] md:text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#73736C]">
                <span>Est. 2018</span>
                <span>&bull;</span>
                <span className="text-[#141413] font-bold">Vol. VIII &bull; No. 48</span>
                <span>&bull;</span>
                <span>Culture &bull; Design &bull; Ideas</span>
              </div>
            </Link>
          </div>

          {/* Right Action: Bookmark Drawer & Audio Indicator */}
          <div className="flex items-center justify-end gap-3 w-1/4">
            {currentAudioArticle && (
              <button
                onClick={() => playAudio(currentAudioArticle)}
                className="hidden md:flex items-center gap-2 px-2.5 py-1.5 bg-[#FAF9F5] border border-[#D43825] text-[#D43825] text-xs font-bold animate-pulse hover:bg-[#FDF4F2] transition-colors"
                title="Listening to audio"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span className="truncate max-w-[100px] text-[0.7rem]">
                  {isPlayingAudio ? 'Playing' : 'Paused'}
                </span>
              </button>
            )}

            <button
              onClick={() => setIsBookmarkDrawerOpen(true)}
              className="relative flex items-center gap-2 px-3 py-1.5 border border-[#E8E5DC] bg-white hover:border-[#141413] text-[#141413] text-xs font-semibold transition-all shadow-sm"
              title="Open Reading List"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#D43825]" />
              <span className="hidden sm:inline">Reading List</span>
              {bookmarks.length > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.2 bg-[#D43825] text-white text-[0.65rem] font-bold rounded-full">
                  {bookmarks.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
