import React, { useState } from 'react';
import type { Appointment, Doctor } from '../types';
import { dataStore } from '../services/dataStore';
import { Calendar, Clock, Plus } from 'lucide-react';

export const DoctorPortalView: React.FC = () => {
  const doctor = dataStore.getDoctorById('doc-1') || dataStore.getDoctors()[0];

  const [appointments, setAppointments] = useState<Appointment[]>(() =>
    dataStore.getAppointmentsForDoctor(doctor.id)
  );

  const [currentDoctor, setCurrentDoctor] = useState<Doctor>(doctor);
  const [newSlot, setNewSlot] = useState('');
  const [notesInput, setNotesInput] = useState<{ [key: string]: string }>({});

  const handleUpdateStatus = (id: string, status: Appointment['status']) => {
    const notes = notesInput[id] || '';
    dataStore.updateAppointmentStatus(id, status, notes);
    setAppointments(dataStore.getAppointmentsForDoctor(currentDoctor.id));
  };

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSlot.trim()) return;

    const updatedSlots = [...currentDoctor.timeSlots, newSlot.trim()];
    const updatedDoc = { ...currentDoctor, timeSlots: updatedSlots };
    dataStore.saveDoctor(updatedDoc);
    setCurrentDoctor(updatedDoc);
    setNewSlot('');
  };

  const pendingCount = appointments.filter(a => a.status === 'Pending').length;
  const confirmedCount = appointments.filter(a => a.status === 'Confirmed').length;

  return (
    <div style={{ padding: '2.5rem 0 5rem 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Doctor Header Banner */}
        <div className="card-elevated" style={{
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
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
            <img src={currentDoctor.avatar} alt={currentDoctor.name} style={{ width: '72px', height: '72px', borderRadius: '18px', objectFit: 'cover', border: '3px solid #fff' }} />
            <div>
              <span style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                Doctor Portal Workspace
              </span>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0.2rem 0 0 0' }}>{currentDoctor.name}</h1>
              <p style={{ opacity: 0.9, fontSize: '0.88rem' }}>{currentDoctor.title} • {currentDoctor.departmentName}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.15)', padding: '0.6rem 1rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{pendingCount}</div>
              <div style={{ fontSize: '0.72rem', opacity: 0.9 }}>Pending Requests</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.15)', padding: '0.6rem 1rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{confirmedCount}</div>
              <div style={{ fontSize: '0.72rem', opacity: 0.9 }}>Confirmed Visits</div>
            </div>
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {/* Main Appointments Queue */}
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={20} color="#0284c7" /> Appointment Consultations Queue ({appointments.length})
            </h3>

            {appointments.length === 0 ? (
              <div className="card-elevated" style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                No appointments assigned to your queue yet.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {appointments.map(apt => (
                  <div key={apt.id} className="card-elevated" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div>
                        <span className={`badge ${apt.status === 'Confirmed' ? 'badge-success' : apt.status === 'Completed' ? 'badge-teal' : apt.status === 'Cancelled' ? 'badge-danger' : 'badge-warning'}`}>
                          {apt.status}
                        </span>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0.2rem 0 0 0' }}>{apt.patientName}</h4>
                        <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Contact: {apt.patientEmail} • {apt.patientPhone}</p>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>ID: {apt.id}</span>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '10px', display: 'flex', gap: '1.5rem', marginBottom: '0.75rem', fontSize: '0.88rem' }}>
                      <span style={{ fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={15} color="#0284c7" /> {apt.date}
                      </span>
                      <span style={{ fontWeight: 700, color: '#0369a1', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={15} /> {apt.timeSlot}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1rem' }}>
                      <strong>Patient Reason:</strong> {apt.reason}
                    </p>

                    {/* Status Management Actions */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
                      {apt.status !== 'Completed' && apt.status !== 'Cancelled' && (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <input
                            type="text"
                            placeholder="Add doctor prescription / clinical notes..."
                            className="input-field"
                            style={{ fontSize: '0.82rem', padding: '0.4rem 0.75rem' }}
                            value={notesInput[apt.id] || ''}
                            onChange={e => setNotesInput({ ...notesInput, [apt.id]: e.target.value })}
                          />

                          {apt.status === 'Pending' && (
                            <button onClick={() => handleUpdateStatus(apt.id, 'Confirmed')} className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                              Accept & Confirm
                            </button>
                          )}

                          <button onClick={() => handleUpdateStatus(apt.id, 'Completed')} className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                            Mark Completed
                          </button>

                          <button onClick={() => handleUpdateStatus(apt.id, 'Cancelled')} className="btn-outline" style={{ color: '#be123c', borderColor: '#fecdd3', fontSize: '0.8rem', padding: '0.4rem 0.6rem' }}>
                            Cancel
                          </button>
                        </div>
                      )}

                      {apt.notes && (
                        <div style={{ fontSize: '0.82rem', color: '#047857', background: '#ecfdf5', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
                          <strong>Recorded Notes:</strong> {apt.notes}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Schedule & Slot Manager */}
          <div>
            <div className="card-elevated" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={18} color="#0284c7" /> Manage Consultation Slots
              </h4>

              <form onSubmit={handleAddSlot} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  placeholder="e.g. 06:00 PM"
                  className="input-field"
                  value={newSlot}
                  onChange={e => setNewSlot(e.target.value)}
                  style={{ fontSize: '0.85rem', padding: '0.45rem 0.75rem' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}>
                  <Plus size={14} /> Add
                </button>
              </form>

              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginBottom: '0.5rem' }}>
                Active Slot Schedule ({currentDoctor.timeSlots.length})
              </label>
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                {currentDoctor.timeSlots.map((slot, i) => (
                  <span key={i} style={{ background: '#f0fdfa', color: '#0d9488', border: '1px solid #ccfbf1', padding: '0.25rem 0.55rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                    {slot}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
