import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-muted-foreground py-2 select-none">
      <span className="flex items-center gap-1">
        <Home className="h-3.5 w-3.5" />
      </span>
      {items.length > 0 && <ChevronRight className="h-3 w-3" />}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className="font-semibold text-foreground">{item.label}</span>
            ) : (
              <>
                {item.href ? (
                  <a href={item.href} className="hover:text-foreground">{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )}
                <ChevronRight className="h-3 w-3" />
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
