import { motion } from 'framer-motion';
import './Button.css';

/**
 * Reusable Button component with multiple variants and animated hover states.
 *
 * @param {string} variant - 'primary' | 'secondary' | 'ghost' | 'outline'
 * @param {string} size    - 'sm' | 'md' | 'lg'
 * @param {boolean} loading - shows spinner and disables the button
 * @param {boolean} fullWidth - stretches to 100% width
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
  className = '',
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
      whileHover={isDisabled ? {} : { scale: 1.03, y: -1 }}
      whileTap={isDisabled ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      aria-busy={loading}
      {...rest}
    >
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      {!loading && icon && iconPosition === 'left' && (
        <span className="btn__icon btn__icon--left">{icon}</span>
      )}
      <span className="btn__label">{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <motion.span
          className="btn__icon btn__icon--right"
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;
