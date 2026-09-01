import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ArrowLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  href,
  onClick,
  children,
  className = ''
}) => {
  const content = (
    <span className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#191919] group hover:text-[#191919]/80 transition-colors ${className}`}>
      <span>{children}</span>
      <ArrowRight className="w-3.5 h-3.5 text-[#191919]/60 group-hover:text-[#191919] group-hover:translate-x-0.5 transition-all duration-200" />
    </span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="cursor-pointer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="cursor-pointer focus:outline-none">
      {content}
    </button>
  );
};
