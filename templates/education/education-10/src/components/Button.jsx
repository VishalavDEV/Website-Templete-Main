import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = '',
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  ...props
}) {
  const classes = `btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`;

  const motionProps = {
    whileHover: disabled || loading ? {} : { scale: 1.03, y: -2 },
    whileTap: disabled || loading ? {} : { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  const content = (
    <>
      {loading && <span className="spinner" aria-hidden="true" />}
      {children}
    </>
  );

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <Link to={to} className={classes} {...props}>{content}</Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{content}</a>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {content}
    </motion.button>
  );
}
