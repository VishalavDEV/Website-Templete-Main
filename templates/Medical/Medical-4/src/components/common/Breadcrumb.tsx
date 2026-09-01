import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items?: { label: string; path?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();

  // If items are not explicitly provided, generate from current pathname
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <div className="bg-white/15 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full inline-flex items-center gap-2 text-xs text-blue-100 shadow-sm">
      <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors font-bold">
        <Home className="w-3.5 h-3.5 text-blue-300" />
        <span>Home</span>
      </Link>
      {items ? (
        items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-blue-300/70" />
            {item.path ? (
              <Link to={item.path} className="hover:text-white transition-colors font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-bold">{item.label}</span>
            )}
          </React.Fragment>
        ))
      ) : (
        pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-blue-300/70" />
              {isLast ? (
                <span className="text-white font-bold capitalize">{formattedSegment}</span>
              ) : (
                <Link to={path} className="hover:text-white transition-colors font-medium capitalize">
                  {formattedSegment}
                </Link>
              )}
            </React.Fragment>
          );
        })
      )}
    </div>
  );
};

