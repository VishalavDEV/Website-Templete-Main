import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { TimelineItem, MedicalReport } from '../types';
import {
  Clock,
  Calendar,
  FileText,
  Pill,
  HeartPulse,
  Activity,
  Search,
  Filter,
  ArrowUpDown,
  Plus,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Eye,
  Download,
  Share2,
  Sparkles,
  Building,
  Stethoscope,
  FileCheck,
  X,
  ShieldCheck,
} from 'lucide-react';

interface CareTimelineProps {
  timeline: TimelineItem[];
  reports: MedicalReport[];
  onAddTimelineItem?: (item: TimelineItem) => void;
  onNavigateTab?: (tab: 'overview' | 'appointments' | 'prescriptions' | 'reports' | 'timeline' | 'messages' | 'profile') => void;
}

export const CareTimeline: React.FC<CareTimelineProps> = ({
  timeline,
  reports,
  onAddTimelineItem,
  onNavigateTab,
}) => {
  const { openReport, openBooking, showToast } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [expandedItemIds, setExpandedItemIds] = useState<Record<string, boolean>>({});
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  // Form state for logging custom patient event
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventCategory, setNewEventCategory] = useState<'appointment' | 'report' | 'prescription' | 'procedure'>('appointment');
  const [newEventDate, setNewEventDate] = useState(new Date().toISOString().split('T')[0]);
  const [newEventDoctor, setNewEventDoctor] = useState('Dr. Sophia Chen-Vance');
  const [newEventLocation, setNewEventLocation] = useState('Aura Central Medical Pavilion');
  const [newEventDescription, setNewEventDescription] = useState('');
  const [newEventNotes, setNewEventNotes] = useState('');
  const [newEventMetricLabel, setNewEventMetricLabel] = useState('');
  const [newEventMetricValue, setNewEventMetricValue] = useState('');

  // Toggle expanded details
  const toggleExpand = (id: string) => {
    setExpandedItemIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculate relative time string from ISO date or approximate date
  const getRelativeTime = (isoDate?: string, dateStr?: string): string => {
    if (!isoDate && !dateStr) return 'Past Record';
    try {
      const targetDate = isoDate ? new Date(isoDate) : new Date(dateStr!);
      const now = new Date('2026-08-23T22:00:00Z');
      const diffTime = Math.abs(now.getTime() - targetDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays <= 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
      }
      if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
      }
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } catch {
      return 'Past Record';
    }
  };

  // Get month group header string (e.g. "August 2026")
  const getMonthGroup = (item: TimelineItem): string => {
    if (item.isoDate) {
      const d = new Date(item.isoDate);
      return d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    }
    const parts = item.date.split(' ');
    if (parts.length >= 3) {
      const monthMap: Record<string, string> = {
        Jan: 'January',
        Feb: 'February',
        Mar: 'March',
        Apr: 'April',
        May: 'May',
        Jun: 'June',
        Jul: 'July',
        Aug: 'August',
        Sep: 'September',
        Oct: 'October',
        Nov: 'November',
        Dec: 'December',
      };
      const m = monthMap[parts[0]] || parts[0];
      return `${m} ${parts[2]}`;
    }
    return item.date;
  };

  // Filtered & Sorted Timeline Items
  const filteredTimeline = useMemo(() => {
    let list = [...timeline];

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.doctorName.toLowerCase().includes(q) ||
          (item.doctorSpecialty && item.doctorSpecialty.toLowerCase().includes(q)) ||
          (item.location && item.location.toLowerCase().includes(q)) ||
          (item.notes && item.notes.toLowerCase().includes(q)) ||
          (item.keyMetrics && item.keyMetrics.some((m) => m.label.toLowerCase().includes(q) || m.value.toLowerCase().includes(q)))
      );
    }

    // Filter by Category
    if (selectedCategory !== 'all') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    // Sort order
    list.sort((a, b) => {
      const timeA = a.isoDate ? new Date(a.isoDate).getTime() : 0;
      const timeB = b.isoDate ? new Date(b.isoDate).getTime() : 0;
      return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
    });

    return list;
  }, [timeline, searchQuery, selectedCategory, sortOrder]);

  // Group items by Month & Year for visual passage of time
  const groupedTimeline = useMemo(() => {
    const groups: { monthYear: string; items: TimelineItem[] }[] = [];
    const map = new Map<string, TimelineItem[]>();

    for (const item of filteredTimeline) {
      const groupName = getMonthGroup(item);
      if (!map.has(groupName)) {
        map.set(groupName, []);
        groups.push({ monthYear: groupName, items: map.get(groupName)! });
      }
      map.get(groupName)!.push(item);
    }

    return groups;
  }, [filteredTimeline]);

  // Category counts
  const categoryCounts = useMemo(() => {
    return {
      all: timeline.length,
      appointment: timeline.filter((t) => t.category === 'appointment').length,
      report: timeline.filter((t) => t.category === 'report').length,
      prescription: timeline.filter((t) => t.category === 'prescription').length,
      procedure: timeline.filter((t) => t.category === 'procedure').length,
    };
  }, [timeline]);

  // Handle logging new event
  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim()) {
      showToast('Please enter an event title', 'error');
      return;
    }

    const d = new Date(newEventDate);
    const formattedDate = d.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });

    const newItem: TimelineItem = {
      id: `tl-custom-${Date.now()}`,
      title: newEventTitle.trim(),
      category: newEventCategory,
      date: formattedDate,
      isoDate: newEventDate,
      time: '10:00 AM',
      doctorName: newEventDoctor,
      doctorSpecialty: 'Clinical Health Entry',
      location: newEventLocation,
      description: newEventDescription.trim() || 'Patient self-recorded clinical timeline entry.',
      notes: newEventNotes.trim() || undefined,
      statusBadge: 'Self-Logged Record',
      keyMetrics:
        newEventMetricLabel && newEventMetricValue
          ? [{ label: newEventMetricLabel.trim(), value: newEventMetricValue.trim(), isOptimal: true }]
          : undefined,
    };

    if (onAddTimelineItem) {
      onAddTimelineItem(newItem);
    }

    setIsLogModalOpen(false);
    setNewEventTitle('');
    setNewEventDescription('');
    setNewEventNotes('');
    setNewEventMetricLabel('');
    setNewEventMetricValue('');
    showToast('Care timeline milestone added successfully', 'success');
  };

  // Helper for Category styling & icons
  const getCategoryMeta = (category: string) => {
    switch (category) {
      case 'appointment':
        return {
          label: 'Past Appointment',
          icon: Calendar,
          pillBg: 'bg-[#E8DDF2]',
          pillText: 'text-[#665080]',
          border: 'border-[#8B6FAE]/30',
          dotBg: 'bg-[#8B6FAE]',
          glow: 'shadow-[0_0_12px_rgba(139,111,174,0.4)]',
        };
      case 'report':
        return {
          label: 'Uploaded Report',
          icon: FileCheck,
          pillBg: 'bg-[#739B82]/15',
          pillText: 'text-[#739B82]',
          border: 'border-[#739B82]/30',
          dotBg: 'bg-[#739B82]',
          glow: 'shadow-[0_0_12px_rgba(115,155,130,0.4)]',
        };
      case 'prescription':
        return {
          label: 'Prescription Renewal',
          icon: Pill,
          pillBg: 'bg-[#F2D9DF]',
          pillText: 'text-[#C77C83]',
          border: 'border-[#C77C83]/30',
          dotBg: 'bg-[#C77C83]',
          glow: 'shadow-[0_0_12px_rgba(199,124,131,0.4)]',
        };
      case 'procedure':
      default:
        return {
          label: 'Diagnostic / Procedure',
          icon: HeartPulse,
          pillBg: 'bg-[#B9A1D0]/20',
          pillText: 'text-[#665080]',
          border: 'border-[#8B6FAE]/30',
          dotBg: 'bg-[#665080]',
          glow: 'shadow-[0_0_12px_rgba(102,80,128,0.4)]',
        };
    }
  };

  // Handle action click
  const handleItemAction = (item: TimelineItem) => {
    if (item.category === 'report' || item.targetId?.startsWith('rep-')) {
      const foundReport = reports.find((r) => r.id === item.targetId) || reports[0];
      if (foundReport) {
        openReport(foundReport);
        return;
      }
    }

    if (item.category === 'prescription' || item.targetId?.startsWith('rx-')) {
      if (onNavigateTab) {
        onNavigateTab('prescriptions');
        showToast('Viewing active prescription details in portal', 'info');
      }
      return;
    }

    if (item.category === 'appointment') {
      openBooking();
      return;
    }

    showToast(`Viewing details for ${item.title}`, 'info');
  };

  const handleExportHistory = () => {
    showToast('Exporting comprehensive Care Timeline (PDF) for Alexander Claire...', 'success');
  };

  return (
    <div id="care-timeline-container" className="space-y-8">
      {/* Header Banner & Care Continuum Summary */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#3E3445]/8 shadow-[0_4px_25px_rgba(90,70,110,0.04)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-[11px] font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#8B6FAE]" />
              <span>Patient Longitudinal Care Continuum</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3E3445]">
              Care Timeline & Clinical History
            </h2>
            <p className="text-xs sm:text-sm text-[#756B7C] max-w-2xl leading-relaxed">
              Chronological ledger tracking past specialist consultations, synchronized laboratory reports,
              renewed prescriptions, and non-invasive diagnostic scans across your health journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              id="timeline-export-pdf-btn"
              onClick={handleExportHistory}
              className="px-4 py-2.5 bg-[#F9F7FB] hover:bg-[#E8DDF2]/60 text-[#3E3445] border border-[#3E3445]/15 font-semibold text-xs rounded-full transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#8B6FAE]" />
              <span>Export History (.PDF)</span>
            </button>

            <button
              id="timeline-add-event-btn"
              onClick={() => setIsLogModalOpen(true)}
              className="px-5 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white font-semibold text-xs rounded-full shadow-[0_4px_14px_rgba(139,111,174,0.3)] transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Log Health Event</span>
            </button>
          </div>
        </div>

        {/* Milestone Quick Summary Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#3E3445]/8">
          <div className="p-3 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/5">
            <div className="text-[11px] text-[#756B7C]">Recorded Milestones</div>
            <div className="font-serif text-lg font-bold text-[#3E3445]">{timeline.length} Events</div>
          </div>
          <div className="p-3 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/5">
            <div className="text-[11px] text-[#756B7C]">Diagnostic Lab Syncs</div>
            <div className="font-serif text-lg font-bold text-[#739B82]">{categoryCounts.report} Verified</div>
          </div>
          <div className="p-3 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/5">
            <div className="text-[11px] text-[#756B7C]">Completed Visits</div>
            <div className="font-serif text-lg font-bold text-[#665080]">{categoryCounts.appointment} Consultations</div>
          </div>
          <div className="p-3 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/5">
            <div className="text-[11px] text-[#756B7C]">Active Protocols</div>
            <div className="font-serif text-lg font-bold text-[#C77C83]">{categoryCounts.prescription} Dispensed</div>
          </div>
        </div>
      </div>

      {/* Interactive Filter & Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-[#3E3445]/8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'All Records', count: categoryCounts.all },
            { id: 'appointment', label: 'Appointments', count: categoryCounts.appointment },
            { id: 'report', label: 'Lab Reports', count: categoryCounts.report },
            { id: 'prescription', label: 'Prescriptions', count: categoryCounts.prescription },
            { id: 'procedure', label: 'Diagnostics', count: categoryCounts.procedure },
          ].map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`timeline-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#665080] text-white shadow-xs'
                    : 'bg-white text-[#756B7C] hover:text-[#3E3445] border border-[#3E3445]/8'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#F9F7FB] text-[#756B7C]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Sort */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#756B7C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="timeline-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search biomarkers, doctors..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#756B7C] hover:text-[#3E3445]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            id="timeline-sort-order-btn"
            onClick={() => setSortOrder((prev) => (prev === 'newest' ? 'oldest' : 'newest'))}
            className="px-3 py-1.5 bg-white border border-[#3E3445]/15 text-xs text-[#3E3445] font-semibold rounded-xl flex items-center gap-1 hover:border-[#8B6FAE] transition-colors"
            title={`Sort: ${sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}`}
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8B6FAE]" />
            <span className="hidden sm:inline">{sortOrder === 'newest' ? 'Newest' : 'Oldest'}</span>
          </button>
        </div>
      </div>

      {/* Visual Chronological Timeline Rail */}
      {filteredTimeline.length === 0 ? (
        <div className="lilac-card p-12 text-center bg-white rounded-3xl">
          <Clock className="w-12 h-12 text-[#B9A1D0] mx-auto mb-3 opacity-60" />
          <h3 className="font-serif text-lg font-bold text-[#3E3445]">No Timeline Events Found</h3>
          <p className="text-xs text-[#756B7C] max-w-md mx-auto mb-4">
            {searchQuery
              ? `No events matching "${searchQuery}". Try clearing search or resetting category filters.`
              : 'No clinical events recorded for this category.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-5 py-2 bg-[#8B6FAE] text-white text-xs font-semibold rounded-full"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {groupedTimeline.map((group, groupIdx) => (
            <div key={group.monthYear} className="space-y-6">
              {/* Group Month Break Header */}
              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-[#8B6FAE]" />
                  <span>{group.monthYear}</span>
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#8B6FAE]/30 via-[#E8DDF2] to-transparent" />
                <span className="text-[11px] text-[#756B7C] font-mono">
                  {group.items.length} {group.items.length === 1 ? 'Milestone' : 'Milestones'}
                </span>
              </div>

              {/* Vertical Chronological Track */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-gradient-to-b border-[#E8DDF2] space-y-6">
                {group.items.map((item, itemIdx) => {
                  const meta = getCategoryMeta(item.category);
                  const Icon = meta.icon;
                  const isExpanded = !!expandedItemIds[item.id];
                  const relativeTime = getRelativeTime(item.isoDate, item.date);

                  return (
                    <div
                      key={item.id}
                      id={`timeline-card-${item.id}`}
                      className="relative group transition-all"
                    >
                      {/* Chronological Node Bullet on the track */}
                      <div
                        className={`absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full ${meta.dotBg} border-4 border-white shadow-sm flex items-center justify-center transition-transform group-hover:scale-125 z-10`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>

                      {/* Main Timeline Card */}
                      <div className="lilac-card p-6 sm:p-7 rounded-3xl bg-white border border-[#3E3445]/8 shadow-[0_4px_20px_rgba(90,70,110,0.05)] hover:shadow-[0_8px_30px_rgba(90,70,110,0.08)] transition-all space-y-4">
                        {/* Top Metadata Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#3E3445]/6">
                          <div className="flex flex-wrap items-center gap-2">
                            {/* Category Pill */}
                            <div
                              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${meta.pillBg} ${meta.pillText}`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                              <span>{meta.label}</span>
                            </div>

                            {/* Status Badge */}
                            {item.statusBadge && (
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#739B82]/15 text-[#739B82]">
                                {item.statusBadge}
                              </span>
                            )}
                          </div>

                          {/* Date & Relative Time */}
                          <div className="flex items-center gap-2 text-xs text-[#756B7C]">
                            <span className="font-mono font-bold text-[#3E3445]">
                              {item.date} {item.time && `• ${item.time}`}
                            </span>
                            <span>•</span>
                            <span className="px-2 py-0.5 rounded-full bg-[#F9F7FB] text-[11px] font-medium text-[#8B6FAE] border border-[#3E3445]/6">
                              {relativeTime}
                            </span>
                          </div>
                        </div>

                        {/* Title & Specialist Info */}
                        <div className="space-y-1">
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3E3445] leading-snug">
                            {item.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#756B7C] pt-0.5">
                            <span className="font-semibold text-[#665080] flex items-center gap-1">
                              <Stethoscope className="w-3.5 h-3.5 text-[#8B6FAE]" />
                              <span>{item.doctorName}</span>
                            </span>
                            {item.doctorSpecialty && (
                              <>
                                <span>•</span>
                                <span>{item.doctorSpecialty}</span>
                              </>
                            )}
                            {item.location && (
                              <>
                                <span>•</span>
                                <span className="flex items-center gap-1 text-[#756B7C]">
                                  <Building className="w-3.5 h-3.5 text-[#8B6FAE]" />
                                  <span>{item.location}</span>
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Clinical Summary Narrative */}
                        <p className="text-xs sm:text-sm text-[#756B7C] leading-relaxed">
                          {item.description}
                        </p>

                        {/* Key Biomarkers & Metrics Tags (If present) */}
                        {item.keyMetrics && item.keyMetrics.length > 0 && (
                          <div className="pt-2">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#8B6FAE] mb-2 flex items-center gap-1">
                              <Activity className="w-3.5 h-3.5" />
                              <span>Clinical Parameters & Findings:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.keyMetrics.map((metric, mIdx) => (
                                <div
                                  key={mIdx}
                                  className="px-3 py-1.5 rounded-xl bg-[#F9F7FB] border border-[#3E3445]/8 text-xs flex items-center gap-2"
                                >
                                  <span className="text-[#756B7C] font-medium">{metric.label}:</span>
                                  <span className="font-bold text-[#3E3445]">{metric.value}</span>
                                  {metric.isOptimal && (
                                    <CheckCircle2 className="w-3 h-3 text-[#739B82]" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Expandable Notes & Recommendations Drawer */}
                        {item.notes && isExpanded && (
                          <div className="p-4 rounded-2xl bg-[#E8DDF2]/30 border border-[#8B6FAE]/20 text-xs text-[#3E3445] space-y-1.5 animate-fadeIn">
                            <div className="font-bold text-[#665080] flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#8B6FAE]" />
                              <span>Physician Clinical Notes & Recommendations</span>
                            </div>
                            <p className="text-[#756B7C] leading-relaxed">{item.notes}</p>
                          </div>
                        )}

                        {/* Action Buttons Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#3E3445]/6">
                          <div className="flex items-center gap-2">
                            {item.actionText && (
                              <button
                                id={`timeline-action-btn-${item.id}`}
                                onClick={() => handleItemAction(item)}
                                className="px-4 py-2 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-xl shadow-2xs transition-colors flex items-center gap-1.5"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>{item.actionText}</span>
                              </button>
                            )}

                            {item.notes && (
                              <button
                                onClick={() => toggleExpand(item.id)}
                                className="px-3.5 py-2 bg-[#F9F7FB] hover:bg-[#E8DDF2]/50 text-xs font-semibold text-[#665080] rounded-xl transition-colors flex items-center gap-1"
                              >
                                <span>{isExpanded ? 'Hide Notes' : 'Clinical Notes'}</span>
                                {isExpanded ? (
                                  <ChevronUp className="w-3.5 h-3.5" />
                                ) : (
                                  <ChevronDown className="w-3.5 h-3.5" />
                                )}
                              </button>
                            )}
                          </div>

                          <span className="text-[11px] text-[#756B7C] font-mono opacity-75">
                            ID: {item.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Log Custom Health Event Modal */}
      {isLogModalOpen && (
        <div
          id="log-event-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#3E3445]/10 p-6 sm:p-8 space-y-5 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-[#3E3445]/8">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8DDF2] text-[#665080] flex items-center justify-center">
                  <Plus className="w-5 h-5 text-[#8B6FAE]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3E3445]">
                    Log Personal Health Milestone
                  </h3>
                  <p className="text-xs text-[#756B7C]">
                    Add past clinical milestones, outside reports, or home telemetry.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLogModalOpen(false)}
                className="p-2 rounded-xl text-[#756B7C] hover:bg-[#F9F7FB] hover:text-[#3E3445] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#3E3445] mb-1">
                  Event / Milestone Title *
                </label>
                <input
                  type="text"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  placeholder="e.g., Annual Influenza Vaccination or Home BP Check"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">
                    Event Category
                  </label>
                  <select
                    value={newEventCategory}
                    onChange={(e) => setNewEventCategory(e.target.value as any)}
                    className="w-full px-3 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                  >
                    <option value="appointment">Past Appointment</option>
                    <option value="report">Lab / Diagnostic Report</option>
                    <option value="prescription">Prescription / Medication</option>
                    <option value="procedure">Procedure / Vaccination</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">Date *</label>
                  <input
                    type="date"
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    required
                    className="w-full px-3 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                  >
                  </input>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">
                    Attending Physician / Provider
                  </label>
                  <input
                    type="text"
                    value={newEventDoctor}
                    onChange={(e) => setNewEventDoctor(e.target.value)}
                    placeholder="e.g. Dr. Sophia Chen-Vance"
                    className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">
                    Facility / Clinic Location
                  </label>
                  <input
                    type="text"
                    value={newEventLocation}
                    onChange={(e) => setNewEventLocation(e.target.value)}
                    placeholder="e.g. Aura Medical Pavilion"
                    className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E3445] mb-1">
                  Clinical Summary
                </label>
                <textarea
                  rows={2}
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)}
                  placeholder="Brief description of consultation outcome, vaccination dosage, or lab result..."
                  className="w-full px-3.5 py-2 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">
                    Optional Metric (e.g. Blood Pressure)
                  </label>
                  <input
                    type="text"
                    value={newEventMetricLabel}
                    onChange={(e) => setNewEventMetricLabel(e.target.value)}
                    placeholder="Parameter (e.g., BP)"
                    className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/15 rounded-xl text-xs text-[#3E3445] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">
                    Measured Value
                  </label>
                  <input
                    type="text"
                    value={newEventMetricValue}
                    onChange={(e) => setNewEventMetricValue(e.target.value)}
                    placeholder="Value (e.g., 120/80 mmHg)"
                    className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/15 rounded-xl text-xs text-[#3E3445] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-[#3E3445]/8">
                <button
                  type="button"
                  onClick={() => setIsLogModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#756B7C] hover:bg-[#F9F7FB] rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  id="submit-log-event-btn"
                  type="submit"
                  className="px-6 py-2 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-xs transition-colors"
                >
                  Save to Timeline
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
