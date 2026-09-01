import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0 || location.pathname === '/dashboard') {
    return (
      <nav className="flex items-center text-xs text-slate-400 mb-4">
        <Home className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
        <span className="font-semibold text-slate-600 dark:text-slate-300">Dashboard</span>
      </nav>
    );
  }

  return (
    <nav className="flex items-center text-xs text-slate-400 mb-4 overflow-x-auto whitespace-nowrap">
      <Link to="/dashboard" className="flex items-center hover:text-slate-600 dark:hover:text-slate-200">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Dashboard</span>
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const formattedName = name
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase());

        return (
          <React.Fragment key={routeTo}>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-slate-400 shrink-0" />
            {isLast ? (
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                {formattedName}
              </span>
            ) : (
              <Link to={routeTo} className="hover:text-slate-600 dark:hover:text-slate-200">
                {formattedName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
