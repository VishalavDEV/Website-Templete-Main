import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Building } from 'lucide-react';

export default function ProjectsSection({ onOpenProjectModal, onOpenVideo, addToast }) {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const fallbackProjects = [
    {
      id: 1,
      title: 'Commercial Complex',
      category: 'commercial',
      badge: 'Commercial',
      subtitle: 'Modern commercial space',
      image: './assets/images/commercial.jpg',
      gallery: ['./assets/images/commercial.jpg', './assets/images/interior.jpg', './assets/images/hero-villa.jpg'],
      location: 'Metropolitan Financial District, NY',
      area: '145,000 sq ft',
      duration: '22 Months',
      architect: 'KPF Architects & BuildHub Engineering',
      client: 'Axon Global Holdings',
      desc: 'An iconic 12-story high-performance commercial headquarters featuring energy-efficient double-glazed curtain walls, LEED Gold certification, and advanced HVAC automation.',
      highlights: ['LEED Gold Certified', 'Seismic Resilience Grade A', 'Full Smart BMS Automation']
    },
    {
      id: 2,
      title: 'Luxury Villa',
      category: 'villa',
      badge: 'Luxury Villa',
      subtitle: 'Elegant and sustainable design',
      image: './assets/images/hero-villa.jpg',
      gallery: ['./assets/images/hero-villa.jpg', './assets/images/interior.jpg', './assets/images/commercial.jpg'],
      location: 'Malibu Coastal Ridge, CA',
      area: '8,400 sq ft',
      duration: '14 Months',
      architect: 'Studio Horizon Design',
      client: 'Private Residence',
      desc: 'A bespoke coastal architectural residence featuring expansive cantilevered roofs, heated infinity pool overlooking the ocean, and automated smart solar integration.',
      highlights: ['Custom Cantilever Engineering', 'Infinity Pool & Spa', 'Off-grid Solar Battery System']
    },
    {
      id: 3,
      title: 'Residential Apartment',
      category: 'residential',
      badge: 'Residential',
      subtitle: 'Comfortable urban living',
      image: './assets/images/residential.jpg',
      gallery: ['./assets/images/residential.jpg', './assets/images/hero-villa.jpg', './assets/images/interior.jpg'],
      location: 'Arbor District, Seattle, WA',
      area: '54,000 sq ft',
      duration: '18 Months',
      architect: 'Pacific Urban Architects',
      client: 'Arbor Living Partners',
      desc: 'A 6-story boutique residential complex equipped with wooden louvers, private garden terraces, acoustic insulation, and subterranean parking.',
      highlights: ['Biophilic Façade Design', 'Soundproof Triple Glazing', 'Rooftop Community Sky Lounge']
    },
    {
      id: 4,
      title: 'Office Interior',
      category: 'interior',
      badge: 'Office Interior',
      subtitle: 'Functional and aesthetic interiors',
      image: './assets/images/interior.jpg',
      gallery: ['./assets/images/interior.jpg', './assets/images/commercial.jpg', './assets/images/hero-villa.jpg'],
      location: 'Midtown Tech Center, Austin, TX',
      area: '28,000 sq ft',
      duration: '6 Months',
      architect: 'BuildHub Interior Studio',
      client: 'CloudScale Technologies',
      desc: 'Turnkey interior transformation featuring bespoke fluted walnut acoustic wall paneling, acoustic privacy pods, executive boardrooms, and ergonomic lighting.',
      highlights: ['Acoustic Decibel Rating 48+', 'Custom Millwork & Glass', 'Circadian LED Lighting']
    }
  ];

  useEffect(() => {
    fetchProjects(activeCategory);
  }, [activeCategory]);

  const fetchProjects = async (category) => {
    setLoading(true);
    try {
      const url = category === 'all' 
        ? '/api/projects' 
        : `/api/projects?category=${encodeURIComponent(category)}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setProjects(data && data.length > 0 ? data : fallbackProjects);
      } else {
        setProjects(category === 'all' ? fallbackProjects : fallbackProjects.filter(p => p.category === category));
      }
    } catch (e) {
      console.warn('Backend API connection offline, using fallback client data', e);
      setProjects(category === 'all' ? fallbackProjects : fallbackProjects.filter(p => p.category === category));
    } finally {
      setLoading(false);
    }
  };

  const handleFilterClick = (cat) => {
    setActiveCategory(cat);
  };

  return (
    <section className="projects-section perspective-container" id="projects">
      <div className="container">
        <div className="projects-header-row">
          <div>
            <div className="section-tag">OUR WORK</div>
            <h2 className="section-title">OUR RECENT PROJECTS</h2>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-primary" 
              onClick={onOpenVideo} 
              style={{ boxShadow: '0 0 20px rgba(229, 169, 60, 0.4)', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Play size={15} fill="currentColor" />
              <span>WATCH 4K VIDEO TOUR</span>
            </button>
            <button 
              className="btn btn-outline-gold" 
              onClick={() => {
                setActiveCategory('all');
                addToast('Showing all completed architectural masterworks!');
              }}
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-bar">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'commercial', label: 'Commercial' },
            { key: 'villa', label: 'Luxury Villa' },
            { key: 'residential', label: 'Residential' },
            { key: 'interior', label: 'Office Interior' }
          ].map(tab => (
            <button 
              key={tab.key}
              className={`filter-btn ${activeCategory === tab.key ? 'active' : ''}`}
              onClick={() => handleFilterClick(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((p) => (
            <div 
              key={p.id} 
              className="project-card"
              onClick={() => onOpenProjectModal(p)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-img-box">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="project-badge">{p.badge}</span>
              </div>
              <div className="project-info-bar">
                <div className="project-info-left">
                  <div className="project-icon-box">
                    <Building size={20} />
                  </div>
                  <div className="project-meta">
                    <h4 className="project-title">{p.title}</h4>
                    <span className="project-subtitle">{p.subtitle}</span>
                  </div>
                </div>
                <button className="project-arrow-btn" aria-label="View Project Details">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
