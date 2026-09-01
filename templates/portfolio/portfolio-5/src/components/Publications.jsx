import React from 'react';
import { PUBLICATIONS_DATA } from '../data/portfolioData';
import { BookOpen, Newspaper, ArrowUpRight, Info } from 'lucide-react';

export default function Publications() {
  return (
    <section id="chapter-08" className="publications-section">
      <div className="container">
        <div className="chapter-badge">CHAPTER 08</div>
        <h2 className="section-title">Published Stories</h2>
        <p className="section-subtitle">
          Editorial features, cover essays, and narrative spreads published in fictional environmental journals.
        </p>

        {/* Editorial Press Cards Grid */}
        <div className="publications-grid">
          {PUBLICATIONS_DATA.map((pub, idx) => (
            <div key={pub.publication + pub.year} className="publication-card">
              <div className="pub-card-header">
                <span className="pub-year">{pub.year}</span>
                <span className="pub-tag">COVER ESSAY</span>
              </div>

              <div className="pub-magazine-masthead">
                <Newspaper size={20} className="pub-icon" />
                <h3 className="pub-name">{pub.publication}</h3>
              </div>

              <h4 className="pub-story-title">"{pub.storyTitle}"</h4>
              <p className="pub-type-desc">{pub.type}</p>

              <div className="pub-card-footer">
                <span className="fictional-label">FICTIONAL PUBLICATION</span>
                <span className="read-arrow"><ArrowUpRight size={16} /></span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Fictional Compliance Banner */}
        <div className="publication-compliance-banner">
          <Info size={16} className="info-icon" />
          <p>
            <strong>Note:</strong> All publication names, journal titles, cover features, and media features shown in this portfolio template are 100% fictional demonstration content created strictly for safe portfolio representation.
          </p>
        </div>
      </div>
    </section>
  );
}
