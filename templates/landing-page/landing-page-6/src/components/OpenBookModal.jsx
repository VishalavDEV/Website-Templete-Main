import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, Bookmark, Sparkles } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

export default function OpenBookModal({ isOpen, onClose }) {
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const chapters = bookDetailsData.openBookContent;
  const currentSpread = chapters[activeChapterIdx];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeChapterIdx]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (activeChapterIdx < chapters.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setActiveChapterIdx(activeChapterIdx + 1);
        setIsFlipping(false);
      }, 250);
    }
  };

  const handlePrev = () => {
    if (activeChapterIdx > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setActiveChapterIdx(activeChapterIdx - 1);
        setIsFlipping(false);
      }, 250);
    }
  };

  return (
    <div className="open-book-overlay" onClick={onClose}>
      <div className="open-book-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="open-book-modal-header">
          <div className="open-book-modal-title">
            <BookOpen size={18} color="var(--accent)" />
            <span>The Echoes of Tomorrow — Opened Edition</span>
          </div>

          <button className="open-book-close-btn" onClick={onClose} aria-label="Close Opened Book">
            <X size={22} />
          </button>
        </div>

        {/* Chapter Quick Tabs */}
        <div className="open-book-tabs">
          {chapters.map((ch, idx) => (
            <button
              key={ch.id}
              className={`open-book-tab-btn ${idx === activeChapterIdx ? 'active' : ''}`}
              onClick={() => {
                setIsFlipping(true);
                setTimeout(() => {
                  setActiveChapterIdx(idx);
                  setIsFlipping(false);
                }, 200);
              }}
            >
              <Bookmark size={14} />
              <span>{ch.chapterTag}</span>
            </button>
          ))}
        </div>

        {/* 3D Open Two-Page Spread */}
        <div className={`open-book-spread ${isFlipping ? 'flipping' : ''}`}>
          {/* Left Page Spread */}
          <div className="book-page left-page">
            <div className="page-header">
              <span className="chapter-tag">{currentSpread.chapterTag}</span>
              <span className="page-sub">{currentSpread.subtitle}</span>
            </div>

            <h3 className="open-book-title">{currentSpread.title}</h3>

            <div className="toc-section">
              <h4 className="toc-heading">{currentSpread.leftPage.heading}</h4>
              <ul className="toc-list">
                {currentSpread.leftPage.toc.map((item, i) => (
                  <li key={i} className="toc-item">
                    <span className="toc-num">{item.num}</span>
                    <span className="toc-name">{item.name}</span>
                    <span className="toc-dots" />
                    <span className="toc-page">p. {item.page}</span>
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="left-page-quote">
              "{currentSpread.leftPage.quote}"
            </blockquote>

            <div className="page-footer-left">
              <span>{currentSpread.leftPage.bookMeta}</span>
            </div>

            {/* Book Center Fold Shadow */}
            <div className="page-fold-shadow-right" />
          </div>

          {/* Right Page Spread */}
          <div className="book-page right-page">
            <div className="page-fold-shadow-left" />

            <div className="page-header-right">
              <span>Mira Rowan • The Echoes of Tomorrow</span>
            </div>

            <div className="right-page-body">
              <span className="drop-cap">{currentSpread.rightPage.dropCap}</span>
              <p className="page-narrative-text">
                {currentSpread.rightPage.text}
              </p>
            </div>

            <div className="page-footer-right">
              <span className="page-num-badge">Page 0{currentSpread.rightPage.pageNumber}</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Controls */}
        <div className="open-book-modal-footer">
          <button
            className="btn-secondary open-nav-btn"
            onClick={handlePrev}
            disabled={activeChapterIdx === 0}
          >
            <ChevronLeft size={18} /> Previous Spread
          </button>

          <span className="spread-indicator">
            Spread 0{activeChapterIdx + 1} of 0{chapters.length}
          </span>

          <button
            className="btn-primary open-nav-btn"
            onClick={handleNext}
            disabled={activeChapterIdx === chapters.length - 1}
          >
            Next Spread <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
