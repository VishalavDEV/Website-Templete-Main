import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronDown,
  X,
  HelpCircle,
  Copy,
  Layers,
  Globe,
  GripVertical,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Check,
  Layout,
  ArrowUp,
  ArrowDown,
  Sparkles
} from 'lucide-react';
import { COLOR_PRESETS, GOOGLE_FONTS } from '../../services/builderStore';

export default function BuilderSettingsDrawer({
  activeDrawer,
  onClose,
  builderState,
  onUpdateState,
  onOpenMediaModal,
  onReorderSectionsInDOM
}) {
  const [colorPresetTab, setColorPresetTab] = useState('all'); // 'all' | 'light' | 'dark'
  const [openSubmenus, setOpenSubmenus] = useState({
    pageBase: false,
    metaTags: false,
    pageCustomCode: false,
    arrangeSections: true,
    headerTemplate: true,
    navDropdowns: false,
    headerImages: false,
    globalStyles: false
  });

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleColorChange = (key, value) => {
    onUpdateState({
      colors: {
        ...builderState.colors,
        [key]: value
      }
    });
  };

  const handlePresetSelect = (preset) => {
    onUpdateState({
      colors: { ...preset.colors },
      activePresetId: preset.id
    });
  };

  const handleSectionToggle = (sectionId) => {
    const nextSections = builderState.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, enabled: !sec.enabled } : sec
    );
    onUpdateState({ sections: nextSections });
  };

  const moveSection = (index, direction) => {
    const newIdx = index + direction;
    if (newIdx < 0 || newIdx >= builderState.sections.length) return;
    const nextSections = [...builderState.sections];
    const [moved] = nextSections.splice(index, 1);
    nextSections.splice(newIdx, 0, moved);
    onUpdateState({ sections: nextSections });
    if (onReorderSectionsInDOM) {
      onReorderSectionsInDOM(nextSections);
    }
  };

  if (!activeDrawer) return null;

  return (
    <div className="w-80 sm:w-[370px] bg-white border-r border-slate-200/90 flex flex-col h-full shrink-0 z-10 shadow-xl overflow-hidden animate-in slide-in-from-left-4 duration-200 select-none">
      {/* Drawer Header */}
      <div className="h-16 px-5 border-b border-slate-200/80 flex items-center justify-between bg-white shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shadow-2xs">
            {activeDrawer[0].toUpperCase()}
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 m-0">
              {activeDrawer} Customizer
            </h3>
            <span className="text-[10px] text-slate-400 font-medium">Live Canvas Interactive Controls</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          title="Close Settings Panel"
        >
          <X size={16} />
        </button>
      </div>

      {/* Drawer Content Body */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 text-slate-800">
        
        {/* =========================================================
            MODULE 1: PAGE OPTIONS
        ========================================================= */}
        {activeDrawer === 'page' && (
          <div className="flex flex-col gap-4">
            {/* Page File Name */}
            <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/90">
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Active Document Route
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={builderState.pageName}
                  onChange={(e) => onUpdateState({ pageName: e.target.value })}
                  placeholder="index.html"
                  className="flex-1 px-3 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-blue-500 shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => alert(`Active document route updated to /${builderState.pageName}`)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-white transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95 shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #0088ff 0%, #0044cc 100%)',
                    boxShadow: '0 4px 12px rgba(0, 102, 255, 0.25)'
                  }}
                >
                  Update
                </button>
              </div>
            </div>

            {/* Show Page Title Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-800">Show Page Heading Title</span>
                <span title="Toggles main hero H1 / title section visibility in the template" className="cursor-help text-slate-400">
                  <HelpCircle size={13} />
                </span>
              </div>
              <button
                type="button"
                onClick={() => onUpdateState({ showPageTitle: !builderState.showPageTitle })}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                  builderState.showPageTitle ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    builderState.showPageTitle ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Page Base Template Submenu */}
            <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs">
              <button
                type="button"
                onClick={() => toggleSubmenu('pageBase')}
                className="w-full px-4 py-3 bg-slate-50/80 hover:bg-slate-100/80 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Layout size={14} className="text-blue-600" />
                  <span>Page Base Layout Frame</span>
                </div>
                {openSubmenus.pageBase ? <ChevronDown size={14} className="text-blue-600" /> : <ChevronRight size={14} />}
              </button>
              {openSubmenus.pageBase && (
                <div className="p-3 bg-white flex flex-col gap-2 border-t border-slate-100">
                  {[
                    { id: 'blank', label: 'Full Width Blank Canvas', desc: 'Standard edge-to-edge layout' },
                    { id: 'boxed', label: 'Centered Boxed Container', desc: 'Contained 1200px responsive wrapper' },
                    { id: 'sidebar', label: 'Sidebar-Docked Layout', desc: 'Fixed left navigation rail' }
                  ].map((tpl) => (
                    <button
                      key={tpl.id}
                      onClick={() => onUpdateState({ pageBaseTemplate: tpl.id })}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        builderState.pageBaseTemplate === tpl.id
                          ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold shadow-2xs'
                          : 'text-slate-600 border-transparent hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{tpl.label}</span>
                        {builderState.pageBaseTemplate === tpl.id && <Check size={14} className="text-blue-600" />}
                      </div>
                      <p className="text-[10px] text-slate-400 font-normal m-0 mt-0.5">{tpl.desc}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Arrange Sections Submenu */}
            <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs">
              <button
                type="button"
                onClick={() => toggleSubmenu('arrangeSections')}
                className="w-full px-4 py-3 bg-slate-50/80 hover:bg-slate-100/80 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-blue-600" />
                  <span>Arrange Sections ({builderState.sections.filter(s => s.enabled).length}/{builderState.sections.length})</span>
                </div>
                {openSubmenus.arrangeSections ? <ChevronDown size={14} className="text-blue-600" /> : <ChevronRight size={14} />}
              </button>
              {openSubmenus.arrangeSections && (
                <div className="p-3 bg-white flex flex-col gap-2 border-t border-slate-100">
                  <p className="text-[11px] text-slate-400 m-0 mb-1">Use arrows to reorder or eye icon to toggle visibility:</p>
                  {builderState.sections.map((sec, idx) => (
                    <div
                      key={sec.id}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-all ${
                        sec.enabled
                          ? 'bg-white border-slate-200/90 shadow-2xs'
                          : 'bg-slate-50 border-dashed border-slate-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <GripVertical size={13} className="text-slate-400" />
                        <span className="font-bold text-slate-800">{sec.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => moveSection(idx, -1)}
                          disabled={idx === 0}
                          className="w-6 h-6 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-20 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                          title="Move Up"
                        >
                          <ArrowUp size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => moveSection(idx, 1)}
                          disabled={idx === builderState.sections.length - 1}
                          className="w-6 h-6 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-20 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                          title="Move Down"
                        >
                          <ArrowDown size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSectionToggle(sec.id)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                            sec.enabled ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                          }`}
                          title={sec.enabled ? 'Hide Section in Canvas' : 'Show Section in Canvas'}
                        >
                          {sec.enabled ? <Eye size={12} /> : <EyeOff size={12} />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Meta Tags Submenu */}
            <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs">
              <button
                type="button"
                onClick={() => toggleSubmenu('metaTags')}
                className="w-full px-4 py-3 bg-slate-50/80 hover:bg-slate-100/80 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-blue-600" />
                  <span>Meta Tags & SEO Header</span>
                </div>
                {openSubmenus.metaTags ? <ChevronDown size={14} className="text-blue-600" /> : <ChevronRight size={14} />}
              </button>
              {openSubmenus.metaTags && (
                <div className="p-3.5 bg-white flex flex-col gap-3 border-t border-slate-100 text-xs">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">SEO Title Tag</label>
                    <input
                      type="text"
                      placeholder="My Luxury Villa | Official Site"
                      value={builderState.metaTags?.title || ''}
                      onChange={(e) => onUpdateState({ metaTags: { ...builderState.metaTags, title: e.target.value } })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Meta Description</label>
                    <textarea
                      rows={2}
                      placeholder="Discover our premium architectural spaces..."
                      value={builderState.metaTags?.description || ''}
                      onChange={(e) => onUpdateState({ metaTags: { ...builderState.metaTags, description: e.target.value } })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Duplicate Page Button */}
            <button
              type="button"
              onClick={() => {
                const newName = prompt('Enter name for duplicated page tab (e.g. contact.html):', `copy-${builderState.pageName}`);
                if (newName) {
                  onUpdateState({
                    tabs: [...builderState.tabs, newName],
                    activeTab: newName,
                    pageName: newName
                  });
                  alert(`Created new page tab: ${newName}`);
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer border border-slate-200 shadow-2xs hover:scale-[1.02] active:scale-95"
            >
              <Copy size={14} className="text-blue-600" />
              <span>Duplicate Active Document</span>
            </button>
          </div>
        )}

        {/* =========================================================
            MODULE 2: HEADER & FOOTER OPTIONS
        ========================================================= */}
        {(activeDrawer === 'header' || activeDrawer === 'footer') && (
          <div className="flex flex-col gap-4">
            {/* Header Template */}
            <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/90">
              <label className="text-xs font-bold text-slate-700 block mb-2">
                Header Layout Arrangement
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'sticky-top', label: 'Sticky Top' },
                  { id: 'floating', label: 'Floating Bar' },
                  { id: 'left-dock', label: 'Left Sidebar' }
                ].map((h) => (
                  <button
                    key={h.id}
                    onClick={() => onUpdateState({ headerTemplate: h.id })}
                    className={`py-2.5 px-1 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      builderState.headerTemplate === h.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                    style={builderState.headerTemplate === h.id ? { background: 'linear-gradient(135deg, #0088ff 0%, #0044cc 100%)' } : {}}
                  >
                    {h.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollspy Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-800">Navmenu Scrollspy</span>
                <span title="Automatically highlights menu anchors based on scroll position" className="cursor-help text-slate-400">
                  <HelpCircle size={13} />
                </span>
              </div>
              <button
                type="button"
                onClick={() => onUpdateState({ navmenuScrollspy: !builderState.navmenuScrollspy })}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                  builderState.navmenuScrollspy ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    builderState.navmenuScrollspy ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Brand Media / Logo */}
            <div className="border border-slate-200/90 rounded-2xl p-4 bg-slate-50/80 flex flex-col gap-2.5 shadow-2xs">
              <span className="text-xs font-bold text-slate-700">Brand Logo & Header Media</span>
              <button
                type="button"
                onClick={onOpenMediaModal}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all cursor-pointer shadow-2xs"
              >
                <ImageIcon size={15} className="text-blue-600" />
                <span>Select Logo from Media Library</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================
            MODULE 3: COLORS (LIVE REAL-TIME CSS ENGINE)
        ========================================================= */}
        {activeDrawer === 'colors' && (
          <div className="flex flex-col gap-5">
            {/* Color Presets Filter Tabs */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800">Curated Color Themes</span>
                <div className="flex gap-1 bg-slate-100 p-1 rounded-full text-[10px] font-bold">
                  {['all', 'light', 'dark'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setColorPresetTab(tab)}
                      className={`px-3 py-0.5 rounded-full uppercase tracking-wider transition-all cursor-pointer ${
                        colorPresetTab === tab ? 'bg-white text-blue-600 shadow-2xs font-bold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preset Cards List */}
              <div className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-1">
                {COLOR_PRESETS.filter(p => colorPresetTab === 'all' || p.type === colorPresetTab).map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetSelect(preset)}
                    className={`flex items-center justify-between p-3 rounded-2xl border text-xs font-semibold transition-all cursor-pointer ${
                      builderState.activePresetId === preset.id
                        ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-600/20 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-bold text-slate-800">{preset.name}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs" style={{ backgroundColor: preset.colors.background }} />
                      <span className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs" style={{ backgroundColor: preset.colors.heading }} />
                      <span className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs" style={{ backgroundColor: preset.colors.accent }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Global Color Variables Matrix */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800">Custom Color Variables Matrix</span>
                <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Instant Live Sync</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { key: 'accent', label: 'Accent / Primary' },
                  { key: 'background', label: 'Canvas Background' },
                  { key: 'heading', label: 'Headings Text' },
                  { key: 'default', label: 'Body Text' },
                  { key: 'surface', label: 'Card Surface' },
                  { key: 'nav', label: 'Navbar Text' },
                  { key: 'navHover', label: 'Navbar Hover' },
                  { key: 'dropBg', label: 'Dropdown Menu' }
                ].map(({ key, label }) => (
                  <div key={key} className="flex flex-col gap-1 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200">
                    <span className="text-[10px] font-semibold text-slate-500 truncate">{label}</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={builderState.colors[key] || '#000000'}
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        className="w-6 h-6 rounded-md border-0 p-0 cursor-pointer"
                      />
                      <span className="text-[11px] font-mono text-slate-700 uppercase font-semibold">
                        {builderState.colors[key] || ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            MODULE 4: FONTS & TYPOGRAPHY
        ========================================================= */}
        {activeDrawer === 'fonts' && (
          <div className="flex flex-col gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Body Default Font</label>
              <select
                value={builderState.fonts.defaultFont}
                onChange={(e) => onUpdateState({ fonts: { ...builderState.fonts, defaultFont: e.target.value } })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-blue-500"
              >
                {GOOGLE_FONTS.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Heading Font Family</label>
              <select
                value={builderState.fonts.headingFont}
                onChange={(e) => onUpdateState({ fonts: { ...builderState.fonts, headingFont: e.target.value } })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-blue-500"
              >
                {GOOGLE_FONTS.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Navigation Menu Font</label>
              <select
                value={builderState.fonts.navFont}
                onChange={(e) => onUpdateState({ fonts: { ...builderState.fonts, navFont: e.target.value } })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-blue-500"
              >
                {GOOGLE_FONTS.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200/80 rounded-2xl mt-2 text-blue-900 leading-relaxed text-[11px] font-medium flex items-start gap-2">
              <Sparkles size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <span>Selected Google Fonts automatically download stylesheets and inject typography rules directly into the canvas.</span>
            </div>
          </div>
        )}

        {/* =========================================================
            MODULE 5: MISCELLANEOUS OPTIONS
        ========================================================= */}
        {activeDrawer === 'misc' && (
          <div className="flex flex-col gap-3">
            {[
              { key: 'animationOnScroll', label: 'Animation On Scroll (AOS)', desc: 'Smooth reveal triggers on section scroll' },
              { key: 'scrollTopButton', label: 'Scroll Top Floating Action', desc: 'Display back to top helper button' },
              { key: 'pagePreloader', label: 'Page Preloader Indicator', desc: 'Display animated loader while page assets mount' }
            ].map((opt) => (
              <div key={opt.key} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">{opt.label}</span>
                  <span className="text-[10px] text-slate-500">{opt.desc}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onUpdateState({ [opt.key]: !builderState[opt.key] })}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                    builderState[opt.key] ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      builderState[opt.key] ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
