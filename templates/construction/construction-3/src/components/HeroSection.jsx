import React, { useState, useEffect } from 'react';

export default function HeroSection({ onOpenVideoModal, stats }) {
  const [twinPct, setTwinPct] = useState(94);
  const [craneLoad, setCraneLoad] = useState(480);
  const [levelNum, setLevelNum] = useState(25);

  useEffect(() => {
    const telemetryInterval = setInterval(() => {
      setTwinPct(Math.floor(93 + Math.random() * 6));
      setCraneLoad(Math.floor(475 + Math.random() * 25));
    }, 2200);

    const levelInterval = setInterval(() => {
      setLevelNum(prev => (prev % 38) + 1);
    }, 4000);

    return () => {
      clearInterval(telemetryInterval);
      clearInterval(levelInterval);
    };
  }, []);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section className="futurix-hero" id="home">
      {/* Background Full-Display Video */}
      <div className="hero-video-backdrop-wrapper">
        <video 
          className="hero-full-display-video" 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="./assets/images/futurix-3d-wireframe.jpg"
        >
          <source src="./assets/videos/futurix-building.webm" type="video/webm" />
          <source src="./assets/videos/futurix-construction.mp4" type="video/mp4" />
          <source src="./assets/videos/futurix-civil.webm" type="video/webm" />
        </video>
        <div className="hero-video-gradient-overlay"></div>
      </div>

      {/* Cyber Grid & Glow */}
      <div className="hero-cyber-grid"></div>
      <div className="hero-radial-glow"></div>

      <div className="container hero-container">
        <div className="hero-grid-layout">
          
          {/* Left Hero Content */}
          <div className="hero-left-content">
            <div className="smart-tech-pill">
              <span>SMART CONSTRUCTION SOLUTIONS</span>
              <span className="cyber-slashes">///</span>
            </div>

            <h1 className="hero-title">
              Building The<br />
              Future With<br />
              <span className="text-cyan-glow">Technology</span>
            </h1>

            <p className="hero-desc">
              We combine innovation, technology, and expertise to build sustainable and future-ready structures.
            </p>

            <div className="hero-btn-row">
              <a href="#services" className="btn-cyan-gradient">
                OUR SERVICES <span className="arrow">›</span>
              </a>
              <button className="btn-watch-video" onClick={onOpenVideoModal} id="playHeroVideoBtn">
                <span className="play-icon-circle">▶</span>
                <span>WATCH FULL REEL</span>
              </button>
            </div>
          </div>

          {/* Center 3D Stage Video with Live Telemetry HUD */}
          <div className="hero-center-3d">
            <div className="hologram-stage">
              <video 
                className="hologram-stage-video" 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="./assets/images/futurix-3d-wireframe.jpg"
              >
                <source src="./assets/videos/futurix-civil.webm" type="video/webm" />
                <source src="./assets/videos/futurix-building.webm" type="video/webm" />
                <source src="./assets/videos/futurix-construction.mp4" type="video/mp4" />
              </video>
              
              {/* Telemetry HUD Labels */}
              <div className="bim-hud-tag tag-top">
                <span className="hud-dot"></span> 
                <span>BIM DIGITAL TWIN // ACTIVE {stats?.liveBimDigitalTwinPct || twinPct}%</span>
              </div>
              <div className="bim-hud-tag tag-crane">
                CRANE ID: CT-01 • HOOK LOAD: {stats?.craneLoadTons || craneLoad} T
              </div>
              <div className="bim-hud-tag tag-level">
                LEVEL {levelNum} • COMPOSITE SLAB
              </div>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="hero-right-cards">
            <div 
              className="feature-card-glass" 
              onMouseMove={handleCardMouseMove} 
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="card-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <div className="card-info">
                <h4>Smart Planning</h4>
                <span>Better Efficiency</span>
              </div>
            </div>

            <div 
              className="feature-card-glass" 
              onMouseMove={handleCardMouseMove} 
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="card-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className="card-info">
                <h4>Quality Materials</h4>
                <span>Long Lasting</span>
              </div>
            </div>

            <div 
              className="feature-card-glass" 
              onMouseMove={handleCardMouseMove} 
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="card-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="card-info">
                <h4>Expert Team</h4>
                <span>On Time Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
