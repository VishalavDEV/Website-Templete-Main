import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../../services/api';
import {
  INITIAL_BUILDER_STATE,
  generateLiveCSS
} from '../../services/builderStore';
import BuilderTopBar from './BuilderTopBar';
import BuilderIconDock from './BuilderIconDock';
import BuilderSettingsDrawer from './BuilderSettingsDrawer';
import MediaLibraryModal from './MediaLibraryModal';

export default function BuilderLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const templateParam = searchParams.get('template') || searchParams.get('project') || '';
  const categoryParam = searchParams.get('category') || '';
  const pageParam = searchParams.get('page') || 'index.html';

  const [allTemplates, setAllTemplates] = useState([]);
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [builderState, setBuilderState] = useState({
    ...INITIAL_BUILDER_STATE,
    pageName: pageParam,
    activeTab: pageParam,
    tabs: [pageParam]
  });

  const [orientation, setOrientation] = useState('portrait'); // portrait | landscape
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const iframeRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Load all templates
  useEffect(() => {
    api.getTemplates()
      .then((tpls) => {
        setAllTemplates(tpls);
        if (tpls && tpls.length > 0) {
          let matched = null;
          if (templateParam) {
            matched = tpls.find(
              (t) =>
                t.slug?.toLowerCase() === templateParam.toLowerCase() ||
                t.id?.toString() === templateParam.toString() ||
                t.name?.toLowerCase().includes(templateParam.toLowerCase())
            );
          }
          setActiveTemplate(matched || tpls[0]);
        }
      })
      .catch((err) => console.error('Failed to load templates for builder:', err));
  }, [templateParam]);

  // Handle template selection
  const handleSelectTemplate = (tpl) => {
    setActiveTemplate(tpl);
    const catSlug = tpl.category?.slug || 'admin';
    setSearchParams({ template: tpl.slug, category: catSlug, page: builderState.activeTab });
    showToast(`Switched workspace to ${tpl.name}`);
  };

  // State updates
  const handleUpdateState = (patch) => {
    setBuilderState((prev) => ({ ...prev, ...patch }));
  };

  // Drawer toggle
  const handleToggleDrawer = (drawerId) => {
    setBuilderState((prev) => ({
      ...prev,
      activeDrawer: prev.activeDrawer === drawerId ? null : drawerId
    }));
  };

  // Tab management
  const handleSelectTab = (tab) => {
    setBuilderState((prev) => ({ ...prev, activeTab: tab, pageName: tab }));
    setSearchParams({
      template: activeTemplate?.slug || '',
      category: activeTemplate?.category?.slug || '',
      page: tab
    });
  };

  const handleAddTab = () => {
    const newName = prompt('Enter name for new page (e.g. about.html, contact.html):', 'about.html');
    if (newName && !builderState.tabs.includes(newName)) {
      setBuilderState((prev) => ({
        ...prev,
        tabs: [...prev.tabs, newName],
        activeTab: newName,
        pageName: newName
      }));
      showToast(`Created document tab: ${newName}`);
    }
  };

  const handleCloseTab = (tabToClose) => {
    if (builderState.tabs.length <= 1) return;
    const nextTabs = builderState.tabs.filter((t) => t !== tabToClose);
    setBuilderState((prev) => ({
      ...prev,
      tabs: nextTabs,
      activeTab: nextTabs[0],
      pageName: nextTabs[0]
    }));
  };

  // Live CSS & Google Fonts injection into template iframe
  const injectLiveStyles = () => {
    if (!iframeRef.current) return;
    try {
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (!doc || !doc.head) return;

      // 1. Google Fonts Link
      let fontLink = doc.getElementById('technosprint-builder-fonts');
      if (!fontLink) {
        fontLink = doc.createElement('link');
        fontLink.id = 'technosprint-builder-fonts';
        fontLink.rel = 'stylesheet';
        doc.head.appendChild(fontLink);
      }
      const fontsToLoad = [
        builderState.fonts.defaultFont,
        builderState.fonts.headingFont,
        builderState.fonts.navFont
      ].filter(Boolean);
      const fontQuery = encodeURIComponent(fontsToLoad.join('|')).replace(/%20/g, '+');
      fontLink.href = `https://fonts.googleapis.com/css?family=${fontQuery}:wght@300;400;500;600;700;800;900&display=swap`;

      // 2. CSS Variables & Layout Rules
      let liveStyle = doc.getElementById('technosprint-builder-live-style');
      if (!liveStyle) {
        liveStyle = doc.createElement('style');
        liveStyle.id = 'technosprint-builder-live-style';
        doc.head.appendChild(liveStyle);
      }
      liveStyle.textContent = generateLiveCSS(builderState);

      // 3. Section Visibility sync
      applySectionVisibilityInDOM(builderState.sections);
    } catch (e) {
      console.warn('Iframe style injection notice:', e.message);
    }
  };

  // Section visibility and ordering inside the template DOM
  const applySectionVisibilityInDOM = (sectionsList) => {
    if (!iframeRef.current) return;
    try {
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (!doc) return;

      const domSections = doc.querySelectorAll('main > section, body > section, main > div[class*="section"], div[id*="section"]');
      if (domSections && domSections.length > 0) {
        sectionsList.forEach((sec, idx) => {
          if (domSections[idx]) {
            domSections[idx].style.display = sec.enabled ? '' : 'none';
          }
        });
      }
    } catch (e) {
      // Ignore cross-origin errors
    }
  };

  useEffect(() => {
    injectLiveStyles();
  }, [
    builderState.colors,
    builderState.fonts,
    builderState.activePresetId,
    builderState.showPageTitle,
    builderState.pageBaseTemplate,
    builderState.headerTemplate,
    builderState.sections,
    activeTemplate
  ]);

  // Save workspace handler
  const handleSave = () => {
    try {
      const savePayload = {
        templateId: activeTemplate?.id,
        templateSlug: activeTemplate?.slug,
        builderState,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem(`technosprint_builder_${activeTemplate?.slug || 'custom'}`, JSON.stringify(savePayload));
      showToast('Workspace changes saved successfully!');
    } catch (err) {
      console.error('Save error:', err);
    }
  };

  // Export custom HTML package handler
  const handleExport = () => {
    try {
      let htmlContent = '';
      if (iframeRef.current && iframeRef.current.contentDocument) {
        htmlContent = iframeRef.current.contentDocument.documentElement.outerHTML;
      } else {
        htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${builderState.metaTags?.title || activeTemplate?.name || 'Customized Template'}</title>
  <meta name="description" content="${builderState.metaTags?.description || ''}">
  <style>
${generateLiveCSS(builderState)}
  </style>
</head>
<body>
  <h1>${activeTemplate?.name || 'Template'}</h1>
  <p>Exported successfully with custom styling and configurations.</p>
</body>
</html>`;
      }

      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const downloadAnchor = document.createElement('a');
      downloadAnchor.href = url;
      downloadAnchor.download = `${activeTemplate?.slug || 'template'}-${builderState.activeTab}`;
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      URL.revokeObjectURL(url);
      showToast(`Exported ${activeTemplate?.slug || 'template'}-${builderState.activeTab}`);
    } catch (err) {
      console.error('Export error:', err);
    }
  };

  // Download project source bundle
  const handleDownload = () => {
    const slug = activeTemplate?.slug || 'template';
    const downloadUrl = `/templates/${slug}?action=download`;
    window.open(downloadUrl, '_blank');
    showToast(`Downloading source package for ${activeTemplate?.name || 'Template'}`);
  };

  // Exit back to catalog
  const handleExit = () => {
    navigate('/templates');
  };

  const demoUrl = activeTemplate?.demoUrl || `/templates/${(activeTemplate?.category?.slug || 'admin').toLowerCase()}/${activeTemplate?.slug}/index.html`;

  return (
    <div className={`flex flex-col h-screen w-screen overflow-hidden ${builderState.themeMode === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'}`}>
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-slate-700 animate-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Top Utility Header */}
      <BuilderTopBar
        template={activeTemplate}
        allTemplates={allTemplates}
        onSelectTemplate={handleSelectTemplate}
        tabs={builderState.tabs}
        activeTab={builderState.activeTab}
        onSelectTab={handleSelectTab}
        onAddTab={handleAddTab}
        onCloseTab={handleCloseTab}
        viewport={builderState.viewport}
        onChangeViewport={(vpMode) => handleUpdateState({ viewport: vpMode })}
        orientation={orientation}
        onToggleOrientation={() => setOrientation(prev => prev === 'portrait' ? 'landscape' : 'portrait')}
        onSave={handleSave}
        onExport={handleExport}
        onDownload={handleDownload}
        onExit={handleExit}
      />

      {/* 2. Main Workspace Body (Left Dock + Settings Drawer + Central Canvas) */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Leftmost Tool Rail */}
        <BuilderIconDock
          activeDrawer={builderState.activeDrawer}
          onToggleDrawer={handleToggleDrawer}
          themeMode={builderState.themeMode}
          onToggleThemeMode={() => handleUpdateState({ themeMode: builderState.themeMode === 'light' ? 'dark' : 'light' })}
          onOpenMediaModal={() => setIsMediaModalOpen(true)}
        />

        {/* Slide-out Settings Drawer */}
        {builderState.activeDrawer && (
          <BuilderSettingsDrawer
            activeDrawer={builderState.activeDrawer}
            onClose={() => handleUpdateState({ activeDrawer: null })}
            builderState={builderState}
            onUpdateState={handleUpdateState}
            onOpenMediaModal={() => setIsMediaModalOpen(true)}
            onReorderSectionsInDOM={applySectionVisibilityInDOM}
          />
        )}

        {/* Central Live Canvas Area */}
        <main
          className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 overflow-auto relative"
          style={{
            backgroundColor: '#f8fafc',
            backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
            backgroundSize: '20px 20px'
          }}
        >
          
          {/* DESKTOP VIEW (100% full live demo frame matching DevicePreviewWrapper) */}
          {(builderState.viewport === 'desktop' || builderState.viewport === 'builder') && (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <iframe
                ref={iframeRef}
                key={`${activeTemplate?.id}-${activeTemplate?.slug}`}
                src={demoUrl}
                title={activeTemplate?.name || 'Desktop Preview'}
                onLoad={injectLiveStyles}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
                  background: '#ffffff',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          )}

          {/* TABLET VIEW (Matching DevicePreviewWrapper live demo) */}
          {builderState.viewport === 'tablet' && (
            <div style={{
              width: orientation === 'portrait' ? '768px' : '980px',
              height: orientation === 'portrait' ? '920px' : '680px',
              maxHeight: 'calc(100vh - 120px)',
              maxWidth: 'calc(100vw - 60px)',
              backgroundColor: '#0f172a',
              border: '14px solid #0f172a',
              borderRadius: '38px',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxSizing: 'border-box',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              {/* Tablet Camera sensor */}
              <div style={{
                position: 'absolute',
                top: orientation === 'portrait' ? '5px' : '50%',
                left: orientation === 'portrait' ? '50%' : '5px',
                transform: orientation === 'portrait' ? 'translateX(-50%)' : 'translateY(-50%)',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#334155',
                zIndex: 20
              }} />
              <iframe
                ref={iframeRef}
                key={`${activeTemplate?.id}-${activeTemplate?.slug}`}
                src={demoUrl}
                title={activeTemplate?.name || 'Tablet Preview'}
                onLoad={injectLiveStyles}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '24px',
                  background: '#ffffff'
                }}
              />
            </div>
          )}

          {/* MOBILE / CELL PHONE VIEW (Matching DevicePreviewWrapper live demo with Dynamic Island) */}
          {builderState.viewport === 'mobile' && (
            <div style={{
              width: orientation === 'portrait' ? '390px' : '780px',
              height: orientation === 'portrait' ? '800px' : '390px',
              maxHeight: 'calc(100vh - 110px)',
              maxWidth: 'calc(100vw - 40px)',
              backgroundColor: '#0f172a',
              border: '12px solid #0f172a',
              borderRadius: '48px',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.38), 0 0 0 1px rgba(255, 255, 255, 0.12) inset',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxSizing: 'border-box',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              {/* Dynamic Island / Speaker Notch Header */}
              {orientation === 'portrait' && (
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '96px',
                  height: '24px',
                  backgroundColor: '#0f172a',
                  borderRadius: '99px',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 10px',
                  boxSizing: 'border-box'
                }}>
                  {/* Camera lens */}
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1e293b' }} />
                  {/* Sensor dot */}
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#090d16' }} />
                </div>
              )}

              <iframe
                ref={iframeRef}
                key={`${activeTemplate?.id}-${activeTemplate?.slug}`}
                src={demoUrl}
                title={activeTemplate?.name || 'Mobile Preview'}
                onLoad={injectLiveStyles}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '36px',
                  background: '#ffffff'
                }}
              />
            </div>
          )}

        </main>

      </div>

      {/* 3. Media Library Modal */}
      <MediaLibraryModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        onSelectImage={(url) => {
          handleUpdateState({ logoImage: url });
          showToast('Branding asset linked to workspace');
        }}
      />

    </div>
  );
}
