import React, { useEffect } from 'react';

export const GalleryLightbox: React.FC = () => {
  useEffect(() => {
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-image') as HTMLImageElement;
    const lightboxTitle = lightbox.querySelector('.lightbox-caption-title');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    const btnClose = lightbox.querySelector('.lightbox-btn-close');
    const btnPrev = lightbox.querySelector('.lightbox-btn-prev');
    const btnNext = lightbox.querySelector('.lightbox-btn-next');

    let currentItemIdx = 0;

    const getVisibleItems = (): HTMLElement[] => {
      const items = Array.from(document.querySelectorAll('.gallery-item')) as HTMLElement[];
      const visible = items.filter((item) => item.style.display !== 'none');
      return visible.length ? visible : items;
    };

    const updateLightboxContent = () => {
      const visibleItems = getVisibleItems();
      const currentItem = visibleItems[currentItemIdx];
      if (!currentItem) return;
      const src = currentItem.getAttribute('data-full-img') || currentItem.querySelector('img')?.src || '';
      const title = currentItem.querySelector('.gallery-item-title')?.textContent || 'Ember & Olive';

      if (lightboxImg) {
        lightboxImg.src = src;
        lightboxImg.alt = title;
      }
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxCounter) lightboxCounter.textContent = `${currentItemIdx + 1} / ${visibleItems.length}`;
    };

    const openLightbox = (item: HTMLElement) => {
      const visibleItems = getVisibleItems();
      currentItemIdx = visibleItems.indexOf(item);
      if (currentItemIdx === -1) currentItemIdx = 0;
      updateLightboxContent();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    const nextItem = () => {
      const visibleItems = getVisibleItems();
      if (!visibleItems.length) return;
      currentItemIdx = (currentItemIdx + 1) % visibleItems.length;
      updateLightboxContent();
    };

    const prevItem = () => {
      const visibleItems = getVisibleItems();
      if (!visibleItems.length) return;
      currentItemIdx = (currentItemIdx - 1 + visibleItems.length) % visibleItems.length;
      updateLightboxContent();
    };

    const handleGalleryClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const galleryItem = target.closest('.gallery-item') as HTMLElement;
      if (galleryItem) {
        openLightbox(galleryItem);
      }
    };

    document.addEventListener('click', handleGalleryClick);

    const handleCloseClick = () => closeLightbox();
    const handleNextClick = () => nextItem();
    const handlePrevClick = () => prevItem();

    if (btnClose) btnClose.addEventListener('click', handleCloseClick);
    if (btnNext) btnNext.addEventListener('click', handleNextClick);
    if (btnPrev) btnPrev.addEventListener('click', handlePrevClick);

    const handleLightboxClick = (e: MouseEvent) => {
      if (e.target === lightbox) closeLightbox();
    };
    lightbox.addEventListener('click', handleLightboxClick);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleGalleryClick);
      if (btnClose) btnClose.removeEventListener('click', handleCloseClick);
      if (btnNext) btnNext.removeEventListener('click', handleNextClick);
      if (btnPrev) btnPrev.removeEventListener('click', handlePrevClick);
      lightbox.removeEventListener('click', handleLightboxClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="lightbox-modal" id="galleryLightbox" role="dialog" aria-modal="true" aria-label="Image Lightbox">
      <button className="lightbox-btn lightbox-btn-close" aria-label="Close"><i class="bi bi-x-lg"></i></button>
      <button className="lightbox-btn lightbox-btn-prev" aria-label="Previous"><i class="bi bi-chevron-left"></i></button>
      <button className="lightbox-btn lightbox-btn-next" aria-label="Next"><i class="bi bi-chevron-right"></i></button>
      <div className="lightbox-content-wrap">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" alt="Gallery Preview" className="lightbox-image" />
        <div className="lightbox-caption-bar">
          <h5 className="lightbox-caption-title mb-0">Ember & Olive</h5>
          <div className="lightbox-counter">1 / 10</div>
        </div>
      </div>
    </div>
  );
};
