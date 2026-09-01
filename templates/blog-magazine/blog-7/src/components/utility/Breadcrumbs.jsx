import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs font-mono text-[#73736C]">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:text-[#141413] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Front Page</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-[#D1CDC4]" />
            {item.path ? (
              <Link to={item.path} className="hover:text-[#141413] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#141413] font-bold truncate max-w-xs">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
