import * as Icons from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Features Section Component
 * Displays a list/grid of college features/advantages dynamically.
 * 
 * @param {Object} props
 * @param {Array} [props.featuresList] - Optional custom features array to render
 */
export default function Features({ featuresList }) {
  const list = featuresList || contentData.features;

  // Helper to render dynamic Lucide icon
  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    if (!IconComponent) return <Icons.HelpCircle className="feature-icon" size={32} />;
    return <IconComponent className="feature-icon" size={32} />;
  };

  return (
    <section className="features-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary">Why Apex?</span>
          <h2>Why Choose Our Institution</h2>
          <p>We combine academic rigor with practical experience to prepare you for global success.</p>
        </div>

        <div className="grid-2 features-grid">
          {list.map((feature) => (
            <div key={feature.id} className="feature-row card fade-in">
              <div className="feature-icon-container">
                {renderIcon(feature.icon)}
              </div>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
