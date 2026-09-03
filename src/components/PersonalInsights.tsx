import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  CalendarDays,
  FileText,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Award,
  PhoneCall,
} from 'lucide-react';
import { UserProfile, MedicalDocument, PreventiveItem } from '../types';

interface PersonalInsightsProps {
  user: UserProfile;
  documents: MedicalDocument[];
  preventionItems: PreventiveItem[];
  onNavigate: (tab: string) => void;
}

export const PersonalInsights: React.FC<PersonalInsightsProps> = ({
  user,
  documents,
  preventionItems,
  onNavigate,
}) => {
  const upcomingCount = preventionItems.filter(i => i.status === 'upcoming' || i.status === 'due_soon').length;
  const vaccinesTotal = preventionItems.filter(i => i.category === 'Vaccination').length;
  const vaccinesDone = preventionItems.filter(i => i.category === 'Vaccination' && i.status === 'completed').length;

  const insights = [
    {
      id: 'ins_1',
      title: 'Vaccination record is 86% complete',
      description: `You have completed ${vaccinesDone} of ${vaccinesTotal} scheduled adult immunizations. Your annual flu shot is up to date.`,
      icon: ShieldCheck,
      color: 'bg-green-50 text-green-800 border-green-200',
      actionLabel: 'View Immunizations',
      targetTab: 'prevention',
      badge: 'High Protection',
    },
    {
      id: 'ins_2',
      title: `You have ${upcomingCount} upcoming preventive checks`,
      description: 'Your Bi-Annual Preventive Dental Checkup is due on June 04. Scheduling early prevents appointment congestion.',
      icon: CalendarDays,
      color: 'bg-[#F5F2ED] text-[#A8904F] border-[#E5E2DD]',
      actionLabel: 'Check Prevention Schedule',
      targetTab: 'prevention',
      badge: 'Due in 3 days',
    },
    {
      id: 'ins_3',
      title: 'Emergency contact information verified',
      description: `Primary contact ${user.emergencyContacts[0]?.name} (${user.emergencyContacts[0]?.phone}) is linked to your First Responder QR card.`,
      icon: PhoneCall,
      color: 'bg-[#F5F2ED] text-[#2D3A2D] border-[#E5E2DD]',
      actionLabel: 'Review Passport',
      targetTab: 'passport',
      badge: 'Active Token',
    },
    {
      id: 'ins_4',
      title: `Document Vault holds ${documents.length} verified records`,
      description: 'All recent blood tests, prescriptions, and dental imaging are backed up with zero-knowledge encryption.',
      icon: FileText,
      color: 'bg-[#F5F2ED] text-[#8A9A5B] border-[#E5E2DD]',
      actionLabel: 'Open Document Vault',
      targetTab: 'documents',
      badge: 'Encrypted',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#A8904F]" />
            <span>Smart Preventive Synthesis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#2D3A2D] mt-1">
            Personal Health Insights
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl border ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#F5F2ED] text-[#5A5A40] border border-[#E5E2DD]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold font-serif text-[#2D3A2D] mt-3 group-hover:text-[#2D3A2D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#5A5A40] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E5E2DD] flex items-center justify-between">
                <button
                  onClick={() => onNavigate(item.targetTab)}
                  className="text-xs font-bold text-[#A8904F] hover:underline flex items-center space-x-1 uppercase tracking-wider"
                >
                  <span>{item.actionLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
