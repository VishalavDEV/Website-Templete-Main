/* src/pages/components/index.tsx */
import React, { useState } from 'react';
import { PageHeader } from '../../components/common';
import ButtonsShowcase from './Buttons';
import CardsShowcase from './Cards';
import ModalsShowcase from './Modals';
import AlertsShowcase from './Alerts';
import AvatarsShowcase from './Avatars';
import BadgesShowcase from './Badges';
import BreadcrumbsShowcase from './Breadcrumbs';
import ProgressShowcase from './Progress';
import ToastsShowcase from './Toasts';

type ComponentSection = 'buttons' | 'cards' | 'modals' | 'alerts' | 'avatars' | 'badges' | 'breadcrumbs' | 'progress' | 'toasts';

export default function UIComponentsPage() {
  const [activeSection, setActiveSection] = useState<ComponentSection>('buttons');

  const menuItems = [
    { key: 'buttons', label: 'Buttons & Splits' },
    { key: 'cards', label: 'Cards & Stats' },
    { key: 'modals', label: 'Modals & Overlays' },
    { key: 'alerts', label: 'Alert Banners' },
    { key: 'avatars', label: 'Avatars & Presence' },
    { key: 'badges', label: 'Badge Tags' },
    { key: 'breadcrumbs', label: 'Breadcrumb Paths' },
    { key: 'progress', label: 'Progress & Spinners' },
    { key: 'toasts', label: 'Toast Notifications' }
  ] as const;

  const renderActiveShowcase = () => {
    switch (activeSection) {
      case 'buttons': return <ButtonsShowcase />;
      case 'cards': return <CardsShowcase />;
      case 'modals': return <ModalsShowcase />;
      case 'alerts': return <AlertsShowcase />;
      case 'avatars': return <AvatarsShowcase />;
      case 'badges': return <BadgesShowcase />;
      case 'breadcrumbs': return <BreadcrumbsShowcase />;
      case 'progress': return <ProgressShowcase />;
      case 'toasts': return <ToastsShowcase />;
      default: return <ButtonsShowcase />;
    }
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader 
        title="Design System Playground" 
        subtitle="A high-fidelity reference library of interactive UI components and design tokens." 
      />

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Left vertical sidebar */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit shrink-0">
          <span className="text-[10px] text-muted-foreground uppercase font-bold px-3 py-1 mb-1">Catalog Primitives</span>
          {menuItems.map((item) => (
            <button 
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeSection === item.key ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right canvas preview workspace */}
        <div className="lg:col-span-3 bg-muted/5 border border-border/80 rounded-xl p-6 min-h-[400px]">
          <h2 className="text-sm font-extrabold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2.5">
            {menuItems.find(m => m.key === activeSection)?.label} Showcase
          </h2>
          <div className="animate-in fade-in duration-200">
            {renderActiveShowcase()}
          </div>
        </div>
      </div>
    </div>
  );
}
