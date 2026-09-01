import React from 'react';
import { Brain, Hourglass, UserCheck, Compass, ArrowRight } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

const iconMap = {
  Brain: Brain,
  Hourglass: Hourglass,
  UserCheck: UserCheck,
  Compass: Compass,
};

export default function Themes() {
  return (
    <section id="themes" className="section">
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">CORE MOTIFS</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Themes That Shape The Narrative
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Delve into the philosophical dilemmas at the heart of Mira Rowan's speculative universe.
          </p>
        </div>

        <div className="themes-grid">
          {bookDetailsData.themes.map((theme, idx) => {
            const IconComponent = iconMap[theme.iconName] || Brain;
            return (
              <div 
                key={theme.number}
                className={`theme-card reveal-on-scroll delay-${idx + 1}`}
              >
                <div>
                  <div className="theme-card-top">
                    <span className="theme-number">{theme.number}</span>
                    <div className="theme-icon-box">
                      <IconComponent size={24} />
                    </div>
                  </div>

                  <h3 className="theme-title">{theme.title}</h3>
                  <p className="theme-desc">{theme.desc}</p>
                </div>

                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', fontWeight: '600', fontSize: '0.875rem' }}>
                  <span>Explore Motif</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
