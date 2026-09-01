import React, { useEffect, useState } from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DepthCarousel from '../DepthCarousel/DepthCarousel';
import { getPhotoEssays } from '../../services/mockApi';
import './PhotoEssays.css';

export default function PhotoEssays() {
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    getPhotoEssays().then(setEssays);
  }, []);

  const carouselItems = essays.map(essay => ({
    image: essay.heroImage,
    alt: essay.title,
    title: essay.title,
    tag: `${essay.location.toUpperCase()}`,
    dek: essay.subtitle,
    link: `/photo/${essay.slug}`
  }));

  if (!essays.length) return null;

  return (
    <section className="photo-essays-section" aria-label="Photo Essays">
      <div className="atlas-container">
        <div className="photo-essays-header">
          <div className="atlas-section-eyebrow">
            <Camera size={14} />
            <span>Visual Storytelling</span>
          </div>
          <h2 className="atlas-section-title">Photo Essays</h2>
          <p className="atlas-section-subtitle">
            Immersive dispatches captured by exploratory photojournalists on the frontiers of environmental extremes.
          </p>
        </div>

        <div className="photo-essays-carousel-wrap">
          <DepthCarousel
            items={carouselItems}
            cardWidth={340}
            cardHeight={460}
            spread={100}
            depth={220}
            tilt={20}
            autoplay={true}
            autoplayDelay={4000}
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/photography" className="atlas-btn atlas-btn-secondary">
            <span>View All Photo Essays</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
