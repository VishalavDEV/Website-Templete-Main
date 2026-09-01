import React from 'react';

const SectionTitle = ({ subheading, title, align = 'center', color = 'white' }) => {
  return (
    <div style={{ textAlign: align, marginBottom: '3.5rem' }}>
      {subheading && <div className="subheading">{subheading}</div>}
      <h2 className="heading-section" style={{ color: color === 'yellow' ? 'var(--color-yellow)' : '#FFFFFF' }}>
        {title}
      </h2>
      <div style={{
        width: '60px',
        height: '4px',
        background: 'var(--gradient-yellow)',
        margin: align === 'center' ? '0.75rem auto 0' : '0.75rem 0 0',
        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
      }} />
    </div>
  );
};

export default SectionTitle;
