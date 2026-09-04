import React, { useState } from 'react';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Radio } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlay,
    nextTrack,
    prevTrack,
    seek,
    setVolumeLevel,
    toggleMute
  } = useAudio();

  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${String(mins).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  };

  return (
    <aside
      aria-label="Global Audio Player"
      className="audio-player-aside"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '5vw',
        zIndex: 950,
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-on-dark)',
        padding: '16px 24px',
        borderRadius: '4px',
        boxShadow: 'var(--shadow-elevated)',
        border: '1px solid var(--border-accent)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '460px',
        width: 'calc(100vw - 10vw)'
      }}
      data-cursor="AUDIO PLAYER"
    >
      <style>{`
        @media (max-width: 640px) {
          .audio-player-aside {
            bottom: 12px !important;
            left: 12px !important;
            width: calc(100vw - 24px) !important;
            padding: 10px 14px !important;
            gap: 10px !important;
          }
        }
      `}</style>
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-warm)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'var(--transition-smooth)'
        }}
        data-cursor={isPlaying ? 'PAUSE' : 'PLAY'}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
      </button>

      {/* Track Details & Scrub Timeline */}
      <div style={{ flexGrow: 1, minWidth: 0 }}>
        {/* Track Title & Artist */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
            <Radio size={12} style={{ color: isPlaying ? 'var(--coral)' : 'var(--text-muted-on-dark)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
              }}
            >
              NOVA//ECHO — {currentTrack.title}
            </span>
          </div>

          {/* Time Display */}
          <span
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.9rem',
              color: 'var(--lavender)',
              marginLeft: '8px',
              flexShrink: 0
            }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        {/* Progress Bar Range Input */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeekChange}
            style={{
              width: '100%',
              height: '4px',
              appearance: 'none',
              backgroundColor: 'rgba(242, 238, 232, 0.2)',
              borderRadius: '2px',
              outline: 'none',
              cursor: 'pointer'
            }}
            aria-label="Track playback progress"
          />
        </div>
      </div>

      {/* Control Buttons (Prev, Next, Volume) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={prevTrack}
          style={{ color: 'var(--text-on-dark)', opacity: 0.8 }}
          data-cursor="PREV"
          aria-label="Previous Track"
        >
          <SkipBack size={16} />
        </button>

        <button
          onClick={nextTrack}
          style={{ color: 'var(--text-on-dark)', opacity: 0.8 }}
          data-cursor="NEXT"
          aria-label="Next Track"
        >
          <SkipForward size={16} />
        </button>

        {/* Volume & Mute Toggle */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button
            onClick={toggleMute}
            onMouseEnter={() => setShowVolumeSlider(true)}
            style={{ color: isMuted ? 'var(--coral)' : 'var(--text-on-dark)' }}
            data-cursor={isMuted ? 'UNMUTE' : 'MUTE'}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Popover Volume Slider */}
          {showVolumeSlider && (
            <div
              onMouseLeave={() => setShowVolumeSlider(false)}
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '0',
                backgroundColor: 'var(--bg-dark)',
                border: '1px solid var(--border-dark)',
                padding: '8px 12px',
                borderRadius: '4px',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolumeLevel(Number(e.target.value))}
                style={{ width: '80px', accentColor: 'var(--accent-warm)' }}
                aria-label="Volume Level"
              />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
