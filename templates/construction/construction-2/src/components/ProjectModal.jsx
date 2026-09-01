import React, { useState } from 'react';

export default function ProjectModal({ project, onClose, onOpenQuote, addToast }) {
  const [galleryIdx, setGalleryIdx] = useState(0);

  if (!project) return null;

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  const activeImg = gallery[galleryIdx] || project.image;

  const nextImg = (e) => {
    e.stopPropagation();
    setGalleryIdx((galleryIdx + 1) % gallery.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setGalleryIdx((galleryIdx - 1 + gallery.length) % gallery.length);
  };

  const downloadBrochure = () => {
    const highlights = project.highlights ? project.highlights.join('\n- ') : '';
    const content = `BUILDHUB CONSTRUCTIONS — PROJECT SPECIFICATION\n==================================================\nProject: ${project.title}\nCategory: ${project.badge || project.category}\nLocation: ${project.location}\nArea: ${project.area}\nDuration: ${project.duration}\nArchitect: ${project.architect}\nClient: ${project.client}\n\nSummary:\n${project.desc}\n\nKey Highlights:\n- ${highlights}`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${project.title.toLowerCase().replace(/\s+/g, '-')}-specs.txt`;
    link.click();
    URL.revokeObjectURL(url);
    addToast(`Downloaded specification sheet for "${project.title}"!`);
  };

  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-dialog">
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        {/* Gallery Box */}
        <div style={{ position: 'relative', height: '320px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '24px', border: '1px solid var(--border-gold)' }}>
          <img src={activeImg} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          {gallery.length > 1 && (
            <>
              <button 
                onClick={prevImg}
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(6,9,17,0.8)', border: '1px solid var(--border-gold)', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}
              >
                ‹
              </button>
              <button 
                onClick={nextImg}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(6,9,17,0.8)', border: '1px solid var(--border-gold)', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}
              >
                ›
              </button>
            </>
          )}
        </div>

        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-subtitle">{project.subtitle} • {project.location}</p>
        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '24px' }}>
          {project.desc}
        </p>

        {/* Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: 'var(--radius-md)', marginBottom: '24px', border: '1px solid var(--border-light)' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Total Area</span>
            <h5 style={{ fontFamily: 'Syne, sans-serif', color: 'var(--gold-primary)', fontSize: '1rem' }}>{project.area}</h5>
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Timeline</span>
            <h5 style={{ fontFamily: 'Syne, sans-serif', color: 'var(--gold-primary)', fontSize: '1rem' }}>{project.duration}</h5>
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Architect</span>
            <h5 style={{ fontFamily: 'Syne, sans-serif', color: 'white', fontSize: '0.9rem' }}>{project.architect}</h5>
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Client</span>
            <h5 style={{ fontFamily: 'Syne, sans-serif', color: 'white', fontSize: '0.9rem' }}>{project.client}</h5>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
          >
            REQUEST SIMILAR PROJECT
          </button>
          <button className="btn btn-secondary" onClick={downloadBrochure}>
            DOWNLOAD SPEC SHEET (TXT)
          </button>
        </div>
      </div>
    </div>
  );
}
