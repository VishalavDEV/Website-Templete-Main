import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-xs md:text-sm text-[var(--secondary-color)] ${className}`}>
      <Link
        to="/"
        className="inline-flex items-center gap-1 hover:text-[var(--text-color)] transition-colors duration-200"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-[var(--border-color)]" />
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="hover:text-[var(--text-color)] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-[var(--text-color)] truncate max-w-[200px] md:max-w-[300px]">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
