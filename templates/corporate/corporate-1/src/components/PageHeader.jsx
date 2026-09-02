import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageHeader.css';

export default function PageHeader({ tag, title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="luxury-page-header">
      <div className="page-header-ambient">
        <div className="page-glow-spot" />
        <div className="page-fine-grid" />
      </div>

      <div className="container page-header-layout">
        <div className="page-header-text-block">
          {breadcrumbs.length > 0 && (
            <nav className="luxury-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/" className="b-link">Home</Link>
              {breadcrumbs.map((item, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight size={13} className="b-sep" />
                  {item.link ? (
                    <Link to={item.link} className="b-link">{item.label}</Link>
                  ) : (
                    <span className="b-curr">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {tag && <div className="section-tag">{tag}</div>}
          <h1 className="page-header-main-title">{title}</h1>
          {subtitle && <p className="page-header-lead">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
