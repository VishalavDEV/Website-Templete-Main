import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JSZip from 'jszip';

export default function PhotographyCatalog() {
  const [downloadingSlug, setDownloadingSlug] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const TEMPLATES = [
    {
      slug: 'snapfolio-template',
      name: 'SnapFolio — Dark Minimalist Portfolio',
      previewImage: '/snapfolio_cover.png',
      tags: ['Dark Theme', 'Masonry Gallery', 'Lightbox Modal'],
      description: 'A dark-themed photography portfolio featuring a floating glass sidebar navigation, animated typewriter hero headlines, responsive masonry layouts, next/prev arrow keyboard navigation lightbox, and integrated booking validation feedback.'
    },
    {
      slug: 'photo-template',
      name: 'Photo — Editorial Photography Studio',
      previewImage: '/photo_cover.png',
      tags: ['Editorial Layout', 'Scroll Pinned Canvas', 'Golden Hour Theme'],
      description: 'A high-end, editorial landing page template for creative photography studios. Features Apple-style scroll-linked canvas camera aperture and lens flare animations, split-layout typography, and interactive showcase grids.'
    },
    {
      slug: 'wedding-template',
      name: 'Lumière — High-End Wedding & Event Photography',
      previewImage: '/wedding_cover.png',
      tags: ['Minimalist Editorial', 'Split Layout Navbar', 'Floating Contact Buttons'],
      description: 'A responsive, high-end wedding and event photography portfolio web template with a warm ivory backdrop, center-split navigation, elegant serif headings, and sticky whatsapp/phone buttons.'
    },
    {
      slug: 'fineart-template',
      name: 'Aura — Premium Fine Art Studio',
      previewImage: '/fineart_cover.png',
      tags: ['Premium Serif', 'Wipe Reveals', 'Hover Custom Cursor'],
      description: 'A premium, dynamic React portfolio website for a fine art photography studio. Features Ken Burns hero animations, scroll-triggered wipe reveals, and interactive circular gallery navigations.'
    },
    {
      slug: 'cinematic-wedding',
      name: 'Eden Rose — Cinematic Luxury Wedding Portfolio',
      previewImage: '/cinematic_cover.png',
      tags: ['Luxury Monocrom', 'Preloader curtain', 'Staggered Grid'],
      description: 'A cinematic wedding photography portfolio template in deep black and luxury gold tones. Features intro curtain loaders, route transition reveals, staggered portfolio grids, and boutique inquiry options.'
    },
    {
      slug: 'kairo-template',
      name: 'Kairo — Modern 3D Photography Portfolio',
      previewImage: '/kairo_cover.png',
      tags: ['3D Scene', 'Interactive Parallax', 'Luxury Editorial'],
      description: 'A modern photography portfolio featuring interactive 3D camera lens aperture graphics rendered in React Three Fiber, scroll-linked fade animations, split-layout bio sections, and fullscreen responsive image tiles.'
    },
    {
      slug: 'isteady-template',
      name: 'Lume Studio — Fashion & Editorial Portfolio',
      previewImage: '/lume_cover.png',
      tags: ['Editorial Fashion', 'Moody Spotlight', 'Bespoke Lighting'],
      description: 'A premium photography portfolio website. Features full-bleed moody editorial layouts, ambient gold twinkling particle overlays, and fluid smooth scroll interactions.'
    }
  ];

  const showToast = (msg, type = 'success') => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const handleDownload = async (slug, templateName) => {
    setDownloadingSlug(slug);

    const zip = new JSZip();
    
    const files = [
      { name: 'index.html', url: `/templates/photography/${slug}/index.html` },
      { name: 'style.css', url: `/templates/photography/${slug}/style.css` },
      { name: 'script.js', url: `/templates/photography/${slug}/script.js` }
    ];

    try {
      // 1. Fetch text files (HTML, CSS, JS)
      for (const file of files) {
        const response = await fetch(file.url);
        if (!response.ok) throw new Error(`Failed to fetch ${file.name}`);
        const text = await response.text();
        zip.file(file.name, text);
      }
      
      // 2. Fetch and add frames sequence binary files for the photo-template
      if (slug === 'photo-template') {
        const framesFolder = zip.folder('frames');
        for (let i = 0; i < 100; i++) {
          const paddedIndex = String(i).padStart(6, '0');
          const frameName = `frame_${paddedIndex}.jpg`;
          const frameUrl = `/templates/photography/${slug}/frames/${frameName}`;
          
          try {
            const response = await fetch(frameUrl);
            if (response.ok) {
              const arrayBuffer = await response.arrayBuffer();
              framesFolder.file(frameName, arrayBuffer);
            }
          } catch (e) {
            console.warn(`Frame ${frameName} fetch skipped:`, e);
          }
        }
      }
      
      const blob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${slug}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showToast(`${templateName} zip downloaded successfully!`);
    } catch (err) {
      console.error(err);
      showToast(`Failed to bundle ${templateName} files.`, 'error');
    } finally {
      setDownloadingSlug('');
    }
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', padding: '30px 0', minHeight: '60vh', position: 'relative' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          maxWidth: '360px',
          width: '100%',
          backgroundColor: toastType === 'error' ? 'rgba(239, 68, 68, 0.95)' : '#1e1e1e',
          color: 'white',
          border: toastType === 'error' ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {toastType === 'error' ? (
            <svg style={{ width: '20px', height: '20px', color: '#fca5a5', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          ) : (
            <svg style={{ width: '20px', height: '20px', color: '#4ade80', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          )}
          <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{toastMessage}</div>
        </div>
      )}

      {/* Category Header */}
      <div style={{ marginBottom: 35 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: '99px',
          backgroundColor: 'rgba(84, 78, 232, 0.08)',
          color: '#544ee8',
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '12px',
          letterSpacing: '0.5px'
        }}>
          📷 Category: Photography Templates
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>Photography Templates</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Discover isolated, production-ready, dark minimalist layouts tailored for visual storytellers, freelance portfolios, and photography studios.</p>
      </div>

      {/* Catalog Grid */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        marginTop: '30px',
        width: '100%'
      }}>
        
        {TEMPLATES.map((tpl) => (
          <div key={tpl.slug} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            padding: '32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)',
            width: '100%',
            transition: 'all 0.3s ease-in-out',
            boxSizing: 'border-box'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(84, 78, 232, 0.2)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.03)';
          }}
          >
            {/* Left Column: Responsive Multi-Device CSS Mockup */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/11',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #f1f5f9',
              boxSizing: 'border-box',
              padding: '24px'
            }}>
              {/* 1. Laptop Mockup Frame */}
              <div style={{
                position: 'relative',
                width: '72%',
                aspectRatio: '16/10',
                background: '#0f172a',
                borderRadius: '8px 8px 0 0',
                border: '4px solid #1e293b',
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                zIndex: 1,
                transform: 'translateX(-8%)',
                boxSizing: 'border-box'
              }}>
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={tpl.previewImage} 
                    alt={`${tpl.name} Desktop Preview`} 
                    style={{ 
                      width: '100%', 
                      height: '112%', 
                      objectFit: 'cover', 
                      objectPosition: 'top',
                      marginTop: '-12%' 
                    }} 
                  />
                </div>
                {/* Keyboard Base thin border */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: '#64748b'
                }} />
              </div>

              {/* 2. Tablet Mockup Frame (overlaid on the right side) */}
              <div style={{
                position: 'absolute',
                right: '18%',
                bottom: '18%',
                width: '24%',
                aspectRatio: '3/4',
                background: '#0f172a',
                border: '4px solid #0f172a',
                borderRadius: '10px',
                boxShadow: '0 15px 25px rgba(0,0,0,0.18)',
                overflow: 'hidden',
                zIndex: 2,
                boxSizing: 'border-box'
              }}>
                {/* Camera sensor dot */}
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: '#334155',
                  zIndex: 10
                }} />
                <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                  <img 
                    src={tpl.previewImage} 
                    alt={`${tpl.name} Tablet Preview`} 
                    style={{ 
                      width: '100%', 
                      height: '112%', 
                      objectFit: 'cover', 
                      objectPosition: 'top',
                      marginTop: '-12%' 
                    }} 
                  />
                </div>
              </div>

              {/* 3. Mobile Mockup Frame (overlaid in front) */}
              <div style={{
                position: 'absolute',
                right: '6%',
                bottom: '12%',
                width: '15%',
                aspectRatio: '9/19',
                background: '#090d16',
                border: '3px solid #090d16',
                borderRadius: '12px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.22)',
                overflow: 'hidden',
                zIndex: 3,
                boxSizing: 'border-box'
              }}>
                {/* Speaker pill notch */}
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '18px',
                  height: '3px',
                  borderRadius: '99px',
                  background: '#1e293b',
                  zIndex: 10
                }} />
                <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                  <img 
                    src={tpl.previewImage} 
                    alt={`${tpl.name} Mobile Preview`} 
                    style={{ 
                      width: '100%', 
                      height: '112%', 
                      objectFit: 'cover', 
                      objectPosition: 'top',
                      marginTop: '-12%' 
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Title, Metadata, Description & Pill Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Badges / Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tpl.tags.map((tag) => (
                  <span key={tag} style={{
                    padding: '4px 10px',
                    borderRadius: '99px',
                    backgroundColor: '#eff6ff',
                    color: '#1d4ed8',
                    fontSize: '10px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>{tag}</span>
                ))}
              </div>

              {/* Typography */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  color: '#0f172a',
                  margin: 0,
                  fontFamily: 'var(--font-title)',
                  lineHeight: '1.25'
                }}>
                  <a 
                    href={`/templates/photography/${tpl.slug}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#0f172a', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0066ff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}
                  >
                    {tpl.name}
                  </a>
                </h3>
                
                {/* Updated metadata */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b' }}>
                  <i className="fa-regular fa-clock" style={{ fontSize: '0.85rem' }}></i>
                  <span>Updated recently</span>
                </div>

                <p style={{
                  fontSize: '0.88rem',
                  color: '#64748b',
                  lineHeight: '1.7',
                  margin: '6px 0 0 0',
                  fontWeight: 400
                }}>
                  {tpl.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{
                marginTop: '10px'
              }}>
                <a 
                  href={`/templates/photography/${tpl.slug}`} 
                  target="_blank" 
                  rel="noopener noreferrer"  
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '12px 24px',
                    backgroundColor: '#1e40af',
                    color: 'white',
                    borderRadius: '99px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1e40af';
                  }}
                >
                  Live Demo <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
                </a>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
