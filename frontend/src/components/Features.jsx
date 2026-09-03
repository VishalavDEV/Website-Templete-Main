import React from 'react';
import { Code, Smartphone, Award, Feather, Layout, Zap } from 'lucide-react';

export default function Features({ features = [] }) {
  const defaultFeatures = [
    {
      id: 1,
      title: 'Art Of Coding',
      description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
      icon: 'code'
    },
    {
      id: 2,
      title: 'Responsive Design',
      description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
      icon: 'smartphone'
    },
    {
      id: 3,
      title: 'Feature Reach',
      description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
      icon: 'award'
    }
  ];

  const items = features && features.length > 0 ? features : defaultFeatures;

  const renderIcon = (iconName) => {
    switch (iconName?.toLowerCase()) {
      case 'code':
        return <Code size={36} strokeWidth={1.4} color="var(--accent)" />;
      case 'smartphone':
        return <Smartphone size={36} strokeWidth={1.4} color="var(--accent)" />;
      case 'award':
        return <Award size={36} strokeWidth={1.4} color="var(--accent)" />;
      default:
        return <Feather size={36} strokeWidth={1.4} color="var(--accent)" />;
    }
  };

  return (
    <section id="features" style={{
      backgroundColor: '#ffffff',
      color: '#1e293b',
      padding: '100px 0',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          alignItems: 'stretch'
        }}>
          {items.map((feat) => (
            <div
              key={feat.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '24px',
                borderRadius: '8px',
                transition: 'var(--transition-smooth)',
                backgroundColor: '#ffffff'
              }}
              className="feature-card"
            >
              {/* Icon Container */}
              <div style={{
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '4px',
                backgroundColor: 'rgba(23, 190, 210, 0.08)',
                transition: 'var(--transition-smooth)'
              }} className="icon-wrapper">
                {renderIcon(feat.icon)}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '16px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em'
              }}>
                {feat.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.96rem',
                lineHeight: 1.7,
                color: '#64748b'
              }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-card:hover {
          transform: translateY(-6px);
        }
        .feature-card:hover .icon-wrapper {
          background-color: var(--accent);
        }
        .feature-card:hover .icon-wrapper svg {
          stroke: #ffffff;
        }
      `}</style>
    </section>
  );
}
