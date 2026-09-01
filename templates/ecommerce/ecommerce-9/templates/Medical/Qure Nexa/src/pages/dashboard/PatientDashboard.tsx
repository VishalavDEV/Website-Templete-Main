import React, { useState, useEffect } from 'react';
import {
  Calendar,
  FileText,
  CreditCard,
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Plus,
  Download,
  Eye,
  Activity,
  HeartPulse,
  Pill,
  ShieldCheck,
  ArrowRight,
  IndianRupee
} from 'lucide-react';
import {
  Appointment,
  Prescription,
  MedicalRecord,
  Invoice,
  Patient,
  AppointmentStatus,
  InvoiceStatus
} from '../../types';
import { ApiService } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';
import { Modal } from '../../components/common/Modal';
import { Input, Select, Textarea } from '../../components/common/Input';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';

interface PatientDashboardProps {
  onOpenBooking: () => void;
  onNavigateHome: () => void;
}

export const PatientDashboard: React.FC<PatientDashboardProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const { user, patient, refreshProfile } = useAuth();
  const { success, error: toastError } = useToast();

  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'prescriptions' | 'records' | 'billing' | 'profile'>('overview');
  const [loading, setLoading] = useState(true);

  // Data States
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  // Modals
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(null);
  const [payingInvoice, setPayingInvoice] = useState<Invoice | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Profile Form State
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    dob: patient?.dob || '',
    gender: patient?.gender || 'Male',
    blood_group: patient?.blood_group || 'O+',
    allergies: patient?.allergies || '',
    chronic_conditions: patient?.chronic_conditions || '',
    emergency_contact: patient?.emergency_contact || ''
  });

  const patId = patient?.patient_id || 'pat-1';

  const loadPatientData = async () => {
    try {
      setLoading(true);
      const [appts, rxs, recs, invs] = await Promise.all([
        ApiService.getAppointments({ patient_id: patId }),
        ApiService.getPrescriptions({ patient_id: patId }),
        ApiService.getMedicalRecords(patId),
        ApiService.getInvoices(patId)
      ]);
      setAppointments(appts);
      setPrescriptions(rxs);
      setRecords(recs);
      setInvoices(invs);
    } catch (err) {
      console.error('Failed to load patient dashboard', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatientData();
  }, [patId]);

  // Cancel Appointment Action
  const handleCancelAppointment = async (apptId: string) => {
    if (!window.confirm('Are you sure you want to cancel this scheduled appointment?')) return;
    try {
      await ApiService.updateAppointmentStatus(apptId, AppointmentStatus.CANCELLED);
      success('Appointment Cancelled', 'The consultation slot has been released.');
      loadPatientData();
    } catch (err: unknown) {
      toastError('Cancellation Error', 'Failed to cancel appointment');
    }
  };

  // Pay Invoice Action
  const handlePayInvoice = async () => {
    if (!payingInvoice) return;
    try {
      setIsProcessingPayment(true);
      await ApiService.payInvoice(payingInvoice.invoice_id, 'Credit Card Online');
      success('Payment Successful', `Invoice #${payingInvoice.invoice_id.toUpperCase()} has been settled in full.`);
      setPayingInvoice(null);
      loadPatientData();
    } catch (err: unknown) {
      toastError('Payment Failed', 'Transaction could not be processed');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  // Update Profile Action
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ApiService.updatePatient(patId, {
        name: profileForm.name,
        phone: profileForm.phone,
        dob: profileForm.dob,
        gender: profileForm.gender as 'Male' | 'Female' | 'Other',
        blood_group: profileForm.blood_group,
        allergies: profileForm.allergies,
        chronic_conditions: profileForm.chronic_conditions,
        emergency_contact: profileForm.emergency_contact
      });
      refreshProfile();
      success('Profile Updated', 'Your medical records profile has been updated.');
    } catch (err: unknown) {
      toastError('Update Error', 'Failed to save profile changes');
    }
  };

  const upcomingAppointments = appointments.filter(
    a => a.status === AppointmentStatus.SCHEDULED || a.status === AppointmentStatus.CONFIRMED || a.status === AppointmentStatus.PENDING
  );
  const pastAppointments = appointments.filter(
    a => a.status === AppointmentStatus.COMPLETED || a.status === AppointmentStatus.CANCELLED
  );
  const pendingInvoices = invoices.filter(i => i.status === InvoiceStatus.PENDING);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 shrink-0">
            <HeartPulse className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Patient Medical Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-0.5">
              Welcome back, {user?.name || 'Patient'}
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              Patient ID: <strong className="font-mono">{patId.toUpperCase()}</strong> • Blood Group: <strong className="text-teal-300">{patient?.blood_group || 'O+'}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="md"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={onOpenBooking}
          >
            Book New Appointment
          </Button>
        </div>
      </div>

      {/* Metric Quick Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Upcoming Consultations', value: upcomingAppointments.length, icon: Calendar, color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Active Prescriptions', value: prescriptions.length, icon: Pill, color: 'text-sky-600', bg: 'bg-sky-50' },
          { label: 'Medical Reports & Labs', value: records.length, icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Pending Invoices', value: pendingInvoices.length, icon: CreditCard, color: 'text-amber-600', bg: 'bg-amber-50' }
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

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 no-scrollbar">
        {[
          { id: 'overview', label: 'Overview', icon: Activity },
          { id: 'appointments', label: `Appointments (${appointments.length})`, icon: Calendar },
          { id: 'prescriptions', label: `Prescriptions (${prescriptions.length})`, icon: Pill },
          { id: 'records', label: `Lab & Records (${records.length})`, icon: FileText },
          { id: 'billing', label: `Invoices & Billing (${invoices.length})`, icon: CreditCard },
          { id: 'profile', label: 'Medical Profile', icon: User }
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

      {/* ================= TAB 1: OVERVIEW ================= */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Next Upcoming Appointment & Recent Prescriptions */}
          <div className="lg:col-span-8 space-y-6">
            {/* Next Appointment Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Next Scheduled Visit</h3>
                <button
                  onClick={() => setActiveTab('appointments')}
                  className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                >
                  View All →
                </button>
              </div>

              {upcomingAppointments.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
                  <Calendar className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-800">No Upcoming Appointments</p>
                  <p className="text-xs text-slate-500 mt-1">Need to see a doctor or follow up on test results?</p>
                  <Button variant="primary" size="sm" className="mt-4" onClick={onOpenBooking}>
                    Schedule an Appointment
                  </Button>
                </div>
              ) : (
                <div className="p-5 bg-gradient-to-r from-teal-50 to-sky-50 rounded-2xl border border-teal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex flex-col items-center justify-center shrink-0 shadow-sm">
                      <span className="text-[10px] font-bold uppercase">
                        {new Date(upcomingAppointments[0].date).toLocaleDateString(undefined, { month: 'short' })}
                      </span>
                      <span className="text-lg font-black leading-tight">
                        {new Date(upcomingAppointments[0].date).getDate()}
                      </span>
                    </div>
                    <div>
                      <Badge variant="teal" size="sm" className="mb-1">
                        {upcomingAppointments[0].status.toUpperCase()}
                      </Badge>
                      <h4 className="text-base font-bold text-slate-900">
                        {upcomingAppointments[0].doctor_name}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {upcomingAppointments[0].department_name} • {upcomingAppointments[0].time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCancelAppointment(upcomingAppointments[0].appointment_id)}
                    >
                      Cancel Visit
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Prescriptions */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Active Prescriptions & Medications</h3>
                <button
                  onClick={() => setActiveTab('prescriptions')}
                  className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                >
                  View All ({prescriptions.length}) →
                </button>
              </div>

              {prescriptions.length === 0 ? (
                <p className="text-xs text-slate-500 py-4 text-center">No active medication prescriptions on file.</p>
              ) : (
                <div className="space-y-3">
                  {prescriptions.slice(0, 3).map(rx => (
                    <div
                      key={rx.prescription_id}
                      onClick={() => setSelectedPrescription(rx)}
                      className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50/20 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                          <Pill className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{rx.diagnosis}</h5>
                          <span className="text-[11px] text-slate-500">
                            Prescribed by {rx.doctor_name} • {rx.date}
                          </span>
                        </div>
                      </div>
                      <Badge variant="teal" size="sm">
                        {rx.medicines.length} Medicines
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Patient Profile Snapshot & Quick Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">Health Profile Summary</h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Blood Group</span>
                  <span className="font-bold text-slate-900">{patient?.blood_group || 'O+'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Gender & DOB</span>
                  <span className="font-bold text-slate-900">
                    {patient?.gender || 'Male'}, {patient?.dob || '1995-06-15'}
                  </span>
                </div>
                <div className="py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 block">Known Allergies</span>
                  <span className="font-semibold text-rose-600">
                    {patient?.allergies || 'None declared'}
                  </span>
                </div>
                <div className="py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 block">Chronic Conditions</span>
                  <span className="font-semibold text-slate-800">
                    {patient?.chronic_conditions || 'None declared'}
                  </span>
                </div>
                <div className="py-1.5">
                  <span className="text-slate-500 block">Emergency Contact</span>
                  <span className="font-semibold text-slate-800">
                    {patient?.emergency_contact || 'None listed'}
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setActiveTab('profile')}
              >
                Edit Medical Profile
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: APPOINTMENTS ================= */}
      {activeTab === 'appointments' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Your Medical Appointments</h3>
              <p className="text-xs text-slate-500">Track and manage past and upcoming consultations.</p>
            </div>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={onOpenBooking}
            >
              Book New Visit
            </Button>
          </div>

          {appointments.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <Calendar className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-800">No Appointments on Record</p>
              <Button variant="primary" size="sm" className="mt-4" onClick={onOpenBooking}>
                Book Consultation
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Appointment ID</th>
                      <th className="p-4">Doctor & Department</th>
                      <th className="p-4">Date & Time</th>
                      <th className="p-4">Reason for Visit</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {appointments.map(appt => (
                      <tr key={appt.appointment_id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-4 font-mono font-bold text-teal-700">
                          #{appt.appointment_id.toUpperCase()}
                        </td>
                        <td className="p-4">
                          <p className="font-bold text-slate-900">{appt.doctor_name}</p>
                          <span className="text-[11px] text-slate-400">{appt.department_name}</span>
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
                        <td className="p-4 text-right">
                          {(appt.status === AppointmentStatus.SCHEDULED ||
                            appt.status === AppointmentStatus.PENDING ||
                            appt.status === AppointmentStatus.CONFIRMED) && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-rose-600 hover:bg-rose-50"
                              onClick={() => handleCancelAppointment(appt.appointment_id)}
                            >
                              Cancel
                            </Button>
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

      {/* ================= TAB 3: PRESCRIPTIONS ================= */}
      {activeTab === 'prescriptions' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Clinical Prescriptions (Rx)</h3>
            <p className="text-xs text-slate-500">Official prescriptions issued by Qure Nexa attending physicians.</p>
          </div>

          {prescriptions.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <Pill className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-800">No Prescriptions Issued Yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prescriptions.map(rx => (
                <div
                  key={rx.prescription_id}
                  className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                      <span className="text-[11px] font-mono font-bold text-teal-700">
                        #{rx.prescription_id.toUpperCase()}
                      </span>
                      <span className="text-xs text-slate-400">{rx.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">{rx.diagnosis}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">By {rx.doctor_name}</p>

                    <div className="mt-4 space-y-2">
                      {rx.medicines.map((med, idx) => (
                        <div key={idx} className="p-2.5 bg-slate-50 rounded-xl text-xs flex items-center justify-between">
                          <div>
                            <p className="font-bold text-slate-900">{med.medicine_name}</p>
                            <span className="text-[11px] text-slate-500">
                              {med.dosage} • {med.frequency}
                            </span>
                          </div>
                          <span className="font-semibold text-teal-700">{med.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Button variant="outline" size="sm" onClick={() => setSelectedPrescription(rx)}>
                      View Full Rx
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={<Download className="w-3.5 h-3.5" />}
                      onClick={() => window.print()}
                    >
                      Print
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 4: MEDICAL RECORDS / LABS ================= */}
      {activeTab === 'records' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Lab Reports & Diagnostic Files</h3>
            <p className="text-xs text-slate-500">Digital test results, pathology panels, and diagnostic summaries.</p>
          </div>

          {records.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <FileText className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-800">No Diagnostic Reports Filed</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Report Title / Test</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Consulting Physician</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {records.map(rec => (
                    <tr key={rec.record_id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4">
                        <p className="font-bold text-slate-900">{rec.title}</p>
                        <span className="text-[11px] text-slate-400">Diagnosis: {rec.diagnosis}</span>
                      </td>
                      <td className="p-4">
                        <Badge variant="teal" size="sm">
                          {rec.record_type}
                        </Badge>
                      </td>
                      <td className="p-4 font-semibold text-slate-800">{rec.doctor_name}</td>
                      <td className="p-4 text-slate-500">{rec.date}</td>
                      <td className="p-4 text-right space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          leftIcon={<Eye className="w-3.5 h-3.5" />}
                          onClick={() => setSelectedRecord(rec)}
                        >
                          View Report
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 5: BILLING & INVOICES ================= */}
      {activeTab === 'billing' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Hospital Invoices & Billing Statements</h3>
            <p className="text-xs text-slate-500">Secure online bill payments and itemized billing receipts.</p>
          </div>

          {invoices.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <CreditCard className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-800">No Billing Records Found</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Invoice #</th>
                    <th className="p-4">Billing Description</th>
                    <th className="p-4">Date / Due</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Payment Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {invoices.map(inv => (
                    <tr key={inv.invoice_id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 font-mono font-bold text-slate-900">
                        #{inv.invoice_id.toUpperCase()}
                      </td>
                      <td className="p-4">
                        <p className="font-semibold text-slate-900">
                          {inv.items.map(it => it.description).join(', ')}
                        </p>
                        <span className="text-[11px] text-slate-400">Ref: {inv.appointment_id || 'OPD Service'}</span>
                      </td>
                      <td className="p-4 text-slate-500">{inv.issue_date}</td>
                      <td className="p-4 font-black text-slate-900 text-sm">
                        ₹{inv.total_amount.toFixed(2)}
                      </td>
                      <td className="p-4">
                        <Badge
                          variant={inv.status === InvoiceStatus.PAID ? 'emerald' : 'amber'}
                          size="sm"
                          dot
                        >
                          {inv.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        {inv.status === InvoiceStatus.PENDING ? (
                          <Button
                            variant="primary"
                            size="sm"
                            leftIcon={<CreditCard className="w-3.5 h-3.5" />}
                            onClick={() => setPayingInvoice(inv)}
                          >
                            Pay Online
                          </Button>
                        ) : (
                          <span className="text-emerald-700 font-bold text-xs flex items-center justify-end gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Paid via {inv.payment_method || 'Card'}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 6: MEDICAL PROFILE SETTINGS ================= */}
      {activeTab === 'profile' && (
        <div className="max-w-2xl bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Personal Health Record Profile</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Keep critical clinical information like allergies and blood group up-to-date for medical emergencies.
            </p>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <Input
              label="Full Name"
              required
              value={profileForm.name}
              onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Phone Number"
                value={profileForm.phone}
                onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })}
              />
              <Input
                label="Date of Birth"
                type="date"
                value={profileForm.dob}
                onChange={e => setProfileForm({ ...profileForm, dob: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Gender"
                value={profileForm.gender}
                onChange={e => setProfileForm({ ...profileForm, gender: e.target.value as 'Male' | 'Female' | 'Other' })}
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' }
                ]}
              />
              <Select
                label="Blood Group"
                value={profileForm.blood_group}
                onChange={e => setProfileForm({ ...profileForm, blood_group: e.target.value })}
                options={[
                  { value: 'A+', label: 'A+' },
                  { value: 'A-', label: 'A-' },
                  { value: 'B+', label: 'B+' },
                  { value: 'B-', label: 'B-' },
                  { value: 'O+', label: 'O+' },
                  { value: 'O-', label: 'O-' },
                  { value: 'AB+', label: 'AB+' },
                  { value: 'AB-', label: 'AB-' }
                ]}
              />
            </div>

            <Input
              label="Known Allergies (e.g. Penicillin, Peanuts, Latex)"
              placeholder="e.g. Penicillin, Sulfa drugs"
              value={profileForm.allergies}
              onChange={e => setProfileForm({ ...profileForm, allergies: e.target.value })}
            />

            <Input
              label="Chronic Conditions (e.g. Hypertension, Asthma, Type II Diabetes)"
              placeholder="e.g. Hypertension"
              value={profileForm.chronic_conditions}
              onChange={e => setProfileForm({ ...profileForm, chronic_conditions: e.target.value })}
            />

            <Input
              label="Emergency Contact & Phone"
              placeholder="e.g. Mary Vance (Spouse) - +91 98765 43210"
              value={profileForm.emergency_contact}
              onChange={e => setProfileForm({ ...profileForm, emergency_contact: e.target.value })}
            />

            <div className="pt-2">
              <Button type="submit" variant="primary" size="md">
                Save Health Profile Changes
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* ================= MODAL: PRESCRIPTION PREVIEW ================= */}
      {selectedPrescription && (
        <Modal
          isOpen={!!selectedPrescription}
          onClose={() => setSelectedPrescription(null)}
          title={`Prescription #${selectedPrescription.prescription_id.toUpperCase()}`}
          subtitle={`Issued by ${selectedPrescription.doctor_name} on ${selectedPrescription.date}`}
          maxWidth="lg"
        >
          <div className="space-y-6">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
              <p className="text-slate-500">Clinical Diagnosis:</p>
              <p className="text-sm font-bold text-slate-900">{selectedPrescription.diagnosis}</p>
            </div>

            <div>
              <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Prescribed Medicines</h5>
              <div className="space-y-2">
                {selectedPrescription.medicines.map((med, i) => (
                  <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{med.medicine_name}</span>
                      <span className="text-teal-700">{med.duration}</span>
                    </div>
                    <p className="text-slate-600 mt-1">
                      Dosage: <strong>{med.dosage}</strong> • Frequency: <strong>{med.frequency}</strong>
                    </p>
                    {med.instructions && (
                      <p className="text-[11px] text-slate-500 italic mt-0.5">{med.instructions}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {selectedPrescription.notes && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                <span className="font-bold block">Physician Instructions:</span>
                <p className="mt-0.5">{selectedPrescription.notes}</p>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
              <Button variant="outline" size="sm" onClick={() => setSelectedPrescription(null)}>
                Close
              </Button>
              <Button variant="primary" size="sm" leftIcon={<Download className="w-3.5 h-3.5" />} onClick={() => window.print()}>
                Print Rx
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* ================= MODAL: MEDICAL REPORT PREVIEW ================= */}
      {selectedRecord && (
        <Modal
          isOpen={!!selectedRecord}
          onClose={() => setSelectedRecord(null)}
          title={selectedRecord.title}
          subtitle={`Report Type: ${selectedRecord.record_type} • ${selectedRecord.date}`}
          maxWidth="lg"
        >
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div>
                <span className="text-slate-400 block font-medium">Physician / Pathologist</span>
                <span className="font-bold text-slate-900">{selectedRecord.doctor_name}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Primary Clinical Finding</span>
                <span className="font-bold text-teal-800">{selectedRecord.diagnosis}</span>
              </div>
            </div>

            <div>
              <span className="text-slate-700 font-bold uppercase tracking-wider block mb-1">
                Diagnostic Findings & Notes
              </span>
              <p className="p-4 bg-white rounded-2xl border border-slate-200 text-slate-700 leading-relaxed">
                {selectedRecord.notes}
              </p>
            </div>

            {selectedRecord.treatment_plan && (
              <div>
                <span className="text-slate-700 font-bold uppercase tracking-wider block mb-1">
                  Treatment / Care Plan
                </span>
                <p className="p-4 bg-teal-50/50 rounded-2xl border border-teal-200 text-slate-800 leading-relaxed">
                  {selectedRecord.treatment_plan}
                </p>
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <Button variant="primary" size="sm" onClick={() => setSelectedRecord(null)}>
                Done
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* ================= MODAL: PAY INVOICE ================= */}
      {payingInvoice && (
        <Modal
          isOpen={!!payingInvoice}
          onClose={() => setPayingInvoice(null)}
          title={`Settle Bill: #${payingInvoice.invoice_id.toUpperCase()}`}
          subtitle="Secure 256-Bit Encrypted Payment Processing"
          maxWidth="md"
        >
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Service Items:</span>
                <span className="font-bold text-slate-900">
                  {payingInvoice.items.map(i => i.description).join(', ')}
                </span>
              </div>
              <div className="flex justify-between text-sm border-t border-slate-200 pt-2 font-bold text-slate-900">
                <span>Total Amount Due:</span>
                <span className="text-teal-700 font-black">₹{payingInvoice.total_amount.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Input label="Cardholder Name" defaultValue={user?.name || ''} />
              <Input label="Card Number" placeholder="4242 •••• •••• 4242" defaultValue="4242 •••• •••• 4242" />
              <div className="grid grid-cols-2 gap-2">
                <Input label="Expiry Date" placeholder="MM/YY" defaultValue="12/28" />
                <Input label="CVV" placeholder="123" defaultValue="888" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
              <Button variant="outline" size="sm" onClick={() => setPayingInvoice(null)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                isLoading={isProcessingPayment}
                onClick={handlePayInvoice}
              >
                Confirm Payment of ₹{payingInvoice.total_amount.toFixed(2)}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
