import React, { useState } from 'react';
import type { Appointment } from '../types';
import { dataStore } from '../services/dataStore';
import { Calendar, Clock, FileText, Bell, Trash2, Plus } from 'lucide-react';

interface PatientPortalViewProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const PatientPortalView: React.FC<PatientPortalViewProps> = ({ onOpenBooking, onNavigate }) => {
  const [appointments, setAppointments] = useState<Appointment[]>(() =>
    dataStore.getAppointmentsForPatient('madhu@example.com')
  );

  const handleCancelAppointment = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this appointment booking?')) {
      dataStore.updateAppointmentStatus(id, 'Cancelled');
      setAppointments(dataStore.getAppointmentsForPatient('madhu@example.com'));
    }
  };

  const upcomingApts = appointments.filter(a => a.status === 'Confirmed' || a.status === 'Pending');
  const pastApts = appointments.filter(a => a.status === 'Completed' || a.status === 'Cancelled');

  return (
    <div style={{ padding: '2.5rem 0 5rem 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Patient Welcome Header */}
        <div className="card-elevated" style={{
          background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
          color: '#ffffff',
          padding: '1.75rem 2rem',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: '#ffffff',
              color: '#0d9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              fontWeight: 800,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}>
              MK
            </div>
            <div>
              <span style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                Patient ID: PAT-99420
              </span>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0.2rem 0 0 0' }}>Welcome back, Madhu</h1>
              <p style={{ opacity: 0.9, fontSize: '0.88rem' }}>Blood Group: O+ • No Known Drug Allergies • +1 (555) 234-5678</p>
            </div>
          </div>

          <button onClick={onOpenBooking} className="btn-primary" style={{ background: '#ffffff', color: '#0f766e', boxShadow: 'none' }}>
            <Plus size={18} /> Book New Visit
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {/* Main Column: Appointments */}
          <div style={{ gridColumn: 'span 2' }}>
            {/* Upcoming Appointments Section */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={20} color="#0d9488" /> Upcoming Appointments ({upcomingApts.length})
              </h3>

              {upcomingApts.length === 0 ? (
                <div className="card-elevated" style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                  No upcoming visits scheduled.
                  <button onClick={onOpenBooking} className="btn-secondary" style={{ display: 'inline-flex', marginTop: '1rem' }}>
                    Schedule Now
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {upcomingApts.map(apt => (
                    <div key={apt.id} className="card-elevated" style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <div>
                          <span className={`badge ${apt.status === 'Confirmed' ? 'badge-success' : 'badge-warning'}`} style={{ marginBottom: '0.3rem' }}>
                            {apt.status === 'Confirmed' ? '✓ Confirmed' : '⌛ Pending Doctor Acceptance'}
                          </span>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{apt.doctorName}</h4>
                          <p style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: 600 }}>{apt.doctorSpecialty} • {apt.departmentName}</p>
                        </div>
                        <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>Ref: {apt.id}</span>
                      </div>

                      <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '10px', display: 'flex', gap: '1.5rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
                        <span style={{ fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Calendar size={15} color="#0d9488" /> {apt.date}
                        </span>
                        <span style={{ fontWeight: 700, color: '#0f766e', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Clock size={15} /> {apt.timeSlot}
                        </span>
                      </div>

                      <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1rem' }}>
                        <strong>Reason:</strong> {apt.reason}
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
                        <button
                          onClick={() => handleCancelAppointment(apt.id)}
                          className="btn-outline"
                          style={{ color: '#be123c', borderColor: '#fecdd3', fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
                        >
                          <Trash2 size={14} /> Cancel Booking
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Past Visit History */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={20} color="#0d9488" /> Past Medical Visit History
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {pastApts.map(apt => (
                  <div key={apt.id} className="card-elevated" style={{ padding: '1.25rem', opacity: apt.status === 'Cancelled' ? 0.7 : 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span className={`badge ${apt.status === 'Completed' ? 'badge-teal' : 'badge-danger'}`}>
                        {apt.status}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{apt.date}</span>
                    </div>

                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{apt.doctorName} ({apt.doctorSpecialty})</h4>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '0.5rem' }}>{apt.reason}</p>

                    {apt.notes && (
                      <div style={{ background: '#f0fdfa', padding: '0.6rem 0.8rem', borderRadius: '8px', borderLeft: '3px solid #0d9488', fontSize: '0.82rem', color: '#0f766e' }}>
                        <strong>Doctor Notes:</strong> {apt.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Notifications & Widgets */}
          <div>
            <div className="card-elevated" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Bell size={18} color="#0d9488" /> Recent Notifications
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.82rem' }}>
                <div style={{ padding: '0.75rem', background: '#f0fdfa', borderRadius: '10px', border: '1px solid #ccfbf1' }}>
                  <div style={{ fontWeight: 700, color: '#0f766e', marginBottom: '0.1rem' }}>Appointment Confirmed</div>
                  <div style={{ color: '#334155' }}>Dr. Priya Sharma accepted your Cardiology consult for Aug 19 @ 10:30 AM.</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.3rem' }}>1 hour ago</div>
                </div>

                <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.1rem' }}>Lab Results Available</div>
                  <div style={{ color: '#475569' }}>Your full body lipid audit results are ready to download.</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.3rem' }}>Yesterday</div>
                </div>
              </div>
            </div>

            <div className="card-elevated" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Quick Actions</h4>
              <button onClick={() => onNavigate('doctors')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                Find New Specialist
              </button>
              <button onClick={() => onNavigate('blog')} className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                Browse Health Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
