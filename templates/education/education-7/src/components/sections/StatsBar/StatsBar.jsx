/**
 * StatsBar — Animated counter strip showing key university statistics.
 * @prop {Array} stats - Array of { id, value, label }
 */
import PropTypes from 'prop-types';
import styles from './StatsBar.module.css';

const StatsBar = ({ stats }) => (
  <section className={styles.statsBar} aria-label="Key statistics">
    <div className="container">
      <ul className={styles.grid}>
        {stats.map(stat => (
          <li key={stat.id} className={styles.item}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

StatsBar.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, value: PropTypes.string, label: PropTypes.string })
  ).isRequired,
};

export default StatsBar;
