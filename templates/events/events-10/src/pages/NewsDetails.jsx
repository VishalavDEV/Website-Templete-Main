import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tournamentData } from '../data/tournamentData';
import { ArrowLeft, Calendar, Share2, User } from 'lucide-react';

export const NewsDetails = () => {
  const { id } = useParams();
  const article = tournamentData.news.find((n) => n.id === id) || tournamentData.news[0];

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container" style={{ maxWidth: '900px' }}>
          <Link to="/news" className="btn-outline" style={{ marginBottom: '24px', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> BACK TO NEWS
          </Link>

          <div className="sports-card" style={{ padding: '40px' }}>
            <span className="badge-live" style={{ background: '#ff4d00', color: '#050505', marginBottom: '16px' }}>
              {article.category}
            </span>

            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.05, marginBottom: '16px' }}>
              {article.title}
            </h1>

            <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '30px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} color="#ff4d00" />
                <span>{article.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} color="#ff4d00" />
                <span>COURTSIDE MEDIA DESK</span>
              </div>
            </div>

            <div style={{ height: '400px', borderRadius: '8px', overflow: 'hidden', marginBottom: '30px' }}>
              <img
                src={article.image}
                alt={article.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/arena-bg.jpg';
                }}
              />
            </div>

            <div style={{ fontSize: '1.15rem', color: 'var(--white)', lineHeight: 1.8, marginBottom: '30px' }}>
              <p style={{ marginBottom: '20px' }}>{article.summary}</p>
              <p>{article.content}</p>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="font-sports" style={{ color: '#ff4d00' }}>SHARE THIS ARTICLE</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}><Share2 size={14} /> TWITTER</button>
                <button className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}><Share2 size={14} /> FACEBOOK</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
