import React from 'react';

export default function JournalSection() {
  return (
    <section id="journal" className="journal-section-newspaper" style={{ padding: 'var(--section-gap) var(--site-padding)' }}>
      <div className="container">
        <div className="ingredients-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <span className="house-meta-tag">THE JOURNAL</span>
          <h2 className="ingredients-title-main">STORIES &amp; SEASONS</h2>
        </div>
        <div className="journal-grid-newspaper">
          <div className="journal-feature-article">
            <img src="assets/images/kitchen.jpg" alt="The Art of Eating Slowly" className="journal-feature-img" data-cursor="VIEW" />
            <span className="house-meta-tag">FEATURE &bull; ISSUE 04</span>
            <h3 className="journal-article-title">THE ART OF EATING SLOWLY</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              How taking time around the table deepens our connection to ingredients, nature, and the company we keep.
            </p>
          </div>
          <div className="journal-small-articles-col">
            <div className="journal-small-node">
              <span className="house-meta-tag">ESSAY</span>
              <h4 className="journal-small-title">Market Morning</h4>
              <p style={{ color: 'var(--text-muted)' }}>A dawn visit to coastal Chennai markets foraging fresh catch and heirloom produce.</p>
            </div>
            <div className="journal-small-node">
              <span className="house-meta-tag">BEHIND THE SCENES</span>
              <h4 className="journal-small-title">Behind the Kitchen</h4>
              <p style={{ color: 'var(--text-muted)' }}>Inside our rooftop botanical garden where herbs and edible blossoms are tended daily.</p>
            </div>
            <div className="journal-small-node">
              <span className="house-meta-tag">RECIPE</span>
              <h4 className="journal-small-title">Seasonal Harvest</h4>
              <p style={{ color: 'var(--text-muted)' }}>Chef Maya shares her winter herbal infusion broth recipe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
