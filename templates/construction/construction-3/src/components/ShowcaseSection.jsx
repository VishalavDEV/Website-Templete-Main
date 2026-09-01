import React from 'react';

export default function ShowcaseSection({ onOpenVideoModal, stats }) {
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section className="futurix-bottom-showcase" id="about">
      <div className="container">
        <div className="bottom-showcase-grid">
          
          {/* Left Showcase Card: Skyline Tower */}
          <div 
            className="project-showcase-card" 
            onMouseMove={handleCardMouseMove} 
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="card-left-info">
              <span className="sub-label">OUR RECENT PROJECT</span>
              <h3>Skyline Tower Commercial Complex</h3>
              <p>A state-of-the-art commercial building designed for the future of business with zero-clash BIM execution.</p>
              <a href="#projects" className="view-project-link">
                VIEW ALL PROJECTS <span className="arrow">›</span>
              </a>
            </div>

            <div className="card-right-preview" onClick={onOpenVideoModal} title="Watch Skyline Tower Walkthrough">
              <img src="./assets/images/skyline-tower.jpg" alt="Skyline Tower Commercial Complex" />
              <div className="play-overlay-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent-blue)">
                  <polygon points="6 3 20 12 6 21"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Stats Counter Matrix */}
          <div 
            className="stats-counter-card" 
            onMouseMove={handleCardMouseMove} 
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="stats-matrix-grid">
              
              <div className="stat-box">
                <div className="stat-icon-cyan">🏢</div>
                <div className="stat-number">{stats?.projectsCompleted || 250}+</div>
                <div className="stat-title">Projects Completed</div>
                <div className="stat-line"></div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-cyan">👥</div>
                <div className="stat-number">{stats?.happyClients || 120}+</div>
                <div className="stat-title">Happy Clients</div>
                <div className="stat-line"></div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-cyan">👷</div>
                <div className="stat-number">{stats?.yearsExperience || 15}+</div>
                <div className="stat-title">Years Experience</div>
                <div className="stat-line"></div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-cyan">🏆</div>
                <div className="stat-number">{stats?.awardsWon || 35}+</div>
                <div className="stat-title">Awards Won</div>
                <div className="stat-line"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
