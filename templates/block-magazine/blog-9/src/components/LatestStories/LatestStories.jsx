import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import StoryCard from '../StoryCard/StoryCard';
import { getArticles } from '../../services/mockApi';
import './LatestStories.css';

export default function LatestStories() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(data => {
      // Exclude the lead cover story from featured section to avoid immediate duplication
      const list = data.filter(a => a.slug !== 'beneath-a-world-of-ice');
      setArticles(list);
    });
  }, []);

  if (!articles.length) return null;

  const leadStory = articles[0];
  const secondaryStories = articles.slice(1, 3);
  const compactStories = articles.slice(3, 7);

  return (
    <section className="latest-stories-section" aria-label="Latest Editorial Stories">
      <div className="atlas-container">
        <div className="latest-stories-header">
          <div>
            <div className="atlas-section-eyebrow">
              <Flame size={14} />
              <span>Editorial Feed</span>
            </div>
            <h2 className="atlas-section-title">Latest Dispatches</h2>
            <p className="atlas-section-subtitle">
              Fresh investigation, fieldwork, and dispatches directly from global research expeditions.
            </p>
          </div>

          <Link to="/explore" className="atlas-btn atlas-btn-secondary">
            <span>Explore All Dispatches</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Lead + Secondary Grid */}
        <div className="latest-stories-grid">
          {leadStory && <StoryCard story={leadStory} variant="lead" />}
          {secondaryStories.map(s => (
            <StoryCard key={s.id} story={s} variant="standard" />
          ))}
        </div>

        {/* Compact 4-Card Subgrid */}
        {compactStories.length > 0 && (
          <div className="latest-stories-subgrid">
            {compactStories.map(s => (
              <StoryCard key={s.id} story={s} variant="compact" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
