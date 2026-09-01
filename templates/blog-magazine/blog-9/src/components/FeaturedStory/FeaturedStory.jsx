import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Bookmark } from 'lucide-react';
import { getArticleBySlug, getAuthorById } from '../../services/mockApi';
import { useAppStore } from '../../store/appStore';
import './FeaturedStory.css';

export default function FeaturedStory({ slug = 'beneath-a-world-of-ice' }) {
  const [story, setStory] = useState(null);
  const [author, setAuthor] = useState(null);
  const { isArticleSaved, toggleSaveArticle } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    getArticleBySlug(slug).then(art => {
      if (art) {
        setStory(art);
        getAuthorById(art.authorId).then(setAuthor);
      }
    });
  }, [slug]);

  if (!story) return null;

  const isSaved = isArticleSaved(story.id);

  return (
    <section className="featured-story-section" aria-label="Featured Story">
      <div className="atlas-container">
        <div className="atlas-section-eyebrow">Cover Feature</div>
        
        <div
          className="featured-story-card"
          onClick={() => navigate(`/story/${story.slug}`)}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate(`/story/${story.slug}`)}
        >
          <div className="featured-story-bg">
            <img src={story.heroImage} alt={story.title} loading="lazy" />
          </div>
          <div className="featured-story-gradient" />

          <div className="featured-story-content">
            <div className="featured-story-top-meta">
              <span className="featured-story-category">{story.categoryLabel || story.category}</span>
              <span className="featured-story-meta-text">{story.readTime}</span>
              <span className="featured-story-meta-text">·</span>
              <span className="featured-story-meta-text">{story.date}</span>
              {story.location && (
                <>
                  <span className="featured-story-meta-text">·</span>
                  <span className="featured-story-meta-text">{story.location}</span>
                </>
              )}
            </div>

            <h2 className="featured-story-headline">{story.title}</h2>
            <p className="featured-story-dek">{story.subtitle}</p>

            <div className="featured-story-footer">
              {author && (
                <div className="featured-story-author">
                  <img src={author.avatar} alt={author.name} className="featured-story-author-img" />
                  <div>
                    <div className="featured-story-author-name">{author.name}</div>
                    <div className="featured-story-author-role">{author.role}</div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                  type="button"
                  className="atlas-btn atlas-btn-secondary"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.75rem' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveArticle(story.id, story.title);
                  }}
                  aria-label={isSaved ? 'Remove Bookmark' : 'Save Story'}
                >
                  <Bookmark size={15} fill={isSaved ? '#c9933b' : 'none'} color={isSaved ? '#c9933b' : '#f5f2eb'} />
                  <span>{isSaved ? 'Saved' : 'Save Story'}</span>
                </button>

                <div className="featured-story-read-cta">
                  <span>Read the Story</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
