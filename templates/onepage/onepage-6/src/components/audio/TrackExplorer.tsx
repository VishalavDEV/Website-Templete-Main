import React, { useState } from 'react';
import { TRACKS, type Track } from '../../data/tracks';
import { useAudio } from '../../context/AudioContext';
import { useToast } from '../../context/ToastContext';
import { Play, Pause, Activity, Plus } from 'lucide-react';

export const TrackExplorer: React.FC = () => {
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();
  const { showToast } = useToast();
  const [hoveredTrackId, setHoveredTrackId] = useState<string | null>(null);

  const handleTrackClick = (track: Track) => {
    if (currentTrack.id === track.id) {
      togglePlay();
    } else {
      playTrack(track);
      showToast(`PLAYING ${track.title}`, 'accent');
    }
  };

  const handleAddTrack = (e: React.MouseEvent, track: Track) => {
    e.stopPropagation();
    showToast(`TRACK ADDED: ${track.title}`, 'info');
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {TRACKS.map(track => {
          const isSelected = currentTrack.id === track.id;
          const isCurrentPlaying = isSelected && isPlaying;
          const isHovered = hoveredTrackId === track.id;

          return (
            <div
              key={track.id}
              onClick={() => handleTrackClick(track)}
              onMouseEnter={() => setHoveredTrackId(track.id)}
              onMouseLeave={() => setHoveredTrackId(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                backgroundColor: isSelected ? 'rgba(215, 107, 74, 0.12)' : isHovered ? 'rgba(242, 238, 232, 0.05)' : 'transparent',
                borderBottom: '1px solid var(--border-dark)',
                borderRadius: '4px',
                transition: 'var(--transition-smooth)',
                cursor: 'pointer'
              }}
              data-cursor={isCurrentPlaying ? 'PAUSE' : 'PLAY TRACK'}
            >
              {/* Track Number & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '1.4rem',
                    color: isSelected ? 'var(--accent-warm)' : 'var(--text-muted-on-dark)',
                    width: '30px',
                    transform: isHovered ? 'translateX(4px)' : 'none',
                    transition: 'transform 0.2s'
                  }}
                >
                  {track.number}
                </span>

                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--coral)' : 'var(--bg-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    {track.title}
                    {isCurrentPlaying && (
                      <Activity size={16} style={{ color: 'var(--accent-warm)', animation: 'pulseSlow 1s infinite' }} />
                    )}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted-on-dark)',
                      fontFamily: 'var(--font-grotesk)',
                      marginTop: '2px'
                    }}
                  >
                    {track.genre} • {track.frequency} • {track.key}
                  </p>
                </div>
              </div>

              {/* Hover Waveform Preview & Duration / Actions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* Micro Animated Waveform visual on hover */}
                {isHovered && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '16px' }} className="mobile-hide">
                    {[12, 24, 18, 28, 14, 22].map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: '2px',
                          height: `${h}px`,
                          backgroundColor: 'var(--coral)',
                          animation: 'pulseSlow 0.8s infinite ease-in-out',
                          animationDelay: `${idx * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                <span
                  style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '1.1rem',
                    color: 'var(--lavender)'
                  }}
                >
                  {track.duration}
                </span>

                {/* Add to Queue Button */}
                <button
                  onClick={(e) => handleAddTrack(e, track)}
                  style={{
                    padding: '6px',
                    borderRadius: '50%',
                    color: 'var(--text-muted-on-dark)',
                    transition: 'color 0.2s'
                  }}
                  data-cursor="ADD"
                  aria-label="Add Track to Queue"
                >
                  <Plus size={16} />
                </button>

                {/* Action Play Button */}
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'var(--accent-warm)' : 'rgba(242, 238, 232, 0.1)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {isCurrentPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
