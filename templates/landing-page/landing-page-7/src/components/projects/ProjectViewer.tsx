import React, { useState, useEffect } from 'react';
import { Project } from '../../data/projects';

export interface ProjectViewerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevProject?: () => void;
  onNextProject?: () => void;
}

type ChapterKey = 'CONCEPT' | 'MATERIAL' | 'LIGHT' | 'STRUCTURE';

export const ProjectViewer: React.FC<ProjectViewerProps> = ({
  project,
  isOpen,
  onClose,
  onPrevProject,
  onNextProject,
}) => {
  const [activeChapter, setActiveChapter] = useState<ChapterKey>('CONCEPT');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrevProject) onPrevProject();
      if (e.key === 'ArrowRight' && onNextProject) onNextProject();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setActiveChapter('CONCEPT');
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrevProject, onNextProject]);

  if (!isOpen || !project) return null;

  const chapters: ChapterKey[] = ['CONCEPT', 'MATERIAL', 'LIGHT', 'STRUCTURE'];
  const currentData = project.chapters[activeChapter] || project.chapters.CONCEPT;
  const currentChapterIndex = chapters.indexOf(activeChapter) + 1;

  return (
    <div
      className={`project-editorial-overlay ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} Editorial Monograph`}
    >
      <header className="overlay-header-bar">
        <h2 className="overlay-project-title">{project.name}</h2>

        <ul className="overlay-nav-tabs">
          {chapters.map((chap) => (
            <li key={chap}>
              <button
                className={`overlay-tab-btn ${activeChapter === chap ? 'active' : ''}`}
                onClick={() => setActiveChapter(chap)}
              >
                {chap}
              </button>
            </li>
          ))}
        </ul>

        <div className="overlay-controls">
          {onPrevProject && (
            <button
              className="overlay-nav-arrow-btn"
              onClick={onPrevProject}
              aria-label="Previous project"
            >
              ← PREVIOUS
            </button>
          )}
          {onNextProject && (
            <button
              className="overlay-nav-arrow-btn"
              onClick={onNextProject}
              aria-label="Next project"
            >
              NEXT →
            </button>
          )}
          <button
            className="overlay-close-btn"
            onClick={onClose}
            aria-label="Close project viewer (ESC)"
          >
            CLOSE ×
          </button>
        </div>
      </header>

      <div className="overlay-body-content">
        <div className="overlay-image-gallery">
          <img
            src={currentData.image}
            alt={`${project.name} - ${activeChapter}`}
            className="overlay-main-image"
            loading="lazy"
          />
          <div className="overlay-slide-counter">
            CHAPTER 0{currentChapterIndex} / 04 — {activeChapter}
          </div>
        </div>

        <div className="overlay-editorial-text">
          <div>
            <span className="tab-badge">{activeChapter} // ARCHITECTURAL STUDY</span>
            <h3 className="tab-headline">{currentData.headline}</h3>
            <p className="tab-paragraph">{currentData.paragraph}</p>
          </div>

          <div className="overlay-meta-table">
            {currentData.meta.map((item, idx) => (
              <div key={idx} className="overlay-meta-row">
                <span className="row-label">{item.label}</span>
                <span className="row-val">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
