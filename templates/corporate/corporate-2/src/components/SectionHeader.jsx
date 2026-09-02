import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';

export default function SectionHeader({
  eyebrow,
  title,
  serifWord,
  description,
  linkText,
  linkTo,
  dark = false,
  className = ""
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        paddingBottom: '2rem',
        borderBottom: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border-light)'
      }}
      className={className}
    >
      <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {eyebrow && (
          <p
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: dark ? 'var(--accent-ochre)' : 'var(--accent-terracotta)'
            }}
          >
            {eyebrow}
          </p>
        )}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-0.025em',
            color: dark ? 'var(--bg-cream)' : 'var(--text-charcoal)'
          }}
        >
          {serifWord ? (
            <>
              {title.replace(serifWord, '')}
              <span className="italic font-serif">{serifWord}</span>
            </>
          ) : (
            title
          )}
        </h2>
        {description && (
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.6',
              color: dark ? 'var(--bg-cream-300)' : 'var(--text-secondary)'
            }}
          >
            {description}
          </p>
        )}
      </div>

      {linkText && linkTo && (
        <div style={{ flexShrink: 0 }}>
          <Link
            to={linkTo}
            className="btn-editorial-underline"
            style={{ color: dark ? 'var(--bg-cream)' : 'var(--text-charcoal)' }}
          >
            <span>{linkText}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}
