/**
 * Testimonials — Student quote cards.
 * @prop {Array} testimonials - Array of { id, quote, name, role, avatar }
 */
import PropTypes from 'prop-types';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const Testimonials = ({ testimonials }) => (
  <section className={styles.section} aria-label="Student testimonials">
    <div className="container">
      <div className={styles.header}>
        <h2 className="section-title">What Our Students Say</h2>
        <p className="section-subtitle">Hear from graduates who've gone on to shape their industries.</p>
      </div>
      <ul className={styles.grid}>
        {testimonials.map(t => (
          <li key={t.id} className={styles.card}>
            <Quote size={32} className={styles.quoteIcon} aria-hidden="true" />
            <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className={styles.author}>
              <img src={t.avatar} alt={`Portrait of ${t.name}`} className={styles.avatar} />
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Testimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default Testimonials;
