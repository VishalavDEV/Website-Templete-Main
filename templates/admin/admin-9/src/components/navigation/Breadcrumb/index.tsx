/* src/components/navigation/Breadcrumb/index.tsx */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home, Share2, Download } from 'lucide-react';
import { useSettings } from '../../../app/providers/SettingsProvider';
import { Button } from '../../ui/Button';
import { useToast } from '../../../app/providers/ToastProvider';

export function Breadcrumb() {
  const location = useLocation();
  const { settings } = useSettings();
  const { toast } = useToast();
  
  const pathnames = location.pathname.split('/').filter(x => x);
  const style = settings.breadcrumbStyle;

  const isIcon = style === 'icon';
  const isSimple = style === 'simple';
  const isActions = style === 'actions';

  const breadcrumbList = (
    <nav className="flex items-center gap-1.5 text-xs text-muted-foreground select-none py-1">
      {/* Home Link */}
      {!isSimple && (
        <Link to="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-3.5 w-3.5 text-primary" />
        </Link>
      )}
      {isSimple && (
        <Link to="/" className="hover:text-foreground">Home</Link>
      )}

      {pathnames.length > 0 && <ChevronRight className="h-3 w-3" />}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

        return (
          <React.Fragment key={to}>
            {isLast ? (
              <span className="font-semibold text-foreground">{displayName}</span>
            ) : (
              <>
                <Link to={to} className="hover:text-foreground">{displayName}</Link>
                <ChevronRight className="h-3 w-3" />
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );

  if (isActions) {
    return (
      <div className="flex items-center justify-between gap-4 w-full border-b border-border/40 pb-2 mb-2 select-none">
        {breadcrumbList}
        <div className="flex gap-1.5 shrink-0">
          <Button 
            variant="outline" 
            size="sm" 
            leftIcon={<Share2 className="h-3.5 w-3.5" />}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success('Link copied to clipboard!');
            }}
          >
            Share
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            leftIcon={<Download className="h-3.5 w-3.5" />}
            onClick={() => toast.success('Report download initiated.')}
          >
            Export
          </Button>
        </div>
      </div>
    );
  }

  return breadcrumbList;
}
