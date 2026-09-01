import React from 'react';
import { Gallery } from '../components/Gallery';

export const GalleryPage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>GALLERY</span>
            </h1>
            <div className="section-subtitle">ATHLETIC ACTION, FANS & COURTSIDE PHOTOGRAPHY</div>
          </div>

          <Gallery />
        </div>
      </section>
    </div>
  );
};
