import React from 'react';
import { dataStore } from '../services/dataStore';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface DepartmentsViewProps {
  onNavigate?: (view: string) => void;
  onOpenBooking: () => void;
}

export const DepartmentsView: React.FC<DepartmentsViewProps> = ({ onOpenBooking }) => {
  const departments = dataStore.getDepartments();

  return (
    <div style={{ padding: '3rem 0 5rem 0', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textTransform: 'capitalize', marginBottom: '2.5rem' }}>
          <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Specialized Medical Centers</span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Clinical Departments & Excellence Centers
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.2rem' }}>
            State-of-the-art facilities equipped with advanced surgical suites and specialist teams.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '1.75rem' }}>
          {departments.map(dept => (
            <div key={dept.id} className="card-elevated" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <img src={dept.image} alt={dept.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{dept.name}</h3>
                  <span className="badge badge-teal">{dept.doctorCount} Doctors</span>
                </div>

                <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {dept.description}
                </p>

                {/* Key Procedures */}
                <div style={{ marginBottom: '1.25rem', background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <h5 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f766e', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Key Procedures & Treatments
                  </h5>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem' }}>
                    {dept.procedures.map((proc, i) => (
                      <span key={i} style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <CheckCircle2 size={13} color="#0d9488" /> {proc}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                    Department Head: <strong style={{ color: '#0f172a' }}>{dept.headDoctor}</strong>
                  </span>

                  <button onClick={() => onOpenBooking()} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
                    Book Department Visit <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
