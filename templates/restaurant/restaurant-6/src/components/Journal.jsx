import React from 'react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function Journal({ onOpenEssay }) {
  return (
    <section className="journal-section" id="journal">
      <div className="journal-header">
        <span className="section-label"><span className="accent-line"></span>STORIES & FIELD NOTES</span>
        <h2 className="editorial-heading-large">THE JOURNAL</h2>
      </div>

      <div className="journal-grid">
        {RESTAURANT_DATA.journalData.map(article => (
          <article key={article.id} className="journal-card" data-article-id={article.id}>
            <div className="journal-img-wrapper">
              <img src={article.image} alt={article.title} />
            </div>
            <span className="journal-date">{article.formattedDate} · {article.readTime}</span>
            <h3 className="journal-title">{article.title}</h3>
            <p className="journal-snippet">{article.snippet}</p>
            <a
              href="#"
              className="journal-read-link"
              data-article-id={article.id}
              onClick={(e) => {
                e.preventDefault();
                onOpenEssay(article);
              }}
            >
              READ ESSAY →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
