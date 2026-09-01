import React from 'react';
import { weddingData } from '../data/weddingData';

export default function ImageCollage() {
  return (
    <div className="hero-collage-container">
      {/* LEFT IMAGE: BOUQUET / DETAIL */}
      <div className="collage-item collage-left">
        <img 
          src={weddingData.heroImages.leftBouquet} 
          alt="Luxury Wedding Bouquet Detail" 
          loading="eager"
        />
      </div>

      {/* CENTER IMAGE: LARGE COUPLE PORTRAIT */}
      <div className="collage-item collage-center">
        <img 
          src={weddingData.heroImages.centerCouple} 
          alt={`${weddingData.couple.brideFull} & ${weddingData.couple.groomFull}`} 
          loading="eager"
        />
      </div>

      {/* RIGHT IMAGE: BRIDE / WEDDING DETAIL */}
      <div className="collage-item collage-right">
        <img 
          src={weddingData.heroImages.rightBride} 
          alt="Bride with Bouquet" 
          loading="eager"
        />
      </div>
    </div>
  );
}
