import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, onClick, className = '', style, type = 'button' }) => {
  const btnClass = `btn btn-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={btnClass} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={btnClass} style={style}>
      {children}
    </button>
  );
};

export default Button;
