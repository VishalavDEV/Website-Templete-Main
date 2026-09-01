import React, { useState } from 'react';
import { Upload, CheckCircle, ArrowRight, ArrowLeft, Save } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FormElements = () => {
  const { addToast } = useApp();
  const [wizardStep, setWizardStep] = useState(1);

  return (
    <div className="forms-page" style={{ maxWidth: 900, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Advanced Form Controls & Multi-Step Wizard</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Rich input elements, multi-step setup wizards, and drag-and-drop file upload zones.</p>
      </div>

      {/* Multi-Step Wizard Form */}
      <div className="glass-card" style={{ marginBottom: 24, padding: 32 }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20 }}>Multi-Step Setup Wizard</h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, borderBottom: '1px solid var(--border-color)', paddingBottom: 16 }}>
          {['1. General Details', '2. Database Config', '3. Confirmation'].map((label, idx) => (
            <div key={idx} style={{ fontWeight: wizardStep === idx + 1 ? 800 : 500, color: wizardStep === idx + 1 ? 'var(--brand-primary)' : 'var(--text-muted)' }}>
              {label}
            </div>
          ))}
        </div>

        {wizardStep === 1 && (
          <div>
            <div className="form-group">
              <label>Organization Name</label>
              <input type="text" placeholder="e.g. Acme Enterprise Solutions" />
            </div>
            <div className="form-group">
              <label>Admin User Email</label>
              <input type="email" placeholder="admin@acme.com" />
            </div>
          </div>
        )}

        {wizardStep === 2 && (
          <div>
            <div className="form-group">
              <label>MySQL Hostname</label>
              <input type="text" defaultValue="localhost:3306" />
            </div>
            <div className="form-group">
              <label>Database Name</label>
              <input type="text" defaultValue="smartadmin_db" />
            </div>
          </div>
        )}

        {wizardStep === 3 && (
          <div style={{ textAlign: 'center', padding: 20 }}>
            <CheckCircle size={48} color="var(--brand-success)" style={{ margin: '0 auto 12px auto' }} />
            <h4 style={{ fontSize: 18, fontWeight: 800 }}>Ready to Initialize System</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Click finish to submit configuration and seed initial database tables.</p>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
          {wizardStep > 1 ? (
            <button className="btn btn-secondary" onClick={() => setWizardStep(prev => prev - 1)}><ArrowLeft size={16} /> Back</button>
          ) : <div />}

          {wizardStep < 3 ? (
            <button className="btn btn-primary" onClick={() => setWizardStep(prev => prev + 1)}>Next Step <ArrowRight size={16} /></button>
          ) : (
            <button className="btn btn-primary" style={{ background: 'var(--brand-success)' }} onClick={() => addToast('Wizard completed successfully!', 'success')}>
              <Save size={16} /> Finish Setup
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
