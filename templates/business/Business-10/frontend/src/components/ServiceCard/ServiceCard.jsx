import { motion } from 'framer-motion';
import {
  Code2, Smartphone, Cloud, BarChart3, Shield, Layers,
  Target, Users, Lightbulb, Search, PenTool, Rocket,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import './ServiceCard.css';

// Map icon name strings (from data file) to Lucide components
const iconMap = {
  Code2, Smartphone, Cloud, BarChart3, Shield, Layers,
  Target, Users, Lightbulb, Search, PenTool, Rocket,
};

/**
 * Animated service card used on the Services page and Home overview.
 *
 * @param {Object} service - service data object
 * @param {Function} onLearnMore - callback when "Learn More" is clicked
 * @param {number} index - for staggered animation delay
 */
const ServiceCard = ({ service, onLearnMore, index = 0 }) => {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      style={{ '--accent': service.color }}
      aria-label={`Service: ${service.title}`}
    >
      {/* Icon */}
      <div className="service-card__icon" aria-hidden="true">
        <IconComponent size={24} />
      </div>

      {/* Content */}
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.shortDescription}</p>

        {/* Benefits list */}
        <ul className="service-card__benefits" aria-label="Key benefits">
          {service.benefits.map((b) => (
            <li key={b} className="service-card__benefit">
              <CheckCircle2 size={13} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <motion.button
        className="service-card__cta"
        onClick={() => onLearnMore && onLearnMore(service)}
        whileHover={{ gap: '0.6rem' }}
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <motion.span whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
          <ArrowRight size={15} aria-hidden="true" />
        </motion.span>
      </motion.button>

      {/* Decorative glow */}
      <div className="service-card__glow" aria-hidden="true" />
    </motion.article>
  );
};

export default ServiceCard;
