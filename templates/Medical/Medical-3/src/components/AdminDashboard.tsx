import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Users, 
  Activity, 
  BedDouble, 
  Clock, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  FileSpreadsheet, 
  RefreshCw, 
  Calendar,
  MoreVertical,
  ShieldCheck,
  TrendingUp,
  Download
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Appointment, AppointmentStatus } from '../types';

export const AdminDashboard: React.FC = () => {
  const { appointments, updateAppointmentStatus, doctors, departments } = useApp();

  const [tableSearch, setTableSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | AppointmentStatus>('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const filteredAppointments = useMemo(() => {
    return appointments.filter((a) => {
      const q = tableSearch.toLowerCase();
      const matchesQ = !q || (
        a.id.toLowerCase().includes(q) ||
        a.patientName.toLowerCase().includes(q) ||
        a.doctorName.toLowerCase().includes(q) ||
        a.doctorSpecialty.toLowerCase().includes(q)
      );

      const matchesStatus = statusFilter === 'all' || a.status === statusFilter;
      return matchesQ && matchesStatus;
    });
  }, [appointments, tableSearch, statusFilter]);

  const kpis = [
    { label: 'Hospital Bed Occupancy', value: '86.4%', sub: '432 / 500 Inpatient Beds', icon: <BedDouble className="w-5 h-5 text-[#1A535C]" /> },
    { label: 'Average ER Wait Time', value: '11.8 mins', sub: 'Across 3 Aurevia Campuses', icon: <Clock className="w-5 h-5 text-[#1A535C]" /> },
    { label: 'Active Surgical Suites', value: '14 / 16', sub: 'Robotic & Hybrid Cath Labs', icon: <Activity className="w-5 h-5 text-[#1A535C]" /> },
    { label: 'Daily Clinical Flow', value: '1,280', sub: '+9.2% vs Monthly Target', icon: <TrendingUp className="w-5 h-5 text-emerald-600" /> },
  ];

  return (
    <div id="admin-dashboard" className="py-20 sm:py-28 bg-[#FAF9F6] min-h-screen text-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Bento Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-gray-200/90 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A535C]/10 text-[#1A535C] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Enterprise Operations Console</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope']">
              Aurevia Health System Operations
            </h1>
            <p className="text-xs text-[#4A5568] mt-1">
              Centralized clinical intake, bed telemetry, specialist availability, and master appointment ledger.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert('Exporting Master Clinical Ledger to CSV format...')}
              className="px-4 py-2.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-[#0A1128] hover:bg-gray-50 flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#1A535C]" />
              <span>Export CSV</span>
            </button>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              System Online
            </span>
          </div>
        </div>

        {/* Enterprise KPI Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {kpis.map((kpi, i) => (
            <div key={i} className="p-6 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#1A535C]/10 text-[#1A535C] flex items-center justify-center mb-3">
                {kpi.icon}
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope'] mb-0.5">{kpi.value}</p>
              <p className="text-xs font-bold text-[#0A1128] uppercase tracking-wider">{kpi.label}</p>
              <p className="text-[11px] text-[#4A5568] mt-0.5">{kpi.sub}</p>
            </div>
          ))}
        </div>

        {/* Master Appointment Ledger Bento Box */}
        <div className="rounded-[36px] bg-white border border-gray-200/90 shadow-sm overflow-hidden mb-10">
          
          {/* Table Toolbar */}
          <div className="p-6 sm:p-7 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-[#1A535C]" />
              <h3 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                Master Clinical Appointments Ledger ({filteredAppointments.length})
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={tableSearch}
                  onChange={(e) => setTableSearch(e.target.value)}
                  placeholder="Search patient, doctor, or ID..."
                  className="w-full pl-9 pr-3.5 py-2 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-medium text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] outline-hidden"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-3.5 py-2 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-bold text-[#0A1128] outline-hidden cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="confirmed">Confirmed</option>
                <option value="in_consultation">In Consultation</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#0A1128]">
              <thead className="bg-[#FAF9F6] border-b border-gray-200/90 text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em]">
                <tr>
                  <th className="py-4 px-6">ID & Date</th>
                  <th className="py-4 px-6">Patient</th>
                  <th className="py-4 px-6">Specialist</th>
                  <th className="py-4 px-6">Mode</th>
                  <th className="py-4 px-6">Fee</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredAppointments.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-400">
                      No clinical appointments matching this query.
                    </td>
                  </tr>
                ) : (
                  filteredAppointments.map((appt) => (
                    <tr key={appt.id} className="hover:bg-[#FAF9F6]/80 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-mono font-bold text-[#0A1128] block">{appt.id}</span>
                        <span className="text-[11px] text-[#4A5568]">{appt.date} at {appt.timeSlot}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-bold text-[#0A1128] block">{appt.patientName}</span>
                        <span className="text-[11px] text-[#4A5568]">{appt.patientPhone}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-bold text-[#0A1128] block">{appt.doctorName}</span>
                        <span className="text-[11px] text-[#1A535C] font-semibold">{appt.doctorSpecialty}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="capitalize font-semibold text-[#4A5568]">
                          {appt.mode.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-mono font-bold text-[#0A1128]">
                        ₹{appt.fee.toLocaleString('en-IN')}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold capitalize ${
                            appt.status === 'confirmed'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : appt.status === 'in_consultation'
                              ? 'bg-[#1A535C]/10 text-[#1A535C] border border-[#1A535C]/20 animate-pulse'
                              : appt.status === 'completed'
                              ? 'bg-gray-100 text-gray-700 border border-gray-200'
                              : 'bg-rose-50 text-rose-700 border border-rose-200'
                          }`}
                        >
                          {appt.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <select
                          value={appt.status}
                          onChange={(e) => updateAppointmentStatus(appt.id, e.target.value as AppointmentStatus)}
                          className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] font-bold text-[#0A1128] outline-hidden cursor-pointer"
                        >
                          <option value="confirmed">Confirmed</option>
                          <option value="in_consultation">In Consultation</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
