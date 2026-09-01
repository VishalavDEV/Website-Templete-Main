import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const { projects, tasks, clients, users } = useApp();

  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0 || location.pathname === '/dashboard') return null;

  const getReadableLabel = (part: string, index: number): string => {
    // If it looks like an ID
    if (part.startsWith('p-')) {
      const proj = projects.find(p => p.id === part);
      if (proj) return proj.name;
    }
    if (part.startsWith('t-')) {
      const tsk = tasks.find(t => t.id === part);
      if (tsk) return tsk.title;
    }
    if (part.startsWith('c-')) {
      const client = clients.find(c => c.id === part);
      if (client) return client.name;
    }
    if (part.startsWith('u-')) {
      const user = users.find(u => u.id === part);
      if (user) return user.name;
    }

    // Standard title format
    return part
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <nav className="flex items-center gap-1.5 text-xs text-app-muted py-2.5 px-4 lg:px-6 overflow-x-auto max-w-full whitespace-nowrap">

      <Link to="/dashboard" className="hover:text-app-primary flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Home</span>
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const label = getReadableLabel(value, index);

        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-app-muted" />
            {isLast ? (
              <span className="font-semibold text-app-primary truncate max-w-xs">{label}</span>
            ) : (
              <Link to={to} className="hover:text-app-primary truncate max-w-xs transition-colors">
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
