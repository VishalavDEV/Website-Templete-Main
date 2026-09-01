import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JSZip from 'jszip';
import TemplateCard from '../components/TemplateCard';

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
    },
    {
      slug: 'sage-shutter-photography',
      name: 'Sage & Shutter — Fine Art Wedding Photography',
      previewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      demoUrl: '/templates/photography/photography-8/index.html',
      tags: ['Fine Art', 'Wedding Photography', 'Earthy Filters', 'Tailwind CSS', 'Motion'],
      description: 'An elegant, high-end fine art wedding photography showcase template. Features delicate earthy desaturated filters, parallax image carousels, custom cursor indicators, and responsive testimonial sliders.'
    },
    {
      slug: 'blush-lens-photography',
      name: 'Blush Lens — Fine Art Wedding Photography',
      previewImage: '/wedding_cover.png',
      demoUrl: '/templates/photography/photography-9/index.html',
      tags: ['Fine Art', 'Wedding Photography', 'Blush Tones', 'Tailwind CSS', 'Motion'],
      description: 'A premium React wedding photography template featuring romantic blush and warm ivory tones, editorial serif typography, interactive booking forms, and dynamic parallax portfolio galleries.'
    },
    {
      slug: 'aether-studio-photography',
      name: 'Aether Studio — Fine Art Editorial Photography',
      previewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      demoUrl: '/templates/photography/photography-10/index.html',
      tags: ['Fine Art', 'Editorial Photography', 'Earthy Theme', 'Tailwind CSS', 'Motion'],
      description: 'A high-end, editorial photography showcase template. Features custom slide overlays, parallax grid systems, desaturated earthy image styling, and elegant typewriter layout design.'
    }
  ];

  const showToast = (msg, type = 'success') => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const TEMPLATE_FILES = {
    'snapfolio-template': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css'
    ],
    'photo-template': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css'
    ],
    'wedding-template': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css'
    ],
    'fineart-template': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css',
      'src/components/CollectionCircle.jsx',
      'src/components/CollectionsGrid.jsx',
      'src/components/FeatureBlock.jsx',
      'src/components/Footer.jsx',
      'src/components/Hero.jsx',
      'src/components/Navbar.jsx',
      'src/components/Newsletter.jsx',
      'src/data/config.js'
    ],
    'cinematic-wedding': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css',
      'src/components/About.jsx',
      'src/components/FeaturedStories.jsx',
      'src/components/Footer.jsx',
      'src/components/Gallery.jsx',
      'src/components/Hero.jsx',
      'src/components/Navbar.jsx',
      'src/components/ScrollReveal.jsx',
      'src/components/Services.jsx',
      'src/components/Testimonials.jsx',
      'src/data/config.js'
    ],
    'kairo-template': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css',
      'src/components/AboutSection.jsx',
      'src/components/CameraModel.jsx',
      'src/components/ContactSection.jsx',
      'src/components/Footer.jsx',
      'src/components/Hero3DScene.jsx',
      'src/components/HeroContent.jsx',
      'src/components/HeroGrid.jsx',
      'src/components/Navbar.jsx',
      'src/components/ParticleField.jsx',
      'src/components/Scene3D.jsx',
      'src/components/ServicesSection.jsx'
    ],
    'isteady-template': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css',
      'src/components/AboutSection.jsx',
      'src/components/ContactSection.jsx',
      'src/components/Footer.jsx',
      'src/components/HeroContent.jsx',
      'src/components/Navbar.jsx',
      'src/components/ParticleField.jsx',
      'src/components/PortfolioGrid.jsx',
      'src/components/Scene3D.jsx',
      'src/components/ServicesSection.jsx',
      'src/components/Testimonials.jsx'
    ],
    'sage-shutter-photography': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css'
    ],
    'blush-lens-photography': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css'
    ],
    'aether-studio-photography': [
      'package.json', 'vite.config.js', 'index.html',
      'src/main.jsx', 'src/App.jsx', 'src/index.css'
    ]
  };

  const handleDownload = async (slug, templateName) => {
    setDownloadingSlug(slug);

    const zip = new JSZip();
    const filesToDownload = TEMPLATE_FILES[slug] || [];

    // Map slug to directory folder name if they differ
    const folderMapping = {
      'sage-shutter-photography': 'photography-8',
      'blush-lens-photography': 'photography-9',
      'aether-studio-photography': 'photography-10'
    };
    const folderName = folderMapping[slug] || slug;

    try {
      // 1. Fetch React project files
      for (const filePath of filesToDownload) {
        const fileUrl = `/templates/photography/${folderName}/${filePath}`;
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);
        const text = await response.text();
        zip.file(filePath, text);
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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '28px',
        marginTop: '30px',
        width: '100%'
      }}>
        {TEMPLATES.map((tpl) => (
          <TemplateCard
            key={tpl.slug}
            template={{
              ...tpl,
              categoryName: 'Photography',
              categorySlug: 'photography',
              templateType: 'FREE',
              price: 0
            }}
            onDownloadZip={handleDownloadZip}
            isDownloading={downloadingSlug === tpl.slug}
          />
        ))}
      </div>
    </div>
  );
}
