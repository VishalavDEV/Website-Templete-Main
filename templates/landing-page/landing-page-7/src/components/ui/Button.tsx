import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'nav' | 'explore';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  let variantClass = 'btn-cta-primary';
  if (variant === 'secondary') variantClass = 'btn-cta-secondary';
  if (variant === 'nav') variantClass = 'btn-cta-nav';
  if (variant === 'explore') variantClass = 'btn-explore-project';

  return (
    <button className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};
