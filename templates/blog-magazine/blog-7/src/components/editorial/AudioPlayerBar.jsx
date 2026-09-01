import React, { useState } from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { Play, Pause, X, Volume2, FastForward, RotateCcw, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AudioPlayerBar() {
  const { currentAudioArticle, isPlayingAudio, audioProgress, playAudio, pauseAudio, closeAudio } = useMagazine();
  const [speed, setSpeed] = useState('1.0x');

  if (!currentAudioArticle) return null;

  const cycleSpeed = () => {
    if (speed === '1.0x') setSpeed('1.25x');
    else if (speed === '1.25x') setSpeed('1.5x');
    else setSpeed('1.0x');
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 lg:left-auto lg:right-8 lg:max-w-2xl z-50 bg-[#141413] text-[#FAF9F5] border-2 border-[#141413] shadow-2xl p-3.5 sm:px-6 animate-slide-up">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
          <div className="relative shrink-0">
            <img
              src={currentAudioArticle.coverImage || currentAudioArticle.image}
              alt={currentAudioArticle.title}
              className="w-11 h-11 object-cover border border-[#444]"
            />
            {isPlayingAudio && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-0.5">
                <span className="equalizer-bar" />
                <span className="equalizer-bar" />
                <span className="equalizer-bar" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[0.625rem] font-bold uppercase tracking-widest text-[#D43825]">
                Audio Monograph
              </span>
              <span className="text-[0.625rem] text-[#A1A19A] font-mono">
                {currentAudioArticle.audioDuration}
              </span>
            </div>
            <Link
              to={`/article/${currentAudioArticle.slug}`}
              className="font-serif-headline text-xs sm:text-sm font-bold text-white hover:text-[#D43825] transition-colors truncate block"
            >
              {currentAudioArticle.title}
            </Link>
          </div>
        </div>

        {/* Player Controls & Scrubber */}
        <div className="flex items-center gap-3 w-full sm:w-auto flex-1 justify-end">
          {/* Play/Pause Button */}
          <button
            onClick={() => (isPlayingAudio ? pauseAudio() : playAudio(currentAudioArticle))}
            className="w-9 h-9 rounded-full bg-white text-[#141413] hover:bg-[#D43825] hover:text-white transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
            aria-label={isPlayingAudio ? 'Pause Audio' : 'Play Audio'}
          >
            {isPlayingAudio ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          {/* Progress Bar */}
          <div className="flex-1 max-w-[140px] sm:max-w-[180px] flex items-center gap-2">
            <div className="flex-1 bg-[#333] h-1.5 overflow-hidden cursor-pointer relative rounded-full">
              <div
                className="bg-[#D43825] h-full transition-all duration-300 shadow-sm"
                style={{ width: `${audioProgress}%` }}
              />
            </div>
            <span className="text-[0.625rem] font-mono text-[#A1A19A] shrink-0">
              {currentAudioArticle.audioDuration}
            </span>
          </div>

          {/* Speed Toggle */}
          <button
            onClick={cycleSpeed}
            className="px-2 py-0.5 bg-[#2B2B28] hover:bg-[#383834] text-[0.625rem] font-mono text-white rounded transition-colors cursor-pointer"
            title="Playback Speed"
          >
            {speed}
          </button>

          {/* Close */}
          <button
            onClick={closeAudio}
            className="text-[#A1A19A] hover:text-white transition-colors p-1 cursor-pointer"
            aria-label="Close Audio Player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
