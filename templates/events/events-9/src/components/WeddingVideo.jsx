import React, { useRef, useEffect } from 'react';
import { weddingData } from '../data/weddingData';

export default function WeddingVideo() {
  const bgImagePath = "/images/wedding-bg.png";

  return (
    <div className="hero-background-container">
      {/* USER UPLOADED CATHEDRAL BACKGROUND IMAGE WITH MINIMAL BRIGHTNESS REDUCTION */}
      <img 
        src={bgImagePath} 
        alt="Avelune Vows Stained Glass Cathedral Wedding Background" 
        className="hero-background-img"
        loading="eager"
      />

      {/* LIGHT TRANSLUCENT OVERLAY FOR OPTIMAL CONTRAST & BRIGHTNESS */}
      <div className="hero-overlay-light"></div>
    </div>
  );
}
