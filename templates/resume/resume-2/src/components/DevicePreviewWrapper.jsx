import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function DevicePreviewWrapper({ children }) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const isIframe = window.self !== window.top;
  const [viewMode, setViewMode] = useState('desktop');

  // If it's loaded inside the iframe, render the template directly without header wrapper
  if (isIframe) {
    return <>{children}</>;
  }

  // Determine template slug for download link
  const pathParts = location.pathname.split('/').filter(Boolean);
  // Path is /templates/photography/wedding-template or /templates/photography/wedding-template/index.html
  let templateSlug = 'wedding-template';
  if (pathParts.length > 0) {
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart === 'index.html' && pathParts.length > 1) {
      templateSlug = pathParts[pathParts.length - 2];
    } else {
      templateSlug = lastPart;
    }
  }

  const iframeSrc = `${location.pathname}?iframe=true${location.hash || ''}`;

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundColor: '#f1f5f9',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      {/* 1. Preview Top Bar Switcher Header */}
      <div id="technosprint-preview-header" style={{
        height: '64px',
        minHeight: '64px',
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        zIndex: 99999,
        position: 'relative',
        boxSizing: 'border-box'
      }}>
        {/* Left Side Brand Logo */}
        <div>
          <a href="/templates" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="logo.jpg" alt="TechnoSprint Logo" style={{ height: '32px', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
          </a>
        </div>

        {/* Center Device Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            onClick={() => setViewMode('desktop')}
            style={{
              background: viewMode === 'desktop' ? '#eff6ff' : '#ffffff',
              color: viewMode === 'desktop' ? '#1e40af' : '#475569',
              borderColor: viewMode === 'desktop' ? '#bfdbfe' : '#e2e8f0',
              borderStyle: 'solid',
              borderWidth: '1px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: viewMode === 'desktop' ? '600' : '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            Desktop
          </button>

          <button 
            onClick={() => setViewMode('tablet')}
            style={{
              background: viewMode === 'tablet' ? '#eff6ff' : '#ffffff',
              color: viewMode === 'tablet' ? '#1e40af' : '#475569',
              borderColor: viewMode === 'tablet' ? '#bfdbfe' : '#e2e8f0',
              borderStyle: 'solid',
              borderWidth: '1px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: viewMode === 'tablet' ? '600' : '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            Tablet
          </button>

          <button 
            onClick={() => setViewMode('mobile')}
            style={{
              background: viewMode === 'mobile' ? '#eff6ff' : '#ffffff',
              color: viewMode === 'mobile' ? '#1e40af' : '#475569',
              borderColor: viewMode === 'mobile' ? '#bfdbfe' : '#e2e8f0',
              borderStyle: 'solid',
              borderWidth: '1px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: viewMode === 'mobile' ? '600' : '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            Mobile
          </button>
        </div>

        {/* Right Side Action Button */}
        <div>
          <a 
            id="download-btn-header" 
            href={`/templates/${templateSlug}?action=download`}
            style={{
              background: '#0066ff',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontSpread: 'none',
              fontWeight: '600',
              padding: '10px 20px',
              borderRadius: '99px',
              boxShadow: '0 4px 12px rgba(0, 102, 255, 0.15)',
              transition: 'all 0.2s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.5px',
              boxSizing: 'border-box'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Template
          </a>
        </div>
      </div>

      {/* 2. Resizable Iframe Viewport Container */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f1f5f9',
        padding: '20px',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <iframe
          id="preview-iframe"
          src={iframeSrc}
          style={{
            width: viewMode === 'desktop' ? '100%' : viewMode === 'tablet' ? '768px' : '375px',
            height: '100%',
            maxHeight: '100%',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            background: '#ffffff',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
    </div>
  );
}
