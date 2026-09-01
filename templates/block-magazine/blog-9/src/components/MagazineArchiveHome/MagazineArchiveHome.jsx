import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { getIssues } from '../../services/mockApi';
import './MagazineArchiveHome.css';

export default function MagazineArchiveHome() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues().then(data => setIssues(data.slice(0, 3)));
  }, []);

  if (!issues.length) return null;

  return (
    <section className="magazine-archive-home" aria-label="Magazine Archive Highlight">
      <div className="atlas-container">
        <div className="magazine-archive-header">
          <div>
            <div className="atlas-section-eyebrow">
              <BookOpen size={14} />
              <span>The Print & Digital Collection</span>
            </div>
            <h2 className="atlas-section-title">Magazine Archive</h2>
            <p className="atlas-section-subtitle">
              Explore past monthly issues spanning decades of investigative journalism, expedition cartography, and scientific breakthroughs.
            </p>
          </div>

          <Link to="/magazine" className="atlas-btn atlas-btn-secondary">
            <span>Explore Complete Archive</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="magazine-archive-grid">
          {issues.map(iss => (
            <Link key={iss.id} to={`/magazine/${iss.slug}`} className="magazine-archive-card">
              <div className="magazine-archive-cover">
                <img src={iss.coverImage} alt={iss.title} loading="lazy" />
              </div>
              <div className="magazine-archive-body">
                <span className="magazine-archive-date">{iss.month} {iss.year} · {iss.number}</span>
                <h3 className="magazine-archive-title">{iss.title}</h3>
                <p className="magazine-archive-meta">{iss.subtitle}</p>
                <div className="magazine-archive-link">
                  <span>Read Issue ({iss.storyCount} Stories)</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
