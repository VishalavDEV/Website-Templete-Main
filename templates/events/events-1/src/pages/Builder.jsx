import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Plus, Trash, Save, Download, Play, Undo, ArrowLeft, Paintbrush, FileText, CheckCircle } from 'lucide-react';

export default function Builder({ user }) {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('project');
  const navigate = useNavigate();

  // Project state
  const [projectName, setProjectName] = useState('My Custom Website');
  const [themeColor, setThemeColor] = useState('#0066ff');
  const [themeMode, setThemeMode] = useState('light');
  const [sections, setSections] = useState([
    { id: 'sec-header', type: 'header', title: 'TechnoSprint Solutions' },
    { id: 'sec-hero', type: 'hero', heading: 'We Build Modern Digital Solutions', subheading: 'Custom HTML, CSS, React templates at your fingertips.' },
    { id: 'sec-contact', type: 'contact', header: 'Get in Touch with Us', emailLabel: 'Enter your email', submitText: 'Send Message' },
    { id: 'sec-footer', type: 'footer', copyright: '© 2026 TechnoSprint. All Rights Reserved.' }
  ]);

  const [activeSectionId, setActiveSectionId] = useState('sec-hero');
  const [saving, setSaving] = useState(false);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (!user) {
      alert('Please sign in to access the Online Template Builder.');
      navigate('/auth?redirect=/builder');
      return;
    }

    if (projectId) {
      // Load saved project
      api.getMyProjects()
        .then(projects => {
          const project = projects.find(p => p.id === parseInt(projectId));
          if (project) {
            setProjectName(project.projectName);
            try {
              const data = JSON.parse(project.projectData);
              if (data.themeColor) setThemeColor(data.themeColor);
              if (data.themeMode) setThemeMode(data.themeMode);
              if (data.sections) setSections(data.sections);
            } catch (e) {
              console.error('Failed to parse project configuration:', e);
            }
          }
        })
        .catch(err => console.error(err));
    }
  }, [projectId, user, navigate]);

  // Section management
  const addSection = (type) => {
    const id = `sec-${type}-${Date.now()}`;
    let newSection = { id, type };
    
    if (type === 'features') {
      newSection = {
        ...newSection,
        title: 'Core Advantages',
        feat1: 'Rapid Deployment',
        feat2: 'Modern Tech Stack',
        feat3: 'Active Documentation'
      };
    } else if (type === 'pricing') {
      newSection = {
        ...newSection,
        title: 'Simple, Transparent Pricing',
        planName: 'Developer License',
        price: '$19.00'
      };
    }
    
    // Insert before footer
    const newSections = [...sections];
    const footerIdx = newSections.findIndex(s => s.type === 'footer');
    if (footerIdx !== -1) {
      newSections.splice(footerIdx, 0, newSection);
    } else {
      newSections.push(newSection);
    }
    
    setSections(newSections);
    setActiveSectionId(id);
  };

  const removeSection = (id) => {
    if (sections.length <= 2) {
      alert('Your layout requires at least a header and footer.');
      return;
    }
    const updated = sections.filter(s => s.id !== id);
    setSections(updated);
    if (activeSectionId === id) {
      setActiveSectionId(updated[0].id);
    }
  };

  const updateSectionField = (id, fieldName, val) => {
    setSections(sections.map(s => {
      if (s.id === id) {
        return { ...s, [fieldName]: val };
      }
      return s;
    }));
  };

  // Save project config
  const handleSaveProject = () => {
    setSaving(true);
    const config = JSON.stringify({ themeColor, themeMode, sections });
    
    if (projectId) {
      api.updateProject(parseInt(projectId), projectName, config)
        .then(() => {
          setSaving(false);
          alert('Project layout saved successfully!');
        })
        .catch(err => {
          setSaving(false);
          alert(err.message || 'Failed to update layout.');
        });
    } else {
      api.saveProject(projectName, null, config)
        .then(saved => {
          setSaving(false);
          alert('Project created successfully!');
          navigate(`/builder?project=${saved.id}`);
        })
        .catch(err => {
          setSaving(false);
          alert(err.message || 'Failed to save layout.');
        });
    }
  };

  // Compile and Export ZIP
  const handleExportZip = () => {
    if (!projectId) {
      alert('Please save your project configuration before exporting compiled templates.');
      return;
    }
    setExporting(true);
    api.exportProject(parseInt(projectId))
      .then(blob => {
        setExporting(false);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${projectName.replaceAll('\\s+', '_')}_customized.zip`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(err => {
        setExporting(false);
        alert(err.message || 'Failed to export compiled templates.');
      });
  };

  const activeSection = sections.find(s => s.id === activeSectionId);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', padding: '15px 0' }}>
      {/* Top Controls Bar */}
      <div className="glass-panel" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        marginBottom: 20,
        background: 'white',
        borderRadius: 12
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <Link to="/dashboard?tab=projects" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.85rem', fontWeight: 600 }}>
            <ArrowLeft size={16} /> Exit Editor
          </Link>
          <div style={{ height: 20, width: 1, background: '#cbd5e1' }} />
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            style={{
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--secondary-color)',
              outline: 'none',
              width: '200px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={handleSaveProject}
            disabled={saving}
            className="btn btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: 8 }}
          >
            <Save size={16} /> {saving ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            onClick={handleExportZip}
            disabled={exporting || !projectId}
            className="btn btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: 8 }}
          >
            <Download size={16} /> {exporting ? 'Compiling ZIP...' : 'Export (HTML + PHP)'}
          </button>
        </div>
      </div>

      {/* Editor Layout Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr 300px',
        gap: 20,
        height: 'calc(100vh - 170px)'
      }}>
        {/* Left Side: Blocks Inventory */}
        <aside className="glass-panel" style={{ padding: 20, background: 'white', overflowY: 'auto', borderRadius: 12 }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 15 }}>Add Layout Blocks</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 30 }}>
            <button onClick={() => addSection('features')} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'start', borderRadius: 8, padding: '10px 14px', fontSize: '0.8rem' }}>
              <Plus size={16} /> Features Grid
            </button>
            <button onClick={() => addSection('pricing')} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'start', borderRadius: 8, padding: '10px 14px', fontSize: '0.8rem' }}>
              <Plus size={16} /> Pricing Table
            </button>
          </div>

          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 15 }}>Active Layout Tree</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sections.map((sec, index) => (
              <div
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: activeSectionId === sec.id ? '1px solid var(--primary-color)' : '1px solid #e2e8f0',
                  background: activeSectionId === sec.id ? 'rgba(0,102,255,0.04)' : '#f8fafc',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                <span style={{ textTransform: 'capitalize' }}>
                  {index + 1}. {sec.type}
                </span>
                {sec.type !== 'header' && sec.type !== 'footer' && (
                  <button
                    onClick={(e) => { e.stopPropagation(); removeSection(sec.id); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: 2 }}
                  >
                    <Trash size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Center: Live Preview Canvas */}
        <section className="glass-panel" style={{
          background: '#e2e8f0',
          padding: 20,
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 12
        }}>
          <div style={{
            width: '100%',
            maxWidth: '740px',
            background: themeMode === 'light' ? 'white' : '#0f172a',
            color: themeMode === 'light' ? '#0f172a' : 'white',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '600px',
            transition: 'var(--transition)'
          }}>
            {sections.map(sec => {
              const isActive = sec.id === activeSectionId;
              const borderStyle = isActive ? '2px dashed var(--primary-color)' : '1px solid transparent';
              
              return (
                <div
                  key={sec.id}
                  onClick={() => setActiveSectionId(sec.id)}
                  style={{
                    border: borderStyle,
                    position: 'relative',
                    cursor: 'pointer',
                    padding: '24px 20px'
                  }}
                >
                  {/* Block Type Badge */}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      top: 4,
                      right: 4,
                      background: 'var(--primary-color)',
                      color: 'white',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 4,
                      textTransform: 'uppercase'
                    }}>
                      {sec.type}
                    </span>
                  )}

                  {/* Header Block */}
                  {sec.type === 'header' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #cbd5e1', paddingBottom: 10 }}>
                      <strong style={{ fontSize: '1.1rem', color: themeColor }}>{sec.title || 'Brand'}</strong>
                      <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Home • Services • Contact</span>
                    </div>
                  )}

                  {/* Hero Block */}
                  {sec.type === 'hero' && (
                    <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: themeColor, marginBottom: 8 }}>{sec.heading || 'Heading'}</h2>
                      <p style={{ opacity: 0.8, fontSize: '0.9rem', maxWidth: 460, margin: '0 auto' }}>{sec.subheading || 'Subheading description'}</p>
                      <button className="btn btn-primary" style={{ background: themeColor, marginTop: 15, padding: '6px 16px', fontSize: '0.8rem' }}>
                        Get Started
                      </button>
                    </div>
                  )}

                  {/* Features Block */}
                  {sec.type === 'features' && (
                    <div style={{ padding: '15px 0' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, textAlign: 'center', marginBottom: 15 }}>{sec.title}</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 15, fontSize: '0.8rem' }}>
                        <div style={{ background: 'rgba(0,0,0,0.03)', padding: 10, borderRadius: 6 }}>
                          <strong>{sec.feat1}</strong>
                          <p style={{ opacity: 0.7, fontSize: '0.75rem', marginTop: 4 }}>Fast execution files.</p>
                        </div>
                        <div style={{ background: 'rgba(0,0,0,0.03)', padding: 10, borderRadius: 6 }}>
                          <strong>{sec.feat2}</strong>
                          <p style={{ opacity: 0.7, fontSize: '0.75rem', marginTop: 4 }}>Optimized packages.</p>
                        </div>
                        <div style={{ background: 'rgba(0,0,0,0.03)', padding: 10, borderRadius: 6 }}>
                          <strong>{sec.feat3}</strong>
                          <p style={{ opacity: 0.7, fontSize: '0.75rem', marginTop: 4 }}>Fully supported.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pricing Block */}
                  {sec.type === 'pricing' && (
                    <div style={{ padding: '15px 0', textAlign: 'center' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 15 }}>{sec.title}</h3>
                      <div style={{
                        maxWidth: 220, margin: '0 auto', background: 'rgba(0,0,0,0.02)', padding: 20,
                        borderRadius: 10, border: `1px solid ${themeColor}`
                      }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{sec.planName}</span>
                        <h4 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '10px 0', color: themeColor }}>{sec.price}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.75rem', opacity: 0.8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <li>✔ Lifetime Free Upgrades</li>
                          <li>✔ Commercial Project Use</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Contact Block */}
                  {sec.type === 'contact' && (
                    <div style={{ maxWidth: 400, margin: '0 auto', padding: '10px 0' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, textAlign: 'center', marginBottom: 15 }}>{sec.header}</h3>
                      <div style={{ border: '1px solid #cbd5e1', padding: 15, borderRadius: 8, background: 'rgba(0,0,0,0.02)' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Email</label>
                        <input type="text" disabled placeholder={sec.emailLabel} style={{ width: '100%', padding: 6, fontSize: '0.8rem', borderRadius: 4, border: '1px solid #cbd5e1', marginBottom: 10 }} />
                        <button style={{ background: themeColor, color: 'white', border: 'none', width: '100%', padding: '6px 0', borderRadius: 4, fontSize: '0.8rem', fontWeight: 600 }}>
                          {sec.submitText}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Footer Block */}
                  {sec.type === 'footer' && (
                    <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', opacity: 0.6 }}>
                      <span>{sec.copyright}</span>
                      <span>TechnoSprint Templates</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Right Side: Block Customizer */}
        <aside className="glass-panel" style={{ padding: 20, background: 'white', overflowY: 'auto', borderRadius: 12 }}>
          {/* Global Customizations */}
          <div style={{ marginBottom: 30, borderBottom: '1px solid #f1f5f9', paddingBottom: 20 }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Paintbrush size={16} color="var(--primary-color)" /> Global Themes
            </h3>
            <div className="form-group">
              <label className="form-label">Theme Color</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {['#0066ff', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#0f172a'].map(color => (
                  <button
                    key={color}
                    onClick={() => setThemeColor(color)}
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: color,
                      border: themeColor === color ? '2px solid white' : 'none',
                      outline: themeColor === color ? '2px solid var(--primary-color)' : 'none',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Canvas Mode</label>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => setThemeMode('light')}
                  style={{
                    flex: 1, padding: '6px 0', fontSize: '0.75rem', borderRadius: 6,
                    border: themeMode === 'light' ? '1px solid var(--primary-color)' : '1px solid #cbd5e1',
                    background: themeMode === 'light' ? 'rgba(0,102,255,0.05)' : 'white',
                    cursor: 'pointer'
                  }}
                >
                  Light Theme
                </button>
                <button
                  onClick={() => setThemeMode('dark')}
                  style={{
                    flex: 1, padding: '6px 0', fontSize: '0.75rem', borderRadius: 6,
                    border: themeMode === 'dark' ? '1px solid var(--primary-color)' : '1px solid #cbd5e1',
                    background: themeMode === 'dark' ? 'rgba(0,102,255,0.05)' : 'white',
                    cursor: 'pointer'
                  }}
                >
                  Dark Theme
                </button>
              </div>
            </div>
          </div>

          {/* Section Customizer */}
          {activeSection ? (
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
                <FileText size={16} color="var(--primary-color)" /> Block Properties
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 15 }}>
                Customizing settings for active block: <strong style={{ textTransform: 'capitalize' }}>{activeSection.type}</strong>
              </p>

              {activeSection.type === 'header' && (
                <div className="form-group">
                  <label className="form-label">Header Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={activeSection.title || ''}
                    onChange={(e) => updateSectionField(activeSection.id, 'title', e.target.value)}
                  />
                </div>
              )}

              {activeSection.type === 'hero' && (
                <>
                  <div className="form-group">
                    <label className="form-label">Hero Title Heading</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.heading || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'heading', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subheading</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={activeSection.subheading || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'subheading', e.target.value)}
                    />
                  </div>
                </>
              )}

              {activeSection.type === 'features' && (
                <>
                  <div className="form-group">
                    <label className="form-label">Section Heading</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.title || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Feature 1</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.feat1 || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'feat1', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Feature 2</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.feat2 || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'feat2', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Feature 3</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.feat3 || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'feat3', e.target.value)}
                    />
                  </div>
                </>
              )}

              {activeSection.type === 'pricing' && (
                <>
                  <div className="form-group">
                    <label className="form-label">Section Heading</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.title || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Plan Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.planName || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'planName', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Price Card Label</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.price || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'price', e.target.value)}
                    />
                  </div>
                </>
              )}

              {activeSection.type === 'contact' && (
                <>
                  <div className="form-group">
                    <label className="form-label">Section Heading</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.header || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'header', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Input Placeholder</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.emailLabel || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'emailLabel', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Submit Button Label</label>
                    <input
                      type="text"
                      className="form-control"
                      value={activeSection.submitText || ''}
                      onChange={(e) => updateSectionField(activeSection.id, 'submitText', e.target.value)}
                    />
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <CheckCircle size={12} /> Packages standard PHP mail form handling script.
                  </div>
                </>
              )}

              {activeSection.type === 'footer' && (
                <div className="form-group">
                  <label className="form-label">Copyright Label</label>
                  <input
                    type="text"
                    className="form-control"
                    value={activeSection.copyright || ''}
                    onChange={(e) => updateSectionField(activeSection.id, 'copyright', e.target.value)}
                  />
                </div>
              )}
            </div>
          ) : (
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Select a block in the preview tree or tree listing to edit its contents.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
