import React, { useState } from 'react';
import { Layers, CheckCircle, ListFilter, Type, Calendar as DateIcon, Upload, Save, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FormLayouts = () => {
  const { addToast } = useApp();
  return (
    <div className="forms-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Form Layouts</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Grid layouts, inline forms, horizontal form groups, and input stacks.</p>
      </div>

      <div className="glass-card" style={{ padding: 24 }}>
        <form onSubmit={(e) => { e.preventDefault(); addToast('Form submitted!', 'success'); }}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" required />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john.doe@example.com" required />
          </div>
          <button type="submit" className="btn btn-primary"><Save size={16} /> Save Layout Form</button>
        </form>
      </div>
    </div>
  );
};

export const FormValidation = () => {
  const { addToast } = useApp();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    addToast('Validation check passed successfully!', 'success');
  };

  return (
    <div className="forms-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Form Validation</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Real-time input validation feedback, required parameters, and error indicators.</p>
      </div>

      <div className="glass-card" style={{ padding: 24 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username (Required, min 4 chars)</label>
            <input type="text" required minLength={4} placeholder="e.g. alexmorgan" />
            {validated && <span style={{ fontSize: 12, color: 'var(--brand-success)' }}>✓ Valid username</span>}
          </div>
          <div className="form-group">
            <label>Password (Required, min 6 chars)</label>
            <input type="password" required minLength={6} placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary">Validate Inputs</button>
        </form>
      </div>
    </div>
  );
};

export const RichEditors = () => {
  const { addToast } = useApp();
  const [text, setText] = useState('Write rich HTML formatted content here...');

  return (
    <div className="forms-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Rich Text Editors (Quill / TinyMCE)</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>WYSIWYG rich text editor with toolbar formatting options.</p>
      </div>

      <div className="glass-card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, background: 'var(--bg-subtle)', padding: 8, borderRadius: '8px 8px 0 0', borderBottom: '1px solid var(--border-color)' }}>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => addToast('Bold formatting applied', 'info')}><b>B</b></button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => addToast('Italic formatting applied', 'info')}><i>I</i></button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => addToast('Underline formatting applied', 'info')}><u>U</u></button>
        </div>
        <textarea
          rows={6}
          value={text}
          onChange={e => setText(e.target.value)}
          style={{ width: '100%', padding: 14, borderRadius: '0 0 8px 8px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-primary)', outline: 'none', fontFamily: 'inherit' }}
        />
      </div>
    </div>
  );
};

export const DateTimePickers = () => {
  const { addToast } = useApp();
  const [date, setDate] = useState('2026-08-20');

  return (
    <div className="forms-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Date & Time Pickers (Flatpickr)</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Interactive calendar date pickers, time selectors, and date ranges.</p>
      </div>

      <div className="glass-card" style={{ padding: 24 }}>
        <div className="form-group">
          <label>Select Scheduled Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export const AdvancedSelect = () => {
  const { addToast } = useApp();
  const [selected, setSelected] = useState(['React', 'Spring Boot']);

  return (
    <div className="forms-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Advanced Select (Choices.js)</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Multiselect dropdowns with tag pills and live search filtering.</p>
      </div>

      <div className="glass-card" style={{ padding: 24 }}>
        <div className="form-group">
          <label>Select Technology Stack Tags</label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: 8, background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 8 }}>
            {['React', 'Spring Boot', 'MySQL', 'Vite', 'CSS Variables'].map(tag => (
              <span key={tag} className="badge badge-primary" style={{ cursor: 'pointer' }} onClick={() => addToast(`Tag ${tag} selected`, 'info')}>
                {tag} ×
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FileUpload = () => {
  const { addToast } = useApp();

  return (
    <div className="forms-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>File Drag & Drop Upload Zone</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Drag and drop file upload zone with upload progress indicators.</p>
      </div>

      <div className="glass-card" style={{ padding: 40, textAlign: 'center', border: '2px dashed var(--brand-primary)', cursor: 'pointer' }} onClick={() => addToast('File upload zone activated', 'info')}>
        <Upload size={48} color="var(--brand-primary)" style={{ margin: '0 auto 12px auto' }} />
        <h3 style={{ fontSize: 18, fontWeight: 800 }}>Drag and Drop Files Here</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Support PNG, JPG, PDF, SQL up to 50MB</p>
      </div>
    </div>
  );
};
