import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye, Star, Sparkles, Download, ArrowUpRight, Clock, Check } from 'lucide-react';

const categoryColorMap = {
  photography: { bg: '#f5f3ff', text: '#7c3aed', border: '#ddd6fe', badge: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
  travels: { bg: '#f0f9ff', text: '#0284c7', border: '#bae6fd', badge: 'linear-gradient(135deg, #0ea5e9, #0284c7)' },
  ecommerce: { bg: '#fdf2f8', text: '#db2777', border: '#fbcfe8', badge: 'linear-gradient(135deg, #ec4899, #be185d)' },
  medical: { bg: '#f0fdf4', text: '#059669', border: '#bbf7d0', badge: 'linear-gradient(135deg, #10b981, #047857)' },
  hotel: { bg: '#fffbeb', text: '#d97706', border: '#fde68a', badge: 'linear-gradient(135deg, #f59e0b, #b45309)' },
  admin: { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1', badge: 'linear-gradient(135deg, #64748b, #334155)' },
  agency: { bg: '#eef2ff', text: '#4f46e5', border: '#c7d2fe', badge: 'linear-gradient(135deg, #6366f1, #4338ca)' },
  construction: { bg: '#fff7ed', text: '#ea580c', border: '#fed7aa', badge: 'linear-gradient(135deg, #f97316, #c2410c)' },
  portfolio: { bg: '#fdf4ff', text: '#c026d3', border: '#f5d0fe', badge: 'linear-gradient(135deg, #d946ef, #a21caf)' },
  buisness: { bg: '#f8fafc', text: '#2563eb', border: '#bfdbfe', badge: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
  'comming-soon': { bg: '#fefce8', text: '#ca8a04', border: '#fef08a', badge: 'linear-gradient(135deg, #eab308, #a16207)' },
  default: { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe', badge: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }
};

export default function TemplateCard({
  template,
  onDownloadZip,
  isDownloading,
  viewMode = 'grid'
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const categorySlug = template?.category?.slug || template?.categorySlug || 'photography';
  const categoryName = template?.category?.name || template?.categoryName || categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  const theme = categoryColorMap[categorySlug] || categoryColorMap.default;

  const targetUrl = template.demoUrl || template.previewUrl || (categorySlug === 'photography' ? `/templates/photography/${template.slug}` : `/templates/${template.slug}`);
  const detailsUrl = `/templates/details/${template.slug || template.id}`;
  const isFree = template.templateType === 'FREE' || template.price === 0 || !template.price;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: isHovered ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(226, 232, 240, 0.85)',
        boxShadow: isHovered 
          ? '0 20px 40px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(99, 102, 241, 0.1)' 
          : '0 4px 16px -4px rgba(15, 23, 42, 0.04)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* 1. Browser Mockup Header & Thumbnail Window */}
      <div style={{
        position: 'relative',
        width: '100%',
        background: '#0f172a',
        overflow: 'hidden'
      }}>
        {/* Browser Top Window Bar */}
        <div style={{
          height: '28px',
          background: '#1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          {/* macOS traffic light window dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          </div>

          {/* Mini browser URL address pill */}
          <div style={{
            fontSize: '10px',
            color: '#94a3b8',
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            padding: '2px 10px',
            borderRadius: '99px',
            maxWidth: '180px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'monospace'
          }}>
            {template.slug || 'template-preview'}
          </div>

          <div style={{ width: '30px' }} />
        </div>

        {/* Thumbnail Image Container (16:10 aspect ratio) */}
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          backgroundColor: '#090d16',
          overflow: 'hidden'
        }}>
          <img
            src={template.previewImage}
            alt={template.name}
            onLoad={() => setImgLoaded(true)}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80';
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              transform: isHovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: imgLoaded ? 1 : 0.7
            }}
          />

          {/* Floating Category & Price Badges */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pointerEvents: 'none',
            zIndex: 10
          }}>
            <span style={{
              padding: '4px 10px',
              borderRadius: '8px',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: theme.text }} />
              {categoryName}
            </span>

            <span style={{
              padding: '4px 10px',
              borderRadius: '8px',
              background: isFree 
                ? 'linear-gradient(135deg, #10b981, #059669)' 
                : 'linear-gradient(135deg, #6366f1, #4f46e5)',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '0.4px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
              {isFree ? 'FREE' : `$${template.price || 49}`}
            </span>
          </div>

          {/* Smooth Glassmorphism Hover Overlay with Action Buttons */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.72)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '20px',
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 20
          }}>
            <a
              href={targetUrl}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '80%',
                maxWidth: '220px',
                padding: '11px 20px',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.88rem',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Eye size={16} color="#0066ff" />
              <span>Live Preview</span>
              <ArrowUpRight size={15} color="#64748b" />
            </a>

            {onDownloadZip && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onDownloadZip(template.slug);
                }}
                disabled={isDownloading}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '80%',
                  maxWidth: '220px',
                  padding: '10px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.84rem',
                  cursor: isDownloading ? 'not-allowed' : 'pointer',
                  backdropFilter: 'blur(8px)',
                  transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <Download size={15} />
                <span>{isDownloading ? 'Packaging...' : 'Download Code'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div style={{
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        gap: '14px'
      }}>
        <div>
          {/* Rating & Updated Metadata */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px',
            fontSize: '0.8rem',
            color: '#64748b'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontWeight: '700' }}>
              <Star size={13} fill="#f59e0b" color="#f59e0b" />
              <span>4.9</span>
              <span style={{ color: '#94a3b8', fontWeight: '400' }}>(28+ reviews)</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
              <Clock size={12} />
              <span>Updated</span>
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: '1.12rem',
            fontWeight: '800',
            color: '#0f172a',
            margin: '0 0 8px 0',
            fontFamily: 'var(--font-title, "Outfit", sans-serif)',
            lineHeight: '1.35'
          }}>
            <a
              href={targetUrl}
              style={{
                color: isHovered ? '#0066ff' : '#0f172a',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }}
            >
              {template.name}
            </a>
          </h3>

          {/* Description (2-line clamped) */}
          <p style={{
            fontSize: '0.86rem',
            color: '#64748b',
            lineHeight: '1.55',
            margin: 0,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {template.description || 'Modern, high-performance website template with clean responsive layout, smooth micro-interactions, and modular components.'}
          </p>
        </div>

        {/* Feature Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          paddingTop: '6px'
        }}>
          {(template.tags && template.tags.length > 0 ? template.tags.slice(0, 3) : ['Responsive', 'Tailwind', 'React']).map((tag, idx) => (
            <span
              key={idx}
              style={{
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: '#f1f5f9',
                color: '#475569',
                fontSize: '10.5px',
                fontWeight: '600'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3. Card Footer Action Bar */}
        <div style={{
          borderTop: '1px solid #f1f5f9',
          paddingTop: '14px',
          marginTop: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            <span>Ready to use</span>
          </div>

          <a
            href={targetUrl}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.84rem',
              fontWeight: '700',
              color: '#0066ff',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span>Live Demo</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
