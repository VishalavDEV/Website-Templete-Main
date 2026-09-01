import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, Calendar, Share2, Bookmark, Check, Copy, Sparkles } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';
import CTA from '../components/CTA';
import { blogPosts } from '../data/blog';
import './BlogDetails.css';

export default function BlogDetails() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="blog-details-page">
      {/* 1. Page Header */}
      <PageHeader
        tag={`INSIGHTS • ${post.categoryLabel.toUpperCase()}`}
        title={post.title}
        breadcrumbs={[
          { label: 'Insights', link: '/blog' },
          { label: post.categoryLabel }
        ]}
      />

      {/* 2. Article Hero & Author Info */}
      <section className="article-hero-section">
        <div className="container container-narrow">
          <div className="article-author-card">
            <div className="author-left">
              <img src={post.author.avatar} alt={post.author.name} className="article-avatar" />
              <div>
                <h4 className="article-author-name">{post.author.name}</h4>
                <p className="article-author-title">{post.author.role}</p>
              </div>
            </div>

            <div className="article-meta-right">
              <span className="meta-tag"><Calendar size={14} /> {post.date}</span>
              <span className="meta-tag"><Clock size={14} /> {post.readingTime}</span>
            </div>
          </div>

          <div className="article-featured-image-wrapper">
            <img src={post.featuredImage} alt={post.title} className="article-main-image" />
          </div>
        </div>
      </section>

      {/* 3. Main Body & Sticky Table of Contents */}
      <section className="article-body-section section">
        <div className="container">
          <div className="article-layout-grid">
            {/* Left Sidebar Table of Contents */}
            <aside className="article-sidebar">
              {post.tableOfContents && (
                <div className="toc-box">
                  <h4 className="toc-title">Table of Contents</h4>
                  <ul className="toc-list">
                    {post.tableOfContents.map((toc) => (
                      <li key={toc.id}>
                        <a href={`#${toc.id}`} className="toc-link">
                          {toc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share Toolkit */}
              <div className="share-box">
                <span className="share-label">Share Insight:</span>
                <div className="share-buttons-row">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn"
                    aria-label="Share on X"
                  >
                    <TwitterIcon size={16} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn"
                    aria-label="Share on LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <button onClick={copyShareLink} className="share-btn" aria-label="Copy Link">
                    {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && <span className="copy-notif">Link copied!</span>}
              </div>
            </aside>

            {/* Main Article Content */}
            <article className="article-prose">
              <div
                className="prose-content"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/### (.*?)\n/g, '<h3 class="prose-h3">$1</h3>')
                    .replace(/## (.*?)\n/g, '<h2 class="prose-h2">$1</h2>')
                    .replace(/> \*\*(.*?)\*\*/g, '<blockquote class="prose-quote"><strong>$1</strong>')
                    .replace(/\n\n/g, '</p><p class="prose-p">')
                }}
              />

              {/* End of article author signature */}
              <div className="article-author-bio-box">
                <img src={post.author.avatar} alt={post.author.name} className="bio-avatar" />
                <div>
                  <h4 className="bio-name">Written by {post.author.name}</h4>
                  <p className="bio-role">{post.author.role} at NEXORA Technologies</p>
                  <p className="bio-desc">
                    Specializing in autonomous reasoning systems, high-concurrency cloud infrastructure, and enterprise digital strategy.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Related Insights */}
      {relatedPosts.length > 0 && (
        <section className="related-articles-section section section-alt">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">KEEP READING</span>
              <h2 className="section-title">Related Technical Briefs</h2>
            </div>

            <div className="related-articles-grid">
              {relatedPosts.map((r) => (
                <article key={r.id} className="related-post-card">
                  <Link to={`/blog/${r.slug}`} className="related-thumb-link">
                    <img src={r.featuredImage} alt={r.title} className="related-thumb" loading="lazy" />
                  </Link>
                  <div className="related-post-body">
                    <span className="badge badge-brand">{r.categoryLabel}</span>
                    <h4 className="related-post-title">
                      <Link to={`/blog/${r.slug}`}>{r.title}</Link>
                    </h4>
                    <p className="related-post-excerpt">{r.excerpt}</p>
                    <Link to={`/blog/${r.slug}`} className="btn-link">
                      <span>Read Insight</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Newsletter */}
      <Newsletter />

      {/* 6. CTA */}
      <CTA
        title="Facing an architecture transformation?"
        description="Partner with our research fellows and engineering leaders to design your multi-year strategy."
      />
    </div>
  );
}
