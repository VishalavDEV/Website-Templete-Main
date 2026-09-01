import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatBreadcrumb = (string) => {
    return string
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <nav className="flex items-center space-x-1.5 text-xs text-slate-400 font-medium">
      <Link to="/" className="flex items-center hover:text-neura-cyan transition-colors">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            {isLast ? (
              <span className="text-neura-cyan font-bold truncate max-w-[150px] sm:max-w-none">
                {formatBreadcrumb(name)}
              </span>
            ) : (
              <Link to={routeTo} className="hover:text-white transition-colors truncate max-w-[120px] sm:max-w-none">
                {formatBreadcrumb(name)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
