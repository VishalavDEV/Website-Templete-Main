import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({
  badge = 'VANTAGE ADVISORY',
  title,
  highlight,
  description,
  breadcrumbs = [{ label: 'Home', path: '/' }],
}) {
  return (
    <section
      style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        backgroundColor: '#111111',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="grid-lines-bg"
    >
      <div className="container">
        {/* Breadcrumb row */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#9B9B9B',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  style={{ color: '#9B9B9B', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: '#C8F169' }}>{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Section Label */}
        <div className="section-label">{badge}</div>

        {/* Main Page Title */}
        <h1
          className="hero-title"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(44px, 6.5vw, 90px)',
            lineHeight: 1,
            marginBottom: '24px',
            maxWidth: '1100px',
          }}
        >
          {title}{' '}
          {highlight && <span className="accent-text">{highlight}</span>}
        </h1>

        {/* Page Description */}
        {description && (
          <p
            className="subheading"
            style={{
              maxWidth: '780px',
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
