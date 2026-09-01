/* src/pages/tables/index.tsx */
import React, { useState } from 'react';
import { PageHeader } from '../../components/common';
import BasicTablesShowcase from './BasicTables';
import DataTablesShowcase from './DataTables';
import AdvancedTablesShowcase from './AdvancedTables';
import ResponsiveTablesShowcase from './ResponsiveTables';
import EditableTablesShowcase from './EditableTables';
import SpecializedTablesShowcase from './SpecializedTables';

type TableSection = 'basic' | 'data' | 'advanced' | 'responsive' | 'editable' | 'specialized';

export default function TablesPage() {
  const [activeSection, setActiveSection] = useState<TableSection>('basic');

  const menuItems = [
    { key: 'basic', label: 'Basic Tables' },
    { key: 'data', label: 'Data Tables (Sort/Filter)' },
    { key: 'advanced', label: 'Advanced & Expandable' },
    { key: 'responsive', label: 'Responsive Tables' },
    { key: 'editable', label: 'Editable Tables' },
    { key: 'specialized', label: 'Specialized (Comparison)' }
  ] as const;

  const renderActiveShowcase = () => {
    switch (activeSection) {
      case 'basic': return <BasicTablesShowcase />;
      case 'data': return <DataTablesShowcase />;
      case 'advanced': return <AdvancedTablesShowcase />;
      case 'responsive': return <ResponsiveTablesShowcase />;
      case 'editable': return <EditableTablesShowcase />;
      case 'specialized': return <SpecializedTablesShowcase />;
      default: return <BasicTablesShowcase />;
    }
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader 
        title="Table Showcase Gallery" 
        subtitle="A reference playground illustrating compact grids, sorting headers, expandable rows, and editing interfaces." 
      />

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Left vertical sidebar */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit shrink-0">
          <span className="text-[10px] text-muted-foreground uppercase font-bold px-3 py-1 mb-1">Table Categories</span>
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
            {menuItems.find(m => m.key === activeSection)?.label} Gallery
          </h2>
          <div className="animate-in fade-in duration-200">
            {renderActiveShowcase()}
          </div>
        </div>
      </div>
    </div>
  );
}
