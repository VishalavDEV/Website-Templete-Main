import React, { useState, useEffect } from 'react';
import {
  Users,
  Stethoscope,
  Building2,
  Calendar,
  CreditCard,
  MessageSquare,
  Mail,
  Plus,
  Trash2,
  Edit,
  CheckCircle2,
  XCircle,
  Search,
  Eye,
  IndianRupee,
  Activity,
  AlertCircle,
  Star,
  Check
} from 'lucide-react';
import {
  Doctor,
  Department,
  Patient,
  Appointment,
  Invoice,
  Testimonial,
  ContactMessage,
  AppointmentStatus,
  InvoiceStatus,
  UserRole
} from '../../types';
import { ApiService } from '../../services/api';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';
import { Modal } from '../../components/common/Modal';
import { Input, Select, Textarea } from '../../components/common/Input';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const { success, error: toastError } = useToast();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'doctors' | 'departments' | 'patients' | 'appointments' | 'billing' | 'testimonials' | 'inquiries'
  >('overview');

  const [loading, setLoading] = useState(true);

  // Core Datasets
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [inquiries, setInquiries] = useState<ContactMessage[]>([]);

  // Search & Filter
  const [searchFilter, setSearchFilter] = useState('');

  // Doctor Modal Form
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [doctorForm, setDoctorForm] = useState({
    name: '',
    email: '',
    phone: '',
    department_id: '',
    specialization: '',
    qualification: '',
    experience_years: 5,
    consultation_fee: 1500,
    room_number: 'Room 101',
    bio: '',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300'
  });

  // Department Modal Form
  const [isDeptModalOpen, setIsDeptModalOpen] = useState(false);
  const [editingDept, setEditingDept] = useState<Department | null>(null);
  const [deptForm, setDeptForm] = useState({
    name: '',
    description: '',
    head_doctor_name: '',
    contact_extension: 'Ext 100',
    bed_capacity: 30
  });

  // Invoice Creation Modal
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [invoiceForm, setInvoiceForm] = useState({
    patient_id: '',
    description: 'Consultation & Diagnostics',
    amount: 150
  });

  const loadAllAdminData = async () => {
    try {
      setLoading(true);
      const [docList, deptList, patList, apptList, invList, testList, inqList] = await Promise.all([
        ApiService.getDoctors(),
        ApiService.getDepartments(),
        ApiService.getPatients(),
        ApiService.getAppointments(),
        ApiService.getInvoices(),
        ApiService.getTestimonials(false),
        ApiService.getContactMessages()
      ]);
      setDoctors(docList);
      setDepartments(deptList);
      setPatients(patList);
      setAppointments(apptList);
      setInvoices(invList);
      setTestimonials(testList);
      setInquiries(inqList);
    } catch (err) {
      console.error('Failed to load admin dataset', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllAdminData();
  }, []);

  // Total Revenue calculation
  const totalRevenue = invoices
    .filter(i => i.status === InvoiceStatus.PAID)
    .reduce((acc, curr) => acc + curr.total_amount, 0);

  // ================= DOCTOR CRUD =================
  const handleOpenDoctorModal = (doc?: Doctor) => {
    if (doc) {
      setEditingDoctor(doc);
      setDoctorForm({
        name: doc.name,
        email: doc.email,
        phone: doc.phone,
        department_id: doc.department_id,
        specialization: doc.specialization,
        qualification: doc.qualification,
        experience_years: doc.experience_years,
        consultation_fee: doc.consultation_fee,
        room_number: doc.room_number || '',
        bio: doc.bio,
        photo_url: doc.photo_url
      });
    } else {
      setEditingDoctor(null);
      setDoctorForm({
        name: '',
        email: '',
        phone: '',
        department_id: departments[0]?.department_id || 'dept-1',
        specialization: '',
        qualification: 'MD, Board Certified',
        experience_years: 8,
        consultation_fee: 1500,
        room_number: 'Room 201',
        bio: 'Clinical specialist with extensive hospital experience.',
        photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300'
      });
    }
    setIsDoctorModalOpen(true);
  };

  const handleSaveDoctor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!doctorForm.name || !doctorForm.email || !doctorForm.specialization) {
      toastError('Required Fields', 'Please complete doctor name, email and specialty.');
      return;
    }
    try {
      if (editingDoctor) {
        await ApiService.updateDoctor(editingDoctor.doctor_id, {
          ...doctorForm,
          experience_years: Number(doctorForm.experience_years),
          consultation_fee: Number(doctorForm.consultation_fee)
        });
        success('Doctor Updated', `${doctorForm.name} profile updated.`);
      } else {
        await ApiService.createDoctor({
          ...doctorForm,
          experience_years: Number(doctorForm.experience_years),
          consultation_fee: Number(doctorForm.consultation_fee)
        });
        success('Doctor Created', `${doctorForm.name} added to medical faculty.`);
      }
      setIsDoctorModalOpen(false);
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Doctor Save Error', 'Could not save doctor profile.');
    }
  };

  const handleDeleteDoctor = async (docId: string, name: string) => {
    if (!window.confirm(`Delete ${name} from medical faculty?`)) return;
    try {
      await ApiService.deleteDoctor(docId);
      success('Doctor Removed', `${name} removed from faculty directory.`);
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Delete Error', 'Could not delete doctor.');
    }
  };

  // ================= DEPARTMENT CRUD =================
  const handleOpenDeptModal = (dept?: Department) => {
    if (dept) {
      setEditingDept(dept);
      setDeptForm({
        name: dept.name,
        description: dept.description,
        head_doctor_name: dept.head_doctor_name || '',
        contact_extension: dept.contact_extension,
        bed_capacity: dept.bed_capacity || 30
      });
    } else {
      setEditingDept(null);
      setDeptForm({
        name: '',
        description: '',
        head_doctor_name: '',
        contact_extension: 'Ext 500',
        bed_capacity: 40
      });
    }
    setIsDeptModalOpen(true);
  };

  const handleSaveDept = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deptForm.name || !deptForm.description) {
      toastError('Missing Details', 'Department name and description are required.');
      return;
    }
    try {
      if (editingDept) {
        await ApiService.updateDepartment(editingDept.department_id, {
          ...deptForm,
          bed_capacity: Number(deptForm.bed_capacity)
        });
        success('Department Updated', `${deptForm.name} updated.`);
      } else {
        await ApiService.createDepartment({
          ...deptForm,
          bed_capacity: Number(deptForm.bed_capacity)
        });
        success('Department Created', `${deptForm.name} created.`);
      }
      setIsDeptModalOpen(false);
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Department Save Error', 'Could not save department.');
    }
  };

  const handleDeleteDept = async (deptId: string, name: string) => {
    if (!window.confirm(`Delete department "${name}"?`)) return;
    try {
      await ApiService.deleteDepartment(deptId);
      success('Department Deleted', `${name} removed.`);
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Delete Error', 'Could not delete department.');
    }
  };

  // ================= INVOICE GENERATOR =================
  const handleCreateInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!invoiceForm.patient_id) {
      toastError('Selection Required', 'Select a patient.');
      return;
    }
    try {
      await ApiService.createInvoice({
        patient_id: invoiceForm.patient_id,
        items: [{ description: invoiceForm.description, quantity: 1, unit_price: Number(invoiceForm.amount), total: Number(invoiceForm.amount) }],
        total_amount: Number(invoiceForm.amount)
      });
      success('Invoice Created', 'Billing record created.');
      setIsInvoiceModalOpen(false);
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Error', 'Could not create invoice');
    }
  };

  const handleMarkInvoicePaid = async (invId: string) => {
    try {
      await ApiService.payInvoice(invId, 'Cash / Reception');
      success('Invoice Settled', `Invoice marked as paid.`);
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Error', 'Could not mark invoice as paid');
    }
  };

  // ================= TESTIMONIAL MODERATION =================
  const handleApproveTestimonial = async (id: string) => {
    try {
      await ApiService.approveTestimonial(id);
      success('Review Approved', 'Testimonial is now visible on the public website.');
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Error', 'Could not approve testimonial');
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    try {
      await ApiService.deleteTestimonial(id);
      success('Review Removed', 'Testimonial deleted.');
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Error', 'Could not delete testimonial');
    }
  };

  // ================= INQUIRY MODERATION =================
  const handleMarkInquiryReplied = async (id: string) => {
    try {
      await ApiService.updateContactMessageStatus(id, 'replied');
      success('Inquiry Updated', 'Status marked as replied.');
      loadAllAdminData();
    } catch (err: unknown) {
      toastError('Error', 'Failed to update inquiry status');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 shrink-0">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Executive Administration
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-0.5">
              Hospital Operations Control
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              Logged in as <strong className="text-white">{user?.name}</strong> • System Status: <strong className="text-emerald-400">All Nodes Healthy</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Button
            variant="secondary"
            size="md"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={() => handleOpenDoctorModal()}
          >
            Add Doctor
          </Button>
          <Button
            variant="outline"
            size="md"
            className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={() => handleOpenDeptModal()}
          >
            Add Department
          </Button>
        </div>
      </div>

      {/* Global Stat Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { label: 'Registered Patients', value: patients.length, icon: Users, color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Active Specialists', value: doctors.length, icon: Stethoscope, color: 'text-sky-600', bg: 'bg-sky-50' },
          { label: 'Clinical Divisions', value: departments.length, icon: Building2, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Total Appointments', value: appointments.length, icon: Calendar, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Settled Revenue', value: `₹${totalRevenue.toLocaleString()}`, icon: IndianRupee, color: 'text-emerald-600', bg: 'bg-emerald-50' }
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={idx} direction="3d" delay={idx * 50}>
              <ThreeDCard intensity={10}>
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3 h-full">
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl font-black text-slate-900 truncate">{stat.value}</p>
                    <p className="text-[11px] text-slate-500 font-medium truncate">{stat.label}</p>
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
          { id: 'doctors', label: `Doctors (${doctors.length})`, icon: Stethoscope },
          { id: 'departments', label: `Departments (${departments.length})`, icon: Building2 },
          { id: 'patients', label: `Patients (${patients.length})`, icon: Users },
          { id: 'appointments', label: `Appointments (${appointments.length})`, icon: Calendar },
          { id: 'billing', label: `Invoices & Revenue (${invoices.length})`, icon: CreditCard },
          { id: 'testimonials', label: `Reviews (${testimonials.length})`, icon: MessageSquare },
          { id: 'inquiries', label: `Inquiries (${inquiries.length})`, icon: Mail }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-3.5 py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
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

      {/* ================= TAB: OVERVIEW ================= */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Appointments & System Status */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Recent Hospital Appointments</h3>
                <button
                  onClick={() => setActiveTab('appointments')}
                  className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                >
                  View All ({appointments.length}) →
                </button>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {appointments.slice(0, 5).map(a => (
                  <div key={a.appointment_id} className="py-3 flex items-center justify-between gap-2">
                    <div>
                      <p className="font-bold text-slate-900">{a.patient_name}</p>
                      <span className="text-[11px] text-slate-500">
                        {a.doctor_name} • {a.date} @ {a.time}
                      </span>
                    </div>
                    <Badge
                      variant={
                        a.status === AppointmentStatus.COMPLETED
                          ? 'emerald'
                          : a.status === AppointmentStatus.CANCELLED
                          ? 'rose'
                          : 'amber'
                      }
                      size="sm"
                    >
                      {a.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Bed Occupancy Snapshot */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">Clinical Department Bed Allocation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {departments.slice(0, 6).map(d => (
                  <div key={d.department_id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-900">{d.name}</p>
                      <span className="text-[11px] text-slate-500">Head: {d.head_doctor_name?.split(',')[0]}</span>
                    </div>
                    <span className="font-mono font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
                      {d.bed_capacity || 40} Beds
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Quick Actions & Pending Moderation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">Pending Actions</h3>
              <div className="space-y-2 text-xs">
                <div
                  onClick={() => setActiveTab('testimonials')}
                  className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex justify-between items-center cursor-pointer hover:bg-amber-100 transition-colors"
                >
                  <span className="font-semibold text-amber-900">Pending Reviews:</span>
                  <span className="font-bold text-amber-800">
                    {testimonials.filter(t => !t.is_approved).length} reviews
                  </span>
                </div>
                <div
                  onClick={() => setActiveTab('inquiries')}
                  className="p-3 bg-sky-50 rounded-xl border border-sky-200 flex justify-between items-center cursor-pointer hover:bg-sky-100 transition-colors"
                >
                  <span className="font-semibold text-sky-900">Unanswered Inquiries:</span>
                  <span className="font-bold text-sky-800">
                    {inquiries.filter(i => i.status === 'unread').length} messages
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB: DOCTORS CRUD ================= */}
      {activeTab === 'doctors' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Medical Staff Directory ({doctors.length})</h3>
              <p className="text-xs text-slate-500">Add, edit, assign departments, and manage clinician profiles.</p>
            </div>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => handleOpenDoctorModal()}
            >
              Add New Doctor
            </Button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Doctor</th>
                    <th className="p-4">Department</th>
                    <th className="p-4">Specialization</th>
                    <th className="p-4">Consultation Fee</th>
                    <th className="p-4">Availability</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {doctors.map(doc => (
                    <tr key={doc.doctor_id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <ImageWithFallback
                            src={doc.photo_url}
                            alt={doc.name}
                            fallbackType="doctor"
                            className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-200 shrink-0"
                          />
                          <div>
                            <p className="font-bold text-slate-900">{doc.name}</p>
                            <span className="text-[11px] text-slate-400">{doc.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-slate-800">{doc.department_name}</td>
                      <td className="p-4">{doc.specialization}</td>
                      <td className="p-4 font-bold text-slate-900">₹{doc.consultation_fee}</td>
                      <td className="p-4">
                        <Badge variant={doc.available_today ? 'emerald' : 'slate'} size="sm" dot>
                          {doc.available_today ? 'Available Today' : 'Scheduled'}
                        </Badge>
                      </td>
                      <td className="p-4 text-right space-x-1.5 whitespace-nowrap">
                        <Button
                          variant="ghost"
                          size="sm"
                          leftIcon={<Edit className="w-3.5 h-3.5" />}
                          onClick={() => handleOpenDoctorModal(doc)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-rose-600 hover:bg-rose-50"
                          leftIcon={<Trash2 className="w-3.5 h-3.5" />}
                          onClick={() => handleDeleteDoctor(doc.doctor_id, doc.name)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB: DEPARTMENTS CRUD ================= */}
      {activeTab === 'departments' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Hospital Departments ({departments.length})</h3>
              <p className="text-xs text-slate-500">Configure medical divisions, head clinicians, and bed capacities.</p>
            </div>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => handleOpenDeptModal()}
            >
              Add Department
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map(dept => (
              <div
                key={dept.department_id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                      {dept.bed_capacity || 40} Beds
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mt-3">{dept.name}</h4>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    Lead: {dept.head_doctor_name || 'Unassigned'}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{dept.contact_extension}</span>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={() => handleOpenDeptModal(dept)}>
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-rose-600 hover:bg-rose-50"
                      onClick={() => handleDeleteDept(dept.department_id, dept.name)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB: PATIENTS ================= */}
      {activeTab === 'patients' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Registered Patient Registry ({patients.length})</h3>
            <p className="text-xs text-slate-500">View demographic info, blood group, and emergency contacts.</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Patient ID</th>
                    <th className="p-4">Name & Contact</th>
                    <th className="p-4">DOB / Gender</th>
                    <th className="p-4">Blood Group</th>
                    <th className="p-4">Allergies / Conditions</th>
                    <th className="p-4">Emergency Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {patients.map(p => (
                    <tr key={p.patient_id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 font-mono font-bold text-teal-700">
                        #{p.patient_id.toUpperCase()}
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-900">{p.name}</p>
                        <span className="text-[11px] text-slate-400">{p.email} • {p.phone}</span>
                      </td>
                      <td className="p-4">
                        {p.dob} ({p.gender})
                      </td>
                      <td className="p-4">
                        <Badge variant="teal" size="sm">
                          {p.blood_group}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <p className="text-rose-600 font-semibold">{p.allergies || 'None'}</p>
                        <span className="text-[11px] text-slate-500">{p.chronic_conditions || 'None'}</span>
                      </td>
                      <td className="p-4 text-slate-700">{p.emergency_contact || 'None'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB: APPOINTMENTS OVERSIGHT ================= */}
      {activeTab === 'appointments' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Hospital-Wide Appointments ({appointments.length})</h3>
            <p className="text-xs text-slate-500">Live operational overview of all consultations across departments.</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Ref #</th>
                    <th className="p-4">Patient</th>
                    <th className="p-4">Doctor & Department</th>
                    <th className="p-4">Date & Time</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Quick Update</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {appointments.map(a => (
                    <tr key={a.appointment_id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 font-mono font-bold text-slate-900">
                        #{a.appointment_id.toUpperCase()}
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-900">{a.patient_name}</p>
                        <span className="text-[11px] text-slate-400">{a.patient_phone || a.patient_email}</span>
                      </td>
                      <td className="p-4">
                        <p className="font-semibold text-slate-900">{a.doctor_name}</p>
                        <span className="text-[11px] text-slate-400">{a.department_name}</span>
                      </td>
                      <td className="p-4">
                        <p className="font-semibold text-slate-900">{a.date}</p>
                        <span className="text-[11px] text-slate-500">{a.time}</span>
                      </td>
                      <td className="p-4">
                        <Badge
                          variant={
                            a.status === AppointmentStatus.COMPLETED
                              ? 'emerald'
                              : a.status === AppointmentStatus.CANCELLED
                              ? 'rose'
                              : 'amber'
                          }
                          size="sm"
                        >
                          {a.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="p-4 text-right space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={async () => {
                            await ApiService.updateAppointmentStatus(a.appointment_id, AppointmentStatus.COMPLETED);
                            loadAllAdminData();
                          }}
                        >
                          Complete
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-rose-600 hover:bg-rose-50"
                          onClick={async () => {
                            await ApiService.updateAppointmentStatus(a.appointment_id, AppointmentStatus.CANCELLED);
                            loadAllAdminData();
                          }}
                        >
                          Cancel
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB: BILLING & INVOICES ================= */}
      {activeTab === 'billing' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Billing & Financial Invoices</h3>
              <p className="text-xs text-slate-500">Itemized billing records and payment reconciliation.</p>
            </div>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsInvoiceModalOpen(true)}
            >
              Generate Bill
            </Button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Invoice #</th>
                    <th className="p-4">Patient</th>
                    <th className="p-4">Items / Details</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Total Amount</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {invoices.map(inv => (
                    <tr key={inv.invoice_id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 font-mono font-bold text-slate-900">
                        #{inv.invoice_id.toUpperCase()}
                      </td>
                      <td className="p-4 font-bold text-slate-900">{inv.patient_name || inv.patient_id}</td>
                      <td className="p-4 max-w-xs truncate">
                        {inv.items.map(i => i.description).join(', ')}
                      </td>
                      <td className="p-4 text-slate-500">{inv.issue_date}</td>
                      <td className="p-4 font-black text-slate-900">₹{inv.total_amount.toFixed(2)}</td>
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
                        {inv.status === InvoiceStatus.PENDING && (
                          <Button variant="primary" size="sm" onClick={() => handleMarkInvoicePaid(inv.invoice_id)}>
                            Mark Paid
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB: TESTIMONIALS MODERATION ================= */}
      {activeTab === 'testimonials' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Patient Reviews & Feedback Moderation</h3>
            <p className="text-xs text-slate-500">Approve or remove submitted testimonials before they show publicly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div
                key={t.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Badge variant={t.is_approved ? 'emerald' : 'amber'} size="sm">
                      {t.is_approved ? 'Published' : 'Pending Approval'}
                    </Badge>
                  </div>

                  <p className="text-xs text-slate-700 italic mt-2 leading-relaxed">
                    "{t.feedback}"
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{t.patient_name}</h5>
                    <span className="text-[11px] text-slate-400">{t.department_name}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {!t.is_approved && (
                      <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Check className="w-3.5 h-3.5" />}
                        onClick={() => handleApproveTestimonial(t.id)}
                      >
                        Approve
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-rose-600 hover:bg-rose-50"
                      onClick={() => handleDeleteTestimonial(t.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB: INQUIRIES ================= */}
      {activeTab === 'inquiries' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Public Contact Inquiries ({inquiries.length})</h3>
            <p className="text-xs text-slate-500">Messages sent via the Contact page form.</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs">
            <div className="divide-y divide-slate-100">
              {inquiries.map(inq => (
                <div key={inq.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{inq.name}</span>
                      <span className="text-xs text-slate-400">({inq.email})</span>
                      <Badge variant={inq.status === 'replied' ? 'emerald' : 'amber'} size="sm">
                        {inq.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-xs font-semibold text-teal-800">{inq.subject}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{inq.message}</p>
                    <span className="text-[10px] text-slate-400 block pt-1">{inq.created_at}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {inq.status === 'unread' && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleMarkInquiryReplied(inq.id)}
                      >
                        Mark as Replied
                      </Button>
                    )}
                    <a
                      href={`mailto:${inq.email}?subject=Re: ${encodeURIComponent(inq.subject)}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Email Reply
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: DOCTOR CREATE / EDIT ================= */}
      {isDoctorModalOpen && (
        <Modal
          isOpen={isDoctorModalOpen}
          onClose={() => setIsDoctorModalOpen(false)}
          title={editingDoctor ? `Edit Doctor: ${editingDoctor.name}` : 'Add New Specialist Doctor'}
          subtitle="Staff credentials and consultation profiles"
          maxWidth="2xl"
        >
          <form onSubmit={handleSaveDoctor} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Doctor Full Name"
                required
                placeholder="Dr. Alexander Wright, MD"
                value={doctorForm.name}
                onChange={e => setDoctorForm({ ...doctorForm, name: e.target.value })}
              />
              <Input
                label="Email"
                type="email"
                required
                placeholder="doctor@medipulse.org"
                value={doctorForm.email}
                onChange={e => setDoctorForm({ ...doctorForm, email: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Select
                label="Department"
                value={doctorForm.department_id}
                onChange={e => setDoctorForm({ ...doctorForm, department_id: e.target.value })}
                options={departments.map(d => ({ value: d.department_id, label: d.name }))}
              />
              <Input
                label="Specialization"
                required
                placeholder="e.g. Spine Surgery & Joint Replacement"
                value={doctorForm.specialization}
                onChange={e => setDoctorForm({ ...doctorForm, specialization: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input
                label="Qualifications"
                value={doctorForm.qualification}
                onChange={e => setDoctorForm({ ...doctorForm, qualification: e.target.value })}
              />
              <Input
                label="Experience (Years)"
                type="number"
                value={doctorForm.experience_years}
                onChange={e => setDoctorForm({ ...doctorForm, experience_years: Number(e.target.value) })}
              />
              <Input
                label="Fee (₹)"
                type="number"
                value={doctorForm.consultation_fee}
                onChange={e => setDoctorForm({ ...doctorForm, consultation_fee: Number(e.target.value) })}
              />
            </div>

            <Input
              label="Headshot Image URL"
              value={doctorForm.photo_url}
              onChange={e => setDoctorForm({ ...doctorForm, photo_url: e.target.value })}
            />

            <Textarea
              label="Doctor Biography"
              rows={3}
              value={doctorForm.bio}
              onChange={e => setDoctorForm({ ...doctorForm, bio: e.target.value })}
            />

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsDoctorModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="md">
                Save Doctor
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {/* ================= MODAL: DEPARTMENT CREATE / EDIT ================= */}
      {isDeptModalOpen && (
        <Modal
          isOpen={isDeptModalOpen}
          onClose={() => setIsDeptModalOpen(false)}
          title={editingDept ? `Edit Department: ${editingDept.name}` : 'Create Clinical Division'}
          subtitle="Hospital wing and specialty center configuration"
          maxWidth="lg"
        >
          <form onSubmit={handleSaveDept} className="space-y-4">
            <Input
              label="Department Name"
              required
              placeholder="e.g. Oncology & Proton Therapy"
              value={deptForm.name}
              onChange={e => setDeptForm({ ...deptForm, name: e.target.value })}
            />

            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Head Doctor Name"
                placeholder="Dr. Sarah Jenkins, MD"
                value={deptForm.head_doctor_name}
                onChange={e => setDeptForm({ ...deptForm, head_doctor_name: e.target.value })}
              />
              <Input
                label="Bed Capacity"
                type="number"
                value={deptForm.bed_capacity}
                onChange={e => setDeptForm({ ...deptForm, bed_capacity: Number(e.target.value) })}
              />
            </div>

            <Input
              label="Contact Extension"
              value={deptForm.contact_extension}
              onChange={e => setDeptForm({ ...deptForm, contact_extension: e.target.value })}
            />

            <Textarea
              label="Description & Facilities"
              rows={3}
              value={deptForm.description}
              onChange={e => setDeptForm({ ...deptForm, description: e.target.value })}
            />

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsDeptModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="md">
                Save Department
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {/* ================= MODAL: INVOICE GENERATOR ================= */}
      {isInvoiceModalOpen && (
        <Modal
          isOpen={isInvoiceModalOpen}
          onClose={() => setIsInvoiceModalOpen(false)}
          title="Generate Patient Billing Statement"
          subtitle="Create an official itemized medical invoice"
          maxWidth="md"
        >
          <form onSubmit={handleCreateInvoice} className="space-y-4">
            <Select
              label="Select Patient"
              required
              value={invoiceForm.patient_id}
              onChange={e => setInvoiceForm({ ...invoiceForm, patient_id: e.target.value })}
              options={[
                { value: '', label: '-- Choose Patient --' },
                ...patients.map(p => ({ value: p.patient_id, label: `${p.name} (${p.patient_id.toUpperCase()})` }))
              ]}
            />

            <Input
              label="Billing Description"
              required
              value={invoiceForm.description}
              onChange={e => setInvoiceForm({ ...invoiceForm, description: e.target.value })}
            />

            <Input
              label="Invoice Total (₹)"
              type="number"
              required
              value={invoiceForm.amount}
              onChange={e => setInvoiceForm({ ...invoiceForm, amount: Number(e.target.value) })}
            />

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsInvoiceModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="md">
                Issue Invoice
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
