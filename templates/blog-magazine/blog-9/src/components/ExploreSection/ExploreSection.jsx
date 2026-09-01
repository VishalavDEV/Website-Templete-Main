import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import AccordionGallery from '../AccordionGallery/AccordionGallery';
import { getCategories } from '../../services/mockApi';
import './ExploreSection.css';

export default function ExploreSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const accordionItems = categories.map(cat => ({
    image: cat.panelImage || cat.heroImage,
    label: cat.name.toUpperCase(),
    desc: cat.description,
    link: `/${cat.slug}`
  }));

  return (
    <section className="explore-section" aria-label="Explore Categories">
      <div className="atlas-container">
        <div className="explore-section-header">
          <div>
            <div className="atlas-section-eyebrow">
              <Compass size={14} />
              <span>Departments of Discovery</span>
            </div>
            <h2 className="atlas-section-title">Explore the World</h2>
            <p className="atlas-section-subtitle">
              Choose a direction. There is more than one way to discover the planet and the cosmos.
            </p>
          </div>

          <Link to="/explore" className="atlas-btn atlas-btn-secondary">
            <span>View All Topics</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {accordionItems.length > 0 && (
          <AccordionGallery
            items={accordionItems}
            height={520}
            expandRatio={0.42}
            gap={12}
            radius={16}
          />
        )}
      </div>
    </section>
  );
}
