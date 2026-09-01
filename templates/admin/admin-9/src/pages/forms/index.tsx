/* src/pages/forms/index.tsx */
import React, { useState } from 'react';
import { PageHeader } from '../../components/common';
import BasicFormsShowcase from './BasicForms';
import AdvancedFormsShowcase from './AdvancedForms';
import MultiStepFormsShowcase from './MultiStepForms';
import ValidationFormsShowcase from './ValidationForms';
import FileUploadFormsShowcase from './FileUploadForms';
import SearchFormsShowcase from './SearchForms';
import FilterFormsShowcase from './FilterForms';
import SettingsFormsShowcase from './SettingsForms';

type FormSection = 'basic' | 'advanced' | 'multistep' | 'validation' | 'fileupload' | 'search' | 'filter' | 'settings';

export default function FormsPage() {
  const [activeSection, setActiveSection] = useState<FormSection>('basic');

  const menuItems = [
    { key: 'basic', label: 'Basic Forms' },
    { key: 'advanced', label: 'Advanced Sections' },
    { key: 'multistep', label: 'Multi-Step Wizards' },
    { key: 'validation', label: 'Form Validations' },
    { key: 'fileupload', label: 'File Upload Forms' },
    { key: 'search', label: 'Search Form Inputs' },
    { key: 'filter', label: 'Filter Panels' },
    { key: 'settings', label: 'Account Settings' }
  ] as const;

  const renderActiveShowcase = () => {
    switch (activeSection) {
      case 'basic': return <BasicFormsShowcase />;
      case 'advanced': return <AdvancedFormsShowcase />;
      case 'multistep': return <MultiStepFormsShowcase />;
      case 'validation': return <ValidationFormsShowcase />;
      case 'fileupload': return <FileUploadFormsShowcase />;
      case 'search': return <SearchFormsShowcase />;
      case 'filter': return <FilterFormsShowcase />;
      case 'settings': return <SettingsFormsShowcase />;
      default: return <BasicFormsShowcase />;
    }
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader 
        title="Form Showcase Gallery" 
        subtitle="A reference playground illustrating input fields, repeatables, validators, and step wizards." 
      />

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Left vertical sidebar */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit shrink-0">
          <span className="text-[10px] text-muted-foreground uppercase font-bold px-3 py-1 mb-1">Form Categories</span>
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
