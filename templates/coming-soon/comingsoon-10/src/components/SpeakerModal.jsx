import React from 'react';
import { X, Mic, ExternalLink, Award, BookOpen, Share2 } from 'lucide-react';

export default function SpeakerModal({ speaker, onClose, eventTitle }) {
  if (!speaker) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog speaker-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex-center gap-2">
            <Mic className="text-cyan" size={20} />
            <h3 className="modal-title">Featured Keynote Speaker Spotlight</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close speaker bio">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body speaker-modal-body">
          <div className="speaker-modal-grid">
            <div className="speaker-portrait-pane">
              <div className="speaker-image-frame">
                <img
                  src={speaker.image}
                  alt={`Portrait of ${speaker.name}`}
                  className="speaker-modal-img"
                  width="360"
                  height="360"
                />
                <div className="speaker-image-glow" />
              </div>
              <div className="speaker-quick-org">
                <span className="org-badge">{speaker.org}</span>
              </div>
            </div>

            <div className="speaker-details-pane">
              <span className="keynote-tag">MAIN STAGE KEYNOTE</span>
              <h3 className="speaker-name-title">{speaker.name}</h3>
              <p className="speaker-role-text">{speaker.role}</p>

              <div className="keynote-topic-card">
                <span className="topic-sublabel">SESSION TITLE</span>
                <h4 className="topic-headline">{speaker.topic}</h4>
              </div>

              <div className="speaker-bio-section">
                <h5>Biography & Research Background</h5>
                <p>{speaker.bio}</p>
                <p className="extra-bio-note">
                  Recognized globally for pioneering breakthroughs in the discipline, leading cross-disciplinary working groups, and mentoring next-generation researchers.
                </p>
              </div>

              <div className="speaker-footer-meta">
                <div className="social-links-row">
                  <a href="#twitter" className="spk-social-btn" aria-label="Speaker Twitter / X">
                    <span>X / Twitter</span>
                    <ExternalLink size={12} />
                  </a>
                  <a href="#linkedin" className="spk-social-btn" aria-label="Speaker LinkedIn">
                    <span>LinkedIn</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
