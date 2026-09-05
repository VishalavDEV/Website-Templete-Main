import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, User, ArrowRight, BookOpen, X, Sparkles, Share2, ThumbsUp, BookmarkCheck } from 'lucide-react';
import { apiService } from '../utils/api';
import './Blog.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Innovation', 'Technology', 'Strategy', 'Marketing', 'Business'];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await apiService.getBlogs();
        setBlogs(data);
        if (data.length > 0) {
          // Take the first article as the featured article
          setFeaturedBlog(data[0]);
          setFilteredBlogs(data.slice(1)); // The rest go in the grid
        }
      } catch (err) {
        console.error("Failed fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Keyboard close support for article modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArticle]);

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    setLiked(false);
    setCopied(false);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSearchAndFilter = (category, query) => {
    setActiveCategory(category);
    setSearchQuery(query);

    let result = blogs;

    // Filter by Category
    if (category !== 'All') {
      result = result.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
    }

    // Filter by Search Query
    if (query.trim() !== '') {
      const q = query.toLowerCase();
      result = result.filter(blog =>
        blog.title.toLowerCase().includes(q) ||
        blog.summary.toLowerCase().includes(q) ||
        blog.author.toLowerCase().includes(q)
      );
    }

    // Set grid articles (excluding the featured one, unless category/search changes its scope)
    if (category === 'All' && query.trim() === '') {
      if (blogs.length > 0) {
        setFeaturedBlog(blogs[0]);
        setFilteredBlogs(blogs.slice(1));
      }
    } else {
      setFeaturedBlog(null); // Remove featured banner during searches for unified layout grid
      setFilteredBlogs(result);
    }
  };

  return (
    <div className="blog-page">
      {/* Background Orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Header */}
      <section className="blog-header section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">INSIGHTS</span>
            <h1 className="large-headline">Corporate & Technology <br /><span className="text-gradient">Analysis</span></h1>
            <p className="lead-paragraph">
              Stay updated on modern cloud configurations, operational design roadmaps, and B2B growth engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Navigation Bar */}
      <section className="blog-controls-section">
        <div className="container controls-grid-row">
          
          {/* Horizontal Category List */}
          <div className="blog-categories-list">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleSearchAndFilter(cat, searchQuery)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="blog-search-box glass-card">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => handleSearchAndFilter(activeCategory, e.target.value)}
            />
          </div>

        </div>
      </section>

      {/* Blog Content Layout */}
      <section className="blog-content-section section-padding">
        <div className="container">
          {loading ? (
            <div className="loading-spinner-box">
              <div className="spinner"></div>
              <p>Loading insights...</p>
            </div>
          ) : (
            <>
              {/* Featured Article Banner */}
              {featuredBlog && (
                <motion.div
                  className="featured-blog-banner glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="featured-blog-info">
                    <span className="blog-meta-tag">{featuredBlog.category}</span>
                    <h2>{featuredBlog.title}</h2>
                    <p>{featuredBlog.summary}</p>
                    
                    <div className="blog-meta-row">
                      <span><User size={14} /> {featuredBlog.author} ({featuredBlog.authorRole})</span>
                      <span><Calendar size={14} /> {featuredBlog.date}</span>
                      <span><Clock size={14} /> {featuredBlog.readTime}</span>
                    </div>

                    <button
                      onClick={() => handleOpenArticle(featuredBlog)}
                      className="btn btn-primary featured-read-btn"
                      aria-label="Read Featured Article"
                    >
                      Read Full Article <BookOpen size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Grid Article List */}
              <div className="blog-articles-grid">
                <AnimatePresence>
                  {filteredBlogs.map((blog) => (
                    <motion.article
                      className="blog-article-card glass-card"
                      key={blog.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="card-top-header">
                        <span className="blog-meta-tag">{blog.category}</span>
                        <div className="blog-meta-row card-meta">
                          <span><Calendar size={12} /> {blog.date}</span>
                          <span><Clock size={12} /> {blog.readTime}</span>
                        </div>
                      </div>

                      <div className="card-body-content">
                        <h3>{blog.title}</h3>
                        <p>{blog.summary}</p>
                      </div>

                      <div className="card-footer-author">
                        <div className="author-details-box">
                          <h4>{blog.author}</h4>
                          <p>{blog.authorRole}</p>
                        </div>
                        <button
                          onClick={() => handleOpenArticle(blog)}
                          className="read-article-link-btn"
                          aria-label={`Read article ${blog.title}`}
                        >
                          Read Article <ArrowRight size={14} />
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {filteredBlogs.length === 0 && !featuredBlog && (
                <div className="empty-search-state text-center glass-card">
                  <h2>No Articles Found</h2>
                  <p>No matches for your search term. Try resetting filters or updating queries.</p>
                  <button className="btn btn-secondary" onClick={() => handleSearchAndFilter('All', '')}>
                    Reset Search & Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Dedicated Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="article-modal-backdrop" onClick={() => setSelectedArticle(null)}>
            <motion.div
              className="article-modal-card glass-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.25 }}
            >
              {/* Top Modal Controls */}
              <div className="article-modal-nav">
                <div className="article-tag-group">
                  <span className="blog-meta-tag">{selectedArticle.category}</span>
                  <span className="reading-time-pill"><Clock size={13} /> {selectedArticle.readTime}</span>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article reader"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Article Header */}
              <div className="article-modal-header">
                <h1>{selectedArticle.title}</h1>
                <div className="article-author-byline">
                  <div className="author-avatar-badge">
                    {selectedArticle.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4>{selectedArticle.author}</h4>
                    <p>{selectedArticle.authorRole} • Published on {selectedArticle.date}</p>
                  </div>
                </div>
              </div>

              {/* Key Takeaways Callout */}
              <div className="article-takeaways-box">
                <div className="takeaways-header">
                  <Sparkles size={16} color="var(--color-blue)" />
                  <h4>Key Strategic Takeaways</h4>
                </div>
                <p>{selectedArticle.summary}</p>
              </div>

              {/* Full Article Content */}
              <div className="article-full-body">
                <p className="article-lead-p">{selectedArticle.content}</p>
                
                <h3>Core Strategic Principles & Operational Takeaways</h3>
                <p>
                  When deploying systems of this magnitude, continuous testing and cross-functional alignment are crucial. Organizations that combine technical modernization with employee onboarding programs achieve a 40% faster milestone turnaround and significantly lower maintenance overhead.
                </p>
                <p>
                  Whether you are scaling custom microservices or refactoring legacy architectures, having structured metric benchmarks allows leadership to observe real ROI from sprint zero.
                </p>
              </div>

              {/* Article Footer & Actions */}
              <div className="article-modal-footer">
                <div className="article-action-buttons">
                  <button
                    className={`article-action-btn ${liked ? 'liked' : ''}`}
                    onClick={() => setLiked(prev => !prev)}
                  >
                    <ThumbsUp size={16} />
                    <span>{liked ? 'Liked (1)' : 'Helpful'}</span>
                  </button>
                  <button
                    className="article-action-btn"
                    onClick={handleShare}
                  >
                    {copied ? <BookmarkCheck size={16} color="#00ffaa" /> : <Share2 size={16} />}
                    <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
                  </button>
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedArticle(null)}
                >
                  Back to Insights
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

