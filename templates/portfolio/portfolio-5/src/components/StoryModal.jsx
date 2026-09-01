import React from 'react';
import { X, Calendar, MapPin, Camera, Award, BookOpen } from 'lucide-react';

export default function StoryModal({ story, onClose }) {
  if (!story) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="story-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="modal-hero-visual">
          <img src={story.image} alt={story.title} className="modal-img" />
          <div className="modal-hero-overlay">
            <span className="modal-year-tag">{story.year} DOCUMENTARY</span>
            <h2 className="modal-story-title">{story.title}</h2>
            <div className="modal-location">
              <MapPin size={14} />
              <span>{story.location}</span>
            </div>
          </div>
        </div>

        <div className="modal-body-container">
          <div className="modal-type-badge">{story.type}</div>

          <div className="modal-section">
            <h3 className="modal-sub-heading">Documentary Narrative</h3>
            <p className="modal-text">{story.story}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-sub-heading">Technical & Field Equipment Approach</h3>
            <div className="modal-tech-box">
              <Camera size={18} className="modal-tech-icon" />
              <span>{story.technical}</span>
            </div>
          </div>

          {story.exhibitions && (
            <div className="modal-section">
              <h3 className="modal-sub-heading">Exhibition & Guild Showcase</h3>
              <p className="modal-text">{story.exhibitions}</p>
            </div>
          )}

          <div className="fictional-notice">
            <span>FICTIONAL DEMONSTRATION DOCUMENTARY PROJECT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
