import React from 'react';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { useStickyHeader } from '../../hooks/useStickyHeader';
import { Search, Bookmark, Menu, Volume2 } from 'lucide-react';
import { DesktopNavigation } from './DesktopNavigation';
import { AnnouncementBar } from './AnnouncementBar';

export function Header({ onOpenMobileMenu }) {
  const { isScrolled } = useStickyHeader(40);
  const {
    bookmarks,
    setIsBookmarkDrawerOpen,
    setIsSearchOpen,
    currentAudioArticle,
    isPlayingAudio,
    playAudio,
  } = useMagazine();

  return (
    <header className="w-full">
      {/* Announcement Bar (hides on mobile and on scroll) */}
      {!isScrolled && <AnnouncementBar />}

      {/* Main Sticky Header Box */}
      <div
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#141413] py-2 px-3 sm:px-6 md:px-8'
            : 'bg-[#FAF9F5] border-b border-[#141413] py-2.5 sm:pt-4 sm:pb-2.5 px-3 sm:px-6 md:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left Action: Mobile Menu & Search Button */}
            <div className="flex items-center gap-1.5 sm:gap-3 w-1/4">
              <button
                onClick={onOpenMobileMenu}
                className="lg:hidden p-2 text-[#141413] hover:bg-[#EBE8DF] transition-colors -ml-1 cursor-pointer"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 sm:hidden text-[#141413] hover:bg-[#EBE8DF] transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className={`hidden sm:flex items-center gap-2 border border-[#E8E5DC] bg-white hover:border-[#141413] text-[#73736C] hover:text-[#141413] text-xs transition-all shadow-xs group ${
                  isScrolled ? 'px-2.5 py-1' : 'px-3 py-1.5'
                }`}
              >
                <Search className="w-3.5 h-3.5 group-hover:text-[#D43825] transition-colors" />
                <span className="font-medium">Search essays...</span>
                <kbd className="ml-2 font-mono text-[0.65rem] bg-[#F4F1EA] px-1.5 py-0.5 border border-[#D1CDC4] text-[#52524E]">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Center: Scalable Editorial Brand Logo */}
            <div className="text-center flex-1 min-w-0">
              <Link to="/" className="inline-block group">
                <h1
                  className={`font-serif-headline font-black tracking-tight text-[#141413] uppercase leading-none transition-all duration-300 whitespace-nowrap ${
                    isScrolled
                      ? 'text-lg sm:text-2xl md:text-3xl'
                      : 'text-lg sm:text-2xl md:text-4xl lg:text-5xl'
                  }`}
                >
                  THE BLOG OBSERVER
                </h1>
                {!isScrolled && (
                  <div className="hidden md:flex items-center justify-center gap-2 mt-1 text-[0.6875rem] uppercase tracking-[0.2em] font-sans font-medium text-[#73736C]">
                    <span>Est. 2018</span>
                    <span>&bull;</span>
                    <span className="text-[#141413] font-bold">Vol. VIII &bull; No. 48</span>
                    <span>&bull;</span>
                    <span>Culture &bull; Design &bull; Ideas</span>
                  </div>
                )}
              </Link>
            </div>

            {/* Right Action: Audio Status & Reading List */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 w-1/4">
              {currentAudioArticle && (
                <button
                  onClick={() => playAudio(currentAudioArticle)}
                  className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF9F5] border border-[#D43825] text-[#D43825] text-xs font-bold hover:bg-[#FDF4F2] transition-colors"
                  title="Listening to audio"
                >
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="truncate max-w-[90px] text-[0.6875rem]">
                    {isPlayingAudio ? 'Playing' : 'Paused'}
                  </span>
                </button>
              )}

              <button
                onClick={() => setIsBookmarkDrawerOpen(true)}
                className={`relative flex items-center gap-1.5 sm:gap-2 border border-[#E8E5DC] bg-white hover:border-[#141413] text-[#141413] text-xs font-semibold transition-all shadow-xs cursor-pointer ${
                  isScrolled ? 'px-2 py-1' : 'px-2.5 py-1 sm:px-3 sm:py-1.5'
                }`}
                title="Open Reading List"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#D43825]" />
                <span className="hidden sm:inline">Reading List</span>
                {bookmarks.length > 0 && (
                  <span className="inline-flex items-center justify-center px-1.5 py-0.2 bg-[#D43825] text-white text-[0.65rem] font-bold">
                    {bookmarks.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop-Only Navigation Bar */}
        <div className="mt-2 hidden lg:block">
          <DesktopNavigation />
        </div>
      </div>
    </header>
  );
}
