import React, { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  ExternalLink,
  Save,
  Download,
  Share2,
  Plus,
  X,
  ChevronDown,
  Eye,
  Check,
  ArrowLeft,
  RotateCw
} from 'lucide-react';

export default function BuilderTopBar({
  template,
  allTemplates = [],
  onSelectTemplate,
  tabs,
  activeTab,
  onSelectTab,
  onAddTab,
  onCloseTab,
  viewport,
  onChangeViewport,
  orientation,
  onToggleOrientation,
  onSave,
  onExport,
  onDownload,
  onExit
}) {
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveClick = () => {
    onSave();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const demoUrl = template?.demoUrl || `/templates/${(template?.category?.slug || 'admin').toLowerCase()}/${template?.slug}/index.html`;

  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-5 flex items-center justify-between select-none z-30 shadow-xs relative">
      {/* Left: Brand Logo / Back, Template Selector & Page Tabs */}
      <div className="flex items-center gap-3">
        {/* Back / Exit button */}
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200 cursor-pointer shadow-2xs"
          title="Exit Builder & Return to Catalog"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Templates</span>
        </button>

        {/* Template Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowTemplateDropdown(!showTemplateDropdown)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 transition-all cursor-pointer max-w-[200px] sm:max-w-[240px] shadow-2xs"
            title="Switch Active Template"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="truncate">{template?.name || 'Select Template'}</span>
            <ChevronDown size={14} className="text-slate-400 shrink-0" />
          </button>

          {showTemplateDropdown && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowTemplateDropdown(false)}
              />
              <div className="absolute left-0 top-full mt-2 w-72 max-h-80 overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-xl z-50 p-2 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Switch Active Workspace
                </div>
                {allTemplates.slice(0, 30).map((t) => (
                  <button
                    key={`${t.id}-${t.slug}`}
                    onClick={() => {
                      onSelectTemplate(t);
                      setShowTemplateDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      t.id === template?.id
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="truncate mr-2">{t.name}</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider shrink-0">
                      {t.category?.name || 'Template'}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Page Tab System */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => onSelectTab(tab)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                activeTab === tab
                  ? 'bg-white text-blue-600 shadow-xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>{tab}</span>
              {tabs.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCloseTab(tab);
                  }}
                  className="text-slate-400 hover:text-rose-500 rounded p-0.5"
                  title="Close tab"
                >
                  <X size={11} />
                </button>
              )}
            </div>
          ))}
          <button
            onClick={onAddTab}
            className="p-1 text-slate-500 hover:text-slate-900 hover:bg-white rounded-full transition-colors cursor-pointer mr-1"
            title="Create New Page Tab"
          >
            <Plus size={13} />
          </button>
        </div>
      </div>

      {/* Center: Viewport Switcher Controls */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center bg-slate-100/90 p-1 rounded-full border border-slate-200">
          <button
            onClick={() => onChangeViewport('builder')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewport === 'builder'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Canvas Mode (Interactive full width)"
          >
            <Maximize2 size={13} />
            <span className="hidden lg:inline">Canvas</span>
          </button>

          <button
            onClick={() => onChangeViewport('desktop')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewport === 'desktop'
                ? 'bg-white text-blue-600 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Desktop (100% full preview)"
          >
            <Monitor size={13} />
            <span className="hidden sm:inline">Desktop</span>
          </button>

          <button
            onClick={() => onChangeViewport('tablet')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewport === 'tablet'
                ? 'bg-white text-blue-600 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Tablet (iPad View)"
          >
            <Tablet size={13} />
            <span className="hidden sm:inline">Tablet</span>
          </button>

          <button
            onClick={() => onChangeViewport('mobile')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewport === 'mobile'
                ? 'bg-white text-blue-600 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Mobile (iPhone View)"
          >
            <Smartphone size={13} />
            <span className="hidden sm:inline">Mobile</span>
          </button>

          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-white rounded-full transition-colors cursor-pointer ml-0.5"
            title="Open in new window"
          >
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Orientation Toggle (for Mobile / Tablet) */}
        {(viewport === 'mobile' || viewport === 'tablet') && (
          <button
            onClick={onToggleOrientation}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
            title="Toggle Portrait / Landscape Orientation"
          >
            <RotateCw size={13} className="text-blue-600" />
            <span className="capitalize">{orientation}</span>
          </button>
        )}
      </div>

      {/* Right: Actions (Live Demo, Save, Export, Download) */}
      <div className="flex items-center gap-2.5">
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200 no-underline cursor-pointer shadow-2xs"
          title="Preview Live Demo in Fullscreen"
        >
          <Eye size={13} className="text-blue-600" />
          <span>Live Demo</span>
        </a>

        <button
          onClick={handleSaveClick}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow transition-all cursor-pointer active:scale-95"
          style={{ boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)' }}
          title="Save Workspace Changes"
        >
          {saveSuccess ? (
            <>
              <Check size={14} className="animate-bounce" />
              <span>Saved!</span>
            </>
          ) : (
            <>
              <Save size={13} />
              <span>Save</span>
            </>
          )}
        </button>

        <button
          onClick={onExport}
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all cursor-pointer shadow-2xs"
          title="Export JSON Configuration"
        >
          <Share2 size={13} />
          <span>Export</span>
        </button>

        <button
          onClick={onDownload}
          className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white transition-all cursor-pointer active:scale-95 shadow-md"
          style={{
            background: 'linear-gradient(135deg, #0088ff 0%, #0044cc 100%)',
            boxShadow: '0 4px 14px rgba(0, 102, 255, 0.25)'
          }}
          title="Download Project Bundle"
        >
          <Download size={13} />
          <span>Download</span>
        </button>
      </div>
    </header>
  );
}
