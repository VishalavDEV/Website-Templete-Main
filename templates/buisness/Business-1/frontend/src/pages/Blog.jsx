import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { apiService } from '../utils/api';
import './Blog.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

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
                      <span><User size={14} /> {featuredBlog.author}</span>
                      <span><Calendar size={14} /> {featuredBlog.date}</span>
                      <span><Clock size={14} /> {featuredBlog.readTime}</span>
                    </div>

                    <a href={`#blog-${featuredBlog.id}`} className="btn btn-primary featured-read-btn">
                      Read Full Article <BookOpen size={16} />
                    </a>
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
                      id={`blog-${blog.id}`}
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
                        
                        {/* Nested Content Overlay representing full text */}
                        <div className="article-body-details">
                          <p>{blog.content}</p>
                        </div>
                      </div>

                      <div className="card-footer-author">
                        <div className="author-details-box">
                          <h4>{blog.author}</h4>
                          <p>{blog.authorRole}</p>
                        </div>
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
    </div>
  );
}
