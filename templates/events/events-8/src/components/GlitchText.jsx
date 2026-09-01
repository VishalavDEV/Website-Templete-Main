import React from 'react';

const GlitchText = ({ text, tag: Tag = 'h1', className = '', style = {} }) => {
  return (
    <Tag
      className={`glitch-effect ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        color: '#ffffff',
        fontFamily: "var(--font-heading)",
        ...style
      }}
    >
      {text}
    </Tag>
  );
};

export default GlitchText;
