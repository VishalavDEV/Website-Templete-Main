import React from 'react';
import { X, Play, Volume2, Maximize, Film } from 'lucide-react';

export default function VideoModal({ teaser, onClose, eventTitle }) {
  if (!teaser) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog video-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex-center gap-2">
            <Film className="text-pink" size={20} />
            <h3 className="modal-title">{teaser.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close video player">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body video-modal-body">
          <div className="simulated-video-player">
            <img
              src={teaser.thumbnail}
              alt="Video Preview High-Definition Stream"
              className="player-screen-bg"
            />
            <div className="player-screen-overlay">
              <div className="active-play-core">
                <div className="pulse-ripple" />
                <div className="core-icon-box">
                  <Play size={28} fill="currentColor" />
                </div>
              </div>
              <div className="player-badge-top">
                <span className="live-rec-dot" />
                <span>EXCLUSIVE PREVIEW • {teaser.duration}</span>
              </div>
            </div>

            <div className="player-controls-bar">
              <div className="timeline-track">
                <div className="timeline-fill" style={{ width: '42%' }} />
              </div>
              <div className="controls-row">
                <span className="time-code">01:34 / 03:42</span>
                <div className="controls-tools">
                  <Volume2 size={16} />
                  <Maximize size={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="video-description-pane">
            <h4>About this Teaser</h4>
            <p>{teaser.description}</p>
            <p className="subtext-muted">
              Featuring footage from the prototype stage builds, keynote soundchecks, and exclusive interviews with keynote speakers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
