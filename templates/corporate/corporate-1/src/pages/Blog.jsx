import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Clock, Calendar, Sparkles, BookOpen } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';
import CTA from '../components/CTA';
import { blogPosts } from '../data/blog';
import './BlogPage.css';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI', 'Cloud', 'Data', 'Engineering', 'Security', 'Strategy'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="blog-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="THE ENTERPRISE SIGNAL"
        title="Ideas for what comes next."
        subtitle="In-depth technical blueprints, architectural post-mortems, and executive strategy briefs written by our principal engineers and fellows."
        breadcrumbs={[{ label: 'Insights' }]}
      />

      {/* 2. Featured Spotlight Article */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="featured-blog-section">
          <div className="container">
            <div className="featured-article-card">
              <div className="featured-img-wrap">
                <img src={featuredPost.featuredImage} alt={featuredPost.title} className="featured-img" />
                <div className="featured-overlay" />
                <span className="featured-badge">FEATURED ARTICLE</span>
              </div>

              <div className="featured-content">
                <div className="featured-meta">
                  <span className="badge badge-brand">{featuredPost.categoryLabel}</span>
                  <span className="meta-dot">•</span>
                  <span className="meta-time"><Clock size={14} /> {featuredPost.readingTime}</span>
                </div>

                <h2 className="featured-title">
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>

                <p className="featured-excerpt">{featuredPost.excerpt}</p>

                <div className="featured-footer">
                  <div className="author-row">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="author-avatar" />
                    <div>
                      <h4 className="author-name">{featuredPost.author.name}</h4>
                      <p className="author-role">{featuredPost.author.role} • {featuredPost.date}</p>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost.slug}`} className="btn btn-primary">
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Search & Category Filters */}
      <section className="blog-directory-section section">
        <div className="container">
          <div className="blog-filter-bar">
            {/* Category tabs */}
            <div className="blog-category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`blog-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="blog-search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="blog-articles-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link to={`/blog/${post.slug}`} className="blog-card-img-link">
                  <div className="blog-card-img-wrap">
                    <img src={post.featuredImage} alt={post.title} className="blog-card-img" loading="lazy" />
                    <div className="blog-card-overlay" />
                    <span className="blog-category-tag">{post.categoryLabel}</span>
                  </div>
                </Link>

                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="meta-date"><Calendar size={13} /> {post.date}</span>
                    <span className="meta-dot">•</span>
                    <span className="meta-read"><Clock size={13} /> {post.readingTime}</span>
                  </div>

                  <h3 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="blog-card-excerpt">{post.excerpt}</p>

                  <div className="blog-card-footer">
                    <div className="author-micro">
                      <img src={post.author.avatar} alt={post.author.name} className="author-micro-avatar" />
                      <span className="author-micro-name">{post.author.name}</span>
                    </div>

                    <Link to={`/blog/${post.slug}`} className="btn-link">
                      <span>Read</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="blog-empty-state">
              <p>No articles found matching "{searchQuery}". Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Newsletter Subscription */}
      <Newsletter />

      {/* 5. CTA */}
      <CTA
        title="Need bespoke technical advisory?"
        description="Schedule a working session with our practice authors and principal research fellows."
      />
    </div>
  );
}
