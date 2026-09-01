import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import DepthCarousel from '../DepthCarousel/DepthCarousel';
import { getIssues } from '../../services/mockApi';
import './CurrentIssue.css';

export default function CurrentIssue() {
  const [issues, setIssues] = useState([]);
  const [activeIssue, setActiveIssue] = useState(null);

  useEffect(() => {
    getIssues().then(data => {
      setIssues(data);
      if (data.length > 0) setActiveIssue(data[0]);
    });
  }, []);

  const carouselItems = issues.map(iss => ({
    image: iss.coverImage,
    alt: `${iss.month} ${iss.year} - ${iss.title}`,
    title: iss.title,
    tag: `${iss.month.toUpperCase()} ${iss.year}`,
    dek: iss.subtitle,
    link: `/magazine/${iss.slug}`
  }));

  const handleCarouselChange = (idx) => {
    if (issues[idx]) {
      setActiveIssue(issues[idx]);
    }
  };

  if (!issues.length || !activeIssue) return null;

  return (
    <section className="current-issue-section" aria-label="The Current Issue">
      <div className="atlas-container">
        <div className="current-issue-grid">
          <div className="current-issue-editorial">
            <div className="current-issue-tag">
              <Layers size={14} />
              <span>The Current Issue · {activeIssue.month} {activeIssue.year}</span>
            </div>

            <h2 className="current-issue-headline">{activeIssue.title}</h2>

            <p className="current-issue-dek">
              {activeIssue.editorialNote}
            </p>

            <div className="current-issue-stories-box">
              <div className="current-issue-stories-heading">Inside this issue:</div>
              <ul className="current-issue-stories-list">
                {activeIssue.stories.map((s, idx) => (
                  <li key={idx} className="current-issue-story-item">
                    <Link to={`/story/${s.slug}`} className="current-issue-story-title">
                      {s.title}
                    </Link>
                    <span className="current-issue-story-cat">{s.category}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to={`/magazine/${activeIssue.slug}`} className="atlas-btn atlas-btn-primary">
                <BookOpen size={16} />
                <span>Read Full Issue</span>
              </Link>
              <Link to="/magazine" className="atlas-btn atlas-btn-secondary">
                <span>View Archive ({issues.length})</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="current-issue-carousel-wrap">
            <DepthCarousel
              items={carouselItems}
              cardWidth={300}
              cardHeight={420}
              spread={80}
              depth={200}
              tilt={18}
              onChange={handleCarouselChange}
              autoplay={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
