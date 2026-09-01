import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INSIGHTS_ARTICLES } from '../data/corporateData';

export default function Insights() {
  return (
    <section className="section-ivory" id="insights">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps">SYSTEM RESEARCH & INTELLIGENCE</span>
          </div>
          <h2 className="editorial-heading-lg">THINKING BEYOND TODAY.</h2>
          <p className="editorial-desc">
            Technical research papers, architecture teardowns, and engineering analysis from our systems labs.
          </p>
        </div>

        {/* Premium Editorial List */}
        <div className="editorial-insights-list">
          {INSIGHTS_ARTICLES.map((article, idx) => (
            <Link key={article.id} to="/insights" className="editorial-insight-row">
              <span className="insight-row-num">0{idx + 1}</span>
              <span className="insight-row-cat">{article.category}</span>
              <h3 className="insight-row-title">{article.title}</h3>
              <span className="insight-row-date">{article.date} // {article.readTime}</span>
              <div className="insight-row-arrow">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
