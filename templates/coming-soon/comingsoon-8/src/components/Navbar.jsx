import React from 'react';
import { Zap, Volume2, VolumeX, PhoneCall } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export default function Navbar({ isAudioOn, setIsAudioOn, onReserveClick }) {
  const toggleAudio = () => {
    if (!isAudioOn) {
      audioEngine.startAmbient();
      setIsAudioOn(true);
    } else {
      audioEngine.stopAmbient();
      audioEngine.stopEngine();
      setIsAudioOn(false);
    }
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="brand-logo-group">
          <div className="brand-icon-box">
            <Zap size={20} className="brand-bolt-icon" />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">HTM 350 DUDE</span>
            <span className="brand-edition">STREET WEAPON // 2026</span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="nav-links">
          <a href="#hero" className="nav-link active">360° VIEW</a>
          <a href="#telemetry" className="nav-link">SPECS & TECH</a>
          <a href="#rev-chamber" className="nav-link">REV ROOM</a>
          <a href="#contact" className="nav-link">CONTACT & DEALERS</a>
        </nav>

        {/* Header Right Actions */}
        <div className="nav-actions">
          <button 
            className={`nav-audio-btn ${isAudioOn ? 'playing' : ''}`}
            onClick={toggleAudio}
            title={isAudioOn ? 'Audio active' : 'Click to enable audio'}
          >
            {isAudioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="audio-label">{isAudioOn ? 'SOUND ON' : 'SOUND OFF'}</span>
          </button>

          <a 
            href="#contact"
            id="nav-btn-contact"
            className="nav-reserve-btn"
          >
            <PhoneCall size={16} />
            <span>BOOK TEST RIDE</span>
          </a>
        </div>
      </div>
    </header>
  );
}
