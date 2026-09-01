import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

export default function BookPreview() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = bookDetailsData.previewPages.length;
  const page = bookDetailsData.previewPages[currentPage];

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <section id="preview" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">EXCERPT PREVIEW</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Read The First Pages
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Sample an exclusive excerpt from Chapter One of <em>The Echoes of Tomorrow</em>.
          </p>
        </div>

        {/* Interactive Open Book Reader */}
        <div className="preview-book-wrapper reveal-on-scroll delay-3">
          <div className="preview-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={20} color="var(--accent)" />
              <span className="preview-header-title">The Echoes of Tomorrow</span>
            </div>

            <div className="preview-counter">
              Page 0{page.pageNumber} / 0{totalPages}
            </div>
          </div>

          <div className="preview-content-box">
            <h3 className="preview-page-heading">{page.heading}</h3>
            <p className="preview-page-text">{page.content}</p>
          </div>

          <div className="preview-footer">
            <button 
              className="preview-nav-btn" 
              onClick={handlePrev}
              disabled={currentPage === 0}
            >
              <ChevronLeft size={18} /> Previous Page
            </button>

            <a href="#purchase" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
              Continue Reading <ArrowRight size={14} />
            </a>

            <button 
              className="preview-nav-btn" 
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
            >
              Next Page <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
