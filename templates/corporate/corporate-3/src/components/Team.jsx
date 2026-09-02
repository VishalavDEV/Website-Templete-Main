import React from 'react';
import { Link } from 'react-router-dom';
import { teamData } from '../data/team';

export default function Team({ limit = 3, showHeader = true }) {
  const displayTeam = teamData.slice(0, limit);

  return (
    <section
      style={{
        padding: '90px 0',
        backgroundColor: '#191919',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        {showHeader && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '20px',
              marginBottom: '48px',
            }}
          >
            <div>
              <div className="section-label">EXECUTIVE PARTNERSHIP</div>
              <h2 className="section-title" style={{ color: '#FFFFFF' }}>
                THE EXECUTIVE WALL
              </h2>
            </div>
            <Link to="/team" className="btn btn-secondary">
              <span>Complete Leadership</span>
              <span className="arrow-glyph">→</span>
            </Link>
          </div>
        )}

        {/* ASYMMETRIC STAGGERED EXECUTIVE WALL */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px 32px',
          }}
          className="executive-wall-grid"
        >
          {displayTeam.map((member, idx) => {
            const isTaller = idx % 2 === 0;

            return (
              <div
                key={member.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginTop: idx === 1 ? '24px' : '0px',
                }}
              >
                {/* Portrait Container */}
                <div
                  style={{
                    height: isTaller ? '380px' : '320px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    position: 'relative',
                    backgroundColor: '#111111',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%) contrast(120%) brightness(85%)',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.03)';
                      e.currentTarget.style.filter = 'grayscale(30%) contrast(110%) brightness(95%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'grayscale(100%) contrast(120%) brightness(85%)';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(17, 17, 17, 0.9)',
                      padding: '4px 8px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#C8F169',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {member.location}
                  </div>
                </div>

                {/* Name, Role & Bio OUTSIDE image */}
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      letterSpacing: '0.02em',
                      marginBottom: '2px',
                    }}
                  >
                    {member.name}
                  </h3>

                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#C8F169',
                      marginBottom: '8px',
                    }}
                  >
                    {member.role}
                  </div>

                  <p style={{ fontSize: '13px', color: '#9B9B9B', lineHeight: 1.55, marginBottom: '10px' }}>
                    {member.bio}
                  </p>

                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#899DFF',
                      paddingTop: '8px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {member.stats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
