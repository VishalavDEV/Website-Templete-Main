import React from 'react';
import { ArrowUpRight, Camera, Calendar, MapPin, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function SelectedStories({ onSelectStory }) {
  return (
    <section id="chapter-03" className="stories-section">
      <div className="container">
        <div className="chapter-badge">CHAPTER 03</div>
        <h2 className="section-title">Selected Stories</h2>
        <p className="section-subtitle">
          Long-form visual essays documenting fragile wildlife corridors, avian migrations, and untouched ecosystems across fictional landscapes.
        </p>

        {/* Projects List with Editorial Layout Variations */}
        <div className="stories-list">
          {PROJECTS_DATA.map((project, index) => (
            <article 
              key={project.id} 
              className={`story-card ${index % 2 === 1 ? 'story-card-reverse' : ''}`}
            >
              {/* Project Image Frame */}
              <div className="story-image-container" onClick={() => onSelectStory(project)}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="story-img"
                />
                <div className="story-img-overlay">
                  <span className="view-story-badge">
                    <Eye size={16} /> EXPLORE DOCUMENTARY
                  </span>
                </div>
                <div className="story-number-tag">{project.number}</div>
              </div>

              {/* Project Details Content */}
              <div className="story-info">
                <div className="story-meta-header">
                  <span className="story-year">{project.year}</span>
                  <span className="meta-sep">•</span>
                  <span className="story-category">{project.type}</span>
                </div>

                <h3 className="story-title" onClick={() => onSelectStory(project)}>
                  {project.title}
                </h3>

                <div className="story-location">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>

                <p className="story-description">
                  {project.description}
                </p>

                <div className="story-technical-box">
                  <Camera size={15} className="tech-icon" />
                  <span className="tech-text">{project.technical}</span>
                </div>

                <button 
                  className="btn-secondary story-cta-btn"
                  onClick={() => onSelectStory(project)}
                >
                  <span>Explore Full Story</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
