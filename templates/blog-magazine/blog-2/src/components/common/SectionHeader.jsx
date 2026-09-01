import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ParticleText from '../typography/ParticleText';

export function SectionHeader({
  label,
  title,
  subtitle,
  linkText,
  linkTo,
  useParticleText = false,
  className = ''
}) {
  return (
    <div
      className={`section-header ${className}`}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '2.5rem',
        borderBottom: '1px solid var(--border-light)',
        paddingBottom: '1.25rem',
        gap: '1rem'
      }}
    >
      <div>
        {label && <div className="section-label">{label}</div>}

        {useParticleText ? (
          <ParticleText text={title} fontSize={32} />
        ) : (
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.2rem',
              color: 'var(--text-ink)',
              letterSpacing: '-0.015em'
            }}
          >
            {title}
          </h2>
        )}

        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.1rem',
              color: 'var(--text-ink-secondary)',
              marginTop: '0.4rem',
              maxWidth: '680px'
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {linkText && linkTo && (
        <Link
          to={linkTo}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--accent-terracotta)',
            paddingBottom: '4px'
          }}
          className="section-header-link"
        >
          <span>{linkText}</span>
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
