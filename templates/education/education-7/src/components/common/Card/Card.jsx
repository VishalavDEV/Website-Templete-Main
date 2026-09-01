/**
 * Card — Base card wrapper with optional hover lift
 * @prop {React.ReactNode} children
 * @prop {boolean} [hover] - Enable hover lift effect
 * @prop {string} [className]
 */
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ children, hover = false, className = '', ...rest }) => (
  <div
    className={[styles.card, hover ? styles.hover : '', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
