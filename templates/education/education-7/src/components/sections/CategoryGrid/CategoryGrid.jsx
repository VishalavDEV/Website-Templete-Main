/**
 * CategoryGrid — Responsive icon grid of department/category cards.
 * @prop {Array} categories - Array of { id, label, icon }
 */
import PropTypes from 'prop-types';
import * as Icons from 'lucide-react';
import styles from './CategoryGrid.module.css';

const CategoryGrid = ({ categories }) => (
  <section className={styles.section} aria-label="Browse by department">
    <div className="container">
      <div className={styles.header}>
        <h2 className="section-title">Browse by Department</h2>
        <p className="section-subtitle">Explore our faculties and find the programme that matches your passion.</p>
      </div>
      <ul className={styles.grid}>
        {categories.map(cat => {
          const Icon = Icons[cat.icon] || Icons.BookOpen;
          return (
            <li key={cat.id}>
              <button className={styles.card} aria-label={`Browse ${cat.label}`}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon size={28} />
                </span>
                <span className={styles.label}>{cat.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, label: PropTypes.string, icon: PropTypes.string })
  ).isRequired,
};

export default CategoryGrid;
