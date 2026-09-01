import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import HalftoneReveal from '../HalftoneReveal/HalftoneReveal';
import './StoryCard.css';

export default function StoryCard({ story, variant = 'standard', useHalftone = false }) {
  const { isArticleSaved, toggleSaveArticle } = useAppStore();
  const navigate = useNavigate();

  if (!story) return null;

  const isSaved = isArticleSaved(story.id);
  const imageSrc = story.thumbnail || story.heroImage;

  return (
    <article
      className={`story-card story-card--${variant}`}
      onClick={() => navigate(`/story/${story.slug}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/story/${story.slug}`)}
    >
      <div className="story-card-media">
        {useHalftone ? (
          <HalftoneReveal
            src={imageSrc}
            inkColor="#17181c"
            paperColor="#f4efe4"
            mode="mono"
            dotDensity={64}
            angle={25}
            revealRadius={0.36}
            borderRadius="0px"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <img
            src={imageSrc}
            alt={story.title}
            loading="lazy"
          />
        )}
        <button
          type="button"
          className="story-card-bookmark-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleSaveArticle(story.id, story.title);
          }}
          aria-label={isSaved ? 'Remove Bookmark' : 'Save Story'}
        >
          <Bookmark size={15} fill={isSaved ? '#c4892c' : 'none'} color={isSaved ? '#c4892c' : '#15171e'} />
        </button>
      </div>

      <div className="story-card-body">
        <div className="story-card-top-meta">
          <span className="story-card-cat">{story.categoryLabel || story.category}</span>
          <span style={{ color: 'var(--border-medium)' }}>·</span>
          <span className="story-card-read-time">{story.readTime}</span>
        </div>

        <h3 className="story-card-title">{story.title}</h3>
        <p className="story-card-dek">{story.excerpt || story.subtitle}</p>

        <div className="story-card-footer">
          <span className="story-card-author">{story.author}</span>
          <span>{story.date}</span>
        </div>
      </div>
    </article>
  );
}
