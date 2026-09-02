import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  Video, 
  Building, 
  Home, 
  ShieldCheck, 
  Star, 
  FileText, 
  Sparkles,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { 
  HealthcareProfessional, 
  Appointment, 
  NavigationTab 
} from '../../types';

interface AppointmentsViewProps {
  doctors?: HealthcareProfessional[];
  upcomingAppointments?: Appointment[];
  pastAppointments?: Appointment[];
  appointments?: Appointment[];
  onBookDoctor?: (doctor: HealthcareProfessional) => void;
  onOpenBookModal?: (doctor?: HealthcareProfessional) => void;
  onJoinVideoCall?: (appointment: Appointment) => void;
  onStartVideoConsult?: (appointment: Appointment) => void;
  onCancelAppointment?: (id: string) => void;
  onNavigate?: (tab: NavigationTab) => void;
}

export const AppointmentsView: React.FC<AppointmentsViewProps> = ({
  doctors = [],
  upcomingAppointments,
  pastAppointments,
  appointments = [],
  onBookDoctor,
  onOpenBookModal,
  onJoinVideoCall,
  onStartVideoConsult,
  onCancelAppointment,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'find' | 'upcoming' | 'past'>('find');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setFeedbackToast(msg);
    setTimeout(() => setFeedbackToast(null), 3000);
  };

  // Derive upcoming and past lists safely
  const resolvedUpcoming = upcomingAppointments || appointments.filter(a => a.status === 'confirmed' || a.status === 'upcoming' || a.status === 'pending');
  const resolvedPast = pastAppointments || appointments.filter(a => a.status === 'completed' || a.status === 'cancelled');

  const specialties = [
    'All',
    'Cardiology',
    'Dermatology',
    'General Medicine',
    'Psychiatry',
    'Endocrinology',
    'Pediatrics',
    'Orthopedics',
    'Nutrition & Dietetics',
  ];

  const filteredDoctors = (doctors || []).filter((doc) => {
    if (!doc) return false;
    const name = doc.name || '';
    const specialty = doc.specialty || '';
    const about = doc.about || '';
    const hospital = doc.hospitalAffiliation || '';
    const query = (searchQuery || '').toLowerCase();

    const matchesSearch = name.toLowerCase().includes(query) ||
                          specialty.toLowerCase().includes(query) ||
                          about.toLowerCase().includes(query) ||
                          hospital.toLowerCase().includes(query);
    
    const matchesSpecialty = selectedSpecialty === 'All' || specialty.toLowerCase() === (selectedSpecialty || '').toLowerCase();
    const matchesFormat = selectedFormat === 'all' || (Array.isArray(doc.consultationTypes) && doc.consultationTypes.includes(selectedFormat as any));

    return matchesSearch && matchesSpecialty && matchesFormat;
  });

  const handleBook = (doc: HealthcareProfessional) => {
    if (onBookDoctor) {
      onBookDoctor(doc);
    } else if (onOpenBookModal) {
      onOpenBookModal(doc);
    }
  };

  const handleJoin = (apt: Appointment) => {
    if (onJoinVideoCall) {
      onJoinVideoCall(apt);
    } else if (onStartVideoConsult) {
      onStartVideoConsult(apt);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F7F3] border border-[#00A884]/20 text-[#00A884] text-xs font-semibold">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Certified Clinical Specialists</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Doctor Consultations & Appointments
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Connect with leading physicians via encrypted high-definition video, in-clinic physical evaluations, or schedule home visits.
          </p>
        </div>

        <button
          onClick={() => handleBook(doctors[0])}
          className="px-5 py-3 bg-[#00A884] hover:bg-[#009272] text-white rounded-2xl text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book New Appointment</span>
        </button>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex items-center space-x-2 border-b border-[#E2E8F0] pb-2">
        <button
          onClick={() => setActiveTab('find')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'find'
              ? 'bg-[#00A884] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Find a Doctor ({doctors.length})
        </button>
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
            activeTab === 'upcoming'
              ? 'bg-[#00A884] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <span>Upcoming Visits</span>
          {resolvedUpcoming.length > 0 && (
            <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'upcoming' ? 'bg-white text-[#00A884]' : 'bg-[#E6F7F3] text-[#00A884]'}`}>
              {resolvedUpcoming.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'past'
              ? 'bg-[#00A884] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Past Consultations ({resolvedPast.length})
        </button>
      </div>

      {/* 1. FIND A DOCTOR TAB */}
      {activeTab === 'find' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search doctor by name, specialty, hospital or condition..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#00A884] outline-none"
                />
              </div>

              {/* Format Filter */}
              <div className="flex items-center space-x-1 bg-[#F8FAFC] p-1 rounded-xl border border-[#E2E8F0]">
                <button
                  onClick={() => setSelectedFormat('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedFormat === 'all' ? 'bg-white text-slate-800 shadow-xs border border-slate-200' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedFormat('video')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center space-x-1 cursor-pointer ${
                    selectedFormat === 'video' ? 'bg-[#00A884] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Video</span>
                </button>
                <button
                  onClick={() => setSelectedFormat('in-person')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center space-x-1 cursor-pointer ${
                    selectedFormat === 'in-person' ? 'bg-[#00A884] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>In-Clinic</span>
                </button>
              </div>
            </div>

            {/* Specialty Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
              {specialties.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedSpecialty === spec
                      ? 'bg-[#00A884] text-white'
                      : 'bg-[#F8FAFC] border border-[#E2E8F0] text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl border border-[#E2E8F0] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Doctor Card Top */}
                  <div className="flex items-start space-x-3.5">
                    <img 
                      src={doc.avatar} 
                      alt={doc.name} 
                      className="w-16 h-16 rounded-2xl object-cover border border-slate-100 shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">{doc.name}</h3>
                        <ShieldCheck className="w-4 h-4 text-[#00A884] shrink-0" />
                      </div>
                      <p className="text-xs font-semibold text-[#00A884] truncate">{doc.title || doc.specialty}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5 truncate">{doc.hospitalAffiliation}</p>
                    </div>
                  </div>

                  {/* Rating & Exp Row */}
                  <div className="flex items-center space-x-3 text-xs text-slate-600 bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-100">
                    <div className="flex items-center space-x-1 font-bold text-slate-800">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.rating}</span>
                      <span className="text-slate-400 font-normal">({doc.reviewsCount})</span>
                    </div>
                    <span>•</span>
                    <span>{doc.experience} Exp</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {doc.about || `${doc.name} is a specialist in ${doc.specialty} providing comprehensive diagnostic evaluations and tailored care protocols.`}
                  </p>

                  {/* Available Consultation Formats */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {doc.consultationTypes?.includes('video') && (
                      <span className="px-2 py-0.5 bg-[#E6F7F3] text-[#00A884] border border-[#00A884]/20 rounded-md text-[10px] font-semibold flex items-center gap-1">
                        <Video className="w-3 h-3" /> Video HD
                      </span>
                    )}
                    {doc.consultationTypes?.includes('in-person') && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-md text-[10px] font-semibold flex items-center gap-1">
                        <Building className="w-3 h-3" /> In-Clinic
                      </span>
                    )}
                    {doc.consultationTypes?.includes('home') && (
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-md text-[10px] font-semibold flex items-center gap-1">
                        <Home className="w-3 h-3" /> Home Visit
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer / Booking */}
                <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Consultation Fee</span>
                    <span className="text-sm font-bold text-slate-800">{doc.fee}</span>
                  </div>

                  <button
                    onClick={() => handleBook(doc)}
                    className="px-4 py-2 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Visit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. UPCOMING VISITS TAB */}
      {activeTab === 'upcoming' && (
        <div className="space-y-4">
          {resolvedUpcoming.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {resolvedUpcoming.map((apt) => {
                const docName = apt.doctorName || apt.doctor?.name || 'Dr. Specialist';
                const docSpec = apt.doctorSpecialty || apt.doctor?.specialty || 'General Practitioner';
                const docAvatar = apt.doctorAvatar || apt.doctor?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80';

                return (
                  <div
                    key={apt.id}
                    className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-[#E6F7F3] text-[#00A884] text-[10px] font-bold rounded-full border border-[#00A884]/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00A884] animate-pulse" />
                          Confirmed Appointment
                        </span>
                        <span className="text-xs text-slate-400 font-mono">ID #{apt.id.slice(-6)}</span>
                      </div>

                      <div className="flex items-center space-x-3.5">
                        <img 
                          src={docAvatar} 
                          alt={docName} 
                          className="w-14 h-14 rounded-2xl object-cover border border-slate-100"
                        />
                        <div>
                          <h3 className="text-base font-bold text-slate-800">{docName}</h3>
                          <p className="text-xs text-[#00A884] font-semibold">{docSpec}</p>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-slate-100 space-y-1.5 text-xs text-slate-700">
                        <div className="flex items-center space-x-2 font-medium">
                          <Clock className="w-4 h-4 text-[#00A884]" />
                          <span>{apt.date} • {apt.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-500">
                          <Video className="w-4 h-4 text-[#00A884]" />
                          <span className="capitalize">{apt.type} Format</span>
                        </div>
                        {apt.notes && (
                          <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-200">
                            Notes: {apt.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => handleJoin(apt)}
                        className="flex-1 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <Video className="w-4 h-4" />
                        <span>Join HD Video Room</span>
                      </button>
                      {onCancelAppointment && (
                        <button
                          onClick={() => onCancelAppointment(apt.id)}
                          className="py-2.5 px-3 bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-600 rounded-xl text-xs font-semibold border border-slate-200 hover:border-rose-200 transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-12 text-center space-y-3">
              <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No upcoming consultations</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Schedule a routine checkup, dermatology consultation, or lab report review with our specialists.
              </p>
              <button
                onClick={() => setActiveTab('find')}
                className="px-5 py-2.5 bg-[#00A884] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                Browse Available Doctors
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3. PAST CONSULTATIONS & RX */}
      {activeTab === 'past' && (
        <div className="space-y-4">
          {resolvedPast.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {resolvedPast.map((apt) => {
                const docName = apt.doctorName || apt.doctor?.name || 'Dr. Specialist';
                const docSpec = apt.doctorSpecialty || apt.doctor?.specialty || 'General Practitioner';
                const docAvatar = apt.doctorAvatar || apt.doctor?.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80';

                return (
                  <div
                    key={apt.id}
                    className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold rounded-full">
                        {apt.status === 'cancelled' ? 'Cancelled' : 'Completed'} • {apt.date}
                      </span>
                      {apt.status !== 'cancelled' && (
                        <span className="text-xs text-[#00A884] font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Digital Rx Verified
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-3.5">
                      <img 
                        src={docAvatar} 
                        alt={docName} 
                        className="w-12 h-12 rounded-2xl object-cover border border-slate-100"
                      />
                      <div>
                        <h3 className="text-sm font-bold text-slate-800">{docName}</h3>
                        <p className="text-xs text-[#00A884] font-semibold">{docSpec}</p>
                      </div>
                    </div>

                    {apt.doctorNotes && (
                      <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-xs text-slate-700 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Doctor's Clinical Notes</span>
                        <p className="leading-relaxed">{apt.doctorNotes}</p>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1 text-xs">
                      {onNavigate && (
                        <button
                          onClick={() => onNavigate('pharmacy')}
                          className="text-[#00A884] hover:text-[#009272] font-bold flex items-center space-x-1 cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>View Prescribed Meds in Pharmacy →</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          const doc = doctors.find(d => d.id === apt.doctorId) || docName ? { name: docName, specialty: docSpec, avatar: docAvatar } as any : doctors[0];
                          handleBook(doc);
                        }}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-xl font-semibold cursor-pointer"
                      >
                        Book Follow-up
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-12 text-center space-y-3">
              <Clock className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No past consultations on record</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Completed consultations with attached digital prescriptions and physician notes will appear here.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Floating feedback */}
      {feedbackToast && (
        <div className="fixed bottom-20 right-6 bg-slate-900 text-white text-xs px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 animate-in fade-in">
          {feedbackToast}
        </div>
      )}

    </div>
  );
};
