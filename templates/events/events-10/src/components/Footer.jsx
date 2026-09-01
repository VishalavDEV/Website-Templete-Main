import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Globe, Tv, Radio, MessageSquare, Share2 } from 'lucide-react';
import { tournamentData } from '../data/tournamentData';

export const Footer = () => {
  return (
    <footer style={{ background: '#080808', borderTop: '2px solid var(--border-orange)', paddingTop: '70px', paddingBottom: '30px', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" className="navbar-brand" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              <div className="brand-icon">
                <Flame size={24} color="#ffffff" />
              </div>
              <div className="brand-text">
                <span className="brand-title">{tournamentData.info.name}</span>
                <span className="brand-subtitle">CHENNAI 2026</span>
              </div>
            </Link>
            <p className="font-sports" style={{ fontSize: '1.1rem', color: '#ff7518', letterSpacing: '1px', marginBottom: '16px' }}>
              “{tournamentData.info.tagline}”
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.6 }}>
              The definitive international basketball tournament connecting elite teams, athletes, and fans under dramatic arena lights.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div>
            <h4 className="font-sports" style={{ fontSize: '1.2rem', color: '#ff4d00', letterSpacing: '1.5px', marginBottom: '16px' }}>
              MAIN NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem', fontFamily: 'var(--font-sports)', color: 'var(--white)' }}>
              <li><Link to="/" style={{ color: 'var(--white)' }}>HOME</Link></li>
              <li><Link to="/about" style={{ color: 'var(--white)' }}>TOURNAMENT OVERVIEW</Link></li>
              <li><Link to="/teams" style={{ color: 'var(--white)' }}>TEAMS DIRECTORY</Link></li>
              <li><Link to="/players" style={{ color: 'var(--white)' }}>PLAYERS & ROSTERS</Link></li>
              <li><Link to="/matches" style={{ color: 'var(--white)' }}>MATCH SCHEDULE</Link></li>
              <li><Link to="/live-score" style={{ color: '#ff4d00' }}>🔴 LIVE BROADCAST DASHBOARD</Link></li>
            </ul>
          </div>

          {/* Tournament Hub */}
          <div>
            <h4 className="font-sports" style={{ fontSize: '1.2rem', color: '#ff4d00', letterSpacing: '1.5px', marginBottom: '16px' }}>
              TOURNAMENT HUB
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem', fontFamily: 'var(--font-sports)' }}>
              <li><Link to="/standings" style={{ color: 'var(--white)' }}>STANDINGS TABLE</Link></li>
              <li><Link to="/leaderboard" style={{ color: 'var(--white)' }}>LEADERBOARDS & MVP</Link></li>
              <li><Link to="/venues" style={{ color: 'var(--white)' }}>VENUES & ARENAS</Link></li>
              <li><Link to="/tickets" style={{ color: 'var(--white)' }}>TICKETS & HOSPITALITY</Link></li>
              <li><Link to="/registration" style={{ color: 'var(--white)' }}>TEAM REGISTRATION</Link></li>
              <li><Link to="/fan-zone" style={{ color: 'var(--white)' }}>FAN ZONE & POLLS</Link></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="font-sports" style={{ fontSize: '1.2rem', color: '#ff4d00', letterSpacing: '1.5px', marginBottom: '16px' }}>
              OFFICIAL CHANNELS
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '16px' }}>
              Follow live broadcast feeds, highlights, and behind-the-scenes courtside coverage.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" aria-label="Official Website" className="btn-secondary" style={{ padding: '10px' }}><Globe size={18} color="#ff4d00" /></a>
              <a href="#" aria-label="Live Stream TV" className="btn-secondary" style={{ padding: '10px' }}><Tv size={18} color="#ff4d00" /></a>
              <a href="#" aria-label="Courtside Broadcast Radio" className="btn-secondary" style={{ padding: '10px' }}><Radio size={18} color="#ff4d00" /></a>
              <a href="#" aria-label="Community Fan Chat" className="btn-secondary" style={{ padding: '10px' }}><MessageSquare size={18} color="#ff4d00" /></a>
              <a href="#" aria-label="Social Share" className="btn-secondary" style={{ padding: '10px' }}><Share2 size={18} color="#ff4d00" /></a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: 'var(--gray)' }}>
          <div>
            © 2026 {tournamentData.info.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="font-sports" style={{ color: '#ff7518', letterSpacing: '1px' }}>
            “BUILT FOR THE GAME.”
          </div>
        </div>
      </div>
    </footer>
  );
};
