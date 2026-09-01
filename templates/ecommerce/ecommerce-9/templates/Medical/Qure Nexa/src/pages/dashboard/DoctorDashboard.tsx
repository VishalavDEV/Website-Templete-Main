import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  XCircle,
  Pill,
  Plus,
  Trash2,
  Edit,
  Save,
  Filter,
  Activity,
  HeartPulse,
  IndianRupee,
  AlertCircle,
  FileText
} from 'lucide-react';
import {
  Appointment,
  Doctor,
  DoctorAvailability,
  AppointmentStatus,
  PrescriptionItem
} from '../../types';
import { ApiService } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { Modal } from '../../components/common/Modal';
import { Input, Select, Textarea } from '../../components/common/Input';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';

export const DoctorDashboard: React.FC = () => {
  const { user, doctor: currentDoc, refreshProfile } = useAuth();
  const { success, error: toastError } = useToast();

  const [activeTab, setActiveTab] = useState<'appointments' | 'schedule' | 'profile'>('appointments');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [availabilities, setAvailabilities] = useState<DoctorAvailability[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter for appointments
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  // Prescription Generator Modal State
  const [isRxModalOpen, setIsRxModalOpen] = useState(false);
  const [activeApptForRx, setActiveApptForRx] = useState<Appointment | null>(null);
  const [diagnosis, setDiagnosis] = useState('');
  const [medicines, setMedicines] = useState<PrescriptionItem[]>([
    { medicine_name: '', dosage: '500mg', frequency: 'Twice daily after meals', duration: '7 days', instructions: '' }
  ]);
  const [rxNotes, setRxNotes] = useState('');
  const [isSubmittingRx, setIsSubmittingRx] = useState(false);

  // Profile Edit State
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    specialization: currentDoc?.specialization || '',
    qualification: currentDoc?.qualification || '',
    experience_years: currentDoc?.experience_years || 10,
    consultation_fee: currentDoc?.consultation_fee || 1500,
    room_number: currentDoc?.room_number || 'Room 302',
    bio: currentDoc?.bio || '',
    available_today: currentDoc?.available_today || true
  });

  const docId = currentDoc?.doctor_id || 'doc-1';

  const loadDoctorData = async () => {
    try {
      setLoading(true);
      const [appts, avails] = await Promise.all([
        ApiService.getAppointments({ doctor_id: docId }),
        ApiService.getDoctorAvailability(docId)
      ]);
      setAppointments(appts);
      setAvailabilities(avails);
    } catch (err) {
      console.error('Failed to load doctor dashboard', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDoctorData();
  }, [docId]);

  // Appointment Actions
  const handleUpdateStatus = async (apptId: string, newStatus: AppointmentStatus) => {
    try {
      await ApiService.updateAppointmentStatus(apptId, newStatus);
      success('Status Updated', `Appointment marked as ${newStatus}.`);
      loadDoctorData();
    } catch (err: unknown) {
      toastError('Error', 'Failed to update appointment status');
    }
  };

  // Open Prescription Writer
  const handleOpenRxModal = (appt: Appointment) => {
    setActiveApptForRx(appt);
    setDiagnosis(appt.reason || '');
    setMedicines([
      { medicine_name: '', dosage: '500mg', frequency: 'Twice daily after meals', duration: '7 days', instructions: '' }
    ]);
    setRxNotes('');
    setIsRxModalOpen(true);
  };

  // Add Medicine row in Rx modal
  const handleAddMedicineRow = () => {
    setMedicines([
      ...medicines,
      { medicine_name: '', dosage: '', frequency: 'Once daily', duration: '5 days', instructions: '' }
    ]);
  };

  const handleRemoveMedicineRow = (index: number) => {
    setMedicines(medicines.filter((_, idx) => idx !== index));
  };

  const handleMedicineChange = (index: number, field: keyof PrescriptionItem, val: string) => {
    const updated = [...medicines];
    updated[index] = { ...updated[index], [field]: val };
    setMedicines(updated);
  };

  // Submit Prescription
  const handleSubmitRx = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeApptForRx || !diagnosis) {
      toastError('Missing Details', 'Diagnosis is required.');
      return;
    }
    const validMeds = medicines.filter(m => m.medicine_name.trim());
    if (validMeds.length === 0) {
      toastError('Medicine Required', 'Please enter at least one prescribed medicine.');
      return;
    }

    try {
      setIsSubmittingRx(true);
      await ApiService.createPrescription({
        patient_id: activeApptForRx.patient_id,
        doctor_id: docId,
        appointment_id: activeApptForRx.appointment_id,
        diagnosis,
        medicines: validMeds,
        notes: rxNotes
      });

      // Mark appointment as completed
      await ApiService.updateAppointmentStatus(activeApptForRx.appointment_id, AppointmentStatus.COMPLETED);

      success('Prescription Issued', 'Digital prescription created and consultation closed.');
      setIsRxModalOpen(false);
      loadDoctorData();
    } catch (err: unknown) {
      toastError('Rx Creation Failed', 'Could not record prescription');
    } finally {
      setIsSubmittingRx(false);
    }
  };

  // Toggle Day Availability
  const handleToggleDay = async (availId: string, currentVal: boolean) => {
    try {
      await ApiService.updateDoctorAvailability(availId, { is_active: !currentVal });
      success('Schedule Updated', 'Day availability toggled.');
      loadDoctorData();
    } catch (err: unknown) {
      toastError('Schedule Error', 'Failed to update schedule');
    }
  };

  // Update Doctor Profile
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ApiService.updateDoctor(docId, {
        name: profileForm.name,
        specialization: profileForm.specialization,
        qualification: profileForm.qualification,
        experience_years: Number(profileForm.experience_years),
        consultation_fee: Number(profileForm.consultation_fee),
        room_number: profileForm.room_number,
        bio: profileForm.bio,
        available_today: profileForm.available_today
      });
      refreshProfile();
      success('Doctor Profile Updated', 'Directory and booking information saved.');
    } catch (err: unknown) {
      toastError('Update Error', 'Failed to update profile');
    }
  };

  const filteredAppointments = appointments.filter(a => {
    if (statusFilter === 'ALL') return true;
    return a.status.toUpperCase() === statusFilter;
  });

  const todayStr = new Date().toISOString().split('T')[0];
  const todayAppointments = appointments.filter(a => a.date === todayStr);
  const pendingAppointments = appointments.filter(a => a.status === AppointmentStatus.PENDING);
  const completedAppointments = appointments.filter(a => a.status === AppointmentStatus.COMPLETED);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
        <div className="flex items-center gap-4">
          <ImageWithFallback
            src={currentDoc?.photo_url || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300'}
            alt={currentDoc?.name}
            fallbackType="doctor"
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-teal-400/40 shrink-0"
          />
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Physician Consultation Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-0.5">
              {currentDoc?.name || user?.name || 'Dr. Physician'}
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              {currentDoc?.specialization} • {currentDoc?.department_name} • Suite {currentDoc?.room_number}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant={currentDoc?.available_today ? 'emerald' : 'slate'} size="md" dot>
            {currentDoc?.available_today ? 'Accepting Patients Today' : 'Off-Duty Today'}
          </Badge>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Today's Patient Schedule", value: todayAppointments.length, icon: Calendar, color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Pending Confirmations', value: pendingAppointments.length, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Total Consultations Done', value: completedAppointments.length, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Consultation Fee', value: `₹${currentDoc?.consultation_fee || 1500}`, icon: IndianRupee, color: 'text-purple-600', bg: 'bg-purple-50' }
        ].map((m, idx) => {
          const Icon = m.icon;
          return (
            <ScrollReveal key={idx} direction="3d" delay={idx * 60}>
              <ThreeDCard intensity={10}>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4 h-full">
                  <div className={`w-12 h-12 rounded-xl ${m.bg} ${m.color} flex items-center justify-center shrink-0 shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900">{m.value}</p>
                    <p className="text-xs text-slate-500 font-medium">{m.label}</p>
                  </div>
                </div>
              </ThreeDCard>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 no-scrollbar">
        {[
          { id: 'appointments', label: `Patient Queue & Consultations (${appointments.length})`, icon: Calendar },
          { id: 'schedule', label: 'OPD Weekly Timetable', icon: Clock },
          { id: 'profile', label: 'Physician Profile & Settings', icon: User }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'border-teal-600 text-teal-700 bg-teal-50/50'
                  : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ================= TAB 1: APPOINTMENTS ================= */}
      {activeTab === 'appointments' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Assigned Patient Appointments</h3>
              <p className="text-xs text-slate-500">Approve requests, conduct consultations, and write digital prescriptions.</p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Filter Status:</span>
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white focus:outline-none"
              >
                <option value="ALL">All Statuses ({appointments.length})</option>
                <option value="PENDING">Pending Approval</option>
                <option value="SCHEDULED">Scheduled</option>
                <option value="CONFIRMED">Confirmed</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
          </div>

          {filteredAppointments.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <Calendar className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-800">No Appointments Match This Filter</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="p-4">ID</th>
                      <th className="p-4">Patient Name & Contact</th>
                      <th className="p-4">Consultation Date/Time</th>
                      <th className="p-4">Symptoms / Reason</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Clinical Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAppointments.map(appt => (
                      <tr key={appt.appointment_id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-4 font-mono font-bold text-teal-700">
                          #{appt.appointment_id.toUpperCase()}
                        </td>
                        <td className="p-4">
                          <p className="font-bold text-slate-900">{appt.patient_name}</p>
                          <span className="text-[11px] text-slate-400">{appt.patient_phone || appt.patient_email}</span>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold text-slate-900">{appt.date}</p>
                          <span className="text-[11px] text-slate-500">{appt.time}</span>
                        </td>
                        <td className="p-4 max-w-xs truncate">{appt.reason}</td>
                        <td className="p-4">
                          <Badge
                            variant={
                              appt.status === AppointmentStatus.COMPLETED
                                ? 'emerald'
                                : appt.status === AppointmentStatus.CANCELLED
                                ? 'rose'
                                : appt.status === AppointmentStatus.CONFIRMED
                                ? 'teal'
                                : 'amber'
                            }
                            size="sm"
                            dot
                          >
                            {appt.status.toUpperCase()}
                          </Badge>
                        </td>
                        <td className="p-4 text-right space-x-1.5 whitespace-nowrap">
                          {appt.status === AppointmentStatus.PENDING && (
                            <>
                              <Button
                                variant="primary"
                                size="sm"
                                onClick={() => handleUpdateStatus(appt.appointment_id, AppointmentStatus.CONFIRMED)}
                              >
                                Accept
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-rose-600 border-rose-200 hover:bg-rose-50"
                                onClick={() => handleUpdateStatus(appt.appointment_id, AppointmentStatus.CANCELLED)}
                              >
                                Decline
                              </Button>
                            </>
                          )}

                          {(appt.status === AppointmentStatus.CONFIRMED || appt.status === AppointmentStatus.SCHEDULED) && (
                            <>
                              <Button
                                variant="secondary"
                                size="sm"
                                leftIcon={<Pill className="w-3.5 h-3.5" />}
                                onClick={() => handleOpenRxModal(appt)}
                              >
                                Rx & Finish
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleUpdateStatus(appt.appointment_id, AppointmentStatus.COMPLETED)}
                              >
                                Mark Done
                              </Button>
                            </>
                          )}

                          {appt.status === AppointmentStatus.COMPLETED && (
                            <span className="text-emerald-700 font-bold text-xs inline-flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4" /> Consultation Closed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 2: SCHEDULE ================= */}
      {activeTab === 'schedule' && (
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">OPD Consultation Weekly Schedule</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Toggle days of practice and configure consultation hours. Real-time patient booking slots dynamically adapt.
            </p>
          </div>

          <div className="space-y-3">
            {availabilities.map(avail => (
              <div
                key={avail.availability_id}
                className="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                      avail.is_active ? 'bg-teal-100 text-teal-800' : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {avail.day_of_week.slice(0, 3).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{avail.day_of_week}</h4>
                    <p className="text-xs text-slate-500">
                      {avail.is_active ? `${avail.start_time} to ${avail.end_time}` : 'Not In Clinic (Day Off)'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={avail.is_active}
                      onChange={() => handleToggleDay(avail.availability_id, avail.is_active)}
                      className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                    />
                    <span>{avail.is_active ? 'Active on Schedule' : 'Mark as Off'}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 3: PROFILE ================= */}
      {activeTab === 'profile' && (
        <div className="max-w-2xl bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Physician Public Profile</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              These details are visible on the public doctors directory and patient booking portal.
            </p>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <Input
              label="Doctor Legal Name & Title"
              required
              value={profileForm.name}
              onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Clinical Specialization"
                required
                value={profileForm.specialization}
                onChange={e => setProfileForm({ ...profileForm, specialization: e.target.value })}
              />
              <Input
                label="Qualifications (Degrees/Fellowships)"
                value={profileForm.qualification}
                onChange={e => setProfileForm({ ...profileForm, qualification: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input
                label="Experience (Years)"
                type="number"
                value={profileForm.experience_years}
                onChange={e => setProfileForm({ ...profileForm, experience_years: Number(e.target.value) })}
              />
              <Input
                label="Consultation Fee (₹)"
                type="number"
                value={profileForm.consultation_fee}
                onChange={e => setProfileForm({ ...profileForm, consultation_fee: Number(e.target.value) })}
              />
              <Input
                label="Clinic Suite / Room"
                value={profileForm.room_number}
                onChange={e => setProfileForm({ ...profileForm, room_number: e.target.value })}
              />
            </div>

            <Textarea
              label="Professional Bio & Surgical Interests"
              rows={4}
              value={profileForm.bio}
              onChange={e => setProfileForm({ ...profileForm, bio: e.target.value })}
            />

            <div className="pt-2">
              <Button type="submit" variant="primary" size="md">
                Save Doctor Profile
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* ================= MODAL: DIGITAL PRESCRIPTION WRITER ================= */}
      {isRxModalOpen && activeApptForRx && (
        <Modal
          isOpen={isRxModalOpen}
          onClose={() => setIsRxModalOpen(false)}
          title={`Write Prescription for ${activeApptForRx.patient_name}`}
          subtitle={`Appointment Ref: #${activeApptForRx.appointment_id.toUpperCase()}`}
          maxWidth="2xl"
        >
          <form onSubmit={handleSubmitRx} className="space-y-5">
            <Input
              label="Primary Clinical Diagnosis"
              required
              placeholder="e.g. Acute Bronchitis, Hypertension Stage 1"
              value={diagnosis}
              onChange={e => setDiagnosis(e.target.value)}
            />

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Prescribed Medicines ({medicines.length})
                </label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  leftIcon={<Plus className="w-3.5 h-3.5" />}
                  onClick={handleAddMedicineRow}
                >
                  Add Medicine
                </Button>
              </div>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {medicines.map((med, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-teal-800">Medicine #{idx + 1}</span>
                      {medicines.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMedicineRow(idx)}
                          className="text-rose-500 hover:text-rose-700 text-xs font-bold cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="text"
                        placeholder="Drug / Generic Name (e.g. Amoxicillin)"
                        value={med.medicine_name}
                        onChange={e => handleMedicineChange(idx, 'medicine_name', e.target.value)}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Dosage (e.g. 500mg)"
                        value={med.dosage}
                        onChange={e => handleMedicineChange(idx, 'dosage', e.target.value)}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Frequency (e.g. 2x Daily)"
                        value={med.frequency}
                        onChange={e => handleMedicineChange(idx, 'frequency', e.target.value)}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Textarea
              label="Doctor Instructions / Lifestyle Notes"
              rows={3}
              placeholder="e.g. Avoid dairy with antibiotic. Drink 3L fluids. Follow-up in 10 days if symptoms persist."
              value={rxNotes}
              onChange={e => setRxNotes(e.target.value)}
            />

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsRxModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="md" isLoading={isSubmittingRx}>
                Sign & Finalize Prescription
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
