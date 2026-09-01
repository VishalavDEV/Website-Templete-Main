import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trophy, Users, Shield, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>OUR STORY & MISSION</div>
          <h1 className="font-display text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            MORE THAN A RACE.
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '680px', margin: '16px auto 0 auto', fontSize: '1.1rem' }}>
            Vayora Runfest is a city marathon experience designed to bring runners, families, communities and supporters together on one unforgettable road.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '80px'
        }}>
          {/* Left Large Runner Image */}
          <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden', padding: '12px' }}>
            <img 
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=80" 
              alt="Runner in action"
              style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>

          {/* Right Story Content */}
          <div>
            <span style={{ color: 'var(--bright-orange)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              THE VAYORA VISION
            </span>
            <h2 className="font-display" style={{ fontSize: '2.8rem', color: '#FFFFFF', margin: '12px 0 20px 0', lineHeight: 1 }}>
              CELEBRATING MOVEMENT, GLORY & COMMUNITY
            </h2>
            <p style={{ color: 'var(--warm-white)', opacity: 0.9, lineHeight: 1.7, marginBottom: '20px' }}>
              Founded in Chennai, Vayora Runfest was born from a simple belief: every runner who steps onto the asphalt has a story worth honoring. Whether you are chasing an elite podium, completing your first 21.1K, or walking with your children in the 3K Family Run, the road belongs to you.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              {[
                "Personal Achievement",
                "Community Solidarity",
                "Healthy Active Living",
                "Environmental Sustainability",
                "Youth Athletic Support",
                "Sportsmanship Pride"
              ].map((value, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warm-white)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--bright-orange)" />
                  <span>{value}</span>
                </div>
              ))}
            </div>

            <Link to="/register" className="btn-primary">
              JOIN THE 2026 RUN <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
