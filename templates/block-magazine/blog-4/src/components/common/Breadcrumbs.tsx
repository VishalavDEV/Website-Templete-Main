import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-[#78716C] dark:text-[#A39C90] py-2 overflow-x-auto no-scrollbar">
      <Link
        to="/"
        className="flex items-center hover:text-[#C85A32] dark:hover:text-white transition-colors shrink-0"
        title="Home"
      >
        <Home className="w-4 h-4 mr-1" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-[#A39C90] dark:text-[#78716C] shrink-0" />
            {isLast || !item.to ? (
              <span className="font-medium text-[#1C1917] dark:text-[#F7F4EE] truncate max-w-[240px] md:max-w-md">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="hover:text-[#C85A32] dark:hover:text-white transition-colors truncate max-w-[160px]"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
