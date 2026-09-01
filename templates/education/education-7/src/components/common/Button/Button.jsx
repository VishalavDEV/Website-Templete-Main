/**
 * Button — Reusable button component
 * @prop {('primary'|'outline'|'ghost'|'accent')} variant
 * @prop {('sm'|'md'|'lg')} size
 * @prop {string} [className]
 * @prop {React.ReactNode} children
 * @prop {Function} [onClick]
 * @prop {string} [type]
 * @prop {boolean} [disabled]
 */
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', size = 'md', className = '', children, ...rest }) => {
  return (
    <button
      className={[styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'outline', 'ghost', 'accent']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
