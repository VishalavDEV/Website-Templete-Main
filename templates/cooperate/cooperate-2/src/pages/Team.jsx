import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from '../components/Icons';
import { TEAM } from '../data/content';

export default function Team() {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div className="page-hero-header-grid">
            <div>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                PARTNERSHIP & SENIOR LEADERSHIP
              </p>
              <h1 className="page-hero-title">
                Experienced operators. <br />
                <span className="italic font-serif">Uncompromising rigor.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                Our leadership team unites former executive operators, institutional investors, mechanical engineers, and computer scientists. Every partner actively leads client teams from the frontline.
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="ORION Leadership Partnership"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* EDITORIAL PORTRAIT SPREAD (DIFFERENT IMAGE PROPORTIONS)        */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container section-py">
        <div style={{ marginBottom: '3.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Practice Leaders</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>Senior Partners</h2>
          </div>
          <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>6 Global Partners</p>
        </div>

        <div className="team-editorial-spread">
          {TEAM.map((member, idx) => {
            const isLarge = idx === 0 || idx === 3;
            const itemClass = isLarge ? 'team-spread-item-large' : 'team-spread-item-small';
            const frameAspect = isLarge ? '4/5' : '3/4';

            return (
              <div key={member.id} className={itemClass}>
                <div
                  className="team-spread-frame"
                  style={{ aspectRatio: frameAspect, cursor: 'pointer' }}
                  onClick={() => setSelectedPartner(selectedPartner?.id === member.id ? null : member)}
                >
                  <img src={member.image} alt={member.name} />
                  <div className="work-badge" style={{ top: '0.75rem', left: '0.75rem' }}>
                    {member.location}
                  </div>

                  {/* Bio Hover Overlay */}
                  <div className="team-bio-overlay" style={{ opacity: selectedPartner?.id === member.id ? 1 : undefined }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <p className="font-mono text-ochre" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Domain Focus</p>
                      <p className="font-serif" style={{ fontSize: '1.1rem', color: 'var(--bg-cream)' }}>{member.focus}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--bg-cream-300)', lineHeight: '1.5', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                        {member.bio}
                      </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '0.75rem', color: 'var(--accent-ochre)' }}>
                      <span>{member.experience}</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Name & Role beneath image */}
                <div style={{ paddingTop: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-charcoal)' }}>
                      {member.name}
                    </h3>
                    <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                      {member.role}
                    </p>
                  </div>
                  <span className="font-mono text-terracotta" style={{ fontSize: '0.85rem' }}>↗</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PARTNERSHIP COVENANT                                          */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py bg-cream-100 border-t">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="font-mono text-ochre" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>THE PARTNERSHIP COVENANT</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginTop: '0.5rem' }}>
                Direct engagement. Zero delegation to junior ranks.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              <p>
                In standard management consulting, senior partners sell the project and immediately delegate execution to recent university graduates.
              </p>
              <p>
                At ORION, we abolished the traditional pyramid model. Our ratio of partners to engagement associates is 1:2. Every strategic recommendation is researched, stress-tested, and defended directly by the partners whose names are on the cover.
              </p>
              <div>
                <Link to="/careers" className="btn-editorial-underline">
                  <span>Explore joining our partnership track</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
