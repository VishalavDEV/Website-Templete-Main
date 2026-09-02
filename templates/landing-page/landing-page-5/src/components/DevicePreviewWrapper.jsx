import React, { useState, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Monitor, Tablet, Smartphone, RotateCcw, RotateCw, ArrowLeft, Download } from 'lucide-react';

export default function DevicePreviewWrapper({ children }) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const isIframe = window.self !== window.top;
  const [viewMode, setViewMode] = useState('desktop'); // default to desktop view
  const [orientation, setOrientation] = useState('portrait'); // portrait or landscape
  const iframeRef = useRef(null);

  // If loaded inside the iframe, render the template directly without wrapper
  if (isIframe) {
    return <>{children}</>;
  }

  // Determine template slug for download / back link
  const pathParts = location.pathname.split('/').filter(Boolean);
  let templateSlug = 'template';
  if (pathParts.length > 0) {
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart === 'index.html' && pathParts.length > 1) {
      templateSlug = pathParts[pathParts.length - 2];
    } else {
      templateSlug = lastPart;
    }
  }

  const iframeSrc = `${location.pathname}?iframe=true${location.hash || ''}`;

  const toggleOrientation = () => {
    setOrientation(prev => prev === 'portrait' ? 'landscape' : 'portrait');
  };

  const handleRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeSrc;
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundColor: '#f8fafc',
      backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
      backgroundSize: '20px 20px',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      {/* 1. Sleek Floating Viewport Header Toolbar */}
      <header style={{
        height: '64px',
        minHeight: '64px',
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        zIndex: 99999,
        position: 'relative',
        boxSizing: 'border-box'
      }}>
        {/* Left: Brand Logo & Back link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="/templates" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} title="Back to Templates">
            <img src="/logo.jpg" alt="TechnoSprint Logo" style={{ height: '32px', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
          </a>
          <a
            href="/templates"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: '8px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0f172a'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
          >
            <ArrowLeft size={14} /> Back
          </a>
        </div>

        {/* Center: Segmented Device Switcher (Desktop / Tablet / Mobile) */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '4px',
          gap: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}>
          {/* Desktop Button */}
          <button
            onClick={() => setViewMode('desktop')}
            style={{
              background: viewMode === 'desktop' ? '#eff6ff' : 'transparent',
              color: viewMode === 'desktop' ? '#2563eb' : '#64748b',
              border: viewMode === 'desktop' ? '1px solid #bfdbfe' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: viewMode === 'desktop' ? 600 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease-in-out',
              outline: 'none',
              boxShadow: viewMode === 'desktop' ? '0 1px 2px rgba(37,99,235,0.08)' : 'none'
            }}
          >
            <Monitor size={15} />
            Desktop
          </button>

          {/* Tablet Button */}
          <button
            onClick={() => setViewMode('tablet')}
            style={{
              background: viewMode === 'tablet' ? '#eff6ff' : 'transparent',
              color: viewMode === 'tablet' ? '#2563eb' : '#64748b',
              border: viewMode === 'tablet' ? '1px solid #bfdbfe' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: viewMode === 'tablet' ? 600 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease-in-out',
              outline: 'none',
              boxShadow: viewMode === 'tablet' ? '0 1px 2px rgba(37,99,235,0.08)' : 'none'
            }}
          >
            <Tablet size={15} />
            Tablet
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setViewMode('mobile')}
            style={{
              background: viewMode === 'mobile' ? '#eff6ff' : 'transparent',
              color: viewMode === 'mobile' ? '#2563eb' : '#64748b',
              border: viewMode === 'mobile' ? '1px solid #bfdbfe' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: viewMode === 'mobile' ? 600 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease-in-out',
              outline: 'none',
              boxShadow: viewMode === 'mobile' ? '0 1px 2px rgba(37,99,235,0.08)' : 'none'
            }}
          >
            <Smartphone size={15} />
            Mobile
          </button>
        </div>

        {/* Right: Orientation Toggle, Refresh & Download */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Portrait / Landscape Orientation Toggle */}
          {(viewMode === 'mobile' || viewMode === 'tablet') && (
            <button
              onClick={toggleOrientation}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '0.82rem',
                color: '#475569',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s',
                outline: 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
              }}
              title="Toggle Portrait / Landscape"
            >
              <RotateCw size={14} />
              {orientation === 'portrait' ? 'Portrait' : 'Landscape'}
            </button>
          )}

          {/* Refresh Iframe */}
          <button
            onClick={handleRefresh}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              width: '34px',
              height: '34px',
              color: '#475569',
              cursor: 'pointer',
              transition: 'all 0.15s',
              outline: 'none',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
            }}
            title="Reload Preview"
          >
            <RotateCcw size={14} />
          </button>

          {/* Download Action */}
          <a
            href={`/templates/${templateSlug}?action=download`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#2563eb',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: 600,
              padding: '7px 16px',
              borderRadius: '99px',
              boxShadow: '0 2px 8px rgba(37,99,235,0.2)',
              transition: 'all 0.2s',
              marginLeft: '4px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            <Download size={14} />
            Download
          </a>
        </div>
      </header>

      {/* 2. Centered Device Preview Canvas */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflow: 'auto',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        {/* DESKTOP VIEW */}
        {viewMode === 'desktop' && (
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
              id="preview-iframe"
              src={iframeSrc}
              title="Desktop Preview"
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

        {/* TABLET VIEW */}
        {viewMode === 'tablet' && (
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
              id="preview-iframe"
              src={iframeSrc}
              title="Tablet Preview"
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

        {/* MOBILE VIEW (Matching the Reference Screenshot) */}
        {viewMode === 'mobile' && (
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
              id="preview-iframe"
              src={iframeSrc}
              title="Mobile Preview"
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
  );
}
