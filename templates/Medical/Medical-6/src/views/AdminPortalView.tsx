import React, { useState } from 'react';
import type { Doctor, Appointment, CMSContent } from '../types';
import { dataStore } from '../services/dataStore';
import { ShieldCheck, Users, Stethoscope, Calendar, Building2, Edit3, Trash2, Plus, Save } from 'lucide-react';

export const AdminPortalView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'doctors' | 'cms' | 'appointments'>('doctors');

  // Data states
  const [doctors, setDoctors] = useState<Doctor[]>(() => dataStore.getDoctors());
  const [appointments] = useState<Appointment[]>(() => dataStore.getAppointments());
  const [cms, setCms] = useState<CMSContent>(() => dataStore.getCMS());

  // Doctor Form Modal State
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);

  // New Doctor Form State
  const [docName, setDocName] = useState('');
  const [docTitle, setDocTitle] = useState('');
  const [docSpecialty, setDocSpecialty] = useState('Cardiology');
  const [docFee, setDocFee] = useState<number>(120);
  const [docExp, setDocExp] = useState<number>(10);
  const [docAvatar, setDocAvatar] = useState('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80');

  // Save / Update Doctor
  const handleSaveDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    const newDoc: Doctor = {
      id: editingDoctor ? editingDoctor.id : `doc-${Date.now()}`,
      name: docName,
      title: docTitle,
      specialty: docSpecialty,
      departmentId: `dept-${docSpecialty.toLowerCase()}`,
      departmentName: `${docSpecialty} Center`,
      avatar: docAvatar,
      rating: 5.0,
      reviewCount: 1,
      experienceYears: Number(docExp),
      fee: Number(docFee),
      education: 'MD Medical Doctorate',
      hospital: 'Apex Central Hospital',
      languages: ['English'],
      gender: 'Female',
      bio: 'Board-certified medical specialist committed to delivering exceptional patient-centered healthcare outcomes.',
      location: 'Building A, Suite 201',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      timeSlots: ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM'],
      isFeatured: true,
      status: 'Active'
    };

    dataStore.saveDoctor(newDoc);
    setDoctors(dataStore.getDoctors());
    setIsDoctorModalOpen(false);
    resetDoctorForm();
  };

  const resetDoctorForm = () => {
    setEditingDoctor(null);
    setDocName('');
    setDocTitle('');
    setDocSpecialty('Cardiology');
    setDocFee(120);
    setDocExp(10);
  };

  const handleDeleteDoctor = (id: string) => {
    if (window.confirm('Are you sure you want to remove this doctor profile from the platform?')) {
      dataStore.deleteDoctor(id);
      setDoctors(dataStore.getDoctors());
    }
  };

  const handleOpenEditDoctor = (doc: Doctor) => {
    setEditingDoctor(doc);
    setDocName(doc.name);
    setDocTitle(doc.title);
    setDocSpecialty(doc.specialty);
    setDocFee(doc.fee);
    setDocExp(doc.experienceYears);
    setDocAvatar(doc.avatar);
    setIsDoctorModalOpen(true);
  };

  // CMS Save
  const handleSaveCMS = (e: React.FormEvent) => {
    e.preventDefault();
    dataStore.updateCMS(cms);
    alert('Website CMS content updated successfully! Public homepage reflects new changes.');
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Admin Banner */}
        <div className="card-elevated" style={{
          background: 'linear-gradient(135deg, #581c87 0%, #7e22ce 100%)',
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
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShieldCheck size={32} />
            </div>
            <div>
              <span style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                Platform Control Center
              </span>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0.2rem 0 0 0' }}>Admin Management Portal</h1>
              <p style={{ opacity: 0.9, fontSize: '0.88rem' }}>Global CRUD controls for Doctors, CMS Website Content, and Master Appointments.</p>
            </div>
          </div>
        </div>

        {/* Analytics KPI Row */}
        <div className="grid-4" style={{ gap: '1.25rem', marginBottom: '2rem' }}>
          <div className="card-elevated" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#7e22ce', marginBottom: '0.5rem' }}>
              <Stethoscope size={24} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#047857', background: '#ecfdf5', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Active</span>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{doctors.length}</div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Board Specialists</div>
          </div>

          <div className="card-elevated" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#0284c7', marginBottom: '0.5rem' }}>
              <Calendar size={24} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0369a1', background: '#e0f2fe', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Live</span>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{appointments.length}</div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Total Platform Bookings</div>
          </div>

          <div className="card-elevated" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#0d9488', marginBottom: '0.5rem' }}>
              <Building2 size={24} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f766e', background: '#f0fdfa', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Operational</span>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>6</div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Clinical Departments</div>
          </div>

          <div className="card-elevated" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#e11d48', marginBottom: '0.5rem' }}>
              <Users size={24} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9f1239', background: '#fff1f2', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Registered</span>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>15,420</div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Active Patients</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', marginBottom: '1.75rem' }}>
          <button
            onClick={() => setActiveTab('doctors')}
            style={{
              padding: '0.85rem 1.5rem',
              fontWeight: activeTab === 'doctors' ? 700 : 500,
              color: activeTab === 'doctors' ? '#7e22ce' : '#64748b',
              borderBottom: activeTab === 'doctors' ? '3px solid #7e22ce' : '3px solid transparent'
            }}
          >
            Manage Doctors (CRUD)
          </button>

          <button
            onClick={() => setActiveTab('cms')}
            style={{
              padding: '0.85rem 1.5rem',
              fontWeight: activeTab === 'cms' ? 700 : 500,
              color: activeTab === 'cms' ? '#7e22ce' : '#64748b',
              borderBottom: activeTab === 'cms' ? '3px solid #7e22ce' : '3px solid transparent'
            }}
          >
            Website CMS Editor
          </button>

          <button
            onClick={() => setActiveTab('appointments')}
            style={{
              padding: '0.85rem 1.5rem',
              fontWeight: activeTab === 'appointments' ? 700 : 500,
              color: activeTab === 'appointments' ? '#7e22ce' : '#64748b',
              borderBottom: activeTab === 'appointments' ? '3px solid #7e22ce' : '3px solid transparent'
            }}
          >
            Master Appointments Log
          </button>
        </div>

        {/* TAB 1: Doctor CRUD Manager */}
        {activeTab === 'doctors' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Doctor Directory Roster</h3>
              <button
                onClick={() => {
                  resetDoctorForm();
                  setIsDoctorModalOpen(true);
                }}
                className="btn-primary"
                style={{ background: '#7e22ce' }}
              >
                <Plus size={16} /> Add New Doctor
              </button>
            </div>

            <div className="card-elevated" style={{ overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '1rem' }}>Doctor Name</th>
                    <th style={{ padding: '1rem' }}>Specialty</th>
                    <th style={{ padding: '1rem' }}>Experience</th>
                    <th style={{ padding: '1rem' }}>Fee</th>
                    <th style={{ padding: '1rem' }}>Rating</th>
                    <th style={{ padding: '1rem' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map(doc => (
                    <tr key={doc.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <img src={doc.avatar} alt={doc.name} style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }} />
                        <div>
                          <strong style={{ color: '#0f172a', display: 'block' }}>{doc.name}</strong>
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{doc.title}</span>
                        </div>
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <span className="badge badge-teal">{doc.specialty}</span>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{doc.experienceYears} Years</td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#0f172a' }}>${doc.fee}</td>
                      <td style={{ padding: '0.85rem 1rem' }}>★ {doc.rating.toFixed(1)}</td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <span className="badge badge-success">{doc.status}</span>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                        <button onClick={() => handleOpenEditDoctor(doc)} style={{ padding: '0.35rem 0.65rem', color: '#0284c7', marginRight: '0.4rem' }}>
                          <Edit3 size={16} />
                        </button>
                        <button onClick={() => handleDeleteDoctor(doc.id)} style={{ padding: '0.35rem 0.65rem', color: '#be123c' }}>
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: Dynamic Website CMS Editor */}
        {activeTab === 'cms' && (
          <form onSubmit={handleSaveCMS} className="card-elevated" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>Dynamic CMS Content Settings</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Homepage Hero Main Title
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={cms.heroTitle}
                  onChange={e => setCms({ ...cms, heroTitle: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Homepage Hero Subtitle
                </label>
                <textarea
                  rows={2}
                  className="input-field"
                  value={cms.heroSubtitle}
                  onChange={e => setCms({ ...cms, heroSubtitle: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Top Site Announcement Banner
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={cms.announcement}
                  onChange={e => setCms({ ...cms, announcement: e.target.value })}
                />
              </div>

              <div style={{ paddingTop: '1rem' }}>
                <button type="submit" className="btn-primary" style={{ background: '#7e22ce' }}>
                  <Save size={16} /> Save & Publish CMS Changes
                </button>
              </div>
            </div>
          </form>
        )}

        {/* TAB 3: Master Appointments Log */}
        {activeTab === 'appointments' && (
          <div className="card-elevated" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                  <th style={{ padding: '1rem' }}>Booking Ref</th>
                  <th style={{ padding: '1rem' }}>Patient</th>
                  <th style={{ padding: '1rem' }}>Doctor</th>
                  <th style={{ padding: '1rem' }}>Date & Slot</th>
                  <th style={{ padding: '1rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(apt => (
                  <tr key={apt.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#7e22ce' }}>{apt.id}</td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <strong style={{ color: '#0f172a', display: 'block' }}>{apt.patientName}</strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{apt.patientEmail}</span>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: '#334155' }}>{apt.doctorName}</td>
                    <td style={{ padding: '0.85rem 1rem' }}>{apt.date} @ {apt.timeSlot}</td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <span className={`badge ${apt.status === 'Confirmed' ? 'badge-success' : apt.status === 'Completed' ? 'badge-teal' : 'badge-warning'}`}>
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Add/Edit Doctor Modal */}
        {isDoctorModalOpen && (
          <div className="modal-overlay" onClick={() => setIsDoctorModalOpen(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '580px', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                {editingDoctor ? 'Edit Doctor Profile' : 'Add New Board Doctor'}
              </h3>

              <form onSubmit={handleSaveDoctor} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    Doctor Full Name *
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    required
                    value={docName}
                    onChange={e => setDocName(e.target.value)}
                    placeholder="e.g. Dr. Jonathan Hayes"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    Professional Title *
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    required
                    value={docTitle}
                    onChange={e => setDocTitle(e.target.value)}
                    placeholder="e.g. Senior Neurologist"
                  />
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                      Specialty *
                    </label>
                    <select
                      value={docSpecialty}
                      onChange={e => setDocSpecialty(e.target.value)}
                      className="input-field select-field"
                    >
                      <option value="Cardiology">Cardiology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Oncology">Oncology</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                      Consultation Fee ($) *
                    </label>
                    <input
                      type="number"
                      className="input-field"
                      required
                      value={docFee}
                      onChange={e => setDocFee(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    Avatar Image URL
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    value={docAvatar}
                    onChange={e => setDocAvatar(e.target.value)}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                  <button type="button" onClick={() => setIsDoctorModalOpen(false)} className="btn-outline">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" style={{ background: '#7e22ce' }}>
                    Save Doctor
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
