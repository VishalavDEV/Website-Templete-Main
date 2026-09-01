import React from 'react';
import { Card } from '../../../components/ui/Card';
import { ChevronRight, Home, Settings } from 'lucide-react';

export default function BreadcrumbsShowcase() {
  return (
    <div className="space-y-6">
      <Card title="Standard Breadcrumbs navigation">
        <nav className="flex items-center gap-2 text-xs font-semibold text-muted-foreground select-none">
          <a href="#" className="hover:text-foreground flex items-center gap-1.5"><Home className="h-3.5 w-3.5" /> Home</a>
          <ChevronRight className="h-3 w-3" />
          <a href="#" className="hover:text-foreground">Users Portal</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Diana Prince Matrix</span>
        </nav>
      </Card>

      <Card title="Breadcrumbs with settings indicator">
        <nav className="flex items-center gap-2 text-xs font-semibold text-muted-foreground select-none">
          <a href="#" className="hover:text-foreground flex items-center gap-1.5"><Settings className="h-3.5 w-3.5" /> Settings</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Appearance Themes Configuration</span>
        </nav>
      </Card>
    </div>
  );
}
