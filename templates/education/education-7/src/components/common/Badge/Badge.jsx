/**
 * Badge — Pill label for course/product tags
 * @prop {string} label
 * @prop {('default'|'accent'|'success'|'info')} variant
 */
import PropTypes from 'prop-types';
import styles from './Badge.module.css';

const Badge = ({ label, variant = 'default' }) => (
  <span className={[styles.badge, styles[variant]].join(' ')}>{label}</span>
);

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'accent', 'success', 'info']),
};

export default Badge;
