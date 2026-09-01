import React from 'react';

export function Divider({ variant = 'single', className = '' }) {
  if (variant === 'double') {
    return <div className={`w-full border-t-[3px] border-double border-[#D1CDC4] my-6 ${className}`} />;
  }
  if (variant === 'thick') {
    return <div className={`w-full border-t-2 border-[#141413] my-6 ${className}`} />;
  }
  return <div className={`w-full border-t border-[#E8E5DC] my-6 ${className}`} />;
}
