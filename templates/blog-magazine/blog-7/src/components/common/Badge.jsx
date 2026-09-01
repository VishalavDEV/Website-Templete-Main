import React from 'react';

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-[#F4F1EA] text-[#4A4A45] border border-[#E8E5DC]',
    crimson: 'bg-[#D43825]/10 text-[#D43825] border border-[#D43825]/20 font-bold',
    ochre: 'bg-[#C28B38]/10 text-[#966822] border border-[#C28B38]/20 font-bold',
    sage: 'bg-[#2D5A46]/10 text-[#2D5A46] border border-[#2D5A46]/20 font-bold',
    cobalt: 'bg-[#1E4D8C]/10 text-[#1E4D8C] border border-[#1E4D8C]/20 font-bold',
    ink: 'bg-[#141413] text-[#FAF9F5] border border-[#141413]',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[0.6875rem] uppercase tracking-wider font-semibold rounded-none ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}
