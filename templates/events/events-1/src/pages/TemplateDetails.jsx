import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import { ArrowLeft, Check, Download, ExternalLink, Globe, Layout, ShieldCheck, ShoppingCart } from 'lucide-react';

export default function TemplateDetails({ addToCart, cart }) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api.getTemplateBySlug(slug)
      .then(res => {
        setTemplate(res);
        setLoading(false);
        // Check if redirect parameters trigger immediate download
        if (searchParams.get('action') === 'download' && res.templateType === 'FREE') {
          handleFreeDownload(res.id);
        }
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug, searchParams]);

  const handleFreeDownload = (id) => {
    const user = api.getCurrentUser();
    if (!user) {
      alert('Please sign in or create an account to download free templates.');
      navigate('/auth?redirect=' + encodeURIComponent(window.location.pathname));
      return;
    }

    setDownloading(true);
    api.getDownloadToken(id)
      .then(res => {
        setDownloadLink(res.downloadUrl);
        // Trigger download programmatically
        window.location.href = res.downloadUrl;
        setDownloading(false);
      })
      .catch(err => {
        alert(err.message || 'Error generating secure download token.');
        setDownloading(false);
      });
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <div style={{
          width: 40, height: 40, border: '4px solid #cbd5e1', borderTopColor: 'var(--primary-color)',
          borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px auto'
        }}></div>
        <p style={{ color: 'var(--text-muted)' }}>Loading template details...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!template) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2 style={{ marginBottom: 10 }}>Template Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>The template slug you requested does not exist in our system.</p>
        <Link to="/templates" className="btn btn-primary">Browse Templates</Link>
      </div>
    );
  }

  const isAdded = cart.some(item => item.id === template.id);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', padding: '20px 0' }}>
      {/* Back button */}
      <Link to="/templates" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        marginBottom: 30,
        fontWeight: 600
      }}>
        <ArrowLeft size={16} /> Back to Marketplace
      </Link>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '7fr 4fr',
        gap: 40
      }}>
        {/* Left Column: Gallery, Specs & Tabs */}
        <div>
          <div className="glass-panel" style={{
            padding: 10,
            borderRadius: 20,
            overflow: 'hidden',
            marginBottom: 35,
            background: 'white'
          }}>
            <img
              src={template.previewImage}
              alt={template.name}
              style={{ width: '100%', borderRadius: 12, display: 'block', maxHeight: '420px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>

          {/* Navigation Tabs */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid #e2e8f0',
            marginBottom: 25,
            gap: 20
          }}>
            <button
              onClick={() => setActiveTab('description')}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 6px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: activeTab === 'description' ? 'var(--primary-color)' : 'var(--text-muted)',
                borderBottom: activeTab === 'description' ? '2px solid var(--primary-color)' : 'none',
                cursor: 'pointer'
              }}
            >
              Description & Features
            </button>
            <button
              onClick={() => setActiveTab('licensing')}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 6px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: activeTab === 'licensing' ? 'var(--primary-color)' : 'var(--text-muted)',
                borderBottom: activeTab === 'licensing' ? '2px solid var(--primary-color)' : 'none',
                cursor: 'pointer'
              }}
            >
              Licensing Info
            </button>
            <button
              onClick={() => setActiveTab('php')}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 6px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: activeTab === 'php' ? 'var(--primary-color)' : 'var(--text-muted)',
                borderBottom: activeTab === 'php' ? '2px solid var(--primary-color)' : 'none',
                cursor: 'pointer'
              }}
            >
              PHP Integration Features
            </button>
          </div>

          {/* Tab Contents */}
          <div style={{ minHeight: '180px' }}>
            {activeTab === 'description' && (
              <div>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: 25 }}>
                  {template.description}
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 15 }}>Template Features</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem' }}>
                    <Check size={16} color="#22c55e" /> Responsive UI (Mobile & Desktop)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem' }}>
                    <Check size={16} color="#22c55e" /> Bootstrap 5 SCSS Source Files
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem' }}>
                    <Check size={16} color="#22c55e" /> Cross-Browser Compatible
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem' }}>
                    <Check size={16} color="#22c55e" /> Dynamic {template.pagesCount || 5}+ Page layouts
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem' }}>
                    <Check size={16} color="#22c55e" /> SEO Structured Headers
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem' }}>
                    <Check size={16} color="#22c55e" /> Documentation Included
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'licensing' && (
              <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <h4 style={{ fontWeight: 700, marginBottom: 10 }}>Personal & Commercial Use License</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: 15, fontSize: '0.9rem' }}>
                  TechnoSprint Templates provides templates under a standard personal/commercial use license. Depending on the product type, key provisions apply:
                </p>
                <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.9rem' }}>
                  <li><strong>Free Templates</strong>: Free downloads are available for unlimited projects. Attribution to TechnoSprint is recommended but not mandatory.</li>
                  <li><strong>Premium Templates</strong>: Premium licenses allow usage on one commercial domain or project server. Redistribution, sub-licensing, or re-selling is strictly prohibited.</li>
                  <li><strong>Auto-License Tracking</strong>: For premium purchases, a license key is generated instantly. You can query and validate your license terms directly on your profile dashboard.</li>
                </ul>
              </div>
            )}

            {activeTab === 'php' && (
              <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <h4 style={{ fontWeight: 700, marginBottom: 10 }}>Downloadable PHP contact form component</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: 15, fontSize: '0.9rem' }}>
                  Unlike typical HTML-only files, this template archive comes pre-packaged with a fully-functional PHP script configuration:
                </p>
                <div className="glass-panel" style={{ padding: 20, background: '#f8fafc', borderRadius: 10, marginBottom: 15 }}>
                  <ul style={{ paddingLeft: 10, display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.85rem', listStyle: 'none' }}>
                    <li style={{ display: 'flex', alignItems: 'start', gap: 8 }}>
                      <span style={{ color: 'var(--primary-color)' }}>✔</span>
                      <div><strong>contact.php</strong>: Process inputs safely with form validation and strip dangerous characters.</div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'start', gap: 8 }}>
                      <span style={{ color: 'var(--primary-color)' }}>✔</span>
                      <div><strong>AJAX Integrations</strong>: Send inputs asynchronously using JavaScript fetch without reloading the template layout page.</div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'start', gap: 8 }}>
                      <span style={{ color: 'var(--primary-color)' }}>✔</span>
                      <div><strong>Deployment Ready</strong>: Upload the extracted folder directly to a PHP-enabled hosting provider (or Apache/Nginx web servers).</div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Pricing details card */}
        <div>
          <div className="glass-panel" style={{
            padding: 30,
            borderRadius: 20,
            background: 'white',
            position: 'sticky',
            top: 100
          }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '99px',
              background: 'rgba(0,102,255,0.08)',
              color: 'var(--primary-color)',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: 15
            }}>
              {template.category.name}
            </span>
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: 6 }}>{template.name}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 20 }}>
              Bootstrap Framework Template • Active Licensing
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 25 }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>
                {template.templateType === 'FREE' ? 'Free' : `$${template.price.toFixed(2)}`}
              </span>
              {template.templateType === 'PREMIUM' && <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Lifetime updates</span>}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 30 }}>
              {template.templateType === 'FREE' ? (
                <button
                  onClick={() => handleFreeDownload(template.id)}
                  disabled={downloading}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px 0' }}
                >
                  <Download size={18} /> {downloading ? 'Preparing Archive...' : 'Free Download'}
                </button>
              ) : (
                <button
                  onClick={() => addToCart(template)}
                  disabled={isAdded}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px 0' }}
                >
                  <ShoppingCart size={18} /> {isAdded ? 'Added to Cart' : `Buy Template ($${template.price})`}
                </button>
              )}

              <a
                href={template.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', padding: '12px 0' }}
              >
                <Globe size={18} /> Live Interactive Demo <ExternalLink size={14} />
              </a>
            </div>

            {/* Info Table */}
            <div style={{
              borderTop: '1px solid #e2e8f0',
              paddingTop: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              fontSize: '0.85rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>License</span>
                <span style={{ fontWeight: 600 }}>{template.templateType === 'FREE' ? 'Personal' : 'Commercial Single-Use'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Bootstrap Version</span>
                <span style={{ fontWeight: 600 }}>{template.bootstrapVersion}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Page Count</span>
                <span style={{ fontWeight: 600 }}>{template.pagesCount} Pages</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Downloads Log</span>
                <span style={{ fontWeight: 600 }}>{template.downloadsCount} total</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Version</span>
                <span style={{ fontWeight: 600 }}>v{template.version}</span>
              </div>
            </div>

            {/* Security assurance */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 25,
              fontSize: '0.75rem',
              color: '#10b981',
              fontWeight: 600
            }}>
              <ShieldCheck size={16} /> Secure token validation download link.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
